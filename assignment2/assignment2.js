
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: '6CGyASDjE-U',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange

    }
  });
}

function onPlayerReady(event){

}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 130000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}
function autoVideo() {

  player.playVideo();
}

function elementInViewport() {
  var rect = document.getElementById("player").getBoundingClientRect();

  console.log(rect.top);
  if(rect.top > 0 && rect.bottom < window.innerHeight)
  {
    player.playVideo();
  }
  else{
    player.pauseVideo();
  }

}


window.addEventListener('scroll', autoVideo);
window.addEventListener('scroll',elementInViewport);
