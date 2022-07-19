var HoroscopeService = {
    init: function(){

        var buttons = document.getElementsByClassName("sign");
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", function(e) {
            var StarSign = this.id;
            HoroscopeService.horoscope(StarSign);
        });}

    },
    horoscope: function(StarSign){

        $.ajax({
            type: "GET",
            url: 'rest/DailyHoroscope/' + StarSign + "/today" ,
            contentType: "application/json",
            dataType: "json",
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', localStorage.getItem("token"));
            },


            success: function (data) {
                console.log(data);
                console.log("data");
                $("#horoscopegrid").addClass('d-none');
                $("#DailyHoroscope").removeClass('d-none');
                $("#readings-container").removeClass('d-none');
                $("#day-container").removeClass('d-none');
                $("#reading").html(data.description);
                $("#compatible").html(data.compatibility);
                $("#luckynumber").html(data.lucky_number);
                HoroscopeService.getDay(StarSign);

            },


            error: function (XMLHttpRequest, textStatus, errorThrown) {

                toastr.error("external API malfunction");

            }
        });

        $.ajax({
            type: "GET",
            url: 'rest/sign/' + StarSign,
            contentType: "application/json",
            dataType: "json",
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', localStorage.getItem("token"));
            },


            success: function (data) {
                console.log(data);
                console.log("data");
                console.log(name);
                $("#horoscopegrid").addClass('d-none');
                $("#DailyHoroscope").removeClass('d-none');
                $("#day-container").removeClass('d-none');
                $("#readings-container").removeClass('d-none');
                $("#general").html(data[0].sign_description);
                $("#compatible").html(data[0].compatibility);
                $("#sign").html(data[0].sign_name);
            },


            error: function (XMLHttpRequest, textStatus, errorThrown) {

                toastr.error("external API malfunction");

            }
        });

    },

    getDay: function(StarSign){
        var day_buttons = document.getElementsByClassName("day");
        for (var j = 0; j < day_buttons.length; j++) {
            day_buttons[j].addEventListener("click", function(e) {
            var day = this.id;
            console.log(day);
            HoroscopeService.horoscopeByDay(StarSign, day);
        });}
    },

    horoscopeByDay: function(StarSign, day){

        $.ajax({
            type: "GET",
            url: 'rest/DailyHoroscope/' + StarSign + "/" + day ,
            contentType: "application/json",
            dataType: "json",
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', localStorage.getItem("token"));
            },


            success: function (data) {
                console.log(data);
                console.log("data");
                $("#horoscopegrid").addClass('d-none');
                $("#DailyHoroscope").removeClass('d-none');
                $("#day-container").removeClass('d-none');
                $(day).addClass('text')
                $("#reading").html(data.description);
                $("#compatible").html(data.compatibility);
                $("#luckynumber").html(data.lucky_number);
            },


            error: function (XMLHttpRequest, textStatus, errorThrown) {
                  toastr.error("external API malfunction");
            }
        });

}}
