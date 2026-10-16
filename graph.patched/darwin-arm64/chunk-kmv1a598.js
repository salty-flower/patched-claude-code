// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Ue}from"./chunk-z5vzymyr.js";import"./chunk-bkygtq8f.js";import"./chunk-3mdayxq0.js";import{Jr,eo}from"./chunk-xzypj06m.js";import"./chunk-278j353c.js";import"./chunk-dnq93t1z.js";import{v,Wt}from"./chunk-wkh5syvr.js";import"./chunk-54xe5s81.js";import"./chunk-r0a9v21k.js";import{et,qe,k}from"./chunk-1901fdh6.js";import{xe}from"./chunk-6dw7xt0q.js";import"./chunk-yh19hj71.js";import{a}from"./chunk-k4g6y57j.js";import"./chunk-hbbqggzw.js";import"./chunk-bnfhb7sj.js";import"./chunk-6bcyaxwk.js";import"./chunk-btnsqe7h.js";import"./chunk-e666gr8q.js";import"./chunk-73603qq3.js";import"./chunk-td5pjp2j.js";import{i}from"./chunk-52pf9qag.js";import"./chunk-n1esck2w.js";import"./chunk-7snmbrvc.js";import"./chunk-xqs3dvj3.js";import"./chunk-tksxzgy9.js";import"./chunk-0y24kpg2.js";import"./chunk-65qd2bnn.js";import"./chunk-35w1n511.js";import"./chunk-8zhg89kk.js";import"./chunk-h7da0bhz.js";import"./chunk-vv7fafr9.js";import"./chunk-fgjmf9pc.js";import"./chunk-ye9nkzrb.js";import"./chunk-mn5cr59w.js";import"./chunk-44kx210g.js";import"./chunk-hh9t8f7t.js";import"./chunk-wrzcmmn0.js";import"./chunk-nz45cq1q.js";import"./chunk-txv2yh90.js";import"./chunk-5r64b6x9.js";import"./chunk-jn6attna.js";import"./chunk-718k5xe7.js";import"./chunk-gafqfm7x.js";import"./chunk-tx0fhcwf.js";import"./chunk-682ngkw1.js";import"./chunk-g3stg8d4.js";import"./chunk-jybqja29.js";import"./chunk-d9vq4daa.js";import"./chunk-47nfkk7z.js";import"./chunk-fbw24n5y.js";import"./chunk-d0wdnxhm.js";import"./chunk-pj4gy1za.js";import"./chunk-zw6exh70.js";import"./chunk-dke9y8sr.js";import"./chunk-61p68esv.js";import"./chunk-zak8j3he.js";import"./chunk-nvk7bh0e.js";import"./chunk-w4a6kzc8.js";import"./chunk-bdh8gqj2.js";import"./chunk-1jaxs49d.js";import"./chunk-c32ssgw0.js";import"./chunk-fekfnp3p.js";import"./chunk-8vbtf69d.js";import"./chunk-n98x2tj8.js";import"./chunk-kww3qk2q.js";import"./chunk-k6f1e9pp.js";import"./chunk-ektty2ew.js";import"./chunk-0dnnva21.js";import"./chunk-vndcs4rv.js";import"./chunk-wna8ryc8.js";import"./chunk-3c05e83r.js";import"./chunk-1qxwm3cf.js";import"./chunk-0rg61144.js";import"./chunk-e65h3rht.js";import"./chunk-7nqmd82e.js";import"./chunk-xewk85mf.js";import"./chunk-ge9ewwa2.js";import"./chunk-3vv2e847.js";import"./chunk-8kj4j9d0.js";import"./chunk-nvfrrmwj.js";import{nm}from"./chunk-rk99n4cg.js";import"./chunk-b39hwker.js";import"./chunk-798vwh4r.js";import"./chunk-3vzn6jff.js";import"./chunk-3sm6609v.js";import"./chunk-zwab6e3j.js";import"./chunk-dq486axg.js";import"./chunk-5kvhbyg2.js";import"./chunk-aw531er1.js";import{RPe}from"./chunk-pydxtmns.js";import"./chunk-w0epabcb.js";import{d0}from"./chunk-1k9d5t6j.js";import{ml,w9e,TPe,aBn,EA,vd}from"./chunk-xn98vn34.js";import{qnt}from"./chunk-c48cydm0.js";import"./chunk-qrgnv250.js";import{sI}from"./chunk-yv1w5cs5.js";import{LU}from"./chunk-ekzaz2yh.js";import{gl}from"./chunk-vpy3zf20.js";import"./chunk-y1ny4q9x.js";import"./chunk-xq204fcy.js";import"./chunk-74ye1fde.js";import"./chunk-p28cak91.js";import"./chunk-zs3v19vj.js";import"./chunk-ps65a1ga.js";import"./chunk-nxshfbqz.js";import"./chunk-tj5jhejv.js";import"./chunk-nsdbpz9m.js";import"./chunk-3my4rrnz.js";import"./chunk-dztjxxyx.js";import"./chunk-zds0nx71.js";import"./chunk-js1hm3rq.js";import"./chunk-jr1px7r3.js";import"./chunk-7dnefg3p.js";import"./chunk-pk7evkcs.js";import"./chunk-c1a9wnpp.js";import"./chunk-760c7t99.js";import{Le}from"./chunk-71kjn9x8.js";import{readFileSync as x}from"fs";import{readFile as M}from"fs/promises";import{join as L}from"path";var p=Le("./loopAutonomousPreamble-07qcyhv4.md.embedded.txt");var y=Le("./loopAutonomousPreamblePersistent-3zqtkrvg.md.embedded.txt");function c(){if(a.CLAUDE_CODE_LOOP_PERSISTENT)return!0;return k("tengu_kairos_loop_persistent",!1)}function I(){let e=c()?y:p,t=qnt({forCloudSession:Boolean(a.CLAUDE_CODE_REMOTE)});return t?`${e.trimEnd()}

