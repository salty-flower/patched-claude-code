// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{Ce}from"./chunk-679ytzs5.js";import{mn}from"./chunk-txfrkyzp.js";import"./chunk-gj513b2z.js";import"./chunk-qztrb7e5.js";import"./chunk-d3xvzk7s.js";import{P}from"./chunk-30p0nwys.js";import{we}from"./chunk-k4wnp212.js";import"./chunk-67jj8qay.js";import"./chunk-q3f1bdx8.js";import{a}from"./chunk-q2vrcqny.js";import"./chunk-40wq8hf6.js";import"./chunk-p9tbyvzw.js";import{A,$t}from"./chunk-cnzbk8gg.js";import"./chunk-847hpqqs.js";import"./chunk-hdk9febf.js";import"./chunk-kh3dq6rw.js";import"./chunk-1cx6bcw0.js";import"./chunk-qrf0f0ev.js";import{i}from"./chunk-5a4y4a7y.js";import"./chunk-61g2sn1g.js";import"./chunk-g0d6a50p.js";import"./chunk-pe91jxt9.js";import"./chunk-77ybm3jg.js";import"./chunk-zf4yx99n.js";import"./chunk-d6f1t6sb.js";import"./chunk-4knvtbyn.js";import"./chunk-vd2nxbng.js";import"./chunk-v8v8a55t.js";import"./chunk-ayzpxv7a.js";import"./chunk-b8169sgj.js";import"./chunk-48rd4zn3.js";import"./chunk-h4q23q42.js";import"./chunk-9dhpqtz5.js";import"./chunk-39xz88rg.js";import"./chunk-te6f9h8j.js";import"./chunk-ggjhe3cp.js";import"./chunk-dnzv18vp.js";import"./chunk-b48ax99g.js";import"./chunk-2an23fcc.js";import"./chunk-hht526yc.js";import"./chunk-qb348yzj.js";import"./chunk-7zjnjcjk.js";import"./chunk-x7wz4nc0.js";import"./chunk-d0bmg328.js";import"./chunk-090t3djy.js";import"./chunk-577jmkv2.js";import"./chunk-5mt43ge3.js";import"./chunk-b9fawpjq.js";import"./chunk-gjtn8r0h.js";import"./chunk-v25vm59m.js";import"./chunk-qk93vtk9.js";import"./chunk-86tcajxg.js";import"./chunk-s3hsf7ap.js";import"./chunk-psm40xqz.js";import"./chunk-wt9yf8j5.js";import"./chunk-1wf4xdje.js";import"./chunk-k90g7wxy.js";import"./chunk-ehdaj6wy.js";import"./chunk-scqpsn3c.js";import"./chunk-62t5bbjj.js";import"./chunk-vc8y7vvq.js";import"./chunk-7jt45jjp.js";import"./chunk-9hdk0yg9.js";import"./chunk-bb220g96.js";import"./chunk-2n66rk9w.js";import"./chunk-tpht1k6q.js";import"./chunk-wmyy1anw.js";import"./chunk-jyxm2b55.js";import"./chunk-e6d1qtmj.js";import{qx,Nre}from"./chunk-e0c3tjjk.js";import"./chunk-xt3af0dj.js";import{Pa,_Me,Xde,pS,Ig}from"./chunk-81g5hqwc.js";import{Ha}from"./chunk-xn34hce1.js";import"./chunk-jejrdv21.js";import"./chunk-7x5ref3k.js";import"./chunk-gsbsg5z6.js";import"./chunk-05jxh7mq.js";import"./chunk-t29t3qgr.js";import"./chunk-k9vdtdk2.js";import"./chunk-er8eeww9.js";import"./chunk-8zbt0spj.js";import"./chunk-gyh40pz1.js";import"./chunk-s44v6gm9.js";import"./chunk-b8r1xdtr.js";import{Re}from"./chunk-bbmh8g33.js";import{readFileSync as E}from"fs";import{join as u}from"path";var p=Re("./loopAutonomousPreamble-07qcyhv4.md.embedded.txt");var y=Re("./loopAutonomousPreamblePersistent-3zqtkrvg.md.embedded.txt");function g(){if(a.CLAUDE_CODE_LOOP_PERSISTENT)return!0;return P("tengu_kairos_loop_persistent",!1)}function v(){return g()?y:p}function w(){i("tengu_kairos_loop_persistent_activated",{variant:g()})}function h(e=!1){if(!Nre())return"";let o=!e&&g()?"newly blocked on a decision you won't make alone, you're ending the loop":"newly blocked on a decision you won't make alone, third straight tick with nothing to do, you're ending the loop";return`

