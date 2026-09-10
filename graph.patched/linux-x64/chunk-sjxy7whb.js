// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{z,B,Kbe}from"./chunk-6n7yk222.js";import{N}from"./chunk-mtqrv1h8.js";import{Bae,ne,kIe}from"./chunk-ce4ppmnp.js";import{Sa}from"./chunk-8fer6cmv.js";import{kHt,ust,PHt,See,wee,CWe}from"./chunk-sp4f0zv3.js";import{JOn,Sot}from"./chunk-eyj5z1mk.js";import{pie}from"./chunk-1zd16ad4.js";import{NKn}from"./chunk-nh7tp95h.js";class s{settingsLoaded=!1;helperResult=null;claimSettingsLoad(){if(this.settingsLoaded)return!1;return this.settingsLoaded=!0,!0}beginHelperRun(){return this.helperResult={error:null},this.helperResult}}var p=new z(()=>new s);function l(){return p.of(B().host)}async function JOe(t){if(!l().claimSettingsLoad())return;let e=N()?t?.backend:void 0;if(N()&&e!==void 0){let[{seedUserSettings:o},{primeWindowsCredManBackendEnabled:i},{primeRemoteManagedSettingsCache:a},{primeWorkspaceRoots:r}]=await Promise.all([import("./chunk-hk6w88bv.js"),import("./chunk-n1pmj7d5.js"),import("./chunk-fnsv66pz.js"),import("./chunk-ssd9m24r.js")]);await r(e),await Promise.all([kIe(e),o(e,Sa())]),i(ne().cachedGrowthBookFeatures?.tengu_windows_credman===!0),await a(e)}else await kIe();if(await kHt(),await Sot(JOn),N()&&e!==void 0){let[{credentialsStoreFor:o},{primeFileDescriptorCredentials:i},{primeStoredLoginCopy:a}]=await Promise.all([import("./chunk-jd3kz44k.js"),import("./chunk-c1csnmf6.js"),import("./chunk-zz3zzf8z.js")]),r=o(e);if(r!==void 0)await i(r,{bgAuthSnapshot:"leave"}),await a(r)}Kbe(Bae),pie();let n=NKn();if(n)process.stderr.write(`${n}
`),process.exit(1)}async function Kpt(){let t=l();if(t.helperResult)return t.helperResult.error;let e=t.beginHelperRun();if(e.error=await ust(See(),wee(),CWe()),PHt())pie();return e.error}async function Vln(t){return await JOe(t),Kpt()}
export{JOe,Kpt,Vln};
