﻿function categoryPostFunction() {
    if (validateNewJobCategoryInput()) {
        var name = $("#newJobCategoryInput").val();
        var hours = $("#dropHours").val();
        var minutes = $("#dropMinutes").val();

        var reqdata = {
            Name: name,
            Hour: hours,
            Minutes: minutes
        }

        var stringReqdata = JSON.stringify(reqdata);

        $.ajax({

            url: "https://alltbokatwebapi2.azurewebsites.net/api/CategoryModels",
            type: "POST",
            data: stringReqdata,
            contentType: 'application/json; charset=utf-8',

            success: function (data) {
                clear();
                $('#newJobCategoryInput').val('');
                $('#successModal').modal('show');

            },

            error: function () { $('#errorModal').modal('show'); }
        });

    }
}

