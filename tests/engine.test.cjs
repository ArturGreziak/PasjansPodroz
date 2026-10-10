'use strict';
const assert=require('node:assert/strict');
const {Game,levels}=require('../assets/engine.js');
const {Store,KEY}=require('../assets/store.js');
let deals=0;
for(let level=0;level<24;level++)for(let seed=0;seed<100;seed++)for(const challenge of [false,true]){
 let g=new Game(level,challenge,seed);
 const original=g.serialize();assert.equal(new Game(level,challenge,seed).serialize(),original);
 while(!g.finished){const source=[0,1,2,3,4].find(s=>g.top(s));assert.notEqual(source,undefined);assert.equal(g.assign(source,g.top(source).category),'correct');g=Game.restore(g.serialize());assert.ok(g);}
 assert.ok(g.won);assert.equal(g.moves,g.total);assert.equal(g.score,g.total*100);assert.equal(g.stars,3);assert.equal(g.assign(0,0),'ignored');deals++;
}
for(let level=0;level<24;level++){
 const g=new Game(level,true,42);const wrong=(g.top(0).category+1)%g.definition.categories.length;
 for(let i=0;i<g.limit;i++)assert.equal(g.assign(0,wrong),'wrong');
 assert.ok(g.lost);assert.equal(g.score,0);assert.equal(g.assign(0,wrong),'ignored');assert.ok(Game.restore(g.serialize()));
 const r=new Game(level,false,42);for(let i=0;i<50;i++)r.assign(0,wrong);assert.ok(!r.lost);
}
let g=new Game(3,true,5);const stock=g.stock.slice();for(let i=0;i<stock.length;i++)g.cycle();assert.deepEqual(g.stock,stock);assert.equal(g.moves,0);
for(let i=0;i<3;i++){const h=g.hint();assert.equal(g.top(h.source).category,h.category);}assert.equal(g.hint(),null);assert.ok(Game.restore(g.serialize()));
for(const value of ['invalid','null','{}','{"version":1,"level":99}'])assert.equal(Game.restore(value),null);
const clean=JSON.parse(new Game(2).serialize());
for(const mutate of [o=>o.stock.push(999),o=>o.piles[0].push(o.piles[1][0]),o=>o.hints=-1,o=>o.hints=100,o=>o.seconds='bad',o=>o.recorded=true,o=>o.level=24,o=>o.moves=999,o=>o.stock=null,o=>o.found[0].push(o.piles[0].pop())]){const o=structuredClone(clean);mutate(o);assert.equal(Game.restore(o),null);}
const data=new Map(),storage={getItem:k=>data.get(k)||null,setItem:(k,v)=>data.set(k,v)};
const store=new Store(storage);g=new Game(0,false,7);while(!g.finished){const s=[0,1,2,3,4].find(s=>g.top(s));g.assign(s,g.top(s).category);}store.complete(g);assert.equal(store.unlocked,1);assert.equal(store.best,900);store.complete(g);assert.equal(store.stars[0],3);
const restored=new Store(storage);assert.equal(restored.game.score,900);assert.equal(restored.unlocked,1);restored.reset();assert.equal(new Store(storage).game,null);assert.equal(restored.unlocked,0);
const blocked=new Store({getItem(){throw Error('blocked');},setItem(){throw Error('blocked');}});assert.equal(blocked.save(new Game()),false);assert.equal(blocked.available,false);
storage.setItem(KEY,'garbage');const recovery=new Store(storage);assert.ok(recovery.recovered);assert.equal(recovery.game,null);
for(const l of levels){const words=l.categories.flatMap(c=>c.words);assert.equal(words.length,new Set(words).size);}
console.log(`PASS: ${deals} complete games with save/restore after each move; 24 challenge losses; hints; stock; corruption; progress; blocked storage.`);
