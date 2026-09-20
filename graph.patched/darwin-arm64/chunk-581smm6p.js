// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{G,z,tke}from"./chunk-sgamszzq.js";import{F}from"./chunk-n93bke93.js";import{Vfe,ie,kNe}from"./chunk-g4c6ggz4.js";import{Da}from"./chunk-a38xyc22.js";import{c6t,Rht,h6t,$se,Use,T5e}from"./chunk-k515hq0v.js";import{Y8n,Vgt}from"./chunk-7367658q.js";import{tfe}from"./chunk-gk3240hr.js";import{eMr}from"./chunk-w7xdsp68.js";class s{settingsLoaded=!1;helperResult=null;claimSettingsLoad(){if(this.settingsLoaded)return!1;return this.settingsLoaded=!0,!0}beginHelperRun(){return this.helperResult={error:null},this.helperResult}}var p=new G(()=>new s);function l(){return p.of(z().host)}async function Pqe(t){if(!l().claimSettingsLoad())return;let e=F()?t?.backend:void 0;if(F()&&e!==void 0){let[{seedUserSettings:o},{primeWindowsCredManBackendEnabled:i},{primeRemoteManagedSettingsCache:a},{primeWorkspaceRoots:r}]=await Promise.all([import("./chunk-7epc8qq5.js"),import("./chunk-506vnd6w.js"),import("./chunk-t5k3mx7a.js"),import("./chunk-5zc2d8f5.js")]);await r(e),await Promise.all([kNe(e),o(e,Da())]),i(ie().cachedGrowthBookFeatures?.tengu_windows_credman===!0),await a(e)}else await kNe();if(await c6t(),await Vgt(Y8n),F()&&e!==void 0){let[{credentialsStoreFor:o},{primeFileDescriptorCredentials:i},{primeStoredLoginCopy:a}]=await Promise.all([import("./chunk-fnwrvyby.js"),import("./chunk-ak1bv34f.js"),import("./chunk-wn5ccqcz.js")]),r=o(e);if(r!==void 0)await i(r,{bgAuthSnapshot:"leave"}),await a(r)}tke(Vfe),tfe();let n=eMr();if(n)process.stderr.write(`${n}
`),process.exit(1)}async function hUt(){let t=l();if(t.helperResult)return t.helperResult.error;let e=t.beginHelperRun();if(e.error=await Rht($se(),Use(),T5e()),h6t())tfe();return e.error}async function Ppt(t){return await Pqe(t),hUt()}
export{Pqe,hUt,Ppt};
