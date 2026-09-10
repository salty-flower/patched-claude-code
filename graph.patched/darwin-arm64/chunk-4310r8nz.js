// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{j,B,K_e}from"./chunk-cet8na02.js";import{M}from"./chunk-wmtek349.js";import{lae,ne,wxe}from"./chunk-vryy7b5x.js";import{ha}from"./chunk-1qb0n0qf.js";import{Vxt,srt,Zxt,KZ,YZ,$je}from"./chunk-ja8knfm8.js";import{jPn,Jnt}from"./chunk-62vz25mj.js";import{Lse}from"./chunk-510v83w9.js";import{NGn}from"./chunk-14cxg64x.js";class s{settingsLoaded=!1;helperResult=null;claimSettingsLoad(){if(this.settingsLoaded)return!1;return this.settingsLoaded=!0,!0}beginHelperRun(){return this.helperResult={error:null},this.helperResult}}var p=new j(()=>new s);function l(){return p.of(B().host)}async function aDe(t){if(!l().claimSettingsLoad())return;let e=M()?t?.backend:void 0;if(M()&&e!==void 0){let[{seedUserSettings:o},{primeWindowsCredManBackendEnabled:i},{primeRemoteManagedSettingsCache:a},{primeWorkspaceRoots:r}]=await Promise.all([import("./chunk-n1pv8trk.js"),import("./chunk-1cmgsm8z.js"),import("./chunk-wvxbv9ww.js"),import("./chunk-2azhjywd.js")]);await r(e),await Promise.all([wxe(e),o(e,ha())]),i(ne().cachedGrowthBookFeatures?.tengu_windows_credman===!0),await a(e)}else await wxe();if(await Vxt(),await Jnt(jPn),M()&&e!==void 0){let[{credentialsStoreFor:o},{primeFileDescriptorCredentials:i},{primeStoredLoginCopy:a}]=await Promise.all([import("./chunk-r67vmvzz.js"),import("./chunk-gt8ca26n.js"),import("./chunk-zca52a21.js")]),r=o(e);if(r!==void 0)await i(r,{bgAuthSnapshot:"leave"}),await a(r)}K_e(lae),Lse();let n=NGn();if(n)process.stderr.write(`${n}
`),process.exit(1)}async function Bpt(){let t=l();if(t.helperResult)return t.helperResult.error;let e=t.beginHelperRun();if(e.error=await srt(KZ(),YZ(),$je()),Zxt())Lse();return e.error}async function L4e(t){return await aDe(t),Bpt()}
export{aDe,Bpt,L4e};
