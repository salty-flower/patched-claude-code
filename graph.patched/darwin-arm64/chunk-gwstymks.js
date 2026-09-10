// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import"./chunk-3k7pa7mk.js";import"./chunk-awrvr02y.js";import"./chunk-3kadfzjs.js";import"./chunk-7tpgnqqk.js";import"./chunk-w6n61axt.js";import{Lu,a}from"./chunk-qymratxs.js";import"./chunk-cet8na02.js";import{M}from"./chunk-wmtek349.js";import"./chunk-jww0ztav.js";import"./chunk-jxvdfgn0.js";import"./chunk-wkyng8j1.js";import{b,hR}from"./chunk-w930ag8r.js";import"./chunk-fz55wskw.js";import"./chunk-0v0wzs89.js";import"./chunk-e0gvmsm3.js";import"./chunk-554z0m6d.js";import"./chunk-t8z8yg5e.js";import{_s}from"./chunk-mq2xkhyj.js";import"./chunk-mx473n83.js";import{Pi,vn}from"./chunk-qc0xda2j.js";import{aae,lR,SO}from"./chunk-vryy7b5x.js";import"./chunk-1swgmcv7.js";import"./chunk-2kk5r9ez.js";import"./chunk-1qb0n0qf.js";import"./chunk-2rwvzqjc.js";import"./chunk-2e3zzta4.js";import"./chunk-1rwk4zv5.js";import"./chunk-v6bnm6m1.js";import"./chunk-7rf51wwn.js";import"./chunk-dzrwt8xb.js";import"./chunk-71dy1chz.js";import"./chunk-pqwwfxy7.js";import"./chunk-jreee4z9.js";import"./chunk-4kwsawbv.js";import"./chunk-az7e2tjv.js";import"./chunk-tfmhv9d3.js";import"./chunk-ddafccqq.js";import"./chunk-mrb6zwbg.js";import"./chunk-6qn08fa6.js";import"./chunk-ja8knfm8.js";import"./chunk-e3rr1gh2.js";import"./chunk-1wykq8yr.js";import"./chunk-0at68b1q.js";import"./chunk-wtkjh5e3.js";import"./chunk-herm3ypf.js";import"./chunk-hs6h748p.js";import"./chunk-vnz3x6qp.js";import"./chunk-dt93d1mc.js";import"./chunk-ydfa467f.js";import"./chunk-k2g2a0ht.js";import"./chunk-82syb43r.js";import"./chunk-2qz5gct0.js";import"./chunk-yqjvt149.js";import"./chunk-543x12r6.js";import"./chunk-hndhb8as.js";import"./chunk-93ete5jm.js";import"./chunk-ex1zbngg.js";import"./chunk-6yh8411d.js";import"./chunk-4nssmbdg.js";import"./chunk-23qdenmd.js";import"./chunk-62vz25mj.js";import"./chunk-jh9jc98c.js";import"./chunk-7zp201hw.js";import"./chunk-t77qcb29.js";import"./chunk-d7xqqjds.js";import"./chunk-12bhy101.js";import"./chunk-pcpcxqfq.js";import"./chunk-damz565h.js";import"./chunk-hjmm0v46.js";import"./chunk-as958m82.js";import"./chunk-gdxma5w6.js";import{A$}from"./chunk-ys1t0ap2.js";import"./chunk-wk80jc1n.js";import{ik}from"./chunk-06gsx1e4.js";import{AVn}from"./chunk-qgtmyk8n.js";import"./chunk-86hmwsb6.js";import"./chunk-9pvbzahe.js";import"./chunk-wsr3ak69.js";import"./chunk-510v83w9.js";import"./chunk-14cxg64x.js";import{aDe}from"./chunk-4310r8nz.js";import"./chunk-116emam7.js";import"./chunk-c1qwyngg.js";import"./chunk-ep9a7r42.js";import"./chunk-2s1d68xx.js";import"./chunk-j6enpas3.js";import"./chunk-pp1ggth1.js";import"./chunk-c7cjjpnh.js";import"./chunk-7ctrabpn.js";import"./chunk-m13zrw5b.js";import"./chunk-5c50n20w.js";import"./chunk-v643fbk1.js";import"./chunk-aynexwte.js";import"./chunk-5dnafksn.js";import{spawnSync as m}from"child_process";function l(t){return`You are guiding an operator from zero to a working **self-hosted runner** for Claude Code on the web. The operator must leave able to do this themselves \u2014 you have typed tools that make *you* efficient, but every API tool you call returns an \`equivalent.ui\` path. **After every API tool call, surface that \`equivalent.ui\` path to the operator** so they can repeat the action without you.

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

Any extra args are passed to the underlying Claude Code session.`);return}await aDe(s),A$();let n=ik(s);if(aae(n),M()&&n!==void 0){hR({storageV5:n}),lR(n);let[{composePolicyLimitsClient:o,primePolicyLimitsCache:d},{credentialsStoreFor:c},{primeFastPathCredentials:p}]=await Promise.all([import("./chunk-yfzjaz7n.js"),import("./chunk-r67vmvzz.js"),import("./chunk-nbr593xv.js")]);o({storageV5:n}),await p(c(n)),await d(n),await SO(n)}let r=l(AVn()),h=Lu()?[]:[process.argv[1]],u=t.length>0&&!t[0].startsWith("-")?[]:[_],i=[...h,...u,"--append-system-prompt",r,"--tools",f,"--permission-mode","default",...t];if(a.DEBUG)console.error("[self-hosted-runner:setup] spawning:",b({argv:[process.execPath,...i.map((o)=>o===r?`<${r.length} chars>`:o)]}));let e=m(process.execPath,i,{stdio:"inherit"});if(e.error)return await vn("cli_self_hosted_setup","spawn_failed"),console.error(`[self-hosted-runner:setup] failed to spawn child: ${e.error.message}`),_s(1);if(e.status!==null&&e.status!==0||e.signal)await vn("cli_self_hosted_setup",e.signal?"child_signal":"child_nonzero"),console.error(`[self-hosted-runner:setup] child exited with status ${e.status??"(null)"}${e.signal?`, signal ${e.signal}`:""}`);else await Pi("cli_self_hosted_setup");return console.error("[self-hosted-runner:setup] To continue setup, re-run `claude self-hosted-runner setup` \u2014 resuming the session with `claude --resume`/`-c` will not re-enable the setup tools."),_s(e.status!==null?e.status:1)}export{F as selfHostedRunnerSetupMain};
