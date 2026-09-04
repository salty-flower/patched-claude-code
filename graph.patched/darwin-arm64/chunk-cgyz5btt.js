// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{z,q}from"./chunk-yhfssb7x.js";import{L}from"./chunk-0xdcm8sp.js";import{ie,ake}from"./chunk-vtwn1md5.js";import{xa}from"./chunk-v3s7w1dm.js";import{Hke,CBe,Gvt,QQ,ZQ,kBe}from"./chunk-03hrg0m9.js";import{AHn,xet}from"./chunk-4a71a660.js";import{Iie}from"./chunk-49bh520p.js";import{hjn}from"./chunk-1mmtxd0s.js";class s{settingsLoaded=!1;helperResult=null;claimSettingsLoad(){if(this.settingsLoaded)return!1;return this.settingsLoaded=!0,!0}beginHelperRun(){return this.helperResult={error:null},this.helperResult}}var Byr=new z(()=>new s);function l(){return Byr.of(q().host)}async function QPe(t){if(!l().claimSettingsLoad())return;let e=L()?t?.backend:void 0;if(L()&&e!==void 0){let[{seedUserSettings:o},{primeWindowsCredManBackendEnabled:i},{primeRemoteManagedSettingsCache:n},{primeWorkspaceRoots:r}]=await Promise.all([import("./chunk-rqtkesr1.js"),import("./chunk-sm4rkk81.js"),import("./chunk-s7kmgvm7.js"),import("./chunk-t5wzq2tc.js")]);await r(e),await Promise.all([ake(e),o(e,xa())]),i(ie().cachedGrowthBookFeatures?.tengu_windows_credman===!0),await n(e)}else await ake();if(await Hke(),await xet(AHn),L()&&e!==void 0){let[{credentialsStoreFor:o},{primeFileDescriptorCredentials:i},{primeStoredLoginCopy:n}]=await Promise.all([import("./chunk-rf6seg6s.js"),import("./chunk-s6tt4842.js"),import("./chunk-61bnf57x.js")]),r=o(e);if(r!==void 0)await i(r,{bgAuthSnapshot:"leave"}),await n(r)}Iie();let a=hjn();if(a)process.stderr.write(`${a}
`),process.exit(1)}async function mut(){let t=l();if(t.helperResult)return t.helperResult.error;let e=t.beginHelperRun();if(e.error=await CBe(QQ(),ZQ(),kBe()),Gvt())Iie();return e.error}async function zGe(t){return await QPe(t),mut()}
export{Byr,QPe,mut,zGe};
