// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Ue}from"./chunk-zg8w8y5z.js";import"./chunk-bfqfmbd0.js";import"./chunk-rs6p8dg3.js";import{Jr,eo}from"./chunk-eqmywwjn.js";import"./chunk-qeqy4res.js";import"./chunk-fr28a3he.js";import{E,jt}from"./chunk-w7m8nded.js";import"./chunk-r2xfgg0x.js";import"./chunk-pzq28dp7.js";import{et,Ke,k}from"./chunk-k16gymf7.js";import{Pe}from"./chunk-c61xdsy8.js";import"./chunk-63mtweh2.js";import{a}from"./chunk-xwn0mfnc.js";import"./chunk-8fqmxv14.js";import"./chunk-cwsn6mdf.js";import"./chunk-xc4b32zy.js";import"./chunk-b9getfsf.js";import"./chunk-9pt2nr7j.js";import"./chunk-73603qq3.js";import"./chunk-n1y0nb3t.js";import{i}from"./chunk-h723y8sa.js";import"./chunk-rhe3yjtx.js";import"./chunk-zk4arnjj.js";import"./chunk-30b5ph10.js";import"./chunk-xz2ecwrk.js";import"./chunk-snmng9rv.js";import"./chunk-4dcbf4v7.js";import"./chunk-xx1rar7b.js";import"./chunk-eveykdxw.js";import"./chunk-he4afcmc.js";import"./chunk-g84j6s5r.js";import"./chunk-5znx2wc7.js";import"./chunk-brkdb8k6.js";import"./chunk-sbc6y92x.js";import"./chunk-70f8b1fa.js";import"./chunk-z5pqasm7.js";import"./chunk-wz19y5sy.js";import"./chunk-ameg1sn6.js";import"./chunk-ac6y47nt.js";import"./chunk-he0s6sfd.js";import"./chunk-en4g449d.js";import"./chunk-zkbf0zdp.js";import"./chunk-wrm9spc9.js";import"./chunk-v5v0bm5h.js";import"./chunk-55hpndzc.js";import"./chunk-j0cszb7p.js";import"./chunk-9t95885m.js";import"./chunk-9155m2kg.js";import"./chunk-e6akwa1s.js";import"./chunk-4m7tg52y.js";import"./chunk-0v63deca.js";import"./chunk-v4b5tf75.js";import"./chunk-d3cqnp4r.js";import"./chunk-y70k7r60.js";import"./chunk-a502zyxr.js";import"./chunk-xyn7gydh.js";import"./chunk-kmgwwaz2.js";import"./chunk-rzncn4a3.js";import"./chunk-xsxnmhwb.js";import"./chunk-dzt95g1x.js";import"./chunk-n03wywra.js";import"./chunk-0nwsa03d.js";import"./chunk-xex0gggg.js";import"./chunk-4zax65nq.js";import"./chunk-egsk30hx.js";import"./chunk-gn6vejgv.js";import"./chunk-9vjdjq5x.js";import"./chunk-v55shcxh.js";import"./chunk-spj3hc88.js";import"./chunk-vt9rkdza.js";import"./chunk-5vywp25k.js";import"./chunk-m1dg0rsv.js";import"./chunk-9082r4nb.js";import"./chunk-21ehane9.js";import"./chunk-yfyzz0k6.js";import"./chunk-qj5k75tz.js";import"./chunk-7z1je35j.js";import"./chunk-5v7hcwhj.js";import"./chunk-bkmwhar8.js";import"./chunk-4z1qxvsq.js";import{nm}from"./chunk-bsdd04br.js";import"./chunk-8g5pckzs.js";import"./chunk-694thzp1.js";import"./chunk-b8e5f7zw.js";import"./chunk-3axhkz18.js";import"./chunk-2j2r7x9x.js";import"./chunk-0afeyn3v.js";import"./chunk-vnekd4yc.js";import"./chunk-w1yfjb1j.js";import{wPe}from"./chunk-h7h40rp1.js";import"./chunk-tz5vag1y.js";import{iM}from"./chunk-2sje4m5k.js";import{fl,f3e,SPe,WBn,bA,Ed}from"./chunk-dfajpe70.js";import{Wnt}from"./chunk-rhdtq7c7.js";import"./chunk-cc4g4cbp.js";import{tI}from"./chunk-z6eeygsc.js";import{xU}from"./chunk-5mvc4mz6.js";import{ml}from"./chunk-hjk5rqtq.js";import"./chunk-eykpmd0k.js";import"./chunk-6yjayhyn.js";import"./chunk-m09ded2g.js";import"./chunk-mm8dw908.js";import"./chunk-6z47rnsq.js";import"./chunk-041rk1gc.js";import"./chunk-sdt3vs8w.js";import"./chunk-7qtsq477.js";import"./chunk-peqw4kvv.js";import"./chunk-f83bg975.js";import"./chunk-qn1r3sx1.js";import"./chunk-yhkfehzg.js";import"./chunk-e0thntkh.js";import"./chunk-y6e2zv6a.js";import"./chunk-brdnce5f.js";import"./chunk-8dm571cw.js";import"./chunk-67r4k30a.js";import"./chunk-29rv67gt.js";import{Ne}from"./chunk-a2q6egn2.js";import{readFileSync as x}from"fs";import{readFile as M}from"fs/promises";import{join as v}from"path";var p=Ne("./loopAutonomousPreamble-07qcyhv4.md.embedded.txt");var y=Ne("./loopAutonomousPreamblePersistent-3zqtkrvg.md.embedded.txt");function c(){if(a.CLAUDE_CODE_LOOP_PERSISTENT)return!0;return k("tengu_kairos_loop_persistent",!1)}function L(){let e=c()?y:p,t=Wnt({forCloudSession:Boolean(a.CLAUDE_CODE_REMOTE)});return t?`${e.trimEnd()}

