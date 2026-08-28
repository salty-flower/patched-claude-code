// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{K,z}from"./chunk-2vv5hpw3.js";import{oe,mSe}from"./chunk-ns0ekkj0.js";import{ra}from"./chunk-a891q37t.js";import{Ryt,Lyt,Cte,xte,U8e}from"./chunk-bcez0qfh.js";import{jSe}from"./chunk-hk0e76vg.js";import{Cgn,N8e}from"./chunk-swj5sfs1.js";import{mee}from"./chunk-8nanzg8y.js";import{WIn}from"./chunk-qjnsx3jr.js";import{D}from"./chunk-6fnbbyjg.js";class s{settingsLoaded=!1;helperResult=null;claimSettingsLoad(){if(this.settingsLoaded)return!1;return this.settingsLoaded=!0,!0}beginHelperRun(){return this.helperResult={error:null},this.helperResult}}var lrr=new K(()=>new s);function l(){return lrr.of(z().host)}async function hTe(t){if(!l().claimSettingsLoad())return;let e=D()?t?.backend:void 0;if(D()&&e!==void 0){let[{seedUserSettings:o},{primeWindowsCredManBackendEnabled:i},{primeRemoteManagedSettingsCache:n},{primeWorkspaceRoots:r}]=await Promise.all([import("./chunk-zrxfe3ht.js"),import("./chunk-b3vs7dxm.js"),import("./chunk-ya79cg7n.js"),import("./chunk-57a1mvme.js")]);await r(e),await Promise.all([mSe(e),o(e,ra())]),i(oe().cachedGrowthBookFeatures?.tengu_windows_credman===!0),await n(e)}else await mSe();if(await jSe(),await N8e(Cgn),D()&&e!==void 0){let[{credentialsStoreFor:o},{primeFileDescriptorCredentials:i},{primeStoredLoginCopy:n}]=await Promise.all([import("./chunk-8escnp27.js"),import("./chunk-9fq5ynnk.js"),import("./chunk-3q28z7px.js")]),r=o(e);if(r!==void 0)await i(r,{bgAuthSnapshot:"leave"}),await n(r)}mee();let a=WIn();if(a)process.stderr.write(`${a}
`),process.exit(1)}async function Det(){let t=l();if(t.helperResult)return t.helperResult.error;let e=t.beginHelperRun();if(e.error=await Ryt(Cte(),xte(),U8e()),Lyt())mee();return e.error}async function XFe(t){return await hTe(t),Det()}
export{lrr,hTe,Det,XFe};
