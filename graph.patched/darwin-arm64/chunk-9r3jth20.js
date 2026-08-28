// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{Se}from"./chunk-3vs63y6b.js";import{an}from"./chunk-g4zaymy2.js";import"./chunk-vpkz5m05.js";import{x}from"./chunk-ghnc2x4f.js";import{ge}from"./chunk-j6bwf1es.js";import"./chunk-s0y4aasp.js";import"./chunk-0ve316az.js";import{a}from"./chunk-bn8q5mbz.js";import"./chunk-n5p9w775.js";import"./chunk-v5t1qnj3.js";import"./chunk-jqgad8sa.js";import{C,Et}from"./chunk-e5bq01yj.js";import"./chunk-cmkfpkth.js";import"./chunk-8w8hykva.js";import"./chunk-fnn4jyg7.js";import"./chunk-hp9wjta4.js";import"./chunk-w2hwjymv.js";import"./chunk-s2t7yx8x.js";import{s}from"./chunk-3jdapt8v.js";import"./chunk-wx0zfkp2.js";import"./chunk-4p8hs6c2.js";import"./chunk-d1bcvf2q.js";import"./chunk-w8df9gvd.js";import"./chunk-px49rrp6.js";import"./chunk-xv0afvwf.js";import"./chunk-5wdhh6zv.js";import"./chunk-j2rn06t5.js";import"./chunk-nw6r1618.js";import"./chunk-71nbrcp0.js";import"./chunk-9qmdhtt2.js";import"./chunk-71kt42f0.js";import"./chunk-q2p37kwf.js";import"./chunk-8jrjg63q.js";import"./chunk-chrc29xz.js";import"./chunk-j7d3ep7z.js";import"./chunk-2694tw3t.js";import"./chunk-7afycn7k.js";import"./chunk-xe7kdqs4.js";import"./chunk-1m3qd9sr.js";import"./chunk-jz0pchtb.js";import"./chunk-mmj3hbz2.js";import"./chunk-j4jfcs5p.js";import"./chunk-c5jf7pfc.js";import"./chunk-5bqp1swd.js";import"./chunk-206vdfzn.js";import"./chunk-e8zeqvx6.js";import"./chunk-1a6j9rxs.js";import"./chunk-y7nqdky2.js";import"./chunk-d5w7af8n.js";import"./chunk-36jg6szp.js";import"./chunk-ajh54v44.js";import"./chunk-j7mzcbtg.js";import"./chunk-w8bzqq59.js";import"./chunk-nrtq2k0h.js";import"./chunk-j5z57a18.js";import"./chunk-2d75qem6.js";import"./chunk-q9edv607.js";import"./chunk-xv4k48am.js";import"./chunk-pc3a0ej6.js";import"./chunk-2vqmgw20.js";import"./chunk-8fq8jfr5.js";import"./chunk-mnsvtt5d.js";import"./chunk-evkw8tw9.js";import"./chunk-3b4m2p9x.js";import"./chunk-kj4qj8nj.js";import"./chunk-5ksbz6ym.js";import"./chunk-gsnfhe7n.js";import"./chunk-tacdmpjz.js";import"./chunk-z51fvft1.js";import"./chunk-72eb1q9f.js";import"./chunk-t3369g78.js";import"./chunk-89hmbtyb.js";import"./chunk-q49t6rqe.js";import"./chunk-7nv8z03d.js";import"./chunk-v26jyk82.js";import"./chunk-5frxw1j3.js";import"./chunk-q4p2a5sk.js";import"./chunk-72tw8dma.js";import"./chunk-pp925av2.js";import"./chunk-m7fp9j7m.js";import"./chunk-j1j7vbq3.js";import"./chunk-r3k3kcs0.js";import"./chunk-50n50vap.js";import"./chunk-j60z9s5g.js";import"./chunk-qjvexw1x.js";import"./chunk-nzf9dqr3.js";import"./chunk-qwt7krt5.js";import{EK}from"./chunk-4c0c9588.js";import{yy,kv}from"./chunk-jpynh9ry.js";import{Ks,ube,QZ}from"./chunk-2126j1xj.js";import"./chunk-vn6xcw4g.js";import{E0}from"./chunk-bgagm8w5.js";import{_a}from"./chunk-cmrd4rmj.js";import"./chunk-yjcv5hh8.js";import"./chunk-5h9w4q7y.js";import"./chunk-p7kxsn0n.js";import"./chunk-946ge8er.js";import"./chunk-vwmrf92g.js";import"./chunk-xajbcgpa.js";import"./chunk-dpbxybt4.js";import"./chunk-8sfg3638.js";import"./chunk-xhxj67xc.js";import"./chunk-9q51f9rr.js";import{ee}from"./chunk-t2kfemrk.js";import{readFileSync as R}from"fs";import{join as u}from"path";var g=ee("./loopAutonomousPreamble-07qcyhv4.md");var y=ee("./loopAutonomousPreamblePersistent-3zqtkrvg.md");var se=g;function m(){if(a.CLAUDE_CODE_LOOP_PERSISTENT)return!0;return x("tengu_kairos_loop_persistent",!1)}function v(){return m()?y:g}function w(){s("tengu_kairos_loop_persistent_activated",{variant:m()})}function h(e=!1){if(!EK())return"";let o=!e&&m()?"newly blocked on a decision you won't make alone, you're ending the loop":"newly blocked on a decision you won't make alone, third straight tick with nothing to do, you're ending the loop";return`

