// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Fe}from"./chunk-nv1qvpv3.js";import"./chunk-nfna65jh.js";import"./chunk-fdxhcr6b.js";import{cr,Kr}from"./chunk-4bw62nzm.js";import"./chunk-k1419ccf.js";import"./chunk-76anb6yt.js";import{E,jt}from"./chunk-886tf6ja.js";import"./chunk-yjc18bey.js";import"./chunk-ae84tp6z.js";import{tt,We,k}from"./chunk-bk5ct2gw.js";import{be}from"./chunk-nqc6v990.js";import"./chunk-phz47asr.js";import{a}from"./chunk-yvnhkg35.js";import"./chunk-5b8s3gnd.js";import"./chunk-gyf58rwf.js";import"./chunk-tat46164.js";import"./chunk-ax7r0qj7.js";import"./chunk-gsnbskq4.js";import"./chunk-p9frg3mj.js";import"./chunk-bf3z2ftn.js";import{i}from"./chunk-4nygtnjw.js";import"./chunk-2hb5361r.js";import"./chunk-cnq34fr6.js";import"./chunk-qr9z1wer.js";import"./chunk-vgthw1fb.js";import"./chunk-y98nbw94.js";import"./chunk-1azky4vr.js";import"./chunk-1tsh4em7.js";import"./chunk-tdjxpe2m.js";import"./chunk-yn0pfn70.js";import"./chunk-wh2vcbh8.js";import"./chunk-nca5bd28.js";import"./chunk-1t033v1j.js";import"./chunk-8pet3bvp.js";import"./chunk-f606a53w.js";import"./chunk-68wmv4pr.js";import"./chunk-fdwn5gdv.js";import"./chunk-tadwrn0a.js";import"./chunk-c0aaqg7t.js";import"./chunk-qb086kpj.js";import"./chunk-6pbtkr2b.js";import"./chunk-0jyjhrht.js";import"./chunk-wtch2p0g.js";import"./chunk-3cynezh1.js";import"./chunk-a60ee1ne.js";import"./chunk-ppsy9aeg.js";import"./chunk-9zyrj6we.js";import"./chunk-z6p21rxk.js";import"./chunk-dp4bc9y2.js";import"./chunk-x0dc37w9.js";import"./chunk-y8g1gshe.js";import"./chunk-kvz2ymff.js";import"./chunk-2x1jdkd9.js";import"./chunk-c6qwr3kc.js";import"./chunk-7sdm5x5t.js";import"./chunk-r2vtj1kh.js";import"./chunk-4vzk3y22.js";import"./chunk-h20sc871.js";import"./chunk-yv3rvqk7.js";import"./chunk-hb620t8k.js";import"./chunk-e4eky0pj.js";import"./chunk-zrh141bk.js";import"./chunk-j41p6s5m.js";import"./chunk-daqzn5gy.js";import"./chunk-hpdcd3vm.js";import"./chunk-3sda67c1.js";import"./chunk-zpefvajk.js";import"./chunk-d7wfeeft.js";import"./chunk-mke1mg83.js";import"./chunk-njj04bkb.js";import"./chunk-mrf41zrh.js";import"./chunk-64ag51qf.js";import"./chunk-0yczyn9c.js";import"./chunk-75xzrg6e.js";import"./chunk-sazx74ct.js";import"./chunk-97q60twp.js";import"./chunk-ts42ykgs.js";import{Kf}from"./chunk-g1yqb0n4.js";import"./chunk-phm7wwmz.js";import"./chunk-z0n2djw5.js";import"./chunk-m7864yc0.js";import"./chunk-rgrg9230.js";import"./chunk-y59djfw7.js";import"./chunk-ezerben3.js";import"./chunk-js2bhabe.js";import{PCe}from"./chunk-5cmjnf0r.js";import"./chunk-6nfqw5w9.js";import{zI}from"./chunk-ef12jbwb.js";import{wa,Eqe,xCe,v0n,nR,Uc}from"./chunk-3857kmpe.js";import{aJe}from"./chunk-jjye1htf.js";import"./chunk-8qmvgbmp.js";import{Vx}from"./chunk-h7kjxr50.js";import{Pl}from"./chunk-9t51q67t.js";import{r$}from"./chunk-qnna9bgh.js";import"./chunk-80nre9e4.js";import"./chunk-j0kcafpy.js";import"./chunk-znynzfyp.js";import"./chunk-ngwfw4c8.js";import"./chunk-tfm99p8y.js";import"./chunk-25vrbr0v.js";import"./chunk-51w556q5.js";import"./chunk-k10m7cdf.js";import"./chunk-g9z2s3cs.js";import"./chunk-rzybc39t.js";import"./chunk-hf90k897.js";import"./chunk-t2x9eyac.js";import"./chunk-0hm793yn.js";import"./chunk-nkvcn1t9.js";import"./chunk-2zhybd9r.js";import"./chunk-nmnavv08.js";import"./chunk-t05cqr1r.js";import"./chunk-xaes9ysz.js";import"./chunk-wsz2wsez.js";import{Le}from"./chunk-txt1tvjz.js";import{readFileSync as x}from"fs";import{readFile as M}from"fs/promises";import{join as v}from"path";var p=Le("./loopAutonomousPreamble-07qcyhv4.md.embedded.txt");var y=Le("./loopAutonomousPreamblePersistent-3zqtkrvg.md.embedded.txt");function c(){if(a.CLAUDE_CODE_LOOP_PERSISTENT)return!0;return k("tengu_kairos_loop_persistent",!1)}function L(){let e=c()?y:p,t=aJe({forCloudSession:Boolean(a.CLAUDE_CODE_REMOTE)});return t?`${e.trimEnd()}

