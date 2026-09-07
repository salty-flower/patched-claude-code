// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{Wt,U}from"./chunk-bj7g1p32.js";import{V}from"./chunk-30dff23n.js";import{g}from"./chunk-c3bfg9kw.js";class j2n{state={status:"inactive"};fallbackSadEmitted=new Set;toolsBaseline={captured:!1}}var xlr=new Wt(()=>new j2n);function o(){return xlr.of(U())}function iPe(){return o().state}function Sin(e){let t=o();if(t.state.status!=="inactive")return;t.state=e}function vee(e,t){let r=o();if(r.state.status==="reverted")return;if(r.state.status==="active")g("upgrade_teleport_cache",e),l(e);r.state={status:"reverted",reason:e,detail:t}}function Fbe(e){let t=o();if(t.fallbackSadEmitted.has(e))return;t.fallbackSadEmitted.add(e),g("upgrade_teleport_cache",e),l(e)}function l(e){V("warn","cli_teleport_relay_fallback",{reason:e})}function Hin(e){let t=iPe();if(t.status!=="active")return!1;let r=t.preAnchorLineUuids;if(e.length<r.length)return vee("context_reduced",`live view has ${e.length} lines before its tail; the arm snapshot guarded ${r.length}`),!1;for(let a=0;a<r.length;a++)if(e[a]!==r[a])return vee("context_reduced",`pre-anchor line ${a} changed since arm`),!1;return!0}function win(e,t){let r=o();if(r.state.status!=="active")return!1;let a=r.toolsBaseline;if(!a.captured)return r.toolsBaseline={captured:!0,model:e,fingerprint:t},!0;if(e!==a.model)return Fbe("model_mismatch"),!1;if(a.fingerprint===t)return!0;return vee("tools_changed",a.fingerprint===null?"session gained a toolset after a toolless first relay-attempted dispatch":t===null?"session lost its toolset after a tooled first relay-attempted dispatch":"outgoing toolset diverged from the first relay-attempted dispatch baseline"),!1}
export{j2n,xlr,iPe,Sin,vee,Fbe,Hin,win};
