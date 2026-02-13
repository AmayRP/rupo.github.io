// SECTION SYSTEM
let currentSection = 0;
const sections = document.querySelectorAll(".page");

function nextSection() {

sections[currentSection].classList.remove("active");

currentSection++;

if(currentSection < sections.length) {
sections[currentSection].classList.add("active");
}

// start music when first opened
if(currentSection === 1 && !isPlaying){
audio.play();
isPlaying = true;
playBtn.innerText = "Pause ⏸";
}
}


// MUSIC PLAYER
const songs = [
{ name: "Tere liye hua.", file: "music/Song2.mp3" },
{ name: "Born for loving you", file: "music/Song1.mp3" },
{ name: "eyes", file: "music/Song3.mp3" }
];

let currentSong = 0;
let isPlaying = false;

const audio = document.getElementById("bgMusic");
const playBtn = document.getElementById("playBtn");
const songName = document.getElementById("songName");

function loadSong(index){
audio.src = songs[index].file;
songName.innerText = songs[index].name;
}

function toggleMusic(){
if(isPlaying){
audio.pause();
playBtn.innerText="Play";
}else{
audio.play();
playBtn.innerText="Pause";
}
isPlaying=!isPlaying;
}

function nextSong(){
currentSong=(currentSong+1)%songs.length;
loadSong(currentSong);
audio.play();
isPlaying=true;
playBtn.innerText="Pause";
}

function prevSong(){
currentSong=(currentSong-1+songs.length)%songs.length;
loadSong(currentSong);
audio.play();
isPlaying=true;
playBtn.innerText="Pause";
}

loadSong(currentSong);


// BUNNY CURSOR
const cursor = document.createElement("div");
cursor.id = "cursor";
cursor.innerText = "🐰";
document.body.appendChild(cursor);

document.addEventListener("mousemove", e=>{
cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";
});

// bunny click sound
const bunnySound=document.getElementById("bunnySound");

document.addEventListener("click", ()=>{
bunnySound.currentTime=0;
bunnySound.play();
});
