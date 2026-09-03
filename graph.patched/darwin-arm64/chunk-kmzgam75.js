// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{X,G}from"./chunk-hdbxv3pp.js";import{L}from"./chunk-ma94d7pd.js";import{ie,Wve}from"./chunk-h6md7820.js";import{va}from"./chunk-tgbc60ar.js";import{mRe,z$e,tCt,gQ,hQ,Y$e}from"./chunk-yhqjr2er.js";import{ERn,QQe}from"./chunk-zd4qet6w.js";import{Noe}from"./chunk-dy9qenww.js";import{rBn}from"./chunk-nfpmfh27.js";class s{settingsLoaded=!1;helperResult=null;claimSettingsLoad(){if(this.settingsLoaded)return!1;return this.settingsLoaded=!0,!0}beginHelperRun(){return this.helperResult={error:null},this.helperResult}}var igr=new X(()=>new s);function l(){return igr.of(G().host)}async function TIe(t){if(!l().claimSettingsLoad())return;let e=L()?t?.backend:void 0;if(L()&&e!==void 0){let[{seedUserSettings:o},{primeWindowsCredManBackendEnabled:i},{primeRemoteManagedSettingsCache:n},{primeWorkspaceRoots:r}]=await Promise.all([import("./chunk-8y2ps91t.js"),import("./chunk-qeyvnamg.js"),import("./chunk-gn3y88jm.js"),import("./chunk-sy7te6h7.js")]);await r(e),await Promise.all([Wve(e),o(e,va())]),i(ie().cachedGrowthBookFeatures?.tengu_windows_credman===!0),await n(e)}else await Wve();if(await mRe(),await QQe(ERn),L()&&e!==void 0){let[{credentialsStoreFor:o},{primeFileDescriptorCredentials:i},{primeStoredLoginCopy:n}]=await Promise.all([import("./chunk-f27dc5zz.js"),import("./chunk-0b71g9es.js"),import("./chunk-cp4e8qcv.js")]),r=o(e);if(r!==void 0)await i(r,{bgAuthSnapshot:"leave"}),await n(r)}Noe();let a=rBn();if(a)process.stderr.write(`${a}
`),process.exit(1)}async function Alt(){let t=l();if(t.helperResult)return t.helperResult.error;let e=t.beginHelperRun();if(e.error=await z$e(gQ(),hQ(),Y$e()),tCt())Noe();return e.error}async function V9e(t){return await TIe(t),Alt()}
export{igr,TIe,Alt,V9e};
