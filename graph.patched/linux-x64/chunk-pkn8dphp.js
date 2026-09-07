// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{Ee}from"./chunk-fpk3t24b.js";import{sn}from"./chunk-bj7g1p32.js";import"./chunk-mnk1rjxv.js";import"./chunk-h9wtyp3p.js";import"./chunk-3whp6z2x.js";import{x}from"./chunk-3e93vkg3.js";import{be}from"./chunk-e1n9j4jc.js";import"./chunk-3qjd0g3g.js";import"./chunk-efxr56q3.js";import{a}from"./chunk-td8fcebs.js";import"./chunk-hpnksvcw.js";import{A,kt}from"./chunk-7s5qs9ea.js";import"./chunk-vx4qhc14.js";import"./chunk-1tk5haqn.js";import"./chunk-mzzfzvay.js";import"./chunk-hvf4zpd9.js";import"./chunk-9g6v0ehs.js";import"./chunk-f2w14jf7.js";import{i}from"./chunk-skkcgpsw.js";import"./chunk-c3bfg9kw.js";import"./chunk-cve7w72k.js";import"./chunk-30dff23n.js";import"./chunk-p2xedy0k.js";import"./chunk-czvna1h1.js";import"./chunk-8mc66c3x.js";import"./chunk-5k1pty0j.js";import"./chunk-6f5agm7e.js";import"./chunk-n17xw1z0.js";import"./chunk-4c106gcs.js";import"./chunk-dbn6fdze.js";import"./chunk-wcpxyz2e.js";import"./chunk-ycpfsm4t.js";import"./chunk-k5nqc3a8.js";import"./chunk-qyjj7h0q.js";import"./chunk-q0tfnkyx.js";import"./chunk-9p6z7v4m.js";import"./chunk-33bqb969.js";import"./chunk-nnhhr1jx.js";import"./chunk-hvd71q4d.js";import"./chunk-qab38xwm.js";import"./chunk-54d75fvc.js";import"./chunk-1ys2azv7.js";import"./chunk-0n31r0pn.js";import"./chunk-fn8vqr8w.js";import"./chunk-e20rp2e0.js";import"./chunk-em2nh00t.js";import"./chunk-8ae0db2r.js";import"./chunk-f39k86ma.js";import"./chunk-tqraa7nr.js";import"./chunk-0558tzyr.js";import"./chunk-9142y21k.js";import"./chunk-9yqw3cey.js";import"./chunk-kaqfcdks.js";import"./chunk-s6q6qyzp.js";import"./chunk-cews3k3h.js";import"./chunk-nfmdzyhb.js";import"./chunk-2benbg1m.js";import"./chunk-mzeqwxfp.js";import"./chunk-znja1j7d.js";import"./chunk-2r6jss2t.js";import"./chunk-x5ty8x5x.js";import"./chunk-jtxx7y7p.js";import"./chunk-0pf46r3n.js";import"./chunk-pp9fwat1.js";import"./chunk-cwves0z5.js";import"./chunk-k45y0n34.js";import"./chunk-d2fvt8sx.js";import"./chunk-gq4w1rkv.js";import"./chunk-n9r1w949.js";import"./chunk-tjcq1xy5.js";import"./chunk-65h6gpwy.js";import{Wk,AJ}from"./chunk-mhx67sp1.js";import{qi,gAe,hre,Xm,pw}from"./chunk-qp4me6fz.js";import"./chunk-a0tp9hpv.js";import{ra}from"./chunk-9rzmpagp.js";import"./chunk-se3vf90q.js";import"./chunk-5t955j7t.js";import"./chunk-sqdvc1yq.js";import"./chunk-1pyajec6.js";import"./chunk-429awvea.js";import"./chunk-s0y0sg0y.js";import"./chunk-c6hyaq7k.js";import"./chunk-y7bjs1t6.js";import{Ae}from"./chunk-55pqc2de.js";import{readFileSync as S}from"fs";import{join as u}from"path";var p=Ae("./loopAutonomousPreamble-07qcyhv4.md");var y=Ae("./loopAutonomousPreamblePersistent-3zqtkrvg.md");function g(){if(a.CLAUDE_CODE_LOOP_PERSISTENT)return!0;return x("tengu_kairos_loop_persistent",!1)}function v(){return g()?y:p}function w(){i("tengu_kairos_loop_persistent_activated",{variant:g()})}function h(e=!1){if(!AJ())return"";let o=!e&&g()?"newly blocked on a decision you won't make alone, you're ending the loop":"newly blocked on a decision you won't make alone, third straight tick with nothing to do, you're ending the loop";return`

