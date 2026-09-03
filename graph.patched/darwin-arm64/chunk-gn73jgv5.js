// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{Ae}from"./chunk-zjtbqw2e.js";import{mn}from"./chunk-hdbxv3pp.js";import"./chunk-5e3knf27.js";import"./chunk-ma94d7pd.js";import"./chunk-gh3qnpny.js";import{P}from"./chunk-h6md7820.js";import{Se}from"./chunk-2cgtbdj1.js";import"./chunk-ffgkv432.js";import"./chunk-t1t1emvm.js";import{a}from"./chunk-pv906ex9.js";import"./chunk-88cgz317.js";import{E,Pt}from"./chunk-pc7b8z35.js";import"./chunk-2avye5sw.js";import"./chunk-t2jwg94b.js";import"./chunk-2mb81hfz.js";import"./chunk-qkcr56w2.js";import"./chunk-1mtde6n1.js";import"./chunk-wv4b4ave.js";import{s}from"./chunk-kzyd0fd4.js";import"./chunk-wpdwa7yz.js";import"./chunk-yxmvvxaq.js";import"./chunk-yx1gn1w6.js";import"./chunk-wmmywewf.js";import"./chunk-73z3qwhg.js";import"./chunk-qw2xqmjm.js";import"./chunk-pv31m1gp.js";import"./chunk-h2gsgpx0.js";import"./chunk-0s8h31st.js";import"./chunk-k3mxj323.js";import"./chunk-kzsh05tm.js";import"./chunk-p6qksxwe.js";import"./chunk-wvv6qxhz.js";import"./chunk-d0r3tzx0.js";import"./chunk-s20s1ge7.js";import"./chunk-tgbc60ar.js";import"./chunk-dqgnfptc.js";import"./chunk-qfzsdjtj.js";import"./chunk-yhqjr2er.js";import"./chunk-akratr0p.js";import"./chunk-5b4s2jqq.js";import"./chunk-v94ds1sm.js";import"./chunk-2czbv1yw.js";import"./chunk-kmbbckxk.js";import"./chunk-gmk3nm4k.js";import"./chunk-046h39gw.js";import"./chunk-04r19fmz.js";import"./chunk-xwwpgrkv.js";import"./chunk-gdx67b65.js";import"./chunk-r0hsft7w.js";import"./chunk-ztx67v38.js";import"./chunk-j64ncx4g.js";import"./chunk-1h1jces6.js";import"./chunk-q84dja28.js";import"./chunk-09669z0m.js";import"./chunk-ndfabcjs.js";import"./chunk-3yv85b0k.js";import"./chunk-0g5fhtke.js";import"./chunk-msx8gtcp.js";import"./chunk-rgyha56k.js";import"./chunk-mrrqne4r.js";import"./chunk-zd4qet6w.js";import"./chunk-pfd7xc5y.js";import"./chunk-m6f6yn76.js";import"./chunk-sw1cad4q.js";import"./chunk-2q2nc49z.js";import"./chunk-gy3td9bv.js";import"./chunk-m2hw088w.js";import"./chunk-3vg54qd4.js";import"./chunk-1m8djgca.js";import"./chunk-hr8wrrm4.js";import"./chunk-w85ypat4.js";import"./chunk-v5tk64qw.js";import{mR,fJ}from"./chunk-kmeeqbwk.js";import{wa,zAe,roe,dy,Uw}from"./chunk-akrtqq42.js";import"./chunk-tcyadk4p.js";import{ca}from"./chunk-trewd6vn.js";import"./chunk-k2qx3wsk.js";import"./chunk-dhks5jtn.js";import"./chunk-tnjm8sjt.js";import"./chunk-1ghtgc3m.js";import"./chunk-bpk2rz0h.js";import"./chunk-gjjv0be0.js";import{Ce}from"./chunk-bge67taw.js";import{readFileSync as S}from"fs";import{join as u}from"path";var g=Ce("./loopAutonomousPreamble-07qcyhv4.md");var y=Ce("./loopAutonomousPreamblePersistent-3zqtkrvg.md");var re=g;function m(){if(a.CLAUDE_CODE_LOOP_PERSISTENT)return!0;return P("tengu_kairos_loop_persistent",!1)}function v(){return m()?y:g}function w(){s("tengu_kairos_loop_persistent_activated",{variant:m()})}function h(e=!1){if(!fJ())return"";let o=!e&&m()?"newly blocked on a decision you won't make alone, you're ending the loop":"newly blocked on a decision you won't make alone, third straight tick with nothing to do, you're ending the loop";return`

Use ${mR} when the loop can't move further without the user, or when something landed that they'd want to act on now: ${o}, or a major update arrived (CI went red, a review changes the plan). Progress you made yourself isn't a trigger \u2014 the transcript covers that. One ping per state, not per tick.`}function b(){return`# Autonomous loop tick

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${wa} from this tick.${h()}`}var f=`

