// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{Re}from"./chunk-99avamm5.js";import"./chunk-kp7gknaw.js";import"./chunk-4a5nddj6.js";import{En,_o}from"./chunk-cqc88nqm.js";import"./chunk-7yckkh1m.js";import"./chunk-rnxz8hs2.js";import{v,Ht}from"./chunk-2bj5eqbj.js";import"./chunk-7r0w3nmp.js";import"./chunk-35k7s716.js";import{x}from"./chunk-5khn4tvf.js";import{we}from"./chunk-8bp13hnn.js";import"./chunk-1y7zyxh8.js";import"./chunk-65nweewy.js";import{a}from"./chunk-ay603yys.js";import"./chunk-dqhw8yqd.js";import"./chunk-wfscmafr.js";import"./chunk-kcjajdc8.js";import"./chunk-nqsdwfmt.js";import"./chunk-0n80jtth.js";import"./chunk-vzqvvnm0.js";import"./chunk-xe0dn6dd.js";import{i}from"./chunk-bh8vsyek.js";import"./chunk-2pwc1ycq.js";import"./chunk-8cvm4kna.js";import"./chunk-be6dnhr5.js";import"./chunk-kvqsg7vn.js";import"./chunk-ahgv64tk.js";import"./chunk-a22am1vw.js";import"./chunk-bzbw9xhh.js";import"./chunk-cqpd6xa9.js";import"./chunk-402jrhr4.js";import"./chunk-jrrd36we.js";import"./chunk-v5zz2h09.js";import"./chunk-wckxjewz.js";import"./chunk-dzhe9h05.js";import"./chunk-kbc46qv2.js";import"./chunk-byb2kdm8.js";import"./chunk-3hxvvnfw.js";import"./chunk-b93xrf5w.js";import"./chunk-bcb1dwb6.js";import"./chunk-5wq5hbjb.js";import"./chunk-z36twt5k.js";import"./chunk-q5xfazs5.js";import"./chunk-bg3bhqbb.js";import"./chunk-ewxewhf1.js";import"./chunk-6r1h1xyw.js";import"./chunk-pw35yar9.js";import"./chunk-z18m6zwf.js";import"./chunk-arteaep2.js";import"./chunk-qfgzcy5r.js";import"./chunk-yx172t9j.js";import"./chunk-5bxxc6dq.js";import"./chunk-b7h8pwnv.js";import"./chunk-kycy9m8x.js";import"./chunk-cg7sbvw4.js";import"./chunk-1mvp0wgf.js";import"./chunk-kb3kx2ee.js";import"./chunk-983v6s4f.js";import"./chunk-hcxjkx3f.js";import"./chunk-jc2s6yqf.js";import"./chunk-pwyp6fhc.js";import"./chunk-ftmzfxxh.js";import"./chunk-fs3a332c.js";import"./chunk-j2fqyv7e.js";import"./chunk-jcesa5j7.js";import"./chunk-7qxbq1fh.js";import"./chunk-qap95pw1.js";import"./chunk-30mcx5zy.js";import"./chunk-9c4ja01c.js";import"./chunk-6j512bza.js";import"./chunk-hvxn56gd.js";import"./chunk-p8660rxp.js";import"./chunk-yck00zks.js";import"./chunk-nnyew09e.js";import"./chunk-byb3fx4c.js";import"./chunk-qswmg1vp.js";import"./chunk-c3wtf5gz.js";import"./chunk-fxt3hn7r.js";import{gpe}from"./chunk-wk3ktwn3.js";import"./chunk-js854qwq.js";import{rl,Oze,Iwe,AS,Om}from"./chunk-16b9bv18.js";import{nI}from"./chunk-ap4512ez.js";import{Za}from"./chunk-bwmn5fsz.js";import"./chunk-ea8crgsq.js";import"./chunk-5xpkpxd2.js";import"./chunk-gbkect21.js";import"./chunk-cft4wy8y.js";import"./chunk-q6emaxc6.js";import"./chunk-ady37mbs.js";import"./chunk-1z6682h0.js";import"./chunk-2hg6rfqa.js";import"./chunk-h01ygmyn.js";import"./chunk-04bbxq8e.js";import"./chunk-7891bvze.js";import"./chunk-pf8mfgbr.js";import"./chunk-hsr4yk27.js";import"./chunk-tbbqtfdj.js";import"./chunk-j9g7t4xw.js";import{Ce}from"./chunk-0dapr5gw.js";import{readFileSync as S}from"fs";import{join as u}from"path";var p=Ce("./loopAutonomousPreamble-07qcyhv4.md.embedded.txt");var y=Ce("./loopAutonomousPreamblePersistent-3zqtkrvg.md.embedded.txt");function g(){if(a.CLAUDE_CODE_LOOP_PERSISTENT)return!0;return x("tengu_kairos_loop_persistent",!1)}function w(){return g()?y:p}function b(){i("tengu_kairos_loop_persistent_activated",{variant:g()})}function h(e=!1){if(!gpe())return"";let o=!e&&g()?"newly blocked on a decision you won't make alone, you're ending the loop":"newly blocked on a decision you won't make alone, third straight tick with nothing to do, you're ending the loop";return`

