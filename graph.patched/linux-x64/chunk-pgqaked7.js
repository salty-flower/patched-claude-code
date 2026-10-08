// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{G,F,M6e}from"./chunk-g79wjybr.js";import{B}from"./chunk-4p5wb748.js";import{F0e,ce,Nst}from"./chunk-cxjvwxsa.js";import{$i}from"./chunk-8ky01sys.js";import{Git,cxt,GAe,x2,g5,nNe}from"./chunk-gsa86a2x.js";import{Mmo,qJt}from"./chunk-dxwrxbnd.js";import{yle}from"./chunk-2b3rbf00.js";import{_ls}from"./chunk-wcr104hb.js";import{Vpr}from"./chunk-113y5rkg.js";class s{settingsLoaded=!1;helperResult=null;claimSettingsLoad(){if(this.settingsLoaded)return!1;return this.settingsLoaded=!0,!0}beginHelperRun(){return this.helperResult={error:null},this.helperResult}}var p=new G(()=>new s);function l(){return p.of(F().host)}async function xTt(t){if(!l().claimSettingsLoad())return;Vpr();let e=B()?t?.backend:void 0;if(B()&&e!==void 0){let[{seedUserSettings:o},{primeWindowsCredManBackendEnabled:i},{primeRemoteManagedSettingsCache:a},{primeWorkspaceRoots:r}]=await Promise.all([import("./chunk-9gfc3ksw.js"),import("./chunk-vhmz5jh0.js"),import("./chunk-6m5a0jzp.js"),import("./chunk-nv52kwa3.js")]);await r(e),await Promise.all([Nst(e),o(e,$i())]),i(ce().cachedGrowthBookFeatures?.tengu_windows_credman===!0),await a(e)}else await Nst();if(await Git(),await qJt(Mmo),B()&&e!==void 0){let[{credentialsStoreFor:o},{primeFileDescriptorCredentials:i},{primeStoredLoginCopy:a}]=await Promise.all([import("./chunk-4j1b6neq.js"),import("./chunk-cc7yz57v.js"),import("./chunk-0evjc5gs.js")]),r=o(e);if(r!==void 0)await i(r,{bgAuthSnapshot:"leave"}),await a(r)}M6e(F0e),yle();let n=_ls();if(n)process.stderr.write(`${n}
`),process.exit(1)}async function oMn(){let t=l();if(t.helperResult)return t.helperResult.error;let e=t.beginHelperRun();if(e.error=await cxt(x2(),g5(),nNe()),GAe())yle();return e.error}async function cso(t){return await xTt(t),oMn()}
export{xTt,oMn,cso};
