// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{Wm}from"./chunk-sgyvc67j.js";import"./chunk-8yfx63va.js";import"./chunk-95e36pja.js";import"./chunk-0yrss36a.js";import"./chunk-rgs4nrpq.js";import"./chunk-am8gnetv.js";import{i}from"./chunk-z0p50v56.js";import"./chunk-a25t2bvk.js";import{oo,_t,gt}from"./chunk-e02s7cks.js";import"./chunk-g6gcsnnp.js";import"./chunk-vp9rx3bq.js";import"./chunk-2c9ntqb3.js";import{a}from"./chunk-dv6tepz3.js";import"./chunk-3rs4ng0x.js";import"./chunk-wbbe5mtc.js";import"./chunk-kr797g3g.js";import"./chunk-2rebt4am.js";import"./chunk-4thwge0q.js";import"./chunk-8hm57jxw.js";import"./chunk-40qbe5qj.js";import"./chunk-x9wapt5y.js";import"./chunk-z2rcqcmx.js";import"./chunk-c30w2k35.js";import"./chunk-9r5vc452.js";import"./chunk-8rqwttv3.js";import"./chunk-fk28fhjr.js";import"./chunk-2dxb0egv.js";import"./chunk-knxbj6dd.js";import"./chunk-hv7xv8k9.js";import"./chunk-d6akndrs.js";import"./chunk-dr6b4af7.js";import"./chunk-br5w3my7.js";import"./chunk-ysx7ez10.js";import"./chunk-2q7a31tc.js";import"./chunk-jngjxeh6.js";import"./chunk-rccvbg8v.js";import"./chunk-yyyfew8j.js";import"./chunk-jh8csezs.js";import"./chunk-eradmpsk.js";import"./chunk-q87va14m.js";import"./chunk-fx59774s.js";import"./chunk-n5rkcvav.js";import"./chunk-4mnyz1w5.js";import"./chunk-zp3bf2vf.js";import"./chunk-xn4w527t.js";import"./chunk-7vhk7x5v.js";import"./chunk-jkz0x6q2.js";import"./chunk-ssbk02ew.js";import"./chunk-3xk9xykm.js";import"./chunk-v2tkmkax.js";import{Fn}from"./chunk-xsncbnja.js";import"./chunk-azaesbcc.js";import"./chunk-rt87j2wz.js";import"./chunk-m6czhww2.js";import"./chunk-v6ry0gpm.js";import"./chunk-adz7n5a7.js";import"./chunk-hfzdv02p.js";import"./chunk-q8p2ywk2.js";import"./chunk-hsr41a8w.js";import"./chunk-r2phj6np.js";import"./chunk-n0wwgq92.js";import"./chunk-hefafsny.js";import"./chunk-j8dhzt3t.js";import"./chunk-x9sxtx6k.js";import"./chunk-48s4h7y4.js";import"./chunk-pv7bzc31.js";import"./chunk-nh71zkp7.js";import"./chunk-65gr57am.js";import"./chunk-wx1xfhca.js";import"./chunk-jt57wxt7.js";import{zvn}from"./chunk-wxtcqy4q.js";import{Ft}from"./chunk-ea584spk.js";import{Ts}from"./chunk-x9dxwndy.js";import"./chunk-28a80exz.js";import"./chunk-49yzxkrk.js";import{Qk,WQ}from"./chunk-4393waz7.js";import{xm,Lb,BQ,pT}from"./chunk-8h78daxn.js";import"./chunk-kmjx6b3y.js";import{uo}from"./chunk-vr00zgqz.js";import"./chunk-06mxd1fp.js";import"./chunk-0z41cfd2.js";import"./chunk-vhea07bt.js";import"./chunk-9bqt43xx.js";import"./chunk-rvrtf80e.js";import"./chunk-ksfba0x2.js";import"./chunk-262hfrc4.js";import"./chunk-9sh3ncn0.js";import"./chunk-tt5wgtrd.js";import"./chunk-hcgbp53n.js";import"./chunk-b9rrx1k4.js";import"./chunk-7mbff5qn.js";import"./chunk-nqxfa44a.js";import"./chunk-1vqgbqb9.js";import"./chunk-5vw5s3d2.js";import"./chunk-byqm07vb.js";import{BN}from"./chunk-yfnmxb1g.js";import{cCt}from"./chunk-xk9fb22k.js";import"./chunk-5zbds186.js";import{ra,Zke,sie,ES,Og}from"./chunk-0xe3qmyt.js";import"./chunk-wy4wrq2p.js";import{ma}from"./chunk-nmg1y5ce.js";import"./chunk-4xkdwr9c.js";import"./chunk-2ezb38hn.js";import"./chunk-afacp8ga.js";import"./chunk-h2fj4set.js";import"./chunk-ydvy7t16.js";import"./chunk-k5wyayzc.js";import"./chunk-w76pp7a3.js";import"./chunk-c8m0whcr.js";import"./chunk-s09cww1m.js";import"./chunk-qmx5skg1.js";import"./chunk-nznh2rr5.js";import"./chunk-9rpyk3jx.js";import"./chunk-r0enmq3q.js";import"./chunk-pe85fsd6.js";import"./chunk-k42b8hsk.js";import"./chunk-epfresbq.js";import"./chunk-10wetekf.js";var r=((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-phwzwmph.js"),b="10m";function y(){return WQ()?` Before you stop, send a one-line outcome via ${Qk} \u2014 the user may be away and waiting to hear it's done. Skip this if you're stopping because the user just told you to; they're already here.`:""}var p=/^\d+[smhd]$/,m=/^every\s+(\d+)\s*(s|sec|secs|second|seconds|m|min|mins|minute|minutes|h|hr|hrs|hour|hours|d|day|days)\s*$/i;function _(e){let o=e[1],t=e[2].toLowerCase();if(t.startsWith("s"))return`${o}s`;if(t.startsWith("h"))return`${o}h`;if(t.startsWith("d"))return`${o}d`;return`${o}m`}var N="| Interval pattern      | Cron expression     | Notes                                    |\n|-----------------------|---------------------|------------------------------------------|\n| `Nm` where N \u2264 59   | `*/N * * * *`     | every N minutes                          |\n| `Nm` where N \u2265 60   | `0 */H * * *`     | round to hours (H = N/60, must divide 24)|\n| `Nh` where N \u2264 23   | `0 */N * * *`     | every N hours                            |\n| `Nd`                | `0 0 */N * *`     | every N days at midnight local           |\n| `Ns`                | treat as `ceil(N/60)m` | cron minimum granularity is 1 minute  |\n\n**If the interval doesn't cleanly divide its unit** (e.g. `7m` \u2192 `*/7 * * * *` gives uneven gaps at :56\u2192:00; `90m` \u2192 1.5h which cron can't express), pick the nearest clean interval and tell the user what you rounded to before scheduling.";function T(){if(!a.CLAUDE_CODE_REMOTE&&!_t()&&Fn()&&gt()&&Ft("allow_remote_sessions")&&Ft(BN)&&Wm().length===0)return`
## Offer cloud first

