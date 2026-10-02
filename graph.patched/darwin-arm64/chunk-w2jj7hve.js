// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{He}from"./chunk-k7eq4ze9.js";import"./chunk-ypa64mmn.js";import"./chunk-g5e6pf8s.js";import{mr,Oo}from"./chunk-a7cah040.js";import"./chunk-nynxm73s.js";import"./chunk-g9zw99sb.js";import{v,Ot}from"./chunk-hs50vfa7.js";import"./chunk-jm8r4kd0.js";import"./chunk-2j7zyd8v.js";import{rt,Be,x}from"./chunk-er6f56rj.js";import{we}from"./chunk-h1eby6n2.js";import"./chunk-dsp1md5e.js";import"./chunk-sxefq60x.js";import{a}from"./chunk-1fpwxv0g.js";import"./chunk-vmffs68f.js";import"./chunk-3wz0srxw.js";import"./chunk-dard33vx.js";import"./chunk-62dhtzrb.js";import"./chunk-zwbw6dvp.js";import"./chunk-mpc9nxv5.js";import"./chunk-a453ergf.js";import{i}from"./chunk-aykv0zbt.js";import"./chunk-sc069zjc.js";import"./chunk-xs651030.js";import"./chunk-57g2c672.js";import"./chunk-35fstck9.js";import"./chunk-ccvm8ey1.js";import"./chunk-ngfc6f6n.js";import"./chunk-n5atsp4q.js";import"./chunk-631kxjhr.js";import"./chunk-rdhfzq5v.js";import"./chunk-3vg91ev9.js";import"./chunk-bt9vca5h.js";import"./chunk-r0wx2yn9.js";import"./chunk-n8h76tq4.js";import"./chunk-fmk5eq99.js";import"./chunk-820d2q3e.js";import"./chunk-by04ga81.js";import"./chunk-nwtspmbg.js";import"./chunk-kpa06dsa.js";import"./chunk-zpb414p7.js";import"./chunk-pgjb8vhf.js";import"./chunk-ya4yfeap.js";import"./chunk-xr1m5xnp.js";import"./chunk-j0n5hmbg.js";import"./chunk-dn2273cv.js";import"./chunk-vratfdfe.js";import"./chunk-3pxs8n2a.js";import"./chunk-e561d543.js";import"./chunk-766463nm.js";import"./chunk-ntsbwr3d.js";import"./chunk-2zhezxsa.js";import"./chunk-kq5cja6x.js";import"./chunk-6kpcse29.js";import"./chunk-58nkm0fd.js";import"./chunk-q8pmvej3.js";import"./chunk-fdyaqynn.js";import"./chunk-wxpgf6xz.js";import"./chunk-tfngbndy.js";import"./chunk-8h01acb1.js";import"./chunk-ykkj96qc.js";import"./chunk-gzx138r6.js";import"./chunk-j3ncme2z.js";import"./chunk-jqre7qs5.js";import"./chunk-awrqx9ff.js";import"./chunk-jadxt0j8.js";import"./chunk-mbr6m81k.js";import"./chunk-p3842md4.js";import"./chunk-fh513ghb.js";import"./chunk-610gtpa9.js";import"./chunk-ka4b5aqy.js";import"./chunk-97k9kd9d.js";import{yp}from"./chunk-pnss6pgj.js";import"./chunk-kt9hyg55.js";import"./chunk-vc06pma6.js";import"./chunk-hjhshw1j.js";import"./chunk-v9v7yqrh.js";import"./chunk-0y6wkmcj.js";import"./chunk-k4m2cmj6.js";import"./chunk-8e9pbm89.js";import{ohe}from"./chunk-5mna6e5z.js";import"./chunk-9dfyh4w7.js";import{rU}from"./chunk-0mkr5g3s.js";import{tl,$Le,ihe,qsn,zf,Mw}from"./chunk-0w2byz16.js";import{TWe}from"./chunk-j3vewtfz.js";import"./chunk-f4rpf8ps.js";import{hI}from"./chunk-ckedzj6a.js";import{vl}from"./chunk-84j3w1eg.js";import{gD}from"./chunk-d4xt7ej2.js";import"./chunk-r60g4ktj.js";import"./chunk-00v37vwv.js";import"./chunk-5yg4avpf.js";import"./chunk-bq7qbt1w.js";import"./chunk-dyxe93g1.js";import"./chunk-tn1j6vmr.js";import"./chunk-99m0p1v3.js";import"./chunk-44118748.js";import"./chunk-kacqaca4.js";import"./chunk-b8ghx04f.js";import"./chunk-r1n6vzwg.js";import"./chunk-y7fvkjrx.js";import"./chunk-y0937590.js";import"./chunk-t2v3fz5w.js";import{Ie}from"./chunk-pj3wn6z3.js";import{readFileSync as F}from"fs";import{readFile as M}from"fs/promises";import{join as b}from"path";var p=Ie("./loopAutonomousPreamble-07qcyhv4.md.embedded.txt");var y=Ie("./loopAutonomousPreamblePersistent-3zqtkrvg.md.embedded.txt");function c(){if(a.CLAUDE_CODE_LOOP_PERSISTENT)return!0;return x("tengu_kairos_loop_persistent",!1)}function L(){let e=c()?y:p,t=TWe({forCloudSession:Boolean(a.CLAUDE_CODE_REMOTE)});return t?`${e.trimEnd()}

