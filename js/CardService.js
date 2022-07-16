var CardService = {
    cardId:"",
    init: function(){
      $.ajax({
          type: "GET",
          url: 'rest/random/' ,
          contentType: "application/json",
          dataType: "json",
          beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', localStorage.getItem("token"));
        },


          success: function (data) {
            cardId = data.id;
            console.log(cardId);
            var HTML="";
            HTML+=`<div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img src="./images/cardback.png" alt="card" style="width:280px;height:450px;">
                </div>
                <div class="flip-card-back">
                <input id="shownCard" type="image" src="images/cards/`+data.id+`.jpg" alt="card" style="width:280px;height:450px;">
                </div>
              </div>
            </div>`
            $("#cardContainer").html(HTML);
            $(document).ready(function() {
              $('#shownCard').click(function() {
                CardService.ShowMeaning(data.id);
        });
    });
          },


          error: function (XMLHttpRequest, textStatus, errorThrown) {
              //console.log(data);
              //toastr.error("error");
              console.log("bad")
              console.log(errorThrown);
              console.log(textStatus);
              console.log(JSON.stringify(XMLHttpRequest));
              console.log(JSON.stringify(XMLHttpRequest.responseJSON));
              console.log(JSON.stringify(XMLHttpRequest.responseJSON.message));
          }
      });

    },
ShowMeaning: function(id){
  $.ajax({
      type: "GET",
      url: 'rest/card/'+id,
      contentType: "application/json",
      dataType: "json",

      beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', localStorage.getItem("token"));
    },

      success: function (data) {

        var HTML="";
        HTML+=`
            <img src="./images/cards/`+id+`.jpg" alt="card" style="width:280px;height:450px;">
            <p>`+data.CardName+`</p>
            <p>`+data.CardDescription+`</p>
            <p>`+data.Keyword+`</p>
            `
        $("#card").html(HTML);
          document.getElementById("cardContainer").classList.add('d-none');
          document.getElementById("card").classList.remove('d-none');
          document.getElementById("addtofavorite").classList.remove('d-none');
      },


      error: function (XMLHttpRequest, textStatus, errorThrown) {
          //console.log(data);
          //toastr.error("error");
          console.log("bad")
          console.log(errorThrown);
          console.log(textStatus);
          console.log(JSON.stringify(XMLHttpRequest));
          console.log(JSON.stringify(XMLHttpRequest.responseJSON));
          console.log(JSON.stringify(XMLHttpRequest.responseJSON.message));
      }
  });

}

}
