// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import"./chunk-d8qjp6nk.js";import"./chunk-xg0fb0fx.js";import"./chunk-1k8htemc.js";import"./chunk-vp9rx3bq.js";import"./chunk-xenybawd.js";import{nc,a}from"./chunk-1bwwmttj.js";import"./chunk-6n7yk222.js";import{N}from"./chunk-mtqrv1h8.js";import"./chunk-kse90n8m.js";import"./chunk-0rpkhv24.js";import"./chunk-59zxrwfh.js";import{S,KM}from"./chunk-cmg3b5hg.js";import"./chunk-c413mrzf.js";import"./chunk-p9k2m8jj.js";import"./chunk-4thwge0q.js";import"./chunk-8yrsa1e1.js";import{vs}from"./chunk-v9gw8e9x.js";import"./chunk-nx6yj2w6.js";import{Ni,En}from"./chunk-t5df5mky.js";import{Uae,EM,z1}from"./chunk-ce4ppmnp.js";import"./chunk-v17gpk1z.js";import"./chunk-4g3h89r1.js";import"./chunk-8fer6cmv.js";import"./chunk-03bbjp25.js";import"./chunk-np2nmzg7.js";import"./chunk-2j94m3ye.js";import"./chunk-v365e4sa.js";import"./chunk-g07wjpxf.js";import"./chunk-5zshk7te.js";import"./chunk-ndrx786m.js";import"./chunk-hep7dzja.js";import"./chunk-f4019nt1.js";import"./chunk-dz6vh6s7.js";import"./chunk-b71jaj6f.js";import"./chunk-qrernxw9.js";import"./chunk-6q4s8bgb.js";import"./chunk-6ebnzmdf.js";import"./chunk-teade921.js";import"./chunk-sp4f0zv3.js";import"./chunk-vzc7jamd.js";import"./chunk-169nbefr.js";import"./chunk-jwp1p5wz.js";import"./chunk-y0j7napd.js";import"./chunk-t0crpn1e.js";import"./chunk-04zqxw9f.js";import"./chunk-yk423ezb.js";import"./chunk-7wydher3.js";import"./chunk-dqr9knfd.js";import"./chunk-gkn2mx32.js";import"./chunk-kzk5z6sx.js";import"./chunk-zrk5zde9.js";import"./chunk-qz4fvetx.js";import"./chunk-nf00mahq.js";import"./chunk-mbvr1efr.js";import"./chunk-nf6pxfyh.js";import"./chunk-7eyveqkg.js";import"./chunk-gy5b0v9q.js";import"./chunk-0rxpr8cx.js";import"./chunk-eyj5z1mk.js";import"./chunk-19cvhbkw.js";import"./chunk-z63fttm6.js";import"./chunk-vc10e2e1.js";import"./chunk-1j4axej0.js";import"./chunk-5hega5z8.js";import"./chunk-x2rz8f0q.js";import"./chunk-664fvn0k.js";import"./chunk-kk3j6egn.js";import"./chunk-7523jky1.js";import"./chunk-7xfwsz67.js";import{t5}from"./chunk-ebd74y1j.js";import"./chunk-cyvjweta.js";import{YH}from"./chunk-xpe90pzz.js";import{F3n}from"./chunk-4anrqjsv.js";import"./chunk-asw9cf3e.js";import"./chunk-nv4mpa9r.js";import"./chunk-n1vwdkeq.js";import"./chunk-1zd16ad4.js";import"./chunk-nh7tp95h.js";import{JOe}from"./chunk-sjxy7whb.js";import"./chunk-ehsk7vqg.js";import"./chunk-4g6n3ads.js";import"./chunk-2kpnzy52.js";import"./chunk-2xwn1rzd.js";import"./chunk-86c2fkfe.js";import"./chunk-zmm4rb64.js";import"./chunk-c9rvzzsk.js";import"./chunk-a436d8v3.js";import"./chunk-2320rhap.js";import"./chunk-mvtzn48h.js";import"./chunk-mf44bs0z.js";import"./chunk-gdmteaec.js";import"./chunk-5md0kwdx.js";import{spawnSync as m}from"child_process";function l(t){return`You are guiding an operator from zero to a working **self-hosted runner** for Claude Code on the web. The operator must leave able to do this themselves \u2014 you have typed tools that make *you* efficient, but every API tool you call returns an \`equivalent.ui\` path. **After every API tool call, surface that \`equivalent.ui\` path to the operator** so they can repeat the action without you.

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

Production deployment is **taught, not tooled** \u2014 there is no \`deploy_to_k8s\` tool. If asked, explain the k8s/compose pattern and Write a sample manifest; the operator owns their orchestrator.`}var f=["Bash","Read","Write","TodoWrite","TaskCreate","TaskGet","TaskList","TaskUpdate","self_hosted_runner_get_pool","self_hosted_runner_list_runners","self_hosted_runner_list_secrets","self_hosted_runner_read_health","self_hosted_runner_read_metrics","self_hosted_runner_spawn_local","self_hosted_runner_tail_log"].join(","),_="Start the self-hosted runner setup wizard. Greet me and begin Phase 1 (create an environment in the Admin UI). Walk me through one step at a time.";async function D(t,s){if(t.includes("--help")||t.includes("-h")){console.log(`Usage: claude self-hosted-runner setup [args...]

Interactive wizard: walks you from zero to a working self-hosted runner
environment for Claude Code on the web. Creates an environment, spawns a local
runner, verifies it appears in the Admin UI, and writes a CHEAT-SHEET.md.

Any extra args are passed to the underlying Claude Code session.`);return}await JOe(s),t5();let n=YH(s);if(Uae(n),N()&&n!==void 0){KM({storageV5:n}),EM(n);let[{composePolicyLimitsClient:o,primePolicyLimitsCache:d},{credentialsStoreFor:c},{primeFastPathCredentials:p}]=await Promise.all([import("./chunk-eabzs1dj.js"),import("./chunk-jd3kz44k.js"),import("./chunk-a9t9tdr8.js")]);o({storageV5:n}),await p(c(n)),await d(n),await z1(n)}let r=l(F3n()),h=nc()?[]:[process.argv[1]],u=t.length>0&&!t[0].startsWith("-")?[]:[_],i=[...h,...u,"--append-system-prompt",r,"--tools",f,"--permission-mode","default",...t];if(a.DEBUG)console.error("[self-hosted-runner:setup] spawning:",S({argv:[process.execPath,...i.map((o)=>o===r?`<${r.length} chars>`:o)]}));let e=m(process.execPath,i,{stdio:"inherit"});if(e.error)return await En("cli_self_hosted_setup","spawn_failed"),console.error(`[self-hosted-runner:setup] failed to spawn child: ${e.error.message}`),vs(1);if(e.status!==null&&e.status!==0||e.signal)await En("cli_self_hosted_setup",e.signal?"child_signal":"child_nonzero"),console.error(`[self-hosted-runner:setup] child exited with status ${e.status??"(null)"}${e.signal?`, signal ${e.signal}`:""}`);else await Ni("cli_self_hosted_setup");return console.error("[self-hosted-runner:setup] To continue setup, re-run `claude self-hosted-runner setup` \u2014 resuming the session with `claude --resume`/`-c` will not re-enable the setup tools."),vs(e.status!==null?e.status:1)}export{D as selfHostedRunnerSetupMain};