${t}
`:e}function I(){i("tengu_kairos_loop_persistent_activated",{variant:c()})}function s(e=!1){if(!PCe())return"";let o=!e&&c()?"newly blocked on a decision you won't make alone, you're ending the loop":"newly blocked on a decision you won't make alone, third straight tick with nothing to do, you're ending the loop";return`

Use ${Vx} when the loop can't move further without the user, or when something landed that they'd want to act on now: ${o}, or a major update arrived (CI went red, a review changes the plan). Progress you made yourself isn't a trigger \u2014 the transcript covers that. One ping per state, not per tick.`}function P(){return`# Autonomous loop tick

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${wa} from this tick.${s()}`}function d(){let e=tt(),t=r$(We(e),e),o=zI(),r=o?`send a brief status update for this tick via ${Kf}`:"write a brief status update for this tick",n=t?`Immediately before re-arming, ${r}.`:`After re-arming, ${r}.`;return`

If a ${Pl} is armed (check ${nR}), keep \`delaySeconds\` at 1200\u20131800s \u2014 the ${Pl} is the wake signal and this is only the fallback heartbeat. If you were woken by a \`<task-notification>\`, handle the event before deciding whether to re-arm. ${n} ${v0n({preArmStatus:t,briefMode:o})} To stop the loop, call ${wa} with \`stop: true\` and ${Uc} the monitor (use ${nR} to find its task ID if no longer in context).`}function N(){return`# Autonomous loop tick (dynamic pacing)

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${wa} tool (not a recurring cron). To keep the loop alive, call ${wa} again this turn with \`prompt\` set to the literal sentinel \`${xCe}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${d()}${s()}`}function _(e){return e===Eqe||e===xCe}function A(e,t){if(!_(t))return null;I();let o=t===xCe?N():P();if(e.autonomousPreambleDelivered||e.lastLoopFileDelivered!==null)return o;return e.autonomousPreambleDelivered=!0,`${L()}

---

${o}`}var w="__autonomous_preamble__",D="<<loop.md>>",l="<<loop.md-dynamic>>";function q(){return`# /loop tick \u2014 loop.md tasks

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${wa} from this tick.${s(!0)}`}function j(){return`# /loop tick \u2014 loop.md tasks (dynamic pacing)

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${wa} tool (not a recurring cron). To keep the loop alive, call ${wa} again this turn with \`prompt\` set to the literal sentinel \`${l}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${d()}${s(!0)}`}function B(){return`# /loop tick \u2014 loop.md absent (dynamic pacing)

loop.md is not currently present. Run the autonomous check using the loop instructions established earlier in this conversation.

You scheduled this tick via the ${wa} tool (not a recurring cron). To keep the loop alive \u2014 and to pick up loop.md if it is recreated \u2014 call ${wa} again this turn with \`prompt\` set to the literal sentinel \`${l}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${d()}${s()}`}var h=25000;function U(e){if(e.length<=h)return e;let t=e.lastIndexOf(`
`,h);return`${e.slice(0,t>0?t:h)}

> WARNING: loop.md was truncated to ${h} bytes. Keep the task list concise.`}function W(){return b(S())??b(T())}function S(){return v(Kr()??cr(),".claude","loop.md")}function T(){return v(be(),"loop.md")}function b(e){let t;try{t=x(e,"utf-8")}catch(o){return O(o)}return g(e,t)}async function u(e){let t;try{t=await M(e,"utf-8")}catch(o){return O(o)}return g(e,t)}function O(e){if(jt(e)||E(e)==="EISDIR")return null;throw e}function g(e,t){let o=t.trim();if(o.length===0)return null;return{path:e,content:U(o)}}async function Y(e){let t=await u(S());if(t)return t;let o=T();if(!e)return u(o);let r=await e.read([Fe.state("loop-file")]);if(!r.ok)return u(o);let n=r.value.items[0];if(!n.found)return null;return g(o,Buffer.from(n.value.buffer,n.value.byteOffset,n.value.byteLength).toString("utf-8"))}function m(e){return e===D||e===l}function H(e,t){if(!m(t))return null;return R(e,t,W())}async function z(e,t,o){if(!m(t))return null;return R(e,t,await Y(o))}function R(e,t,o){let r=t===l;if(o){let f=r?j():q();if(e.lastLoopFileDelivered===o.content)return f;return e.lastLoopFileDelivered=o.content,`# /loop tick \u2014 tasks from ${o.path}

The user configured a loop-tasks file. Work through the tasks defined below; these are the instructions for this tick and every subsequent tick (the reminder on later fires refers back to this message).

---

${o.content}

---

${f}`}I();let n=r?B():P();if(e.lastLoopFileDelivered===w||e.autonomousPreambleDelivered)return n;return e.lastLoopFileDelivered=w,e.autonomousPreambleDelivered=!0,`${L()}

---

${n}`}function ye(e){return _(e)||m(e)}function we(e,t){return A(e,t)??H(e,t)??t}async function ke(e,t,o){return A(e,t)??await z(e,t,o)??t}export{l as LOOP_FILE_DYNAMIC_SENTINEL,D as LOOP_FILE_SENTINEL,L as getAutonomousLoopPreamble,ye as isLoopDefaultSentinel,m as isLoopFileSentinel,I as logAutonomousLoopActivation,Y as readLoopFileAsync,we as resolveLoopDefaultFire,ke as resolveLoopDefaultFireAsync};
