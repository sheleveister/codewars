const Track = function(params) {
  this.name = params.name;
  this.url = params.url;
};

const YoutubeTrack = function(params) {
  Track.apply(this, arguments);
  this.image = params.image;
};

Track.prototype.playTrack = function() {
  console.log('We started playing', this.name);
};

YoutubeTrack.prototype = Object.create(Track.prototype);
YoutubeTrack.prototype.constructor = YoutubeTrack;

YoutubeTrack.prototype.playTrack = function() {
  console.log('Hello youtube', this.name);
};

const firstTrack = new Track({
  name: 'track01',
  url: 'track01.mp3'
});

const secondTrack = new Track({
  name: 'track02',
  url: 'track02.mp3'
});

const firstYoutubeTrack = new YoutubeTrack({
  name: 'youtubeTrack01',
  url: 'youtubeTrack01.mp3',
  image: 'youtubeTrack01.jpg'
});

const secondYoutubeTrack = new YoutubeTrack({
  name: 'youtubeTrack02',
  url: 'youtubeTrack02.mp3',
  image: 'youtubeTrack02.jpg'
});

console.log(firstTrack);
console.log(secondTrack);

console.log(firstYoutubeTrack);
console.log(secondYoutubeTrack);

firstTrack.playTrack();
firstYoutubeTrack.playTrack();
