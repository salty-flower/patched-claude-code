// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{G,F,DKe}from"./chunk-aywwjcwq.js";import{B}from"./chunk-f16c4jnr.js";import{xHe,ce,bnt}from"./chunk-m0sj7y8g.js";import{qi}from"./chunk-06vaaw45.js";import{xrt,BTt,Lke,wG,iY,GDe}from"./chunk-2c0pkjse.js";import{Pio,G5t}from"./chunk-h96fkqh0.js";import{Eee}from"./chunk-b42cdk1y.js";import{L7o}from"./chunk-vw0p1jrt.js";import{pir}from"./chunk-z25thpk5.js";class s{settingsLoaded=!1;helperResult=null;claimSettingsLoad(){if(this.settingsLoaded)return!1;return this.settingsLoaded=!0,!0}beginHelperRun(){return this.helperResult={error:null},this.helperResult}}var p=new G(()=>new s);function l(){return p.of(F().host)}async function ivt(t){if(!l().claimSettingsLoad())return;pir();let e=B()?t?.backend:void 0;if(B()&&e!==void 0){let[{seedUserSettings:o},{primeWindowsCredManBackendEnabled:i},{primeRemoteManagedSettingsCache:a},{primeWorkspaceRoots:r}]=await Promise.all([import("./chunk-nh5exqfs.js"),import("./chunk-g4vwasvc.js"),import("./chunk-xtqh64yh.js"),import("./chunk-0pdbkp7g.js")]);await r(e),await Promise.all([bnt(e),o(e,qi())]),i(ce().cachedGrowthBookFeatures?.tengu_windows_credman===!0),await a(e)}else await bnt();if(await xrt(),await G5t(Pio),B()&&e!==void 0){let[{credentialsStoreFor:o},{primeFileDescriptorCredentials:i},{primeStoredLoginCopy:a}]=await Promise.all([import("./chunk-mz2ngt1w.js"),import("./chunk-2v1v7hx9.js"),import("./chunk-439hdwtg.js")]),r=o(e);if(r!==void 0)await i(r,{bgAuthSnapshot:"leave"}),await a(r)}DKe(xHe),Eee();let n=L7o();if(n)process.stderr.write(`${n}
`),process.exit(1)}async function eRn(){let t=l();if(t.helperResult)return t.helperResult.error;let e=t.beginHelperRun();if(e.error=await BTt(wG(),iY(),GDe()),Lke())Eee();return e.error}async function rQr(t){return await ivt(t),eRn()}
export{ivt,eRn,rQr};
