var HoroscopeService = {
Horoscope: function(){
  let regionButton = $('#RegionButton').html().trim();
$.ajax({
    type: "GET",
    url: '/project/src/rest/DailyHoroscope/' + StarSign + "/today" ,
    contentType: "application/json",
    dataType: "json",

    success: function (data) {
        console.log(data);
        console.log("data");
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
