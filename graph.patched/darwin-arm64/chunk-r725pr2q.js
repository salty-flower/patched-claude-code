// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{Te}from"./chunk-8ath6mn8.js";import{gn}from"./chunk-38213y7h.js";import"./chunk-5b2g0bc6.js";import"./chunk-tey8avmn.js";import{I}from"./chunk-bsdtxcdc.js";import{be}from"./chunk-4j4893mq.js";import"./chunk-asme1eq2.js";import"./chunk-nt3hxpjz.js";import{a}from"./chunk-w3k8bej2.js";import"./chunk-tb103f96.js";import"./chunk-92vbp1ze.js";import"./chunk-9rhc0mtn.js";import{E,Ht}from"./chunk-qr1avfxy.js";import"./chunk-ynzt0fm1.js";import"./chunk-1jtqmqar.js";import"./chunk-04aem4bh.js";import"./chunk-qpcjd2zp.js";import"./chunk-gbq6xyrq.js";import{s}from"./chunk-qw5jhqey.js";import"./chunk-xtqqhw5t.js";import"./chunk-z9mp80s2.js";import"./chunk-7v2mj9b2.js";import"./chunk-qstfp0cz.js";import"./chunk-n0yyxtyf.js";import"./chunk-451qv46z.js";import"./chunk-jpjxepq9.js";import"./chunk-zb8d66s3.js";import"./chunk-dckv2srq.js";import"./chunk-870sakbg.js";import"./chunk-4ngx0mjr.js";import"./chunk-trd7c1xg.js";import"./chunk-yzssqtg9.js";import"./chunk-ns9e34z1.js";import"./chunk-d8ymrekx.js";import"./chunk-1hpjnncp.js";import"./chunk-j22kanvh.js";import"./chunk-4k4029wq.js";import"./chunk-vvj94wew.js";import"./chunk-b8r6yeec.js";import"./chunk-cx07awjk.js";import"./chunk-8c6qx8qp.js";import"./chunk-nag2zkkq.js";import"./chunk-af80z9sa.js";import"./chunk-71eaqash.js";import"./chunk-7g4v1yq9.js";import"./chunk-2s2q3hwy.js";import"./chunk-fk13r7sg.js";import"./chunk-8b25vs1j.js";import"./chunk-8k6avy35.js";import"./chunk-xry7qepk.js";import"./chunk-rm5qjs80.js";import"./chunk-nqg8bykp.js";import"./chunk-6pwm0z6x.js";import"./chunk-mk4am7jk.js";import"./chunk-seset5dr.js";import"./chunk-bcs84682.js";import"./chunk-znxmbm58.js";import"./chunk-zgjbv493.js";import"./chunk-2qvmm0t6.js";import"./chunk-bpa6089w.js";import"./chunk-rsfpm3y4.js";import"./chunk-mccwjvz3.js";import"./chunk-sjr02qnv.js";import"./chunk-pxjm7v8m.js";import"./chunk-yprfjz48.js";import"./chunk-e64rab41.js";import"./chunk-t08x6k34.js";import"./chunk-sw698tpc.js";import"./chunk-p0zc8jmz.js";import"./chunk-adnd44zx.js";import"./chunk-6fgxyy6b.js";import"./chunk-70vy0xt5.js";import"./chunk-3fmberkx.js";import"./chunk-94abhyt4.js";import"./chunk-xhf6e4gc.js";import"./chunk-pdpxsvxg.js";import"./chunk-e5wnfhf7.js";import"./chunk-0m09sk6y.js";import"./chunk-p4ge1s9m.js";import"./chunk-t1rb87np.js";import"./chunk-49gs1y6m.js";import"./chunk-q9hnzper.js";import"./chunk-1nvr3b9n.js";import"./chunk-w4pcf9py.js";import"./chunk-zy52csxy.js";import"./chunk-ff2cm6wy.js";import{$X}from"./chunk-qawq7189.js";import{ny,hT}from"./chunk-n855n58h.js";import{pa,tTe,hne}from"./chunk-7f6rqxc5.js";import"./chunk-90dd95xm.js";import{vk}from"./chunk-973nayqb.js";import{ma}from"./chunk-q1e724p4.js";import"./chunk-b2gh276b.js";import"./chunk-vd16bvwx.js";import"./chunk-t1mp6dc7.js";import"./chunk-vrasa60a.js";import"./chunk-2k2mkbsv.js";import"./chunk-0tzv6e6j.js";import"./chunk-zx8x716f.js";import"./chunk-x46dbms4.js";import"./chunk-zyp65cht.js";import"./chunk-snzr790g.js";import"./chunk-6c8t6gsc.js";import{ue}from"./chunk-rqyyny1n.js";import{readFileSync as S}from"fs";import{join as u}from"path";var g=ue("./loopAutonomousPreamble-07qcyhv4.md");var y=ue("./loopAutonomousPreamblePersistent-3zqtkrvg.md");var re=g;function m(){if(a.CLAUDE_CODE_LOOP_PERSISTENT)return!0;return I("tengu_kairos_loop_persistent",!1)}function v(){return m()?y:g}function w(){s("tengu_kairos_loop_persistent_activated",{variant:m()})}function h(e=!1){if(!$X())return"";let o=!e&&m()?"newly blocked on a decision you won't make alone, you're ending the loop":"newly blocked on a decision you won't make alone, third straight tick with nothing to do, you're ending the loop";return`

