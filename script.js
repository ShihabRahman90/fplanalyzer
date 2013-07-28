window.fplAnalyzeTrigger = function () {
	var teamArr = {
		"Fulham":"FUL",
		"Arsenal":"ARS",
		"Everton":"EVE",
		"West Brom":"WBA",
		"Hull City":"HUL",
		"Norwich":"NOR",
		"Newcastle":"NEW",
		"West Ham":"WHM",
		"Southampton":"SOU",
		"Sunderland":"SUN",
		"Stoke City":"STK",
		"Crystal Palace":"CPA",
		"Aston Villa":"AVL",
		"Liverpool":"LIV",
		"Cardiff City":"CAR",
		"Man City":"MCY",
		"Tottenham":"TOT",
		"Swansea":"SWA",
		"Man Utd":"MUN",
		"Chelsea":"CHE"
	}
    var fixArr = {}
    $.each($(".ismFixtureTable tbody tr"), function (i, team) {
        fixArr[$(team).children(".ismHomeTeam").html()] = (fixArr[$(team).children(".ismHomeTeam").html()] == undefined ? "" : fixArr[$(team).children(".ismHomeTeam").html()] + ",") + teamArr[$(team).children(".ismAwayTeam").html()].toUpperCase()
        fixArr[$(team).children(".ismAwayTeam").html()] = (fixArr[$(team).children(".ismAwayTeam").html()] == undefined ? "" : fixArr[$(team).children(".ismAwayTeam").html()] + ",") + teamArr[$(team).children(".ismHomeTeam").html()].toLowerCase()
    })
    $($("#ismTeamDisplayGraphical div[id^=ismGraphical]")[0]).find(".ismShirt").attr("title")
    $.each($("#ismTeamDisplayGraphical div[id^=ismGraphical]"), function (i, player) {
        $(player).find(".ismElementDetail dd").html( fixArr[$(player).find(".ismShirt").attr("title")] == undefined ? "" : fixArr[$(player).find(".ismShirt").attr("title")] )
    })
}