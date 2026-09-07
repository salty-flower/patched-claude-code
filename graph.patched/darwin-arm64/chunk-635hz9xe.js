// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{Ae}from"./chunk-dhrcn786.js";import{sn}from"./chunk-zhtwayh2.js";import"./chunk-fkz3e4t3.js";import"./chunk-7wmynp0n.js";import"./chunk-r5q3158s.js";import{I}from"./chunk-n495pc0t.js";import{Se}from"./chunk-4rr1ghkj.js";import"./chunk-3qjd0g3g.js";import"./chunk-h7ha2q61.js";import{a}from"./chunk-dq2s4wjn.js";import"./chunk-9g7wf9qr.js";import{A,vt}from"./chunk-084v19yj.js";import"./chunk-gnrvsty9.js";import"./chunk-5q90j22t.js";import"./chunk-643msr15.js";import"./chunk-j317bre5.js";import"./chunk-c5ajdz5z.js";import"./chunk-f2w14jf7.js";import{i}from"./chunk-vtd04czk.js";import"./chunk-m0jywms0.js";import"./chunk-hzsc62cn.js";import"./chunk-0qz53fdq.js";import"./chunk-jat129zj.js";import"./chunk-dsq5gcfe.js";import"./chunk-rbvf4vfx.js";import"./chunk-7t0edxg3.js";import"./chunk-1rkars97.js";import"./chunk-qs8h438x.js";import"./chunk-3pft38xm.js";import"./chunk-rm74k23p.js";import"./chunk-6mr2v1ks.js";import"./chunk-q4eej6rr.js";import"./chunk-2rhkgebc.js";import"./chunk-sxccpdbg.js";import"./chunk-jy0p4wg8.js";import"./chunk-0masdjfa.js";import"./chunk-pe4nmbcg.js";import"./chunk-t4hc7q7h.js";import"./chunk-bky8qhrb.js";import"./chunk-hakb056a.js";import"./chunk-wxx3jwpj.js";import"./chunk-1y4ds8dy.js";import"./chunk-rgyht4ht.js";import"./chunk-6a9jfng9.js";import"./chunk-1gcpv8sw.js";import"./chunk-7z7x82kj.js";import"./chunk-404xhkzs.js";import"./chunk-sgt1b7h0.js";import"./chunk-n031qbtd.js";import"./chunk-d5e21f8p.js";import"./chunk-gyxp7wp6.js";import"./chunk-qhv99t4f.js";import"./chunk-r2ztspyj.js";import"./chunk-hernhfa4.js";import"./chunk-kswf1s4a.js";import"./chunk-6pky15m5.js";import"./chunk-q3h60esw.js";import"./chunk-ghd3nyd4.js";import"./chunk-ped3cn2k.js";import"./chunk-w2q5yc2x.js";import"./chunk-q31h7y51.js";import"./chunk-rvca8fd4.js";import"./chunk-jd1wva8b.js";import"./chunk-kyxky0qb.js";import"./chunk-r147enn1.js";import"./chunk-c8mj69qr.js";import"./chunk-ehv9s8sq.js";import"./chunk-31b8gaj2.js";import"./chunk-kk1kt2t6.js";import"./chunk-rp83cx0a.js";import"./chunk-9d2zgq9g.js";import{Kv,PY}from"./chunk-tsnanb8e.js";import{Vi,AAe,Cre,Jm,mT}from"./chunk-pfdwdj59.js";import"./chunk-4f0aetqn.js";import{ra}from"./chunk-9rzmpagp.js";import"./chunk-vycx69he.js";import"./chunk-j7n34nkk.js";import"./chunk-j9kep6b4.js";import"./chunk-j29ds5jh.js";import"./chunk-sfmkt7ws.js";import"./chunk-00fsqktf.js";import"./chunk-hv9s9qdn.js";import"./chunk-s37nbkm2.js";import{Ee}from"./chunk-te942vjn.js";import{readFileSync as E}from"fs";import{join as u}from"path";var p=Ee("./loopAutonomousPreamble-07qcyhv4.md");var y=Ee("./loopAutonomousPreamblePersistent-3zqtkrvg.md");function g(){if(a.CLAUDE_CODE_LOOP_PERSISTENT)return!0;return I("tengu_kairos_loop_persistent",!1)}function v(){return g()?y:p}function w(){i("tengu_kairos_loop_persistent_activated",{variant:g()})}function h(e=!1){if(!PY())return"";let o=!e&&g()?"newly blocked on a decision you won't make alone, you're ending the loop":"newly blocked on a decision you won't make alone, third straight tick with nothing to do, you're ending the loop";return`

