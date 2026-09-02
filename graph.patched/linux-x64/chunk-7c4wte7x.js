// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{J,W}from"./chunk-30zk17wm.js";import{oe,dAe}from"./chunk-1e5y3pjf.js";import{Ia}from"./chunk-kc505vjh.js";import{NHt,FHt,Xre,Jre,mXe}from"./chunk-30zpf1a7.js";import{jAe}from"./chunk-e21g00dm.js";import{Own,uXe}from"./chunk-dmrj2df2.js";import{Mne}from"./chunk-2w0h3pr7.js";import{DNn}from"./chunk-7k7m98k2.js";import{D}from"./chunk-jw0x5qwf.js";class s{settingsLoaded=!1;helperResult=null;claimSettingsLoad(){if(this.settingsLoaded)return!1;return this.settingsLoaded=!0,!0}beginHelperRun(){return this.helperResult={error:null},this.helperResult}}var Adr=new J(()=>new s);function l(){return Adr.of(W().host)}async function IIe(t){if(!l().claimSettingsLoad())return;let e=D()?t?.backend:void 0;if(D()&&e!==void 0){let[{seedUserSettings:o},{primeWindowsCredManBackendEnabled:i},{primeRemoteManagedSettingsCache:n},{primeWorkspaceRoots:r}]=await Promise.all([import("./chunk-c2egrhfp.js"),import("./chunk-a1qceyn7.js"),import("./chunk-kcy3pbb9.js"),import("./chunk-st5pmxyb.js")]);await r(e),await Promise.all([dAe(e),o(e,Ia())]),i(oe().cachedGrowthBookFeatures?.tengu_windows_credman===!0),await n(e)}else await dAe();if(await jAe(),await uXe(Own),D()&&e!==void 0){let[{credentialsStoreFor:o},{primeFileDescriptorCredentials:i},{primeStoredLoginCopy:n}]=await Promise.all([import("./chunk-vh0ajx53.js"),import("./chunk-hcgqfvfn.js"),import("./chunk-tjw324tf.js")]),r=o(e);if(r!==void 0)await i(r,{bgAuthSnapshot:"leave"}),await n(r)}Mne();let a=DNn();if(a)process.stderr.write(`${a}
`),process.exit(1)}async function Kot(){let t=l();if(t.helperResult)return t.helperResult.error;let e=t.beginHelperRun();if(e.error=await NHt(Xre(),Jre(),mXe()),FHt())Mne();return e.error}async function G2e(t){return await IIe(t),Kot()}
export{Adr,IIe,Kot,G2e};
