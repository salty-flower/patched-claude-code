// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{WG as R}from"./_316.js";import{BVb as K,yVb as p}from"./_600.js";import{Lvc as G,puc as F,wuc as l}from"./_668.js";import{aAc as y,gAc as E,jAc as A}from"./_687.js";import{JEc as g,MFc as h,NEc as P,NFc as S,RFc as w,WEc as _,uGc as x}from"./_701.js";import{FGc as V,yGc as d}from"./_703.js";import{$Ic as f,fJc as B}from"./_708.js";import{Jid as u,Thd as m,Uhd as H,krd as L}from"./_812.js";import{etd as o,gtd as v}from"./_825.js";import{Hxd as r}from"./_839.js";L();H();v();G();K();A();V();_();x();B();class C{settingsLoaded=!1;helperResult=null;claimSettingsLoad(){if(this.settingsLoaded)return!1;return this.settingsLoaded=!0,!0}beginHelperRun(){return this.helperResult={error:null},this.helperResult}}var M=new m(()=>new C);function b(){return M.of(u().host)}async function T(t){if(!b().claimSettingsLoad())return;let e=o()?t?.backend:void 0;if(o()&&e!==void 0){let[{seedUserSettings:i},{primeWindowsCredManBackendEnabled:n},{primeRemoteManagedSettingsCache:a}]=await Promise.all([import("./chunk-hve90vbt.js"),import("./chunk-9r4a1t7m.js"),import("./chunk-3tadvx5d.js")]);await Promise.all([l(e),i(e,f())]),n(F().cachedGrowthBookFeatures?.tengu_windows_credman===!0),await a(e)}else await l();if(await d(),await E(y),o()&&e!==void 0){let[{credentialsStoreFor:i},{primeFileDescriptorCredentials:n},{primeStoredLoginCopy:a}]=await Promise.all([import("./chunk-5axpw9gd.js"),import("./chunk-nnxs422e.js"),import("./chunk-53phvtmt.js")]),s=i(e);if(s!==void 0)await n(s,{bgAuthSnapshot:"leave"}),await a(s)}p();let c=R();if(c)process.stderr.write(`${c}
`),process.exit(1)}async function k(){let t=b();if(t.helperResult)return t.helperResult.error;let e=t.beginHelperRun();if(e.error=await g(h(),S(),w()),P())p();return e.error}async function X(t){return await T(t),k()}
export{M as RG,T as SG,k as TG,X as UG};
