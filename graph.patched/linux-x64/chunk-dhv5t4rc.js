// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{ve}from"./chunk-fz00m7zs.js";import{an}from"./chunk-2vv5hpw3.js";import"./chunk-gqqx2ybk.js";import{x}from"./chunk-ns0ekkj0.js";import{ge}from"./chunk-xj8gnzar.js";import"./chunk-s0y4aasp.js";import"./chunk-k69qdkv1.js";import{a}from"./chunk-g0kfvhx3.js";import"./chunk-kvgzj9kk.js";import"./chunk-hjxpwbhy.js";import"./chunk-gt4btdxr.js";import{k,At}from"./chunk-7h2h1m4y.js";import"./chunk-akz0cj0f.js";import"./chunk-qkpfba5t.js";import"./chunk-m09j9ze8.js";import"./chunk-2h7wbm8s.js";import"./chunk-6ce4s97h.js";import"./chunk-s2t7yx8x.js";import{s}from"./chunk-cvykgfry.js";import"./chunk-v1ap59a1.js";import"./chunk-j0kxfsn8.js";import"./chunk-b16q8tvv.js";import"./chunk-wp51qqtd.js";import"./chunk-z8bgyj99.js";import"./chunk-2t5hwcdv.js";import"./chunk-7jw96n8z.js";import"./chunk-fa374z64.js";import"./chunk-cgwm6n4d.js";import"./chunk-6ypvgjr3.js";import"./chunk-ey3r955r.js";import"./chunk-4a808ek9.js";import"./chunk-apqzzgp2.js";import"./chunk-je342w1n.js";import"./chunk-gxpna0zj.js";import"./chunk-vryz951p.js";import"./chunk-a891q37t.js";import"./chunk-cdpc3se3.js";import"./chunk-n6st122x.js";import"./chunk-z3w4y6ds.js";import"./chunk-bcez0qfh.js";import"./chunk-8v512hc9.js";import"./chunk-3fgza2mw.js";import"./chunk-yyzqa5fj.js";import"./chunk-jrqq3240.js";import"./chunk-gbhg5hb4.js";import"./chunk-vaxm4qh6.js";import"./chunk-zx6a3ytk.js";import"./chunk-hn2qdxkx.js";import"./chunk-09523qb1.js";import"./chunk-hk0e76vg.js";import"./chunk-4aysr9ma.js";import"./chunk-keye04cq.js";import"./chunk-3py4444c.js";import"./chunk-dakyjptz.js";import"./chunk-3k7ywj35.js";import"./chunk-ryvgd9z0.js";import"./chunk-8ba2x98b.js";import"./chunk-qbwsw6nn.js";import"./chunk-c555rnz7.js";import"./chunk-mrmpqhhr.js";import"./chunk-v975cyxw.js";import"./chunk-2966xjk4.js";import"./chunk-p23he0jn.js";import"./chunk-2dfkwr2q.js";import"./chunk-qw0q1g4b.js";import"./chunk-6yeqjyb9.js";import"./chunk-sd094199.js";import"./chunk-tfd4rw1n.js";import"./chunk-q7r209hm.js";import"./chunk-mp7ft3kc.js";import"./chunk-9hz48emz.js";import"./chunk-swj5sfs1.js";import"./chunk-pgh575qg.js";import"./chunk-yvh97n7n.js";import"./chunk-qc6xt7s1.js";import"./chunk-pws3zj07.js";import"./chunk-5j82knza.js";import"./chunk-w0pbjm26.js";import"./chunk-hdxkjmp1.js";import"./chunk-5pf2r3ta.js";import"./chunk-aw9sr560.js";import"./chunk-0nb3y211.js";import"./chunk-pyd16tkx.js";import"./chunk-dfs7pzac.js";import"./chunk-xw94cfq3.js";import"./chunk-j8w0e3r8.js";import"./chunk-se5a0ehn.js";import{mK}from"./chunk-pmr752cs.js";import{hy,kS}from"./chunk-ayj468dq.js";import{Ks,Vbe,$Z}from"./chunk-btr7gbhe.js";import"./chunk-4qyxds93.js";import{_0}from"./chunk-xqn9gse7.js";import{ba}from"./chunk-0g8ca491.js";import"./chunk-mj52rk1p.js";import"./chunk-c8dx8wrx.js";import"./chunk-zpq01mh4.js";import"./chunk-5ty1498y.js";import"./chunk-zs5s22a5.js";import"./chunk-cj0zmg6k.js";import"./chunk-qfwvs04s.js";import"./chunk-vt29yvxx.js";import"./chunk-f58mzqmc.js";import"./chunk-9q51f9rr.js";import{ee}from"./chunk-by569dsf.js";import{readFileSync as S}from"fs";import{join as u}from"path";var g=ee("./loopAutonomousPreamble-07qcyhv4.md");var y=ee("./loopAutonomousPreamblePersistent-3zqtkrvg.md");var se=g;function m(){if(a.CLAUDE_CODE_LOOP_PERSISTENT)return!0;return x("tengu_kairos_loop_persistent",!1)}function w(){return m()?y:g}function b(){s("tengu_kairos_loop_persistent_activated",{variant:m()})}function h(e=!1){if(!mK())return"";let o=!e&&m()?"newly blocked on a decision you won't make alone, you're ending the loop":"newly blocked on a decision you won't make alone, third straight tick with nothing to do, you're ending the loop";return`

