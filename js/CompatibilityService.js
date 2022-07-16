var CompatibilityService = {
  getCompatibility:function(){
  var sign1 = $(#sign1).attr('value');
  var sign2 = $(#sign2).attr('value');

    $.ajax({
        type: "GET",
        url: ' rest/compatibility/'+sign1+'/'+sign2,
        contentType: "application/json",
        dataType: "json",
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', localStorage.getItem("token"));
        },

        success: function (data) {
            console.log(data);
            var html="";
            html+=`
            <div class="container text-center ">
                <div class="row mt-5 mb-5">
                    <div class="col">
                        <div>
                            <img src="images/cards/1.jpg" alt="slika" height="550.1235px" style="border-radius: 50px;">
                        </div>
                    </div>
                    <div class="col">
                        <div>
                            <img src="images/cards/1.jpg" alt="slika" height="550.1235px" style="border-radius: 50px;">
                        </div>
                    </div>
                </div>
                <div class="row mb-5">
                    <div class="col">
                        <div style="font-weight:bold; font-size: 27px;">
                            `+data[0].percentage+`
                        </div>
                    </div>
                </div>
                <div class="row mb-5">
                    <div class="col">`
                        +data[0].compatibility+`
                    </div>
                </div>
            </div>`
            $("#CompatibilityAfterSearch").html(html);
            document.getElementById('CompatibilityAfterSearch').classList.remove('d-none');
            document.getElementById('Compatibility').classList.add('d-none');
        },


        error: function (XMLHttpRequest, textStatus, errorThrown) {
              toastr.error("This card has alredy been added!");
        }
    });

  }
}
