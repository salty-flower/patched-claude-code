// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{ve}from"./chunk-ptdm1fhw.js";import{hn}from"./chunk-x1rrg5j2.js";import"./chunk-jdw11prg.js";import"./chunk-56nvyfje.js";import"./chunk-1mrhsd7s.js";import{L}from"./chunk-x722nt0q.js";import{be}from"./chunk-kn2qhfka.js";import"./chunk-55w4bsdv.js";import"./chunk-9fysw8jv.js";import{a}from"./chunk-m92n5xra.js";import"./chunk-m7w5m1w6.js";import{E,Lt}from"./chunk-058caznt.js";import"./chunk-97tbrkcc.js";import"./chunk-fzpv8ev5.js";import"./chunk-xmrr4sh8.js";import"./chunk-ras23w04.js";import"./chunk-6rkpsn9e.js";import"./chunk-ck0tqv1m.js";import{s}from"./chunk-9f9fskgc.js";import"./chunk-spz20jb6.js";import"./chunk-616tsvrd.js";import"./chunk-n8g979s0.js";import"./chunk-mxy52vze.js";import"./chunk-zk8esmth.js";import"./chunk-bx79h7g8.js";import"./chunk-k1wkanbv.js";import"./chunk-7y5wjz4e.js";import"./chunk-vdqz95a3.js";import"./chunk-5dw4kvcq.js";import"./chunk-gxyczd8c.js";import"./chunk-h96shwz8.js";import"./chunk-gzwhm5vd.js";import"./chunk-nwzn6gxv.js";import"./chunk-enjww0fp.js";import"./chunk-mzmfq60a.js";import"./chunk-ye42pw2j.js";import"./chunk-0dkpd8qq.js";import"./chunk-67nd7etf.js";import"./chunk-7xxnrgeg.js";import"./chunk-rahwxqh8.js";import"./chunk-m0a16ehy.js";import"./chunk-rjxafr3h.js";import"./chunk-1v541dwj.js";import"./chunk-21dppk21.js";import"./chunk-edmcaynh.js";import"./chunk-a7a5sap3.js";import"./chunk-7r03n5n9.js";import"./chunk-35w62chd.js";import"./chunk-9pd12rac.js";import"./chunk-8trhjkwe.js";import"./chunk-xfn8hpdj.js";import"./chunk-8mbwgjdd.js";import"./chunk-wxd1scze.js";import"./chunk-77152aqa.js";import"./chunk-33da912m.js";import"./chunk-x67fwt53.js";import"./chunk-5t2g7ar8.js";import"./chunk-pwdby7t2.js";import"./chunk-vv5g97a8.js";import"./chunk-a0qeq8pm.js";import"./chunk-9qgz04yg.js";import"./chunk-b5ax9mbm.js";import"./chunk-4z2eqcrq.js";import"./chunk-b3pxzdmn.js";import"./chunk-ta3hhm0z.js";import"./chunk-2yqsfgga.js";import"./chunk-trntcdrz.js";import"./chunk-nmde69vm.js";import"./chunk-3r19kwqx.js";import"./chunk-55t63zqr.js";import"./chunk-j2rxdvy0.js";import"./chunk-0xd0k64r.js";import"./chunk-b4cswg8c.js";import"./chunk-a3w4apvy.js";import{ET,z7}from"./chunk-31k5d81d.js";import{na,ake,qoe,Zg,Qw}from"./chunk-96acb4pv.js";import"./chunk-3e1zwnk7.js";import{ga}from"./chunk-zp04wyav.js";import"./chunk-zc7jwbz1.js";import"./chunk-50etkfry.js";import"./chunk-c6eb44np.js";import"./chunk-nc8ww32a.js";import"./chunk-my1n9ey3.js";import"./chunk-v10h0yg2.js";import{ke}from"./chunk-qyvz15br.js";import{readFileSync as S}from"fs";import{join as u}from"path";var g=ke("./loopAutonomousPreamble-07qcyhv4.md");var y=ke("./loopAutonomousPreamblePersistent-3zqtkrvg.md");var re=g;function m(){if(a.CLAUDE_CODE_LOOP_PERSISTENT)return!0;return L("tengu_kairos_loop_persistent",!1)}function v(){return m()?y:g}function w(){s("tengu_kairos_loop_persistent_activated",{variant:m()})}function h(e=!1){if(!z7())return"";let o=!e&&m()?"newly blocked on a decision you won't make alone, you're ending the loop":"newly blocked on a decision you won't make alone, third straight tick with nothing to do, you're ending the loop";return`

Use ${ET} when the loop can't move further without the user, or when something landed that they'd want to act on now: ${o}, or a major update arrived (CI went red, a review changes the plan). Progress you made yourself isn't a trigger \u2014 the transcript covers that. One ping per state, not per tick.`}function b(){return`# Autonomous loop tick

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${na} from this tick.${h()}`}var f=`

