// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{Te}from"./chunk-tcx7fvpc.js";import"./chunk-w9w461gr.js";import"./chunk-6cqmwr9m.js";import{vn,_o}from"./chunk-s8xs8s76.js";import"./chunk-37kdx3dg.js";import"./chunk-gas689jj.js";import{E,Ht}from"./chunk-shf1fjz2.js";import"./chunk-zr6jq9j9.js";import"./chunk-w13amena.js";import{x}from"./chunk-twxt3h9y.js";import{we}from"./chunk-4cwgnmh9.js";import"./chunk-1y7zyxh8.js";import"./chunk-njn6k74e.js";import{a}from"./chunk-3a4khaz5.js";import"./chunk-v9aeg87c.js";import"./chunk-wvb0gwjm.js";import"./chunk-81r5kx3r.js";import"./chunk-j370x2tz.js";import"./chunk-0dpks9t0.js";import"./chunk-vzqvvnm0.js";import"./chunk-5cz12mxk.js";import{i}from"./chunk-9cfndpw0.js";import"./chunk-ymkzysdh.js";import"./chunk-zb872eas.js";import"./chunk-tj8y2xcj.js";import"./chunk-gqaj0njn.js";import"./chunk-9vnajd7a.js";import"./chunk-hn35vsf8.js";import"./chunk-shk8jjt1.js";import"./chunk-97rwyxer.js";import"./chunk-ms03d305.js";import"./chunk-kc002nbr.js";import"./chunk-fdnv15ej.js";import"./chunk-x4gz28fm.js";import"./chunk-emn764wn.js";import"./chunk-cmqyka9v.js";import"./chunk-vvq2vnvw.js";import"./chunk-aneqvevx.js";import"./chunk-ekshy3qa.js";import"./chunk-ry9k94nn.js";import"./chunk-z2w95mdn.js";import"./chunk-amq2nck9.js";import"./chunk-3eeg3qvv.js";import"./chunk-742ky2cp.js";import"./chunk-pkcypf3f.js";import"./chunk-m9hfdm3b.js";import"./chunk-je0c1kfp.js";import"./chunk-kdwykznz.js";import"./chunk-mjmhaa2n.js";import"./chunk-s09n49gq.js";import"./chunk-bnfryxmn.js";import"./chunk-n3x619p1.js";import"./chunk-n875m8bj.js";import"./chunk-0mkbat55.js";import"./chunk-7wq3cxhj.js";import"./chunk-821rxv4j.js";import"./chunk-9pj6s8ha.js";import"./chunk-fp8phndt.js";import"./chunk-7x4fz860.js";import"./chunk-eh0c72zp.js";import"./chunk-2jc9gzqt.js";import"./chunk-m3rjj2qj.js";import"./chunk-pkhrg5v5.js";import"./chunk-wt3kk7dt.js";import"./chunk-wjcvdctc.js";import"./chunk-9fsgjz11.js";import"./chunk-tq81az32.js";import"./chunk-m65e81jc.js";import"./chunk-vn3m1gs0.js";import"./chunk-hg1f9dgc.js";import"./chunk-w3vnd82x.js";import"./chunk-kg44xfte.js";import"./chunk-k59kdd19.js";import"./chunk-dtsvh7pz.js";import"./chunk-8z6ck5c9.js";import"./chunk-eb2vdmgg.js";import"./chunk-7rgq3nmc.js";import"./chunk-9hjfgsa0.js";import{wpe}from"./chunk-z1r65sf0.js";import"./chunk-x9ma1zf8.js";import{ol,BGe,$we,Tb,Om}from"./chunk-7gtwr3kz.js";import{iP}from"./chunk-3zxzrqfd.js";import{el}from"./chunk-cjc1mjp4.js";import"./chunk-5sn6yh7p.js";import"./chunk-wf2aqwcp.js";import"./chunk-8jbeny5z.js";import"./chunk-kf9bybnr.js";import"./chunk-wyewzwe1.js";import"./chunk-apr1pmkm.js";import"./chunk-1f8ahewx.js";import"./chunk-dh68faj3.js";import"./chunk-tjymmzb8.js";import"./chunk-ddnrrbm5.js";import"./chunk-q41x5swz.js";import"./chunk-eksb3eb9.js";import"./chunk-aeqtw871.js";import"./chunk-m53hpgnw.js";import"./chunk-kaepya91.js";import{Re}from"./chunk-q9zds4dm.js";import{readFileSync as R}from"fs";import{join as u}from"path";var p=Re("./loopAutonomousPreamble-07qcyhv4.md.embedded.txt");var y=Re("./loopAutonomousPreamblePersistent-3zqtkrvg.md.embedded.txt");function g(){if(a.CLAUDE_CODE_LOOP_PERSISTENT)return!0;return x("tengu_kairos_loop_persistent",!1)}function v(){return g()?y:p}function w(){i("tengu_kairos_loop_persistent_activated",{variant:g()})}function h(e=!1){if(!wpe())return"";let o=!e&&g()?"newly blocked on a decision you won't make alone, you're ending the loop":"newly blocked on a decision you won't make alone, third straight tick with nothing to do, you're ending the loop";return`

