// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{zt,B}from"./chunk-sgyvc67j.js";import{V}from"./chunk-40qbe5qj.js";import{g}from"./chunk-a25t2bvk.js";class o5n{state={status:"inactive"};fallbackSadEmitted=new Set;toolsBaseline={captured:!1}}var Bwr=new zt(()=>new o5n);function o(){return Bwr.of(B())}function cre(){return o().state}function vfn(e){let t=o();if(t.state.status!=="inactive")return;t.state=e}function m3(e,t){let r=o();if(r.state.status==="reverted")return;if(r.state.status==="active")if(e==="device_tool_requested")V("info","cli_teleport_relay_ended",{reason:e});else g("upgrade_teleport_cache",e),l(e);r.state={status:"reverted",reason:e,detail:t}}function TAe(e){let t=o();if(t.fallbackSadEmitted.has(e))return;t.fallbackSadEmitted.add(e),g("upgrade_teleport_cache",e),l(e)}function l(e){V("warn","cli_teleport_relay_fallback",{reason:e})}function Cfn(e){let t=cre();if(t.status!=="active")return!1;let r=t.preAnchorLineUuids;if(e.length<r.length)return m3("context_reduced",`live view has ${e.length} lines before its tail; the arm snapshot guarded ${r.length}`),!1;for(let a=0;a<r.length;a++)if(e[a]!==r[a])return m3("context_reduced",`pre-anchor line ${a} changed since arm`),!1;return!0}function Tfn(e,t){let r=o();if(r.state.status!=="active")return!1;let a=r.toolsBaseline;if(!a.captured)return r.toolsBaseline={captured:!0,model:e,fingerprint:t},!0;if(e!==a.model)return TAe("model_mismatch"),!1;if(a.fingerprint===t)return!0;return m3("tools_changed",a.fingerprint===null?"session gained a toolset after a toolless first relay-attempted dispatch":t===null?"session lost its toolset after a tooled first relay-attempted dispatch":"outgoing toolset diverged from the first relay-attempted dispatch baseline"),!1}
export{o5n,Bwr,cre,vfn,m3,TAe,Cfn,Tfn};
