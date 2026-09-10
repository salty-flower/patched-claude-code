// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import"./chunk-8yfx63va.js";import"./chunk-0yrss36a.js";import"./chunk-g6gcsnnp.js";import"./chunk-vp9rx3bq.js";import"./chunk-2c9ntqb3.js";import{Pc,a}from"./chunk-dv6tepz3.js";import"./chunk-sgyvc67j.js";import{N}from"./chunk-95e36pja.js";import"./chunk-3rs4ng0x.js";import"./chunk-am8gnetv.js";import"./chunk-rgs4nrpq.js";import{b,HR}from"./chunk-wbbe5mtc.js";import"./chunk-kr797g3g.js";import"./chunk-2rebt4am.js";import"./chunk-4thwge0q.js";import"./chunk-azaesbcc.js";import{Es}from"./chunk-dc4m100m.js";import"./chunk-z0p50v56.js";import{Fi,An}from"./chunk-a25t2bvk.js";import{qae,AR,DO}from"./chunk-e02s7cks.js";import"./chunk-jngjxeh6.js";import"./chunk-c30w2k35.js";import"./chunk-ysx7ez10.js";import"./chunk-8hm57jxw.js";import"./chunk-knxbj6dd.js";import"./chunk-2q7a31tc.js";import"./chunk-2dxb0egv.js";import"./chunk-40qbe5qj.js";import"./chunk-x9wapt5y.js";import"./chunk-z2rcqcmx.js";import"./chunk-9r5vc452.js";import"./chunk-8rqwttv3.js";import"./chunk-fk28fhjr.js";import"./chunk-hv7xv8k9.js";import"./chunk-d6akndrs.js";import"./chunk-dr6b4af7.js";import"./chunk-br5w3my7.js";import"./chunk-rccvbg8v.js";import"./chunk-yyyfew8j.js";import"./chunk-jh8csezs.js";import"./chunk-eradmpsk.js";import"./chunk-q87va14m.js";import"./chunk-fx59774s.js";import"./chunk-n5rkcvav.js";import"./chunk-4mnyz1w5.js";import"./chunk-rt87j2wz.js";import"./chunk-m6czhww2.js";import"./chunk-xsncbnja.js";import"./chunk-v2tkmkax.js";import"./chunk-v6ry0gpm.js";import"./chunk-adz7n5a7.js";import"./chunk-j8dhzt3t.js";import"./chunk-hfzdv02p.js";import"./chunk-q8p2ywk2.js";import"./chunk-x9sxtx6k.js";import"./chunk-r2phj6np.js";import"./chunk-n0wwgq92.js";import"./chunk-hsr41a8w.js";import"./chunk-hefafsny.js";import"./chunk-48s4h7y4.js";import"./chunk-pv7bzc31.js";import"./chunk-7vhk7x5v.js";import"./chunk-nh71zkp7.js";import"./chunk-xn4w527t.js";import"./chunk-jkz0x6q2.js";import"./chunk-ssbk02ew.js";import"./chunk-3xk9xykm.js";import"./chunk-zp3bf2vf.js";import"./chunk-65gr57am.js";import{W$}from"./chunk-9wj1v1jh.js";import"./chunk-f162ev3f.js";import{wk}from"./chunk-6c0c9wn2.js";import{h9n}from"./chunk-aym9ttyj.js";import"./chunk-wr7tr3yw.js";import"./chunk-5vw5s3d2.js";import"./chunk-byqm07vb.js";import"./chunk-qxtapejv.js";import"./chunk-3qw5grrd.js";import{RLe}from"./chunk-ww9e22r3.js";import"./chunk-nv42tykf.js";import"./chunk-2sq402hd.js";import"./chunk-w76pp7a3.js";import"./chunk-c8m0whcr.js";import"./chunk-s09cww1m.js";import"./chunk-qmx5skg1.js";import"./chunk-nznh2rr5.js";import"./chunk-9rpyk3jx.js";import"./chunk-r0enmq3q.js";import"./chunk-pe85fsd6.js";import"./chunk-k42b8hsk.js";import"./chunk-epfresbq.js";import"./chunk-10wetekf.js";import{spawnSync as m}from"child_process";function l(t){return`You are guiding an operator from zero to a working **self-hosted runner** for Claude Code on the web. The operator must leave able to do this themselves \u2014 you have typed tools that make *you* efficient, but every API tool you call returns an \`equivalent.ui\` path. **After every API tool call, surface that \`equivalent.ui\` path to the operator** so they can repeat the action without you.

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

Any extra args are passed to the underlying Claude Code session.`);return}await RLe(s),W$();let n=wk(s);if(qae(n),N()&&n!==void 0){HR({storageV5:n}),AR(n);let[{composePolicyLimitsClient:o,primePolicyLimitsCache:d},{credentialsStoreFor:c},{primeFastPathCredentials:p}]=await Promise.all([import("./chunk-khb7rbc8.js"),import("./chunk-z943snhk.js"),import("./chunk-jh2t5da2.js")]);o({storageV5:n}),await p(c(n)),await d(n),await DO(n)}let r=l(h9n()),h=Pc()?[]:[process.argv[1]],u=t.length>0&&!t[0].startsWith("-")?[]:[_],i=[...h,...u,"--append-system-prompt",r,"--tools",f,"--permission-mode","default",...t];if(a.DEBUG)console.error("[self-hosted-runner:setup] spawning:",b({argv:[process.execPath,...i.map((o)=>o===r?`<${r.length} chars>`:o)]}));let e=m(process.execPath,i,{stdio:"inherit"});if(e.error)return await An("cli_self_hosted_setup","spawn_failed"),console.error(`[self-hosted-runner:setup] failed to spawn child: ${e.error.message}`),Es(1);if(e.status!==null&&e.status!==0||e.signal)await An("cli_self_hosted_setup",e.signal?"child_signal":"child_nonzero"),console.error(`[self-hosted-runner:setup] child exited with status ${e.status??"(null)"}${e.signal?`, signal ${e.signal}`:""}`);else await Fi("cli_self_hosted_setup");return console.error("[self-hosted-runner:setup] To continue setup, re-run `claude self-hosted-runner setup` \u2014 resuming the session with `claude --resume`/`-c` will not re-enable the setup tools."),Es(e.status!==null?e.status:1)}export{D as selfHostedRunnerSetupMain};
