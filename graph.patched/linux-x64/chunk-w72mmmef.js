// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import"./chunk-ycrs8y50.js";import"./chunk-td0fv71w.js";import"./chunk-0sa7g6pk.js";import"./chunk-ffgkv432.js";import"./chunk-cw80kq1q.js";import{Il,a}from"./chunk-sr28hb79.js";import"./chunk-b1z7jvb2.js";import{M}from"./chunk-y7x1gsy0.js";import"./chunk-twjxwmnx.js";import"./chunk-xtc2dmbe.js";import"./chunk-mrh5xd2h.js";import{b,YP}from"./chunk-5nyank6v.js";import"./chunk-pz607n7v.js";import"./chunk-ctshp37x.js";import"./chunk-hfch6q45.js";import"./chunk-wv4b4ave.js";import"./chunk-8gx3t4ng.js";import{Vi}from"./chunk-1hx4w304.js";import"./chunk-62em4bpm.js";import{js,In}from"./chunk-krz8ngz3.js";import{iie,TP,A1}from"./chunk-8qt7d28b.js";import"./chunk-vvp6yg1e.js";import"./chunk-tdsxb2n6.js";import"./chunk-64kpb0yv.js";import"./chunk-rfwkkcpg.js";import"./chunk-9d3jb7ss.js";import"./chunk-1ce1rf2k.js";import"./chunk-zmhk2tm0.js";import"./chunk-5wwsf42p.js";import"./chunk-b6yvqj2q.js";import"./chunk-650bcxer.js";import"./chunk-5nbfs0gy.js";import"./chunk-br7qz22q.js";import"./chunk-pewb9akp.js";import"./chunk-t5j5p2ne.js";import"./chunk-fkh93x1w.js";import"./chunk-d89fbdxm.js";import"./chunk-478fqyzs.js";import"./chunk-gvnmfkwa.js";import"./chunk-n6xww8f0.js";import"./chunk-0300m3ak.js";import"./chunk-6tm4k51s.js";import"./chunk-m7yvwazd.js";import"./chunk-zmtb7sjc.js";import"./chunk-7y3dpmev.js";import"./chunk-2gy6qgxb.js";import"./chunk-0bwkdgd7.js";import"./chunk-j956zzb7.js";import"./chunk-8p7g3f8s.js";import"./chunk-cnazfz7b.js";import"./chunk-6x6tyk1n.js";import"./chunk-bmjyz6e1.js";import"./chunk-bdjm18ys.js";import"./chunk-rb08vpfw.js";import"./chunk-1c73sb2f.js";import"./chunk-1azd6qmg.js";import"./chunk-g60xv35x.js";import"./chunk-1yhkg7x0.js";import"./chunk-0wc7a0ya.js";import"./chunk-mt21y33a.js";import"./chunk-qa9rwvaj.js";import"./chunk-tsnan5t5.js";import"./chunk-g9d7r5bw.js";import"./chunk-39bh7dex.js";import"./chunk-8qtdp828.js";import"./chunk-e45krqw9.js";import"./chunk-21p4p57y.js";import"./chunk-7npsafxm.js";import"./chunk-5cm9g8n5.js";import"./chunk-n91qqthe.js";import"./chunk-g790ebfk.js";import{r9}from"./chunk-c2xchvn8.js";import"./chunk-q01k4gww.js";import{nL}from"./chunk-hz9h945x.js";import{P2n}from"./chunk-p0v7g6r3.js";import"./chunk-k7k7z6hv.js";import"./chunk-qs4rddc6.js";import"./chunk-pr8wnfvg.js";import"./chunk-8sgbh95c.js";import"./chunk-fzn3re55.js";import{gLe}from"./chunk-0e635kbx.js";import"./chunk-pmxafd2k.js";import"./chunk-a8c5cvq1.js";import"./chunk-c2wyd4j1.js";import"./chunk-jvfbjppn.js";import"./chunk-vy72srn2.js";import"./chunk-kr0dzw6h.js";import"./chunk-kssh590p.js";import"./chunk-e979sk69.js";import"./chunk-dwwp0b8c.js";import{spawnSync as m}from"child_process";function l(t){return`You are guiding an operator from zero to a working **self-hosted runner** for Claude Code on the web. The operator must leave able to do this themselves \u2014 you have typed tools that make *you* efficient, but every API tool you call returns an \`equivalent.ui\` path. **After every API tool call, surface that \`equivalent.ui\` path to the operator** so they can repeat the action without you.

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

Any extra args are passed to the underlying Claude Code session.`);return}await gLe(s),r9();let n=nL(s);if(iie(n),M()&&n!==void 0){YP({storageV5:n}),TP(n);let[{composePolicyLimitsClient:o,primePolicyLimitsCache:d},{credentialsStoreFor:c},{primeFastPathCredentials:p}]=await Promise.all([import("./chunk-dqe1pw9t.js"),import("./chunk-7mk2g1xy.js"),import("./chunk-scdd5pbb.js")]);o({storageV5:n}),await p(c(n)),await d(n),await A1(n)}let r=l(P2n()),h=Il()?[]:[process.argv[1]],u=t.length>0&&!t[0].startsWith("-")?[]:[_],i=[...h,...u,"--append-system-prompt",r,"--tools",f,"--permission-mode","default",...t];if(a.DEBUG)console.error("[self-hosted-runner:setup] spawning:",b({argv:[process.execPath,...i.map((o)=>o===r?`<${r.length} chars>`:o)]}));let e=m(process.execPath,i,{stdio:"inherit"});if(e.error)return await In("cli_self_hosted_setup","spawn_failed"),console.error(`[self-hosted-runner:setup] failed to spawn child: ${e.error.message}`),Vi(1);if(e.status!==null&&e.status!==0||e.signal)await In("cli_self_hosted_setup",e.signal?"child_signal":"child_nonzero"),console.error(`[self-hosted-runner:setup] child exited with status ${e.status??"(null)"}${e.signal?`, signal ${e.signal}`:""}`);else await js("cli_self_hosted_setup");return console.error("[self-hosted-runner:setup] To continue setup, re-run `claude self-hosted-runner setup` \u2014 resuming the session with `claude --resume`/`-c` will not re-enable the setup tools."),Vi(e.status!==null?e.status:1)}export{F as selfHostedRunnerSetupMain};
