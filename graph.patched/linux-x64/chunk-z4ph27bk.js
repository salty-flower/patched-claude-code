// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{we}from"./chunk-wsjwtx5h.js";import{gn}from"./chunk-30zk17wm.js";import"./chunk-7s3c5qqq.js";import"./chunk-rv2kd9jf.js";import{x}from"./chunk-1e5y3pjf.js";import{He}from"./chunk-sgsf5yd5.js";import"./chunk-asme1eq2.js";import"./chunk-w8ppmegc.js";import{a}from"./chunk-m9gbfvns.js";import"./chunk-jpen6jwm.js";import"./chunk-d7ejrssq.js";import"./chunk-r1b219q3.js";import{E,It}from"./chunk-efckqwp7.js";import"./chunk-d0cr5d2v.js";import"./chunk-bvdq8tnt.js";import"./chunk-764j5mtt.js";import"./chunk-ma4xtxwv.js";import"./chunk-gbq6xyrq.js";import{s}from"./chunk-yqfv1yd3.js";import"./chunk-ykrbqs98.js";import"./chunk-q2grjtpb.js";import"./chunk-3qzpxayw.js";import"./chunk-a090dzyj.js";import"./chunk-a2g5xbg4.js";import"./chunk-9cvbc65t.js";import"./chunk-1ttwv9fk.js";import"./chunk-zv6dxs76.js";import"./chunk-0sdpjn9a.js";import"./chunk-j35pah18.js";import"./chunk-vv42w3zb.js";import"./chunk-qd43z1g9.js";import"./chunk-j55vqm69.js";import"./chunk-e7r3n0fy.js";import"./chunk-yxr9b4ek.js";import"./chunk-cn7kmt56.js";import"./chunk-a8be273g.js";import"./chunk-kc505vjh.js";import"./chunk-jw46j330.js";import"./chunk-0xn3mw8z.js";import"./chunk-30zpf1a7.js";import"./chunk-dkknd74f.js";import"./chunk-1nj7y1sr.js";import"./chunk-s5z7wmv7.js";import"./chunk-hgebmnek.js";import"./chunk-000exgr8.js";import"./chunk-zkwbrkrn.js";import"./chunk-1vhz7b90.js";import"./chunk-jh8hhb0y.js";import"./chunk-jpepp1st.js";import"./chunk-e21g00dm.js";import"./chunk-p0e7nc2g.js";import"./chunk-m3zmmvh7.js";import"./chunk-azztsfgd.js";import"./chunk-1461jpph.js";import"./chunk-7r196x4z.js";import"./chunk-xmefb9d5.js";import"./chunk-4n7ktjmt.js";import"./chunk-02dpwhns.js";import"./chunk-dzd4rkt0.js";import"./chunk-s7r9vssa.js";import"./chunk-hvkwrtra.js";import"./chunk-4v7s9wvr.js";import"./chunk-s4gv6c12.js";import"./chunk-bt08ja64.js";import"./chunk-qv5nyd4p.js";import"./chunk-xzv9n2q7.js";import"./chunk-rv365wnb.js";import"./chunk-t1dbt8zk.js";import"./chunk-9qzqdgp0.js";import"./chunk-d85w7nxf.js";import"./chunk-nsht0110.js";import"./chunk-dmrj2df2.js";import"./chunk-pm1yx9gh.js";import"./chunk-7vzd1b8s.js";import"./chunk-ezy65b9n.js";import"./chunk-0me3rg21.js";import"./chunk-nceebb9v.js";import"./chunk-41nyh22r.js";import"./chunk-4kxavepq.js";import"./chunk-kqhtgdqq.js";import"./chunk-bqf28esr.js";import"./chunk-ts4ymrjf.js";import"./chunk-njtgsd8n.js";import"./chunk-7vs7qneb.js";import"./chunk-16d9xh8k.js";import"./chunk-mkvzkqgh.js";import{NX}from"./chunk-3vkj90eg.js";import{t_,yw}from"./chunk-g4qy04pd.js";import{fa,awe,gne}from"./chunk-hfcaj05m.js";import"./chunk-xngm4q1m.js";import{TC}from"./chunk-3hp42qjv.js";import{ma}from"./chunk-q1e724p4.js";import"./chunk-esh1xgk6.js";import"./chunk-ds8dremv.js";import"./chunk-2txjr9b6.js";import"./chunk-peh5tvnh.js";import"./chunk-jdkn7yce.js";import"./chunk-qh4ma7bm.js";import"./chunk-zm2aajcr.js";import"./chunk-7ntmrqet.js";import"./chunk-edxkqkcr.js";import"./chunk-6c8t6gsc.js";import"./chunk-er188mb2.js";import{ue}from"./chunk-5nnrmmhw.js";import{readFileSync as R}from"fs";import{join as u}from"path";var g=ue("./loopAutonomousPreamble-07qcyhv4.md");var y=ue("./loopAutonomousPreamblePersistent-3zqtkrvg.md");var re=g;function m(){if(a.CLAUDE_CODE_LOOP_PERSISTENT)return!0;return x("tengu_kairos_loop_persistent",!1)}function v(){return m()?y:g}function w(){s("tengu_kairos_loop_persistent_activated",{variant:m()})}function h(e=!1){if(!NX())return"";let o=!e&&m()?"newly blocked on a decision you won't make alone, you're ending the loop":"newly blocked on a decision you won't make alone, third straight tick with nothing to do, you're ending the loop";return`