Use ${vk} when the loop can't move further without the user, or when something landed that they'd want to act on now: ${o}, or a major update arrived (CI went red, a review changes the plan). Progress you made yourself isn't a trigger \u2014 the transcript covers that. One ping per state, not per tick.`}function b(){return`# Autonomous loop tick

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${pa} from this tick.${h()}`}var f=`

If a ${ma} is armed (check ${hT}), keep \`delaySeconds\` at 1200\u20131800s \u2014 the ${ma} is the wake signal and this is only the fallback heartbeat. If you were woken by a \`<task-notification>\`, handle the event before deciding whether to re-arm. To stop the loop, call ${pa} with \`stop: true\` and ${ny} the monitor (use ${hT} to find its task ID if no longer in context).`;function x(){return`# Autonomous loop tick (dynamic pacing)

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${pa} tool (not a recurring cron). To keep the loop alive, call ${pa} again at the end of this turn with \`prompt\` set to the literal sentinel \`${hne}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${f}${h()}`}function L(e){return e===tTe||e===hne}function P(e,t){if(!L(t))return null;w();let o=t===hne?x():b();if(e.autonomousPreambleDelivered||e.lastLoopFileDelivered!==null)return o;return e.autonomousPreambleDelivered=!0,`${v()}

---

${o}`}var k="__autonomous_preamble__",C="<<loop.md>>",d="<<loop.md-dynamic>>";function F(){return`# /loop tick \u2014 loop.md tasks

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${pa} from this tick.${h(!0)}`}function M(){return`# /loop tick \u2014 loop.md tasks (dynamic pacing)

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${pa} tool (not a recurring cron). To keep the loop alive, call ${pa} again at the end of this turn with \`prompt\` set to the literal sentinel \`${d}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${f}${h(!0)}`}function N(){return`# /loop tick \u2014 loop.md absent (dynamic pacing)

loop.md is not currently present. Run the autonomous check using the loop instructions established earlier in this conversation.

You scheduled this tick via the ${pa} tool (not a recurring cron). To keep the loop alive \u2014 and to pick up loop.md if it is recreated \u2014 call ${pa} again at the end of this turn with \`prompt\` set to the literal sentinel \`${d}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${f}${h()}`}var l=25000;function _(e){if(e.length<=l)return e;let t=e.lastIndexOf(`
`,l);return`${e.slice(0,t>0?t:l)}

> WARNING: loop.md was truncated to ${l} bytes. Keep the task list concise.`}function T(){return c(u(gn(),".claude","loop.md"))??c(u(be(),"loop.md"))}function c(e){let t;try{t=S(e,"utf-8")}catch(n){if(Ht(n)||E(n)==="EISDIR")return null;throw n}let o=t.trim();if(o.length===0)return null;return{path:e,content:_(o)}}async function D(e){if(!e)return T();let t=c(u(gn(),".claude","loop.md"));if(t)return t;let o=u(be(),"loop.md"),n=await e.read([Te.state("loop-file")]);if(!n.ok)return c(o);let i=n.value.items[0];if(!i.found)return null;let r=Buffer.from(i.value.buffer,i.value.byteOffset,i.value.byteLength).toString("utf-8").trim();if(r.length===0)return null;return{path:o,content:_(r)}}function p(e){return e===C||e===d}function q(e,t){if(!p(t))return null;return A(e,t,T())}async function W(e,t,o){if(!p(t))return null;return A(e,t,await D(o))}function A(e,t,o){let n=t===d;if(o){let r=n?M():F();if(e.lastLoopFileDelivered===o.content)return r;return e.lastLoopFileDelivered=o.content,`# /loop tick \u2014 tasks from ${o.path}

The user configured a loop-tasks file. Work through the tasks defined below; these are the instructions for this tick and every subsequent tick (the reminder on later fires refers back to this message).

---

${o.content}

---

${r}`}w();let i=n?N():b();if(e.lastLoopFileDelivered===k||e.autonomousPreambleDelivered)return i;return e.lastLoopFileDelivered=k,e.autonomousPreambleDelivered=!0,`${v()}

---

${i}`}function se(e){return L(e)||p(e)}function ae(e,t){return P(e,t)??q(e,t)??t}async function he(e,t,o){return P(e,t)??await W(e,t,o)??t}export{re as AUTONOMOUS_LOOP_PREAMBLE,d as LOOP_FILE_DYNAMIC_SENTINEL,C as LOOP_FILE_SENTINEL,v as getAutonomousLoopPreamble,L as isAutonomousLoopSentinel,se as isLoopDefaultSentinel,p as isLoopFileSentinel,m as isLoopPersistentPreambleEnabled,w as logAutonomousLoopActivation,T as readLoopFile,D as readLoopFileAsync,P as resolveAutonomousLoopFire,ae as resolveLoopDefaultFire,he as resolveLoopDefaultFireAsync,q as resolveLoopFileFire,W as resolveLoopFileFireAsync};
