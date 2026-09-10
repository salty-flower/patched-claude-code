// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{ke}from"./chunk-4te7e7q8.js";import{cn}from"./chunk-t8q7n4ta.js";import"./chunk-a7esebzw.js";import"./chunk-m3k3498d.js";import"./chunk-rfvh2b8a.js";import{I}from"./chunk-btbsn9s4.js";import{Se}from"./chunk-qsnhycbm.js";import"./chunk-7tpgnqqk.js";import"./chunk-9f6zczff.js";import{a}from"./chunk-9fmxymtw.js";import"./chunk-wchdjfbm.js";import"./chunk-vkfaczp9.js";import{A,It}from"./chunk-vfrpernt.js";import"./chunk-fy3j7rz0.js";import"./chunk-xdb7bs7g.js";import"./chunk-xj9n0xxp.js";import"./chunk-jvycdhmw.js";import"./chunk-554z0m6d.js";import{i}from"./chunk-74qghvre.js";import"./chunk-dzyeyv65.js";import"./chunk-rkvsjmym.js";import"./chunk-aznf32zy.js";import"./chunk-kr1pab5n.js";import"./chunk-f80rn6zv.js";import"./chunk-ckb6ttfs.js";import"./chunk-zfc5b4tv.js";import"./chunk-zw6xpj0e.js";import"./chunk-ydsbq05f.js";import"./chunk-dm1d67j0.js";import"./chunk-me2q8h8a.js";import"./chunk-y4ms75k8.js";import"./chunk-nbea0zv9.js";import"./chunk-7pzst5bj.js";import"./chunk-hfjb09vk.js";import"./chunk-pwwpvrmd.js";import"./chunk-kgqcj5g2.js";import"./chunk-tmbmk9b2.js";import"./chunk-kcxa79n8.js";import"./chunk-52ssfc24.js";import"./chunk-491rtt4x.js";import"./chunk-navp2db5.js";import"./chunk-knsrg480.js";import"./chunk-3xt7t29s.js";import"./chunk-2070tacj.js";import"./chunk-3ekf0n3z.js";import"./chunk-drjqqtaw.js";import"./chunk-xe36t0b4.js";import"./chunk-3e67p3qb.js";import"./chunk-eqagbzpy.js";import"./chunk-qcm1ed8r.js";import"./chunk-5jacf3nm.js";import"./chunk-jxgr13c3.js";import"./chunk-0ym3442e.js";import"./chunk-mdw0rg7r.js";import"./chunk-zrfv45h3.js";import"./chunk-0j67j6vd.js";import"./chunk-fq2q5808.js";import"./chunk-xp524m8z.js";import"./chunk-p1db16q0.js";import"./chunk-p0vxsr5s.js";import"./chunk-140dp1v3.js";import"./chunk-1yfctqs9.js";import"./chunk-cqe7zrvv.js";import"./chunk-bhwge2fj.js";import"./chunk-f4p6rc3t.js";import"./chunk-1vw101nq.js";import"./chunk-9ea4hj0w.js";import"./chunk-fbrtdkc9.js";import"./chunk-397dhf32.js";import"./chunk-6mran53g.js";import"./chunk-02ngbnjg.js";import"./chunk-y1gw8jjw.js";import{OC,gQ}from"./chunk-kaq2je32.js";import"./chunk-nt17n1q1.js";import{Zi,UTe,fse,fb,wg}from"./chunk-cbe5jj8r.js";import{ua}from"./chunk-gsryksdx.js";import"./chunk-am3rm9m5.js";import"./chunk-ckzz2qym.js";import"./chunk-4wqcg6m9.js";import"./chunk-bx9qrqzr.js";import"./chunk-3pr6cedc.js";import"./chunk-q2svqtr6.js";import"./chunk-bs8xfxpn.js";import"./chunk-ntxvbhz9.js";import"./chunk-e5066x5s.js";import"./chunk-k9qk789z.js";import{Te}from"./chunk-7sg5wrey.js";import{readFileSync as E}from"fs";import{join as u}from"path";var p=Te("./loopAutonomousPreamble-07qcyhv4.md.embedded.txt");var y=Te("./loopAutonomousPreamblePersistent-3zqtkrvg.md.embedded.txt");function g(){if(a.CLAUDE_CODE_LOOP_PERSISTENT)return!0;return I("tengu_kairos_loop_persistent",!1)}function v(){return g()?y:p}function w(){i("tengu_kairos_loop_persistent_activated",{variant:g()})}function h(e=!1){if(!gQ())return"";let o=!e&&g()?"newly blocked on a decision you won't make alone, you're ending the loop":"newly blocked on a decision you won't make alone, third straight tick with nothing to do, you're ending the loop";return`

