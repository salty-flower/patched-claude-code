// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{Ce}from"./chunk-a190bznh.js";import{hn}from"./chunk-yhfssb7x.js";import"./chunk-h4q6j5r2.js";import"./chunk-0xdcm8sp.js";import"./chunk-p3vjhzt0.js";import{P}from"./chunk-vtwn1md5.js";import{ye}from"./chunk-ty218y69.js";import"./chunk-55w4bsdv.js";import"./chunk-rk5fkewn.js";import{a}from"./chunk-g2ngvza5.js";import"./chunk-2b9rpf69.js";import{E,Pt}from"./chunk-dsb06hq9.js";import"./chunk-g1553wr3.js";import"./chunk-84crg0gy.js";import"./chunk-8nmvz1t1.js";import"./chunk-y5gt0775.js";import"./chunk-jx9d5yeb.js";import"./chunk-ck0tqv1m.js";import{s}from"./chunk-v5cr82c7.js";import"./chunk-tfyzvdvk.js";import"./chunk-zjdr02g2.js";import"./chunk-w7eyakhd.js";import"./chunk-vr2msvhx.js";import"./chunk-p5xeqf1z.js";import"./chunk-pdyrv9q9.js";import"./chunk-an958hxz.js";import"./chunk-2fnmmmh0.js";import"./chunk-h9sag63s.js";import"./chunk-dmh8g72f.js";import"./chunk-50pkxr1e.js";import"./chunk-7r0gxy5k.js";import"./chunk-pc83vt48.js";import"./chunk-f4hwpxyv.js";import"./chunk-bpcwadmp.js";import"./chunk-v3s7w1dm.js";import"./chunk-9wz4jqcb.js";import"./chunk-t25bg6a5.js";import"./chunk-03hrg0m9.js";import"./chunk-mtyvzmw4.js";import"./chunk-ajwm72ve.js";import"./chunk-6773qrfk.js";import"./chunk-q34b2ym9.js";import"./chunk-9e1062yp.js";import"./chunk-mtpbmtt3.js";import"./chunk-5zt0cgpt.js";import"./chunk-wkx6n5b3.js";import"./chunk-nyt0ga9k.js";import"./chunk-1whmx0p7.js";import"./chunk-n2xpq5jc.js";import"./chunk-2mgpdwj9.js";import"./chunk-wg76fyda.js";import"./chunk-esj9hv35.js";import"./chunk-jbwxejdg.js";import"./chunk-6abf03hf.js";import"./chunk-bheqk8zw.js";import"./chunk-wf09v84p.js";import"./chunk-0e339jxb.js";import"./chunk-z72ykb7t.js";import"./chunk-3qezkvja.js";import"./chunk-qgq43xev.js";import"./chunk-tqptskw9.js";import"./chunk-4a71a660.js";import"./chunk-grbz5ev9.js";import"./chunk-7736psqb.js";import"./chunk-390631gb.js";import"./chunk-gz6bzkxe.js";import"./chunk-1vdcb6bs.js";import"./chunk-mjas5xqd.js";import"./chunk-zjsfxnh6.js";import"./chunk-pdyqxame.js";import"./chunk-mmtzf7rk.js";import"./chunk-hmvddskw.js";import"./chunk-hgh92mmr.js";import"./chunk-wrjgq3nt.js";import{xR,YJ}from"./chunk-z1q7zjmy.js";import{na,_ve,nie,th,ZT}from"./chunk-zcf3wq0j.js";import"./chunk-a42ms1wh.js";import{ga}from"./chunk-zp04wyav.js";import"./chunk-51rg64yp.js";import"./chunk-z241951y.js";import"./chunk-53q8dv77.js";import"./chunk-sa53evyh.js";import"./chunk-c77g0aqc.js";import"./chunk-fgjq2155.js";import{ve}from"./chunk-agfzafth.js";import{readFileSync as S}from"fs";import{join as u}from"path";var g=ve("./loopAutonomousPreamble-07qcyhv4.md");var y=ve("./loopAutonomousPreamblePersistent-3zqtkrvg.md");var re=g;function m(){if(a.CLAUDE_CODE_LOOP_PERSISTENT)return!0;return P("tengu_kairos_loop_persistent",!1)}function v(){return m()?y:g}function w(){s("tengu_kairos_loop_persistent_activated",{variant:m()})}function h(e=!1){if(!YJ())return"";let o=!e&&m()?"newly blocked on a decision you won't make alone, you're ending the loop":"newly blocked on a decision you won't make alone, third straight tick with nothing to do, you're ending the loop";return`

Use ${xR} when the loop can't move further without the user, or when something landed that they'd want to act on now: ${o}, or a major update arrived (CI went red, a review changes the plan). Progress you made yourself isn't a trigger \u2014 the transcript covers that. One ping per state, not per tick.`}function b(){return`# Autonomous loop tick

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${na} from this tick.${h()}`}var f=`

