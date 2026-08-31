// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import"./chunk-7s3c5qqq.js";import"./chunk-rv2kd9jf.js";import"./chunk-sgsf5yd5.js";import"./chunk-asme1eq2.js";import"./chunk-w8ppmegc.js";import{Al,a}from"./chunk-m9gbfvns.js";import"./chunk-30zk17wm.js";import"./chunk-jpen6jwm.js";import"./chunk-d7ejrssq.js";import"./chunk-r1b219q3.js";import"./chunk-efckqwp7.js";import{S,_T}from"./chunk-d0cr5d2v.js";import"./chunk-bvdq8tnt.js";import"./chunk-764j5mtt.js";import"./chunk-ma4xtxwv.js";import"./chunk-gbq6xyrq.js";import"./chunk-02dpwhns.js";import{qi}from"./chunk-afh18xhd.js";import"./chunk-yqfv1yd3.js";import{Zs,xn}from"./chunk-ykrbqs98.js";import{kre,rT,eP}from"./chunk-1e5y3pjf.js";import"./chunk-7r196x4z.js";import"./chunk-1ttwv9fk.js";import"./chunk-dzd4rkt0.js";import"./chunk-kc505vjh.js";import"./chunk-q2grjtpb.js";import"./chunk-qd43z1g9.js";import"./chunk-jw46j330.js";import"./chunk-vv42w3zb.js";import"./chunk-3qzpxayw.js";import"./chunk-a090dzyj.js";import"./chunk-a2g5xbg4.js";import"./chunk-9cvbc65t.js";import"./chunk-zv6dxs76.js";import"./chunk-0sdpjn9a.js";import"./chunk-j35pah18.js";import"./chunk-j55vqm69.js";import"./chunk-e7r3n0fy.js";import"./chunk-wsjwtx5h.js";import"./chunk-yxr9b4ek.js";import"./chunk-cn7kmt56.js";import"./chunk-a8be273g.js";import"./chunk-0xn3mw8z.js";import"./chunk-30zpf1a7.js";import"./chunk-dkknd74f.js";import"./chunk-1nj7y1sr.js";import"./chunk-s5z7wmv7.js";import"./chunk-hgebmnek.js";import"./chunk-000exgr8.js";import"./chunk-zkwbrkrn.js";import"./chunk-1vhz7b90.js";import"./chunk-jh8hhb0y.js";import"./chunk-jpepp1st.js";import"./chunk-e21g00dm.js";import"./chunk-s7r9vssa.js";import"./chunk-hvkwrtra.js";import"./chunk-4v7s9wvr.js";import"./chunk-s4gv6c12.js";import"./chunk-bt08ja64.js";import"./chunk-4n7ktjmt.js";import"./chunk-qv5nyd4p.js";import"./chunk-xzv9n2q7.js";import"./chunk-xmefb9d5.js";import"./chunk-pm1yx9gh.js";import"./chunk-7vzd1b8s.js";import"./chunk-t1dbt8zk.js";import"./chunk-ezy65b9n.js";import"./chunk-0me3rg21.js";import"./chunk-d85w7nxf.js";import"./chunk-nsht0110.js";import"./chunk-9qzqdgp0.js";import"./chunk-dmrj2df2.js";import"./chunk-nceebb9v.js";import"./chunk-azztsfgd.js";import"./chunk-41nyh22r.js";import"./chunk-4kxavepq.js";import"./chunk-kqhtgdqq.js";import"./chunk-m3zmmvh7.js";import"./chunk-1461jpph.js";import"./chunk-p0e7nc2g.js";import"./chunk-bqf28esr.js";import"./chunk-ts4ymrjf.js";import"./chunk-rv365wnb.js";import"./chunk-7vs7qneb.js";import"./chunk-njtgsd8n.js";import{_N}from"./chunk-0q76v5kd.js";import"./chunk-jndq43bs.js";import{nk}from"./chunk-nrvqzjmh.js";import{Q1n}from"./chunk-kj12vmkn.js";import"./chunk-ph6nqqw2.js";import"./chunk-mebjt4rt.js";import"./chunk-g849tmhy.js";import"./chunk-2w0h3pr7.js";import"./chunk-7k7m98k2.js";import{IIe}from"./chunk-7c4wte7x.js";import"./chunk-jerw32n8.js";import"./chunk-t225nvjt.js";import"./chunk-g0v7mb52.js";import"./chunk-esh1xgk6.js";import"./chunk-ds8dremv.js";import"./chunk-2txjr9b6.js";import"./chunk-peh5tvnh.js";import"./chunk-jdkn7yce.js";import"./chunk-qh4ma7bm.js";import"./chunk-zm2aajcr.js";import"./chunk-7ntmrqet.js";import"./chunk-edxkqkcr.js";import{D}from"./chunk-jw0x5qwf.js";import"./chunk-6c8t6gsc.js";import"./chunk-er188mb2.js";import{spawnSync as m}from"child_process";function l(t){return`You are guiding an operator from zero to a working **self-hosted runner** for Claude Code on the web. The operator must leave able to do this themselves \u2014 you have typed tools that make *you* efficient, but every API tool you call returns an \`equivalent.ui\` path. **After every API tool call, surface that \`equivalent.ui\` path to the operator** so they can repeat the action without you.

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

Any extra args are passed to the underlying Claude Code session.`);return}await IIe(s),_N();let n=nk(s);if(kre(n),D()&&n!==void 0){_T({storageV5:n}),rT(n);let[{composePolicyLimitsClient:o,primePolicyLimitsCache:d},{credentialsStoreFor:c},{primeFastPathCredentials:p}]=await Promise.all([import("./chunk-sj5t0wjy.js"),import("./chunk-vh0ajx53.js"),import("./chunk-m4w59tzy.js")]);o({storageV5:n}),await p(c(n)),await d(n),await eP(n)}let r=l(Q1n()),h=Al()?[]:[process.argv[1]],u=t.length>0&&!t[0].startsWith("-")?[]:[_],i=[...h,...u,"--append-system-prompt",r,"--tools",f,"--permission-mode","default",...t];if(a.DEBUG)console.error("[self-hosted-runner:setup] spawning:",S({argv:[process.execPath,...i.map((o)=>o===r?`<${r.length} chars>`:o)]}));let e=m(process.execPath,i,{stdio:"inherit"});if(e.error)return await xn("cli_self_hosted_setup","spawn_failed"),console.error(`[self-hosted-runner:setup] failed to spawn child: ${e.error.message}`),qi(1);if(e.status!==null&&e.status!==0||e.signal)await xn("cli_self_hosted_setup",e.signal?"child_signal":"child_nonzero"),console.error(`[self-hosted-runner:setup] child exited with status ${e.status??"(null)"}${e.signal?`, signal ${e.signal}`:""}`);else await Zs("cli_self_hosted_setup");return console.error("[self-hosted-runner:setup] To continue setup, re-run `claude self-hosted-runner setup` \u2014 resuming the session with `claude --resume`/`-c` will not re-enable the setup tools."),qi(e.status!==null?e.status:1)}export{F as selfHostedRunnerSetupMain};
