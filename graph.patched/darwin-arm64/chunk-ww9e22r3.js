// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{W,B,ZSe}from"./chunk-sgyvc67j.js";import{N}from"./chunk-95e36pja.js";import{Kae,ne,IHe}from"./chunk-e02s7cks.js";import{ba}from"./chunk-ysx7ez10.js";import{BPt,vst,KPt,Tee,kee,FWe}from"./chunk-yyyfew8j.js";import{CLn,Mot}from"./chunk-hefafsny.js";import{Sie}from"./chunk-qxtapejv.js";import{I4n}from"./chunk-3qw5grrd.js";class s{settingsLoaded=!1;helperResult=null;claimSettingsLoad(){if(this.settingsLoaded)return!1;return this.settingsLoaded=!0,!0}beginHelperRun(){return this.helperResult={error:null},this.helperResult}}var p=new W(()=>new s);function l(){return p.of(B().host)}async function RLe(t){if(!l().claimSettingsLoad())return;let e=N()?t?.backend:void 0;if(N()&&e!==void 0){let[{seedUserSettings:o},{primeWindowsCredManBackendEnabled:i},{primeRemoteManagedSettingsCache:a},{primeWorkspaceRoots:r}]=await Promise.all([import("./chunk-vqa3y8by.js"),import("./chunk-q0xkx3zm.js"),import("./chunk-w4m01whg.js"),import("./chunk-f94amd3w.js")]);await r(e),await Promise.all([IHe(e),o(e,ba())]),i(ne().cachedGrowthBookFeatures?.tengu_windows_credman===!0),await a(e)}else await IHe();if(await BPt(),await Mot(CLn),N()&&e!==void 0){let[{credentialsStoreFor:o},{primeFileDescriptorCredentials:i},{primeStoredLoginCopy:a}]=await Promise.all([import("./chunk-z943snhk.js"),import("./chunk-kfwkj169.js"),import("./chunk-cdzxc5qg.js")]),r=o(e);if(r!==void 0)await i(r,{bgAuthSnapshot:"leave"}),await a(r)}ZSe(Kae),Sie();let n=I4n();if(n)process.stderr.write(`${n}
`),process.exit(1)}async function wmt(){let t=l();if(t.helperResult)return t.helperResult.error;let e=t.beginHelperRun();if(e.error=await vst(Tee(),kee(),FWe()),KPt())Sie();return e.error}async function l9e(t){return await RLe(t),wmt()}
export{RLe,wmt,l9e};
