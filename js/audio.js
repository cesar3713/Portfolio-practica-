let audio = document.getElementById('audio');
let playPauseBTN = document.getElementById('playPauseBTN');
let count = 0;

const playPause = () => {
	if(count == 0){
		count = 1;
		audio.play();
		playPauseBTN.style.border = "1px solid #358cd8c5"
		playPauseBTN.style.backgroundColor = "white"
	}else{
		count = 0;
		audio.pause();
		playPauseBTN.style.border = "none"
		playPauseBTN.style.backgroundColor = "transparent"
	}

}

playPauseBTN.addEventListener("click",playPause);
