// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{De}from"./chunk-sd0xvc0m.js";import"./chunk-drh3s4e9.js";import"./chunk-63vja5td.js";import{vr,fo}from"./chunk-vd0a9d2s.js";import"./chunk-a48152q4.js";import"./chunk-eak61y8v.js";import{E,$t}from"./chunk-tnh13g2g.js";import"./chunk-k2e8p61g.js";import"./chunk-9exgg8sx.js";import{nt,Be,C}from"./chunk-gcyvvtkw.js";import{we}from"./chunk-ce4b81xm.js";import"./chunk-dqm3tjsh.js";import{a}from"./chunk-70qqbqq4.js";import"./chunk-y208484s.js";import"./chunk-b5feae42.js";import"./chunk-xaschh52.js";import"./chunk-cy0s0eq1.js";import"./chunk-v2r1tbj3.js";import"./chunk-tdmgys2e.js";import"./chunk-7dchs7vj.js";import"./chunk-yj45yszw.js";import{i}from"./chunk-ne43gjnt.js";import"./chunk-hz0a4zf6.js";import"./chunk-a7bs4sbc.js";import"./chunk-7194gg2b.js";import"./chunk-as4x8nna.js";import"./chunk-qczqzyxh.js";import"./chunk-q2zdhqvq.js";import"./chunk-ebsg4v3f.js";import"./chunk-xrq7sey1.js";import"./chunk-d9jpb7es.js";import"./chunk-htsd57mk.js";import"./chunk-pzha2ryw.js";import"./chunk-f51x0gch.js";import"./chunk-je76vky8.js";import"./chunk-j1zwmk4n.js";import"./chunk-kp09cc0v.js";import"./chunk-y575z4xw.js";import"./chunk-pf8p4bsg.js";import"./chunk-630hazsp.js";import"./chunk-3qfs0gea.js";import"./chunk-843ya6e2.js";import"./chunk-35a3sr2r.js";import"./chunk-5g70wphz.js";import"./chunk-2cyvs4wb.js";import"./chunk-rh939hn5.js";import"./chunk-havdj21n.js";import"./chunk-2r0ph8pf.js";import"./chunk-yzpy5cf5.js";import"./chunk-48by85wp.js";import"./chunk-xxchs9s7.js";import"./chunk-fsnz81vy.js";import"./chunk-exvcagr3.js";import"./chunk-vc6d82rm.js";import"./chunk-5tqxeqqd.js";import"./chunk-45vnv946.js";import"./chunk-zp1a5mr6.js";import"./chunk-dr4n1eny.js";import"./chunk-m7sjke7g.js";import"./chunk-84g1ggm4.js";import"./chunk-07wdw7m0.js";import"./chunk-ayvdek13.js";import"./chunk-hbp0s36e.js";import"./chunk-82debp0t.js";import"./chunk-jgmrvhwh.js";import"./chunk-7q1xzeq8.js";import"./chunk-yxxcd79r.js";import"./chunk-8cqnzay2.js";import"./chunk-1x0mmdxb.js";import"./chunk-zttk1yx5.js";import"./chunk-5gqxahqm.js";import"./chunk-svyf12fc.js";import"./chunk-kbn00z3m.js";import"./chunk-g28j50c3.js";import"./chunk-cy4t0v8j.js";import"./chunk-3smfeyq8.js";import"./chunk-pz1x73ay.js";import{If}from"./chunk-ccbm7724.js";import"./chunk-rh7py0tc.js";import"./chunk-dryq126j.js";import"./chunk-9rdmsm2q.js";import"./chunk-j9jxxcf5.js";import"./chunk-91pk1a5a.js";import"./chunk-y54dhc9s.js";import"./chunk-yn9ystxc.js";import{Ske}from"./chunk-n4jtrpsp.js";import"./chunk-kgetn13g.js";import{IP}from"./chunk-7f7wg58j.js";import{va,E6e,_ke,XTn,dT,Ac}from"./chunk-rdyajs6j.js";import{G8e}from"./chunk-9es22wvv.js";import"./chunk-pr3mz4ha.js";import{$R}from"./chunk-9p91sz7m.js";import{yl}from"./chunk-y9x60x20.js";import{GN}from"./chunk-k4jwz6vd.js";import"./chunk-5074eba8.js";import"./chunk-fwcnvxqe.js";import"./chunk-wmrm2j5z.js";import"./chunk-jkhz8ejr.js";import"./chunk-d2m17704.js";import"./chunk-r7tff0ah.js";import"./chunk-4hk3eh7v.js";import"./chunk-x3tm8c2g.js";import"./chunk-eqqjcad1.js";import"./chunk-kpdnxgda.js";import"./chunk-20vgjjee.js";import"./chunk-d3pfyxhw.js";import"./chunk-rgvsr2fj.js";import"./chunk-s07g171s.js";import"./chunk-b9ck3csh.js";import"./chunk-vq057nnn.js";import{Me}from"./chunk-8drz5tx3.js";import{readFileSync as x}from"fs";import{readFile as M}from"fs/promises";import{join as b}from"path";var p=Me("./loopAutonomousPreamble-07qcyhv4.md.embedded.txt");var y=Me("./loopAutonomousPreamblePersistent-3zqtkrvg.md.embedded.txt");function c(){if(a.CLAUDE_CODE_LOOP_PERSISTENT)return!0;return C("tengu_kairos_loop_persistent",!1)}function v(){let e=c()?y:p,t=G8e({forCloudSession:Boolean(a.CLAUDE_CODE_REMOTE)});return t?`${e.trimEnd()}

