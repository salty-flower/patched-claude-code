// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{q,j,t2e}from"./chunk-a7cah040.js";import{L}from"./chunk-nynxm73s.js";import{Yke,ce,w8e}from"./chunk-er6f56rj.js";import{da}from"./chunk-vratfdfe.js";import{RYe,Hmt,OYe,s9,Nq,dxe}from"./chunk-e561d543.js";import{FWr,ZUt}from"./chunk-ykkj96qc.js";import{m7}from"./chunk-m8nhvfdg.js";import{HDo}from"./chunk-c18y0svt.js";import{hqn}from"./chunk-x7c75bb0.js";class s{settingsLoaded=!1;helperResult=null;claimSettingsLoad(){if(this.settingsLoaded)return!1;return this.settingsLoaded=!0,!0}beginHelperRun(){return this.helperResult={error:null},this.helperResult}}var p=new q(()=>new s);function l(){return p.of(j().host)}async function vut(t){if(!l().claimSettingsLoad())return;hqn();let e=L()?t?.backend:void 0;if(L()&&e!==void 0){let[{seedUserSettings:o},{primeWindowsCredManBackendEnabled:i},{primeRemoteManagedSettingsCache:a},{primeWorkspaceRoots:r}]=await Promise.all([import("./chunk-jy6j5wa1.js"),import("./chunk-82ehv4pb.js"),import("./chunk-m72sq650.js"),import("./chunk-ec252wtt.js")]);await r(e),await Promise.all([w8e(e),o(e,da())]),i(ce().cachedGrowthBookFeatures?.tengu_windows_credman===!0),await a(e)}else await w8e();if(await RYe(),await ZUt(FWr),L()&&e!==void 0){let[{credentialsStoreFor:o},{primeFileDescriptorCredentials:i},{primeStoredLoginCopy:a}]=await Promise.all([import("./chunk-x37gqv73.js"),import("./chunk-gx3n0b4n.js"),import("./chunk-pgf8ccy5.js")]),r=o(e);if(r!==void 0)await i(r,{bgAuthSnapshot:"leave"}),await a(r)}t2e(Yke),m7();let n=HDo();if(n)process.stderr.write(`${n}
`),process.exit(1)}async function Dun(){let t=l();if(t.helperResult)return t.helperResult.error;let e=t.beginHelperRun();if(e.error=await Hmt(s9(),Nq(),dxe()),OYe())m7();return e.error}async function BNt(t){return await vut(t),Dun()}
export{vut,Dun,BNt};
