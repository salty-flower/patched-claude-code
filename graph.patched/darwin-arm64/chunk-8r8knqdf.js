// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import"./chunk-vpkz5m05.js";import"./chunk-j6bwf1es.js";import"./chunk-s0y4aasp.js";import"./chunk-0ve316az.js";import{Sl,a}from"./chunk-bn8q5mbz.js";import"./chunk-g4zaymy2.js";import"./chunk-n5p9w775.js";import"./chunk-v5t1qnj3.js";import"./chunk-jqgad8sa.js";import"./chunk-e5bq01yj.js";import{S,fA}from"./chunk-cmkfpkth.js";import"./chunk-8w8hykva.js";import"./chunk-fnn4jyg7.js";import"./chunk-hp9wjta4.js";import"./chunk-w2hwjymv.js";import"./chunk-s2t7yx8x.js";import"./chunk-q9edv607.js";import{Hi}from"./chunk-xqt1wr4g.js";import"./chunk-3jdapt8v.js";import{Ns,Tn}from"./chunk-wx0zfkp2.js";import{lte,eA,HI}from"./chunk-ghnc2x4f.js";import"./chunk-nrtq2k0h.js";import"./chunk-xv0afvwf.js";import"./chunk-xv4k48am.js";import"./chunk-2694tw3t.js";import"./chunk-4p8hs6c2.js";import"./chunk-9qmdhtt2.js";import"./chunk-7afycn7k.js";import"./chunk-71nbrcp0.js";import"./chunk-xe7kdqs4.js";import"./chunk-d1bcvf2q.js";import"./chunk-w8df9gvd.js";import"./chunk-px49rrp6.js";import"./chunk-5wdhh6zv.js";import"./chunk-j2rn06t5.js";import"./chunk-nw6r1618.js";import"./chunk-71kt42f0.js";import"./chunk-q2p37kwf.js";import"./chunk-3vs63y6b.js";import"./chunk-8jrjg63q.js";import"./chunk-chrc29xz.js";import"./chunk-j7d3ep7z.js";import"./chunk-1m3qd9sr.js";import"./chunk-jz0pchtb.js";import"./chunk-mmj3hbz2.js";import"./chunk-j4jfcs5p.js";import"./chunk-c5jf7pfc.js";import"./chunk-5bqp1swd.js";import"./chunk-206vdfzn.js";import"./chunk-e8zeqvx6.js";import"./chunk-1a6j9rxs.js";import"./chunk-y7nqdky2.js";import"./chunk-d5w7af8n.js";import"./chunk-36jg6szp.js";import"./chunk-pc3a0ej6.js";import"./chunk-2vqmgw20.js";import"./chunk-8fq8jfr5.js";import"./chunk-mnsvtt5d.js";import"./chunk-evkw8tw9.js";import"./chunk-2d75qem6.js";import"./chunk-3b4m2p9x.js";import"./chunk-kj4qj8nj.js";import"./chunk-5ksbz6ym.js";import"./chunk-j5z57a18.js";import"./chunk-q49t6rqe.js";import"./chunk-7nv8z03d.js";import"./chunk-tacdmpjz.js";import"./chunk-v26jyk82.js";import"./chunk-5frxw1j3.js";import"./chunk-72eb1q9f.js";import"./chunk-t3369g78.js";import"./chunk-z51fvft1.js";import"./chunk-89hmbtyb.js";import"./chunk-q4p2a5sk.js";import"./chunk-w8bzqq59.js";import"./chunk-72tw8dma.js";import"./chunk-pp925av2.js";import"./chunk-m7fp9j7m.js";import"./chunk-j7mzcbtg.js";import"./chunk-ajh54v44.js";import"./chunk-r3k3kcs0.js";import"./chunk-50n50vap.js";import"./chunk-j1j7vbq3.js";import"./chunk-gsnfhe7n.js";import"./chunk-qjvexw1x.js";import"./chunk-j60z9s5g.js";import{W1}from"./chunk-m69vpwgz.js";import"./chunk-jnga0j84.js";import{oC}from"./chunk-jgd5676e.js";import{fLn}from"./chunk-32c0xygj.js";import"./chunk-bb1g3dwv.js";import"./chunk-61fv27gb.js";import"./chunk-5hwqarp7.js";import"./chunk-zts1rcga.js";import"./chunk-cqrjva77.js";import{fAe}from"./chunk-6sqyaegx.js";import"./chunk-gmgsae35.js";import"./chunk-8cxmhp4q.js";import"./chunk-bdw4eba8.js";import"./chunk-yjcv5hh8.js";import"./chunk-5h9w4q7y.js";import"./chunk-p7kxsn0n.js";import"./chunk-bp29f90v.js";import"./chunk-946ge8er.js";import"./chunk-vwmrf92g.js";import"./chunk-xajbcgpa.js";import"./chunk-dpbxybt4.js";import"./chunk-8sfg3638.js";import"./chunk-xhxj67xc.js";import{H}from"./chunk-9p9ys44p.js";import"./chunk-9q51f9rr.js";import{spawnSync as m}from"child_process";function l(t){return`You are guiding an operator from zero to a working **self-hosted runner** for Claude Code on the web. The operator must leave able to do this themselves \u2014 you have typed tools that make *you* efficient, but every API tool you call returns an \`equivalent.ui\` path. **After every API tool call, surface that \`equivalent.ui\` path to the operator** so they can repeat the action without you.

