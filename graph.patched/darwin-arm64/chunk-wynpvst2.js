// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{J,G}from"./chunk-38213y7h.js";import{oe,mAe}from"./chunk-bsdtxcdc.js";import{Ha}from"./chunk-4k4029wq.js";import{$wt,Uwt,Zre,eoe,gXe}from"./chunk-cx07awjk.js";import{qAe}from"./chunk-xry7qepk.js";import{PEn,CXe}from"./chunk-70vy0xt5.js";import{$ne}from"./chunk-f63318j1.js";import{W1n}from"./chunk-769s2s3e.js";import{O}from"./chunk-vvpqfcj1.js";class s{settingsLoaded=!1;helperResult=null;claimSettingsLoad(){if(this.settingsLoaded)return!1;return this.settingsLoaded=!0,!0}beginHelperRun(){return this.helperResult={error:null},this.helperResult}}var Pdr=new J(()=>new s);function l(){return Pdr.of(G().host)}async function I0e(t){if(!l().claimSettingsLoad())return;let e=O()?t?.backend:void 0;if(O()&&e!==void 0){let[{seedUserSettings:o},{primeWindowsCredManBackendEnabled:i},{primeRemoteManagedSettingsCache:n},{primeWorkspaceRoots:r}]=await Promise.all([import("./chunk-8h70f8sy.js"),import("./chunk-ya8395m5.js"),import("./chunk-e97nh706.js"),import("./chunk-kh481rxn.js")]);await r(e),await Promise.all([mAe(e),o(e,Ha())]),i(oe().cachedGrowthBookFeatures?.tengu_windows_credman===!0),await n(e)}else await mAe();if(await qAe(),await CXe(PEn),O()&&e!==void 0){let[{credentialsStoreFor:o},{primeFileDescriptorCredentials:i},{primeStoredLoginCopy:n}]=await Promise.all([import("./chunk-tac0p253.js"),import("./chunk-w66ep7mx.js"),import("./chunk-e1y1gqez.js")]),r=o(e);if(r!==void 0)await i(r,{bgAuthSnapshot:"leave"}),await n(r)}$ne();let a=W1n();if(a)process.stderr.write(`${a}
`),process.exit(1)}async function Jot(){let t=l();if(t.helperResult)return t.helperResult.error;let e=t.beginHelperRun();if(e.error=await $wt(Zre(),eoe(),gXe()),Uwt())$ne();return e.error}async function z6e(t){return await I0e(t),Jot()}
export{Pdr,I0e,Jot,z6e};