${t}
`:e}function L(){i("tengu_kairos_loop_persistent_activated",{variant:c()})}function s(e=!1){if(!Ske())return"";let o=!e&&c()?"newly blocked on a decision you won't make alone, you're ending the loop":"newly blocked on a decision you won't make alone, third straight tick with nothing to do, you're ending the loop";return`

Use ${$R} when the loop can't move further without the user, or when something landed that they'd want to act on now: ${o}, or a major update arrived (CI went red, a review changes the plan). Progress you made yourself isn't a trigger \u2014 the transcript covers that. One ping per state, not per tick.`}function I(){return`# Autonomous loop tick

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${va} from this tick.${s()}`}function d(){let e=nt(),t=GN(Be(e),e),o=IP(),r=o?`send a brief status update for this tick via ${If}`:"write a brief status update for this tick",n=t?`Immediately before re-arming, ${r}.`:`After re-arming, ${r}.`;return`

If a ${yl} is armed (check ${dT}), keep \`delaySeconds\` at 1200\u20131800s \u2014 the ${yl} is the wake signal and this is only the fallback heartbeat. If you were woken by a \`<task-notification>\`, handle the event before deciding whether to re-arm. ${n} ${XTn({preArmStatus:t,briefMode:o})} To stop the loop, call ${va} with \`stop: true\` and ${Ac} the monitor (use ${dT} to find its task ID if no longer in context).`}function N(){return`# Autonomous loop tick (dynamic pacing)

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${va} tool (not a recurring cron). To keep the loop alive, call ${va} again this turn with \`prompt\` set to the literal sentinel \`${_ke}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${d()}${s()}`}function P(e){return e===E6e||e===_ke}function _(e,t){if(!P(t))return null;L();let o=t===_ke?N():I();if(e.autonomousPreambleDelivered||e.lastLoopFileDelivered!==null)return o;return e.autonomousPreambleDelivered=!0,`${v()}

---

${o}`}var w="__autonomous_preamble__",D="<<loop.md>>",l="<<loop.md-dynamic>>";function q(){return`# /loop tick \u2014 loop.md tasks

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${va} from this tick.${s(!0)}`}function j(){return`# /loop tick \u2014 loop.md tasks (dynamic pacing)

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${va} tool (not a recurring cron). To keep the loop alive, call ${va} again this turn with \`prompt\` set to the literal sentinel \`${l}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${d()}${s(!0)}`}function B(){return`# /loop tick \u2014 loop.md absent (dynamic pacing)

loop.md is not currently present. Run the autonomous check using the loop instructions established earlier in this conversation.

You scheduled this tick via the ${va} tool (not a recurring cron). To keep the loop alive \u2014 and to pick up loop.md if it is recreated \u2014 call ${va} again this turn with \`prompt\` set to the literal sentinel \`${l}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${d()}${s()}`}var h=25000;function U(e){if(e.length<=h)return e;let t=e.lastIndexOf(`
`,h);return`${e.slice(0,t>0?t:h)}

> WARNING: loop.md was truncated to ${h} bytes. Keep the task list concise.`}function W(){return k(A())??k(S())}function A(){return b(fo()??vr(),".claude","loop.md")}function S(){return b(we(),"loop.md")}function k(e){let t;try{t=x(e,"utf-8")}catch(o){return T(o)}return g(e,t)}async function u(e){let t;try{t=await M(e,"utf-8")}catch(o){return T(o)}return g(e,t)}function T(e){if($t(e)||E(e)==="EISDIR")return null;throw e}function g(e,t){let o=t.trim();if(o.length===0)return null;return{path:e,content:U(o)}}async function Y(e){let t=await u(A());if(t)return t;let o=S();if(!e)return u(o);let r=await e.read([De.state("loop-file")]);if(!r.ok)return u(o);let n=r.value.items[0];if(!n.found)return null;return g(o,Buffer.from(n.value.buffer,n.value.byteOffset,n.value.byteLength).toString("utf-8"))}function m(e){return e===D||e===l}function H(e,t){if(!m(t))return null;return O(e,t,W())}async function z(e,t,o){if(!m(t))return null;return O(e,t,await Y(o))}function O(e,t,o){let r=t===l;if(o){let f=r?j():q();if(e.lastLoopFileDelivered===o.content)return f;return e.lastLoopFileDelivered=o.content,`# /loop tick \u2014 tasks from ${o.path}

The user configured a loop-tasks file. Work through the tasks defined below; these are the instructions for this tick and every subsequent tick (the reminder on later fires refers back to this message).

---

${o.content}

---

${f}`}L();let n=r?B():I();if(e.lastLoopFileDelivered===w||e.autonomousPreambleDelivered)return n;return e.lastLoopFileDelivered=w,e.autonomousPreambleDelivered=!0,`${v()}

---

${n}`}function ye(e){return P(e)||m(e)}function ke(e,t){return _(e,t)??H(e,t)??t}async function be(e,t,o){return _(e,t)??await z(e,t,o)??t}export{l as LOOP_FILE_DYNAMIC_SENTINEL,D as LOOP_FILE_SENTINEL,v as getAutonomousLoopPreamble,ye as isLoopDefaultSentinel,m as isLoopFileSentinel,L as logAutonomousLoopActivation,Y as readLoopFileAsync,ke as resolveLoopDefaultFire,be as resolveLoopDefaultFireAsync};
