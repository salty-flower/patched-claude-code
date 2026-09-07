// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{G,U}from"./chunk-bj7g1p32.js";import{O}from"./chunk-h9wtyp3p.js";import{ee,bke}from"./chunk-3e93vkg3.js";import{ba}from"./chunk-qyjj7h0q.js";import{MAt,jBe,GAt,O7,N7,zBe}from"./chunk-33bqb969.js";import{_kn,mQe}from"./chunk-x5ty8x5x.js";import{$re}from"./chunk-2e7jdyrh.js";import{LBn}from"./chunk-vzf7tph9.js";class s{settingsLoaded=!1;helperResult=null;claimSettingsLoad(){if(this.settingsLoaded)return!1;return this.settingsLoaded=!0,!0}beginHelperRun(){return this.helperResult={error:null},this.helperResult}}var p=new G(()=>new s);function l(){return p.of(U().host)}async function vxe(t){if(!l().claimSettingsLoad())return;let e=O()?t?.backend:void 0;if(O()&&e!==void 0){let[{seedUserSettings:o},{primeWindowsCredManBackendEnabled:i},{primeRemoteManagedSettingsCache:n},{primeWorkspaceRoots:r}]=await Promise.all([import("./chunk-d7jgtzjn.js"),import("./chunk-crbnzjrt.js"),import("./chunk-s68gxer1.js"),import("./chunk-gh32p2v5.js")]);await r(e),await Promise.all([bke(e),o(e,ba())]),i(ee().cachedGrowthBookFeatures?.tengu_windows_credman===!0),await n(e)}else await bke();if(await MAt(),await mQe(_kn),O()&&e!==void 0){let[{credentialsStoreFor:o},{primeFileDescriptorCredentials:i},{primeStoredLoginCopy:n}]=await Promise.all([import("./chunk-7akz7e06.js"),import("./chunk-9yxnw25p.js"),import("./chunk-gqhpd0xt.js")]),r=o(e);if(r!==void 0)await i(r,{bgAuthSnapshot:"leave"}),await n(r)}$re();let a=LBn();if(a)process.stderr.write(`${a}
`),process.exit(1)}async function tat(){let t=l();if(t.helperResult)return t.helperResult.error;let e=t.beginHelperRun();if(e.error=await jBe(O7(),N7(),zBe()),GAt())$re();return e.error}async function jen(t){return await vxe(t),tat()}
export{vxe,tat,jen};