Tools handle what's error-prone (auth, JSON parsing, starting the runner). You narrate what's learnable (UI paths, the product surface, deployment patterns). Environment creation and secret issuance happen in the **Admin UI only** \u2014 never via tools. The operator copies the secret value into a file on disk themselves; you only ever refer to the file path.

If the user passed \`quick\`, run Phase 1 only and stop with a one-paragraph summary.

## Phase 1 \u2014 Prove it works (the "aha")

1. **Create the environment in the Admin UI (operator action).** Tell the operator:

   > "Open ${t}/admin-settings/cloud-environments in your browser (Admin settings \u2192 Cloud environments). Make sure **Allow self-hosted environments** is toggled on, then scroll to the **Self-hosted environments** section and click **New**. Pick a name, click **Create**, then click **Copy environment key** \u2014 the environment key is the environment secret the CLI expects, and it's shown once. Paste it into \`./runner-setup/ENVIRONMENT_SECRET\` on this machine \u2014 I'll \`chmod 600\` it afterwards. Check the box confirming the key is saved and click **Finish**. Then click your new environment to open it, and copy the **Environment ID** from the **Configuration** tab (starts with \`ccpool_\`). Tell me the id and say 'done' when the file is saved."

   When they respond, Bash \`mkdir -p ./runner-setup && chmod 600 ./runner-setup/ENVIRONMENT_SECRET\` and confirm the file exists + is mode 0600 (via Bash \`ls -l\`).

2. **Verify the environment with the API.** Call \`self_hosted_runner_get_pool({pool_id})\` with the id. Confirm \`alive_runner_count == 0\`. If the call 404s, the operator copied the wrong id \u2014 have them re-check the **Environment ID** on the environment's Configuration tab. Print the \`equivalent.ui\` path.

3. **Spawn the local runner.** Call \`self_hosted_runner_spawn_local({secret_file_path: './runner-setup/ENVIRONMENT_SECRET', capacity: 1})\`. Print the returned \`command\` so the operator sees the exact CLI invocation they'd use in production. Then call \`self_hosted_runner_read_health\` once to confirm \`status:"ok"\`; if unreachable, \`self_hosted_runner_tail_log\` and surface the first error line.

4. **Watch the Admin UI flip from 0 \u2192 1 alive.** Poll \`self_hosted_runner_get_pool({pool_id})\` every ~3 seconds (max ~30s) until \`alive_runner_count > 0\`. Also call \`self_hosted_runner_list_runners({pool_id})\` once to show the runner row (lease_expires_at, client_label). Tell the operator to refresh the Cloud environments page and open the environment \u2014 the **Active runners** tile flips to 1. **This is the moment of proof.**

5. **Point them at /code.** *"Go to ${t}/code \u2014 your environment is in the environment picker, listed under the name you gave it. Select it and start a session; it runs on **this** machine."*

## Phase 2 \u2014 Teach the surface (narration only)

Walk them through where each surface lives on the **Cloud environments** admin page. **No required operator action** \u2014 this is orientation. Do NOT call any tools in this phase (the UI is the lesson):

- **Self-hosted environments** section on the **Cloud environments** page (Admin settings \u2192 Cloud environments). The Claude Code settings page still shows the old runner UI during the transition, and its "Self-hosted cloud environments" row is the earlier environment-profile flow \u2014 not the feature you just set up. The Cloud environments page is the canonical home for self-hosted runner configuration.
- **Activity tab \u2192 Runners view**: the runner you just started, with its lease + assigned-session count. **Force-kill** (in the runner row's overflow menu) is here for stuck runners.
- **Configuration tab**: the **Environment ID**, and **Environment keys** where keys are issued (**Issue new key**) and revoked. Explain rotation: issue a new key, deploy it to runners, revoke the old one.
- **Activity tab \u2192 Sessions view**: sessions on this environment, with **Retry** to requeue a stuck one.
- **Diagnostic banners** inside the environment view (above the activity list) surface runner capacity and provisioning problems, and status chips on the environments table show health at a glance \u2014 that's where the product tells them something's wrong.

## Phase 3 \u2014 Graduation

- **Recap card.** Print a compact "what we did, in your terms" \u2014 each step's UI path.
- **Cheat sheet.** Write \`./runner-setup/CHEAT-SHEET.md\` containing:
  - The exact \`command\` returned by \`self_hosted_runner_spawn_local\` (space-separated flags; \`--flag=value\` does NOT work; always pass \`--base-dir\`).
  - UI map: Admin settings \u2192 Cloud environments \u2192 Self-hosted environments \u2192 (environment) \u2192 {stat tiles, Activity (Sessions | Runners), Configuration}.
  - Prometheus: \`http://<host>:{health-port}/metrics\` and the gauge names.
  - "If something breaks: run \`claude self-hosted-runner doctor\`."
  - "For production: see the operator guide PDF (Kubernetes / Docker Compose recipes \u2014 assumes no disk state persists between restarts)."
- **Stop the local runner.** Bash \`kill $(cat ./runner-setup/runner.pid)\` (or the pid the spawn tool returned), then re-poll \`self_hosted_runner_get_pool\` and tell the operator to refresh the Admin UI \u2014 the alive count drops back to 0. Closes the loop on lifecycle.

**Exit criterion:** the operator has seen their runner appear in the Admin UI **and** \`./runner-setup/CHEAT-SHEET.md\` exists on disk.

Production deployment is **taught, not tooled** \u2014 there is no \`deploy_to_k8s\` tool. If asked, explain the k8s/compose pattern and Write a sample manifest; the operator owns their orchestrator.`}var f=["Bash","Read","Write","TodoWrite","TaskCreate","TaskGet","TaskList","TaskUpdate","self_hosted_runner_get_pool","self_hosted_runner_list_runners","self_hosted_runner_list_secrets","self_hosted_runner_read_health","self_hosted_runner_read_metrics","self_hosted_runner_spawn_local","self_hosted_runner_tail_log"].join(","),_="Start the self-hosted runner setup wizard. Greet me and begin Phase 1 (create an environment in the Admin UI). Walk me through one step at a time.";async function F(t,s){if(t.includes("--help")||t.includes("-h")){console.log(`Usage: claude self-hosted-runner setup [args...]

Interactive wizard: walks you from zero to a working self-hosted runner
environment for Claude Code on the web. Creates an environment, spawns a local
runner, verifies it appears in the Admin UI, and writes a CHEAT-SHEET.md.

Any extra args are passed to the underlying Claude Code session.`);return}await fAe(s),W1();let n=oC(s);if(lte(n),H()&&n!==void 0){fA({storageV5:n}),eA(n);let[{composePolicyLimitsClient:o,primePolicyLimitsCache:d},{credentialsStoreFor:c},{primeFastPathCredentials:p}]=await Promise.all([import("./chunk-3prqfb98.js"),import("./chunk-n6f7gcpx.js"),import("./chunk-8tbmck7n.js")]);o({storageV5:n}),await p(c(n)),await d(n),await HI(n)}let r=l(fLn()),h=Sl()?[]:[process.argv[1]],u=t.length>0&&!t[0].startsWith("-")?[]:[_],i=[...h,...u,"--append-system-prompt",r,"--tools",f,"--permission-mode","default",...t];if(a.DEBUG)console.error("[self-hosted-runner:setup] spawning:",S({argv:[process.execPath,...i.map((o)=>o===r?`<${r.length} chars>`:o)]}));let e=m(process.execPath,i,{stdio:"inherit"});if(e.error)return await Tn("cli_self_hosted_setup","spawn_failed"),console.error(`[self-hosted-runner:setup] failed to spawn child: ${e.error.message}`),Hi(1);if(e.status!==null&&e.status!==0||e.signal)await Tn("cli_self_hosted_setup",e.signal?"child_signal":"child_nonzero"),console.error(`[self-hosted-runner:setup] child exited with status ${e.status??"(null)"}${e.signal?`, signal ${e.signal}`:""}`);else await Ns("cli_self_hosted_setup");return console.error("[self-hosted-runner:setup] To continue setup, re-run `claude self-hosted-runner setup` \u2014 resuming the session with `claude --resume`/`-c` will not re-enable the setup tools."),Hi(e.status!==null?e.status:1)}export{F as selfHostedRunnerSetupMain};