Use ${OC} when the loop can't move further without the user, or when something landed that they'd want to act on now: ${o}, or a major update arrived (CI went red, a review changes the plan). Progress you made yourself isn't a trigger \u2014 the transcript covers that. One ping per state, not per tick.`}function b(){return`# Autonomous loop tick

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${Zi} from this tick.${h()}`}var m=`

If a ${ua} is armed (check ${fb}), keep \`delaySeconds\` at 1200\u20131800s \u2014 the ${ua} is the wake signal and this is only the fallback heartbeat. If you were woken by a \`<task-notification>\`, handle the event before deciding whether to re-arm. To stop the loop, call ${Zi} with \`stop: true\` and ${wg} the monitor (use ${fb} to find its task ID if no longer in context).`;function x(){return`# Autonomous loop tick (dynamic pacing)

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${Zi} tool (not a recurring cron). To keep the loop alive, call ${Zi} again at the end of this turn with \`prompt\` set to the literal sentinel \`${fse}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${m}${h()}`}function L(e){return e===UTe||e===fse}function P(e,t){if(!L(t))return null;w();let o=t===fse?x():b();if(e.autonomousPreambleDelivered||e.lastLoopFileDelivered!==null)return o;return e.autonomousPreambleDelivered=!0,`${v()}

---

${o}`}var k="__autonomous_preamble__",C="<<loop.md>>",d="<<loop.md-dynamic>>";function F(){return`# /loop tick \u2014 loop.md tasks

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${Zi} from this tick.${h(!0)}`}function M(){return`# /loop tick \u2014 loop.md tasks (dynamic pacing)

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${Zi} tool (not a recurring cron). To keep the loop alive, call ${Zi} again at the end of this turn with \`prompt\` set to the literal sentinel \`${d}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${m}${h(!0)}`}function N(){return`# /loop tick \u2014 loop.md absent (dynamic pacing)

loop.md is not currently present. Run the autonomous check using the loop instructions established earlier in this conversation.

You scheduled this tick via the ${Zi} tool (not a recurring cron). To keep the loop alive \u2014 and to pick up loop.md if it is recreated \u2014 call ${Zi} again at the end of this turn with \`prompt\` set to the literal sentinel \`${d}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${m}${h()}`}var l=25000;function _(e){if(e.length<=l)return e;let t=e.lastIndexOf(`
`,l);return`${e.slice(0,t>0?t:l)}

> WARNING: loop.md was truncated to ${l} bytes. Keep the task list concise.`}function T(){return c(u(cn(),".claude","loop.md"))??c(u(Se(),"loop.md"))}function c(e){let t;try{t=E(e,"utf-8")}catch(n){if(It(n)||A(n)==="EISDIR")return null;throw n}let o=t.trim();if(o.length===0)return null;return{path:e,content:_(o)}}async function D(e){if(!e)return T();let t=c(u(cn(),".claude","loop.md"));if(t)return t;let o=u(Se(),"loop.md"),n=await e.read([ke.state("loop-file")]);if(!n.ok)return c(o);let r=n.value.items[0];if(!r.found)return null;let s=Buffer.from(r.value.buffer,r.value.byteOffset,r.value.byteLength).toString("utf-8").trim();if(s.length===0)return null;return{path:o,content:_(s)}}function f(e){return e===C||e===d}function q(e,t){if(!f(t))return null;return O(e,t,T())}async function W(e,t,o){if(!f(t))return null;return O(e,t,await D(o))}function O(e,t,o){let n=t===d;if(o){let s=n?M():F();if(e.lastLoopFileDelivered===o.content)return s;return e.lastLoopFileDelivered=o.content,`# /loop tick \u2014 tasks from ${o.path}

The user configured a loop-tasks file. Work through the tasks defined below; these are the instructions for this tick and every subsequent tick (the reminder on later fires refers back to this message).

---

${o.content}

---

${s}`}w();let r=n?N():b();if(e.lastLoopFileDelivered===k||e.autonomousPreambleDelivered)return r;return e.lastLoopFileDelivered=k,e.autonomousPreambleDelivered=!0,`${v()}

---

${r}`}function re(e){return L(e)||f(e)}function se(e,t){return P(e,t)??q(e,t)??t}async function ae(e,t,o){return P(e,t)??await W(e,t,o)??t}export{d as LOOP_FILE_DYNAMIC_SENTINEL,C as LOOP_FILE_SENTINEL,v as getAutonomousLoopPreamble,re as isLoopDefaultSentinel,f as isLoopFileSentinel,w as logAutonomousLoopActivation,D as readLoopFileAsync,se as resolveLoopDefaultFire,ae as resolveLoopDefaultFireAsync};
