// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{ve}from"./chunk-d6akndrs.js";import{dn}from"./chunk-sgyvc67j.js";import"./chunk-8yfx63va.js";import"./chunk-95e36pja.js";import"./chunk-0yrss36a.js";import{H}from"./chunk-e02s7cks.js";import{be}from"./chunk-g6gcsnnp.js";import"./chunk-vp9rx3bq.js";import"./chunk-2c9ntqb3.js";import{a}from"./chunk-dv6tepz3.js";import"./chunk-3rs4ng0x.js";import"./chunk-am8gnetv.js";import{C,Pt}from"./chunk-rgs4nrpq.js";import"./chunk-wbbe5mtc.js";import"./chunk-kr797g3g.js";import"./chunk-2rebt4am.js";import"./chunk-4thwge0q.js";import{i}from"./chunk-z0p50v56.js";import"./chunk-a25t2bvk.js";import"./chunk-8hm57jxw.js";import"./chunk-40qbe5qj.js";import"./chunk-x9wapt5y.js";import"./chunk-z2rcqcmx.js";import"./chunk-c30w2k35.js";import"./chunk-9r5vc452.js";import"./chunk-8rqwttv3.js";import"./chunk-fk28fhjr.js";import"./chunk-2dxb0egv.js";import"./chunk-knxbj6dd.js";import"./chunk-hv7xv8k9.js";import"./chunk-dr6b4af7.js";import"./chunk-br5w3my7.js";import"./chunk-ysx7ez10.js";import"./chunk-2q7a31tc.js";import"./chunk-jngjxeh6.js";import"./chunk-rccvbg8v.js";import"./chunk-yyyfew8j.js";import"./chunk-jh8csezs.js";import"./chunk-eradmpsk.js";import"./chunk-q87va14m.js";import"./chunk-fx59774s.js";import"./chunk-n5rkcvav.js";import"./chunk-4mnyz1w5.js";import"./chunk-zp3bf2vf.js";import"./chunk-xn4w527t.js";import"./chunk-7vhk7x5v.js";import"./chunk-jkz0x6q2.js";import"./chunk-ssbk02ew.js";import"./chunk-3xk9xykm.js";import"./chunk-v2tkmkax.js";import"./chunk-xsncbnja.js";import"./chunk-azaesbcc.js";import"./chunk-rt87j2wz.js";import"./chunk-m6czhww2.js";import"./chunk-v6ry0gpm.js";import"./chunk-adz7n5a7.js";import"./chunk-hfzdv02p.js";import"./chunk-q8p2ywk2.js";import"./chunk-hsr41a8w.js";import"./chunk-r2phj6np.js";import"./chunk-n0wwgq92.js";import"./chunk-hefafsny.js";import"./chunk-j8dhzt3t.js";import"./chunk-x9sxtx6k.js";import"./chunk-48s4h7y4.js";import"./chunk-pv7bzc31.js";import"./chunk-nh71zkp7.js";import"./chunk-65gr57am.js";import"./chunk-28a80exz.js";import"./chunk-49yzxkrk.js";import{Qk,WQ}from"./chunk-4393waz7.js";import"./chunk-5zbds186.js";import{ra,Zke,sie,ES,Og}from"./chunk-0xe3qmyt.js";import{ma}from"./chunk-nmg1y5ce.js";import"./chunk-c8m0whcr.js";import"./chunk-s09cww1m.js";import"./chunk-qmx5skg1.js";import"./chunk-nznh2rr5.js";import"./chunk-9rpyk3jx.js";import"./chunk-r0enmq3q.js";import"./chunk-pe85fsd6.js";import"./chunk-k42b8hsk.js";import"./chunk-epfresbq.js";import"./chunk-10wetekf.js";import{ke}from"./chunk-bkhfcpjc.js";import{readFileSync as R}from"fs";import{join as u}from"path";var p=ke("./loopAutonomousPreamble-07qcyhv4.md.embedded.txt");var y=ke("./loopAutonomousPreamblePersistent-3zqtkrvg.md.embedded.txt");function g(){if(a.CLAUDE_CODE_LOOP_PERSISTENT)return!0;return H("tengu_kairos_loop_persistent",!1)}function v(){return g()?y:p}function w(){i("tengu_kairos_loop_persistent_activated",{variant:g()})}function h(e=!1){if(!WQ())return"";let o=!e&&g()?"newly blocked on a decision you won't make alone, you're ending the loop":"newly blocked on a decision you won't make alone, third straight tick with nothing to do, you're ending the loop";return`

