'use strict';const assert=require('node:assert/strict'),A=require('./engine.js');
function test(name,fn){try{fn();console.log('PASS '+name)}catch(e){console.error('FAIL '+name+': '+e.stack);process.exitCode=1}}
test('10 NPC and shared families',()=>{const w=A.create(12345);assert.equal(w.people.length,10);assert.equal(w.people[0].partner,5);assert.ok(w.people[6].parents.includes(0));assert.deepEqual(A.validate(w),[])});
test('deterministic 30-day simulation',()=>{const a=A.create(42),b=A.create(42);A.advance(a,720);A.advance(b,720);assert.equal(JSON.stringify(a),JSON.stringify(b));assert.deepEqual(A.validate(a),[])});
test('100-day memory and relationship consistency',()=>{const w=A.create(345);A.advance(w,2400);assert.deepEqual(A.validate(w),[]);assert.ok(w.metrics.decisions>=24000);assert.ok(w.events.length>0);assert.ok(w.people.some(n=>n.memory.length>0))});
test('no omniscient inheritance dialogue',()=>{const w=A.create(10);const outsider=w.people[7];assert.ok(!outsider.memory.some(m=>w.events.find(e=>e.id===m.eventId)?.type==='inheritance'));assert.match(A.talk(w,outsider,'miras'),/bilgim yok/)});
test('1-year economy and long simulation',()=>{const w=A.create(77);A.advance(w,8760);assert.deepEqual(A.validate(w),[]);assert.ok(w.people.every(n=>n.money>=0&&n.debt>=0));assert.ok(w.day>=365)});
test('10-year lifecycle and capped memory',()=>{const w=A.create(99);A.advance(w,87600);assert.deepEqual(A.validate(w),[]);assert.ok(w.people.every(n=>n.memory.length<=65));assert.ok(w.events.length<=5000)});
test('100 NPC 100-day scaling',()=>{const w=A.create(12,100);A.advance(w,2400);assert.deepEqual(A.validate(w),[]);assert.ok(w.metrics.decisions>=240000)});
test('JSON save/load roundtrip',()=>{const w=A.create(2026);A.advance(w,120);const restored=JSON.parse(JSON.stringify(w));assert.deepEqual(A.validate(restored),[]);assert.deepEqual(restored,w)});
