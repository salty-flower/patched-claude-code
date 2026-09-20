// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{ke}from"./chunk-aj022wxj.js";import{mn}from"./chunk-sgamszzq.js";import"./chunk-vx7e38ke.js";import"./chunk-n93bke93.js";import"./chunk-q2h0fawe.js";import{P}from"./chunk-g4c6ggz4.js";import{we}from"./chunk-jxdnn2j1.js";import"./chunk-67jj8qay.js";import"./chunk-7greh2d8.js";import{a}from"./chunk-wkhfcbsj.js";import"./chunk-tq3ft6e6.js";import"./chunk-k6smmjsm.js";import{C,Ft}from"./chunk-qq9jq5dz.js";import"./chunk-qmm87fyw.js";import"./chunk-pfxvy4ay.js";import"./chunk-vzm3bfp5.js";import"./chunk-1cx6bcw0.js";import"./chunk-w0wezkwh.js";import{i}from"./chunk-jxv3x25k.js";import"./chunk-4akrhkry.js";import"./chunk-033exrv9.js";import"./chunk-057hcrqj.js";import"./chunk-nemb0v5p.js";import"./chunk-n21rqdv9.js";import"./chunk-gyqjm99t.js";import"./chunk-rffpe63a.js";import"./chunk-83fmeatd.js";import"./chunk-06f6mv83.js";import"./chunk-f1vfx2c9.js";import"./chunk-vwjr2pkc.js";import"./chunk-3w873vgy.js";import"./chunk-a38xyc22.js";import"./chunk-hxqyqnkp.js";import"./chunk-gyyhh83h.js";import"./chunk-jghr2zs7.js";import"./chunk-k515hq0v.js";import"./chunk-90yxyspx.js";import"./chunk-nxhd1nfq.js";import"./chunk-6vm9fw1n.js";import"./chunk-cywp4eg9.js";import"./chunk-j2wjbpxv.js";import"./chunk-4cdedaae.js";import"./chunk-y72vc59g.js";import"./chunk-m1s552da.js";import"./chunk-pfn1bjke.js";import"./chunk-hxn1me4q.js";import"./chunk-8yjp8tpt.js";import"./chunk-fmf8btmz.js";import"./chunk-r9jm87wv.js";import"./chunk-9ngv0yxa.js";import"./chunk-gk6kz4gh.js";import"./chunk-7tmdsrws.js";import"./chunk-yvbqdrex.js";import"./chunk-d5zyj0vt.js";import"./chunk-brxrr15j.js";import"./chunk-qyp953rx.js";import"./chunk-z6t0tnzq.js";import"./chunk-3a3psjjn.js";import"./chunk-4hvxqv7y.js";import"./chunk-fn346qw1.js";import"./chunk-7367658q.js";import"./chunk-cqv6tkc1.js";import"./chunk-j63nfvz8.js";import"./chunk-jmhxqcfx.js";import"./chunk-pgetpn99.js";import"./chunk-8797texs.js";import"./chunk-ec199pf4.js";import"./chunk-sf26qcjy.js";import"./chunk-rfxxab2b.js";import{Jx,Wre}from"./chunk-63sr5sqt.js";import"./chunk-rmdmdxwh.js";import{Pa,kDe,rpe,mb,Ig}from"./chunk-8y5qshd4.js";import{Ia}from"./chunk-fzedegkt.js";import"./chunk-c64g6h84.js";import"./chunk-en8ntyde.js";import"./chunk-5yfmr588.js";import"./chunk-j698dt39.js";import"./chunk-qt55mcfv.js";import"./chunk-e382dy54.js";import"./chunk-kmhka96v.js";import"./chunk-8g5d5rrv.js";import"./chunk-jm8tf5gf.js";import"./chunk-686wm7s6.js";import"./chunk-4zc2ctjz.js";import{Re}from"./chunk-y8wd7we8.js";import{readFileSync as S}from"fs";import{join as u}from"path";var p=Re("./loopAutonomousPreamble-07qcyhv4.md.embedded.txt");var y=Re("./loopAutonomousPreamblePersistent-3zqtkrvg.md.embedded.txt");function g(){if(a.CLAUDE_CODE_LOOP_PERSISTENT)return!0;return P("tengu_kairos_loop_persistent",!1)}function v(){return g()?y:p}function w(){i("tengu_kairos_loop_persistent_activated",{variant:g()})}function h(e=!1){if(!Wre())return"";let o=!e&&g()?"newly blocked on a decision you won't make alone, you're ending the loop":"newly blocked on a decision you won't make alone, third straight tick with nothing to do, you're ending the loop";return`

