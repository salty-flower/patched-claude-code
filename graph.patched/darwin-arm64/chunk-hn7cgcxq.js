// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{zg}from"./chunk-sgamszzq.js";import"./chunk-vx7e38ke.js";import"./chunk-n93bke93.js";import"./chunk-q2h0fawe.js";import"./chunk-qq9jq5dz.js";import"./chunk-k6smmjsm.js";import{i}from"./chunk-jxv3x25k.js";import"./chunk-4akrhkry.js";import{fo,Et,_t}from"./chunk-g4c6ggz4.js";import"./chunk-jxdnn2j1.js";import"./chunk-67jj8qay.js";import"./chunk-7greh2d8.js";import{a}from"./chunk-wkhfcbsj.js";import"./chunk-tq3ft6e6.js";import"./chunk-qmm87fyw.js";import"./chunk-pfxvy4ay.js";import"./chunk-vzm3bfp5.js";import"./chunk-1cx6bcw0.js";import"./chunk-w0wezkwh.js";import"./chunk-033exrv9.js";import"./chunk-057hcrqj.js";import"./chunk-nemb0v5p.js";import"./chunk-n21rqdv9.js";import"./chunk-gyqjm99t.js";import"./chunk-rffpe63a.js";import"./chunk-83fmeatd.js";import"./chunk-aj022wxj.js";import"./chunk-06f6mv83.js";import"./chunk-f1vfx2c9.js";import"./chunk-vwjr2pkc.js";import"./chunk-3w873vgy.js";import"./chunk-a38xyc22.js";import"./chunk-hxqyqnkp.js";import"./chunk-gyyhh83h.js";import"./chunk-jghr2zs7.js";import"./chunk-k515hq0v.js";import"./chunk-90yxyspx.js";import"./chunk-nxhd1nfq.js";import"./chunk-6vm9fw1n.js";import"./chunk-cywp4eg9.js";import"./chunk-j2wjbpxv.js";import"./chunk-4cdedaae.js";import"./chunk-y72vc59g.js";import"./chunk-m1s552da.js";import"./chunk-pfn1bjke.js";import"./chunk-hxn1me4q.js";import"./chunk-8yjp8tpt.js";import"./chunk-fmf8btmz.js";import"./chunk-r9jm87wv.js";import"./chunk-9ngv0yxa.js";import"./chunk-gk6kz4gh.js";import"./chunk-7tmdsrws.js";import{$n}from"./chunk-yvbqdrex.js";import"./chunk-d5zyj0vt.js";import"./chunk-brxrr15j.js";import"./chunk-qyp953rx.js";import"./chunk-z6t0tnzq.js";import"./chunk-3a3psjjn.js";import"./chunk-4hvxqv7y.js";import"./chunk-fn346qw1.js";import"./chunk-7367658q.js";import"./chunk-cqv6tkc1.js";import"./chunk-j63nfvz8.js";import"./chunk-jmhxqcfx.js";import"./chunk-pgetpn99.js";import"./chunk-8797texs.js";import"./chunk-ec199pf4.js";import"./chunk-cpmvkw4j.js";import"./chunk-ptjzexzr.js";import{M2n}from"./chunk-jrnehc0r.js";import{Xt}from"./chunk-2b1j7csg.js";import{Rs}from"./chunk-dwbqb0rr.js";import"./chunk-sf26qcjy.js";import"./chunk-rfxxab2b.js";import{Jx,Wre}from"./chunk-63sr5sqt.js";import{Pg,hE,Bre,SR}from"./chunk-gkckvxbs.js";import"./chunk-k5fw56rm.js";import{Io}from"./chunk-d4eea6et.js";import"./chunk-tk9shsyf.js";import"./chunk-vfmbed55.js";import"./chunk-msanejrk.js";import"./chunk-enzwewwd.js";import"./chunk-5wznwy1x.js";import"./chunk-qe3f6kd6.js";import"./chunk-rdygj5c6.js";import"./chunk-kzn1hmjg.js";import"./chunk-cmbv9pzk.js";import"./chunk-qqvjsfs3.js";import"./chunk-kwgbqeqt.js";import"./chunk-hq3cjekn.js";import"./chunk-4rq851sf.js";import"./chunk-wh4168zx.js";import{wN}from"./chunk-377e4n8h.js";import{hNt}from"./chunk-tf6g8qks.js";import{rEe,B3,LNt}from"./chunk-rmdmdxwh.js";import{Pa,kDe,rpe,mb,Ig}from"./chunk-8y5qshd4.js";import"./chunk-wwbdzw8c.js";import"./chunk-t4s9jqwc.js";import{Ia}from"./chunk-fzedegkt.js";import"./chunk-p2dc4my5.js";import"./chunk-ycdabn6c.js";import"./chunk-ttgp160k.js";import"./chunk-1v0xd4d5.js";import"./chunk-jxt8ankd.js";import"./chunk-c64g6h84.js";import"./chunk-en8ntyde.js";import"./chunk-5yfmr588.js";import"./chunk-j698dt39.js";import"./chunk-qt55mcfv.js";import"./chunk-e382dy54.js";import"./chunk-kmhka96v.js";import"./chunk-8g5d5rrv.js";import"./chunk-jm8tf5gf.js";import"./chunk-686wm7s6.js";import"./chunk-4zc2ctjz.js";var s=((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-pgxhk7bn.js"),N="10m";function y(){return Wre()?` Before you stop, send a one-line outcome via ${Jx} \u2014 the user may be away and waiting to hear it's done. Skip this if you're stopping because the user just told you to; they're already here.`:""}var m=/^\d+[smhd]$/,p=/^every\s+(\d+)\s*(s|sec|secs|second|seconds|m|min|mins|minute|minutes|h|hr|hrs|hour|hours|d|day|days)\s*$/i;function T(e){let o=e[1],t=e[2].toLowerCase();if(t.startsWith("s"))return`${o}s`;if(t.startsWith("h"))return`${o}h`;if(t.startsWith("d"))return`${o}d`;return`${o}m`}var I="| Interval pattern      | Cron expression     | Notes                                    |\n|-----------------------|---------------------|------------------------------------------|\n| `Nm` where N \u2264 59   | `*/N * * * *`     | every N minutes                          |\n| `Nm` where N \u2265 60   | `0 */H * * *`     | round to hours (H = N/60, must divide 24)|\n| `Nh` where N \u2264 23   | `0 */N * * *`     | every N hours                            |\n| `Nd`                | `0 0 */N * *`     | every N days at midnight local           |\n| `Ns`                | treat as `ceil(N/60)m` | cron minimum granularity is 1 minute  |\n\n**If the interval doesn't cleanly divide its unit** (e.g. `7m` \u2192 `*/7 * * * *` gives uneven gaps at :56\u2192:00; `90m` \u2192 1.5h which cron can't express), pick the nearest clean interval and tell the user what you rounded to before scheduling.";function E(){if(!a.CLAUDE_CODE_REMOTE&&!Et()&&$n()&&_t()&&Xt("allow_remote_sessions")&&Xt(wN)&&zg().length===0)return`
## Offer cloud first

