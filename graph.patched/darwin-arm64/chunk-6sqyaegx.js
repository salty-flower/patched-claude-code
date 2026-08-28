// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{K,W}from"./chunk-g4zaymy2.js";import{oe,gve}from"./chunk-ghnc2x4f.js";import{ra}from"./chunk-2694tw3t.js";import{Pyt,Oyt,Ote,Hte,B8e}from"./chunk-jz0pchtb.js";import{Wve}from"./chunk-36jg6szp.js";import{uyn,X8e}from"./chunk-89hmbtyb.js";import{_ee}from"./chunk-zts1rcga.js";import{XIn}from"./chunk-cqrjva77.js";import{H}from"./chunk-9p9ys44p.js";class s{settingsLoaded=!1;helperResult=null;claimSettingsLoad(){if(this.settingsLoaded)return!1;return this.settingsLoaded=!0,!0}beginHelperRun(){return this.helperResult={error:null},this.helperResult}}var grr=new K(()=>new s);function l(){return grr.of(W().host)}async function fAe(t){if(!l().claimSettingsLoad())return;let e=H()?t?.backend:void 0;if(H()&&e!==void 0){let[{seedUserSettings:o},{primeWindowsCredManBackendEnabled:i},{primeRemoteManagedSettingsCache:n},{primeWorkspaceRoots:r}]=await Promise.all([import("./chunk-zfhg8en2.js"),import("./chunk-2yd94fzc.js"),import("./chunk-nbqwrad6.js"),import("./chunk-46m44ra3.js")]);await r(e),await Promise.all([gve(e),o(e,ra())]),i(oe().cachedGrowthBookFeatures?.tengu_windows_credman===!0),await n(e)}else await gve();if(await Wve(),await X8e(uyn),H()&&e!==void 0){let[{credentialsStoreFor:o},{primeFileDescriptorCredentials:i},{primeStoredLoginCopy:n}]=await Promise.all([import("./chunk-n6f7gcpx.js"),import("./chunk-me8f5m2e.js"),import("./chunk-k5f3emhq.js")]),r=o(e);if(r!==void 0)await i(r,{bgAuthSnapshot:"leave"}),await n(r)}_ee();let a=XIn();if(a)process.stderr.write(`${a}
`),process.exit(1)}async function Oet(){let t=l();if(t.helperResult)return t.helperResult.error;let e=t.beginHelperRun();if(e.error=await Pyt(Ote(),Hte(),B8e()),Oyt())_ee();return e.error}async function V$e(t){return await fAe(t),Oet()}
export{grr,fAe,Oet,V$e};