Use ${TC} when the loop can't move further without the user, or when something landed that they'd want to act on now: ${o}, or a major update arrived (CI went red, a review changes the plan). Progress you made yourself isn't a trigger \u2014 the transcript covers that. One ping per state, not per tick.`}function b(){return`# Autonomous loop tick

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${fa} from this tick.${h()}`}var f=`

If a ${ma} is armed (check ${yw}), keep \`delaySeconds\` at 1200\u20131800s \u2014 the ${ma} is the wake signal and this is only the fallback heartbeat. If you were woken by a \`<task-notification>\`, handle the event before deciding whether to re-arm. To stop the loop, call ${fa} with \`stop: true\` and ${t_} the monitor (use ${yw} to find its task ID if no longer in context).`;function S(){return`# Autonomous loop tick (dynamic pacing)

Run the autonomous check using the loop instructions established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${fa} tool (not a recurring cron). To keep the loop alive, call ${fa} again at the end of this turn with \`prompt\` set to the literal sentinel \`${gne}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${f}${h()}`}function I(e){return e===awe||e===gne}function L(e,t){if(!I(t))return null;w();let o=t===gne?S():b();if(e.autonomousPreambleDelivered||e.lastLoopFileDelivered!==null)return o;return e.autonomousPreambleDelivered=!0,`${v()}

---

${o}`}var k="__autonomous_preamble__",C="<<loop.md>>",d="<<loop.md-dynamic>>";function F(){return`# /loop tick \u2014 loop.md tasks

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick. The recurring cron will fire the next tick automatically \u2014 do not call ${fa} from this tick.${h(!0)}`}function M(){return`# /loop tick \u2014 loop.md tasks (dynamic pacing)

Work the tasks from the loop.md contents established earlier in this conversation. If you cannot find them, treat this as a no-op tick.

You scheduled this tick via the ${fa} tool (not a recurring cron). To keep the loop alive, call ${fa} again at the end of this turn with \`prompt\` set to the literal sentinel \`${d}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${f}${h(!0)}`}function N(){return`# /loop tick \u2014 loop.md absent (dynamic pacing)

loop.md is not currently present. Run the autonomous check using the loop instructions established earlier in this conversation.

You scheduled this tick via the ${fa} tool (not a recurring cron). To keep the loop alive \u2014 and to pick up loop.md if it is recreated \u2014 call ${fa} again at the end of this turn with \`prompt\` set to the literal sentinel \`${d}\` and \`noop\` set to \`true\` if this tick changed nothing (or \`false\` if it did) \u2014 otherwise the loop ends after this tick.${f}${h()}`}var l=25000;function P(e){if(e.length<=l)return e;let t=e.lastIndexOf(`
`,l);return`${e.slice(0,t>0?t:l)}

> WARNING: loop.md was truncated to ${l} bytes. Keep the task list concise.`}function _(){return c(u(gn(),".claude","loop.md"))??c(u(He(),"loop.md"))}function c(e){let t;try{t=R(e,"utf-8")}catch(n){if(It(n)||E(n)==="EISDIR")return null;throw n}let o=t.trim();if(o.length===0)return null;return{path:e,content:P(o)}}async function D(e){if(!e)return _();let t=c(u(gn(),".claude","loop.md"));if(t)return t;let o=u(He(),"loop.md"),n=await e.read([we.state("loop-file")]);if(!n.ok)return c(o);let i=n.value.items[0];if(!i.found)return null;let r=Buffer.from(i.value.buffer,i.value.byteOffset,i.value.byteLength).toString("utf-8").trim();if(r.length===0)return null;return{path:o,content:P(r)}}function p(e){return e===C||e===d}function q(e,t){if(!p(t))return null;return T(e,t,_())}async function W(e,t,o){if(!p(t))return null;return T(e,t,await D(o))}function T(e,t,o){let n=t===d;if(o){let r=n?M():F();if(e.lastLoopFileDelivered===o.content)return r;return e.lastLoopFileDelivered=o.content,`# /loop tick \u2014 tasks from ${o.path}

The user configured a loop-tasks file. Work through the tasks defined below; these are the instructions for this tick and every subsequent tick (the reminder on later fires refers back to this message).

---

${o.content}

---

${r}`}w();let i=n?N():b();if(e.lastLoopFileDelivered===k||e.autonomousPreambleDelivered)return i;return e.lastLoopFileDelivered=k,e.autonomousPreambleDelivered=!0,`${v()}

---

${i}`}function se(e){return I(e)||p(e)}function ae(e,t){return L(e,t)??q(e,t)??t}async function he(e,t,o){return L(e,t)??await W(e,t,o)??t}export{re as AUTONOMOUS_LOOP_PREAMBLE,d as LOOP_FILE_DYNAMIC_SENTINEL,C as LOOP_FILE_SENTINEL,v as getAutonomousLoopPreamble,I as isAutonomousLoopSentinel,se as isLoopDefaultSentinel,p as isLoopFileSentinel,m as isLoopPersistentPreambleEnabled,w as logAutonomousLoopActivation,_ as readLoopFile,D as readLoopFileAsync,L as resolveAutonomousLoopFire,ae as resolveLoopDefaultFire,he as resolveLoopDefaultFireAsync,q as resolveLoopFileFire,W as resolveLoopFileFireAsync};
