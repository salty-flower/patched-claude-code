// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{q,B,eYe}from"./chunk-4bw62nzm.js";import{j}from"./chunk-k1419ccf.js";import{UFe,ce,vct}from"./chunk-bk5ct2gw.js";import{ji}from"./chunk-wtch2p0g.js";import{$dt,z0t,tZ,IB,q8,Rxe}from"./chunk-x0dc37w9.js";import{Zwo,$tn}from"./chunk-zrh141bk.js";import{coe}from"./chunk-g135h42d.js";import{YSs}from"./chunk-61z91y8b.js";import{vSr}from"./chunk-r9qyb6nq.js";class s{settingsLoaded=!1;helperResult=null;claimSettingsLoad(){if(this.settingsLoaded)return!1;return this.settingsLoaded=!0,!0}beginHelperRun(){return this.helperResult={error:null},this.helperResult}}var p=new q(()=>new s);function l(){return p.of(B().host)}async function lPt(t){if(!l().claimSettingsLoad())return;vSr();let e=j()?t?.backend:void 0;if(j()&&e!==void 0){let[{seedUserSettings:o},{primeWindowsCredManBackendEnabled:i},{primeRemoteManagedSettingsCache:a},{primeWorkspaceRoots:r}]=await Promise.all([import("./chunk-0adnpbyy.js"),import("./chunk-zqd3qazt.js"),import("./chunk-2b6zzxr2.js"),import("./chunk-qpx7hzw7.js")]);await r(e),await Promise.all([vct(e),o(e,ji())]),i(ce().cachedGrowthBookFeatures?.tengu_windows_credman===!0),await a(e)}else await vct();if(await $dt(),await $tn(Zwo),j()&&e!==void 0){let[{credentialsStoreFor:o},{primeFileDescriptorCredentials:i},{primeStoredLoginCopy:a}]=await Promise.all([import("./chunk-awpan61t.js"),import("./chunk-vf5mkm3r.js"),import("./chunk-fmhdahh3.js")]),r=o(e);if(r!==void 0)await i(r,{bgAuthSnapshot:"leave"}),await a(r)}eYe(UFe),coe();let n=YSs();if(n)process.stderr.write(`${n}
`),process.exit(1)}async function BFn(){let t=l();if(t.helperResult)return t.helperResult.error;let e=t.beginHelperRun();if(e.error=await z0t(IB(),q8(),Rxe()),tZ())coe();return e.error}async function dJt(t){return await lPt(t),BFn()}
export{lPt,BFn,dJt};
