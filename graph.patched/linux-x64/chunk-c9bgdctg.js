// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{t}from"./chunk-n5v91jc3.js";import{J4}from"./chunk-ww4tybgt.js";import{Wde,jn,vn}from"./chunk-7fdn9j0a.js";import{ct}from"./chunk-4qs43hr1.js";import{CR,UEe}from"./chunk-gzxd3rp1.js";import{gB}from"./chunk-pva8dd23.js";import{T8o}from"./chunk-fe7rcm09.js";import{Qe}from"./chunk-71nhcy1n.js";function Ice(a,s,e){let o=T8o(a),i=(r)=>Object.fromEntries(gB.map((l)=>[l,[...o[r][l]??[],...(s[r][l]??[]).filter((n)=>{if(!J4.test(n))return!0;return t(`Ignoring the launch ${r==="alwaysDenyRules"?"deny":"ask"} rule "${n}" (from CLAUDE_CODE_MCP_SERVE_SETTINGS, or for ReadFileForRemote and ListDirectoryForRemote a settings file here): a rule starting with "!" removes paths from the rules listed before it instead of restricting anything, and here those include the calling session's own rules. Spell the rule without the exception instead.`,{level:"warn"}),!1}).flatMap((n)=>[n,...m(n,e)])]]));return{...o,alwaysDenyRules:i("alwaysDenyRules"),alwaysAskRules:i("alwaysAskRules")}}function m(a,s){let{toolName:e,ruleContent:o}=jn(a);if(o===void 0||e!==Qe&&e!==ct)return[];let{relativePattern:i,root:r}=UEe(o,s);if(r!==null)return[];return[vn({toolName:e,ruleContent:`/${Wde(`${CR(s)}/`,{escapeGlobs:!0})}**/${i}`})]}
export{Ice};
