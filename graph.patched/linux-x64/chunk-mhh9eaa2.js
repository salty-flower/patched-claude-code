// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import"./chunk-mnk1rjxv.js";import"./chunk-3whp6z2x.js";import"./chunk-e1n9j4jc.js";import"./chunk-3qjd0g3g.js";import"./chunk-efxr56q3.js";import{Ul,a}from"./chunk-td8fcebs.js";import"./chunk-bj7g1p32.js";import{O}from"./chunk-h9wtyp3p.js";import"./chunk-hpnksvcw.js";import"./chunk-7s5qs9ea.js";import"./chunk-vx4qhc14.js";import{b,wP}from"./chunk-1tk5haqn.js";import"./chunk-mzzfzvay.js";import"./chunk-hvf4zpd9.js";import"./chunk-9g6v0ehs.js";import"./chunk-f2w14jf7.js";import"./chunk-9142y21k.js";import{Ss}from"./chunk-d6xpr8t7.js";import"./chunk-skkcgpsw.js";import{Ti,Sn}from"./chunk-c3bfg9kw.js";import{Noe,tP,WB}from"./chunk-3e93vkg3.js";import"./chunk-1ys2azv7.js";import"./chunk-8mc66c3x.js";import"./chunk-qyjj7h0q.js";import"./chunk-cve7w72k.js";import"./chunk-dbn6fdze.js";import"./chunk-q0tfnkyx.js";import"./chunk-4c106gcs.js";import"./chunk-30dff23n.js";import"./chunk-p2xedy0k.js";import"./chunk-czvna1h1.js";import"./chunk-5k1pty0j.js";import"./chunk-6f5agm7e.js";import"./chunk-n17xw1z0.js";import"./chunk-wcpxyz2e.js";import"./chunk-fpk3t24b.js";import"./chunk-ycpfsm4t.js";import"./chunk-k5nqc3a8.js";import"./chunk-9p6z7v4m.js";import"./chunk-33bqb969.js";import"./chunk-nnhhr1jx.js";import"./chunk-hvd71q4d.js";import"./chunk-qab38xwm.js";import"./chunk-54d75fvc.js";import"./chunk-0n31r0pn.js";import"./chunk-fn8vqr8w.js";import"./chunk-9yqw3cey.js";import"./chunk-kaqfcdks.js";import"./chunk-0558tzyr.js";import"./chunk-tqraa7nr.js";import"./chunk-s6q6qyzp.js";import"./chunk-cews3k3h.js";import"./chunk-jtxx7y7p.js";import"./chunk-nfmdzyhb.js";import"./chunk-2benbg1m.js";import"./chunk-0pf46r3n.js";import"./chunk-znja1j7d.js";import"./chunk-2r6jss2t.js";import"./chunk-mzeqwxfp.js";import"./chunk-x5ty8x5x.js";import"./chunk-pp9fwat1.js";import"./chunk-cwves0z5.js";import"./chunk-8ae0db2r.js";import"./chunk-k45y0n34.js";import"./chunk-em2nh00t.js";import"./chunk-f39k86ma.js";import"./chunk-e20rp2e0.js";import"./chunk-d2fvt8sx.js";import"./chunk-gq4w1rkv.js";import"./chunk-n9r1w949.js";import{F4}from"./chunk-bxevceft.js";import"./chunk-cwwp3bka.js";import{Ox}from"./chunk-4yxec46k.js";import{mUn}from"./chunk-j8g2mrw5.js";import"./chunk-xcxw600k.js";import"./chunk-h6gahpxg.js";import"./chunk-74ahv9hc.js";import"./chunk-2e7jdyrh.js";import"./chunk-vzf7tph9.js";import{vxe}from"./chunk-mhrv825d.js";import"./chunk-7k0k6b98.js";import"./chunk-n1qe7nz7.js";import"./chunk-eywm5ngc.js";import"./chunk-se3vf90q.js";import"./chunk-5t955j7t.js";import"./chunk-sqdvc1yq.js";import"./chunk-1pyajec6.js";import"./chunk-429awvea.js";import"./chunk-s0y0sg0y.js";import"./chunk-c6hyaq7k.js";import"./chunk-y7bjs1t6.js";import{spawnSync as m}from"child_process";function l(t){return`You are guiding an operator from zero to a working **self-hosted runner** for Claude Code on the web. The operator must leave able to do this themselves \u2014 you have typed tools that make *you* efficient, but every API tool you call returns an \`equivalent.ui\` path. **After every API tool call, surface that \`equivalent.ui\` path to the operator** so they can repeat the action without you.

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

Any extra args are passed to the underlying Claude Code session.`);return}await vxe(s),F4();let n=Ox(s);if(Noe(n),O()&&n!==void 0){wP({storageV5:n}),tP(n);let[{composePolicyLimitsClient:o,primePolicyLimitsCache:d},{credentialsStoreFor:c},{primeFastPathCredentials:p}]=await Promise.all([import("./chunk-pzs06987.js"),import("./chunk-7akz7e06.js"),import("./chunk-xb8es16s.js")]);o({storageV5:n}),await p(c(n)),await d(n),await WB(n)}let r=l(mUn()),h=Ul()?[]:[process.argv[1]],u=t.length>0&&!t[0].startsWith("-")?[]:[_],i=[...h,...u,"--append-system-prompt",r,"--tools",f,"--permission-mode","default",...t];if(a.DEBUG)console.error("[self-hosted-runner:setup] spawning:",b({argv:[process.execPath,...i.map((o)=>o===r?`<${r.length} chars>`:o)]}));let e=m(process.execPath,i,{stdio:"inherit"});if(e.error)return await Sn("cli_self_hosted_setup","spawn_failed"),console.error(`[self-hosted-runner:setup] failed to spawn child: ${e.error.message}`),Ss(1);if(e.status!==null&&e.status!==0||e.signal)await Sn("cli_self_hosted_setup",e.signal?"child_signal":"child_nonzero"),console.error(`[self-hosted-runner:setup] child exited with status ${e.status??"(null)"}${e.signal?`, signal ${e.signal}`:""}`);else await Ti("cli_self_hosted_setup");return console.error("[self-hosted-runner:setup] To continue setup, re-run `claude self-hosted-runner setup` \u2014 resuming the session with `claude --resume`/`-c` will not re-enable the setup tools."),Ss(e.status!==null?e.status:1)}export{D as selfHostedRunnerSetupMain};
