// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{je}from"./chunk-jjgc4sar.js";import"./chunk-esv3b1gm.js";import"./chunk-bjnpzyk4.js";import{Zr,so}from"./chunk-kpqr86hf.js";import"./chunk-saccfcs4.js";import"./chunk-ny2cqbmq.js";import{v,Wt}from"./chunk-nre716m4.js";import"./chunk-2ckwvz0j.js";import"./chunk-f66mhvm1.js";import"./chunk-cne7d53x.js";import{et,qe,k}from"./chunk-bvn0epzr.js";import{Me}from"./chunk-jrcdjayr.js";import"./chunk-4nyg9560.js";import{a}from"./chunk-h422gpw8.js";import"./chunk-r22r6j92.js";import"./chunk-tdxkq523.js";import"./chunk-pmhx705f.js";import"./chunk-42txhxmf.js";import"./chunk-277zhca1.js";import"./chunk-x352w4g5.js";import"./chunk-4ccvyrtz.js";import"./chunk-tx4cjw3a.js";import{i}from"./chunk-dj0gyv94.js";import"./chunk-53e7d9dh.js";import"./chunk-x6e3j2gn.js";import"./chunk-r2k1mk6b.js";import"./chunk-vtp7mn0a.js";import"./chunk-tac3yhqe.js";import"./chunk-pv6z4j91.js";import"./chunk-bn2qw2he.js";import"./chunk-x44dqwaw.js";import"./chunk-b8vhamvd.js";import"./chunk-6yfz1z3a.js";import"./chunk-2sjtpc7r.js";import"./chunk-x1ddy2ab.js";import"./chunk-hf1d5ysc.js";import"./chunk-vd15k1r3.js";import"./chunk-7606em17.js";import"./chunk-c2wcenam.js";import"./chunk-6pw3jyf9.js";import"./chunk-anq3mk5n.js";import"./chunk-ynakaye4.js";import"./chunk-pvfq0951.js";import"./chunk-prq01t47.js";import"./chunk-gn7avpe5.js";import"./chunk-k9hc2wbs.js";import"./chunk-jdf15pat.js";import"./chunk-5jx42hq1.js";import"./chunk-gzssw8ss.js";import"./chunk-58pv6r0f.js";import"./chunk-96vy91sz.js";import"./chunk-x9kh8z5w.js";import"./chunk-8abawmeq.js";import"./chunk-p7hwh9y2.js";import"./chunk-paax7ahr.js";import"./chunk-q6vwcyd6.js";import"./chunk-thm9hb44.js";import"./chunk-qwytg6a7.js";import"./chunk-yvscxre3.js";import"./chunk-gsezw0ay.js";import"./chunk-cf00bacn.js";import"./chunk-9p2h8en7.js";import"./chunk-ex8w1b3a.js";import"./chunk-dq8wmhwn.js";import"./chunk-2j8n4dhr.js";import"./chunk-2f1hv3xn.js";import"./chunk-xkz94qys.js";import"./chunk-mpngpv83.js";import"./chunk-pag080eb.js";import"./chunk-fpvz4y9b.js";import"./chunk-wpyqskvz.js";import"./chunk-xyewawkm.js";import"./chunk-bj2sgj71.js";import"./chunk-dx8q5svn.js";import"./chunk-jy7b5szn.js";import"./chunk-1vsrvg1r.js";import"./chunk-w1f5ee14.js";import"./chunk-drp9p5tr.js";import"./chunk-kxt3fqm4.js";import"./chunk-gr9e4jde.js";import"./chunk-cwke69cx.js";import"./chunk-j3zya9y2.js";import"./chunk-sm45d99b.js";import{Em}from"./chunk-jwx38c7d.js";import"./chunk-rvawj5kr.js";import"./chunk-c3k8bbad.js";import"./chunk-m4dcxxs2.js";import"./chunk-q2853ac5.js";import"./chunk-kp0m30dm.js";import"./chunk-2gr8qttp.js";import"./chunk-b033gtfe.js";import"./chunk-ts26kr2k.js";import"./chunk-k79rgf3d.js";import{sOe}from"./chunk-9tj4ez3p.js";import"./chunk-xq7cg3sh.js";import"./chunk-2z5wpn62.js";import{RM}from"./chunk-w2xskwhp.js";import{qa,TYe,rOe,ozn,nA,jd}from"./chunk-ewhgg3re.js";import{pst}from"./chunk-g4ef192y.js";import{PI}from"./chunk-946145wb.js";import{ri}from"./chunk-7qnqqn8q.js";import{x1}from"./chunk-mf7bwe3t.js";import"./chunk-68p3980a.js";import"./chunk-8bt01n7s.js";import"./chunk-pk4rzqyt.js";import"./chunk-t3wkkqhe.js";import"./chunk-e20wbzx1.js";import"./chunk-1n7emb86.js";import"./chunk-asr4rkaz.js";import"./chunk-8365qjaj.js";import"./chunk-khsap9cx.js";import"./chunk-3wvm77p0.js";import"./chunk-nncg5t3b.js";import"./chunk-1q6hgkzj.js";import"./chunk-z4ateaw0.js";import"./chunk-aprstpnm.js";import"./chunk-fwck5yrp.js";import"./chunk-esjx5d0h.js";import{Be}from"./chunk-8xa87pyw.js";import{readFileSync as x}from"fs";import{readFile as M}from"fs/promises";import{join as L}from"path";var p=Be("./loopAutonomousPreamble-07qcyhv4.md.embedded.txt");var y=Be("./loopAutonomousPreamblePersistent-3zqtkrvg.md.embedded.txt");function c(){if(a.CLAUDE_CODE_LOOP_PERSISTENT)return!0;return k("tengu_kairos_loop_persistent",!1)}function I(){let e=c()?y:p,t=pst({forCloudSession:Boolean(a.CLAUDE_CODE_REMOTE)});return t?`${e.trimEnd()}

