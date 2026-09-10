// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{z,B,K_e}from"./chunk-t8q7n4ta.js";import{N}from"./chunk-m3k3498d.js";import{tae,ne,fxe}from"./chunk-btbsn9s4.js";import{ha}from"./chunk-hfjb09vk.js";import{xxt,Wnt,Lxt,jZ,zZ,R2e}from"./chunk-kcxa79n8.js";import{d0n,Lnt}from"./chunk-1yfctqs9.js";import{Ise}from"./chunk-09w4mwcd.js";import{iqn}from"./chunk-mpehbry7.js";class s{settingsLoaded=!1;helperResult=null;claimSettingsLoad(){if(this.settingsLoaded)return!1;return this.settingsLoaded=!0,!0}beginHelperRun(){return this.helperResult={error:null},this.helperResult}}var p=new z(()=>new s);function l(){return p.of(B().host)}async function tOe(t){if(!l().claimSettingsLoad())return;let e=N()?t?.backend:void 0;if(N()&&e!==void 0){let[{seedUserSettings:o},{primeWindowsCredManBackendEnabled:i},{primeRemoteManagedSettingsCache:a},{primeWorkspaceRoots:r}]=await Promise.all([import("./chunk-yrrjztjq.js"),import("./chunk-dtj3dcc6.js"),import("./chunk-d4xshw4y.js"),import("./chunk-55rgtkap.js")]);await r(e),await Promise.all([fxe(e),o(e,ha())]),i(ne().cachedGrowthBookFeatures?.tengu_windows_credman===!0),await a(e)}else await fxe();if(await xxt(),await Lnt(d0n),N()&&e!==void 0){let[{credentialsStoreFor:o},{primeFileDescriptorCredentials:i},{primeStoredLoginCopy:a}]=await Promise.all([import("./chunk-8bjj4n67.js"),import("./chunk-2wh5p4ct.js"),import("./chunk-0njt7cxm.js")]),r=o(e);if(r!==void 0)await i(r,{bgAuthSnapshot:"leave"}),await a(r)}K_e(tae),Ise();let n=iqn();if(n)process.stderr.write(`${n}
`),process.exit(1)}async function Ipt(){let t=l();if(t.helperResult)return t.helperResult.error;let e=t.beginHelperRun();if(e.error=await Wnt(jZ(),zZ(),R2e()),Lxt())Ise();return e.error}async function San(t){return await tOe(t),Ipt()}
export{tOe,Ipt,San};
