(function(root){
'use strict';
const Game=typeof module!=='undefined'&&module.exports?require('./engine.js').Game:root.Journey.Game;
const KEY='pasjans-podroz-web-v1';
class Store {
 constructor(storage){this.storage=storage;this.available=true;this.stars=Array(24).fill(0);this.best=0;this.sound=true;this.game=null;this.recovered=false;this.load();}
 load(){try{
  const raw=this.storage.getItem(KEY);if(!raw)return;const o=JSON.parse(raw);
  if(o.version!==1||!Array.isArray(o.stars)||o.stars.length!==24||o.stars.some(v=>!Number.isInteger(v)||v<0||v>3)||!Number.isSafeInteger(o.best)||o.best<0||typeof o.sound!=='boolean')throw Error('save');
  this.stars=o.stars;this.best=o.best;this.sound=o.sound;this.game=o.game?Game.restore(o.game):null;
  if(o.game&&!this.game)this.recovered=true;
 }catch(e){this.recovered=true;if(e.name!=='SyntaxError'&&e.message!=='save')this.available=false;}}
 get unlocked(){for(let i=0;i<23;i++)if(this.stars[i]===0)return i;return 23;}
 complete(g){if(!g.won||g.recorded)return;g.recorded=true;this.stars[g.level]=Math.max(this.stars[g.level],g.stars);this.best=Math.max(this.best,g.score);this.save(g);}
 save(game=this.game){this.game=game;try{this.storage.setItem(KEY,JSON.stringify({version:1,stars:this.stars,best:this.best,sound:this.sound,game:game?JSON.parse(game.serialize()):null}));this.available=true;return true;}catch{this.available=false;return false;}}
 reset(){this.stars=Array(24).fill(0);this.best=0;this.sound=true;this.game=null;this.recovered=false;return this.save(null);}
}
if(typeof module!=='undefined'&&module.exports)module.exports={Store,KEY};else root.JourneyStore=Store;
})(typeof window!=='undefined'?window:globalThis);
