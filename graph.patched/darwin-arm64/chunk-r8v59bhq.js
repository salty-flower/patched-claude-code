// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{z,F,Bqe}from"./chunk-8mvda08c.js";import{U}from"./chunk-ht3pd6g4.js";import{NHe,ce,Tnt}from"./chunk-s46qgfx7.js";import{Vi}from"./chunk-9s9xt61j.js";import{Frt,Qkt,jCe,OG,m5,QMe}from"./chunk-861a7whf.js";import{dco,pYt}from"./chunk-xwn85bww.js";import{Pee}from"./chunk-y847j1h7.js";import{bZo}from"./chunk-v17c8s3b.js";import{Mir}from"./chunk-f3v71hre.js";class s{settingsLoaded=!1;helperResult=null;claimSettingsLoad(){if(this.settingsLoaded)return!1;return this.settingsLoaded=!0,!0}beginHelperRun(){return this.helperResult={error:null},this.helperResult}}var p=new z(()=>new s);function l(){return p.of(F().host)}async function yEt(t){if(!l().claimSettingsLoad())return;Mir();let e=U()?t?.backend:void 0;if(U()&&e!==void 0){let[{seedUserSettings:o},{primeWindowsCredManBackendEnabled:i},{primeRemoteManagedSettingsCache:a},{primeWorkspaceRoots:r}]=await Promise.all([import("./chunk-shapj9tj.js"),import("./chunk-8m1dgax2.js"),import("./chunk-a8v44mfc.js"),import("./chunk-3rx2yyst.js")]);await r(e),await Promise.all([Tnt(e),o(e,Vi())]),i(ce().cachedGrowthBookFeatures?.tengu_windows_credman===!0),await a(e)}else await Tnt();if(await Frt(),await pYt(dco),U()&&e!==void 0){let[{credentialsStoreFor:o},{primeFileDescriptorCredentials:i},{primeStoredLoginCopy:a}]=await Promise.all([import("./chunk-r2naaev5.js"),import("./chunk-tjx9hqah.js"),import("./chunk-yh66670n.js")]),r=o(e);if(r!==void 0)await i(r,{bgAuthSnapshot:"leave"}),await a(r)}Bqe(NHe),Pee();let n=bZo();if(n)process.stderr.write(`${n}
`),process.exit(1)}async function _Rn(){let t=l();if(t.helperResult)return t.helperResult.error;let e=t.beginHelperRun();if(e.error=await Qkt(OG(),m5(),QMe()),jCe())Pee();return e.error}async function lKt(t){return await yEt(t),_Rn()}
export{yEt,_Rn,lKt};
