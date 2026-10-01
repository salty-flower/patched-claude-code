// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import"./chunk-g5e6pf8s.js";import"./chunk-g9zw99sb.js";import"./chunk-hs50vfa7.js";import"./chunk-jm8r4kd0.js";import"./chunk-2j7zyd8v.js";import"./chunk-h1eby6n2.js";import"./chunk-dsp1md5e.js";import"./chunk-sxefq60x.js";import{tu,a}from"./chunk-1fpwxv0g.js";import"./chunk-ypa64mmn.js";import"./chunk-a7cah040.js";import{L}from"./chunk-nynxm73s.js";import"./chunk-vmffs68f.js";import{S,bM}from"./chunk-3wz0srxw.js";import"./chunk-dard33vx.js";import"./chunk-62dhtzrb.js";import"./chunk-zwbw6dvp.js";import"./chunk-mpc9nxv5.js";import"./chunk-58nkm0fd.js";import{Jo}from"./chunk-xs0g0734.js";import"./chunk-aykv0zbt.js";import{ai,rn}from"./chunk-sc069zjc.js";import{TRe,LD,QB}from"./chunk-er6f56rj.js";import"./chunk-n8h76tq4.js";import"./chunk-ngfc6f6n.js";import"./chunk-q8pmvej3.js";import"./chunk-zpb414p7.js";import"./chunk-k7eq4ze9.js";import"./chunk-pgjb8vhf.js";import"./chunk-nwtspmbg.js";import"./chunk-ya4yfeap.js";import"./chunk-n5atsp4q.js";import"./chunk-xr1m5xnp.js";import"./chunk-r0wx2yn9.js";import"./chunk-xs651030.js";import"./chunk-rdhfzq5v.js";import"./chunk-j0n5hmbg.js";import"./chunk-3vg91ev9.js";import"./chunk-dn2273cv.js";import"./chunk-a453ergf.js";import"./chunk-57g2c672.js";import"./chunk-35fstck9.js";import"./chunk-ccvm8ey1.js";import"./chunk-631kxjhr.js";import"./chunk-bt9vca5h.js";import"./chunk-vratfdfe.js";import"./chunk-3pxs8n2a.js";import"./chunk-e561d543.js";import"./chunk-766463nm.js";import"./chunk-ntsbwr3d.js";import"./chunk-2zhezxsa.js";import"./chunk-fdyaqynn.js";import"./chunk-wxpgf6xz.js";import"./chunk-tfngbndy.js";import"./chunk-6kpcse29.js";import"./chunk-8h01acb1.js";import"./chunk-ykkj96qc.js";import"./chunk-gzx138r6.js";import"./chunk-j3ncme2z.js";import"./chunk-jqre7qs5.js";import"./chunk-awrqx9ff.js";import"./chunk-jadxt0j8.js";import"./chunk-mbr6m81k.js";import"./chunk-820d2q3e.js";import"./chunk-fmk5eq99.js";import"./chunk-p3842md4.js";import"./chunk-by04ga81.js";import"./chunk-fh513ghb.js";import"./chunk-610gtpa9.js";import"./chunk-kpa06dsa.js";import"./chunk-kq5cja6x.js";import"./chunk-ka4b5aqy.js";import"./chunk-97k9kd9d.js";import"./chunk-pnss6pgj.js";import"./chunk-kt9hyg55.js";import"./chunk-vc06pma6.js";import"./chunk-hjhshw1j.js";import"./chunk-v9v7yqrh.js";import"./chunk-0y6wkmcj.js";import"./chunk-rttrg04m.js";import{iU}from"./chunk-bjhztf5t.js";import"./chunk-k4n0nj9n.js";import{DO}from"./chunk-wwk2s37q.js";import{dno}from"./chunk-z5k4s9pc.js";import"./chunk-5n7d074b.js";import"./chunk-m8nhvfdg.js";import"./chunk-c18y0svt.js";import"./chunk-w5qh5tap.js";import"./chunk-x7c75bb0.js";import{vut}from"./chunk-tj2078b2.js";import"./chunk-nazthp4h.js";import"./chunk-r4ra030x.js";import"./chunk-00v37vwv.js";import"./chunk-5yg4avpf.js";import"./chunk-bq7qbt1w.js";import"./chunk-dyxe93g1.js";import"./chunk-tn1j6vmr.js";import"./chunk-99m0p1v3.js";import"./chunk-44118748.js";import"./chunk-kacqaca4.js";import"./chunk-b8ghx04f.js";import"./chunk-r1n6vzwg.js";import"./chunk-y7fvkjrx.js";import"./chunk-y0937590.js";import"./chunk-t2v3fz5w.js";import{spawnSync as m}from"child_process";function l(t){return`You are guiding an operator from zero to a working **self-hosted runner** for Claude Code cloud sessions. The operator must leave able to do this themselves \u2014 you have typed tools that make *you* efficient, but every API tool you call returns an \`equivalent.ui\` path. **After every API tool call, surface that \`equivalent.ui\` path to the operator** so they can repeat the action without you.

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
environment for Claude Code cloud sessions. Creates an environment, spawns a
local runner, verifies it appears in the Admin UI, and writes a CHEAT-SHEET.md.

Any extra args are passed to the underlying Claude Code session.`);return}await vut(s),iU();let n=DO(s);if(TRe(n),L()&&n!==void 0){bM({storageV5:n}),LD(n);let[{composePolicyLimitsClient:o,primePolicyLimitsCache:d},{credentialsStoreFor:c},{primeFastPathCredentials:p}]=await Promise.all([import("./chunk-bnw42amh.js"),import("./chunk-x37gqv73.js"),import("./chunk-fgkwkcjm.js")]);o({storageV5:n}),await p(c(n)),await d(n),await QB(n)}let r=l(dno()),h=tu()?[]:[process.argv[1]],u=t.length>0&&!t[0].startsWith("-")?[]:[_],i=[...h,...u,"--append-system-prompt",r,"--tools",f,"--permission-mode","default",...t];if(a.DEBUG)console.error("[self-hosted-runner:setup] spawning:",S({argv:[process.execPath,...i.map((o)=>o===r?`<${r.length} chars>`:o)]}));let e=m(process.execPath,i,{stdio:"inherit"});if(e.error)return await rn("cli_self_hosted_setup","spawn_failed"),console.error(`[self-hosted-runner:setup] failed to spawn child: ${e.error.message}`),Jo(1);if(e.status!==null&&e.status!==0||e.signal)await rn("cli_self_hosted_setup",e.signal?"child_signal":"child_nonzero"),console.error(`[self-hosted-runner:setup] child exited with status ${e.status??"(null)"}${e.signal?`, signal ${e.signal}`:""}`);else await ai("cli_self_hosted_setup");return console.error("[self-hosted-runner:setup] To continue setup, re-run `claude self-hosted-runner setup` \u2014 resuming the session with `claude --resume`/`-c` will not re-enable the setup tools."),Jo(e.status!==null?e.status:1)}export{F as selfHostedRunnerSetupMain};
