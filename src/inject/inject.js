chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);
        alert("Taking you to the HD video now...");
        window.location = JSON.parse(decodeURIComponent(document.getElementsByTagName("embed")[0].getAttribute('flashvars').split('&')[0].split('=')[1])).video_data[0].hd_src;        
	}
	}, 10);
});