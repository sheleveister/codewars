const Track = function(name) {
  this.name = name;
};

const Playlist = function(name) {
  this.name = name;
};

const nameMixin = {
  getName() {
    return this.name;
  }
};

const playMixin = {
  play() {
    return this.name + ' started playing';
  }
};

Object.assign(Track.prototype, nameMixin, playMixin);
Object.assign(Playlist.prototype, nameMixin, playMixin);

const oftGefragtTrack = new Track('Track Oft gefragt');
const annenMayKantereitPlaylist = new Playlist('Annen May Kantereit Playlist');

console.log(oftGefragtTrack);
console.log(oftGefragtTrack.getName());
console.log(oftGefragtTrack.play());

console.log(annenMayKantereitPlaylist);
console.log(annenMayKantereitPlaylist.getName());
console.log(annenMayKantereitPlaylist.play());
