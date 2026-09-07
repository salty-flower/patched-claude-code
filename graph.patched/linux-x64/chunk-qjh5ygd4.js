// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import{Ae}from"./chunk-ctrs6tfh.js";import{sn}from"./chunk-k6vqz9fa.js";import"./chunk-8a7jwk3w.js";import"./chunk-m3vzz9tz.js";import"./chunk-r8601mcq.js";import{I}from"./chunk-32f2qmtc.js";import{Se}from"./chunk-jmxayrtv.js";import"./chunk-78nzsrc6.js";import"./chunk-yqdggex4.js";import{a}from"./chunk-bxegdt3f.js";import"./chunk-1p8thh7t.js";import"./chunk-1m0n2kwr.js";import{A,Tt}from"./chunk-06whp1c5.js";import"./chunk-mh9y4c2z.js";import"./chunk-w8jp0t25.js";import"./chunk-kqpqzcmv.js";import"./chunk-r1xh498w.js";import"./chunk-0d0nn4ae.js";import{i}from"./chunk-y9tkdj4c.js";import"./chunk-9c9242q9.js";import"./chunk-j44ptfw0.js";import"./chunk-cy8hxjse.js";import"./chunk-b41q7ss6.js";import"./chunk-cbshpytk.js";import"./chunk-kxdybkam.js";import"./chunk-ke36szyq.js";import"./chunk-8bd42nrb.js";import"./chunk-z4h5ym44.js";import"./chunk-55s6k4f0.js";import"./chunk-v916jarm.js";import"./chunk-zqzrgb20.js";import"./chunk-cgc6ah4n.js";import"./chunk-eqgyf4er.js";import"./chunk-v7vff0yy.js";import"./chunk-k9hc9pe5.js";import"./chunk-p3hagek4.js";import"./chunk-j6rfmzxq.js";import"./chunk-xnx53tr1.js";import"./chunk-te0qwtpy.js";import"./chunk-ah1kb8zv.js";import"./chunk-pspwb82p.js";import"./chunk-ry2xbn1t.js";import"./chunk-pabcf0cd.js";import"./chunk-qj81qj0a.js";import"./chunk-20w6hca0.js";import"./chunk-ebp189k1.js";import"./chunk-8q8hj6xj.js";import"./chunk-x0xqzpn1.js";import"./chunk-x7ckrg92.js";import"./chunk-1wrntbps.js";import"./chunk-71zhb9jr.js";import"./chunk-r0g511s6.js";import"./chunk-7fpmaq7k.js";import"./chunk-01khvgez.js";import"./chunk-5pwrzqzk.js";import"./chunk-9ep9p4b1.js";import"./chunk-3ec9hd6z.js";import"./chunk-j0wk3h85.js";import"./chunk-0qxfa76c.js";import"./chunk-01t8d9d8.js";import"./chunk-1n3yp4cx.js";import"./chunk-2zwmhqkx.js";import"./chunk-xrr6v9m7.js";import"./chunk-8as7yv62.js";import"./chunk-7kse1ekq.js";import"./chunk-9fs3bhky.js";import"./chunk-q1rcf2nb.js";import"./chunk-s10h1zk9.js";import"./chunk-tjx05rry.js";import"./chunk-cqweh8sg.js";import"./chunk-bnakj6gn.js";import{sT,JJ}from"./chunk-j9a4pq0d.js";import"./chunk-0mxf3m00.js";import{Yi,JAe,qre,Tw,rg}from"./chunk-b787db3q.js";import{ia}from"./chunk-5vhxw3s9.js";import"./chunk-vyay8w7r.js";import"./chunk-6e8gaqd9.js";import"./chunk-pb41yc27.js";import"./chunk-vm29tqmf.js";import"./chunk-rpnwkr8a.js";import"./chunk-aedbr8zd.js";import"./chunk-5w2ggns2.js";import"./chunk-vmja0gjy.js";import{ve}from"./chunk-1r5dbh9v.js";import{readFileSync as E}from"fs";import{join as u}from"path";var p=ve("./loopAutonomousPreamble-07qcyhv4.md");var y=ve("./loopAutonomousPreamblePersistent-3zqtkrvg.md");function g(){if(a.CLAUDE_CODE_LOOP_PERSISTENT)return!0;return I("tengu_kairos_loop_persistent",!1)}function v(){return g()?y:p}function w(){i("tengu_kairos_loop_persistent_activated",{variant:g()})}function h(e=!1){if(!JJ())return"";let o=!e&&g()?"newly blocked on a decision you won't make alone, you're ending the loop":"newly blocked on a decision you won't make alone, third straight tick with nothing to do, you're ending the loop";return`

