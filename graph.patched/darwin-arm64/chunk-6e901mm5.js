// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{De}from"./chunk-wq75sevg.js";import"./chunk-12mdvf4x.js";import"./chunk-29aedz4e.js";import{Er,fo}from"./chunk-8mvda08c.js";import"./chunk-ht3pd6g4.js";import"./chunk-hdvxmrfb.js";import{E,Lt}from"./chunk-fqsygynq.js";import"./chunk-ws170zqm.js";import"./chunk-5qeme8w3.js";import{rt,Be,k}from"./chunk-s46qgfx7.js";import{we}from"./chunk-xbg4a11x.js";import"./chunk-ym46rm1e.js";import{a}from"./chunk-j77txbjn.js";import"./chunk-yfyrtrqq.js";import"./chunk-f8eqwxpt.js";import"./chunk-sgznn49v.js";import"./chunk-pey4mmsy.js";import"./chunk-fqzh3zpr.js";import"./chunk-qfs4y3ww.js";import"./chunk-jppak124.js";import"./chunk-ts0309p1.js";import{i}from"./chunk-qbf9wv32.js";import"./chunk-e3gw32ew.js";import"./chunk-a80m1vff.js";import"./chunk-ev2h864q.js";import"./chunk-yt7xs5e7.js";import"./chunk-errb129w.js";import"./chunk-zm2rbh78.js";import"./chunk-egwr9wbg.js";import"./chunk-j4wy5r0f.js";import"./chunk-1jrtnqew.js";import"./chunk-wd4jmzs1.js";import"./chunk-1affnqfa.js";import"./chunk-hd1pzxwr.js";import"./chunk-vrsbmck5.js";import"./chunk-2pfss7d0.js";import"./chunk-mcq8tx7b.js";import"./chunk-6pm26t04.js";import"./chunk-w5vv1884.js";import"./chunk-k87xjea0.js";import"./chunk-y5s9hk02.js";import"./chunk-nqb0d8cm.js";import"./chunk-zx2a39z1.js";import"./chunk-05852gwt.js";import"./chunk-peyxry7r.js";import"./chunk-efx2t2v4.js";import"./chunk-prs2t84m.js";import"./chunk-9s9xt61j.js";import"./chunk-1613xha0.js";import"./chunk-861a7whf.js";import"./chunk-fpm199ny.js";import"./chunk-sac2pmqn.js";import"./chunk-msjjanss.js";import"./chunk-pae0cprg.js";import"./chunk-yekbj8yj.js";import"./chunk-2cxzjsy9.js";import"./chunk-ma17m27h.js";import"./chunk-h8r0k8e5.js";import"./chunk-6pw2mkqv.js";import"./chunk-jstrrwpw.js";import"./chunk-81x96web.js";import"./chunk-3c5rpefa.js";import"./chunk-xwn85bww.js";import"./chunk-xcq89ne8.js";import"./chunk-vd0fkmt2.js";import"./chunk-3v5rbztp.js";import"./chunk-9k1s2d1q.js";import"./chunk-qvy43n2d.js";import"./chunk-vxnbg770.js";import"./chunk-napcsc17.js";import"./chunk-vchkvryg.js";import"./chunk-j95hbnd3.js";import"./chunk-590ye0ab.js";import"./chunk-bfvymavp.js";import"./chunk-rdy2m4vh.js";import"./chunk-j7hymft9.js";import"./chunk-s7j36v3t.js";import{Sf}from"./chunk-44myv9zp.js";import"./chunk-p7dmh6b6.js";import"./chunk-5bwrderf.js";import"./chunk-e58tctgr.js";import"./chunk-kdpkw3w6.js";import"./chunk-d4ww8xgn.js";import"./chunk-22q28ds2.js";import"./chunk-ndpdr195.js";import{SEe}from"./chunk-h7by19me.js";import"./chunk-yq4x938b.js";import{iP}from"./chunk-7tz6vx63.js";import{Na,V2e,_Ee,lvn,OA,Wc}from"./chunk-6g522rkj.js";import{K4e}from"./chunk-jg7fmasc.js";import"./chunk-wfnkywe5.js";import{mR}from"./chunk-xss25x3e.js";import{ol}from"./chunk-4vfweeza.js";import{ZL}from"./chunk-ed6wzrsc.js";import"./chunk-vgbyr11p.js";import"./chunk-xf0v8hrw.js";import"./chunk-aqdr2hzp.js";import"./chunk-zgcypqv5.js";import"./chunk-t0npft1e.js";import"./chunk-xcsctrab.js";import"./chunk-qs7t29dk.js";import"./chunk-dy624h5m.js";import"./chunk-6n9fenms.js";import"./chunk-pxafsfws.js";import"./chunk-0an2wbq6.js";import"./chunk-1d5bwndp.js";import"./chunk-1csct632.js";import"./chunk-pqzrrpbd.js";import"./chunk-at8bm9tq.js";import"./chunk-e3yg5bam.js";import{Pe}from"./chunk-rnxw3wwn.js";import{readFileSync as x}from"fs";import{readFile as M}from"fs/promises";import{join as v}from"path";var p=Pe("./loopAutonomousPreamble-07qcyhv4.md.embedded.txt");var y=Pe("./loopAutonomousPreamblePersistent-3zqtkrvg.md.embedded.txt");function c(){if(a.CLAUDE_CODE_LOOP_PERSISTENT)return!0;return k("tengu_kairos_loop_persistent",!1)}function L(){let e=c()?y:p,t=K4e({forCloudSession:Boolean(a.CLAUDE_CODE_REMOTE)});return t?`${e.trimEnd()}

