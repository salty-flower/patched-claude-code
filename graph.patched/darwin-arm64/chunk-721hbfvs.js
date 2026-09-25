// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{V,W,tFe}from"./chunk-s8xs8s76.js";import{N}from"./chunk-37kdx3dg.js";import{Gve,le,G3e}from"./chunk-twxt3h9y.js";import{Rin,slt,Gqe,s4,QG,GCe}from"./chunk-je0c1kfp.js";import{fl}from"./chunk-aneqvevx.js";import{CHr,sLt}from"./chunk-pkhrg5v5.js";import{m8}from"./chunk-hh60eame.js";import{kho}from"./chunk-83tvy994.js";import{PFn}from"./chunk-wx0tzs6g.js";class s{settingsLoaded=!1;helperResult=null;claimSettingsLoad(){if(this.settingsLoaded)return!1;return this.settingsLoaded=!0,!0}beginHelperRun(){return this.helperResult={error:null},this.helperResult}}var p=new V(()=>new s);function l(){return p.of(W().host)}async function pst(t){if(!l().claimSettingsLoad())return;PFn();let e=N()?t?.backend:void 0;if(N()&&e!==void 0){let[{seedUserSettings:o},{primeWindowsCredManBackendEnabled:i},{primeRemoteManagedSettingsCache:a},{primeWorkspaceRoots:r}]=await Promise.all([import("./chunk-2d2vfgeq.js"),import("./chunk-k2xrzq7s.js"),import("./chunk-b0pcgcgf.js"),import("./chunk-9ec7ygb7.js")]);await r(e),await Promise.all([G3e(e),o(e,fl())]),i(le().cachedGrowthBookFeatures?.tengu_windows_credman===!0),await a(e)}else await G3e();if(await Rin(),await sLt(CHr),N()&&e!==void 0){let[{credentialsStoreFor:o},{primeFileDescriptorCredentials:i},{primeStoredLoginCopy:a}]=await Promise.all([import("./chunk-q104svt1.js"),import("./chunk-wak70fw7.js"),import("./chunk-76ntx0a8.js")]),r=o(e);if(r!==void 0)await i(r,{bgAuthSnapshot:"leave"}),await a(r)}tFe(Gve),m8();let n=kho();if(n)process.stderr.write(`${n}
`),process.exit(1)}async function onn(){let t=l();if(t.helperResult)return t.helperResult.error;let e=t.beginHelperRun();if(e.error=await slt(s4(),QG(),GCe()),Gqe())m8();return e.error}async function ZPt(t){return await pst(t),onn()}
export{pst,onn,ZPt};
