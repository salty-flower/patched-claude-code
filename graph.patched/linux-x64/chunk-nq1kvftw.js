// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{zg}from"./chunk-txfrkyzp.js";import"./chunk-gj513b2z.js";import"./chunk-qztrb7e5.js";import"./chunk-d3xvzk7s.js";import"./chunk-cnzbk8gg.js";import"./chunk-p9tbyvzw.js";import{i}from"./chunk-5a4y4a7y.js";import"./chunk-61g2sn1g.js";import{fo,vt,_t}from"./chunk-30p0nwys.js";import"./chunk-k4wnp212.js";import"./chunk-67jj8qay.js";import"./chunk-q3f1bdx8.js";import{a}from"./chunk-q2vrcqny.js";import"./chunk-40wq8hf6.js";import"./chunk-847hpqqs.js";import"./chunk-hdk9febf.js";import"./chunk-kh3dq6rw.js";import"./chunk-1cx6bcw0.js";import"./chunk-qrf0f0ev.js";import"./chunk-g0d6a50p.js";import"./chunk-pe91jxt9.js";import"./chunk-77ybm3jg.js";import"./chunk-zf4yx99n.js";import"./chunk-d6f1t6sb.js";import"./chunk-4knvtbyn.js";import"./chunk-vd2nxbng.js";import"./chunk-679ytzs5.js";import"./chunk-v8v8a55t.js";import"./chunk-ayzpxv7a.js";import"./chunk-b8169sgj.js";import"./chunk-48rd4zn3.js";import"./chunk-h4q23q42.js";import"./chunk-9dhpqtz5.js";import"./chunk-39xz88rg.js";import"./chunk-te6f9h8j.js";import"./chunk-ggjhe3cp.js";import"./chunk-dnzv18vp.js";import"./chunk-b48ax99g.js";import"./chunk-2an23fcc.js";import"./chunk-hht526yc.js";import"./chunk-qb348yzj.js";import"./chunk-7zjnjcjk.js";import"./chunk-x7wz4nc0.js";import"./chunk-d0bmg328.js";import"./chunk-090t3djy.js";import"./chunk-577jmkv2.js";import"./chunk-5mt43ge3.js";import"./chunk-b9fawpjq.js";import"./chunk-gjtn8r0h.js";import"./chunk-v25vm59m.js";import"./chunk-qk93vtk9.js";import"./chunk-86tcajxg.js";import{Fn}from"./chunk-s3hsf7ap.js";import"./chunk-psm40xqz.js";import"./chunk-wt9yf8j5.js";import"./chunk-1wf4xdje.js";import"./chunk-k90g7wxy.js";import"./chunk-ehdaj6wy.js";import"./chunk-scqpsn3c.js";import"./chunk-62t5bbjj.js";import"./chunk-vc8y7vvq.js";import"./chunk-7jt45jjp.js";import"./chunk-9hdk0yg9.js";import"./chunk-bb220g96.js";import"./chunk-2n66rk9w.js";import"./chunk-tpht1k6q.js";import"./chunk-wmyy1anw.js";import"./chunk-cch7wh6r.js";import"./chunk-93j0tyv3.js";import{ujn}from"./chunk-kebzq8bs.js";import{Xt}from"./chunk-js9x7t7j.js";import{Rs}from"./chunk-xp60y251.js";import"./chunk-jyxm2b55.js";import"./chunk-e6d1qtmj.js";import{qx,Nre}from"./chunk-e0c3tjjk.js";import{xg,mv,Dre,gR}from"./chunk-4m6dfgsv.js";import"./chunk-ke7021dg.js";import{Ho}from"./chunk-6y1ewrzw.js";import"./chunk-0h2z9cza.js";import"./chunk-q340fxjb.js";import"./chunk-9hxsj37m.js";import"./chunk-ch29rnqb.js";import"./chunk-g1ccvg33.js";import"./chunk-3bn1z6rt.js";import"./chunk-rch5enmq.js";import"./chunk-et769a5s.js";import"./chunk-gs70f5fb.js";import"./chunk-nc4fc0sr.js";import"./chunk-cjnj9xh3.js";import"./chunk-j5v5ywke.js";import"./chunk-0304gcnr.js";import"./chunk-1t2j04wn.js";import{uN}from"./chunk-fps5w5zx.js";import{ZLt}from"./chunk-h9brabjn.js";import{Kwe,MV,_Nt}from"./chunk-xt3af0dj.js";import{Pa,_Me,Xde,pS,Ig}from"./chunk-81g5hqwc.js";import"./chunk-ts9gpq5q.js";import"./chunk-bgceeq4n.js";import{Ha}from"./chunk-xn34hce1.js";import"./chunk-fr2yty3r.js";import"./chunk-wvg0yfjv.js";import"./chunk-a31y19dr.js";import"./chunk-a7rcsf1h.js";import"./chunk-fbrtmtj0.js";import"./chunk-jejrdv21.js";import"./chunk-7x5ref3k.js";import"./chunk-gsbsg5z6.js";import"./chunk-05jxh7mq.js";import"./chunk-t29t3qgr.js";import"./chunk-k9vdtdk2.js";import"./chunk-er8eeww9.js";import"./chunk-8zbt0spj.js";import"./chunk-gyh40pz1.js";import"./chunk-s44v6gm9.js";import"./chunk-b8r1xdtr.js";var s=((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-nqfj4e46.js"),N="10m";function y(){return Nre()?` Before you stop, send a one-line outcome via ${qx} \u2014 the user may be away and waiting to hear it's done. Skip this if you're stopping because the user just told you to; they're already here.`:""}var m=/^\d+[smhd]$/,p=/^every\s+(\d+)\s*(s|sec|secs|second|seconds|m|min|mins|minute|minutes|h|hr|hrs|hour|hours|d|day|days)\s*$/i;function T(e){let o=e[1],t=e[2].toLowerCase();if(t.startsWith("s"))return`${o}s`;if(t.startsWith("h"))return`${o}h`;if(t.startsWith("d"))return`${o}d`;return`${o}m`}var I="| Interval pattern      | Cron expression     | Notes                                    |\n|-----------------------|---------------------|------------------------------------------|\n| `Nm` where N \u2264 59   | `*/N * * * *`     | every N minutes                          |\n| `Nm` where N \u2265 60   | `0 */H * * *`     | round to hours (H = N/60, must divide 24)|\n| `Nh` where N \u2264 23   | `0 */N * * *`     | every N hours                            |\n| `Nd`                | `0 0 */N * *`     | every N days at midnight local           |\n| `Ns`                | treat as `ceil(N/60)m` | cron minimum granularity is 1 minute  |\n\n**If the interval doesn't cleanly divide its unit** (e.g. `7m` \u2192 `*/7 * * * *` gives uneven gaps at :56\u2192:00; `90m` \u2192 1.5h which cron can't express), pick the nearest clean interval and tell the user what you rounded to before scheduling.";function E(){if(!a.CLAUDE_CODE_REMOTE&&!vt()&&Fn()&&_t()&&Xt("allow_remote_sessions")&&Xt(uN)&&zg().length===0)return`
## Offer cloud first