Use ${_0} when the loop can't move further without the user, or when something landed that they'd want to act on now: ${o}, or a major update arrived (CI went red, a review changes the plan). Progress you made yourself isn't a trigger \u2014 the transcript covers that. One ping per state, not per tick.`}function I(){return`# Autonomous loop tick

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${Ks} from this tick.${h()}`}var f=`

If a ${ba} is armed (check ${kS}), keep \`delaySeconds\` at 1200\u20131800s \u2014 the ${ba} is the wake signal and this is only the fallback heartbeat. If you were woken by a \`<task-notification>\`, handle the event before deciding whether to re-arm. To stop the loop, call ${Ks} with \`stop: true\` and ${hy} the monitor (use ${kS} to find its task ID if no longer in context).`;function E(){return`# Autonomous loop tick (dynamic pacing)

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${Ks} tool (not a recurring cron). To keep the loop alive, call ${Ks} again at the end of this turn with \`prompt\` set to the literal sentinel \`${$Z}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${f}${h()}`}function L(e){return e===Vbe||e===$Z}function P(e,t){if(!L(t))return null;b();let o=t===$Z?E():I();if(e.autonomousPreambleDelivered||e.lastLoopFileDelivered!==null)return o;return e.autonomousPreambleDelivered=!0,`${w()}

---

${o}`}var v="__autonomous_preamble__",C="<<loop.md>>",d="<<loop.md-dynamic>>";function F(){return`# /loop tick \u2014 loop.md tasks

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${Ks} from this tick.${h(!0)}`}function M(){return`# /loop tick \u2014 loop.md tasks (dynamic pacing)

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${Ks} tool (not a recurring cron). To keep the loop alive, call ${Ks} again at the end of this turn with \`prompt\` set to the literal sentinel \`${d}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${f}${h(!0)}`}function N(){return`# /loop tick \u2014 loop.md absent (dynamic pacing)

loop.md is not currently present. Run the autonomous check using the loop instructions established earlier in this conversation.

You scheduled this tick via the ${Ks} tool (not a recurring cron). To keep the loop alive \u2014 and to pick up loop.md if it is recreated \u2014 call ${Ks} again at the end of this turn with \`prompt\` set to the literal sentinel \`${d}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${f}${h()}`}var l=25000;function _(e){if(e.length<=l)return e;let t=e.lastIndexOf(`
`,l);return`${e.slice(0,t>0?t:l)}

> WARNING: loop.md was truncated to ${l} bytes. Keep the task list concise.`}function T(){return c(u(an(),".claude","loop.md"))??c(u(ge(),"loop.md"))}function c(e){let t;try{t=S(e,"utf-8")}catch(n){if(At(n)||k(n)==="EISDIR")return null;throw n}let o=t.trim();if(o.length===0)return null;return{path:e,content:_(o)}}async function D(e){if(!e)return T();let t=c(u(an(),".claude","loop.md"));if(t)return t;let o=u(ge(),"loop.md"),n=await e.read([ve.state("loop-file")]);if(!n.ok)return c(o);let i=n.value.items[0];if(!i.found)return null;let r=Buffer.from(i.value.buffer,i.value.byteOffset,i.value.byteLength).toString("utf-8").trim();if(r.length===0)return null;return{path:o,content:_(r)}}function p(e){return e===C||e===d}function q(e,t){if(!p(t))return null;return A(e,t,T())}async function W(e,t,o){if(!p(t))return null;return A(e,t,await D(o))}function A(e,t,o){let n=t===d;if(o){let r=n?M():F();if(e.lastLoopFileDelivered===o.content)return r;return e.lastLoopFileDelivered=o.content,`# /loop tick \u2014 tasks from ${o.path}

The user configured a loop-tasks file. Work through the tasks defined below; these are the instructions for this tick and every subsequent tick (the reminder on later fires refers back to this message).

---

${o.content}

---

${r}`}b();let i=n?N():I();if(e.lastLoopFileDelivered===v||e.autonomousPreambleDelivered)return i;return e.lastLoopFileDelivered=v,e.autonomousPreambleDelivered=!0,`${w()}

---

${i}`}function ae(e){return L(e)||p(e)}function he(e,t){return P(e,t)??q(e,t)??t}async function le(e,t,o){return P(e,t)??await W(e,t,o)??t}export{se as AUTONOMOUS_LOOP_PREAMBLE,d as LOOP_FILE_DYNAMIC_SENTINEL,C as LOOP_FILE_SENTINEL,w as getAutonomousLoopPreamble,L as isAutonomousLoopSentinel,ae as isLoopDefaultSentinel,p as isLoopFileSentinel,m as isLoopPersistentPreambleEnabled,b as logAutonomousLoopActivation,T as readLoopFile,D as readLoopFileAsync,P as resolveAutonomousLoopFire,he as resolveLoopDefaultFire,le as resolveLoopDefaultFireAsync,q as resolveLoopFileFire,W as resolveLoopFileFireAsync};
