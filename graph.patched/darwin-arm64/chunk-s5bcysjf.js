// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{j,$tt}from"./chunk-kpqr86hf.js";import{W}from"./chunk-cne7d53x.js";import{x2e,ue,F_t}from"./chunk-bvn0epzr.js";import{gs}from"./chunk-58pv6r0f.js";import{uHe,Ojt,zne,SD,e2,Kne}from"./chunk-qwytg6a7.js";import{rWo,xmn}from"./chunk-mpngpv83.js";import{Ute}from"./chunk-p1erqc0j.js";import{J2s}from"./chunk-zs1m7ag3.js";import{GDr}from"./chunk-n0np4yvr.js";import{z}from"./chunk-p017vfx2.js";class s{settingsLoaded=!1;helperResult=null;claimSettingsLoad(){if(this.settingsLoaded)return!1;return this.settingsLoaded=!0,!0}beginHelperRun(){return this.helperResult={error:null},this.helperResult}}var p=new W(()=>new s);function l(){return p.of(j().host)}async function h$t(t){if(!l().claimSettingsLoad())return;GDr();let e=z()?t?.backend:void 0;if(z()&&e!==void 0){let[{seedUserSettings:o},{primeWindowsCredManBackendEnabled:i},{primeRemoteManagedSettingsCache:a},{primeWorkspaceRoots:r}]=await Promise.all([import("./chunk-jf3h3xx0.js"),import("./chunk-c0xrxchc.js"),import("./chunk-g6j7anfv.js"),import("./chunk-5qaa2kde.js")]);await r(e),await Promise.all([F_t(e),o(e,gs())]),i(ue().cachedGrowthBookFeatures?.tengu_windows_credman===!0),await a(e)}else await F_t();if(await uHe(),await xmn(rWo),z()&&e!==void 0){let[{credentialsStoreFor:o},{primeFileDescriptorCredentials:i},{primeStoredLoginCopy:a}]=await Promise.all([import("./chunk-rb23hp3w.js"),import("./chunk-dsmqx7qp.js"),import("./chunk-31yw9cn7.js")]),r=o(e);if(r!==void 0)await i(r,{bgAuthSnapshot:"leave"}),await a(r)}$tt(x2e),Ute();let n=J2s();if(n)process.stderr.write(`${n}
`),process.exit(1)}async function k4n(){let t=l();if(t.helperResult)return t.helperResult.error;let e=t.beginHelperRun();if(e.error=await Ojt(SD(),e2(),Kne()),zne())Ute();return e.error}async function adn(t){return await h$t(t),k4n()}
export{h$t,k4n,adn};
