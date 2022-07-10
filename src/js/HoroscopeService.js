var HoroscopeService = {
    init: function(){
        document.getElementById("day-container").classList.add('d-none');
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
                document.getElementById("button-container").classList.add('d-none');
                document.getElementById("day-container").classList.remove('d-none');
                document.getElementById("reading").innerHTML = data.description;
                document.getElementById("luckynumber").innerHTML = data.lucky_number;
                HoroscopeService.getDay(StarSign);

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
                document.getElementById("button-container").classList.add('d-none');
                document.getElementById("day-container").classList.remove('d-none');
                document.getElementById("general").innerHTML = data[0].sign_description;
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
                document.getElementById("button-container").classList.add('d-none');
                document.getElementById("day-container").classList.remove('d-none');
                document.getElementById("reading").innerHTML = data.description;
                document.getElementById("luckynumber").innerHTML = data.lucky_number;
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

}}
