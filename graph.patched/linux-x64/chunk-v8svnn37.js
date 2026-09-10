// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{ke}from"./chunk-qrernxw9.js";import{dn}from"./chunk-6n7yk222.js";import"./chunk-d8qjp6nk.js";import"./chunk-mtqrv1h8.js";import"./chunk-xg0fb0fx.js";import{I}from"./chunk-ce4ppmnp.js";import{Se}from"./chunk-1k8htemc.js";import"./chunk-vp9rx3bq.js";import"./chunk-xenybawd.js";import{a}from"./chunk-1bwwmttj.js";import"./chunk-kse90n8m.js";import"./chunk-0rpkhv24.js";import{A,Pt}from"./chunk-59zxrwfh.js";import"./chunk-cmg3b5hg.js";import"./chunk-c413mrzf.js";import"./chunk-p9k2m8jj.js";import"./chunk-4thwge0q.js";import{i}from"./chunk-nx6yj2w6.js";import"./chunk-t5df5mky.js";import"./chunk-03bbjp25.js";import"./chunk-g07wjpxf.js";import"./chunk-5zshk7te.js";import"./chunk-ndrx786m.js";import"./chunk-4g3h89r1.js";import"./chunk-hep7dzja.js";import"./chunk-f4019nt1.js";import"./chunk-dz6vh6s7.js";import"./chunk-v365e4sa.js";import"./chunk-np2nmzg7.js";import"./chunk-b71jaj6f.js";import"./chunk-6q4s8bgb.js";import"./chunk-6ebnzmdf.js";import"./chunk-8fer6cmv.js";import"./chunk-2j94m3ye.js";import"./chunk-v17gpk1z.js";import"./chunk-teade921.js";import"./chunk-sp4f0zv3.js";import"./chunk-vzc7jamd.js";import"./chunk-169nbefr.js";import"./chunk-jwp1p5wz.js";import"./chunk-y0j7napd.js";import"./chunk-t0crpn1e.js";import"./chunk-04zqxw9f.js";import"./chunk-7523jky1.js";import"./chunk-5hega5z8.js";import"./chunk-vc10e2e1.js";import"./chunk-x2rz8f0q.js";import"./chunk-664fvn0k.js";import"./chunk-kk3j6egn.js";import"./chunk-gkn2mx32.js";import"./chunk-dqr9knfd.js";import"./chunk-8yrsa1e1.js";import"./chunk-yk423ezb.js";import"./chunk-7wydher3.js";import"./chunk-kzk5z6sx.js";import"./chunk-zrk5zde9.js";import"./chunk-nf00mahq.js";import"./chunk-mbvr1efr.js";import"./chunk-0rxpr8cx.js";import"./chunk-7eyveqkg.js";import"./chunk-gy5b0v9q.js";import"./chunk-eyj5z1mk.js";import"./chunk-qz4fvetx.js";import"./chunk-nf6pxfyh.js";import"./chunk-19cvhbkw.js";import"./chunk-z63fttm6.js";import"./chunk-1j4axej0.js";import"./chunk-7xfwsz67.js";import"./chunk-h7xnkc2g.js";import"./chunk-kra019rv.js";import{VC,LQ}from"./chunk-54m892h4.js";import"./chunk-tkm7mfj5.js";import{ra,GCe,Qse,wb,Pg}from"./chunk-n4t1xa4r.js";import{ma}from"./chunk-nmg1y5ce.js";import"./chunk-2xwn1rzd.js";import"./chunk-86c2fkfe.js";import"./chunk-zmm4rb64.js";import"./chunk-c9rvzzsk.js";import"./chunk-a436d8v3.js";import"./chunk-2320rhap.js";import"./chunk-mvtzn48h.js";import"./chunk-mf44bs0z.js";import"./chunk-gdmteaec.js";import"./chunk-5md0kwdx.js";import{Ce}from"./chunk-3anr60sp.js";import{readFileSync as E}from"fs";import{join as u}from"path";var p=Ce("./loopAutonomousPreamble-07qcyhv4.md.embedded.txt");var y=Ce("./loopAutonomousPreamblePersistent-3zqtkrvg.md.embedded.txt");function g(){if(a.CLAUDE_CODE_LOOP_PERSISTENT)return!0;return I("tengu_kairos_loop_persistent",!1)}function v(){return g()?y:p}function w(){i("tengu_kairos_loop_persistent_activated",{variant:g()})}function h(e=!1){if(!LQ())return"";let o=!e&&g()?"newly blocked on a decision you won't make alone, you're ending the loop":"newly blocked on a decision you won't make alone, third straight tick with nothing to do, you're ending the loop";return`

