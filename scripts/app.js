/*
 * app initialization
 */
var base_url, defaultView, partialsMap;
function init() {
	base_url = 'http://localhost/kudos/Team2-F13-CIT261/'; //base_url
	defaultView ="map"; //default view
	partialsMap = { //map of view partials
		map: 	'partials/map.html',
		event: 'partials/newEventPage.html',
		stats: 'partials/stats.html',
		share: 'partials/share.html',
		login: 'partials/authenticationPage.html',
		splash: 'splash.html'
	};
}
init();
getURL();
newPartial();

function getURL() {
	var location = window.location.href;
	console.log(location);
};


function newPartial(obj) {
	var http = new XMLHttpRequest(),
		id = obj ? obj.id : defaultView,
		location = partialsMap[id];

	http.open( "GET", base_url + location, true );
	http.onreadystatechange = receiveResponse;
	http.send(); 
}

/*
 * receives response from for partial request - newPartial()
 */
function receiveResponse(e) {
	// console.log(this.readyState);
    if (this.readyState == 4 || this.status == 200) {
        // http.readyState == 4, so we've received the complete server response
        // http.status == 200, so the response is good
        
		document.getElementById('partialWrapper').innerHTML = this.response; 
    }
};

/*
 * adds/removes 'active' class
 *
 * @param {string} id for active class to be applied to
 */
function changeActiveClass(id) {
	var active = ' active',
		old = document.querySelector('nav').querySelectorAll('li');
		el = document.getElementById(id);

	//remove active class first
	for (var i=0; i < old.length; i++){
		old[i].className = old[i].className.replace(active, "");
	}
	//add active class to selector
	el.className = el.className.replace(active, "");
	el.className = el.className + active;
};

