// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import"./chunk-fkz3e4t3.js";import"./chunk-r5q3158s.js";import"./chunk-4rr1ghkj.js";import"./chunk-3qjd0g3g.js";import"./chunk-h7ha2q61.js";import{pc,a}from"./chunk-dq2s4wjn.js";import"./chunk-zhtwayh2.js";import{L}from"./chunk-7wmynp0n.js";import"./chunk-9g7wf9qr.js";import"./chunk-084v19yj.js";import"./chunk-gnrvsty9.js";import{S,OR}from"./chunk-5q90j22t.js";import"./chunk-643msr15.js";import"./chunk-j317bre5.js";import"./chunk-c5ajdz5z.js";import"./chunk-f2w14jf7.js";import"./chunk-gyxp7wp6.js";import{bs}from"./chunk-280vp0mj.js";import"./chunk-vtd04czk.js";import{Ri,bn}from"./chunk-m0jywms0.js";import{qoe,yR,fP}from"./chunk-n495pc0t.js";import"./chunk-1y4ds8dy.js";import"./chunk-rbvf4vfx.js";import"./chunk-sxccpdbg.js";import"./chunk-hzsc62cn.js";import"./chunk-rm74k23p.js";import"./chunk-jy0p4wg8.js";import"./chunk-3pft38xm.js";import"./chunk-0qz53fdq.js";import"./chunk-jat129zj.js";import"./chunk-dsq5gcfe.js";import"./chunk-7t0edxg3.js";import"./chunk-1rkars97.js";import"./chunk-qs8h438x.js";import"./chunk-6mr2v1ks.js";import"./chunk-dhrcn786.js";import"./chunk-q4eej6rr.js";import"./chunk-2rhkgebc.js";import"./chunk-0masdjfa.js";import"./chunk-pe4nmbcg.js";import"./chunk-t4hc7q7h.js";import"./chunk-bky8qhrb.js";import"./chunk-hakb056a.js";import"./chunk-wxx3jwpj.js";import"./chunk-rgyht4ht.js";import"./chunk-6a9jfng9.js";import"./chunk-qhv99t4f.js";import"./chunk-r2ztspyj.js";import"./chunk-d5e21f8p.js";import"./chunk-n031qbtd.js";import"./chunk-hernhfa4.js";import"./chunk-kswf1s4a.js";import"./chunk-rvca8fd4.js";import"./chunk-6pky15m5.js";import"./chunk-q3h60esw.js";import"./chunk-jd1wva8b.js";import"./chunk-ped3cn2k.js";import"./chunk-w2q5yc2x.js";import"./chunk-ghd3nyd4.js";import"./chunk-q31h7y51.js";import"./chunk-kyxky0qb.js";import"./chunk-r147enn1.js";import"./chunk-404xhkzs.js";import"./chunk-c8mj69qr.js";import"./chunk-7z7x82kj.js";import"./chunk-sgt1b7h0.js";import"./chunk-1gcpv8sw.js";import"./chunk-ehv9s8sq.js";import"./chunk-31b8gaj2.js";import"./chunk-kk1kt2t6.js";import{q1}from"./chunk-97w0c1yq.js";import"./chunk-t5xvgrnp.js";import{fv}from"./chunk-n3q64vgj.js";import{zBn}from"./chunk-px9pg523.js";import"./chunk-gydcfs7s.js";import"./chunk-wkcf7pcw.js";import"./chunk-xx88bbs2.js";import"./chunk-6ab5jtzk.js";import"./chunk-4we1ykga.js";import{sIe}from"./chunk-rxazb0ck.js";import"./chunk-k5tqyvpa.js";import"./chunk-dp4mwkrp.js";import"./chunk-vycx69he.js";import"./chunk-j7n34nkk.js";import"./chunk-j9kep6b4.js";import"./chunk-57mx6dv2.js";import"./chunk-j29ds5jh.js";import"./chunk-sfmkt7ws.js";import"./chunk-00fsqktf.js";import"./chunk-hv9s9qdn.js";import"./chunk-s37nbkm2.js";import{spawnSync as m}from"child_process";function l(t){return`You are guiding an operator from zero to a working **self-hosted runner** for Claude Code on the web. The operator must leave able to do this themselves \u2014 you have typed tools that make *you* efficient, but every API tool you call returns an \`equivalent.ui\` path. **After every API tool call, surface that \`equivalent.ui\` path to the operator** so they can repeat the action without you.

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

Any extra args are passed to the underlying Claude Code session.`);return}await sIe(s),q1();let n=fv(s);if(qoe(n),L()&&n!==void 0){OR({storageV5:n}),yR(n);let[{composePolicyLimitsClient:o,primePolicyLimitsCache:d},{credentialsStoreFor:c},{primeFastPathCredentials:p}]=await Promise.all([import("./chunk-x7w1zzs6.js"),import("./chunk-vxc2fxwz.js"),import("./chunk-ab7v52jn.js")]);o({storageV5:n}),await p(c(n)),await d(n),await fP(n)}let r=l(zBn()),h=pc()?[]:[process.argv[1]],u=t.length>0&&!t[0].startsWith("-")?[]:[_],i=[...h,...u,"--append-system-prompt",r,"--tools",f,"--permission-mode","default",...t];if(a.DEBUG)console.error("[self-hosted-runner:setup] spawning:",S({argv:[process.execPath,...i.map((o)=>o===r?`<${r.length} chars>`:o)]}));let e=m(process.execPath,i,{stdio:"inherit"});if(e.error)return await bn("cli_self_hosted_setup","spawn_failed"),console.error(`[self-hosted-runner:setup] failed to spawn child: ${e.error.message}`),bs(1);if(e.status!==null&&e.status!==0||e.signal)await bn("cli_self_hosted_setup",e.signal?"child_signal":"child_nonzero"),console.error(`[self-hosted-runner:setup] child exited with status ${e.status??"(null)"}${e.signal?`, signal ${e.signal}`:""}`);else await Ri("cli_self_hosted_setup");return console.error("[self-hosted-runner:setup] To continue setup, re-run `claude self-hosted-runner setup` \u2014 resuming the session with `claude --resume`/`-c` will not re-enable the setup tools."),bs(e.status!==null?e.status:1)}export{F as selfHostedRunnerSetupMain};
