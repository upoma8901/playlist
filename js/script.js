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
var song=$("#song").val();
songs.push(song);

var image=$("#image").val();
images_links.push(image);
var artist=$("#artist").val();
artists.push(artist);
var songL=$("#length").val();
songLengths.push(songL);


}

function emptySongInfo(){
    $("#songs").empty();
    

}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
 songs.forEach(function(gu){
    $("#songs").append("<div>"+gu+"</div>");
    });  
  images_links.forEach(function(one){
    $("#images").append("<li>"+one+"</li>");
    }); 
    songLengths.forEach(function(two){
    $("#lengths").append("<li>"+two+"</li>");
    });  
    artists.forEach(function(three){
    $("#artists").append("<li>"+three+"</li>");
    });  

}

$("#add").click(function() {

    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

