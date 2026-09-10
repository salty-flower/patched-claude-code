// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{Ce}from"./chunk-tfmhv9d3.js";import{cn}from"./chunk-cet8na02.js";import"./chunk-3k7pa7mk.js";import"./chunk-wmtek349.js";import"./chunk-awrvr02y.js";import{H}from"./chunk-vryy7b5x.js";import{be}from"./chunk-3kadfzjs.js";import"./chunk-7tpgnqqk.js";import"./chunk-w6n61axt.js";import{a}from"./chunk-qymratxs.js";import"./chunk-jww0ztav.js";import"./chunk-jxvdfgn0.js";import{v,Ht}from"./chunk-wkyng8j1.js";import"./chunk-w930ag8r.js";import"./chunk-fz55wskw.js";import"./chunk-0v0wzs89.js";import"./chunk-e0gvmsm3.js";import"./chunk-554z0m6d.js";import{i}from"./chunk-mx473n83.js";import"./chunk-qc0xda2j.js";import"./chunk-2rwvzqjc.js";import"./chunk-7rf51wwn.js";import"./chunk-dzrwt8xb.js";import"./chunk-71dy1chz.js";import"./chunk-2kk5r9ez.js";import"./chunk-pqwwfxy7.js";import"./chunk-jreee4z9.js";import"./chunk-4kwsawbv.js";import"./chunk-v6bnm6m1.js";import"./chunk-2e3zzta4.js";import"./chunk-az7e2tjv.js";import"./chunk-ddafccqq.js";import"./chunk-mrb6zwbg.js";import"./chunk-1qb0n0qf.js";import"./chunk-1rwk4zv5.js";import"./chunk-1swgmcv7.js";import"./chunk-6qn08fa6.js";import"./chunk-ja8knfm8.js";import"./chunk-e3rr1gh2.js";import"./chunk-1wykq8yr.js";import"./chunk-0at68b1q.js";import"./chunk-wtkjh5e3.js";import"./chunk-herm3ypf.js";import"./chunk-hs6h748p.js";import"./chunk-vnz3x6qp.js";import"./chunk-damz565h.js";import"./chunk-12bhy101.js";import"./chunk-t77qcb29.js";import"./chunk-pcpcxqfq.js";import"./chunk-82syb43r.js";import"./chunk-k2g2a0ht.js";import"./chunk-t8z8yg5e.js";import"./chunk-dt93d1mc.js";import"./chunk-ydfa467f.js";import"./chunk-2qz5gct0.js";import"./chunk-yqjvt149.js";import"./chunk-hndhb8as.js";import"./chunk-93ete5jm.js";import"./chunk-23qdenmd.js";import"./chunk-6yh8411d.js";import"./chunk-4nssmbdg.js";import"./chunk-62vz25mj.js";import"./chunk-543x12r6.js";import"./chunk-ex1zbngg.js";import"./chunk-jh9jc98c.js";import"./chunk-7zp201hw.js";import"./chunk-d7xqqjds.js";import"./chunk-hjmm0v46.js";import"./chunk-as958m82.js";import"./chunk-gdxma5w6.js";import"./chunk-zfh30w3p.js";import"./chunk-2bygyys4.js";import{$k,EQ}from"./chunk-wk0y9srz.js";import"./chunk-s1rfmke7.js";import{Zi,KTe,bse,mS,Eg}from"./chunk-qck9ypwm.js";import{ua}from"./chunk-gsryksdx.js";import"./chunk-2s1d68xx.js";import"./chunk-j6enpas3.js";import"./chunk-pp1ggth1.js";import"./chunk-c7cjjpnh.js";import"./chunk-7ctrabpn.js";import"./chunk-m13zrw5b.js";import"./chunk-5c50n20w.js";import"./chunk-v643fbk1.js";import"./chunk-aynexwte.js";import"./chunk-5dnafksn.js";import{Te}from"./chunk-2cavdc9w.js";import{readFileSync as S}from"fs";import{join as u}from"path";var p=Te("./loopAutonomousPreamble-07qcyhv4.md.embedded.txt");var y=Te("./loopAutonomousPreamblePersistent-3zqtkrvg.md.embedded.txt");function g(){if(a.CLAUDE_CODE_LOOP_PERSISTENT)return!0;return H("tengu_kairos_loop_persistent",!1)}function w(){return g()?y:p}function b(){i("tengu_kairos_loop_persistent_activated",{variant:g()})}function h(e=!1){if(!EQ())return"";let o=!e&&g()?"newly blocked on a decision you won't make alone, you're ending the loop":"newly blocked on a decision you won't make alone, third straight tick with nothing to do, you're ending the loop";return`

