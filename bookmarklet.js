javascript: if ( window.fplAnalyzerAdded === undefined ) {
    var f = document.createElement("script");
    f.setAttribute("type", "text/javascript");
    f.setAttribute("src", "http://pure-ocean-7640.herokuapp.com/script.js");
    document.getElementsByTagName("body")[0].appendChild(f);
    window.fplAnalyzerAdded = true;
}
else {
	fplAnalyzeTrigger()
}