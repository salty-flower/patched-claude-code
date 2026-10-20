// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{je}from"./chunk-z3qcbx87.js";import"./chunk-grpzqw3p.js";import"./chunk-8nra9hkj.js";import{Zr,so}from"./chunk-dxktn51d.js";import"./chunk-6arex0x2.js";import"./chunk-m3epja3j.js";import{E,Wt}from"./chunk-ekgz6skk.js";import"./chunk-wk0rbc8w.js";import"./chunk-h9cj3xp8.js";import"./chunk-2fbnw5gg.js";import{et,qe,k}from"./chunk-7p6jp6kj.js";import{De}from"./chunk-jbgr14ef.js";import"./chunk-pbkqy204.js";import{a}from"./chunk-cd1a8ced.js";import"./chunk-59xd6a0a.js";import"./chunk-n5v91jc3.js";import"./chunk-nvrstjfg.js";import"./chunk-nt1g7asm.js";import"./chunk-jkcb7qdd.js";import"./chunk-tbekftmt.js";import"./chunk-4ccvyrtz.js";import"./chunk-32vra4sg.js";import{i}from"./chunk-sr4gfmny.js";import"./chunk-yzndvntb.js";import"./chunk-tcgnany9.js";import"./chunk-6vj87cqe.js";import"./chunk-qaefbavh.js";import"./chunk-mz58eg27.js";import"./chunk-dcsn0jct.js";import"./chunk-f7tmzdwm.js";import"./chunk-17mm48r5.js";import"./chunk-0vs9wg49.js";import"./chunk-3k2k4wyq.js";import"./chunk-dwxnayss.js";import"./chunk-tj5qrgvp.js";import"./chunk-6ta41wqs.js";import"./chunk-bfmjsynp.js";import"./chunk-dzngbkpd.js";import"./chunk-bjv5j0w5.js";import"./chunk-17fr76vj.js";import"./chunk-pe53y0ma.js";import"./chunk-949csv87.js";import"./chunk-zjcj7ams.js";import"./chunk-7gz0pfve.js";import"./chunk-65jn763j.js";import"./chunk-bdj2znsb.js";import"./chunk-h3c350fm.js";import"./chunk-b9hfks9p.js";import"./chunk-ww4tybgt.js";import"./chunk-4v4w26w4.js";import"./chunk-r7aw7m5s.js";import"./chunk-yb4qaat4.js";import"./chunk-jznfkp3e.js";import"./chunk-0cd9x9a9.js";import"./chunk-7fdn9j0a.js";import"./chunk-m7gr14b0.js";import"./chunk-7kvdwhvm.js";import"./chunk-merbp8kx.js";import"./chunk-sx3g9k86.js";import"./chunk-pr2cfg7g.js";import"./chunk-wmyn5tzg.js";import"./chunk-psz375zg.js";import"./chunk-4qs43hr1.js";import"./chunk-t46680ch.js";import"./chunk-65s1xpd0.js";import"./chunk-knvdctz0.js";import"./chunk-8hpk64pd.js";import"./chunk-2wvy4drw.js";import"./chunk-vegrw1hg.js";import"./chunk-mkvkyt21.js";import"./chunk-b7dsynzj.js";import"./chunk-38vgtxey.js";import"./chunk-f5rzvmnh.js";import"./chunk-9449nkm2.js";import"./chunk-jf4xjz28.js";import"./chunk-1wbzg77m.js";import"./chunk-3tq6qd54.js";import"./chunk-rkrydfvk.js";import"./chunk-379wwzey.js";import"./chunk-q5je0w38.js";import"./chunk-trngxf9d.js";import"./chunk-mr8a4qvf.js";import"./chunk-bvydn19x.js";import{wm}from"./chunk-pja9erbz.js";import"./chunk-293nkhh0.js";import"./chunk-sjx6846d.js";import"./chunk-wyzdzgh4.js";import"./chunk-3wd6e2hx.js";import"./chunk-wqjt4nrc.js";import"./chunk-d7egt2xa.js";import"./chunk-6g12yqvm.js";import"./chunk-k6w93v2g.js";import"./chunk-rhxx790c.js";import{QIe}from"./chunk-sxff57pj.js";import"./chunk-zx1apvm8.js";import"./chunk-vpsqf9jc.js";import{kM}from"./chunk-s8xzyscj.js";import{Va,_9e,XIe,Uzn,ZA,jd}from"./chunk-ym7nfs98.js";import{lst}from"./chunk-vsmgybty.js";import{AI}from"./chunk-nxwrba6a.js";import{ri}from"./chunk-7qnqqn8q.js";import{vB}from"./chunk-wpxng3kd.js";import"./chunk-sx6k1rkh.js";import"./chunk-peqvyzr8.js";import"./chunk-rznmdxwz.js";import"./chunk-segx3fdf.js";import"./chunk-jm01gp88.js";import"./chunk-1vcf5z2k.js";import"./chunk-sf1rwv04.js";import"./chunk-08y6ag9s.js";import"./chunk-z9hm9fyp.js";import"./chunk-g378fzvg.js";import"./chunk-kcmb4jzj.js";import"./chunk-adkjcqkd.js";import"./chunk-j53prbhv.js";import"./chunk-rd4mxy2p.js";import"./chunk-3pcxq77r.js";import"./chunk-7vca30xa.js";import{Be}from"./chunk-ye9f1kvm.js";import{readFileSync as x}from"fs";import{readFile as M}from"fs/promises";import{join as v}from"path";var p=Be("./loopAutonomousPreamble-07qcyhv4.md.embedded.txt");var y=Be("./loopAutonomousPreamblePersistent-3zqtkrvg.md.embedded.txt");function c(){if(a.CLAUDE_CODE_LOOP_PERSISTENT)return!0;return k("tengu_kairos_loop_persistent",!1)}function L(){let e=c()?y:p,t=lst({forCloudSession:Boolean(a.CLAUDE_CODE_REMOTE)});return t?`${e.trimEnd()}

