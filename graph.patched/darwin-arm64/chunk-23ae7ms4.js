// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import"./chunk-vx7e38ke.js";import"./chunk-q2h0fawe.js";import"./chunk-jxdnn2j1.js";import"./chunk-67jj8qay.js";import"./chunk-7greh2d8.js";import{Au,a}from"./chunk-wkhfcbsj.js";import"./chunk-sgamszzq.js";import{F}from"./chunk-n93bke93.js";import"./chunk-tq3ft6e6.js";import"./chunk-k6smmjsm.js";import"./chunk-qq9jq5dz.js";import{w,N0}from"./chunk-qmm87fyw.js";import"./chunk-pfxvy4ay.js";import"./chunk-vzm3bfp5.js";import"./chunk-1cx6bcw0.js";import"./chunk-d5zyj0vt.js";import{is}from"./chunk-bzd488vq.js";import"./chunk-jxv3x25k.js";import{Ai,gn}from"./chunk-4akrhkry.js";import{zfe,h0,gM}from"./chunk-g4c6ggz4.js";import"./chunk-gyyhh83h.js";import"./chunk-n21rqdv9.js";import"./chunk-a38xyc22.js";import"./chunk-033exrv9.js";import"./chunk-83fmeatd.js";import"./chunk-hxqyqnkp.js";import"./chunk-rffpe63a.js";import"./chunk-w0wezkwh.js";import"./chunk-057hcrqj.js";import"./chunk-nemb0v5p.js";import"./chunk-gyqjm99t.js";import"./chunk-aj022wxj.js";import"./chunk-06f6mv83.js";import"./chunk-f1vfx2c9.js";import"./chunk-jghr2zs7.js";import"./chunk-k515hq0v.js";import"./chunk-90yxyspx.js";import"./chunk-3w873vgy.js";import"./chunk-nxhd1nfq.js";import"./chunk-6vm9fw1n.js";import"./chunk-cywp4eg9.js";import"./chunk-j2wjbpxv.js";import"./chunk-r9jm87wv.js";import"./chunk-9ngv0yxa.js";import"./chunk-yvbqdrex.js";import"./chunk-hxn1me4q.js";import"./chunk-vwjr2pkc.js";import"./chunk-brxrr15j.js";import"./chunk-qyp953rx.js";import"./chunk-cqv6tkc1.js";import"./chunk-j63nfvz8.js";import"./chunk-3a3psjjn.js";import"./chunk-fn346qw1.js";import"./chunk-4hvxqv7y.js";import"./chunk-7367658q.js";import"./chunk-jmhxqcfx.js";import"./chunk-pgetpn99.js";import"./chunk-m1s552da.js";import"./chunk-8797texs.js";import"./chunk-y72vc59g.js";import"./chunk-pfn1bjke.js";import"./chunk-8yjp8tpt.js";import"./chunk-fmf8btmz.js";import"./chunk-gk6kz4gh.js";import"./chunk-7tmdsrws.js";import"./chunk-4cdedaae.js";import"./chunk-z6t0tnzq.js";import"./chunk-ec199pf4.js";import{ZD}from"./chunk-992bxkwg.js";import"./chunk-w04d3c7x.js";import{yx}from"./chunk-rtv4vt9m.js";import{_fr}from"./chunk-ec9wa0js.js";import"./chunk-rab1mtgb.js";import"./chunk-gk3240hr.js";import"./chunk-w7xdsp68.js";import{Pqe}from"./chunk-581smm6p.js";import"./chunk-rkmrec0m.js";import"./chunk-ngfw0fb9.js";import"./chunk-c64g6h84.js";import"./chunk-en8ntyde.js";import"./chunk-5yfmr588.js";import"./chunk-j698dt39.js";import"./chunk-qt55mcfv.js";import"./chunk-e382dy54.js";import"./chunk-kmhka96v.js";import"./chunk-8g5d5rrv.js";import"./chunk-jm8tf5gf.js";import"./chunk-686wm7s6.js";import"./chunk-4zc2ctjz.js";import{spawnSync as m}from"child_process";function l(t){return`You are guiding an operator from zero to a working **self-hosted runner** for Claude Code on the web. The operator must leave able to do this themselves \u2014 you have typed tools that make *you* efficient, but every API tool you call returns an \`equivalent.ui\` path. **After every API tool call, surface that \`equivalent.ui\` path to the operator** so they can repeat the action without you.

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

Any extra args are passed to the underlying Claude Code session.`);return}await Pqe(s),ZD();let n=yx(s);if(zfe(n),F()&&n!==void 0){N0({storageV5:n}),h0(n);let[{composePolicyLimitsClient:o,primePolicyLimitsCache:d},{credentialsStoreFor:c},{primeFastPathCredentials:p}]=await Promise.all([import("./chunk-dwg1qrbc.js"),import("./chunk-fnwrvyby.js"),import("./chunk-x1901qen.js")]);o({storageV5:n}),await p(c(n)),await d(n),await gM(n)}let r=l(_fr()),h=Au()?[]:[process.argv[1]],u=t.length>0&&!t[0].startsWith("-")?[]:[_],i=[...h,...u,"--append-system-prompt",r,"--tools",f,"--permission-mode","default",...t];if(a.DEBUG)console.error("[self-hosted-runner:setup] spawning:",w({argv:[process.execPath,...i.map((o)=>o===r?`<${r.length} chars>`:o)]}));let e=m(process.execPath,i,{stdio:"inherit"});if(e.error)return await gn("cli_self_hosted_setup","spawn_failed"),console.error(`[self-hosted-runner:setup] failed to spawn child: ${e.error.message}`),is(1);if(e.status!==null&&e.status!==0||e.signal)await gn("cli_self_hosted_setup",e.signal?"child_signal":"child_nonzero"),console.error(`[self-hosted-runner:setup] child exited with status ${e.status??"(null)"}${e.signal?`, signal ${e.signal}`:""}`);else await Ai("cli_self_hosted_setup");return console.error("[self-hosted-runner:setup] To continue setup, re-run `claude self-hosted-runner setup` \u2014 resuming the session with `claude --resume`/`-c` will not re-enable the setup tools."),is(e.status!==null?e.status:1)}export{D as selfHostedRunnerSetupMain};
