// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{im}from"./chunk-zhtwayh2.js";import"./chunk-fkz3e4t3.js";import"./chunk-7wmynp0n.js";import"./chunk-r5q3158s.js";import{i}from"./chunk-vtd04czk.js";import"./chunk-gnrvsty9.js";import"./chunk-m0jywms0.js";import{ht,gt}from"./chunk-n495pc0t.js";import"./chunk-4rr1ghkj.js";import"./chunk-3qjd0g3g.js";import"./chunk-h7ha2q61.js";import{a}from"./chunk-dq2s4wjn.js";import"./chunk-9g7wf9qr.js";import"./chunk-084v19yj.js";import"./chunk-5q90j22t.js";import"./chunk-643msr15.js";import"./chunk-j317bre5.js";import"./chunk-c5ajdz5z.js";import"./chunk-f2w14jf7.js";import"./chunk-hzsc62cn.js";import"./chunk-0qz53fdq.js";import"./chunk-jat129zj.js";import"./chunk-dsq5gcfe.js";import"./chunk-rbvf4vfx.js";import"./chunk-7t0edxg3.js";import"./chunk-1rkars97.js";import"./chunk-qs8h438x.js";import"./chunk-3pft38xm.js";import"./chunk-rm74k23p.js";import"./chunk-6mr2v1ks.js";import"./chunk-dhrcn786.js";import"./chunk-q4eej6rr.js";import"./chunk-2rhkgebc.js";import"./chunk-sxccpdbg.js";import"./chunk-jy0p4wg8.js";import"./chunk-0masdjfa.js";import"./chunk-pe4nmbcg.js";import"./chunk-t4hc7q7h.js";import"./chunk-bky8qhrb.js";import"./chunk-hakb056a.js";import"./chunk-wxx3jwpj.js";import"./chunk-1y4ds8dy.js";import"./chunk-rgyht4ht.js";import"./chunk-6a9jfng9.js";import"./chunk-1gcpv8sw.js";import"./chunk-7z7x82kj.js";import"./chunk-404xhkzs.js";import"./chunk-sgt1b7h0.js";import"./chunk-n031qbtd.js";import{On}from"./chunk-d5e21f8p.js";import"./chunk-gyxp7wp6.js";import"./chunk-qhv99t4f.js";import"./chunk-r2ztspyj.js";import"./chunk-hernhfa4.js";import"./chunk-kswf1s4a.js";import"./chunk-6pky15m5.js";import"./chunk-q3h60esw.js";import"./chunk-ghd3nyd4.js";import"./chunk-ped3cn2k.js";import"./chunk-w2q5yc2x.js";import"./chunk-q31h7y51.js";import"./chunk-rvca8fd4.js";import"./chunk-jd1wva8b.js";import"./chunk-kyxky0qb.js";import"./chunk-r147enn1.js";import"./chunk-c8mj69qr.js";import"./chunk-ehv9s8sq.js";import"./chunk-31b8gaj2.js";import"./chunk-kk1kt2t6.js";import"./chunk-as5pvze7.js";import"./chunk-8r9avn73.js";import{Mgn}from"./chunk-ncrqthcq.js";import{Pt}from"./chunk-2q73xrvs.js";import{ws}from"./chunk-5q47bzt0.js";import"./chunk-rp83cx0a.js";import"./chunk-9d2zgq9g.js";import{Kv,PY}from"./chunk-tsnanb8e.js";import{Gf,FS,HY,pC}from"./chunk-mb2x5t12.js";import"./chunk-47fwyp5z.js";import{Jr}from"./chunk-0pdgmnn6.js";import"./chunk-fqv2c0zc.js";import"./chunk-qxe26f84.js";import"./chunk-vx4vnh36.js";import"./chunk-tapqtxqw.js";import"./chunk-dn1ng2gf.js";import"./chunk-1nccnwh0.js";import"./chunk-v3gsmtah.js";import"./chunk-jpbp3vxj.js";import{oo}from"./chunk-n7zmtfbc.js";import"./chunk-3hs7jdtb.js";import"./chunk-6mc32c4t.js";import"./chunk-v55qjtf1.js";import"./chunk-e595chgr.js";import"./chunk-wkcf7pcw.js";import"./chunk-xx88bbs2.js";import{XL}from"./chunk-ybjkxygr.js";import{dSt}from"./chunk-848t3d1m.js";import{Vi,AAe,Cre,Jm,mT}from"./chunk-pfdwdj59.js";import"./chunk-4f0aetqn.js";import"./chunk-a4yjcp97.js";import"./chunk-jthp2dgf.js";import"./chunk-r6gsvc4p.js";import"./chunk-kwzspfbf.js";import{ra}from"./chunk-9rzmpagp.js";import"./chunk-rpg2kszv.js";import"./chunk-a1w965p7.js";import"./chunk-vycx69he.js";import"./chunk-j7n34nkk.js";import"./chunk-j9kep6b4.js";import"./chunk-57mx6dv2.js";import"./chunk-j29ds5jh.js";import"./chunk-sfmkt7ws.js";import"./chunk-00fsqktf.js";import"./chunk-hv9s9qdn.js";import"./chunk-s37nbkm2.js";var r=import.meta.require("./chunk-635hz9xe.js"),b="10m";function y(){return PY()?` Before you stop, send a one-line outcome via ${Kv} \u2014 the user may be away and waiting to hear it's done. Skip this if you're stopping because the user just told you to; they're already here.`:""}var p=/^\d+[smhd]$/,m=/^every\s+(\d+)\s*(s|sec|secs|second|seconds|m|min|mins|minute|minutes|h|hr|hrs|hour|hours|d|day|days)\s*$/i;function _(e){let o=e[1],t=e[2].toLowerCase();if(t.startsWith("s"))return`${o}s`;if(t.startsWith("h"))return`${o}h`;if(t.startsWith("d"))return`${o}d`;return`${o}m`}var N="| Interval pattern      | Cron expression     | Notes                                    |\n|-----------------------|---------------------|------------------------------------------|\n| `Nm` where N \u2264 59   | `*/N * * * *`     | every N minutes                          |\n| `Nm` where N \u2265 60   | `0 */H * * *`     | round to hours (H = N/60, must divide 24)|\n| `Nh` where N \u2264 23   | `0 */N * * *`     | every N hours                            |\n| `Nd`                | `0 0 */N * *`     | every N days at midnight local           |\n| `Ns`                | treat as `ceil(N/60)m` | cron minimum granularity is 1 minute  |\n\n**If the interval doesn't cleanly divide its unit** (e.g. `7m` \u2192 `*/7 * * * *` gives uneven gaps at :56\u2192:00; `90m` \u2192 1.5h which cron can't express), pick the nearest clean interval and tell the user what you rounded to before scheduling.";function T(){if(!a.CLAUDE_CODE_REMOTE&&!ht()&&On()&&gt()&&Pt("allow_remote_sessions")&&Pt(XL)&&im().length===0)return`
## Offer cloud first

