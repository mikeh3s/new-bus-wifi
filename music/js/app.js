$(document).ready(function(){
    initPlayer();
    getSongs();
});
let audio = $('#player');
let music;
function initPlayer(){
    $('#shuffle').click(function(){
        $('#playlist').empty();
        console.log(shuffle(music.songs));
        genList(music);
        playSong(0);
    });
}

function getSongs() {
    $.getJSON("../data/music.json", function(mjson){
        music = mjson;
        genList(music);
    });
}
function playSong(id){
    console.log(id);
    let long = music.songs;
    if (id >= long.length)
    {
        console.log('Se mamó!');
        audio.get(0).pause();
    }
    else
    {
        $('#img-album').attr('src', music.songs[id].image);
        $('#player').attr('src', music.songs[id].song);
        audio.get(0).play();
        console.log('Siga que si hay');
        scheduleSong(id);
    }
}
function genList(music){
    $.each(music.songs, function(i,song){
        $('#playlist').append('<li class="list-group-item" id="'+i+'">'+song.name+'</li>')
    });
    $('#playlist li').click(function(){
        let selectedsong = $(this).attr('id');
        playSong(selectedsong);
    });
}
function scheduleSong(id){
    audio.get(0).onended = function (){
        console.log('Termino la canción!');
        playSong(parseInt(id+1));
    }
}
function shuffle(array){
    for(let ramdom, temp, position = array.length; position; random = Math.floor(Math.random()*position), temp = array[--position],array[position]=array[random], array[random] = temp);
        return array;
}