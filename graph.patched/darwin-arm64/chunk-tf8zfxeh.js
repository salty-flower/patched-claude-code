// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{j,CZe}from"./chunk-xzypj06m.js";import{G}from"./chunk-278j353c.js";import{z}from"./chunk-r0a9v21k.js";import{dje,ue,Zgt}from"./chunk-1901fdh6.js";import{ki}from"./chunk-jybqja29.js";import{uyt,CUt,Wte,wW,A7,$0e}from"./chunk-61p68esv.js";import{LDo,pcn}from"./chunk-kww3qk2q.js";import{pae}from"./chunk-c2nbjjfe.js";import{WDs}from"./chunk-6fcrad6x.js";import{TPr}from"./chunk-8pcrrp4p.js";class s{settingsLoaded=!1;helperResult=null;claimSettingsLoad(){if(this.settingsLoaded)return!1;return this.settingsLoaded=!0,!0}beginHelperRun(){return this.helperResult={error:null},this.helperResult}}var p=new z(()=>new s);function l(){return p.of(j().host)}async function pLt(t){if(!l().claimSettingsLoad())return;TPr();let e=G()?t?.backend:void 0;if(G()&&e!==void 0){let[{seedUserSettings:o},{primeWindowsCredManBackendEnabled:i},{primeRemoteManagedSettingsCache:a},{primeWorkspaceRoots:r}]=await Promise.all([import("./chunk-8hsb0ez9.js"),import("./chunk-352pmcey.js"),import("./chunk-ha35sqs9.js"),import("./chunk-xdbjeams.js")]);await r(e),await Promise.all([Zgt(e),o(e,ki())]),i(ue().cachedGrowthBookFeatures?.tengu_windows_credman===!0),await a(e)}else await Zgt();if(await uyt(),await pcn(LDo),G()&&e!==void 0){let[{credentialsStoreFor:o},{primeFileDescriptorCredentials:i},{primeStoredLoginCopy:a}]=await Promise.all([import("./chunk-03d43k7e.js"),import("./chunk-cr4h6kr8.js"),import("./chunk-3s5j3ns5.js")]),r=o(e);if(r!==void 0)await i(r,{bgAuthSnapshot:"leave"}),await a(r)}CZe(dje),pae();let n=WDs();if(n)process.stderr.write(`${n}
`),process.exit(1)}async function S6n(){let t=l();if(t.helperResult)return t.helperResult.error;let e=t.beginHelperRun();if(e.error=await CUt(wW(),A7(),$0e()),Wte())pae();return e.error}async function Zon(t){return await pLt(t),S6n()}
export{pLt,S6n,Zon};
