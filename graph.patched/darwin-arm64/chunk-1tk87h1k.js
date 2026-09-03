// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import"./chunk-5e3knf27.js";import"./chunk-gh3qnpny.js";import"./chunk-2cgtbdj1.js";import"./chunk-ffgkv432.js";import"./chunk-t1t1emvm.js";import{Yl,a}from"./chunk-pv906ex9.js";import"./chunk-hdbxv3pp.js";import{L}from"./chunk-ma94d7pd.js";import"./chunk-88cgz317.js";import"./chunk-pc7b8z35.js";import"./chunk-2avye5sw.js";import{S,WR}from"./chunk-t2jwg94b.js";import"./chunk-2mb81hfz.js";import"./chunk-qkcr56w2.js";import"./chunk-1mtde6n1.js";import"./chunk-wv4b4ave.js";import"./chunk-1h1jces6.js";import{qi}from"./chunk-rwa9jxst.js";import"./chunk-kzyd0fd4.js";import{js,xn}from"./chunk-wpdwa7yz.js";import{fie,PR,$P}from"./chunk-h6md7820.js";import"./chunk-r0hsft7w.js";import"./chunk-qw2xqmjm.js";import"./chunk-tgbc60ar.js";import"./chunk-yxmvvxaq.js";import"./chunk-k3mxj323.js";import"./chunk-dqgnfptc.js";import"./chunk-0s8h31st.js";import"./chunk-yx1gn1w6.js";import"./chunk-wmmywewf.js";import"./chunk-73z3qwhg.js";import"./chunk-pv31m1gp.js";import"./chunk-h2gsgpx0.js";import"./chunk-kzsh05tm.js";import"./chunk-p6qksxwe.js";import"./chunk-zjtbqw2e.js";import"./chunk-wvv6qxhz.js";import"./chunk-d0r3tzx0.js";import"./chunk-s20s1ge7.js";import"./chunk-qfzsdjtj.js";import"./chunk-yhqjr2er.js";import"./chunk-akratr0p.js";import"./chunk-5b4s2jqq.js";import"./chunk-v94ds1sm.js";import"./chunk-2czbv1yw.js";import"./chunk-kmbbckxk.js";import"./chunk-gmk3nm4k.js";import"./chunk-q84dja28.js";import"./chunk-09669z0m.js";import"./chunk-j64ncx4g.js";import"./chunk-ndfabcjs.js";import"./chunk-ztx67v38.js";import"./chunk-3yv85b0k.js";import"./chunk-pfd7xc5y.js";import"./chunk-0g5fhtke.js";import"./chunk-m6f6yn76.js";import"./chunk-rgyha56k.js";import"./chunk-mrrqne4r.js";import"./chunk-msx8gtcp.js";import"./chunk-zd4qet6w.js";import"./chunk-xwwpgrkv.js";import"./chunk-sw1cad4q.js";import"./chunk-2q2nc49z.js";import"./chunk-gy3td9bv.js";import"./chunk-04r19fmz.js";import"./chunk-gdx67b65.js";import"./chunk-046h39gw.js";import"./chunk-m2hw088w.js";import"./chunk-3vg54qd4.js";import"./chunk-hr8wrrm4.js";import"./chunk-1m8djgca.js";import{uF}from"./chunk-jpjnaem4.js";import"./chunk-k8sxtdtt.js";import{Fv}from"./chunk-gppsgkef.js";import{Y6n}from"./chunk-nb8f6rkp.js";import"./chunk-mb8pdp1y.js";import"./chunk-s9cx0sdp.js";import"./chunk-f7b6rsxn.js";import"./chunk-dy9qenww.js";import"./chunk-nfpmfh27.js";import{TIe}from"./chunk-kmzgam75.js";import"./chunk-xkj3bqd7.js";import"./chunk-sanqbg9t.js";import"./chunk-k2qx3wsk.js";import"./chunk-dhks5jtn.js";import"./chunk-n89jvrce.js";import"./chunk-tnjm8sjt.js";import"./chunk-1ghtgc3m.js";import"./chunk-bpk2rz0h.js";import"./chunk-gjjv0be0.js";import{spawnSync as m}from"child_process";function l(t){return`You are guiding an operator from zero to a working **self-hosted runner** for Claude Code on the web. The operator must leave able to do this themselves \u2014 you have typed tools that make *you* efficient, but every API tool you call returns an \`equivalent.ui\` path. **After every API tool call, surface that \`equivalent.ui\` path to the operator** so they can repeat the action without you.

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

Any extra args are passed to the underlying Claude Code session.`);return}await TIe(s),uF();let n=Fv(s);if(fie(n),L()&&n!==void 0){WR({storageV5:n}),PR(n);let[{composePolicyLimitsClient:o,primePolicyLimitsCache:d},{credentialsStoreFor:c},{primeFastPathCredentials:p}]=await Promise.all([import("./chunk-x2zmrcy0.js"),import("./chunk-f27dc5zz.js"),import("./chunk-ppxxhd7x.js")]);o({storageV5:n}),await p(c(n)),await d(n),await $P(n)}let r=l(Y6n()),h=Yl()?[]:[process.argv[1]],u=t.length>0&&!t[0].startsWith("-")?[]:[_],i=[...h,...u,"--append-system-prompt",r,"--tools",f,"--permission-mode","default",...t];if(a.DEBUG)console.error("[self-hosted-runner:setup] spawning:",S({argv:[process.execPath,...i.map((o)=>o===r?`<${r.length} chars>`:o)]}));let e=m(process.execPath,i,{stdio:"inherit"});if(e.error)return await xn("cli_self_hosted_setup","spawn_failed"),console.error(`[self-hosted-runner:setup] failed to spawn child: ${e.error.message}`),qi(1);if(e.status!==null&&e.status!==0||e.signal)await xn("cli_self_hosted_setup",e.signal?"child_signal":"child_nonzero"),console.error(`[self-hosted-runner:setup] child exited with status ${e.status??"(null)"}${e.signal?`, signal ${e.signal}`:""}`);else await js("cli_self_hosted_setup");return console.error("[self-hosted-runner:setup] To continue setup, re-run `claude self-hosted-runner setup` \u2014 resuming the session with `claude --resume`/`-c` will not re-enable the setup tools."),qi(e.status!==null?e.status:1)}export{F as selfHostedRunnerSetupMain};