${t}
`:e}function I(){i("tengu_kairos_loop_persistent_activated",{variant:c()})}function s(e=!1){if(!wPe())return"";let o=!e&&c()?"newly blocked on a decision you won't make alone, you're ending the loop":"newly blocked on a decision you won't make alone, third straight tick with nothing to do, you're ending the loop";return`

Use ${tI} when the loop can't move further without the user, or when something landed that they'd want to act on now: ${o}, or a major update arrived (CI went red, a review changes the plan). Progress you made yourself isn't a trigger \u2014 the transcript covers that. One ping per state, not per tick.`}function P(){return`# Autonomous loop tick

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${fl} from this tick.${s()}`}function d(){let e=et(),t=xU(Ke(e),e),o=iM(),r=o?`send a brief status update for this tick via ${nm}`:"write a brief status update for this tick",n=t?`Immediately before re-arming, ${r}.`:`After re-arming, ${r}.`;return`

If a ${ml} is armed (check ${bA}), keep \`delaySeconds\` at 1200\u20131800s \u2014 the ${ml} is the wake signal and this is only the fallback heartbeat. If you were woken by a \`<task-notification>\`, handle the event before deciding whether to re-arm. ${n} ${WBn({preArmStatus:t,briefMode:o})} To stop the loop, call ${fl} with \`stop: true\` and ${Ed} the monitor (use ${bA} to find its task ID if no longer in context).`}function N(){return`# Autonomous loop tick (dynamic pacing)

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${fl} tool (not a recurring cron). To keep the loop alive, call ${fl} again this turn with \`prompt\` set to the literal sentinel \`${SPe}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${d()}${s()}`}function _(e){return e===f3e||e===SPe}function A(e,t){if(!_(t))return null;I();let o=t===SPe?N():P();if(e.autonomousPreambleDelivered||e.lastLoopFileDelivered!==null)return o;return e.autonomousPreambleDelivered=!0,`${L()}

---

${o}`}var w="__autonomous_preamble__",D="<<loop.md>>",l="<<loop.md-dynamic>>";function q(){return`# /loop tick \u2014 loop.md tasks

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${fl} from this tick.${s(!0)}`}function j(){return`# /loop tick \u2014 loop.md tasks (dynamic pacing)

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${fl} tool (not a recurring cron). To keep the loop alive, call ${fl} again this turn with \`prompt\` set to the literal sentinel \`${l}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${d()}${s(!0)}`}function B(){return`# /loop tick \u2014 loop.md absent (dynamic pacing)

loop.md is not currently present. Run the autonomous check using the loop instructions established earlier in this conversation.

You scheduled this tick via the ${fl} tool (not a recurring cron). To keep the loop alive \u2014 and to pick up loop.md if it is recreated \u2014 call ${fl} again this turn with \`prompt\` set to the literal sentinel \`${l}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${d()}${s()}`}var h=25000;function U(e){if(e.length<=h)return e;let t=e.lastIndexOf(`
`,h);return`${e.slice(0,t>0?t:h)}

> WARNING: loop.md was truncated to ${h} bytes. Keep the task list concise.`}function W(){return b(S())??b(T())}function S(){return v(eo()??Jr(),".claude","loop.md")}function T(){return v(Pe(),"loop.md")}function b(e){let t;try{t=x(e,"utf-8")}catch(o){return O(o)}return g(e,t)}async function u(e){let t;try{t=await M(e,"utf-8")}catch(o){return O(o)}return g(e,t)}function O(e){if(jt(e)||E(e)==="EISDIR")return null;throw e}function g(e,t){let o=t.trim();if(o.length===0)return null;return{path:e,content:U(o)}}async function Y(e){let t=await u(S());if(t)return t;let o=T();if(!e)return u(o);let r=await e.read([Ue.state("loop-file")]);if(!r.ok)return u(o);let n=r.value.items[0];if(!n.found)return null;return g(o,Buffer.from(n.value.buffer,n.value.byteOffset,n.value.byteLength).toString("utf-8"))}function m(e){return e===D||e===l}function H(e,t){if(!m(t))return null;return R(e,t,W())}async function z(e,t,o){if(!m(t))return null;return R(e,t,await Y(o))}function R(e,t,o){let r=t===l;if(o){let f=r?j():q();if(e.lastLoopFileDelivered===o.content)return f;return e.lastLoopFileDelivered=o.content,`# /loop tick \u2014 tasks from ${o.path}

The user configured a loop-tasks file. Work through the tasks defined below; these are the instructions for this tick and every subsequent tick (the reminder on later fires refers back to this message).

---

${o.content}

---

${f}`}I();let n=r?B():P();if(e.lastLoopFileDelivered===w||e.autonomousPreambleDelivered)return n;return e.lastLoopFileDelivered=w,e.autonomousPreambleDelivered=!0,`${L()}

---

${n}`}function ye(e){return _(e)||m(e)}function we(e,t){return A(e,t)??H(e,t)??t}async function ke(e,t,o){return A(e,t)??await z(e,t,o)??t}export{l as LOOP_FILE_DYNAMIC_SENTINEL,D as LOOP_FILE_SENTINEL,L as getAutonomousLoopPreamble,ye as isLoopDefaultSentinel,m as isLoopFileSentinel,I as logAutonomousLoopActivation,Y as readLoopFileAsync,we as resolveLoopDefaultFire,ke as resolveLoopDefaultFireAsync};
