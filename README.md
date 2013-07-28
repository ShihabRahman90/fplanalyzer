FPLAnalyzer
===========

This is a bookmarklet that allows you to preview opponents on different GW *(and do other stuff in future, hopefully)* 
on [fantasy.premierleague.com](http://fantasy.premierleague.com).

**How to setup:**
* Create a new bookmark on your browser.
* Name of the bookmark: *anything*

*URL of the bookmark:*

    javascript:(function(){if(window.fplAnalyzeTrigger==undefined){var e=document.createElement("script");e.setAttribute("type","text/javascript");e.setAttribute("src","http://pure-ocean-7640.herokuapp.com/script.js");document.getElementsByTagName("head")[0].appendChild(e)}else{window.fplAnalyzeTrigger()}})()

* Save the boomark (preferably on browser bookmark bar)

**How to use:**
* Go to your 'Pick Team' or Transfer page on FPL site.
* Click on the bookmark (first time click loads script on background)
* Navigate to any gameweek **by clicking on the link in the fixture list below your team**.
* Now click the bookmark. The opponent names below each player should change accordingly.
 
You can use it for strategizing in different ways. On Pick Team page, navigate to different gameweeks and click the bookmark to see if your current
team is any good for the forseeable future. On Transfer page, shuffle your team, navigate to another GW and click the bookmark to strategize.

If it doesn't work, you can open issues here on github. You can also find me on [FFS](http://fantasyfootballscout.co.uk) (esalman) or [FFPBD Facebook page](https://www.facebook.com/groups/234846293222683/) (Salman Mustafa)

**Update (7/29/13):** Firefox issue fixed, tested on Firefox, Chorme and IE latest versions.

**Known issue (7/29/13):** Doesn't work on Firefox, will fix it shortly.