If a ${ga} is armed (check ${Qw}), keep \`delaySeconds\` at 1200\u20131800s \u2014 the ${ga} is the wake signal and this is only the fallback heartbeat. If you were woken by a \`<task-notification>\`, handle the event before deciding whether to re-arm. To stop the loop, call ${na} with \`stop: true\` and ${Zg} the monitor (use ${Qw} to find its task ID if no longer in context).`;function x(){return`# Autonomous loop tick (dynamic pacing)

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${na} tool (not a recurring cron). To keep the loop alive, call ${na} again at the end of this turn with \`prompt\` set to the literal sentinel \`${qoe}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${f}${h()}`}function I(e){return e===ake||e===qoe}function P(e,t){if(!I(t))return null;w();let o=t===qoe?x():b();if(e.autonomousPreambleDelivered||e.lastLoopFileDelivered!==null)return o;return e.autonomousPreambleDelivered=!0,`${v()}

---

${o}`}var k="__autonomous_preamble__",C="<<loop.md>>",d="<<loop.md-dynamic>>";function F(){return`# /loop tick \u2014 loop.md tasks

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${na} from this tick.${h(!0)}`}function M(){return`# /loop tick \u2014 loop.md tasks (dynamic pacing)

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${na} tool (not a recurring cron). To keep the loop alive, call ${na} again at the end of this turn with \`prompt\` set to the literal sentinel \`${d}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${f}${h(!0)}`}function N(){return`# /loop tick \u2014 loop.md absent (dynamic pacing)

loop.md is not currently present. Run the autonomous check using the loop instructions established earlier in this conversation.

You scheduled this tick via the ${na} tool (not a recurring cron). To keep the loop alive \u2014 and to pick up loop.md if it is recreated \u2014 call ${na} again at the end of this turn with \`prompt\` set to the literal sentinel \`${d}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${f}${h()}`}var l=25000;function _(e){if(e.length<=l)return e;let t=e.lastIndexOf(`
`,l);return`${e.slice(0,t>0?t:l)}

> WARNING: loop.md was truncated to ${l} bytes. Keep the task list concise.`}function T(){return c(u(hn(),".claude","loop.md"))??c(u(be(),"loop.md"))}function c(e){let t;try{t=S(e,"utf-8")}catch(n){if(Lt(n)||E(n)==="EISDIR")return null;throw n}let o=t.trim();if(o.length===0)return null;return{path:e,content:_(o)}}async function D(e){if(!e)return T();let t=c(u(hn(),".claude","loop.md"));if(t)return t;let o=u(be(),"loop.md"),n=await e.read([ve.state("loop-file")]);if(!n.ok)return c(o);let i=n.value.items[0];if(!i.found)return null;let r=Buffer.from(i.value.buffer,i.value.byteOffset,i.value.byteLength).toString("utf-8").trim();if(r.length===0)return null;return{path:o,content:_(r)}}function p(e){return e===C||e===d}function q(e,t){if(!p(t))return null;return A(e,t,T())}async function W(e,t,o){if(!p(t))return null;return A(e,t,await D(o))}function A(e,t,o){let n=t===d;if(o){let r=n?M():F();if(e.lastLoopFileDelivered===o.content)return r;return e.lastLoopFileDelivered=o.content,`# /loop tick \u2014 tasks from ${o.path}

The user configured a loop-tasks file. Work through the tasks defined below; these are the instructions for this tick and every subsequent tick (the reminder on later fires refers back to this message).

---

${o.content}

---

${r}`}w();let i=n?N():b();if(e.lastLoopFileDelivered===k||e.autonomousPreambleDelivered)return i;return e.lastLoopFileDelivered=k,e.autonomousPreambleDelivered=!0,`${v()}

---

${i}`}function se(e){return I(e)||p(e)}function ae(e,t){return P(e,t)??q(e,t)??t}async function he(e,t,o){return P(e,t)??await W(e,t,o)??t}export{re as AUTONOMOUS_LOOP_PREAMBLE,d as LOOP_FILE_DYNAMIC_SENTINEL,C as LOOP_FILE_SENTINEL,v as getAutonomousLoopPreamble,I as isAutonomousLoopSentinel,se as isLoopDefaultSentinel,p as isLoopFileSentinel,m as isLoopPersistentPreambleEnabled,w as logAutonomousLoopActivation,T as readLoopFile,D as readLoopFileAsync,P as resolveAutonomousLoopFire,ae as resolveLoopDefaultFire,he as resolveLoopDefaultFireAsync,q as resolveLoopFileFire,W as resolveLoopFileFireAsync};
