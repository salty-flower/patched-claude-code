// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{j,B}from"./chunk-zhtwayh2.js";import{L}from"./chunk-7wmynp0n.js";import{ee,vve}from"./chunk-n495pc0t.js";import{Sa}from"./chunk-sxccpdbg.js";import{ZAt,Z$e,iCt,jJ,WJ,nUe}from"./chunk-pe4nmbcg.js";import{PRn,qQe}from"./chunk-q31h7y51.js";import{Wre}from"./chunk-6ab5jtzk.js";import{yUn}from"./chunk-4we1ykga.js";class s{settingsLoaded=!1;helperResult=null;claimSettingsLoad(){if(this.settingsLoaded)return!1;return this.settingsLoaded=!0,!0}beginHelperRun(){return this.helperResult={error:null},this.helperResult}}var p=new j(()=>new s);function l(){return p.of(B().host)}async function sIe(t){if(!l().claimSettingsLoad())return;let e=L()?t?.backend:void 0;if(L()&&e!==void 0){let[{seedUserSettings:o},{primeWindowsCredManBackendEnabled:i},{primeRemoteManagedSettingsCache:n},{primeWorkspaceRoots:r}]=await Promise.all([import("./chunk-4fvj50j8.js"),import("./chunk-xfzyqwxd.js"),import("./chunk-11vqcakq.js"),import("./chunk-gcyje61z.js")]);await r(e),await Promise.all([vve(e),o(e,Sa())]),i(ee().cachedGrowthBookFeatures?.tengu_windows_credman===!0),await n(e)}else await vve();if(await ZAt(),await qQe(PRn),L()&&e!==void 0){let[{credentialsStoreFor:o},{primeFileDescriptorCredentials:i},{primeStoredLoginCopy:n}]=await Promise.all([import("./chunk-vxc2fxwz.js"),import("./chunk-6f3mka86.js"),import("./chunk-31z20r7e.js")]),r=o(e);if(r!==void 0)await i(r,{bgAuthSnapshot:"leave"}),await n(r)}Wre();let a=yUn();if(a)process.stderr.write(`${a}
`),process.exit(1)}async function wlt(){let t=l();if(t.helperResult)return t.helperResult.error;let e=t.beginHelperRun();if(e.error=await Z$e(jJ(),WJ(),nUe()),iCt())Wre();return e.error}async function F9e(t){return await sIe(t),wlt()}
export{sIe,wlt,F9e};