${t}
`:e}function I(){i("tengu_kairos_loop_persistent_activated",{variant:c()})}function s(e=!1){if(!ohe())return"";let o=!e&&c()?"newly blocked on a decision you won't make alone, you're ending the loop":"newly blocked on a decision you won't make alone, third straight tick with nothing to do, you're ending the loop";return`

Use ${hI} when the loop can't move further without the user, or when something landed that they'd want to act on now: ${o}, or a major update arrived (CI went red, a review changes the plan). Progress you made yourself isn't a trigger \u2014 the transcript covers that. One ping per state, not per tick.`}function P(){return`# Autonomous loop tick

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${tl} from this tick.${s()}`}function d(){let e=rt(),t=gD(Be(e),e),o=rU(),r=o?`send a brief status update for this tick via ${yp}`:"write a brief status update for this tick",n=t?`Immediately before re-arming, ${r}.`:`After re-arming, ${r}.`;return`

If a ${vl} is armed (check ${Mw}), keep \`delaySeconds\` at 1200\u20131800s \u2014 the ${vl} is the wake signal and this is only the fallback heartbeat. If you were woken by a \`<task-notification>\`, handle the event before deciding whether to re-arm. ${n} ${qsn({preArmStatus:t,briefMode:o})} To stop the loop, call ${tl} with \`stop: true\` and ${zf} the monitor (use ${Mw} to find its task ID if no longer in context).`}function N(){return`# Autonomous loop tick (dynamic pacing)

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${tl} tool (not a recurring cron). To keep the loop alive, call ${tl} again this turn with \`prompt\` set to the literal sentinel \`${ihe}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${d()}${s()}`}function _(e){return e===$Le||e===ihe}function A(e,t){if(!_(t))return null;I();let o=t===ihe?N():P();if(e.autonomousPreambleDelivered||e.lastLoopFileDelivered!==null)return o;return e.autonomousPreambleDelivered=!0,`${L()}

---

${o}`}var w="__autonomous_preamble__",D="<<loop.md>>",l="<<loop.md-dynamic>>";function q(){return`# /loop tick \u2014 loop.md tasks

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${tl} from this tick.${s(!0)}`}function j(){return`# /loop tick \u2014 loop.md tasks (dynamic pacing)

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${tl} tool (not a recurring cron). To keep the loop alive, call ${tl} again this turn with \`prompt\` set to the literal sentinel \`${l}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${d()}${s(!0)}`}function B(){return`# /loop tick \u2014 loop.md absent (dynamic pacing)

loop.md is not currently present. Run the autonomous check using the loop instructions established earlier in this conversation.

You scheduled this tick via the ${tl} tool (not a recurring cron). To keep the loop alive \u2014 and to pick up loop.md if it is recreated \u2014 call ${tl} again this turn with \`prompt\` set to the literal sentinel \`${l}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${d()}${s()}`}var h=25000;function U(e){if(e.length<=h)return e;let t=e.lastIndexOf(`
`,h);return`${e.slice(0,t>0?t:h)}

> WARNING: loop.md was truncated to ${h} bytes. Keep the task list concise.`}function W(){return k(S())??k(T())}function S(){return b(Oo()??mr(),".claude","loop.md")}function T(){return b(we(),"loop.md")}function k(e){let t;try{t=F(e,"utf-8")}catch(o){return O(o)}return g(e,t)}async function u(e){let t;try{t=await M(e,"utf-8")}catch(o){return O(o)}return g(e,t)}function O(e){if(Ot(e)||v(e)==="EISDIR")return null;throw e}function g(e,t){let o=t.trim();if(o.length===0)return null;return{path:e,content:U(o)}}async function Y(e){let t=await u(S());if(t)return t;let o=T();if(!e)return u(o);let r=await e.read([He.state("loop-file")]);if(!r.ok)return u(o);let n=r.value.items[0];if(!n.found)return null;return g(o,Buffer.from(n.value.buffer,n.value.byteOffset,n.value.byteLength).toString("utf-8"))}function m(e){return e===D||e===l}function H(e,t){if(!m(t))return null;return R(e,t,W())}async function z(e,t,o){if(!m(t))return null;return R(e,t,await Y(o))}function R(e,t,o){let r=t===l;if(o){let f=r?j():q();if(e.lastLoopFileDelivered===o.content)return f;return e.lastLoopFileDelivered=o.content,`# /loop tick \u2014 tasks from ${o.path}

The user configured a loop-tasks file. Work through the tasks defined below; these are the instructions for this tick and every subsequent tick (the reminder on later fires refers back to this message).

---

${o.content}

---

${f}`}I();let n=r?B():P();if(e.lastLoopFileDelivered===w||e.autonomousPreambleDelivered)return n;return e.lastLoopFileDelivered=w,e.autonomousPreambleDelivered=!0,`${L()}

---

${n}`}function ye(e){return _(e)||m(e)}function ke(e,t){return A(e,t)??H(e,t)??t}async function be(e,t,o){return A(e,t)??await z(e,t,o)??t}export{l as LOOP_FILE_DYNAMIC_SENTINEL,D as LOOP_FILE_SENTINEL,L as getAutonomousLoopPreamble,ye as isLoopDefaultSentinel,m as isLoopFileSentinel,I as logAutonomousLoopActivation,Y as readLoopFileAsync,ke as resolveLoopDefaultFire,be as resolveLoopDefaultFireAsync};
