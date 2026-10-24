// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{U,Lit}from"./chunk-ersar6wn.js";import{W}from"./chunk-3y73jbfr.js";import{ue,Xvt}from"./chunk-27xjmczp.js";import{ws}from"./chunk-t4r22my8.js";import{FNe,uKt,mse,NL,nz,a5}from"./chunk-32v5ghb4.js";import{B8o,xwn}from"./chunk-dx7zad4g.js";import{NNe}from"./chunk-9f3mwram.js";import{doe}from"./chunk-58dq13zd.js";import{oQs}from"./chunk-8jjp6ksr.js";import{kGr}from"./chunk-g90t33hb.js";import{z}from"./chunk-mxa4mwnj.js";class s{settingsLoaded=!1;helperResult=null;claimSettingsLoad(){if(this.settingsLoaded)return!1;return this.settingsLoaded=!0,!0}beginHelperRun(){return this.helperResult={error:null},this.helperResult}}var p=new W(()=>new s);function l(){return p.of(U().host)}async function Y2t(t){if(!l().claimSettingsLoad())return;kGr();let e=z()?t?.backend:void 0;if(z()&&e!==void 0){let[{seedUserSettings:o},{primeWindowsCredManBackendEnabled:i},{primeRemoteManagedSettingsCache:a},{primeWorkspaceRoots:r}]=await Promise.all([import("./chunk-4tgbb31y.js"),import("./chunk-65kx1grg.js"),import("./chunk-zwm686k7.js"),import("./chunk-gd9p4vqt.js")]);await r(e),await Promise.all([Xvt(e),o(e,ws())]),i(ue().cachedGrowthBookFeatures?.tengu_windows_credman===!0),await a(e)}else await Xvt();if(await FNe(),await xwn(B8o),z()&&e!==void 0){let[{credentialsStoreFor:o},{primeFileDescriptorCredentials:i},{primeStoredLoginCopy:a}]=await Promise.all([import("./chunk-bh2g3zzv.js"),import("./chunk-3qcwcd19.js"),import("./chunk-0dnmmnjy.js")]),r=o(e);if(r!==void 0)await i(r,{bgAuthSnapshot:"leave"}),await a(r)}Lit(NNe),doe();let n=oQs();if(n)process.stderr.write(`${n}
`),process.exit(1)}async function rZn(){let t=l();if(t.helperResult)return t.helperResult.error;let e=t.beginHelperRun();if(e.error=await uKt(NL(),nz(),a5()),mse())doe();return e.error}async function bhn(t){return await Y2t(t),rZn()}
export{Y2t,rZn,bhn};