${t}
`:e}function P(){i("tengu_kairos_loop_persistent_activated",{variant:c()})}function s(e=!1){if(!sOe())return"";let o=!e&&c()?"newly blocked on a decision you won't make alone, you're ending the loop":"newly blocked on a decision you won't make alone, third straight tick with nothing to do, you're ending the loop";return`

Use ${PI} when the loop can't move further without the user, or when something landed that they'd want to act on now: ${o}, or a major update arrived (CI went red, a review changes the plan). Progress you made yourself isn't a trigger \u2014 the transcript covers that. One ping per state, not per tick.`}function _(){return`# Autonomous loop tick

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${qa} from this tick.${s()}`}function d(){let e=et(),t=x1(qe(e),e),o=RM(),r=o?`send a brief status update for this tick via ${Em}`:"write a brief status update for this tick",n=t?`Immediately before re-arming, ${r}.`:`After re-arming, ${r}.`;return`

If a ${ri} is armed (check ${nA}), keep \`delaySeconds\` at 1200\u20131800s \u2014 the ${ri} is the wake signal and this is only the fallback heartbeat. If you were woken by a \`<task-notification>\`, handle the event before deciding whether to re-arm. ${n} ${ozn({preArmStatus:t,briefMode:o})} To stop the loop, call ${qa} with \`stop: true\` and ${jd} the monitor (use ${nA} to find its task ID if no longer in context).`}function N(){return`# Autonomous loop tick (dynamic pacing)

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${qa} tool (not a recurring cron). To keep the loop alive, call ${qa} again this turn with \`prompt\` set to the literal sentinel \`${rOe}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${d()}${s()}`}function A(e){return e===TYe||e===rOe}function S(e,t){if(!A(t))return null;P();let o=t===rOe?N():_();if(e.autonomousPreambleDelivered||e.lastLoopFileDelivered!==null)return o;return e.autonomousPreambleDelivered=!0,`${I()}

---

${o}`}var w="__autonomous_preamble__",D="<<loop.md>>",l="<<loop.md-dynamic>>";function q(){return`# /loop tick \u2014 loop.md tasks

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${qa} from this tick.${s(!0)}`}function j(){return`# /loop tick \u2014 loop.md tasks (dynamic pacing)

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${qa} tool (not a recurring cron). To keep the loop alive, call ${qa} again this turn with \`prompt\` set to the literal sentinel \`${l}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${d()}${s(!0)}`}function B(){return`# /loop tick \u2014 loop.md absent (dynamic pacing)

loop.md is not currently present. Run the autonomous check using the loop instructions established earlier in this conversation.

You scheduled this tick via the ${qa} tool (not a recurring cron). To keep the loop alive \u2014 and to pick up loop.md if it is recreated \u2014 call ${qa} again this turn with \`prompt\` set to the literal sentinel \`${l}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${d()}${s()}`}var h=25000;function U(e){if(e.length<=h)return e;let t=e.lastIndexOf(`
`,h);return`${e.slice(0,t>0?t:h)}

> WARNING: loop.md was truncated to ${h} bytes. Keep the task list concise.`}function W(){return b(T())??b(O())}function T(){return L(so()??Zr(),".claude","loop.md")}function O(){return L(Me(),"loop.md")}function b(e){let t;try{t=x(e,"utf-8")}catch(o){return R(o)}return g(e,t)}async function u(e){let t;try{t=await M(e,"utf-8")}catch(o){return R(o)}return g(e,t)}function R(e){if(Wt(e)||v(e)==="EISDIR")return null;throw e}function g(e,t){let o=t.trim();if(o.length===0)return null;return{path:e,content:U(o)}}async function Y(e){let t=await u(T());if(t)return t;let o=O();if(!e)return u(o);let r=await e.read([je.state("loop-file")]);if(!r.ok)return u(o);let n=r.value.items[0];if(!n.found)return null;return g(o,Buffer.from(n.value.buffer,n.value.byteOffset,n.value.byteLength).toString("utf-8"))}function m(e){return e===D||e===l}function H(e,t){if(!m(t))return null;return E(e,t,W())}async function z(e,t,o){if(!m(t))return null;return E(e,t,await Y(o))}function E(e,t,o){let r=t===l;if(o){let f=r?j():q();if(e.lastLoopFileDelivered===o.content)return f;return e.lastLoopFileDelivered=o.content,`# /loop tick \u2014 tasks from ${o.path}

The user configured a loop-tasks file. Work through the tasks defined below; these are the instructions for this tick and every subsequent tick (the reminder on later fires refers back to this message).

---

${o.content}

---

${f}`}P();let n=r?B():_();if(e.lastLoopFileDelivered===w||e.autonomousPreambleDelivered)return n;return e.lastLoopFileDelivered=w,e.autonomousPreambleDelivered=!0,`${I()}

---

${n}`}function ye(e){return A(e)||m(e)}function we(e,t){return S(e,t)??H(e,t)??t}async function ke(e,t,o){return S(e,t)??await z(e,t,o)??t}export{l as LOOP_FILE_DYNAMIC_SENTINEL,D as LOOP_FILE_SENTINEL,I as getAutonomousLoopPreamble,ye as isLoopDefaultSentinel,m as isLoopFileSentinel,P as logAutonomousLoopActivation,Y as readLoopFileAsync,we as resolveLoopDefaultFire,ke as resolveLoopDefaultFireAsync};
