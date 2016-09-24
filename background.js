chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	console.log('background:', request);
	sendResponse(request);
})