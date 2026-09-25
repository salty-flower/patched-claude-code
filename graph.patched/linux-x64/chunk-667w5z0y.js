// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{V,W,XNe}from"./chunk-cqc88nqm.js";import{F}from"./chunk-7yckkh1m.js";import{NEe,le,LKe}from"./chunk-5khn4tvf.js";import{din,qat,D4e,K4,Wz,$ke}from"./chunk-pw35yar9.js";import{pl}from"./chunk-3hxvvnfw.js";import{oPr,q0t}from"./chunk-fs3a332c.js";import{s8}from"./chunk-8k7h445j.js";import{Wgo}from"./chunk-zsw9qjbk.js";import{d$n}from"./chunk-jk4fvhkc.js";class s{settingsLoaded=!1;helperResult=null;claimSettingsLoad(){if(this.settingsLoaded)return!1;return this.settingsLoaded=!0,!0}beginHelperRun(){return this.helperResult={error:null},this.helperResult}}var p=new V(()=>new s);function l(){return p.of(W().host)}async function est(t){if(!l().claimSettingsLoad())return;d$n();let e=F()?t?.backend:void 0;if(F()&&e!==void 0){let[{seedUserSettings:o},{primeWindowsCredManBackendEnabled:i},{primeRemoteManagedSettingsCache:a},{primeWorkspaceRoots:r}]=await Promise.all([import("./chunk-1ctp3psx.js"),import("./chunk-7zjv7zbv.js"),import("./chunk-8pf2zk8n.js"),import("./chunk-dtwm7w78.js")]);await r(e),await Promise.all([LKe(e),o(e,pl())]),i(le().cachedGrowthBookFeatures?.tengu_windows_credman===!0),await a(e)}else await LKe();if(await din(),await q0t(oPr),F()&&e!==void 0){let[{credentialsStoreFor:o},{primeFileDescriptorCredentials:i},{primeStoredLoginCopy:a}]=await Promise.all([import("./chunk-jj2dhxgn.js"),import("./chunk-g49s8jrh.js"),import("./chunk-9mgmbbht.js")]),r=o(e);if(r!==void 0)await i(r,{bgAuthSnapshot:"leave"}),await a(r)}XNe(NEe),s8();let n=Wgo();if(n)process.stderr.write(`${n}
`),process.exit(1)}async function Utn(){let t=l();if(t.helperResult)return t.helperResult.error;let e=t.beginHelperRun();if(e.error=await qat(K4(),Wz(),$ke()),D4e())s8();return e.error}async function Yvr(t){return await est(t),Utn()}
export{est,Utn,Yvr};
