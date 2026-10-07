// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{De}from"./chunk-7n5tp35k.js";import"./chunk-b7wdy41p.js";import"./chunk-918t5khf.js";import{vr,fo}from"./chunk-aywwjcwq.js";import"./chunk-f16c4jnr.js";import"./chunk-yffha6me.js";import{v,Lt}from"./chunk-fdatg9ax.js";import"./chunk-0mwsqxme.js";import"./chunk-gf0t3nd9.js";import{rt,Be,T}from"./chunk-m0sj7y8g.js";import{we}from"./chunk-bpkzpttw.js";import"./chunk-6rzcw8g2.js";import{a}from"./chunk-869zfth6.js";import"./chunk-zs0343th.js";import"./chunk-gvn18sr5.js";import"./chunk-0z5rjdcn.js";import"./chunk-ky8zgwyh.js";import"./chunk-z6am4wsr.js";import"./chunk-z9b8syjk.js";import"./chunk-jppak124.js";import"./chunk-j3629m0a.js";import{i}from"./chunk-s90w5q15.js";import"./chunk-tzahwj8w.js";import"./chunk-cqa4khw0.js";import"./chunk-v6ek3j23.js";import"./chunk-hevpq2ht.js";import"./chunk-nnbb9at0.js";import"./chunk-aey7fddv.js";import"./chunk-z6jq2hwa.js";import"./chunk-z6w26610.js";import"./chunk-0qcng0ek.js";import"./chunk-4hsn0a4s.js";import"./chunk-h3056rfm.js";import"./chunk-nffxs9ey.js";import"./chunk-0834hdpw.js";import"./chunk-wp37h1qm.js";import"./chunk-zyrx67ap.js";import"./chunk-jnystawq.js";import"./chunk-vf73wj1b.js";import"./chunk-0h69faxq.js";import"./chunk-v7q9te9b.js";import"./chunk-p72qafcy.js";import"./chunk-qv90ktrr.js";import"./chunk-g55sa40r.js";import"./chunk-djxmg5va.js";import"./chunk-pvcr8t0y.js";import"./chunk-dcpaq2kj.js";import"./chunk-06vaaw45.js";import"./chunk-qdmy1g69.js";import"./chunk-2c0pkjse.js";import"./chunk-jb27eay5.js";import"./chunk-9dnqpecd.js";import"./chunk-ta86nc10.js";import"./chunk-zg2sg2cj.js";import"./chunk-e6wajgyd.js";import"./chunk-sjbbyery.js";import"./chunk-0wqb5n04.js";import"./chunk-9d77qdrf.js";import"./chunk-wby8n7tq.js";import"./chunk-repmvexm.js";import"./chunk-jkhtckyv.js";import"./chunk-6ntgn93k.js";import"./chunk-h96fkqh0.js";import"./chunk-f1vm98xj.js";import"./chunk-3ff85ar3.js";import"./chunk-8m32anyb.js";import"./chunk-7ha2yydy.js";import"./chunk-cwqxpkpd.js";import"./chunk-ghdwe20r.js";import"./chunk-jb4eqyjv.js";import"./chunk-tymcbz7d.js";import"./chunk-dejd0mwg.js";import"./chunk-hdjzp1hc.js";import"./chunk-zbm7xwyr.js";import"./chunk-gsz4ykfe.js";import"./chunk-vw9vnafd.js";import"./chunk-y1pmnwf8.js";import{bf}from"./chunk-pvw1e2q4.js";import"./chunk-ch8aw0k0.js";import"./chunk-yh6kwat0.js";import"./chunk-g6x5pfpt.js";import"./chunk-3xa8a4ky.js";import"./chunk-k0nrzyt2.js";import"./chunk-55tfcetn.js";import"./chunk-22qmwqqt.js";import{fve}from"./chunk-bn3gfg93.js";import"./chunk-mfzjsk2y.js";import{rP}from"./chunk-qyzbsv7c.js";import{La,NWe,dve,Uvn,xA,jc}from"./chunk-qwz3yy5z.js";import{z6e}from"./chunk-1eat0y2e.js";import"./chunk-pxdztwh3.js";import{dR}from"./chunk-s1375y6f.js";import{rl}from"./chunk-shfxg2n9.js";import{VL}from"./chunk-vxm4sgq4.js";import"./chunk-2919wngp.js";import"./chunk-3wab60rz.js";import"./chunk-ngfft5dp.js";import"./chunk-pak71jg1.js";import"./chunk-dx30tgp5.js";import"./chunk-29g2jvx2.js";import"./chunk-vj952p6j.js";import"./chunk-qt7wfk46.js";import"./chunk-ht3hn07r.js";import"./chunk-ryr5zmfz.js";import"./chunk-byp7b1vv.js";import"./chunk-hpdq1e8e.js";import"./chunk-q2j1pc7w.js";import"./chunk-40wcwz4f.js";import"./chunk-vcpw40gh.js";import"./chunk-cs06r2mk.js";import{Pe}from"./chunk-grvgfqgm.js";import{readFileSync as x}from"fs";import{readFile as M}from"fs/promises";import{join as b}from"path";var p=Pe("./loopAutonomousPreamble-07qcyhv4.md.embedded.txt");var y=Pe("./loopAutonomousPreamblePersistent-3zqtkrvg.md.embedded.txt");function c(){if(a.CLAUDE_CODE_LOOP_PERSISTENT)return!0;return T("tengu_kairos_loop_persistent",!1)}function L(){let e=c()?y:p,t=z6e({forCloudSession:Boolean(a.CLAUDE_CODE_REMOTE)});return t?`${e.trimEnd()}

