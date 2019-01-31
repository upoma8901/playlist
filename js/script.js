/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Sad","Mic Drop"];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above
var images_links=[];
var artists=[];
var songLengths=[];


function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
 songs.forEach(function (song){
     $("#song").show(song);
     
     
 });
}

function emptySongInfo(){
    $("#songs").empty();
    

}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