${t}
`:e}function I(){i("tengu_kairos_loop_persistent_activated",{variant:c()})}function s(e=!1){if(!QIe())return"";let o=!e&&c()?"newly blocked on a decision you won't make alone, you're ending the loop":"newly blocked on a decision you won't make alone, third straight tick with nothing to do, you're ending the loop";return`

Use ${AI} when the loop can't move further without the user, or when something landed that they'd want to act on now: ${o}, or a major update arrived (CI went red, a review changes the plan). Progress you made yourself isn't a trigger \u2014 the transcript covers that. One ping per state, not per tick.`}function P(){return`# Autonomous loop tick

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${Va} from this tick.${s()}`}function d(){let e=et(),t=vB(qe(e),e),o=kM(),r=o?`send a brief status update for this tick via ${wm}`:"write a brief status update for this tick",n=t?`Immediately before re-arming, ${r}.`:`After re-arming, ${r}.`;return`

If a ${ri} is armed (check ${ZA}), keep \`delaySeconds\` at 1200\u20131800s \u2014 the ${ri} is the wake signal and this is only the fallback heartbeat. If you were woken by a \`<task-notification>\`, handle the event before deciding whether to re-arm. ${n} ${Uzn({preArmStatus:t,briefMode:o})} To stop the loop, call ${Va} with \`stop: true\` and ${jd} the monitor (use ${ZA} to find its task ID if no longer in context).`}function N(){return`# Autonomous loop tick (dynamic pacing)

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${Va} tool (not a recurring cron). To keep the loop alive, call ${Va} again this turn with \`prompt\` set to the literal sentinel \`${XIe}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${d()}${s()}`}function _(e){return e===_9e||e===XIe}function A(e,t){if(!_(t))return null;I();let o=t===XIe?N():P();if(e.autonomousPreambleDelivered||e.lastLoopFileDelivered!==null)return o;return e.autonomousPreambleDelivered=!0,`${L()}

---

${o}`}var w="__autonomous_preamble__",D="<<loop.md>>",l="<<loop.md-dynamic>>";function q(){return`# /loop tick \u2014 loop.md tasks

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${Va} from this tick.${s(!0)}`}function j(){return`# /loop tick \u2014 loop.md tasks (dynamic pacing)

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${Va} tool (not a recurring cron). To keep the loop alive, call ${Va} again this turn with \`prompt\` set to the literal sentinel \`${l}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${d()}${s(!0)}`}function B(){return`# /loop tick \u2014 loop.md absent (dynamic pacing)

loop.md is not currently present. Run the autonomous check using the loop instructions established earlier in this conversation.

You scheduled this tick via the ${Va} tool (not a recurring cron). To keep the loop alive \u2014 and to pick up loop.md if it is recreated \u2014 call ${Va} again this turn with \`prompt\` set to the literal sentinel \`${l}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${d()}${s()}`}var h=25000;function U(e){if(e.length<=h)return e;let t=e.lastIndexOf(`
`,h);return`${e.slice(0,t>0?t:h)}

> WARNING: loop.md was truncated to ${h} bytes. Keep the task list concise.`}function W(){return b(S())??b(T())}function S(){return v(so()??Zr(),".claude","loop.md")}function T(){return v(De(),"loop.md")}function b(e){let t;try{t=x(e,"utf-8")}catch(o){return O(o)}return g(e,t)}async function u(e){let t;try{t=await M(e,"utf-8")}catch(o){return O(o)}return g(e,t)}function O(e){if(Wt(e)||E(e)==="EISDIR")return null;throw e}function g(e,t){let o=t.trim();if(o.length===0)return null;return{path:e,content:U(o)}}async function Y(e){let t=await u(S());if(t)return t;let o=T();if(!e)return u(o);let r=await e.read([je.state("loop-file")]);if(!r.ok)return u(o);let n=r.value.items[0];if(!n.found)return null;return g(o,Buffer.from(n.value.buffer,n.value.byteOffset,n.value.byteLength).toString("utf-8"))}function m(e){return e===D||e===l}function H(e,t){if(!m(t))return null;return R(e,t,W())}async function z(e,t,o){if(!m(t))return null;return R(e,t,await Y(o))}function R(e,t,o){let r=t===l;if(o){let f=r?j():q();if(e.lastLoopFileDelivered===o.content)return f;return e.lastLoopFileDelivered=o.content,`# /loop tick \u2014 tasks from ${o.path}

The user configured a loop-tasks file. Work through the tasks defined below; these are the instructions for this tick and every subsequent tick (the reminder on later fires refers back to this message).

---

${o.content}

---

${f}`}I();let n=r?B():P();if(e.lastLoopFileDelivered===w||e.autonomousPreambleDelivered)return n;return e.lastLoopFileDelivered=w,e.autonomousPreambleDelivered=!0,`${L()}

---

${n}`}function ye(e){return _(e)||m(e)}function we(e,t){return A(e,t)??H(e,t)??t}async function ke(e,t,o){return A(e,t)??await z(e,t,o)??t}export{l as LOOP_FILE_DYNAMIC_SENTINEL,D as LOOP_FILE_SENTINEL,L as getAutonomousLoopPreamble,ye as isLoopDefaultSentinel,m as isLoopFileSentinel,I as logAutonomousLoopActivation,Y as readLoopFileAsync,we as resolveLoopDefaultFire,ke as resolveLoopDefaultFireAsync};
