var CompatibilityService = {
  getCompatibility:function(){
  var  sign1_name = $('#sign1').html().trim();
  var  sign2_name = $('#sign2').html().trim();

    $.ajax({
        type: "GET",
        url: ' rest/compatibility/'+sign1_name+'/'+sign2_name,
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
                            <img src="images/ikonice/`+data[0].sign1_name+`.png" alt="slika" width="320px" height="320px" style="border-radius: 50px;">
                        </div>
                    </div>
                    <div class="col">
                        <div>
                            <img src="images/ikonice/`+data[0].sign2_name+`.png" alt="slika" width="320px" height="320px" style="border-radius: 50px;">
                        </div>
                    </div>
                </div>
                <div class="row mb-5">
                    <div class="col">
                        <div style="font-weight:bold; font-size: 27px;">
                        <h1 class="text-white">`+data[0].sign1_name+` + `+data[0].sign2_name+`</h1>
                        <h2 class="text-white"> Your compatibility:
                            `+data[0].percentage+`</h2>
                        </div>
                    </div>
                </div>
                <div class="row mb-5">
                    <div class="col"><p class="text-light">`
                        +data[0].compatibility+`</p>
                    </div>
                </div>
            </div>
            `
            $("#CompatibilityAfterSearch").html(html);
            document.getElementById('CompatibilityAfterSearch').classList.remove('d-none');
            document.getElementById('Compatibility').classList.add('d-none');
        },


        error: function (XMLHttpRequest, textStatus, errorThrown) {
              console.log("bad");
        }
    });

  }
}