Use ${VC} when the loop can't move further without the user, or when something landed that they'd want to act on now: ${o}, or a major update arrived (CI went red, a review changes the plan). Progress you made yourself isn't a trigger \u2014 the transcript covers that. One ping per state, not per tick.`}function b(){return`# Autonomous loop tick

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${ra} from this tick.${h()}`}var m=`

If a ${ma} is armed (check ${wb}), keep \`delaySeconds\` at 1200\u20131800s \u2014 the ${ma} is the wake signal and this is only the fallback heartbeat. If you were woken by a \`<task-notification>\`, handle the event before deciding whether to re-arm. To stop the loop, call ${ra} with \`stop: true\` and ${Pg} the monitor (use ${wb} to find its task ID if no longer in context).`;function x(){return`# Autonomous loop tick (dynamic pacing)

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${ra} tool (not a recurring cron). To keep the loop alive, call ${ra} again at the end of this turn with \`prompt\` set to the literal sentinel \`${Qse}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${m}${h()}`}function L(e){return e===GCe||e===Qse}function P(e,t){if(!L(t))return null;w();let o=t===Qse?x():b();if(e.autonomousPreambleDelivered||e.lastLoopFileDelivered!==null)return o;return e.autonomousPreambleDelivered=!0,`${v()}

---

${o}`}var k="__autonomous_preamble__",C="<<loop.md>>",d="<<loop.md-dynamic>>";function F(){return`# /loop tick \u2014 loop.md tasks

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${ra} from this tick.${h(!0)}`}function M(){return`# /loop tick \u2014 loop.md tasks (dynamic pacing)

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${ra} tool (not a recurring cron). To keep the loop alive, call ${ra} again at the end of this turn with \`prompt\` set to the literal sentinel \`${d}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${m}${h(!0)}`}function N(){return`# /loop tick \u2014 loop.md absent (dynamic pacing)

loop.md is not currently present. Run the autonomous check using the loop instructions established earlier in this conversation.

You scheduled this tick via the ${ra} tool (not a recurring cron). To keep the loop alive \u2014 and to pick up loop.md if it is recreated \u2014 call ${ra} again at the end of this turn with \`prompt\` set to the literal sentinel \`${d}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${m}${h()}`}var l=25000;function _(e){if(e.length<=l)return e;let t=e.lastIndexOf(`
`,l);return`${e.slice(0,t>0?t:l)}

> WARNING: loop.md was truncated to ${l} bytes. Keep the task list concise.`}function T(){return c(u(dn(),".claude","loop.md"))??c(u(Se(),"loop.md"))}function c(e){let t;try{t=E(e,"utf-8")}catch(n){if(Pt(n)||A(n)==="EISDIR")return null;throw n}let o=t.trim();if(o.length===0)return null;return{path:e,content:_(o)}}async function D(e){if(!e)return T();let t=c(u(dn(),".claude","loop.md"));if(t)return t;let o=u(Se(),"loop.md"),n=await e.read([ke.state("loop-file")]);if(!n.ok)return c(o);let r=n.value.items[0];if(!r.found)return null;let s=Buffer.from(r.value.buffer,r.value.byteOffset,r.value.byteLength).toString("utf-8").trim();if(s.length===0)return null;return{path:o,content:_(s)}}function f(e){return e===C||e===d}function q(e,t){if(!f(t))return null;return O(e,t,T())}async function W(e,t,o){if(!f(t))return null;return O(e,t,await D(o))}function O(e,t,o){let n=t===d;if(o){let s=n?M():F();if(e.lastLoopFileDelivered===o.content)return s;return e.lastLoopFileDelivered=o.content,`# /loop tick \u2014 tasks from ${o.path}

The user configured a loop-tasks file. Work through the tasks defined below; these are the instructions for this tick and every subsequent tick (the reminder on later fires refers back to this message).

---

${o.content}

---

${s}`}w();let r=n?N():b();if(e.lastLoopFileDelivered===k||e.autonomousPreambleDelivered)return r;return e.lastLoopFileDelivered=k,e.autonomousPreambleDelivered=!0,`${v()}

---

${r}`}function re(e){return L(e)||f(e)}function se(e,t){return P(e,t)??q(e,t)??t}async function ae(e,t,o){return P(e,t)??await W(e,t,o)??t}export{d as LOOP_FILE_DYNAMIC_SENTINEL,C as LOOP_FILE_SENTINEL,v as getAutonomousLoopPreamble,re as isLoopDefaultSentinel,f as isLoopFileSentinel,w as logAutonomousLoopActivation,D as readLoopFileAsync,se as resolveLoopDefaultFire,ae as resolveLoopDefaultFireAsync};