${t}
`:e}function I(){i("tengu_kairos_loop_persistent_activated",{variant:c()})}function s(e=!1){if(!fve())return"";let o=!e&&c()?"newly blocked on a decision you won't make alone, you're ending the loop":"newly blocked on a decision you won't make alone, third straight tick with nothing to do, you're ending the loop";return`

Use ${dR} when the loop can't move further without the user, or when something landed that they'd want to act on now: ${o}, or a major update arrived (CI went red, a review changes the plan). Progress you made yourself isn't a trigger \u2014 the transcript covers that. One ping per state, not per tick.`}function P(){return`# Autonomous loop tick

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${La} from this tick.${s()}`}function d(){let e=rt(),t=VL(Be(e),e),o=rP(),r=o?`send a brief status update for this tick via ${bf}`:"write a brief status update for this tick",n=t?`Immediately before re-arming, ${r}.`:`After re-arming, ${r}.`;return`

If a ${rl} is armed (check ${xA}), keep \`delaySeconds\` at 1200\u20131800s \u2014 the ${rl} is the wake signal and this is only the fallback heartbeat. If you were woken by a \`<task-notification>\`, handle the event before deciding whether to re-arm. ${n} ${Uvn({preArmStatus:t,briefMode:o})} To stop the loop, call ${La} with \`stop: true\` and ${jc} the monitor (use ${xA} to find its task ID if no longer in context).`}function N(){return`# Autonomous loop tick (dynamic pacing)

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${La} tool (not a recurring cron). To keep the loop alive, call ${La} again this turn with \`prompt\` set to the literal sentinel \`${dve}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${d()}${s()}`}function _(e){return e===NWe||e===dve}function A(e,t){if(!_(t))return null;I();let o=t===dve?N():P();if(e.autonomousPreambleDelivered||e.lastLoopFileDelivered!==null)return o;return e.autonomousPreambleDelivered=!0,`${L()}

---

${o}`}var w="__autonomous_preamble__",D="<<loop.md>>",l="<<loop.md-dynamic>>";function q(){return`# /loop tick \u2014 loop.md tasks

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${La} from this tick.${s(!0)}`}function j(){return`# /loop tick \u2014 loop.md tasks (dynamic pacing)

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${La} tool (not a recurring cron). To keep the loop alive, call ${La} again this turn with \`prompt\` set to the literal sentinel \`${l}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${d()}${s(!0)}`}function B(){return`# /loop tick \u2014 loop.md absent (dynamic pacing)

loop.md is not currently present. Run the autonomous check using the loop instructions established earlier in this conversation.

You scheduled this tick via the ${La} tool (not a recurring cron). To keep the loop alive \u2014 and to pick up loop.md if it is recreated \u2014 call ${La} again this turn with \`prompt\` set to the literal sentinel \`${l}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${d()}${s()}`}var h=25000;function U(e){if(e.length<=h)return e;let t=e.lastIndexOf(`
`,h);return`${e.slice(0,t>0?t:h)}

> WARNING: loop.md was truncated to ${h} bytes. Keep the task list concise.`}function W(){return k(S())??k(O())}function S(){return b(fo()??vr(),".claude","loop.md")}function O(){return b(we(),"loop.md")}function k(e){let t;try{t=x(e,"utf-8")}catch(o){return R(o)}return g(e,t)}async function u(e){let t;try{t=await M(e,"utf-8")}catch(o){return R(o)}return g(e,t)}function R(e){if(Lt(e)||v(e)==="EISDIR")return null;throw e}function g(e,t){let o=t.trim();if(o.length===0)return null;return{path:e,content:U(o)}}async function Y(e){let t=await u(S());if(t)return t;let o=O();if(!e)return u(o);let r=await e.read([De.state("loop-file")]);if(!r.ok)return u(o);let n=r.value.items[0];if(!n.found)return null;return g(o,Buffer.from(n.value.buffer,n.value.byteOffset,n.value.byteLength).toString("utf-8"))}function m(e){return e===D||e===l}function H(e,t){if(!m(t))return null;return E(e,t,W())}async function z(e,t,o){if(!m(t))return null;return E(e,t,await Y(o))}function E(e,t,o){let r=t===l;if(o){let f=r?j():q();if(e.lastLoopFileDelivered===o.content)return f;return e.lastLoopFileDelivered=o.content,`# /loop tick \u2014 tasks from ${o.path}

The user configured a loop-tasks file. Work through the tasks defined below; these are the instructions for this tick and every subsequent tick (the reminder on later fires refers back to this message).

---

${o.content}

---

${f}`}I();let n=r?B():P();if(e.lastLoopFileDelivered===w||e.autonomousPreambleDelivered)return n;return e.lastLoopFileDelivered=w,e.autonomousPreambleDelivered=!0,`${L()}

---

${n}`}function ye(e){return _(e)||m(e)}function ke(e,t){return A(e,t)??H(e,t)??t}async function be(e,t,o){return A(e,t)??await z(e,t,o)??t}export{l as LOOP_FILE_DYNAMIC_SENTINEL,D as LOOP_FILE_SENTINEL,L as getAutonomousLoopPreamble,ye as isLoopDefaultSentinel,m as isLoopFileSentinel,I as logAutonomousLoopActivation,Y as readLoopFileAsync,ke as resolveLoopDefaultFire,be as resolveLoopDefaultFireAsync};