Before any scheduling step, check whether EITHER is true:
- the parsed interval (rule 1 or 2) is **\u226560 minutes**, or
- regardless of which rule matched, the original input uses daily phrasing ("every morning", "daily", "every day", "each night", "every weekday")

If either is true, call ${Ts} first:
- \`question\`: "This loop stops when you close this session. Set it up as a cloud schedule instead so it keeps running?"
- \`header\`: "Schedule"
- \`options\`: \`[{label: "Cloud schedule (recommended)", description: "Runs in Anthropic's cloud even after you close this session"}, {label: "This session only", description: "Runs in this terminal until you exit"}]\`

If they pick **Cloud schedule**: do NOT call ${xm}. Invoke the \`schedule\` skill directly via the ${oo} tool with \`args\` set to their original input verbatim (e.g. \`${oo}({skill: "schedule", args: "every morning tell me a joke"})\`), then follow that skill's instructions to completion. Do NOT tell the user to run /schedule themselves. **Then stop \u2014 do not continue to any section below** (no ${xm}, no ${ra}, no "execute the prompt now").
If they pick **This session only**:
- If the trigger was a parsed \u226560-minute interval (rule 1 or 2): continue below with that interval.
- If the trigger was daily phrasing only (rule 3, no parsed interval): do NOT call ${xm}. Explain that a daily-cadence loop won't fire before this session closes, so there's nothing useful to schedule locally \u2014 suggest they either pick Cloud schedule, or re-run \`/loop\` with an explicit shorter interval (e.g. \`/loop 1h <prompt>\`) if they want a session loop. Then stop.
If neither trigger condition was met: continue below.
`;return""}function I(){if(!a.CLAUDE_CODE_REMOTE&&!_t()&&Fn()&&gt()&&Ft("allow_remote_sessions")&&Ft(BN)){if(Wm().length>0)return` End the confirmation with this exact line on its own, italicized: ${"`_Runs until you close this session \xB7 For durable cloud-based loops, use /schedule_`"}`;return` Only if you did NOT show the cloud-offer ${Ts} above (i.e., neither trigger condition applied), end the confirmation with this exact line on its own, italicized: ${"`_Runs until you close this session \xB7 For durable cloud-based loops, use /schedule_`"}. If the user already answered that question, omit this line.`}return""}function E(){return`Usage: /loop [interval] <prompt>

Run a prompt or slash command on a recurring interval \u2014 or with no interval, let the model self-pace based on the task.

Intervals: Ns, Nm, Nh, Nd (e.g. 5m, 30m, 2h, 1d). Minimum granularity is 1 minute.
If no interval is specified, the model picks a delay between iterations based on what it's doing.

Examples:
  /loop 5m /babysit-prs
  /loop 30m check the deploy
  /loop 1h /standup 1
  /loop check the deploy          (dynamic \u2014 model picks delays)
  /loop check the deploy every 20m`}function A(e){let o=`The user wants you to self-pace. Decide what makes the next iteration worth running \u2014 a passage of time, or an observable event.

1. **Run the parsed prompt now.** If it's a slash command, invoke it via the Skill tool; otherwise act on it directly.
2. **If the next run is gated on an event** (CI finishing, a log line matching, a file changing, a PR comment) and no ${ma} is already running for it: arm one now with \`persistent: true\`. Its events arrive as \`<task-notification>\` messages and wake this loop immediately \u2014 you do not wait for the ${ra} deadline. Arm once; on later iterations call ${ES} first and skip this step if a monitor is already running.
3. **Briefly confirm**: that you're self-pacing, whether a ${ma} is the primary wake signal, that you ran the task now, and what fallback delay you're about to pick. Write this as text *before* calling ${ra} \u2014 the turn ends as soon as that tool returns.
4. **Then, as the last action of this turn, decide whether the loop continues.** If the task needs another iteration, call ${ra} with:
   - \`delaySeconds\`: with a ${ma} armed this is the **fallback heartbeat** \u2014 how long to wait if no event fires (lean 1200\u20131800s; idle ticks more frequent than the task needs are pure overhead). Without a ${ma} this is the cadence \u2014 pick based on what you observed. Read the tool's own description for cache-aware delay guidance.
   - \`reason\`: one short sentence on why you picked that delay.
   - \`prompt\`: the full original /loop input verbatim, prefixed with \`/loop \` so the next firing re-enters this skill and continues the loop. For example, if the user typed \`/loop check the deploy\`, pass \`/loop check the deploy\` as the prompt.
   - \`noop\`: \`true\` if this tick changed nothing ("still waiting", "quiet hold"); \`false\` if it did something worth keeping. Consecutive \`noop: true\` ticks collapse in the terminal.
   If it doesn't need another iteration, stop instead (step 6) \u2014 re-arming is a per-turn choice, not a default.
5. **If you were woken by a \`<task-notification>\`** rather than this prompt: handle the event in the context of the loop task, then make the same decision. If the loop should continue, call ${ra} again with the same \`prompt\` and the same 1200\u20131800s \`delaySeconds\` from step 4 (the ${ma} remains the wake signal; the new wakeup is only the fallback heartbeat). If the event means the work is finished, stop (step 6).
6. **To stop the loop** \u2014 the task is complete, further iterations can't make progress, or the user asked you to stop \u2014 call ${ra} with \`stop: true\` (no other fields) and ${Og} any ${ma} you armed (use ${ES} to find the task ID if it is no longer in context). Stopping is the loop's normal ending \u2014 the user can restart it anytime with /loop.${y()}`;return`# /loop \u2014 schedule a recurring or self-paced prompt

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
${T()}
## Fixed-interval mode (rules 1 and 2)

Convert the interval to a cron expression:

${N}

Then:
1. Call ${xm} with: \`cron\` (the expression above), \`prompt\` (the parsed prompt verbatim), \`recurring: true\`.
2. Briefly confirm: what's scheduled, the cron expression, the human-readable cadence, that recurring tasks auto-expire after ${BQ} days, and that the user can cancel sooner with ${Lb} (include the job ID).${I()}
3. **Then immediately execute the parsed prompt now** \u2014 don't wait for the first cron fire. If it's a slash command, invoke it via the Skill tool; otherwise act on it directly.

## Dynamic mode (rule 3 \u2014 no interval)

${o}

## Input

${e}`}var f=(e,o,t)=>{let s=e?`## Loop tasks (from ${e.path})`:"## Autonomous-loop instructions (for the immediate execution and every fire)",n;if(e)n=e.content;else r.logAutonomousLoopActivation(),n=r.getAutonomousLoopPreamble();let h=e?"the loop.md tasks":"the autonomous check";if(o){let c=e?r.LOOP_FILE_DYNAMIC_SENTINEL:sie,k=e?`# /loop \u2014 loop.md tasks with dynamic pacing

The user invoked \`/loop\` with no prompt and no interval and has a loop-tasks file at \`${e.path}\`. Run those tasks now, then self-pace the next iteration via ${ra} \u2014 no cron.`:`# /loop \u2014 autonomous default with dynamic pacing

The user invoked \`/loop\` with no prompt and no interval. Run the autonomous check now, then self-pace the next iteration via ${ra} \u2014 no cron.`,v=e?`that you're running tasks from \`${e.path}\` in dynamic-pacing mode, that you ran the first tick now`:"that this is the autonomous default in dynamic-pacing mode, that you ran the check now",O=`1. **Run ${h} now**, following the instructions inlined below.
2. **If the next tick is gated on an event** (CI finishing, a PR comment, a log line) and no ${ma} is already running for it: arm one now with \`persistent: true\`. Its events wake this loop immediately \u2014 you do not wait for the ${ra} deadline. Arm once; on later ticks call ${ES} first and skip if a monitor is already running.
3. **Briefly confirm**: ${v}, whether a ${ma} is the primary wake signal, and what fallback delay you're about to pick. Write this as text *before* calling ${ra} \u2014 the turn ends as soon as that tool returns.
4. **Then, as the last action of this turn, decide whether the loop continues.** If the next check is worth running, call ${ra} with:
   - \`delaySeconds\`: with a ${ma} armed this is the fallback heartbeat (lean 1200\u20131800s). Without one, pick based on what you observed this turn \u2014 quiet branch? wait longer. Lots in flight? wait shorter. Read the tool's own description for cache-aware delay guidance.
   - \`reason\`: one short sentence on why you picked that delay.
   - \`prompt\`: the literal string \`${c}\` \u2014 the dynamic-mode sentinel expands at fire time to the full instructions (first fire / first fire post-compact / loop.md edited) or a dynamic-pacing-specific short reminder (subsequent fires). Do not pass the full instructions; that is handled automatically.
   - \`noop\`: \`true\` if this tick changed nothing ("still waiting", "quiet hold"); \`false\` if it did something worth keeping. Consecutive \`noop: true\` ticks collapse in the terminal.
   If it isn't, stop instead (step 6) \u2014 re-arming is a per-turn choice, not a default.
5. **If woken by a \`<task-notification>\`** rather than this prompt: handle the event, then make the same decision. If the loop should continue, call ${ra} again with \`${c}\` and the same 1200\u20131800s \`delaySeconds\` (the ${ma} remains the wake signal; the new wakeup is only the fallback heartbeat). If the event means the work is finished, stop (step 6).
6. **To stop the loop** \u2014 the task is complete, further iterations can't make progress, or the user asked you to stop \u2014 call ${ra} with \`stop: true\` (no other fields) and ${Og} any ${ma} you armed (use ${ES} to find the task ID if it is no longer in context). Stopping is the loop's normal ending \u2014 the user can restart it anytime with /loop.${y()}`;return`${k}

## Action

${O}

${s}

${n}`}let l=e?r.LOOP_FILE_SENTINEL:Zke,u=e?`# /loop \u2014 schedule loop.md tasks

The user invoked \`/loop\` with no prompt (input was empty or just the interval \`${t}\`) and has a loop-tasks file at \`${e.path}\`. Schedule a recurring cron that runs those tasks each tick, then run the first tick immediately.`:`# /loop \u2014 schedule the autonomous default

The user invoked \`/loop\` with no prompt (input was empty or just the interval \`${t}\`). Schedule the autonomous-loop default and then run the first autonomous check immediately.`,g=e?"it expands at fire time to the full loop.md contents on first delivery (and whenever loop.md has been edited since last fire), and to a short reminder on subsequent unchanged fires. The long instructions stay in the cached message-prefix.":"it expands at fire time to the full autonomous-loop instructions on first delivery, and to a short reminder on subsequent fires (the long instructions stay in the cached message-prefix).",w=e?`what's scheduled, the cron expression, the human-readable cadence, that it's running tasks from \`${e.path}\`, that recurring tasks auto-expire after ${BQ} days, and that the user can cancel sooner with ${Lb} (include the job ID).`:`what's scheduled, the cron expression, the human-readable cadence, that recurring tasks auto-expire after ${BQ} days, and that they can cancel sooner with ${Lb} (include the job ID). Mention this is the autonomous default and that the autonomous-loop instructions are baked in.`;return`${u}

## Action

1. Convert \`${t}\` to a 5-field cron expression. Supported suffixes: \`s\` \u2192 ceil to nearest minute, \`m\` (minutes), \`h\` (hours), \`d\` (days). Examples: \`5m\` \u2192 \`*/5 * * * *\`, \`1h\` \u2192 \`0 * * * *\`, \`1d\` \u2192 \`0 0 * * *\`. If the interval doesn't cleanly divide its unit, round to the nearest clean interval and tell the user what you rounded to.
2. Call ${xm} with:
   - \`cron\`: the expression from step 1
   - \`prompt\`: the literal string \`${l}\` \u2014 ${g}
   - \`recurring\`: \`true\`
3. Briefly confirm: ${w}
4. **Then immediately run ${h} now**, following the instructions inlined below. Don't wait for the first cron fire.

${s}

${n}`};function G(){uo({name:cCt,menuDescription:"Repeat a prompt or command on an interval (e.g. /loop 5m /foo)",aliases:["proactive"],description:"Run a prompt or slash command on a recurring interval (e.g. /loop 5m /foo). Omit the interval to let the model self-pace.",whenToUse:'When the user wants to set up a recurring task, poll for status, or run something repeatedly on an interval (e.g. "check the deploy every 5 minutes", "keep running /babysit-prs"). Do NOT invoke for one-off tasks.',get argumentHint(){return"[interval] [prompt]"},userInvocable:!0,argsMayContainSlashCommands:!0,isEnabled:pT,async getPromptForCommand(e,o){let t=e.trim();if(!o.options?.isSkillPreload&&!o.options?.modelScheduledOrigin)i("tengu_loop_command",{has_args:t.length>0,is_interval_only:p.test(t)||m.test(t)});{let s=t.match(m),n=!t,h=p.test(t)||s!==null;if(n||h){let l=s?_(s):t||b,u=await r.readLoopFileAsync(o.storageV5);if(n){if(!o.options?.isSkillPreload&&!o.options?.modelScheduledOrigin)zvn();return[{type:"text",text:f(u,!0,l)}]}return[{type:"text",text:f(u,!1,l)}]}}if(!t)return[{type:"text",text:E()}];if(!o.options?.isSkillPreload&&!o.options?.modelScheduledOrigin)zvn();return[{type:"text",text:A(t)}]}})}export{G as registerLoopSkill};