Use ${Qk} when the loop can't move further without the user, or when something landed that they'd want to act on now: ${o}, or a major update arrived (CI went red, a review changes the plan). Progress you made yourself isn't a trigger \u2014 the transcript covers that. One ping per state, not per tick.`}function b(){return`# Autonomous loop tick

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${ra} from this tick.${h()}`}var m=`

If a ${ma} is armed (check ${ES}), keep \`delaySeconds\` at 1200\u20131800s \u2014 the ${ma} is the wake signal and this is only the fallback heartbeat. If you were woken by a \`<task-notification>\`, handle the event before deciding whether to re-arm. To stop the loop, call ${ra} with \`stop: true\` and ${Og} the monitor (use ${ES} to find its task ID if no longer in context).`;function S(){return`# Autonomous loop tick (dynamic pacing)

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${ra} tool (not a recurring cron). To keep the loop alive, call ${ra} again at the end of this turn with \`prompt\` set to the literal sentinel \`${sie}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${m}${h()}`}function I(e){return e===Zke||e===sie}function L(e,t){if(!I(t))return null;w();let o=t===sie?S():b();if(e.autonomousPreambleDelivered||e.lastLoopFileDelivered!==null)return o;return e.autonomousPreambleDelivered=!0,`${v()}

---

${o}`}var k="__autonomous_preamble__",E="<<loop.md>>",d="<<loop.md-dynamic>>";function x(){return`# /loop tick \u2014 loop.md tasks

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${ra} from this tick.${h(!0)}`}function F(){return`# /loop tick \u2014 loop.md tasks (dynamic pacing)

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${ra} tool (not a recurring cron). To keep the loop alive, call ${ra} again at the end of this turn with \`prompt\` set to the literal sentinel \`${d}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${m}${h(!0)}`}function M(){return`# /loop tick \u2014 loop.md absent (dynamic pacing)

loop.md is not currently present. Run the autonomous check using the loop instructions established earlier in this conversation.

You scheduled this tick via the ${ra} tool (not a recurring cron). To keep the loop alive \u2014 and to pick up loop.md if it is recreated \u2014 call ${ra} again at the end of this turn with \`prompt\` set to the literal sentinel \`${d}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${m}${h()}`}var l=25000;function P(e){if(e.length<=l)return e;let t=e.lastIndexOf(`
`,l);return`${e.slice(0,t>0?t:l)}

> WARNING: loop.md was truncated to ${l} bytes. Keep the task list concise.`}function _(){return c(u(dn(),".claude","loop.md"))??c(u(be(),"loop.md"))}function c(e){let t;try{t=R(e,"utf-8")}catch(n){if(Pt(n)||C(n)==="EISDIR")return null;throw n}let o=t.trim();if(o.length===0)return null;return{path:e,content:P(o)}}async function N(e){if(!e)return _();let t=c(u(dn(),".claude","loop.md"));if(t)return t;let o=u(be(),"loop.md"),n=await e.read([ve.state("loop-file")]);if(!n.ok)return c(o);let r=n.value.items[0];if(!r.found)return null;let s=Buffer.from(r.value.buffer,r.value.byteOffset,r.value.byteLength).toString("utf-8").trim();if(s.length===0)return null;return{path:o,content:P(s)}}function f(e){return e===E||e===d}function D(e,t){if(!f(t))return null;return T(e,t,_())}async function q(e,t,o){if(!f(t))return null;return T(e,t,await N(o))}function T(e,t,o){let n=t===d;if(o){let s=n?F():x();if(e.lastLoopFileDelivered===o.content)return s;return e.lastLoopFileDelivered=o.content,`# /loop tick \u2014 tasks from ${o.path}

The user configured a loop-tasks file. Work through the tasks defined below; these are the instructions for this tick and every subsequent tick (the reminder on later fires refers back to this message).

---

${o.content}

---

${s}`}w();let r=n?M():b();if(e.lastLoopFileDelivered===k||e.autonomousPreambleDelivered)return r;return e.lastLoopFileDelivered=k,e.autonomousPreambleDelivered=!0,`${v()}

---

${r}`}function re(e){return I(e)||f(e)}function se(e,t){return L(e,t)??D(e,t)??t}async function ae(e,t,o){return L(e,t)??await q(e,t,o)??t}export{d as LOOP_FILE_DYNAMIC_SENTINEL,E as LOOP_FILE_SENTINEL,v as getAutonomousLoopPreamble,re as isLoopDefaultSentinel,f as isLoopFileSentinel,w as logAutonomousLoopActivation,N as readLoopFileAsync,se as resolveLoopDefaultFire,ae as resolveLoopDefaultFireAsync};
