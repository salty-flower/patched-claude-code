// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{Qt,q}from"./chunk-yhfssb7x.js";import{Y}from"./chunk-w7eyakhd.js";import{g}from"./chunk-tfyzvdvk.js";class M4n{state={status:"inactive"};fallbackSadEmitted=new Set;toolsBaseline={captured:!1}}var Twr=new Qt(()=>new M4n);function o(){return Twr.of(q())}function $De(){return o().state}function Mdn(e){let t=o();if(t.state.status!=="inactive")return;t.state=e}function fne(e,t){let r=o();if(r.state.status==="reverted")return;if(r.state.status==="active")g("upgrade_teleport_cache",e),l(e);r.state={status:"reverted",reason:e,detail:t}}function $we(e){let t=o();if(t.fallbackSadEmitted.has(e))return;t.fallbackSadEmitted.add(e),g("upgrade_teleport_cache",e),l(e)}function l(e){Y("warn","cli_teleport_relay_fallback",{reason:e})}function Ndn(e){let t=$De();if(t.status!=="active")return!1;let r=t.preAnchorLineUuids;if(e.length<r.length)return fne("context_reduced",`live view has ${e.length} lines before its tail; the arm snapshot guarded ${r.length}`),!1;for(let a=0;a<r.length;a++)if(e[a]!==r[a])return fne("context_reduced",`pre-anchor line ${a} changed since arm`),!1;return!0}function Fdn(e,t){let r=o();if(r.state.status!=="active")return!1;let a=r.toolsBaseline;if(!a.captured)return r.toolsBaseline={captured:!0,model:e,fingerprint:t},!0;if(e!==a.model)return $we("model_mismatch"),!1;if(a.fingerprint===t)return!0;return fne("tools_changed",a.fingerprint===null?"session gained a toolset after a toolless first relay-attempted dispatch":t===null?"session lost its toolset after a tooled first relay-attempted dispatch":"outgoing toolset diverged from the first relay-attempted dispatch baseline"),!1}
export{M4n,Twr,$De,Mdn,fne,$we,Ndn,Fdn};
