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
                document.getElementById("horoscopegrid").classList.add('d-none');
                document.getElementById("DailyHoroscope").classList.remove('d-none');
                document.getElementById("readings-container").classList.remove('d-none');
                document.getElementById("day-container").classList.remove('d-none');
                document.getElementById("reading").innerHTML = data.description;
                document.getElementById("compatible").innerHTML = data.compatibility;
                document.getElementById("luckynumber").innerHTML = data.lucky_number;
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
                document.getElementById("horoscopegrid").classList.add('d-none');
                document.getElementById("DailyHoroscope").classList.remove('d-none');
                document.getElementById("day-container").classList.remove('d-none');
                document.getElementById("readings-container").classList.remove('d-none');
                document.getElementById("general").innerHTML = data[0].sign_description;
                document.getElementById("general").innerHTML = data[0].sign_description;
                document.getElementById("sign").innerHTML = data[0].sign_name;
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
                document.getElementById("horoscopegrid").classList.add('d-none');
                document.getElementById("DailyHoroscope").classList.remove('d-none');
                document.getElementById("day-container").classList.remove('d-none');
                document.getElementById(day).classList.add('text')
                document.getElementById("reading").innerHTML = data.description;
                document.getElementById("luckynumber").innerHTML = data.lucky_number;
            },


            error: function (XMLHttpRequest, textStatus, errorThrown) {
                  toastr.error("external API malfunction");
            }
        });

}}