Use ${Jx} when the loop can't move further without the user, or when something landed that they'd want to act on now: ${o}, or a major update arrived (CI went red, a review changes the plan). Progress you made yourself isn't a trigger \u2014 the transcript covers that. One ping per state, not per tick.`}function b(){return`# Autonomous loop tick

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${Pa} from this tick.${h()}`}var m=`

If a ${Ia} is armed (check ${mb}), keep \`delaySeconds\` at 1200\u20131800s \u2014 the ${Ia} is the wake signal and this is only the fallback heartbeat. If you were woken by a \`<task-notification>\`, handle the event before deciding whether to re-arm. To stop the loop, call ${Pa} with \`stop: true\` and ${Ig} the monitor (use ${mb} to find its task ID if no longer in context).`;function E(){return`# Autonomous loop tick (dynamic pacing)

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${Pa} tool (not a recurring cron). To keep the loop alive, call ${Pa} again at the end of this turn with \`prompt\` set to the literal sentinel \`${rpe}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${m}${h()}`}function I(e){return e===kDe||e===rpe}function L(e,t){if(!I(t))return null;w();let o=t===rpe?E():b();if(e.autonomousPreambleDelivered||e.lastLoopFileDelivered!==null)return o;return e.autonomousPreambleDelivered=!0,`${v()}

---

${o}`}var k="__autonomous_preamble__",x="<<loop.md>>",d="<<loop.md-dynamic>>";function F(){return`# /loop tick \u2014 loop.md tasks

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${Pa} from this tick.${h(!0)}`}function M(){return`# /loop tick \u2014 loop.md tasks (dynamic pacing)

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${Pa} tool (not a recurring cron). To keep the loop alive, call ${Pa} again at the end of this turn with \`prompt\` set to the literal sentinel \`${d}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${m}${h(!0)}`}function N(){return`# /loop tick \u2014 loop.md absent (dynamic pacing)

loop.md is not currently present. Run the autonomous check using the loop instructions established earlier in this conversation.

You scheduled this tick via the ${Pa} tool (not a recurring cron). To keep the loop alive \u2014 and to pick up loop.md if it is recreated \u2014 call ${Pa} again at the end of this turn with \`prompt\` set to the literal sentinel \`${d}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${m}${h()}`}var l=25000;function _(e){if(e.length<=l)return e;let t=e.lastIndexOf(`
`,l);return`${e.slice(0,t>0?t:l)}

> WARNING: loop.md was truncated to ${l} bytes. Keep the task list concise.`}function T(){return c(u(mn(),".claude","loop.md"))??c(u(we(),"loop.md"))}function c(e){let t;try{t=S(e,"utf-8")}catch(n){if(Ft(n)||C(n)==="EISDIR")return null;throw n}let o=t.trim();if(o.length===0)return null;return{path:e,content:_(o)}}async function D(e){if(!e)return T();let t=c(u(mn(),".claude","loop.md"));if(t)return t;let o=u(we(),"loop.md"),n=await e.read([ke.state("loop-file")]);if(!n.ok)return c(o);let r=n.value.items[0];if(!r.found)return null;let s=Buffer.from(r.value.buffer,r.value.byteOffset,r.value.byteLength).toString("utf-8").trim();if(s.length===0)return null;return{path:o,content:_(s)}}function f(e){return e===x||e===d}function q(e,t){if(!f(t))return null;return A(e,t,T())}async function W(e,t,o){if(!f(t))return null;return A(e,t,await D(o))}function A(e,t,o){let n=t===d;if(o){let s=n?M():F();if(e.lastLoopFileDelivered===o.content)return s;return e.lastLoopFileDelivered=o.content,`# /loop tick \u2014 tasks from ${o.path}

The user configured a loop-tasks file. Work through the tasks defined below; these are the instructions for this tick and every subsequent tick (the reminder on later fires refers back to this message).

---

${o.content}

---

${s}`}w();let r=n?N():b();if(e.lastLoopFileDelivered===k||e.autonomousPreambleDelivered)return r;return e.lastLoopFileDelivered=k,e.autonomousPreambleDelivered=!0,`${v()}

---

${r}`}function re(e){return I(e)||f(e)}function se(e,t){return L(e,t)??q(e,t)??t}async function ae(e,t,o){return L(e,t)??await W(e,t,o)??t}export{d as LOOP_FILE_DYNAMIC_SENTINEL,x as LOOP_FILE_SENTINEL,v as getAutonomousLoopPreamble,re as isLoopDefaultSentinel,f as isLoopFileSentinel,w as logAutonomousLoopActivation,D as readLoopFileAsync,se as resolveLoopDefaultFire,ae as resolveLoopDefaultFireAsync};
