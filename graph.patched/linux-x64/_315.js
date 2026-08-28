// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{WG as R}from"./_316.js";import{CTb as K,zTb as p}from"./_597.js";import{Lvc as G,puc as F,wuc as l}from"./_668.js";import{BAc as E,EAc as A,vAc as y}from"./_689.js";import{HEc as g,KFc as h,LEc as P,LFc as S,PFc as w,UEc as _,sGc as x}from"./_701.js";import{DGc as V,wGc as d}from"./_703.js";import{WIc as f,aJc as B}from"./_708.js";import{Jjd as m,Kjd as H,atd as L,zkd as u}from"./_826.js";import{nud as o,pud as v}from"./_829.js";import{Axd as r}from"./_837.js";L();H();v();G();K();A();V();_();x();B();class C{settingsLoaded=!1;helperResult=null;claimSettingsLoad(){if(this.settingsLoaded)return!1;return this.settingsLoaded=!0,!0}beginHelperRun(){return this.helperResult={error:null},this.helperResult}}var M=new m(()=>new C);function b(){return M.of(u().host)}async function T(t){if(!b().claimSettingsLoad())return;let e=o()?t?.backend:void 0;if(o()&&e!==void 0){let[{seedUserSettings:i},{primeWindowsCredManBackendEnabled:n},{primeRemoteManagedSettingsCache:a}]=await Promise.all([import("./chunk-0bcrv17v.js"),import("./chunk-eyrq4gv9.js"),import("./chunk-azkeh7gp.js")]);await Promise.all([l(e),i(e,f())]),n(F().cachedGrowthBookFeatures?.tengu_windows_credman===!0),await a(e)}else await l();if(await d(),await E(y),o()&&e!==void 0){let[{credentialsStoreFor:i},{primeFileDescriptorCredentials:n},{primeStoredLoginCopy:a}]=await Promise.all([import("./chunk-3aez4fdt.js"),import("./chunk-hv05k1m2.js"),import("./chunk-xy789q9g.js")]),s=i(e);if(s!==void 0)await n(s,{bgAuthSnapshot:"leave"}),await a(s)}p();let c=R();if(c)process.stderr.write(`${c}
`),process.exit(1)}async function k(){let t=b();if(t.helperResult)return t.helperResult.error;let e=t.beginHelperRun();if(e.error=await g(h(),S(),w()),P())p();return e.error}async function X(t){return await T(t),k()}
export{M as RG,T as SG,k as TG,X as UG};