If a ${ga} is armed (check ${ZT}), keep \`delaySeconds\` at 1200\u20131800s \u2014 the ${ga} is the wake signal and this is only the fallback heartbeat. If you were woken by a \`<task-notification>\`, handle the event before deciding whether to re-arm. To stop the loop, call ${na} with \`stop: true\` and ${th} the monitor (use ${ZT} to find its task ID if no longer in context).`;function x(){return`# Autonomous loop tick (dynamic pacing)

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${na} tool (not a recurring cron). To keep the loop alive, call ${na} again at the end of this turn with \`prompt\` set to the literal sentinel \`${nie}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${f}${h()}`}function I(e){return e===_ve||e===nie}function L(e,t){if(!I(t))return null;w();let o=t===nie?x():b();if(e.autonomousPreambleDelivered||e.lastLoopFileDelivered!==null)return o;return e.autonomousPreambleDelivered=!0,`${v()}

---

${o}`}var k="__autonomous_preamble__",C="<<loop.md>>",d="<<loop.md-dynamic>>";function F(){return`# /loop tick \u2014 loop.md tasks

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${na} from this tick.${h(!0)}`}function M(){return`# /loop tick \u2014 loop.md tasks (dynamic pacing)

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${na} tool (not a recurring cron). To keep the loop alive, call ${na} again at the end of this turn with \`prompt\` set to the literal sentinel \`${d}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${f}${h(!0)}`}function N(){return`# /loop tick \u2014 loop.md absent (dynamic pacing)

loop.md is not currently present. Run the autonomous check using the loop instructions established earlier in this conversation.

You scheduled this tick via the ${na} tool (not a recurring cron). To keep the loop alive \u2014 and to pick up loop.md if it is recreated \u2014 call ${na} again at the end of this turn with \`prompt\` set to the literal sentinel \`${d}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${f}${h()}`}var l=25000;function _(e){if(e.length<=l)return e;let t=e.lastIndexOf(`
`,l);return`${e.slice(0,t>0?t:l)}

> WARNING: loop.md was truncated to ${l} bytes. Keep the task list concise.`}function T(){return c(u(hn(),".claude","loop.md"))??c(u(ye(),"loop.md"))}function c(e){let t;try{t=S(e,"utf-8")}catch(n){if(Pt(n)||E(n)==="EISDIR")return null;throw n}let o=t.trim();if(o.length===0)return null;return{path:e,content:_(o)}}async function D(e){if(!e)return T();let t=c(u(hn(),".claude","loop.md"));if(t)return t;let o=u(ye(),"loop.md"),n=await e.read([Ce.state("loop-file")]);if(!n.ok)return c(o);let i=n.value.items[0];if(!i.found)return null;let r=Buffer.from(i.value.buffer,i.value.byteOffset,i.value.byteLength).toString("utf-8").trim();if(r.length===0)return null;return{path:o,content:_(r)}}function p(e){return e===C||e===d}function q(e,t){if(!p(t))return null;return A(e,t,T())}async function W(e,t,o){if(!p(t))return null;return A(e,t,await D(o))}function A(e,t,o){let n=t===d;if(o){let r=n?M():F();if(e.lastLoopFileDelivered===o.content)return r;return e.lastLoopFileDelivered=o.content,`# /loop tick \u2014 tasks from ${o.path}

The user configured a loop-tasks file. Work through the tasks defined below; these are the instructions for this tick and every subsequent tick (the reminder on later fires refers back to this message).

---

${o.content}

---

${r}`}w();let i=n?N():b();if(e.lastLoopFileDelivered===k||e.autonomousPreambleDelivered)return i;return e.lastLoopFileDelivered=k,e.autonomousPreambleDelivered=!0,`${v()}

---

${i}`}function se(e){return I(e)||p(e)}function ae(e,t){return L(e,t)??q(e,t)??t}async function he(e,t,o){return L(e,t)??await W(e,t,o)??t}export{re as AUTONOMOUS_LOOP_PREAMBLE,d as LOOP_FILE_DYNAMIC_SENTINEL,C as LOOP_FILE_SENTINEL,v as getAutonomousLoopPreamble,I as isAutonomousLoopSentinel,se as isLoopDefaultSentinel,p as isLoopFileSentinel,m as isLoopPersistentPreambleEnabled,w as logAutonomousLoopActivation,T as readLoopFile,D as readLoopFileAsync,L as resolveAutonomousLoopFire,ae as resolveLoopDefaultFire,he as resolveLoopDefaultFireAsync,q as resolveLoopFileFire,W as resolveLoopFileFireAsync};