${t}
`:e}function P(){i("tengu_kairos_loop_persistent_activated",{variant:c()})}function s(e=!1){if(!RPe())return"";let o=!e&&c()?"newly blocked on a decision you won't make alone, you're ending the loop":"newly blocked on a decision you won't make alone, third straight tick with nothing to do, you're ending the loop";return`

Use ${sI} when the loop can't move further without the user, or when something landed that they'd want to act on now: ${o}, or a major update arrived (CI went red, a review changes the plan). Progress you made yourself isn't a trigger \u2014 the transcript covers that. One ping per state, not per tick.`}function _(){return`# Autonomous loop tick

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${ml} from this tick.${s()}`}function d(){let e=et(),t=LU(qe(e),e),o=d0(),r=o?`send a brief status update for this tick via ${nm}`:"write a brief status update for this tick",n=t?`Immediately before re-arming, ${r}.`:`After re-arming, ${r}.`;return`

If a ${gl} is armed (check ${EA}), keep \`delaySeconds\` at 1200\u20131800s \u2014 the ${gl} is the wake signal and this is only the fallback heartbeat. If you were woken by a \`<task-notification>\`, handle the event before deciding whether to re-arm. ${n} ${aBn({preArmStatus:t,briefMode:o})} To stop the loop, call ${ml} with \`stop: true\` and ${vd} the monitor (use ${EA} to find its task ID if no longer in context).`}function N(){return`# Autonomous loop tick (dynamic pacing)

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${ml} tool (not a recurring cron). To keep the loop alive, call ${ml} again this turn with \`prompt\` set to the literal sentinel \`${TPe}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${d()}${s()}`}function A(e){return e===w9e||e===TPe}function S(e,t){if(!A(t))return null;P();let o=t===TPe?N():_();if(e.autonomousPreambleDelivered||e.lastLoopFileDelivered!==null)return o;return e.autonomousPreambleDelivered=!0,`${I()}

---

${o}`}var w="__autonomous_preamble__",D="<<loop.md>>",l="<<loop.md-dynamic>>";function q(){return`# /loop tick \u2014 loop.md tasks

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${ml} from this tick.${s(!0)}`}function j(){return`# /loop tick \u2014 loop.md tasks (dynamic pacing)

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${ml} tool (not a recurring cron). To keep the loop alive, call ${ml} again this turn with \`prompt\` set to the literal sentinel \`${l}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${d()}${s(!0)}`}function B(){return`# /loop tick \u2014 loop.md absent (dynamic pacing)

loop.md is not currently present. Run the autonomous check using the loop instructions established earlier in this conversation.

You scheduled this tick via the ${ml} tool (not a recurring cron). To keep the loop alive \u2014 and to pick up loop.md if it is recreated \u2014 call ${ml} again this turn with \`prompt\` set to the literal sentinel \`${l}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${d()}${s()}`}var h=25000;function U(e){if(e.length<=h)return e;let t=e.lastIndexOf(`
`,h);return`${e.slice(0,t>0?t:h)}

> WARNING: loop.md was truncated to ${h} bytes. Keep the task list concise.`}function W(){return b(T())??b(O())}function T(){return L(eo()??Jr(),".claude","loop.md")}function O(){return L(xe(),"loop.md")}function b(e){let t;try{t=x(e,"utf-8")}catch(o){return R(o)}return g(e,t)}async function u(e){let t;try{t=await M(e,"utf-8")}catch(o){return R(o)}return g(e,t)}function R(e){if(Wt(e)||v(e)==="EISDIR")return null;throw e}function g(e,t){let o=t.trim();if(o.length===0)return null;return{path:e,content:U(o)}}async function Y(e){let t=await u(T());if(t)return t;let o=O();if(!e)return u(o);let r=await e.read([Ue.state("loop-file")]);if(!r.ok)return u(o);let n=r.value.items[0];if(!n.found)return null;return g(o,Buffer.from(n.value.buffer,n.value.byteOffset,n.value.byteLength).toString("utf-8"))}function m(e){return e===D||e===l}function H(e,t){if(!m(t))return null;return E(e,t,W())}async function z(e,t,o){if(!m(t))return null;return E(e,t,await Y(o))}function E(e,t,o){let r=t===l;if(o){let f=r?j():q();if(e.lastLoopFileDelivered===o.content)return f;return e.lastLoopFileDelivered=o.content,`# /loop tick \u2014 tasks from ${o.path}

The user configured a loop-tasks file. Work through the tasks defined below; these are the instructions for this tick and every subsequent tick (the reminder on later fires refers back to this message).

---

${o.content}

---

${f}`}P();let n=r?B():_();if(e.lastLoopFileDelivered===w||e.autonomousPreambleDelivered)return n;return e.lastLoopFileDelivered=w,e.autonomousPreambleDelivered=!0,`${I()}

---

${n}`}function ye(e){return A(e)||m(e)}function we(e,t){return S(e,t)??H(e,t)??t}async function ke(e,t,o){return S(e,t)??await z(e,t,o)??t}export{l as LOOP_FILE_DYNAMIC_SENTINEL,D as LOOP_FILE_SENTINEL,I as getAutonomousLoopPreamble,ye as isLoopDefaultSentinel,m as isLoopFileSentinel,P as logAutonomousLoopActivation,Y as readLoopFileAsync,we as resolveLoopDefaultFire,ke as resolveLoopDefaultFireAsync};
