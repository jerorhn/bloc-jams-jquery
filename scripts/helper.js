class Helper {
  playPauseAndUpdate(song = player.currentlyPlaying) {
    player.playPause(song);
    $('#time-control .total-time').text(song.duration);
  }
}

const helper = new Helper();
