// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{j,wZe}from"./chunk-eqmywwjn.js";import{z}from"./chunk-qeqy4res.js";import{G}from"./chunk-pzq28dp7.js";import{eje,ue,Ggt}from"./chunk-k16gymf7.js";import{ki}from"./chunk-9t95885m.js";import{ryt,fUt,Nte,pW,_J,OMe}from"./chunk-a502zyxr.js";import{i0o,Xdn}from"./chunk-egsk30hx.js";import{iae}from"./chunk-7dc4sv65.js";import{nLs}from"./chunk-vgtkb99v.js";import{LPr}from"./chunk-7d20cw7w.js";class s{settingsLoaded=!1;helperResult=null;claimSettingsLoad(){if(this.settingsLoaded)return!1;return this.settingsLoaded=!0,!0}beginHelperRun(){return this.helperResult={error:null},this.helperResult}}var p=new G(()=>new s);function l(){return p.of(j().host)}async function RLt(t){if(!l().claimSettingsLoad())return;LPr();let e=z()?t?.backend:void 0;if(z()&&e!==void 0){let[{seedUserSettings:o},{primeWindowsCredManBackendEnabled:i},{primeRemoteManagedSettingsCache:a},{primeWorkspaceRoots:r}]=await Promise.all([import("./chunk-nqtp77qf.js"),import("./chunk-4c36wr3f.js"),import("./chunk-6tv6cg60.js"),import("./chunk-ehbfkk5z.js")]);await r(e),await Promise.all([Ggt(e),o(e,ki())]),i(ue().cachedGrowthBookFeatures?.tengu_windows_credman===!0),await a(e)}else await Ggt();if(await ryt(),await Xdn(i0o),z()&&e!==void 0){let[{credentialsStoreFor:o},{primeFileDescriptorCredentials:i},{primeStoredLoginCopy:a}]=await Promise.all([import("./chunk-jrqx3bq5.js"),import("./chunk-3npybb1j.js"),import("./chunk-t863pxkj.js")]),r=o(e);if(r!==void 0)await i(r,{bgAuthSnapshot:"leave"}),await a(r)}wZe(eje),iae();let n=nLs();if(n)process.stderr.write(`${n}
`),process.exit(1)}async function CVn(){let t=l();if(t.helperResult)return t.helperResult.error;let e=t.beginHelperRun();if(e.error=await fUt(pW(),_J(),OMe()),Nte())iae();return e.error}async function RCo(t){return await RLt(t),CVn()}
export{RLt,CVn,RCo};
