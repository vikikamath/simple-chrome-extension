var msg = {
	'hello': 'world',
	'afunction': function () {
		return 'hello';
	}
};

console.log('Echo message:', msg, ' from contentscript ==> background ==> back to contentscript');
chrome.extension.sendMessage(msg, function(response) {
	console.log('contentscript:', response);
})