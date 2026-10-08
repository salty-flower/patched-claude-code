// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Le}from"./chunk-hrwjwwzw.js";import"./chunk-28fj72x7.js";import"./chunk-ndcqd6bh.js";import{Er,fo}from"./chunk-g79wjybr.js";import"./chunk-4p5wb748.js";import"./chunk-bkr1h20c.js";import{v,Ft}from"./chunk-5g6j8x8p.js";import"./chunk-670y7hd9.js";import"./chunk-gwj7v27h.js";import{tt,Be,T}from"./chunk-cxjvwxsa.js";import{we}from"./chunk-4z5wz91m.js";import"./chunk-70ktd4rm.js";import{a}from"./chunk-rptge3r8.js";import"./chunk-941sa7c2.js";import"./chunk-p46wpkfz.js";import"./chunk-gx95ar6n.js";import"./chunk-j6z0j5vh.js";import"./chunk-2j48j0j1.js";import"./chunk-3s94kw4m.js";import"./chunk-7dchs7vj.js";import"./chunk-amnc8bbv.js";import{i}from"./chunk-nayw0pf7.js";import"./chunk-68vq239n.js";import"./chunk-0hrvnhgh.js";import"./chunk-jhxnp941.js";import"./chunk-m8haxweq.js";import"./chunk-9py7rh29.js";import"./chunk-wchsap03.js";import"./chunk-ag8h4tcz.js";import"./chunk-trynpg3y.js";import"./chunk-hv4n1akt.js";import"./chunk-sh51y7yj.js";import"./chunk-mb5hcwe1.js";import"./chunk-syb80f1m.js";import"./chunk-ettyqnzn.js";import"./chunk-5v4f7g5r.js";import"./chunk-9b9pp2j0.js";import"./chunk-ras5x31x.js";import"./chunk-cjpd2k0t.js";import"./chunk-wdbbywcf.js";import"./chunk-dmwg443r.js";import"./chunk-4zqg0s2n.js";import"./chunk-pesdmje3.js";import"./chunk-5zqw5ss6.js";import"./chunk-rzq8vrew.js";import"./chunk-nv2bbff4.js";import"./chunk-tfrn9jh8.js";import"./chunk-8ky01sys.js";import"./chunk-xt99khzc.js";import"./chunk-gsa86a2x.js";import"./chunk-qp65fq4n.js";import"./chunk-942093b7.js";import"./chunk-cejxg49w.js";import"./chunk-9peh9gjb.js";import"./chunk-z1mnwnvd.js";import"./chunk-e84gprty.js";import"./chunk-hesrqedr.js";import"./chunk-dz7bwjyz.js";import"./chunk-19kr5wet.js";import"./chunk-agxkvasb.js";import"./chunk-wpwa8wh9.js";import"./chunk-8x6enyhq.js";import"./chunk-dxwrxbnd.js";import"./chunk-wf918jgf.js";import"./chunk-m7wy507r.js";import"./chunk-30xn0w2c.js";import"./chunk-9f88agae.js";import"./chunk-qrw8p75p.js";import"./chunk-rqsafy80.js";import"./chunk-025kqzfg.js";import"./chunk-7qk6zpqr.js";import"./chunk-9p9w9mdw.js";import"./chunk-5pdrsybf.js";import"./chunk-bxs4s6wr.js";import"./chunk-946598ze.js";import"./chunk-v66jm760.js";import"./chunk-chs8nhab.js";import{If}from"./chunk-fs1m5djd.js";import"./chunk-571ddenq.js";import"./chunk-ds5pk6ma.js";import"./chunk-hfpf4cs3.js";import"./chunk-whgkjmx2.js";import"./chunk-e3ya4n4j.js";import"./chunk-89sgksq8.js";import"./chunk-tcg2b56s.js";import{pke}from"./chunk-aqncmpcc.js";import"./chunk-ck3hfy4b.js";import{RP}from"./chunk-bsyaz1ny.js";import{va,m2e,uke,OCn,aC,Ac}from"./chunk-3j4k2j1m.js";import{U8e}from"./chunk-ewn4j3nb.js";import"./chunk-8bj8ysfy.js";import{DR}from"./chunk-dd6nz0pr.js";import{yl}from"./chunk-y9x60x20.js";import{$N}from"./chunk-3vy79x6h.js";import"./chunk-zghdp2d6.js";import"./chunk-30bw8frt.js";import"./chunk-me0c3h4h.js";import"./chunk-c91vhg3c.js";import"./chunk-gvd58vpb.js";import"./chunk-vygt57n9.js";import"./chunk-fxrrfs3q.js";import"./chunk-zk0yxkwh.js";import"./chunk-k4t6m1v4.js";import"./chunk-4rvkrdmh.js";import"./chunk-65kgtwr0.js";import"./chunk-ebvbbvjb.js";import"./chunk-vyx0nxv6.js";import"./chunk-rwkxt94c.js";import"./chunk-bhxa600q.js";import"./chunk-ehn9f19s.js";import{He}from"./chunk-0y12vz6b.js";import{readFileSync as x}from"fs";import{readFile as M}from"fs/promises";import{join as b}from"path";var p=He("./loopAutonomousPreamble-07qcyhv4.md.embedded.txt");var y=He("./loopAutonomousPreamblePersistent-3zqtkrvg.md.embedded.txt");function c(){if(a.CLAUDE_CODE_LOOP_PERSISTENT)return!0;return T("tengu_kairos_loop_persistent",!1)}function L(){let e=c()?y:p,t=U8e({forCloudSession:Boolean(a.CLAUDE_CODE_REMOTE)});return t?`${e.trimEnd()}

