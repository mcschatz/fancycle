$(document).ready(function(){
  toggleSong('#justin', '#baby');
  toggleSong('#miley', '#wrecking-ball');
  toggleSong('#selena', '#come-and-get-it');

  colorizeSong('#baby');
  colorizeSong('#wrecking-ball');
  colorizeSong('#come-and-get-it');


  function toggleSong(artistID, songID) {
    $(artistID).click(function () {
      $(songID).toggleClass('hidden');
      increaseViews(songID);
    });
  };

  function increaseViews(songID) {
    if ($(songID).attr("class") === "song") {
      var counter = $(songID).find("#view-counter").text();
      counter ++;
      $(songID).find("#view-counter").text(counter);
    };
  };

  function colorizeSong(songID) {
    var song = $(songID);

    song.find('#colorize').click(function(){
      song.toggleClass("text-color")
    });
  };
});