Use ${$k} when the loop can't move further without the user, or when something landed that they'd want to act on now: ${o}, or a major update arrived (CI went red, a review changes the plan). Progress you made yourself isn't a trigger \u2014 the transcript covers that. One ping per state, not per tick.`}function I(){return`# Autonomous loop tick

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${Zi} from this tick.${h()}`}var m=`

If a ${ua} is armed (check ${mS}), keep \`delaySeconds\` at 1200\u20131800s \u2014 the ${ua} is the wake signal and this is only the fallback heartbeat. If you were woken by a \`<task-notification>\`, handle the event before deciding whether to re-arm. To stop the loop, call ${Zi} with \`stop: true\` and ${Eg} the monitor (use ${mS} to find its task ID if no longer in context).`;function E(){return`# Autonomous loop tick (dynamic pacing)

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${Zi} tool (not a recurring cron). To keep the loop alive, call ${Zi} again at the end of this turn with \`prompt\` set to the literal sentinel \`${bse}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${m}${h()}`}function L(e){return e===KTe||e===bse}function P(e,t){if(!L(t))return null;b();let o=t===bse?E():I();if(e.autonomousPreambleDelivered||e.lastLoopFileDelivered!==null)return o;return e.autonomousPreambleDelivered=!0,`${w()}

---

${o}`}var k="__autonomous_preamble__",x="<<loop.md>>",d="<<loop.md-dynamic>>";function C(){return`# /loop tick \u2014 loop.md tasks

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${Zi} from this tick.${h(!0)}`}function F(){return`# /loop tick \u2014 loop.md tasks (dynamic pacing)

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${Zi} tool (not a recurring cron). To keep the loop alive, call ${Zi} again at the end of this turn with \`prompt\` set to the literal sentinel \`${d}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${m}${h(!0)}`}function M(){return`# /loop tick \u2014 loop.md absent (dynamic pacing)

loop.md is not currently present. Run the autonomous check using the loop instructions established earlier in this conversation.

You scheduled this tick via the ${Zi} tool (not a recurring cron). To keep the loop alive \u2014 and to pick up loop.md if it is recreated \u2014 call ${Zi} again at the end of this turn with \`prompt\` set to the literal sentinel \`${d}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${m}${h()}`}var l=25000;function _(e){if(e.length<=l)return e;let t=e.lastIndexOf(`
`,l);return`${e.slice(0,t>0?t:l)}

> WARNING: loop.md was truncated to ${l} bytes. Keep the task list concise.`}function T(){return c(u(cn(),".claude","loop.md"))??c(u(be(),"loop.md"))}function c(e){let t;try{t=S(e,"utf-8")}catch(n){if(Ht(n)||v(n)==="EISDIR")return null;throw n}let o=t.trim();if(o.length===0)return null;return{path:e,content:_(o)}}async function N(e){if(!e)return T();let t=c(u(cn(),".claude","loop.md"));if(t)return t;let o=u(be(),"loop.md"),n=await e.read([Ce.state("loop-file")]);if(!n.ok)return c(o);let r=n.value.items[0];if(!r.found)return null;let s=Buffer.from(r.value.buffer,r.value.byteOffset,r.value.byteLength).toString("utf-8").trim();if(s.length===0)return null;return{path:o,content:_(s)}}function f(e){return e===x||e===d}function D(e,t){if(!f(t))return null;return A(e,t,T())}async function q(e,t,o){if(!f(t))return null;return A(e,t,await N(o))}function A(e,t,o){let n=t===d;if(o){let s=n?F():C();if(e.lastLoopFileDelivered===o.content)return s;return e.lastLoopFileDelivered=o.content,`# /loop tick \u2014 tasks from ${o.path}

The user configured a loop-tasks file. Work through the tasks defined below; these are the instructions for this tick and every subsequent tick (the reminder on later fires refers back to this message).

---

${o.content}

---

${s}`}b();let r=n?M():I();if(e.lastLoopFileDelivered===k||e.autonomousPreambleDelivered)return r;return e.lastLoopFileDelivered=k,e.autonomousPreambleDelivered=!0,`${w()}

---

${r}`}function re(e){return L(e)||f(e)}function se(e,t){return P(e,t)??D(e,t)??t}async function ae(e,t,o){return P(e,t)??await q(e,t,o)??t}export{d as LOOP_FILE_DYNAMIC_SENTINEL,x as LOOP_FILE_SENTINEL,w as getAutonomousLoopPreamble,re as isLoopDefaultSentinel,f as isLoopFileSentinel,b as logAutonomousLoopActivation,N as readLoopFileAsync,se as resolveLoopDefaultFire,ae as resolveLoopDefaultFireAsync};
