// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import"./chunk-5b2g0bc6.js";import"./chunk-tey8avmn.js";import"./chunk-4j4893mq.js";import"./chunk-asme1eq2.js";import"./chunk-nt3hxpjz.js";import{jl,a}from"./chunk-w3k8bej2.js";import"./chunk-38213y7h.js";import"./chunk-tb103f96.js";import"./chunk-92vbp1ze.js";import"./chunk-9rhc0mtn.js";import"./chunk-qr1avfxy.js";import{b,bR}from"./chunk-ynzt0fm1.js";import"./chunk-1jtqmqar.js";import"./chunk-04aem4bh.js";import"./chunk-qpcjd2zp.js";import"./chunk-gbq6xyrq.js";import"./chunk-zgjbv493.js";import{Vi}from"./chunk-058s84ks.js";import"./chunk-qw5jhqey.js";import{Zs,In}from"./chunk-xtqqhw5t.js";import{Hre,iR,oP}from"./chunk-bsdtxcdc.js";import"./chunk-seset5dr.js";import"./chunk-jpjxepq9.js";import"./chunk-2qvmm0t6.js";import"./chunk-4k4029wq.js";import"./chunk-z9mp80s2.js";import"./chunk-trd7c1xg.js";import"./chunk-vvj94wew.js";import"./chunk-4ngx0mjr.js";import"./chunk-7v2mj9b2.js";import"./chunk-qstfp0cz.js";import"./chunk-n0yyxtyf.js";import"./chunk-451qv46z.js";import"./chunk-zb8d66s3.js";import"./chunk-dckv2srq.js";import"./chunk-870sakbg.js";import"./chunk-yzssqtg9.js";import"./chunk-ns9e34z1.js";import"./chunk-8ath6mn8.js";import"./chunk-d8ymrekx.js";import"./chunk-1hpjnncp.js";import"./chunk-j22kanvh.js";import"./chunk-b8r6yeec.js";import"./chunk-cx07awjk.js";import"./chunk-8c6qx8qp.js";import"./chunk-nag2zkkq.js";import"./chunk-af80z9sa.js";import"./chunk-71eaqash.js";import"./chunk-7g4v1yq9.js";import"./chunk-2s2q3hwy.js";import"./chunk-fk13r7sg.js";import"./chunk-8b25vs1j.js";import"./chunk-8k6avy35.js";import"./chunk-xry7qepk.js";import"./chunk-bpa6089w.js";import"./chunk-rsfpm3y4.js";import"./chunk-mccwjvz3.js";import"./chunk-sjr02qnv.js";import"./chunk-pxjm7v8m.js";import"./chunk-znxmbm58.js";import"./chunk-yprfjz48.js";import"./chunk-e64rab41.js";import"./chunk-bcs84682.js";import"./chunk-3fmberkx.js";import"./chunk-94abhyt4.js";import"./chunk-sw698tpc.js";import"./chunk-xhf6e4gc.js";import"./chunk-pdpxsvxg.js";import"./chunk-adnd44zx.js";import"./chunk-6fgxyy6b.js";import"./chunk-p0zc8jmz.js";import"./chunk-70vy0xt5.js";import"./chunk-e5wnfhf7.js";import"./chunk-6pwm0z6x.js";import"./chunk-0m09sk6y.js";import"./chunk-p4ge1s9m.js";import"./chunk-t1rb87np.js";import"./chunk-nqg8bykp.js";import"./chunk-mk4am7jk.js";import"./chunk-rm5qjs80.js";import"./chunk-49gs1y6m.js";import"./chunk-q9hnzper.js";import"./chunk-t08x6k34.js";import"./chunk-w4pcf9py.js";import"./chunk-1nvr3b9n.js";import{S1}from"./chunk-8zwsr3vr.js";import"./chunk-t34ydg8r.js";import{ov}from"./chunk-x3nqjg1p.js";import{rBn}from"./chunk-trn14tp5.js";import"./chunk-2dwnyy5c.js";import"./chunk-twvhj2rj.js";import"./chunk-zjeqf9vh.js";import"./chunk-f63318j1.js";import"./chunk-769s2s3e.js";import{I0e}from"./chunk-wynpvst2.js";import"./chunk-vx6zh8vh.js";import"./chunk-jcv4bfwt.js";import"./chunk-b2gh276b.js";import"./chunk-vd16bvwx.js";import"./chunk-t1mp6dc7.js";import"./chunk-vrasa60a.js";import"./chunk-dagqhtdd.js";import"./chunk-2k2mkbsv.js";import"./chunk-0tzv6e6j.js";import"./chunk-zx8x716f.js";import"./chunk-x46dbms4.js";import"./chunk-zyp65cht.js";import"./chunk-snzr790g.js";import{O}from"./chunk-vvpqfcj1.js";import"./chunk-6c8t6gsc.js";import{spawnSync as m}from"child_process";function l(t){return`You are guiding an operator from zero to a working **self-hosted runner** for Claude Code on the web. The operator must leave able to do this themselves \u2014 you have typed tools that make *you* efficient, but every API tool you call returns an \`equivalent.ui\` path. **After every API tool call, surface that \`equivalent.ui\` path to the operator** so they can repeat the action without you.

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

Any extra args are passed to the underlying Claude Code session.`);return}await I0e(s),S1();let n=ov(s);if(Hre(n),O()&&n!==void 0){bR({storageV5:n}),iR(n);let[{composePolicyLimitsClient:o,primePolicyLimitsCache:d},{credentialsStoreFor:c},{primeFastPathCredentials:p}]=await Promise.all([import("./chunk-zqd32nhk.js"),import("./chunk-tac0p253.js"),import("./chunk-rrzy5z9d.js")]);o({storageV5:n}),await p(c(n)),await d(n),await oP(n)}let r=l(rBn()),h=jl()?[]:[process.argv[1]],u=t.length>0&&!t[0].startsWith("-")?[]:[_],i=[...h,...u,"--append-system-prompt",r,"--tools",f,"--permission-mode","default",...t];if(a.DEBUG)console.error("[self-hosted-runner:setup] spawning:",b({argv:[process.execPath,...i.map((o)=>o===r?`<${r.length} chars>`:o)]}));let e=m(process.execPath,i,{stdio:"inherit"});if(e.error)return await In("cli_self_hosted_setup","spawn_failed"),console.error(`[self-hosted-runner:setup] failed to spawn child: ${e.error.message}`),Vi(1);if(e.status!==null&&e.status!==0||e.signal)await In("cli_self_hosted_setup",e.signal?"child_signal":"child_nonzero"),console.error(`[self-hosted-runner:setup] child exited with status ${e.status??"(null)"}${e.signal?`, signal ${e.signal}`:""}`);else await Zs("cli_self_hosted_setup");return console.error("[self-hosted-runner:setup] To continue setup, re-run `claude self-hosted-runner setup` \u2014 resuming the session with `claude --resume`/`-c` will not re-enable the setup tools."),Vi(e.status!==null?e.status:1)}export{D as selfHostedRunnerSetupMain};
