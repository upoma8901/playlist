/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Lovely","Whistle"];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above
var images_links=["https://is1-ssl.mzstatic.com/image/thumb/Music111/v4/b4/18/26/b41826e7-8455-8c99-13eb-77fa72836f47/UMG_cvrart_00602557422078_01_RGB72_1800x1800_16UMGIM84381.jpg/1200x630bb.jpg","https://steamuserimages-a.akamaihd.net/ugc/966473467907194703/A02DE5AAC03042DAD5253D52FF6043D931C2032E/"];
var artists=["Billie Eilish","Blackpink"];
var songLengths=["3:21","3:50"];
var songLink=["https://www.youtube.com/watch?v=V1Pl8CzNzCw","https://www.youtube.com/watch?v=dISNgvVpWlo"];


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

var Link=$("#link").val();
songLink.push(Link);
}

function emptySongInfo(){
    $("#songs").empty();
    $("#images").empty();
     $("#artists").empty();
      $("#lengths").empty();
  $("#links").empty();
}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
 songs.forEach(function(gu){
    $("#songs").append("<div>"+gu+"</div>");
    });  
  images_links.forEach(function(one){
    $("#images").append("<img src="+one+"/>");
    }); 
    
    artists.forEach(function(three){
    $("#artists").append("<div>"+three+"</div>");
    }); 
     songLengths.forEach(function(two){
    $("#lengths").append("<div>"+two+"</div>");
    }); 
      songLink.forEach(function(they){
    $("#links").append("<a href= "+they+">"+"Music Video"+"</a>");
    }); 

}

$("#add").click(function() {

    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