Use ${Wk} when the loop can't move further without the user, or when something landed that they'd want to act on now: ${o}, or a major update arrived (CI went red, a review changes the plan). Progress you made yourself isn't a trigger \u2014 the transcript covers that. One ping per state, not per tick.`}function b(){return`# Autonomous loop tick

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${qi} from this tick.${h()}`}var m=`

If a ${ra} is armed (check ${pw}), keep \`delaySeconds\` at 1200\u20131800s \u2014 the ${ra} is the wake signal and this is only the fallback heartbeat. If you were woken by a \`<task-notification>\`, handle the event before deciding whether to re-arm. To stop the loop, call ${qi} with \`stop: true\` and ${Xm} the monitor (use ${pw} to find its task ID if no longer in context).`;function E(){return`# Autonomous loop tick (dynamic pacing)

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${qi} tool (not a recurring cron). To keep the loop alive, call ${qi} again at the end of this turn with \`prompt\` set to the literal sentinel \`${hre}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${m}${h()}`}function I(e){return e===gAe||e===hre}function L(e,t){if(!I(t))return null;w();let o=t===hre?E():b();if(e.autonomousPreambleDelivered||e.lastLoopFileDelivered!==null)return o;return e.autonomousPreambleDelivered=!0,`${v()}

---

${o}`}var k="__autonomous_preamble__",C="<<loop.md>>",d="<<loop.md-dynamic>>";function F(){return`# /loop tick \u2014 loop.md tasks

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${qi} from this tick.${h(!0)}`}function M(){return`# /loop tick \u2014 loop.md tasks (dynamic pacing)

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${qi} tool (not a recurring cron). To keep the loop alive, call ${qi} again at the end of this turn with \`prompt\` set to the literal sentinel \`${d}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${m}${h(!0)}`}function N(){return`# /loop tick \u2014 loop.md absent (dynamic pacing)

loop.md is not currently present. Run the autonomous check using the loop instructions established earlier in this conversation.

You scheduled this tick via the ${qi} tool (not a recurring cron). To keep the loop alive \u2014 and to pick up loop.md if it is recreated \u2014 call ${qi} again at the end of this turn with \`prompt\` set to the literal sentinel \`${d}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${m}${h()}`}var l=25000;function P(e){if(e.length<=l)return e;let t=e.lastIndexOf(`
`,l);return`${e.slice(0,t>0?t:l)}

> WARNING: loop.md was truncated to ${l} bytes. Keep the task list concise.`}function _(){return c(u(sn(),".claude","loop.md"))??c(u(be(),"loop.md"))}function c(e){let t;try{t=S(e,"utf-8")}catch(n){if(kt(n)||A(n)==="EISDIR")return null;throw n}let o=t.trim();if(o.length===0)return null;return{path:e,content:P(o)}}async function D(e){if(!e)return _();let t=c(u(sn(),".claude","loop.md"));if(t)return t;let o=u(be(),"loop.md"),n=await e.read([Ee.state("loop-file")]);if(!n.ok)return c(o);let r=n.value.items[0];if(!r.found)return null;let s=Buffer.from(r.value.buffer,r.value.byteOffset,r.value.byteLength).toString("utf-8").trim();if(s.length===0)return null;return{path:o,content:P(s)}}function f(e){return e===C||e===d}function q(e,t){if(!f(t))return null;return T(e,t,_())}async function W(e,t,o){if(!f(t))return null;return T(e,t,await D(o))}function T(e,t,o){let n=t===d;if(o){let s=n?M():F();if(e.lastLoopFileDelivered===o.content)return s;return e.lastLoopFileDelivered=o.content,`# /loop tick \u2014 tasks from ${o.path}

The user configured a loop-tasks file. Work through the tasks defined below; these are the instructions for this tick and every subsequent tick (the reminder on later fires refers back to this message).

---

${o.content}

---

${s}`}w();let r=n?N():b();if(e.lastLoopFileDelivered===k||e.autonomousPreambleDelivered)return r;return e.lastLoopFileDelivered=k,e.autonomousPreambleDelivered=!0,`${v()}

---

${r}`}function re(e){return I(e)||f(e)}function se(e,t){return L(e,t)??q(e,t)??t}async function ae(e,t,o){return L(e,t)??await W(e,t,o)??t}export{d as LOOP_FILE_DYNAMIC_SENTINEL,C as LOOP_FILE_SENTINEL,v as getAutonomousLoopPreamble,re as isLoopDefaultSentinel,f as isLoopFileSentinel,w as logAutonomousLoopActivation,D as readLoopFileAsync,se as resolveLoopDefaultFire,ae as resolveLoopDefaultFireAsync};
