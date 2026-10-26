// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{Z,mj}from"./chunk-bxg8d6dd.js";import{jo}from"./chunk-9m893g74.js";import{Id}from"./chunk-hdf6qbgr.js";import{sK}from"./chunk-hxm5yqk0.js";var wDe="read_artifact",_2r="get_artifact",rbi="read_file",S2r="read_shared_artifact",sAe="read_comments",vgn="reply_comment",XJn="resolve_comment";function Oce(e){return jo(Id,e)}function JJn(e){return{name:Oce(e),mcpInfo:{serverName:Id,toolName:e}}}function ul(){return mj()&&Z().builtInArtifactHiddenForMcp}function R2o(e){let o=sK;return ul()&&[e.name,e.underlyingV1ToolName,e.familyParentToolName].some((t)=>t!==void 0&&o.includes(t))}function axi(e){return ul()&&e.some((o)=>o.mcpInfo?.serverName===Id)}function lxi(e){return ul()&&e.mcpInfo?.serverName===Id}function dxi(e){if(!ul())return[];return[wDe,_2r,...e?[rbi]:[]].map(JJn)}class n{tool=null;register(e){this.tool=e}}var b2r=new n;function kgn(){return ul()?b2r.tool??void 0:void 0}
export{wDe,_2r,rbi,S2r,sAe,vgn,XJn,Oce,JJn,ul,R2o,axi,lxi,dxi,b2r,kgn};
