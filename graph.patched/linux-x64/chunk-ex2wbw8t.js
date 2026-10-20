// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{j,Dtt}from"./chunk-dxktn51d.js";import{W}from"./chunk-2fbnw5gg.js";import{SGe,ue,P_t}from"./chunk-7p6jp6kj.js";import{gs}from"./chunk-4v4w26w4.js";import{oDe,Sjt,Fne,gL,zW,Bne}from"./chunk-merbp8kx.js";import{Cjo,fmn}from"./chunk-2wvy4drw.js";import{Mte}from"./chunk-qxd82yyp.js";import{dzs}from"./chunk-zmd3bmtf.js";import{ZLr}from"./chunk-35f26mfq.js";import{z}from"./chunk-rdj492d5.js";class s{settingsLoaded=!1;helperResult=null;claimSettingsLoad(){if(this.settingsLoaded)return!1;return this.settingsLoaded=!0,!0}beginHelperRun(){return this.helperResult={error:null},this.helperResult}}var p=new W(()=>new s);function l(){return p.of(j().host)}async function OFt(t){if(!l().claimSettingsLoad())return;ZLr();let e=z()?t?.backend:void 0;if(z()&&e!==void 0){let[{seedUserSettings:o},{primeWindowsCredManBackendEnabled:i},{primeRemoteManagedSettingsCache:a},{primeWorkspaceRoots:r}]=await Promise.all([import("./chunk-8jrgh1j4.js"),import("./chunk-39xzm54h.js"),import("./chunk-t1s152pa.js"),import("./chunk-g9nvwrsm.js")]);await r(e),await Promise.all([P_t(e),o(e,gs())]),i(ue().cachedGrowthBookFeatures?.tengu_windows_credman===!0),await a(e)}else await P_t();if(await oDe(),await fmn(Cjo),z()&&e!==void 0){let[{credentialsStoreFor:o},{primeFileDescriptorCredentials:i},{primeStoredLoginCopy:a}]=await Promise.all([import("./chunk-4h5rct70.js"),import("./chunk-pqepde65.js"),import("./chunk-0104fyed.js")]),r=o(e);if(r!==void 0)await i(r,{bgAuthSnapshot:"leave"}),await a(r)}Dtt(SGe),Mte();let n=dzs();if(n)process.stderr.write(`${n}
`),process.exit(1)}async function O6n(){let t=l();if(t.helperResult)return t.helperResult.error;let e=t.beginHelperRun();if(e.error=await Sjt(gL(),zW(),Bne()),Fne())Mte();return e.error}async function FDo(t){return await OFt(t),O6n()}
export{OFt,O6n,FDo};