Use ${sT} when the loop can't move further without the user, or when something landed that they'd want to act on now: ${o}, or a major update arrived (CI went red, a review changes the plan). Progress you made yourself isn't a trigger \u2014 the transcript covers that. One ping per state, not per tick.`}function b(){return`# Autonomous loop tick

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${Yi} from this tick.${h()}`}var m=`

If a ${ia} is armed (check ${Tw}), keep \`delaySeconds\` at 1200\u20131800s \u2014 the ${ia} is the wake signal and this is only the fallback heartbeat. If you were woken by a \`<task-notification>\`, handle the event before deciding whether to re-arm. To stop the loop, call ${Yi} with \`stop: true\` and ${rg} the monitor (use ${Tw} to find its task ID if no longer in context).`;function x(){return`# Autonomous loop tick (dynamic pacing)

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${Yi} tool (not a recurring cron). To keep the loop alive, call ${Yi} again at the end of this turn with \`prompt\` set to the literal sentinel \`${qre}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${m}${h()}`}function L(e){return e===JAe||e===qre}function P(e,t){if(!L(t))return null;w();let o=t===qre?x():b();if(e.autonomousPreambleDelivered||e.lastLoopFileDelivered!==null)return o;return e.autonomousPreambleDelivered=!0,`${v()}

---

${o}`}var k="__autonomous_preamble__",C="<<loop.md>>",d="<<loop.md-dynamic>>";function F(){return`# /loop tick \u2014 loop.md tasks

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${Yi} from this tick.${h(!0)}`}function M(){return`# /loop tick \u2014 loop.md tasks (dynamic pacing)

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${Yi} tool (not a recurring cron). To keep the loop alive, call ${Yi} again at the end of this turn with \`prompt\` set to the literal sentinel \`${d}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${m}${h(!0)}`}function N(){return`# /loop tick \u2014 loop.md absent (dynamic pacing)

loop.md is not currently present. Run the autonomous check using the loop instructions established earlier in this conversation.

You scheduled this tick via the ${Yi} tool (not a recurring cron). To keep the loop alive \u2014 and to pick up loop.md if it is recreated \u2014 call ${Yi} again at the end of this turn with \`prompt\` set to the literal sentinel \`${d}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${m}${h()}`}var l=25000;function _(e){if(e.length<=l)return e;let t=e.lastIndexOf(`
`,l);return`${e.slice(0,t>0?t:l)}

> WARNING: loop.md was truncated to ${l} bytes. Keep the task list concise.`}function T(){return c(u(sn(),".claude","loop.md"))??c(u(Se(),"loop.md"))}function c(e){let t;try{t=E(e,"utf-8")}catch(n){if(Tt(n)||A(n)==="EISDIR")return null;throw n}let o=t.trim();if(o.length===0)return null;return{path:e,content:_(o)}}async function D(e){if(!e)return T();let t=c(u(sn(),".claude","loop.md"));if(t)return t;let o=u(Se(),"loop.md"),n=await e.read([Ae.state("loop-file")]);if(!n.ok)return c(o);let r=n.value.items[0];if(!r.found)return null;let s=Buffer.from(r.value.buffer,r.value.byteOffset,r.value.byteLength).toString("utf-8").trim();if(s.length===0)return null;return{path:o,content:_(s)}}function f(e){return e===C||e===d}function q(e,t){if(!f(t))return null;return O(e,t,T())}async function W(e,t,o){if(!f(t))return null;return O(e,t,await D(o))}function O(e,t,o){let n=t===d;if(o){let s=n?M():F();if(e.lastLoopFileDelivered===o.content)return s;return e.lastLoopFileDelivered=o.content,`# /loop tick \u2014 tasks from ${o.path}

The user configured a loop-tasks file. Work through the tasks defined below; these are the instructions for this tick and every subsequent tick (the reminder on later fires refers back to this message).

---

${o.content}

---

${s}`}w();let r=n?N():b();if(e.lastLoopFileDelivered===k||e.autonomousPreambleDelivered)return r;return e.lastLoopFileDelivered=k,e.autonomousPreambleDelivered=!0,`${v()}

---

${r}`}function re(e){return L(e)||f(e)}function se(e,t){return P(e,t)??q(e,t)??t}async function ae(e,t,o){return P(e,t)??await W(e,t,o)??t}export{d as LOOP_FILE_DYNAMIC_SENTINEL,C as LOOP_FILE_SENTINEL,v as getAutonomousLoopPreamble,re as isLoopDefaultSentinel,f as isLoopFileSentinel,w as logAutonomousLoopActivation,D as readLoopFileAsync,se as resolveLoopDefaultFire,ae as resolveLoopDefaultFireAsync};