Use ${iP} when the loop can't move further without the user, or when something landed that they'd want to act on now: ${o}, or a major update arrived (CI went red, a review changes the plan). Progress you made yourself isn't a trigger \u2014 the transcript covers that. One ping per state, not per tick.`}function b(){return`# Autonomous loop tick

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${ol} from this tick.${h()}`}var m=`

If a ${el} is armed (check ${Tb}), keep \`delaySeconds\` at 1200\u20131800s \u2014 the ${el} is the wake signal and this is only the fallback heartbeat. If you were woken by a \`<task-notification>\`, handle the event before deciding whether to re-arm. To stop the loop, call ${ol} with \`stop: true\` and ${Om} the monitor (use ${Tb} to find its task ID if no longer in context).`;function S(){return`# Autonomous loop tick (dynamic pacing)

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${ol} tool (not a recurring cron). To keep the loop alive, call ${ol} again at the end of this turn with \`prompt\` set to the literal sentinel \`${$we}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${m}${h()}`}function I(e){return e===BGe||e===$we}function L(e,t){if(!I(t))return null;w();let o=t===$we?S():b();if(e.autonomousPreambleDelivered||e.lastLoopFileDelivered!==null)return o;return e.autonomousPreambleDelivered=!0,`${v()}

---

${o}`}var k="__autonomous_preamble__",C="<<loop.md>>",d="<<loop.md-dynamic>>";function F(){return`# /loop tick \u2014 loop.md tasks

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${ol} from this tick.${h(!0)}`}function M(){return`# /loop tick \u2014 loop.md tasks (dynamic pacing)

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${ol} tool (not a recurring cron). To keep the loop alive, call ${ol} again at the end of this turn with \`prompt\` set to the literal sentinel \`${d}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${m}${h(!0)}`}function N(){return`# /loop tick \u2014 loop.md absent (dynamic pacing)

loop.md is not currently present. Run the autonomous check using the loop instructions established earlier in this conversation.

You scheduled this tick via the ${ol} tool (not a recurring cron). To keep the loop alive \u2014 and to pick up loop.md if it is recreated \u2014 call ${ol} again at the end of this turn with \`prompt\` set to the literal sentinel \`${d}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${m}${h()}`}var l=25000;function P(e){if(e.length<=l)return e;let t=e.lastIndexOf(`
`,l);return`${e.slice(0,t>0?t:l)}

> WARNING: loop.md was truncated to ${l} bytes. Keep the task list concise.`}function _(){return c(u(_o()??vn(),".claude","loop.md"))??c(u(we(),"loop.md"))}function c(e){let t;try{t=R(e,"utf-8")}catch(n){if(Ht(n)||E(n)==="EISDIR")return null;throw n}let o=t.trim();if(o.length===0)return null;return{path:e,content:P(o)}}async function D(e){if(!e)return _();let t=c(u(_o()??vn(),".claude","loop.md"));if(t)return t;let o=u(we(),"loop.md"),n=await e.read([Te.state("loop-file")]);if(!n.ok)return c(o);let r=n.value.items[0];if(!r.found)return null;let s=Buffer.from(r.value.buffer,r.value.byteOffset,r.value.byteLength).toString("utf-8").trim();if(s.length===0)return null;return{path:o,content:P(s)}}function f(e){return e===C||e===d}function q(e,t){if(!f(t))return null;return T(e,t,_())}async function j(e,t,o){if(!f(t))return null;return T(e,t,await D(o))}function T(e,t,o){let n=t===d;if(o){let s=n?M():F();if(e.lastLoopFileDelivered===o.content)return s;return e.lastLoopFileDelivered=o.content,`# /loop tick \u2014 tasks from ${o.path}

The user configured a loop-tasks file. Work through the tasks defined below; these are the instructions for this tick and every subsequent tick (the reminder on later fires refers back to this message).

---

${o.content}

---

${s}`}w();let r=n?N():b();if(e.lastLoopFileDelivered===k||e.autonomousPreambleDelivered)return r;return e.lastLoopFileDelivered=k,e.autonomousPreambleDelivered=!0,`${v()}

---

${r}`}function re(e){return I(e)||f(e)}function se(e,t){return L(e,t)??q(e,t)??t}async function ae(e,t,o){return L(e,t)??await j(e,t,o)??t}export{d as LOOP_FILE_DYNAMIC_SENTINEL,C as LOOP_FILE_SENTINEL,v as getAutonomousLoopPreamble,re as isLoopDefaultSentinel,f as isLoopFileSentinel,w as logAutonomousLoopActivation,D as readLoopFileAsync,se as resolveLoopDefaultFire,ae as resolveLoopDefaultFireAsync};