Use ${E0} when the loop can't move further without the user, or when something landed that they'd want to act on now: ${o}, or a major update arrived (CI went red, a review changes the plan). Progress you made yourself isn't a trigger \u2014 the transcript covers that. One ping per state, not per tick.`}function b(){return`# Autonomous loop tick

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${Ks} from this tick.${h()}`}var f=`

If a ${_a} is armed (check ${kv}), keep \`delaySeconds\` at 1200\u20131800s \u2014 the ${_a} is the wake signal and this is only the fallback heartbeat. If you were woken by a \`<task-notification>\`, handle the event before deciding whether to re-arm. To stop the loop, call ${Ks} with \`stop: true\` and ${yy} the monitor (use ${kv} to find its task ID if no longer in context).`;function S(){return`# Autonomous loop tick (dynamic pacing)

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${Ks} tool (not a recurring cron). To keep the loop alive, call ${Ks} again at the end of this turn with \`prompt\` set to the literal sentinel \`${QZ}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${f}${h()}`}function I(e){return e===ube||e===QZ}function L(e,t){if(!I(t))return null;w();let o=t===QZ?S():b();if(e.autonomousPreambleDelivered||e.lastLoopFileDelivered!==null)return o;return e.autonomousPreambleDelivered=!0,`${v()}

---

${o}`}var k="__autonomous_preamble__",E="<<loop.md>>",d="<<loop.md-dynamic>>";function F(){return`# /loop tick \u2014 loop.md tasks

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${Ks} from this tick.${h(!0)}`}function M(){return`# /loop tick \u2014 loop.md tasks (dynamic pacing)

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${Ks} tool (not a recurring cron). To keep the loop alive, call ${Ks} again at the end of this turn with \`prompt\` set to the literal sentinel \`${d}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${f}${h(!0)}`}function N(){return`# /loop tick \u2014 loop.md absent (dynamic pacing)

loop.md is not currently present. Run the autonomous check using the loop instructions established earlier in this conversation.

You scheduled this tick via the ${Ks} tool (not a recurring cron). To keep the loop alive \u2014 and to pick up loop.md if it is recreated \u2014 call ${Ks} again at the end of this turn with \`prompt\` set to the literal sentinel \`${d}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${f}${h()}`}var l=25000;function P(e){if(e.length<=l)return e;let t=e.lastIndexOf(`
`,l);return`${e.slice(0,t>0?t:l)}

> WARNING: loop.md was truncated to ${l} bytes. Keep the task list concise.`}function _(){return c(u(an(),".claude","loop.md"))??c(u(ge(),"loop.md"))}function c(e){let t;try{t=R(e,"utf-8")}catch(n){if(Et(n)||C(n)==="EISDIR")return null;throw n}let o=t.trim();if(o.length===0)return null;return{path:e,content:P(o)}}async function D(e){if(!e)return _();let t=c(u(an(),".claude","loop.md"));if(t)return t;let o=u(ge(),"loop.md"),n=await e.read([Se.state("loop-file")]);if(!n.ok)return c(o);let i=n.value.items[0];if(!i.found)return null;let r=Buffer.from(i.value.buffer,i.value.byteOffset,i.value.byteLength).toString("utf-8").trim();if(r.length===0)return null;return{path:o,content:P(r)}}function p(e){return e===E||e===d}function q(e,t){if(!p(t))return null;return T(e,t,_())}async function W(e,t,o){if(!p(t))return null;return T(e,t,await D(o))}function T(e,t,o){let n=t===d;if(o){let r=n?M():F();if(e.lastLoopFileDelivered===o.content)return r;return e.lastLoopFileDelivered=o.content,`# /loop tick \u2014 tasks from ${o.path}

The user configured a loop-tasks file. Work through the tasks defined below; these are the instructions for this tick and every subsequent tick (the reminder on later fires refers back to this message).

---

${o.content}

---

${r}`}w();let i=n?N():b();if(e.lastLoopFileDelivered===k||e.autonomousPreambleDelivered)return i;return e.lastLoopFileDelivered=k,e.autonomousPreambleDelivered=!0,`${v()}

---

${i}`}function ae(e){return I(e)||p(e)}function he(e,t){return L(e,t)??q(e,t)??t}async function le(e,t,o){return L(e,t)??await W(e,t,o)??t}export{se as AUTONOMOUS_LOOP_PREAMBLE,d as LOOP_FILE_DYNAMIC_SENTINEL,E as LOOP_FILE_SENTINEL,v as getAutonomousLoopPreamble,I as isAutonomousLoopSentinel,ae as isLoopDefaultSentinel,p as isLoopFileSentinel,m as isLoopPersistentPreambleEnabled,w as logAutonomousLoopActivation,_ as readLoopFile,D as readLoopFileAsync,L as resolveAutonomousLoopFire,he as resolveLoopDefaultFire,le as resolveLoopDefaultFireAsync,q as resolveLoopFileFire,W as resolveLoopFileFireAsync};
