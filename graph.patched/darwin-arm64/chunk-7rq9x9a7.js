// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{te,wle}from"./chunk-eb6svdsk.js";import{n6}from"./chunk-gn7avpe5.js";import{ys}from"./chunk-8365qjaj.js";var xoi="read_artifact",Poi="get_artifact",Ioi="read_file",hfi="read_shared_artifact";function kp(){return wle()&&te().builtInArtifactHiddenForMcp}function yfi(e){return kp()&&e.some((r)=>r.mcpInfo?.serverName===n6)}function _fi(e){return kp()&&e.mcpInfo?.serverName===n6}function Sfi(e){if(!kp())return[];return[xoi,Poi,...e?[Ioi]:[]].map((r)=>({name:ys(n6,r),mcpInfo:{serverName:n6,toolName:r}}))}
export{xoi,Poi,Ioi,hfi,kp,yfi,_fi,Sfi};
