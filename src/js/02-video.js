import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const playerElement = document.getElementById('vimeo-player');
const VCT = 'videoplayer-current-time';

const player = new Vimeo(playerElement, {
  id: 236203659,
  width: 640,
});

const onPlay = function (evt) {
  localStorage.setItem(VCT, JSON.stringify(evt.seconds));
  console.log(evt.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

// Встановлюємо збережений час відтворення, або 0
const savedTime = JSON.parse(localStorage.getItem(VCT)) || 0;

player.setCurrentTime(savedTime);
