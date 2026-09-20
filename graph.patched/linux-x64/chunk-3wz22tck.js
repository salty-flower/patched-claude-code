// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{G,W,XTe}from"./chunk-txfrkyzp.js";import{F}from"./chunk-qztrb7e5.js";import{Ffe,ie,bNe}from"./chunk-30p0nwys.js";import{Ma}from"./chunk-h4q23q42.js";import{q2t,mht,Z2t,Ose,Mse,m8e}from"./chunk-ggjhe3cp.js";import{w9n,Pgt}from"./chunk-vc8y7vvq.js";import{Kpe}from"./chunk-qa67d96n.js";import{_Dr}from"./chunk-qfbke6xz.js";class s{settingsLoaded=!1;helperResult=null;claimSettingsLoad(){if(this.settingsLoaded)return!1;return this.settingsLoaded=!0,!0}beginHelperRun(){return this.helperResult={error:null},this.helperResult}}var p=new G(()=>new s);function l(){return p.of(W().host)}async function y3e(t){if(!l().claimSettingsLoad())return;let e=F()?t?.backend:void 0;if(F()&&e!==void 0){let[{seedUserSettings:o},{primeWindowsCredManBackendEnabled:i},{primeRemoteManagedSettingsCache:a},{primeWorkspaceRoots:r}]=await Promise.all([import("./chunk-rsarpsw6.js"),import("./chunk-3qy5er7z.js"),import("./chunk-6jxhmqqy.js"),import("./chunk-tdgv99t5.js")]);await r(e),await Promise.all([bNe(e),o(e,Ma())]),i(ie().cachedGrowthBookFeatures?.tengu_windows_credman===!0),await a(e)}else await bNe();if(await q2t(),await Pgt(w9n),F()&&e!==void 0){let[{credentialsStoreFor:o},{primeFileDescriptorCredentials:i},{primeStoredLoginCopy:a}]=await Promise.all([import("./chunk-93k86d18.js"),import("./chunk-xmc97ekd.js"),import("./chunk-1q85nr63.js")]),r=o(e);if(r!==void 0)await i(r,{bgAuthSnapshot:"leave"}),await a(r)}XTe(Ffe),Kpe();let n=_Dr();if(n)process.stderr.write(`${n}
`),process.exit(1)}async function Z1t(){let t=l();if(t.helperResult)return t.helperResult.error;let e=t.beginHelperRun();if(e.error=await mht(Ose(),Mse(),m8e()),Z2t())Kpe();return e.error}async function SKn(t){return await y3e(t),Z1t()}
export{y3e,Z1t,SKn};