${t}
`:e}function I(){i("tengu_kairos_loop_persistent_activated",{variant:c()})}function s(e=!1){if(!SEe())return"";let o=!e&&c()?"newly blocked on a decision you won't make alone, you're ending the loop":"newly blocked on a decision you won't make alone, third straight tick with nothing to do, you're ending the loop";return`

Use ${mR} when the loop can't move further without the user, or when something landed that they'd want to act on now: ${o}, or a major update arrived (CI went red, a review changes the plan). Progress you made yourself isn't a trigger \u2014 the transcript covers that. One ping per state, not per tick.`}function P(){return`# Autonomous loop tick

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${Na} from this tick.${s()}`}function d(){let e=rt(),t=ZL(Be(e),e),o=iP(),r=o?`send a brief status update for this tick via ${Sf}`:"write a brief status update for this tick",n=t?`Immediately before re-arming, ${r}.`:`After re-arming, ${r}.`;return`

If a ${ol} is armed (check ${OA}), keep \`delaySeconds\` at 1200\u20131800s \u2014 the ${ol} is the wake signal and this is only the fallback heartbeat. If you were woken by a \`<task-notification>\`, handle the event before deciding whether to re-arm. ${n} ${lvn({preArmStatus:t,briefMode:o})} To stop the loop, call ${Na} with \`stop: true\` and ${Wc} the monitor (use ${OA} to find its task ID if no longer in context).`}function N(){return`# Autonomous loop tick (dynamic pacing)

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${Na} tool (not a recurring cron). To keep the loop alive, call ${Na} again this turn with \`prompt\` set to the literal sentinel \`${_Ee}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${d()}${s()}`}function _(e){return e===V2e||e===_Ee}function A(e,t){if(!_(t))return null;I();let o=t===_Ee?N():P();if(e.autonomousPreambleDelivered||e.lastLoopFileDelivered!==null)return o;return e.autonomousPreambleDelivered=!0,`${L()}

---

${o}`}var w="__autonomous_preamble__",D="<<loop.md>>",l="<<loop.md-dynamic>>";function q(){return`# /loop tick \u2014 loop.md tasks

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${Na} from this tick.${s(!0)}`}function j(){return`# /loop tick \u2014 loop.md tasks (dynamic pacing)

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${Na} tool (not a recurring cron). To keep the loop alive, call ${Na} again this turn with \`prompt\` set to the literal sentinel \`${l}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${d()}${s(!0)}`}function B(){return`# /loop tick \u2014 loop.md absent (dynamic pacing)

loop.md is not currently present. Run the autonomous check using the loop instructions established earlier in this conversation.

You scheduled this tick via the ${Na} tool (not a recurring cron). To keep the loop alive \u2014 and to pick up loop.md if it is recreated \u2014 call ${Na} again this turn with \`prompt\` set to the literal sentinel \`${l}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${d()}${s()}`}var h=25000;function U(e){if(e.length<=h)return e;let t=e.lastIndexOf(`
`,h);return`${e.slice(0,t>0?t:h)}

> WARNING: loop.md was truncated to ${h} bytes. Keep the task list concise.`}function W(){return b(S())??b(T())}function S(){return v(fo()??Er(),".claude","loop.md")}function T(){return v(we(),"loop.md")}function b(e){let t;try{t=x(e,"utf-8")}catch(o){return O(o)}return g(e,t)}async function u(e){let t;try{t=await M(e,"utf-8")}catch(o){return O(o)}return g(e,t)}function O(e){if(Lt(e)||E(e)==="EISDIR")return null;throw e}function g(e,t){let o=t.trim();if(o.length===0)return null;return{path:e,content:U(o)}}async function Y(e){let t=await u(S());if(t)return t;let o=T();if(!e)return u(o);let r=await e.read([De.state("loop-file")]);if(!r.ok)return u(o);let n=r.value.items[0];if(!n.found)return null;return g(o,Buffer.from(n.value.buffer,n.value.byteOffset,n.value.byteLength).toString("utf-8"))}function m(e){return e===D||e===l}function H(e,t){if(!m(t))return null;return R(e,t,W())}async function z(e,t,o){if(!m(t))return null;return R(e,t,await Y(o))}function R(e,t,o){let r=t===l;if(o){let f=r?j():q();if(e.lastLoopFileDelivered===o.content)return f;return e.lastLoopFileDelivered=o.content,`# /loop tick \u2014 tasks from ${o.path}

The user configured a loop-tasks file. Work through the tasks defined below; these are the instructions for this tick and every subsequent tick (the reminder on later fires refers back to this message).

---

${o.content}

---

${f}`}I();let n=r?B():P();if(e.lastLoopFileDelivered===w||e.autonomousPreambleDelivered)return n;return e.lastLoopFileDelivered=w,e.autonomousPreambleDelivered=!0,`${L()}

---

${n}`}function ye(e){return _(e)||m(e)}function ke(e,t){return A(e,t)??H(e,t)??t}async function be(e,t,o){return A(e,t)??await z(e,t,o)??t}export{l as LOOP_FILE_DYNAMIC_SENTINEL,D as LOOP_FILE_SENTINEL,L as getAutonomousLoopPreamble,ye as isLoopDefaultSentinel,m as isLoopFileSentinel,I as logAutonomousLoopActivation,Y as readLoopFileAsync,ke as resolveLoopDefaultFire,be as resolveLoopDefaultFireAsync};
