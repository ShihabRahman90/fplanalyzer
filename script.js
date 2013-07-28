(function () {
    fixArr = {};
    $.each($(".ismFixtureTable tbody tr"), function (e, t) {
        fixArr[$(t).children(".ismHomeTeam").html()] = (fixArr[$(t).children(".ismHomeTeam").html()] == undefined ? "" : fixArr[$(t).children(".ismHomeTeam").html()].substring(0, 3) + ",") + $(t).children(".ismAwayTeam").html().toUpperCase().substring(0, 3);
        fixArr[$(t).children(".ismAwayTeam").html()] = (fixArr[$(t).children(".ismAwayTeam").html()] == undefined ? "" : fixArr[$(t).children(".ismAwayTeam").html()].substring(0, 3) + ",") + $(t).children(".ismHomeTeam").html().toLowerCase().substring(0, 3)
    });
    $($("#ismTeamDisplayGraphical div[id^=ismGraphical]")[0]).find(".ismShirt").attr("title");
    $.each($("#ismTeamDisplayGraphical div[id^=ismGraphical]"), function (e, t) {
        $(t).find(".ismElementDetail dd").html(fixArr[$(t).find(".ismShirt").attr("title")].replace(" ", ""))
    })
})()