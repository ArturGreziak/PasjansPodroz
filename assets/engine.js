(function (root) {
'use strict';
const worlds = typeof module !== 'undefined' && module.exports ? require('./content.js') : root.JourneyWorlds;
const levels = Array.from({length:24}, (_,i)=>({index:i,world:Math.floor(i/4),categories:worlds[Math.floor(i/4)].categories.slice(0,i%4===0?3:4).map(c=>({name:c.name,words:c.words.slice(0,i%4<2?3:4)}))}));
function rng(seed) { let x=seed>>>0;return ()=>{x+=0x6D2B79F5;let t=x;t=Math.imul(t^t>>>15,t|1);t^=t+Math.imul(t^t>>>7,t|61);return ((t^t>>>14)>>>0)/4294967296;}; }
function newSeed(){return Math.floor(Math.random()*4294967296);}
class Game {
 constructor(level=0,challenge=false,seed=newSeed()) {
  if(!Number.isInteger(level)||!levels[level]||typeof challenge!=='boolean'||!Number.isInteger(seed)||seed<0||seed>4294967295)throw Error('Niepoprawne rozdanie');
  this.level=level;this.challenge=challenge;this.seed=seed;
  this.piles=Array.from({length:4},()=>[]);this.stock=[];this.found=this.definition.categories.map(()=>[]);
  this.moves=0;this.mistakes=0;this.hints=3;this.hintsUsed=0;this.seconds=0;this.recorded=false;
  const deck=this.cards.map(c=>c.id),r=rng(seed);
  for(let i=deck.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[deck[i],deck[j]]=[deck[j],deck[i]];}
  deck.forEach((id,i)=>i<(level%4===3?12:8)?this.piles[i%4].push(id):this.stock.push(id));
 }
 get definition(){return levels[this.level];}
 get cards(){return this.definition.categories.flatMap((c,ci)=>c.words.map((word,wi)=>({id:ci*4+wi,category:ci,word})));}
 card(id){return this.cards.find(c=>c.id===id)||null;}
 top(source){return this.card(source===4?this.stock[0]:this.piles[source]?.at(-1));}
 get total(){return this.cards.length;}
 get done(){return this.found.reduce((s,p)=>s+p.length,0);}
 get limit(){return this.total+Math.max(2,7-Math.floor(this.level/4)-this.level%4);}
 get won(){return this.done===this.total;}
 get lost(){return this.challenge&&this.moves>=this.limit&&!this.won;}
 get finished(){return this.won||this.lost;}
 get score(){return Math.max(0,this.done*100-this.mistakes*25-this.hintsUsed*15);}
 get stars(){return !this.won?0:(this.mistakes===0&&this.hintsUsed===0?3:this.mistakes<=2?2:1);}
 assign(source,category){
  if(this.finished||!Number.isInteger(source)||source<0||source>4||!Number.isInteger(category)||!this.found[category])return 'ignored';
  const c=this.top(source);if(!c)return 'ignored';
  this.moves++;
  if(c.category!==category){this.mistakes++;return 'wrong';}
  source===4?this.stock.shift():this.piles[source].pop();this.found[category].push(c.id);return 'correct';
 }
 cycle(){if(!this.finished&&this.stock.length>1)this.stock.push(this.stock.shift());}
 hint(){if(this.finished||this.hints<=0)return null;const source=[0,1,2,3,4].find(i=>this.top(i));if(source===undefined)return null;this.hints--;this.hintsUsed++;return {source,category:this.top(source).category};}
 serialize(){return JSON.stringify({version:1,...this});}
 static restore(raw){
  try{
   const o=typeof raw==='string'?JSON.parse(raw):raw;if(!o||o.version!==1)return null;
   const g=new Game(o.level,o.challenge,o.seed);
   for(const key of ['moves','mistakes','hints','hintsUsed','seconds']){if(!Number.isSafeInteger(o[key])||o[key]<0||o[key]>10000000)return null;g[key]=o[key];}
   if(o.hints+o.hintsUsed!==3||typeof o.recorded!=='boolean')return null;
   if(!Array.isArray(o.piles)||o.piles.length!==4||!Array.isArray(o.found)||o.found.length!==g.found.length||!Array.isArray(o.stock))return null;
   const lists=[...o.piles,o.stock,...o.found];if(lists.some(a=>!Array.isArray(a)||a.some(v=>!Number.isInteger(v))))return null;
   const actual=lists.flat(),expected=g.cards.map(c=>c.id);
   if(actual.length!==expected.length||new Set(actual).size!==expected.length||actual.some(id=>!expected.includes(id)))return null;
   if(o.found.some((a,ci)=>a.some(id=>g.card(id).category!==ci)))return null;
   g.piles=o.piles.map(a=>a.slice());g.stock=o.stock.slice();g.found=o.found.map(a=>a.slice());g.recorded=o.recorded;
   if(g.moves!==g.done+g.mistakes||(g.challenge&&g.moves>g.limit)||(g.recorded&&!g.won))return null;
   return g;
  }catch{return null;}
 }
}
const api={Game,worlds,levels};
if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.Journey=api;
})(typeof window!=='undefined'?window:globalThis);