${t}
`:e}function I(){i("tengu_kairos_loop_persistent_activated",{variant:c()})}function s(e=!1){if(!pke())return"";let o=!e&&c()?"newly blocked on a decision you won't make alone, you're ending the loop":"newly blocked on a decision you won't make alone, third straight tick with nothing to do, you're ending the loop";return`

Use ${DR} when the loop can't move further without the user, or when something landed that they'd want to act on now: ${o}, or a major update arrived (CI went red, a review changes the plan). Progress you made yourself isn't a trigger \u2014 the transcript covers that. One ping per state, not per tick.`}function P(){return`# Autonomous loop tick

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${va} from this tick.${s()}`}function d(){let e=tt(),t=$N(Be(e),e),o=RP(),r=o?`send a brief status update for this tick via ${If}`:"write a brief status update for this tick",n=t?`Immediately before re-arming, ${r}.`:`After re-arming, ${r}.`;return`

If a ${yl} is armed (check ${aC}), keep \`delaySeconds\` at 1200\u20131800s \u2014 the ${yl} is the wake signal and this is only the fallback heartbeat. If you were woken by a \`<task-notification>\`, handle the event before deciding whether to re-arm. ${n} ${OCn({preArmStatus:t,briefMode:o})} To stop the loop, call ${va} with \`stop: true\` and ${Ac} the monitor (use ${aC} to find its task ID if no longer in context).`}function N(){return`# Autonomous loop tick (dynamic pacing)

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${va} tool (not a recurring cron). To keep the loop alive, call ${va} again this turn with \`prompt\` set to the literal sentinel \`${uke}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${d()}${s()}`}function _(e){return e===m2e||e===uke}function A(e,t){if(!_(t))return null;I();let o=t===uke?N():P();if(e.autonomousPreambleDelivered||e.lastLoopFileDelivered!==null)return o;return e.autonomousPreambleDelivered=!0,`${L()}

---

${o}`}var w="__autonomous_preamble__",D="<<loop.md>>",l="<<loop.md-dynamic>>";function q(){return`# /loop tick \u2014 loop.md tasks

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${va} from this tick.${s(!0)}`}function j(){return`# /loop tick \u2014 loop.md tasks (dynamic pacing)

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${va} tool (not a recurring cron). To keep the loop alive, call ${va} again this turn with \`prompt\` set to the literal sentinel \`${l}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${d()}${s(!0)}`}function B(){return`# /loop tick \u2014 loop.md absent (dynamic pacing)

loop.md is not currently present. Run the autonomous check using the loop instructions established earlier in this conversation.

You scheduled this tick via the ${va} tool (not a recurring cron). To keep the loop alive \u2014 and to pick up loop.md if it is recreated \u2014 call ${va} again this turn with \`prompt\` set to the literal sentinel \`${l}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${d()}${s()}`}var h=25000;function U(e){if(e.length<=h)return e;let t=e.lastIndexOf(`
`,h);return`${e.slice(0,t>0?t:h)}

> WARNING: loop.md was truncated to ${h} bytes. Keep the task list concise.`}function W(){return k(S())??k(O())}function S(){return b(fo()??Er(),".claude","loop.md")}function O(){return b(we(),"loop.md")}function k(e){let t;try{t=x(e,"utf-8")}catch(o){return R(o)}return g(e,t)}async function u(e){let t;try{t=await M(e,"utf-8")}catch(o){return R(o)}return g(e,t)}function R(e){if(Ft(e)||v(e)==="EISDIR")return null;throw e}function g(e,t){let o=t.trim();if(o.length===0)return null;return{path:e,content:U(o)}}async function Y(e){let t=await u(S());if(t)return t;let o=O();if(!e)return u(o);let r=await e.read([Le.state("loop-file")]);if(!r.ok)return u(o);let n=r.value.items[0];if(!n.found)return null;return g(o,Buffer.from(n.value.buffer,n.value.byteOffset,n.value.byteLength).toString("utf-8"))}function m(e){return e===D||e===l}function H(e,t){if(!m(t))return null;return E(e,t,W())}async function z(e,t,o){if(!m(t))return null;return E(e,t,await Y(o))}function E(e,t,o){let r=t===l;if(o){let f=r?j():q();if(e.lastLoopFileDelivered===o.content)return f;return e.lastLoopFileDelivered=o.content,`# /loop tick \u2014 tasks from ${o.path}

The user configured a loop-tasks file. Work through the tasks defined below; these are the instructions for this tick and every subsequent tick (the reminder on later fires refers back to this message).

---

${o.content}

---

${f}`}I();let n=r?B():P();if(e.lastLoopFileDelivered===w||e.autonomousPreambleDelivered)return n;return e.lastLoopFileDelivered=w,e.autonomousPreambleDelivered=!0,`${L()}

---

${n}`}function ye(e){return _(e)||m(e)}function ke(e,t){return A(e,t)??H(e,t)??t}async function be(e,t,o){return A(e,t)??await z(e,t,o)??t}export{l as LOOP_FILE_DYNAMIC_SENTINEL,D as LOOP_FILE_SENTINEL,L as getAutonomousLoopPreamble,ye as isLoopDefaultSentinel,m as isLoopFileSentinel,I as logAutonomousLoopActivation,Y as readLoopFileAsync,ke as resolveLoopDefaultFire,be as resolveLoopDefaultFireAsync};
