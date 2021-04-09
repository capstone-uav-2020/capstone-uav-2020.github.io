function trackLocation(e) {
  var rect = videoContainer2.getBoundingClientRect(),
      position = ((e.pageX - rect.left) / videoContainer2.offsetWidth)*100;
  if (position <= 100) { 
    videoClipper2.style.width = position+"%";
    clippedVideo2.style.width = ((100/position)*100)+"%";
    clippedVideo2.style.zIndex = 3;
	}
}
var videoContainer2 = document.getElementById("video-compare-container2"),
videoClipper2 = document.getElementById("video-clipper2"),
clippedVideo2 = videoClipper2.getElementsByTagName("video")[0];
videoContainer2.addEventListener( "mousemove", trackLocation, false); 
videoContainer2.addEventListener("touchstart",trackLocation,false);
videoContainer2.addEventListener("touchmove",trackLocation,false);