If a ${ca} is armed (check ${Uw}), keep \`delaySeconds\` at 1200\u20131800s \u2014 the ${ca} is the wake signal and this is only the fallback heartbeat. If you were woken by a \`<task-notification>\`, handle the event before deciding whether to re-arm. To stop the loop, call ${wa} with \`stop: true\` and ${dy} the monitor (use ${Uw} to find its task ID if no longer in context).`;function x(){return`# Autonomous loop tick (dynamic pacing)

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${wa} tool (not a recurring cron). To keep the loop alive, call ${wa} again at the end of this turn with \`prompt\` set to the literal sentinel \`${roe}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${f}${h()}`}function I(e){return e===zAe||e===roe}function L(e,t){if(!I(t))return null;w();let o=t===roe?x():b();if(e.autonomousPreambleDelivered||e.lastLoopFileDelivered!==null)return o;return e.autonomousPreambleDelivered=!0,`${v()}

---

${o}`}var k="__autonomous_preamble__",C="<<loop.md>>",d="<<loop.md-dynamic>>";function F(){return`# /loop tick \u2014 loop.md tasks

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${wa} from this tick.${h(!0)}`}function M(){return`# /loop tick \u2014 loop.md tasks (dynamic pacing)

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${wa} tool (not a recurring cron). To keep the loop alive, call ${wa} again at the end of this turn with \`prompt\` set to the literal sentinel \`${d}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${f}${h(!0)}`}function N(){return`# /loop tick \u2014 loop.md absent (dynamic pacing)

loop.md is not currently present. Run the autonomous check using the loop instructions established earlier in this conversation.

You scheduled this tick via the ${wa} tool (not a recurring cron). To keep the loop alive \u2014 and to pick up loop.md if it is recreated \u2014 call ${wa} again at the end of this turn with \`prompt\` set to the literal sentinel \`${d}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${f}${h()}`}var l=25000;function _(e){if(e.length<=l)return e;let t=e.lastIndexOf(`
`,l);return`${e.slice(0,t>0?t:l)}

> WARNING: loop.md was truncated to ${l} bytes. Keep the task list concise.`}function T(){return c(u(mn(),".claude","loop.md"))??c(u(Se(),"loop.md"))}function c(e){let t;try{t=S(e,"utf-8")}catch(n){if(Pt(n)||E(n)==="EISDIR")return null;throw n}let o=t.trim();if(o.length===0)return null;return{path:e,content:_(o)}}async function D(e){if(!e)return T();let t=c(u(mn(),".claude","loop.md"));if(t)return t;let o=u(Se(),"loop.md"),n=await e.read([Ae.state("loop-file")]);if(!n.ok)return c(o);let i=n.value.items[0];if(!i.found)return null;let r=Buffer.from(i.value.buffer,i.value.byteOffset,i.value.byteLength).toString("utf-8").trim();if(r.length===0)return null;return{path:o,content:_(r)}}function p(e){return e===C||e===d}function q(e,t){if(!p(t))return null;return A(e,t,T())}async function W(e,t,o){if(!p(t))return null;return A(e,t,await D(o))}function A(e,t,o){let n=t===d;if(o){let r=n?M():F();if(e.lastLoopFileDelivered===o.content)return r;return e.lastLoopFileDelivered=o.content,`# /loop tick \u2014 tasks from ${o.path}

The user configured a loop-tasks file. Work through the tasks defined below; these are the instructions for this tick and every subsequent tick (the reminder on later fires refers back to this message).

---

${o.content}

---

${r}`}w();let i=n?N():b();if(e.lastLoopFileDelivered===k||e.autonomousPreambleDelivered)return i;return e.lastLoopFileDelivered=k,e.autonomousPreambleDelivered=!0,`${v()}

---

${i}`}function se(e){return I(e)||p(e)}function ae(e,t){return L(e,t)??q(e,t)??t}async function he(e,t,o){return L(e,t)??await W(e,t,o)??t}export{re as AUTONOMOUS_LOOP_PREAMBLE,d as LOOP_FILE_DYNAMIC_SENTINEL,C as LOOP_FILE_SENTINEL,v as getAutonomousLoopPreamble,I as isAutonomousLoopSentinel,se as isLoopDefaultSentinel,p as isLoopFileSentinel,m as isLoopPersistentPreambleEnabled,w as logAutonomousLoopActivation,T as readLoopFile,D as readLoopFileAsync,L as resolveAutonomousLoopFire,ae as resolveLoopDefaultFire,he as resolveLoopDefaultFireAsync,q as resolveLoopFileFire,W as resolveLoopFileFireAsync};