Use ${nI} when the loop can't move further without the user, or when something landed that they'd want to act on now: ${o}, or a major update arrived (CI went red, a review changes the plan). Progress you made yourself isn't a trigger \u2014 the transcript covers that. One ping per state, not per tick.`}function I(){return`# Autonomous loop tick

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${rl} from this tick.${h()}`}var m=`

If a ${Za} is armed (check ${AS}), keep \`delaySeconds\` at 1200\u20131800s \u2014 the ${Za} is the wake signal and this is only the fallback heartbeat. If you were woken by a \`<task-notification>\`, handle the event before deciding whether to re-arm. To stop the loop, call ${rl} with \`stop: true\` and ${Om} the monitor (use ${AS} to find its task ID if no longer in context).`;function E(){return`# Autonomous loop tick (dynamic pacing)

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${rl} tool (not a recurring cron). To keep the loop alive, call ${rl} again at the end of this turn with \`prompt\` set to the literal sentinel \`${Iwe}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${m}${h()}`}function L(e){return e===Oze||e===Iwe}function P(e,t){if(!L(t))return null;b();let o=t===Iwe?E():I();if(e.autonomousPreambleDelivered||e.lastLoopFileDelivered!==null)return o;return e.autonomousPreambleDelivered=!0,`${w()}

---

${o}`}var k="__autonomous_preamble__",C="<<loop.md>>",d="<<loop.md-dynamic>>";function F(){return`# /loop tick \u2014 loop.md tasks

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${rl} from this tick.${h(!0)}`}function M(){return`# /loop tick \u2014 loop.md tasks (dynamic pacing)

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${rl} tool (not a recurring cron). To keep the loop alive, call ${rl} again at the end of this turn with \`prompt\` set to the literal sentinel \`${d}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${m}${h(!0)}`}function N(){return`# /loop tick \u2014 loop.md absent (dynamic pacing)

loop.md is not currently present. Run the autonomous check using the loop instructions established earlier in this conversation.

You scheduled this tick via the ${rl} tool (not a recurring cron). To keep the loop alive \u2014 and to pick up loop.md if it is recreated \u2014 call ${rl} again at the end of this turn with \`prompt\` set to the literal sentinel \`${d}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${m}${h()}`}var l=25000;function _(e){if(e.length<=l)return e;let t=e.lastIndexOf(`
`,l);return`${e.slice(0,t>0?t:l)}

> WARNING: loop.md was truncated to ${l} bytes. Keep the task list concise.`}function T(){return c(u(_o()??En(),".claude","loop.md"))??c(u(we(),"loop.md"))}function c(e){let t;try{t=S(e,"utf-8")}catch(n){if(Ht(n)||v(n)==="EISDIR")return null;throw n}let o=t.trim();if(o.length===0)return null;return{path:e,content:_(o)}}async function D(e){if(!e)return T();let t=c(u(_o()??En(),".claude","loop.md"));if(t)return t;let o=u(we(),"loop.md"),n=await e.read([Re.state("loop-file")]);if(!n.ok)return c(o);let r=n.value.items[0];if(!r.found)return null;let s=Buffer.from(r.value.buffer,r.value.byteOffset,r.value.byteLength).toString("utf-8").trim();if(s.length===0)return null;return{path:o,content:_(s)}}function f(e){return e===C||e===d}function q(e,t){if(!f(t))return null;return A(e,t,T())}async function j(e,t,o){if(!f(t))return null;return A(e,t,await D(o))}function A(e,t,o){let n=t===d;if(o){let s=n?M():F();if(e.lastLoopFileDelivered===o.content)return s;return e.lastLoopFileDelivered=o.content,`# /loop tick \u2014 tasks from ${o.path}

The user configured a loop-tasks file. Work through the tasks defined below; these are the instructions for this tick and every subsequent tick (the reminder on later fires refers back to this message).

---

${o.content}

---

${s}`}b();let r=n?N():I();if(e.lastLoopFileDelivered===k||e.autonomousPreambleDelivered)return r;return e.lastLoopFileDelivered=k,e.autonomousPreambleDelivered=!0,`${w()}

---

${r}`}function re(e){return L(e)||f(e)}function se(e,t){return P(e,t)??q(e,t)??t}async function ae(e,t,o){return P(e,t)??await j(e,t,o)??t}export{d as LOOP_FILE_DYNAMIC_SENTINEL,C as LOOP_FILE_SENTINEL,w as getAutonomousLoopPreamble,re as isLoopDefaultSentinel,f as isLoopFileSentinel,b as logAutonomousLoopActivation,D as readLoopFileAsync,se as resolveLoopDefaultFire,ae as resolveLoopDefaultFireAsync};
