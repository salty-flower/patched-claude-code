// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{z,F,$4e}from"./chunk-vd0a9d2s.js";import{B}from"./chunk-a48152q4.js";import{KDe,ce,zst}from"./chunk-gcyvvtkw.js";import{$i}from"./chunk-2r0ph8pf.js";import{eat,bxt,QAe,U6,E9,dNe}from"./chunk-48by85wp.js";import{uyo,fQt}from"./chunk-hbp0s36e.js";import{vle}from"./chunk-zyvek18h.js";import{ncs}from"./chunk-84r1frgv.js";import{gfr}from"./chunk-jawdg1g6.js";class s{settingsLoaded=!1;helperResult=null;claimSettingsLoad(){if(this.settingsLoaded)return!1;return this.settingsLoaded=!0,!0}beginHelperRun(){return this.helperResult={error:null},this.helperResult}}var p=new z(()=>new s);function l(){return p.of(F().host)}async function UCt(t){if(!l().claimSettingsLoad())return;gfr();let e=B()?t?.backend:void 0;if(B()&&e!==void 0){let[{seedUserSettings:o},{primeWindowsCredManBackendEnabled:i},{primeRemoteManagedSettingsCache:a},{primeWorkspaceRoots:r}]=await Promise.all([import("./chunk-5r9dsr3z.js"),import("./chunk-9hh6s37a.js"),import("./chunk-f1hx7gxp.js"),import("./chunk-h39k7ah2.js")]);await r(e),await Promise.all([zst(e),o(e,$i())]),i(ce().cachedGrowthBookFeatures?.tengu_windows_credman===!0),await a(e)}else await zst();if(await eat(),await fQt(uyo),B()&&e!==void 0){let[{credentialsStoreFor:o},{primeFileDescriptorCredentials:i},{primeStoredLoginCopy:a}]=await Promise.all([import("./chunk-y6z1hsjw.js"),import("./chunk-n06d7y83.js"),import("./chunk-2sw480ax.js")]),r=o(e);if(r!==void 0)await i(r,{bgAuthSnapshot:"leave"}),await a(r)}$4e(KDe),vle();let n=ncs();if(n)process.stderr.write(`${n}
`),process.exit(1)}async function E0n(){let t=l();if(t.helperResult)return t.helperResult.error;let e=t.beginHelperRun();if(e.error=await bxt(U6(),E9(),dNe()),QAe())vle();return e.error}async function c9t(t){return await UCt(t),E0n()}
export{UCt,E0n,c9t};
