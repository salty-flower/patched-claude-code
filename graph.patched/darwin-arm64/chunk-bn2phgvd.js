// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import"./chunk-6cqmwr9m.js";import"./chunk-gas689jj.js";import"./chunk-shf1fjz2.js";import"./chunk-zr6jq9j9.js";import"./chunk-w13amena.js";import"./chunk-4cwgnmh9.js";import"./chunk-1y7zyxh8.js";import"./chunk-njn6k74e.js";import{ku,a}from"./chunk-3a4khaz5.js";import"./chunk-w9w461gr.js";import"./chunk-s8xs8s76.js";import{N}from"./chunk-37kdx3dg.js";import"./chunk-v9aeg87c.js";import{b,vO}from"./chunk-wvb0gwjm.js";import"./chunk-81r5kx3r.js";import"./chunk-j370x2tz.js";import"./chunk-0dpks9t0.js";import"./chunk-vzqvvnm0.js";import"./chunk-n3x619p1.js";import{ws}from"./chunk-qdvqpm53.js";import"./chunk-9cfndpw0.js";import{mi,fn}from"./chunk-ymkzysdh.js";import{nCe,XH,W1}from"./chunk-twxt3h9y.js";import"./chunk-x4gz28fm.js";import"./chunk-9vnajd7a.js";import"./chunk-n875m8bj.js";import"./chunk-ekshy3qa.js";import"./chunk-tcx7fvpc.js";import"./chunk-ry9k94nn.js";import"./chunk-cmqyka9v.js";import"./chunk-z2w95mdn.js";import"./chunk-kc002nbr.js";import"./chunk-amq2nck9.js";import"./chunk-fdnv15ej.js";import"./chunk-zb872eas.js";import"./chunk-shk8jjt1.js";import"./chunk-3eeg3qvv.js";import"./chunk-97rwyxer.js";import"./chunk-742ky2cp.js";import"./chunk-5cz12mxk.js";import"./chunk-tj8y2xcj.js";import"./chunk-gqaj0njn.js";import"./chunk-hn35vsf8.js";import"./chunk-ms03d305.js";import"./chunk-pkcypf3f.js";import"./chunk-m9hfdm3b.js";import"./chunk-je0c1kfp.js";import"./chunk-aneqvevx.js";import"./chunk-kdwykznz.js";import"./chunk-mjmhaa2n.js";import"./chunk-0mkbat55.js";import"./chunk-7wq3cxhj.js";import"./chunk-821rxv4j.js";import"./chunk-9pj6s8ha.js";import"./chunk-fp8phndt.js";import"./chunk-7x4fz860.js";import"./chunk-eh0c72zp.js";import"./chunk-2jc9gzqt.js";import"./chunk-emn764wn.js";import"./chunk-m3rjj2qj.js";import"./chunk-bnfryxmn.js";import"./chunk-pkhrg5v5.js";import"./chunk-wt3kk7dt.js";import"./chunk-wjcvdctc.js";import"./chunk-9fsgjz11.js";import"./chunk-vvq2vnvw.js";import"./chunk-s09n49gq.js";import"./chunk-tq81az32.js";import"./chunk-m65e81jc.js";import"./chunk-vn3m1gs0.js";import"./chunk-hg1f9dgc.js";import"./chunk-w3vnd82x.js";import"./chunk-kg44xfte.js";import"./chunk-k59kdd19.js";import"./chunk-dtsvh7pz.js";import"./chunk-8z6ck5c9.js";import"./chunk-eb2vdmgg.js";import"./chunk-z3kvjkzc.js";import{i$}from"./chunk-jyfdnn4j.js";import"./chunk-2mg9a9wf.js";import{oH}from"./chunk-kstqg0hw.js";import{M2r}from"./chunk-gsvcr7td.js";import"./chunk-8s6d4v7d.js";import"./chunk-hh60eame.js";import"./chunk-83tvy994.js";import"./chunk-0crwfvdj.js";import"./chunk-wx0tzs6g.js";import{pst}from"./chunk-721hbfvs.js";import"./chunk-yajmwgch.js";import"./chunk-8bc0vvxx.js";import"./chunk-wf2aqwcp.js";import"./chunk-8jbeny5z.js";import"./chunk-kf9bybnr.js";import"./chunk-wyewzwe1.js";import"./chunk-apr1pmkm.js";import"./chunk-1f8ahewx.js";import"./chunk-dh68faj3.js";import"./chunk-tjymmzb8.js";import"./chunk-ddnrrbm5.js";import"./chunk-q41x5swz.js";import"./chunk-eksb3eb9.js";import"./chunk-aeqtw871.js";import"./chunk-m53hpgnw.js";import"./chunk-kaepya91.js";import{spawnSync as m}from"child_process";function l(t){return`You are guiding an operator from zero to a working **self-hosted runner** for Claude Code cloud sessions. The operator must leave able to do this themselves \u2014 you have typed tools that make *you* efficient, but every API tool you call returns an \`equivalent.ui\` path. **After every API tool call, surface that \`equivalent.ui\` path to the operator** so they can repeat the action without you.

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
environment for Claude Code cloud sessions. Creates an environment, spawns a
local runner, verifies it appears in the Admin UI, and writes a CHEAT-SHEET.md.

Any extra args are passed to the underlying Claude Code session.`);return}await pst(s),i$();let n=oH(s);if(nCe(n),N()&&n!==void 0){vO({storageV5:n}),XH(n);let[{composePolicyLimitsClient:o,primePolicyLimitsCache:d},{credentialsStoreFor:c},{primeFastPathCredentials:p}]=await Promise.all([import("./chunk-y9ysxgvm.js"),import("./chunk-q104svt1.js"),import("./chunk-bkcstgmq.js")]);o({storageV5:n}),await p(c(n)),await d(n),await W1(n)}let r=l(M2r()),h=ku()?[]:[process.argv[1]],u=t.length>0&&!t[0].startsWith("-")?[]:[_],i=[...h,...u,"--append-system-prompt",r,"--tools",f,"--permission-mode","default",...t];if(a.DEBUG)console.error("[self-hosted-runner:setup] spawning:",b({argv:[process.execPath,...i.map((o)=>o===r?`<${r.length} chars>`:o)]}));let e=m(process.execPath,i,{stdio:"inherit"});if(e.error)return await fn("cli_self_hosted_setup","spawn_failed"),console.error(`[self-hosted-runner:setup] failed to spawn child: ${e.error.message}`),ws(1);if(e.status!==null&&e.status!==0||e.signal)await fn("cli_self_hosted_setup",e.signal?"child_signal":"child_nonzero"),console.error(`[self-hosted-runner:setup] child exited with status ${e.status??"(null)"}${e.signal?`, signal ${e.signal}`:""}`);else await mi("cli_self_hosted_setup");return console.error("[self-hosted-runner:setup] To continue setup, re-run `claude self-hosted-runner setup` \u2014 resuming the session with `claude --resume`/`-c` will not re-enable the setup tools."),ws(e.status!==null?e.status:1)}export{D as selfHostedRunnerSetupMain};
