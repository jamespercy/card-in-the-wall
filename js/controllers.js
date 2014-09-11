var cardInTheWall = angular.module('CardInTheWall', []);

cardInTheWall.controller('SnapshotController', function SnapshotController($scope) {

	function hasGetUserMedia() {
	  return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
	            navigator.mozGetUserMedia || navigator.msGetUserMedia);
	}

	var errorCallback = function(e) {
    	console.log('Reeeejected!', e);
  	};

	navigator.getUserMedia  = navigator.getUserMedia ||
	                          navigator.webkitGetUserMedia ||
	                          navigator.mozGetUserMedia ||
	                          navigator.msGetUserMedia;

  	// Not showing vendor prefixes.
  	navigator.getUserMedia({video: true}, function(localMediaStream) {
	    var video = document.querySelector('video');
	    video.src = window.URL.createObjectURL(localMediaStream);

	    // Note: onloadedmetadata doesn't fire in Chrome when using it with getUserMedia.
	    // See crbug.com/110938.
	    video.onloadedmetadata = function(e) {
	      // Ready to go. Do some stuff.
	    };
  	}, errorCallback);


	if (hasGetUserMedia()) {
	  $scope.letsGo = true;
	} else {
	  alert('getUserMedia() is not supported in your browser');
	}
	hasGetUserMedia();
});