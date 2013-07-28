javascript:(function loadjscssfile(filename, filetype){
	if ( window.fplAnalyzeTrigger == undefined ) {
		var fileref=document.createElement('script')
		fileref.setAttribute("type","text/javascript")
		fileref.setAttribute("src","http://pure-ocean-7640.herokuapp.com/script.js")
		document.getElementsByTagName("head")[0].appendChild(fileref)	
	}
	else {
		window.fplAnalyzeTrigger()
	}
})()