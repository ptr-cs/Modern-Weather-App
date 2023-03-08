function setApiKey(evt) {
    $.ajax({
        type: "POST",
        url: "/Home/SetApiKey",
        data: { "keyString": $('#exampleInputPassword1').val() }
    });
}

function getApiKey(evt) {
    $.ajax({
        type: "GET",
        url: "/Home/GetApiKey",
        success: function (response) {
            debugger;
            $('#exampleInputPassword1').val(response);
        },
        failure: function (response) {
            alert(response.responseText);
        },
        error: function (response) {
            alert(response.responseText);
        }
    });
}

function getWeatherSearch() {
    $.ajax({
        type: "GET",
        url: "/Home/GetWeatherSearch",
        success: function (response) {
            debugger;
            $('#weatherSearchInput').val(response);
        },
        failure: function (response) {
            alert(response.responseText);
        },
        error: function (response) {
            alert(response.responseText);
        }
    });
}

function searchWeather(evt) {
    $.ajax({
        type: "POST",
        url: "/Home/SearchWeather",
        data: { "weatherSearch": $('#weatherSearchInput').val() }
    });
}