Before any scheduling step, check whether EITHER is true:
- the parsed interval (rule 1 or 2) is **\u226560 minutes**, or
- regardless of which rule matched, the original input uses daily phrasing ("every morning", "daily", "every day", "each night", "every weekday")

If either is true, call ${Rs} first:
- \`question\`: "This loop stops when you close this session. Set it up as a cloud schedule instead so it keeps running?"
- \`header\`: "Schedule"
- \`options\`: \`[{label: "Cloud schedule (recommended)", description: "Runs in Anthropic's cloud even after you close this session"}, {label: "This session only", description: "Runs in this terminal until you exit"}]\`

If they pick **Cloud schedule**: do NOT call ${xg}. Invoke the \`schedule\` skill directly via the ${fo} tool with \`args\` set to their original input verbatim (e.g. \`${fo}({skill: "schedule", args: "every morning tell me a joke"})\`), then follow that skill's instructions to completion. Do NOT tell the user to run /schedule themselves. **Then stop \u2014 do not continue to any section below** (no ${xg}, no ${Pa}, no "execute the prompt now").
If they pick **This session only**:
- If the trigger was a parsed \u226560-minute interval (rule 1 or 2): continue below with that interval.
- If the trigger was daily phrasing only (rule 3, no parsed interval): do NOT call ${xg}. Explain that a daily-cadence loop won't fire before this session closes, so there's nothing useful to schedule locally \u2014 suggest they either pick Cloud schedule, or re-run \`/loop\` with an explicit shorter interval (e.g. \`/loop 1h <prompt>\`) if they want a session loop. Then stop.
If neither trigger condition was met: continue below.
`;return""}function A(){if(!a.CLAUDE_CODE_REMOTE&&!vt()&&Fn()&&_t()&&Xt("allow_remote_sessions")&&Xt(uN)){if(zg().length>0)return` End the confirmation with this exact line on its own, italicized: ${"`_Runs until you close this session \xB7 For durable cloud-based loops, use /schedule_`"}`;return` Only if you did NOT show the cloud-offer ${Rs} above (i.e., neither trigger condition applied), end the confirmation with this exact line on its own, italicized: ${"`_Runs until you close this session \xB7 For durable cloud-based loops, use /schedule_`"}. If the user already answered that question, omit this line.`}return""}function L(){return`Usage: /loop [interval] <prompt>

Run a prompt or slash command on a recurring interval \u2014 or with no interval, let the model self-pace based on the task.

Intervals: Ns, Nm, Nh, Nd (e.g. 5m, 30m, 2h, 1d). Minimum granularity is 1 minute.
If no interval is specified, the model picks a delay between iterations based on what it's doing.

Examples:
  /loop 5m /babysit-prs
  /loop 30m check the deploy
  /loop 1h /standup 1
  /loop check the deploy          (dynamic \u2014 model picks delays)
  /loop check the deploy every 20m`}function g(){return MV()?`arm one now with \`timeout_ms: ${Kwe()}\``:"arm one now with `persistent: true`"}function w(e){if(MV())return`A monitor expires after at most ${_Nt(Kwe())} and tells you; on later ${e} call ${pS} first and re-arm only if no monitor for it is still running.`;return e==="iterations"?`Arm once; on later iterations call ${pS} first and skip this step if a monitor is already running.`:`Arm once; on later ticks call ${pS} first and skip if a monitor is already running.`}function S(e){let o=`The user wants you to self-pace. Decide what makes the next iteration worth running \u2014 a passage of time, or an observable event.

1. **Run the parsed prompt now.** If it's a slash command, invoke it via the Skill tool; otherwise act on it directly.
2. **If the next run is gated on an event** (CI finishing, a log line matching, a file changing, a PR comment) and no ${Ha} is already running for it: ${g()}. Its events arrive as \`<task-notification>\` messages and wake this loop immediately \u2014 you do not wait for the ${Pa} deadline. ${w("iterations")}
3. **Briefly confirm**: that you're self-pacing, whether a ${Ha} is the primary wake signal, that you ran the task now, and what fallback delay you're about to pick. Write this as text *before* calling ${Pa} \u2014 the turn ends as soon as that tool returns.
4. **Then, as the last action of this turn, decide whether the loop continues.** If the task needs another iteration, call ${Pa} with:
   - \`delaySeconds\`: with a ${Ha} armed this is the **fallback heartbeat** \u2014 how long to wait if no event fires (lean 1200\u20131800s; idle ticks more frequent than the task needs are pure overhead). Without a ${Ha} this is the cadence \u2014 pick based on what you observed. Read the tool's own description for cache-aware delay guidance.
   - \`reason\`: one short sentence on why you picked that delay.
   - \`prompt\`: the full original /loop input verbatim, prefixed with \`/loop \` so the next firing re-enters this skill and continues the loop. For example, if the user typed \`/loop check the deploy\`, pass \`/loop check the deploy\` as the prompt.
   - \`noop\`: \`true\` if this tick changed nothing ("still waiting", "quiet hold"); \`false\` if it did something worth keeping. Consecutive \`noop: true\` ticks collapse in the terminal.
   If it doesn't need another iteration, stop instead (step 6) \u2014 re-arming is a per-turn choice, not a default.
5. **If you were woken by a \`<task-notification>\`** rather than this prompt: handle the event in the context of the loop task, then make the same decision. If the loop should continue, call ${Pa} again with the same \`prompt\` and the same 1200\u20131800s \`delaySeconds\` from step 4 (the ${Ha} remains the wake signal; the new wakeup is only the fallback heartbeat). If the event means the work is finished, stop (step 6).
6. **To stop the loop** \u2014 the task is complete, further iterations can't make progress, or the user asked you to stop \u2014 call ${Pa} with \`stop: true\` (no other fields) and ${Ig} any ${Ha} you armed (use ${pS} to find the task ID if it is no longer in context). Stopping is the loop's normal ending \u2014 the user can restart it anytime with /loop.${y()}`;return`# /loop \u2014 schedule a recurring or self-paced prompt

Parse the input below into \`[interval] <prompt\u2026>\` and schedule it.

## Parsing (in priority order)

1. **Leading token**: if the first whitespace-delimited token matches \`^\\d+[smhd]$\` (e.g. \`5m\`, \`2h\`), that's the interval; the rest is the prompt.
2. **Trailing "every" clause**: otherwise, if the input ends with \`every <N><unit>\` or \`every <N> <unit-word>\` (e.g. \`every 20m\`, \`every 5 minutes\`, \`every 2 hours\`), extract that as the interval and strip it from the prompt. Only match when what follows "every" is a time expression \u2014 \`check every PR\` has no interval.
3. **No interval**: otherwise, the entire input is the prompt and you'll self-pace dynamically (see "Dynamic mode" below).

If the resulting prompt is empty, show usage \`/loop [interval] <prompt>\` and stop.

Examples:
- \`5m /babysit-prs\` \u2192 interval \`5m\`, prompt \`/babysit-prs\` (rule 1)
- \`check the deploy every 20m\` \u2192 interval \`20m\`, prompt \`check the deploy\` (rule 2)
- \`run tests every 5 minutes\` \u2192 interval \`5m\`, prompt \`run tests\` (rule 2)
- \`check the deploy\` \u2192 no interval \u2192 dynamic mode, prompt \`check the deploy\` (rule 3)
- \`check every PR\` \u2192 no interval \u2192 dynamic mode, prompt \`check every PR\` (rule 3 \u2014 "every" not followed by time)
- \`5m\` \u2192 empty prompt \u2192 show usage
${E()}
## Fixed-interval mode (rules 1 and 2)

Convert the interval to a cron expression:

${I}

Then:
1. Call ${xg} with: \`cron\` (the expression above), \`prompt\` (the parsed prompt verbatim), \`recurring: true\`.
2. Briefly confirm: what's scheduled, the cron expression, the human-readable cadence, that recurring tasks auto-expire after ${Dre} days, and that the user can cancel sooner with ${mv} (include the job ID).${A()}
3. **Then immediately execute the parsed prompt now** \u2014 don't wait for the first cron fire. If it's a slash command, invoke it via the Skill tool; otherwise act on it directly.

## Dynamic mode (rule 3 \u2014 no interval)

${o}

## Input

${e}`}var f=(e,o,t)=>{let r=e?`## Loop tasks (from ${e.path})`:"## Autonomous-loop instructions (for the immediate execution and every fire)",n;if(e)n=e.content;else s.logAutonomousLoopActivation(),n=s.getAutonomousLoopPreamble();let l=e?"the loop.md tasks":"the autonomous check";if(o){let c=e?s.LOOP_FILE_DYNAMIC_SENTINEL:Xde,O=e?`# /loop \u2014 loop.md tasks with dynamic pacing

The user invoked \`/loop\` with no prompt and no interval and has a loop-tasks file at \`${e.path}\`. Run those tasks now, then self-pace the next iteration via ${Pa} \u2014 no cron.`:`# /loop \u2014 autonomous default with dynamic pacing

The user invoked \`/loop\` with no prompt and no interval. Run the autonomous check now, then self-pace the next iteration via ${Pa} \u2014 no cron.`,b=e?`that you're running tasks from \`${e.path}\` in dynamic-pacing mode, that you ran the first tick now`:"that this is the autonomous default in dynamic-pacing mode, that you ran the check now",_=`1. **Run ${l} now**, following the instructions inlined below.
2. **If the next tick is gated on an event** (CI finishing, a PR comment, a log line) and no ${Ha} is already running for it: ${g()}. Its events wake this loop immediately \u2014 you do not wait for the ${Pa} deadline. ${w("ticks")}
3. **Briefly confirm**: ${b}, whether a ${Ha} is the primary wake signal, and what fallback delay you're about to pick. Write this as text *before* calling ${Pa} \u2014 the turn ends as soon as that tool returns.
4. **Then, as the last action of this turn, decide whether the loop continues.** If the next check is worth running, call ${Pa} with:
   - \`delaySeconds\`: with a ${Ha} armed this is the fallback heartbeat (lean 1200\u20131800s). Without one, pick based on what you observed this turn \u2014 quiet branch? wait longer. Lots in flight? wait shorter. Read the tool's own description for cache-aware delay guidance.
   - \`reason\`: one short sentence on why you picked that delay.
   - \`prompt\`: the literal string \`${c}\` \u2014 the dynamic-mode sentinel expands at fire time to the full instructions (first fire / first fire post-compact / loop.md edited) or a dynamic-pacing-specific short reminder (subsequent fires). Do not pass the full instructions; that is handled automatically.
   - \`noop\`: \`true\` if this tick changed nothing ("still waiting", "quiet hold"); \`false\` if it did something worth keeping. Consecutive \`noop: true\` ticks collapse in the terminal.
   If it isn't, stop instead (step 6) \u2014 re-arming is a per-turn choice, not a default.
5. **If woken by a \`<task-notification>\`** rather than this prompt: handle the event, then make the same decision. If the loop should continue, call ${Pa} again with \`${c}\` and the same 1200\u20131800s \`delaySeconds\` (the ${Ha} remains the wake signal; the new wakeup is only the fallback heartbeat). If the event means the work is finished, stop (step 6).
6. **To stop the loop** \u2014 the task is complete, further iterations can't make progress, or the user asked you to stop \u2014 call ${Pa} with \`stop: true\` (no other fields) and ${Ig} any ${Ha} you armed (use ${pS} to find the task ID if it is no longer in context). Stopping is the loop's normal ending \u2014 the user can restart it anytime with /loop.${y()}`;return`${O}

## Action

${_}

${r}

${n}`}let h=e?s.LOOP_FILE_SENTINEL:_Me,u=e?`# /loop \u2014 schedule loop.md tasks

The user invoked \`/loop\` with no prompt (input was empty or just the interval \`${t}\`) and has a loop-tasks file at \`${e.path}\`. Schedule a recurring cron that runs those tasks each tick, then run the first tick immediately.`:`# /loop \u2014 schedule the autonomous default

The user invoked \`/loop\` with no prompt (input was empty or just the interval \`${t}\`). Schedule the autonomous-loop default and then run the first autonomous check immediately.`,k=e?"it expands at fire time to the full loop.md contents on first delivery (and whenever loop.md has been edited since last fire), and to a short reminder on subsequent unchanged fires. The long instructions stay in the cached message-prefix.":"it expands at fire time to the full autonomous-loop instructions on first delivery, and to a short reminder on subsequent fires (the long instructions stay in the cached message-prefix).",v=e?`what's scheduled, the cron expression, the human-readable cadence, that it's running tasks from \`${e.path}\`, that recurring tasks auto-expire after ${Dre} days, and that the user can cancel sooner with ${mv} (include the job ID).`:`what's scheduled, the cron expression, the human-readable cadence, that recurring tasks auto-expire after ${Dre} days, and that they can cancel sooner with ${mv} (include the job ID). Mention this is the autonomous default and that the autonomous-loop instructions are baked in.`;return`${u}

## Action

1. Convert \`${t}\` to a 5-field cron expression. Supported suffixes: \`s\` \u2192 ceil to nearest minute, \`m\` (minutes), \`h\` (hours), \`d\` (days). Examples: \`5m\` \u2192 \`*/5 * * * *\`, \`1h\` \u2192 \`0 * * * *\`, \`1d\` \u2192 \`0 0 * * *\`. If the interval doesn't cleanly divide its unit, round to the nearest clean interval and tell the user what you rounded to.
2. Call ${xg} with:
   - \`cron\`: the expression from step 1
   - \`prompt\`: the literal string \`${h}\` \u2014 ${k}
   - \`recurring\`: \`true\`
3. Briefly confirm: ${v}
4. **Then immediately run ${l} now**, following the instructions inlined below. Don't wait for the first cron fire.

${r}

${n}`};function Z(){Ho({name:ZLt,menuDescription:"Repeat a prompt or command on an interval (e.g. /loop 5m /foo)",aliases:["proactive"],description:"Run a prompt or slash command on a recurring interval (e.g. /loop 5m /foo). Omit the interval to let the model self-pace.",whenToUse:'When the user wants to set up a recurring task, poll for status, or run something repeatedly on an interval (e.g. "check the deploy every 5 minutes", "keep running /babysit-prs"). Do NOT invoke for one-off tasks.',get argumentHint(){return"[interval] [prompt]"},userInvocable:!0,argsMayContainSlashCommands:!0,isEnabled:gR,async getPromptForCommand(e,o){let t=e.trim();if(!o.options?.isSkillPreload&&!o.options?.modelScheduledOrigin)i("tengu_loop_command",{has_args:t.length>0,is_interval_only:m.test(t)||p.test(t)});{let r=t.match(p),n=!t,l=m.test(t)||r!==null;if(n||l){let h=r?T(r):t||N,u=await s.readLoopFileAsync(o.storageV5);if(n){if(!o.options?.isSkillPreload&&!o.options?.modelScheduledOrigin)ujn();return[{type:"text",text:f(u,!0,h)}]}return[{type:"text",text:f(u,!1,h)}]}}if(!t)return[{type:"text",text:L()}];if(!o.options?.isSkillPreload&&!o.options?.modelScheduledOrigin)ujn();return[{type:"text",text:S(t)}]}})}export{Z as registerLoopSkill};
