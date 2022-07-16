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

    getCardMeanings: function () {
        $.ajax({
            type: "GET",
            url: ' rest/cards',
            contentType: "application/json",
            dataType: "json",
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', localStorage.getItem("token"));
            },

            success: function (data) {
                console.log(data);
                var html="";
                var i;
                html+=  `<div class="accordion mt-5" id="accordionPanelsStayOpenExample" >
                    <div class="accordion-item mt-5">
                      <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                          Major Arcana
                        </button>
                      </h2>`
                for(i=0;i<22;i++){
                html+=  `<div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                  <div class="accordion-body">
                    <div id="major">
                    <div class="container">
                            <div class="row mt-4">
                                <div class="col-3">
                                    <img src="images/cards/`+data[i].id+`.jpg" alt="slika" height="550.1235px" style="border-radius: 50px;">
                                </div>
                                <div class="col ms-4">
                                    <div class="mb-5" style="font-size: 27px;">
                                        `+data[i].CardName+`
                                    </div>
                                    <div class="mt-5" style="font-size: 25px;">
                                        `+data[i].CardDescription+`
                                    </div>
                                </div>
                            </div>
                        </div>
                  </div>
                </div>
              </div>`
            }
              html+=  `<div class="accordion-item mt-5 ">
                <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    Suit of Cups
                  </button>
                </h2>`
                for(i=22;i<36;i++){
                  html+=  `<div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                    <div class="accordion-body">
                      <div id="cups">
                      <div class="container">
                              <div class="row mt-4">
                                  <div class="col-3">
                                      <img src="images/cards/`+data[i].id+`.jpg" alt="slika" height="550.1235px" style="border-radius: 50px;">
                                  </div>
                                  <div class="col ms-4">
                                      <div class="mb-5" style="font-size: 27px;">
                                          `+data[i].CardName+`
                                      </div>
                                      <div class="mt-5" style="font-size: 25px;">
                                          `+data[i].CardDescription+`
                                      </div>
                                  </div>
                              </div>
                          </div>
                    </div>
                  </div>
                </div>`
                }
                html+= `<div class="accordion-item mt-5">
                  <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                      Suit of Swords
                    </button>
                  </h2>`
                  for(i=36;i<50;i++){
                    html+= `<div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                      <div class="accordion-body">
                        <div id="Swords">
                        <div class="container">
                                <div class="row mt-4">
                                    <div class="col-3">
                                        <img src="images/cards/`+data[i].id+`.jpg" alt="slika" height="550.1235px" style="border-radius: 50px;">
                                    </div>
                                    <div class="col ms-4">
                                        <div class="mb-5" style="font-size: 27px;">
                                            `+data[i].CardName+`
                                        </div>
                                        <div class="mt-5" style="font-size: 25px;">
                                            `+data[i].CardDescription+`
                                        </div>
                                    </div>
                                </div>
                            </div>
                      </div>
                    </div>
                  </div>`
                }
                html+= `<div class="accordion-item mt-5">
                  <h2 class="accordion-header" id="panelsStayOpen-headingFour">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                      Suit of Pentacles
                    </button>
                  </h2>`
                  for(i=50;i<64;i++){
                      html+= `<div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                        <div class="accordion-body">
                          <div id="Pentacles">
                          <div class="container">
                                  <div class="row mt-4">
                                      <div class="col-3">
                                          <img src="images/cards/`+data[i].id+`.jpg" alt="slika" height="550.1235px" style="border-radius: 50px;">
                                      </div>
                                      <div class="col ms-4">
                                          <div class="mb-5" style="font-size: 27px;">
                                              `+data[i].CardName+`
                                          </div>
                                          <div class="mt-5" style="font-size: 25px;">
                                              `+data[i].CardDescription+`
                                          </div>
                                      </div>
                                  </div>
                              </div>
                        </div>
                      </div>
                    </div>`
}
                    html+= `<div class="accordion-item mt-5">
                      <h2 class="accordion-header" id="panelsStayOpen-headingFive">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                          Suit of Wands
                        </button>
                      </h2>`
                      for(i=64;i<78;i++){
                          html+= `<div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
                            <div class="accordion-body">
                              <div id="Wands">
                              <div class="container">
                                      <div class="row mt-4">
                                          <div class="col-3">
                                              <img src="images/cards/`+data[i].id+`.jpg" alt="slika" height="550.1235px" style="border-radius: 50px;">
                                          </div>
                                          <div class="col ms-4">
                                              <div class="mb-5" style="font-size: 27px;">
                                                  `+data[i].CardName+`
                                              </div>
                                              <div class="mt-5" style="font-size: 25px;">
                                                  `+data[i].CardDescription+`
                                              </div>
                                          </div>
                                      </div>
                            </div>
                            </div>
                            </div>
                          </div>`
}
                $("#Meanings").html(html);
            },


            error: function (XMLHttpRequest, textStatus, errorThrown) {
                  toastr.error("No available cards to show");
            }
        });

    },

}
