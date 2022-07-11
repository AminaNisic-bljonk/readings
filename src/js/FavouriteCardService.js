var FavouriteCardService = {
  init: function () {
          if (typeof (parsedUser) == 'undefined') $('#favouritesListButton').hide();
      },
    addFavourite: function () {
        console.log(parsedUser.id)
        var card = new Object();
        card.card_id = cardId;
        card.user_id = parsedUser.id;
        console.log(card);
        $.ajax({
            type: "POST",
            url: ' rest/addFavourite',
            data: JSON.stringify(card),
            contentType: "application/json",
            dataType: "json",
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', localStorage.getItem("token"));
            },

            success: function (data) {
                console.log("added");
            },


            error: function (XMLHttpRequest, textStatus, errorThrown) {
                  toastr.error("This card has alredy been added!");
            }
        });
    },

    getFavourites: function () {
        $.ajax({
            type: "POST",
            url: ' rest/favourites',
            data: JSON.stringify(parsedUser),
            contentType: "application/json",
            dataType: "json",
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', localStorage.getItem("token"));
            },

            success: function (data) {
                console.log(data);
                var html="";
                var i;
                for(i=0;i<data.length;i++){
                html+=  `<div class="container">
                      <div class="row mt-4">
                          <div class="col-3">
                              <img src="images/cards/`+data[i].card_id+`.jpg" alt="slika" height="550.1235px" style="border-radius: 50px;">
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
                  </div>`
                }
                $("#Favourites").html(html);
            },


            error: function (XMLHttpRequest, textStatus, errorThrown) {
                  toastr.error("No available cards to show");
            }
        });

    },
}
