var MeaningService = {
    init: function(){
      $.ajax({
          type: "GET",
          url: 'rest/card/1',
          contentType: "application/json",
          dataType: "json",
          beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', localStorage.getItem("token"));
        },

          success: function (data) {
            var HTML="";
            HTML+=`
                <p>`+data.CardName+`</p>
                <p>`+data.CardDescription+`</p>
                <p>`+data.Keyword+`</p>
                `
            $("#card").html(HTML);
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

}