Before any scheduling step, check whether EITHER is true:
- the parsed interval (rule 1 or 2) is **\u226560 minutes**, or
- regardless of which rule matched, the original input uses daily phrasing ("every morning", "daily", "every day", "each night", "every weekday")

If either is true, call ${Rs} first:
- \`question\`: "This loop stops when you close this session. Set it up as a cloud schedule instead so it keeps running?"
- \`header\`: "Schedule"
- \`options\`: \`[{label: "Cloud schedule (recommended)", description: "Runs in Anthropic's cloud even after you close this session"}, {label: "This session only", description: "Runs in this terminal until you exit"}]\`

If they pick **Cloud schedule**: do NOT call ${Pg}. Invoke the \`schedule\` skill directly via the ${fo} tool with \`args\` set to their original input verbatim (e.g. \`${fo}({skill: "schedule", args: "every morning tell me a joke"})\`), then follow that skill's instructions to completion. Do NOT tell the user to run /schedule themselves. **Then stop \u2014 do not continue to any section below** (no ${Pg}, no ${Pa}, no "execute the prompt now").
If they pick **This session only**:
- If the trigger was a parsed \u226560-minute interval (rule 1 or 2): continue below with that interval.
- If the trigger was daily phrasing only (rule 3, no parsed interval): do NOT call ${Pg}. Explain that a daily-cadence loop won't fire before this session closes, so there's nothing useful to schedule locally \u2014 suggest they either pick Cloud schedule, or re-run \`/loop\` with an explicit shorter interval (e.g. \`/loop 1h <prompt>\`) if they want a session loop. Then stop.
If neither trigger condition was met: continue below.
`;return""}function A(){if(!a.CLAUDE_CODE_REMOTE&&!Et()&&$n()&&_t()&&Xt("allow_remote_sessions")&&Xt(wN)){if(zg().length>0)return` End the confirmation with this exact line on its own, italicized: ${"`_Runs until you close this session \xB7 For durable cloud-based loops, use /schedule_`"}`;return` Only if you did NOT show the cloud-offer ${Rs} above (i.e., neither trigger condition applied), end the confirmation with this exact line on its own, italicized: ${"`_Runs until you close this session \xB7 For durable cloud-based loops, use /schedule_`"}. If the user already answered that question, omit this line.`}return""}function L(){return`Usage: /loop [interval] <prompt>

Run a prompt or slash command on a recurring interval \u2014 or with no interval, let the model self-pace based on the task.

Intervals: Ns, Nm, Nh, Nd (e.g. 5m, 30m, 2h, 1d). Minimum granularity is 1 minute.
If no interval is specified, the model picks a delay between iterations based on what it's doing.

Examples:
  /loop 5m /babysit-prs
  /loop 30m check the deploy
  /loop 1h /standup 1
  /loop check the deploy          (dynamic \u2014 model picks delays)
  /loop check the deploy every 20m`}function g(){return B3()?`arm one now with \`timeout_ms: ${rEe()}\``:"arm one now with `persistent: true`"}function w(e){if(B3())return`A monitor expires after at most ${LNt(rEe())} and tells you; on later ${e} call ${mb} first and re-arm only if no monitor for it is still running.`;return e==="iterations"?`Arm once; on later iterations call ${mb} first and skip this step if a monitor is already running.`:`Arm once; on later ticks call ${mb} first and skip if a monitor is already running.`}function S(e){let o=`The user wants you to self-pace. Decide what makes the next iteration worth running \u2014 a passage of time, or an observable event.

1. **Run the parsed prompt now.** If it's a slash command, invoke it via the Skill tool; otherwise act on it directly.
2. **If the next run is gated on an event** (CI finishing, a log line matching, a file changing, a PR comment) and no ${Ia} is already running for it: ${g()}. Its events arrive as \`<task-notification>\` messages and wake this loop immediately \u2014 you do not wait for the ${Pa} deadline. ${w("iterations")}
3. **Briefly confirm**: that you're self-pacing, whether a ${Ia} is the primary wake signal, that you ran the task now, and what fallback delay you're about to pick. Write this as text *before* calling ${Pa} \u2014 the turn ends as soon as that tool returns.
4. **Then, as the last action of this turn, decide whether the loop continues.** If the task needs another iteration, call ${Pa} with:
   - \`delaySeconds\`: with a ${Ia} armed this is the **fallback heartbeat** \u2014 how long to wait if no event fires (lean 1200\u20131800s; idle ticks more frequent than the task needs are pure overhead). Without a ${Ia} this is the cadence \u2014 pick based on what you observed. Read the tool's own description for cache-aware delay guidance.
   - \`reason\`: one short sentence on why you picked that delay.
   - \`prompt\`: the full original /loop input verbatim, prefixed with \`/loop \` so the next firing re-enters this skill and continues the loop. For example, if the user typed \`/loop check the deploy\`, pass \`/loop check the deploy\` as the prompt.
   - \`noop\`: \`true\` if this tick changed nothing ("still waiting", "quiet hold"); \`false\` if it did something worth keeping. Consecutive \`noop: true\` ticks collapse in the terminal.
   If it doesn't need another iteration, stop instead (step 6) \u2014 re-arming is a per-turn choice, not a default.
5. **If you were woken by a \`<task-notification>\`** rather than this prompt: handle the event in the context of the loop task, then make the same decision. If the loop should continue, call ${Pa} again with the same \`prompt\` and the same 1200\u20131800s \`delaySeconds\` from step 4 (the ${Ia} remains the wake signal; the new wakeup is only the fallback heartbeat). If the event means the work is finished, stop (step 6).
6. **To stop the loop** \u2014 the task is complete, further iterations can't make progress, or the user asked you to stop \u2014 call ${Pa} with \`stop: true\` (no other fields) and ${Ig} any ${Ia} you armed (use ${mb} to find the task ID if it is no longer in context). Stopping is the loop's normal ending \u2014 the user can restart it anytime with /loop.${y()}`;return`# /loop \u2014 schedule a recurring or self-paced prompt

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
1. Call ${Pg} with: \`cron\` (the expression above), \`prompt\` (the parsed prompt verbatim), \`recurring: true\`.
2. Briefly confirm: what's scheduled, the cron expression, the human-readable cadence, that recurring tasks auto-expire after ${Bre} days, and that the user can cancel sooner with ${hE} (include the job ID).${A()}
3. **Then immediately execute the parsed prompt now** \u2014 don't wait for the first cron fire. If it's a slash command, invoke it via the Skill tool; otherwise act on it directly.

## Dynamic mode (rule 3 \u2014 no interval)

${o}

## Input

${e}`}var f=(e,o,t)=>{let r=e?`## Loop tasks (from ${e.path})`:"## Autonomous-loop instructions (for the immediate execution and every fire)",n;if(e)n=e.content;else s.logAutonomousLoopActivation(),n=s.getAutonomousLoopPreamble();let l=e?"the loop.md tasks":"the autonomous check";if(o){let c=e?s.LOOP_FILE_DYNAMIC_SENTINEL:rpe,O=e?`# /loop \u2014 loop.md tasks with dynamic pacing

The user invoked \`/loop\` with no prompt and no interval and has a loop-tasks file at \`${e.path}\`. Run those tasks now, then self-pace the next iteration via ${Pa} \u2014 no cron.`:`# /loop \u2014 autonomous default with dynamic pacing

The user invoked \`/loop\` with no prompt and no interval. Run the autonomous check now, then self-pace the next iteration via ${Pa} \u2014 no cron.`,b=e?`that you're running tasks from \`${e.path}\` in dynamic-pacing mode, that you ran the first tick now`:"that this is the autonomous default in dynamic-pacing mode, that you ran the check now",_=`1. **Run ${l} now**, following the instructions inlined below.
2. **If the next tick is gated on an event** (CI finishing, a PR comment, a log line) and no ${Ia} is already running for it: ${g()}. Its events wake this loop immediately \u2014 you do not wait for the ${Pa} deadline. ${w("ticks")}
3. **Briefly confirm**: ${b}, whether a ${Ia} is the primary wake signal, and what fallback delay you're about to pick. Write this as text *before* calling ${Pa} \u2014 the turn ends as soon as that tool returns.
4. **Then, as the last action of this turn, decide whether the loop continues.** If the next check is worth running, call ${Pa} with:
   - \`delaySeconds\`: with a ${Ia} armed this is the fallback heartbeat (lean 1200\u20131800s). Without one, pick based on what you observed this turn \u2014 quiet branch? wait longer. Lots in flight? wait shorter. Read the tool's own description for cache-aware delay guidance.
   - \`reason\`: one short sentence on why you picked that delay.
   - \`prompt\`: the literal string \`${c}\` \u2014 the dynamic-mode sentinel expands at fire time to the full instructions (first fire / first fire post-compact / loop.md edited) or a dynamic-pacing-specific short reminder (subsequent fires). Do not pass the full instructions; that is handled automatically.
   - \`noop\`: \`true\` if this tick changed nothing ("still waiting", "quiet hold"); \`false\` if it did something worth keeping. Consecutive \`noop: true\` ticks collapse in the terminal.
   If it isn't, stop instead (step 6) \u2014 re-arming is a per-turn choice, not a default.
5. **If woken by a \`<task-notification>\`** rather than this prompt: handle the event, then make the same decision. If the loop should continue, call ${Pa} again with \`${c}\` and the same 1200\u20131800s \`delaySeconds\` (the ${Ia} remains the wake signal; the new wakeup is only the fallback heartbeat). If the event means the work is finished, stop (step 6).
6. **To stop the loop** \u2014 the task is complete, further iterations can't make progress, or the user asked you to stop \u2014 call ${Pa} with \`stop: true\` (no other fields) and ${Ig} any ${Ia} you armed (use ${mb} to find the task ID if it is no longer in context). Stopping is the loop's normal ending \u2014 the user can restart it anytime with /loop.${y()}`;return`${O}

## Action

${_}

${r}

${n}`}let h=e?s.LOOP_FILE_SENTINEL:kDe,u=e?`# /loop \u2014 schedule loop.md tasks

The user invoked \`/loop\` with no prompt (input was empty or just the interval \`${t}\`) and has a loop-tasks file at \`${e.path}\`. Schedule a recurring cron that runs those tasks each tick, then run the first tick immediately.`:`# /loop \u2014 schedule the autonomous default

The user invoked \`/loop\` with no prompt (input was empty or just the interval \`${t}\`). Schedule the autonomous-loop default and then run the first autonomous check immediately.`,k=e?"it expands at fire time to the full loop.md contents on first delivery (and whenever loop.md has been edited since last fire), and to a short reminder on subsequent unchanged fires. The long instructions stay in the cached message-prefix.":"it expands at fire time to the full autonomous-loop instructions on first delivery, and to a short reminder on subsequent fires (the long instructions stay in the cached message-prefix).",v=e?`what's scheduled, the cron expression, the human-readable cadence, that it's running tasks from \`${e.path}\`, that recurring tasks auto-expire after ${Bre} days, and that the user can cancel sooner with ${hE} (include the job ID).`:`what's scheduled, the cron expression, the human-readable cadence, that recurring tasks auto-expire after ${Bre} days, and that they can cancel sooner with ${hE} (include the job ID). Mention this is the autonomous default and that the autonomous-loop instructions are baked in.`;return`${u}

## Action

1. Convert \`${t}\` to a 5-field cron expression. Supported suffixes: \`s\` \u2192 ceil to nearest minute, \`m\` (minutes), \`h\` (hours), \`d\` (days). Examples: \`5m\` \u2192 \`*/5 * * * *\`, \`1h\` \u2192 \`0 * * * *\`, \`1d\` \u2192 \`0 0 * * *\`. If the interval doesn't cleanly divide its unit, round to the nearest clean interval and tell the user what you rounded to.
2. Call ${Pg} with:
   - \`cron\`: the expression from step 1
   - \`prompt\`: the literal string \`${h}\` \u2014 ${k}
   - \`recurring\`: \`true\`
3. Briefly confirm: ${v}
4. **Then immediately run ${l} now**, following the instructions inlined below. Don't wait for the first cron fire.

${r}

${n}`};function Z(){Io({name:hNt,menuDescription:"Repeat a prompt or command on an interval (e.g. /loop 5m /foo)",aliases:["proactive"],description:"Run a prompt or slash command on a recurring interval (e.g. /loop 5m /foo). Omit the interval to let the model self-pace.",whenToUse:'When the user wants to set up a recurring task, poll for status, or run something repeatedly on an interval (e.g. "check the deploy every 5 minutes", "keep running /babysit-prs"). Do NOT invoke for one-off tasks.',get argumentHint(){return"[interval] [prompt]"},userInvocable:!0,argsMayContainSlashCommands:!0,isEnabled:SR,async getPromptForCommand(e,o){let t=e.trim();if(!o.options?.isSkillPreload&&!o.options?.modelScheduledOrigin)i("tengu_loop_command",{has_args:t.length>0,is_interval_only:m.test(t)||p.test(t)});{let r=t.match(p),n=!t,l=m.test(t)||r!==null;if(n||l){let h=r?T(r):t||N,u=await s.readLoopFileAsync(o.storageV5);if(n){if(!o.options?.isSkillPreload&&!o.options?.modelScheduledOrigin)M2n();return[{type:"text",text:f(u,!0,h)}]}return[{type:"text",text:f(u,!1,h)}]}}if(!t)return[{type:"text",text:L()}];if(!o.options?.isSkillPreload&&!o.options?.modelScheduledOrigin)M2n();return[{type:"text",text:S(t)}]}})}export{Z as registerLoopSkill};
