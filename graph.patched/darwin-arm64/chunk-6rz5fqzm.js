// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import{j,B,g_e}from"./chunk-2x3q7cfh.js";import{M}from"./chunk-h62vxw7j.js";import{Nse,ee,ARe}from"./chunk-419zdfz3.js";import{da}from"./chunk-aqbb35ee.js";import{rRt,ABe,uRt,CQ,vQ,RBe}from"./chunk-bt5mxc9p.js";import{Qxn,Bet}from"./chunk-1bqqnyc1.js";import{goe}from"./chunk-x7kby92q.js";import{Q2n}from"./chunk-01r8gcpb.js";class s{settingsLoaded=!1;helperResult=null;claimSettingsLoad(){if(this.settingsLoaded)return!1;return this.settingsLoaded=!0,!0}beginHelperRun(){return this.helperResult={error:null},this.helperResult}}var p=new j(()=>new s);function l(){return p.of(B().host)}async function sPe(t){if(!l().claimSettingsLoad())return;let e=M()?t?.backend:void 0;if(M()&&e!==void 0){let[{seedUserSettings:o},{primeWindowsCredManBackendEnabled:i},{primeRemoteManagedSettingsCache:a},{primeWorkspaceRoots:r}]=await Promise.all([import("./chunk-z495qy4c.js"),import("./chunk-4fsas7z0.js"),import("./chunk-v68394d6.js"),import("./chunk-9c0hdmnf.js")]);await r(e),await Promise.all([ARe(e),o(e,da())]),i(ee().cachedGrowthBookFeatures?.tengu_windows_credman===!0),await a(e)}else await ARe();if(await rRt(),await Bet(Qxn),M()&&e!==void 0){let[{credentialsStoreFor:o},{primeFileDescriptorCredentials:i},{primeStoredLoginCopy:a}]=await Promise.all([import("./chunk-r7prg4pg.js"),import("./chunk-rs3ert6b.js"),import("./chunk-zrcwmb1h.js")]),r=o(e);if(r!==void 0)await i(r,{bgAuthSnapshot:"leave"}),await a(r)}g_e(Nse),goe();let n=Q2n();if(n)process.stderr.write(`${n}
`),process.exit(1)}async function mut(){let t=l();if(t.helperResult)return t.helperResult.error;let e=t.beginHelperRun();if(e.error=await ABe(CQ(),vQ(),RBe()),uRt())goe();return e.error}async function SGe(t){return await sPe(t),mut()}
export{sPe,mut,SGe};