Use ${Kv} when the loop can't move further without the user, or when something landed that they'd want to act on now: ${o}, or a major update arrived (CI went red, a review changes the plan). Progress you made yourself isn't a trigger \u2014 the transcript covers that. One ping per state, not per tick.`}function b(){return`# Autonomous loop tick

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${Vi} from this tick.${h()}`}var m=`

If a ${ra} is armed (check ${mT}), keep \`delaySeconds\` at 1200\u20131800s \u2014 the ${ra} is the wake signal and this is only the fallback heartbeat. If you were woken by a \`<task-notification>\`, handle the event before deciding whether to re-arm. To stop the loop, call ${Vi} with \`stop: true\` and ${Jm} the monitor (use ${mT} to find its task ID if no longer in context).`;function x(){return`# Autonomous loop tick (dynamic pacing)

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${Vi} tool (not a recurring cron). To keep the loop alive, call ${Vi} again at the end of this turn with \`prompt\` set to the literal sentinel \`${Cre}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${m}${h()}`}function L(e){return e===AAe||e===Cre}function P(e,t){if(!L(t))return null;w();let o=t===Cre?x():b();if(e.autonomousPreambleDelivered||e.lastLoopFileDelivered!==null)return o;return e.autonomousPreambleDelivered=!0,`${v()}

---

${o}`}var k="__autonomous_preamble__",C="<<loop.md>>",d="<<loop.md-dynamic>>";function F(){return`# /loop tick \u2014 loop.md tasks

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${Vi} from this tick.${h(!0)}`}function M(){return`# /loop tick \u2014 loop.md tasks (dynamic pacing)

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${Vi} tool (not a recurring cron). To keep the loop alive, call ${Vi} again at the end of this turn with \`prompt\` set to the literal sentinel \`${d}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${m}${h(!0)}`}function N(){return`# /loop tick \u2014 loop.md absent (dynamic pacing)

loop.md is not currently present. Run the autonomous check using the loop instructions established earlier in this conversation.

You scheduled this tick via the ${Vi} tool (not a recurring cron). To keep the loop alive \u2014 and to pick up loop.md if it is recreated \u2014 call ${Vi} again at the end of this turn with \`prompt\` set to the literal sentinel \`${d}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${m}${h()}`}var l=25000;function _(e){if(e.length<=l)return e;let t=e.lastIndexOf(`
`,l);return`${e.slice(0,t>0?t:l)}

> WARNING: loop.md was truncated to ${l} bytes. Keep the task list concise.`}function T(){return c(u(sn(),".claude","loop.md"))??c(u(Se(),"loop.md"))}function c(e){let t;try{t=E(e,"utf-8")}catch(n){if(vt(n)||A(n)==="EISDIR")return null;throw n}let o=t.trim();if(o.length===0)return null;return{path:e,content:_(o)}}async function D(e){if(!e)return T();let t=c(u(sn(),".claude","loop.md"));if(t)return t;let o=u(Se(),"loop.md"),n=await e.read([Ae.state("loop-file")]);if(!n.ok)return c(o);let r=n.value.items[0];if(!r.found)return null;let s=Buffer.from(r.value.buffer,r.value.byteOffset,r.value.byteLength).toString("utf-8").trim();if(s.length===0)return null;return{path:o,content:_(s)}}function f(e){return e===C||e===d}function q(e,t){if(!f(t))return null;return O(e,t,T())}async function W(e,t,o){if(!f(t))return null;return O(e,t,await D(o))}function O(e,t,o){let n=t===d;if(o){let s=n?M():F();if(e.lastLoopFileDelivered===o.content)return s;return e.lastLoopFileDelivered=o.content,`# /loop tick \u2014 tasks from ${o.path}

The user configured a loop-tasks file. Work through the tasks defined below; these are the instructions for this tick and every subsequent tick (the reminder on later fires refers back to this message).

---

${o.content}

---

${s}`}w();let r=n?N():b();if(e.lastLoopFileDelivered===k||e.autonomousPreambleDelivered)return r;return e.lastLoopFileDelivered=k,e.autonomousPreambleDelivered=!0,`${v()}

---

${r}`}function re(e){return L(e)||f(e)}function se(e,t){return P(e,t)??q(e,t)??t}async function ae(e,t,o){return P(e,t)??await W(e,t,o)??t}export{d as LOOP_FILE_DYNAMIC_SENTINEL,C as LOOP_FILE_SENTINEL,v as getAutonomousLoopPreamble,re as isLoopDefaultSentinel,f as isLoopFileSentinel,w as logAutonomousLoopActivation,D as readLoopFileAsync,se as resolveLoopDefaultFire,ae as resolveLoopDefaultFireAsync};