Use ${qx} when the loop can't move further without the user, or when something landed that they'd want to act on now: ${o}, or a major update arrived (CI went red, a review changes the plan). Progress you made yourself isn't a trigger \u2014 the transcript covers that. One ping per state, not per tick.`}function b(){return`# Autonomous loop tick

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${Pa} from this tick.${h()}`}var m=`

If a ${Ha} is armed (check ${pS}), keep \`delaySeconds\` at 1200\u20131800s \u2014 the ${Ha} is the wake signal and this is only the fallback heartbeat. If you were woken by a \`<task-notification>\`, handle the event before deciding whether to re-arm. To stop the loop, call ${Pa} with \`stop: true\` and ${Ig} the monitor (use ${pS} to find its task ID if no longer in context).`;function x(){return`# Autonomous loop tick (dynamic pacing)

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${Pa} tool (not a recurring cron). To keep the loop alive, call ${Pa} again at the end of this turn with \`prompt\` set to the literal sentinel \`${Xde}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${m}${h()}`}function I(e){return e===_Me||e===Xde}function L(e,t){if(!I(t))return null;w();let o=t===Xde?x():b();if(e.autonomousPreambleDelivered||e.lastLoopFileDelivered!==null)return o;return e.autonomousPreambleDelivered=!0,`${v()}

---

${o}`}var k="__autonomous_preamble__",C="<<loop.md>>",d="<<loop.md-dynamic>>";function F(){return`# /loop tick \u2014 loop.md tasks

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${Pa} from this tick.${h(!0)}`}function M(){return`# /loop tick \u2014 loop.md tasks (dynamic pacing)

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${Pa} tool (not a recurring cron). To keep the loop alive, call ${Pa} again at the end of this turn with \`prompt\` set to the literal sentinel \`${d}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${m}${h(!0)}`}function N(){return`# /loop tick \u2014 loop.md absent (dynamic pacing)

loop.md is not currently present. Run the autonomous check using the loop instructions established earlier in this conversation.

You scheduled this tick via the ${Pa} tool (not a recurring cron). To keep the loop alive \u2014 and to pick up loop.md if it is recreated \u2014 call ${Pa} again at the end of this turn with \`prompt\` set to the literal sentinel \`${d}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${m}${h()}`}var l=25000;function _(e){if(e.length<=l)return e;let t=e.lastIndexOf(`
`,l);return`${e.slice(0,t>0?t:l)}

> WARNING: loop.md was truncated to ${l} bytes. Keep the task list concise.`}function T(){return c(u(mn(),".claude","loop.md"))??c(u(we(),"loop.md"))}function c(e){let t;try{t=E(e,"utf-8")}catch(n){if($t(n)||A(n)==="EISDIR")return null;throw n}let o=t.trim();if(o.length===0)return null;return{path:e,content:_(o)}}async function D(e){if(!e)return T();let t=c(u(mn(),".claude","loop.md"));if(t)return t;let o=u(we(),"loop.md"),n=await e.read([Ce.state("loop-file")]);if(!n.ok)return c(o);let r=n.value.items[0];if(!r.found)return null;let s=Buffer.from(r.value.buffer,r.value.byteOffset,r.value.byteLength).toString("utf-8").trim();if(s.length===0)return null;return{path:o,content:_(s)}}function f(e){return e===C||e===d}function q(e,t){if(!f(t))return null;return O(e,t,T())}async function W(e,t,o){if(!f(t))return null;return O(e,t,await D(o))}function O(e,t,o){let n=t===d;if(o){let s=n?M():F();if(e.lastLoopFileDelivered===o.content)return s;return e.lastLoopFileDelivered=o.content,`# /loop tick \u2014 tasks from ${o.path}

The user configured a loop-tasks file. Work through the tasks defined below; these are the instructions for this tick and every subsequent tick (the reminder on later fires refers back to this message).

---

${o.content}

---

${s}`}w();let r=n?N():b();if(e.lastLoopFileDelivered===k||e.autonomousPreambleDelivered)return r;return e.lastLoopFileDelivered=k,e.autonomousPreambleDelivered=!0,`${v()}

---

${r}`}function re(e){return I(e)||f(e)}function se(e,t){return L(e,t)??q(e,t)??t}async function ae(e,t,o){return L(e,t)??await W(e,t,o)??t}export{d as LOOP_FILE_DYNAMIC_SENTINEL,C as LOOP_FILE_SENTINEL,v as getAutonomousLoopPreamble,re as isLoopDefaultSentinel,f as isLoopFileSentinel,w as logAutonomousLoopActivation,D as readLoopFileAsync,se as resolveLoopDefaultFire,ae as resolveLoopDefaultFireAsync};