Before any scheduling step, check whether EITHER is true:
- the parsed interval (rule 1 or 2) is **\u226560 minutes**, or
- regardless of which rule matched, the original input uses daily phrasing ("every morning", "daily", "every day", "each night", "every weekday")

If either is true, call ${ws} first:
- \`question\`: "This loop stops when you close this session. Set it up as a cloud schedule instead so it keeps running?"
- \`header\`: "Schedule"
- \`options\`: \`[{label: "Cloud schedule (recommended)", description: "Runs in Anthropic's cloud even after you close this session"}, {label: "This session only", description: "Runs in this terminal until you exit"}]\`

If they pick **Cloud schedule**: do NOT call ${Gf}. Invoke the \`schedule\` skill directly via the ${oo} tool with \`args\` set to their original input verbatim (e.g. \`${oo}({skill: "schedule", args: "every morning tell me a joke"})\`), then follow that skill's instructions to completion. Do NOT tell the user to run /schedule themselves. **Then stop \u2014 do not continue to any section below** (no ${Gf}, no ${Vi}, no "execute the prompt now").
If they pick **This session only**:
- If the trigger was a parsed \u226560-minute interval (rule 1 or 2): continue below with that interval.
- If the trigger was daily phrasing only (rule 3, no parsed interval): do NOT call ${Gf}. Explain that a daily-cadence loop won't fire before this session closes, so there's nothing useful to schedule locally \u2014 suggest they either pick Cloud schedule, or re-run \`/loop\` with an explicit shorter interval (e.g. \`/loop 1h <prompt>\`) if they want a session loop. Then stop.
If neither trigger condition was met: continue below.
`;return""}function I(){if(!a.CLAUDE_CODE_REMOTE&&!ht()&&On()&&gt()&&Pt("allow_remote_sessions")&&Pt(XL)){if(im().length>0)return` End the confirmation with this exact line on its own, italicized: ${"`_Runs until you close this session \xB7 For durable cloud-based loops, use /schedule_`"}`;return` Only if you did NOT show the cloud-offer ${ws} above (i.e., neither trigger condition applied), end the confirmation with this exact line on its own, italicized: ${"`_Runs until you close this session \xB7 For durable cloud-based loops, use /schedule_`"}. If the user already answered that question, omit this line.`}return""}function E(){return`Usage: /loop [interval] <prompt>

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
2. **If the next run is gated on an event** (CI finishing, a log line matching, a file changing, a PR comment) and no ${ra} is already running for it: arm one now with \`persistent: true\`. Its events arrive as \`<task-notification>\` messages and wake this loop immediately \u2014 you do not wait for the ${Vi} deadline. Arm once; on later iterations call ${mT} first and skip this step if a monitor is already running.
3. **Briefly confirm**: that you're self-pacing, whether a ${ra} is the primary wake signal, that you ran the task now, and what fallback delay you're about to pick. Write this as text *before* calling ${Vi} \u2014 the turn ends as soon as that tool returns.
4. **Then, as the last action of this turn, decide whether the loop continues.** If the task needs another iteration, call ${Vi} with:
   - \`delaySeconds\`: with a ${ra} armed this is the **fallback heartbeat** \u2014 how long to wait if no event fires (lean 1200\u20131800s; idle ticks more frequent than the task needs are pure overhead). Without a ${ra} this is the cadence \u2014 pick based on what you observed. Read the tool's own description for cache-aware delay guidance.
   - \`reason\`: one short sentence on why you picked that delay.
   - \`prompt\`: the full original /loop input verbatim, prefixed with \`/loop \` so the next firing re-enters this skill and continues the loop. For example, if the user typed \`/loop check the deploy\`, pass \`/loop check the deploy\` as the prompt.
   - \`noop\`: \`true\` if this tick changed nothing ("still waiting", "quiet hold"); \`false\` if it did something worth keeping. Consecutive \`noop: true\` ticks collapse in the terminal.
   If it doesn't need another iteration, stop instead (step 6) \u2014 re-arming is a per-turn choice, not a default.
5. **If you were woken by a \`<task-notification>\`** rather than this prompt: handle the event in the context of the loop task, then make the same decision. If the loop should continue, call ${Vi} again with the same \`prompt\` and the same 1200\u20131800s \`delaySeconds\` from step 4 (the ${ra} remains the wake signal; the new wakeup is only the fallback heartbeat). If the event means the work is finished, stop (step 6).
6. **To stop the loop** \u2014 the task is complete, further iterations can't make progress, or the user asked you to stop \u2014 call ${Vi} with \`stop: true\` (no other fields) and ${Jm} any ${ra} you armed (use ${mT} to find the task ID if it is no longer in context). Stopping is the loop's normal ending \u2014 the user can restart it anytime with /loop.${y()}`;return`# /loop \u2014 schedule a recurring or self-paced prompt

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
1. Call ${Gf} with: \`cron\` (the expression above), \`prompt\` (the parsed prompt verbatim), \`recurring: true\`.
2. Briefly confirm: what's scheduled, the cron expression, the human-readable cadence, that recurring tasks auto-expire after ${HY} days, and that the user can cancel sooner with ${FS} (include the job ID).${I()}
3. **Then immediately execute the parsed prompt now** \u2014 don't wait for the first cron fire. If it's a slash command, invoke it via the Skill tool; otherwise act on it directly.

## Dynamic mode (rule 3 \u2014 no interval)

${o}

## Input

${e}`}var f=(e,o,t)=>{let s=e?`## Loop tasks (from ${e.path})`:"## Autonomous-loop instructions (for the immediate execution and every fire)",n;if(e)n=e.content;else r.logAutonomousLoopActivation(),n=r.getAutonomousLoopPreamble();let h=e?"the loop.md tasks":"the autonomous check";if(o){let c=e?r.LOOP_FILE_DYNAMIC_SENTINEL:Cre,k=e?`# /loop \u2014 loop.md tasks with dynamic pacing

The user invoked \`/loop\` with no prompt and no interval and has a loop-tasks file at \`${e.path}\`. Run those tasks now, then self-pace the next iteration via ${Vi} \u2014 no cron.`:`# /loop \u2014 autonomous default with dynamic pacing

The user invoked \`/loop\` with no prompt and no interval. Run the autonomous check now, then self-pace the next iteration via ${Vi} \u2014 no cron.`,v=e?`that you're running tasks from \`${e.path}\` in dynamic-pacing mode, that you ran the first tick now`:"that this is the autonomous default in dynamic-pacing mode, that you ran the check now",O=`1. **Run ${h} now**, following the instructions inlined below.
2. **If the next tick is gated on an event** (CI finishing, a PR comment, a log line) and no ${ra} is already running for it: arm one now with \`persistent: true\`. Its events wake this loop immediately \u2014 you do not wait for the ${Vi} deadline. Arm once; on later ticks call ${mT} first and skip if a monitor is already running.
3. **Briefly confirm**: ${v}, whether a ${ra} is the primary wake signal, and what fallback delay you're about to pick. Write this as text *before* calling ${Vi} \u2014 the turn ends as soon as that tool returns.
4. **Then, as the last action of this turn, decide whether the loop continues.** If the next check is worth running, call ${Vi} with:
   - \`delaySeconds\`: with a ${ra} armed this is the fallback heartbeat (lean 1200\u20131800s). Without one, pick based on what you observed this turn \u2014 quiet branch? wait longer. Lots in flight? wait shorter. Read the tool's own description for cache-aware delay guidance.
   - \`reason\`: one short sentence on why you picked that delay.
   - \`prompt\`: the literal string \`${c}\` \u2014 the dynamic-mode sentinel expands at fire time to the full instructions (first fire / first fire post-compact / loop.md edited) or a dynamic-pacing-specific short reminder (subsequent fires). Do not pass the full instructions; that is handled automatically.
   - \`noop\`: \`true\` if this tick changed nothing ("still waiting", "quiet hold"); \`false\` if it did something worth keeping. Consecutive \`noop: true\` ticks collapse in the terminal.
   If it isn't, stop instead (step 6) \u2014 re-arming is a per-turn choice, not a default.
5. **If woken by a \`<task-notification>\`** rather than this prompt: handle the event, then make the same decision. If the loop should continue, call ${Vi} again with \`${c}\` and the same 1200\u20131800s \`delaySeconds\` (the ${ra} remains the wake signal; the new wakeup is only the fallback heartbeat). If the event means the work is finished, stop (step 6).
6. **To stop the loop** \u2014 the task is complete, further iterations can't make progress, or the user asked you to stop \u2014 call ${Vi} with \`stop: true\` (no other fields) and ${Jm} any ${ra} you armed (use ${mT} to find the task ID if it is no longer in context). Stopping is the loop's normal ending \u2014 the user can restart it anytime with /loop.${y()}`;return`${k}

## Action

${O}

${s}

${n}`}let l=e?r.LOOP_FILE_SENTINEL:AAe,u=e?`# /loop \u2014 schedule loop.md tasks

The user invoked \`/loop\` with no prompt (input was empty or just the interval \`${t}\`) and has a loop-tasks file at \`${e.path}\`. Schedule a recurring cron that runs those tasks each tick, then run the first tick immediately.`:`# /loop \u2014 schedule the autonomous default

The user invoked \`/loop\` with no prompt (input was empty or just the interval \`${t}\`). Schedule the autonomous-loop default and then run the first autonomous check immediately.`,g=e?"it expands at fire time to the full loop.md contents on first delivery (and whenever loop.md has been edited since last fire), and to a short reminder on subsequent unchanged fires. The long instructions stay in the cached message-prefix.":"it expands at fire time to the full autonomous-loop instructions on first delivery, and to a short reminder on subsequent fires (the long instructions stay in the cached message-prefix).",w=e?`what's scheduled, the cron expression, the human-readable cadence, that it's running tasks from \`${e.path}\`, that recurring tasks auto-expire after ${HY} days, and that the user can cancel sooner with ${FS} (include the job ID).`:`what's scheduled, the cron expression, the human-readable cadence, that recurring tasks auto-expire after ${HY} days, and that they can cancel sooner with ${FS} (include the job ID). Mention this is the autonomous default and that the autonomous-loop instructions are baked in.`;return`${u}

## Action

1. Convert \`${t}\` to a 5-field cron expression. Supported suffixes: \`s\` \u2192 ceil to nearest minute, \`m\` (minutes), \`h\` (hours), \`d\` (days). Examples: \`5m\` \u2192 \`*/5 * * * *\`, \`1h\` \u2192 \`0 * * * *\`, \`1d\` \u2192 \`0 0 * * *\`. If the interval doesn't cleanly divide its unit, round to the nearest clean interval and tell the user what you rounded to.
2. Call ${Gf} with:
   - \`cron\`: the expression from step 1
   - \`prompt\`: the literal string \`${l}\` \u2014 ${g}
   - \`recurring\`: \`true\`
3. Briefly confirm: ${w}
4. **Then immediately run ${h} now**, following the instructions inlined below. Don't wait for the first cron fire.

${s}

${n}`};function G(){Jr({name:dSt,menuDescription:"Repeat a prompt or command on an interval (e.g. /loop 5m /foo)",aliases:["proactive"],description:"Run a prompt or slash command on a recurring interval (e.g. /loop 5m /foo). Omit the interval to let the model self-pace.",whenToUse:'When the user wants to set up a recurring task, poll for status, or run something repeatedly on an interval (e.g. "check the deploy every 5 minutes", "keep running /babysit-prs"). Do NOT invoke for one-off tasks.',get argumentHint(){return"[interval] [prompt]"},userInvocable:!0,argsMayContainSlashCommands:!0,isEnabled:pC,async getPromptForCommand(e,o){let t=e.trim();if(!o.options?.isSkillPreload&&!o.options?.modelScheduledOrigin)i("tengu_loop_command",{has_args:t.length>0,is_interval_only:p.test(t)||m.test(t)});{let s=t.match(m),n=!t,h=p.test(t)||s!==null;if(n||h){let l=s?_(s):t||b,u=await r.readLoopFileAsync(o.storageV5);if(n){if(!o.options?.isSkillPreload&&!o.options?.modelScheduledOrigin)Mgn();return[{type:"text",text:f(u,!0,l)}]}return[{type:"text",text:f(u,!1,l)}]}}if(!t)return[{type:"text",text:E()}];if(!o.options?.isSkillPreload&&!o.options?.modelScheduledOrigin)Mgn();return[{type:"text",text:A(t)}]}})}export{G as registerLoopSkill};
