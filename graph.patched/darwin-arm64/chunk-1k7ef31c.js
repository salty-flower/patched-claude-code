// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{t}from"./chunk-tdxkq523.js";import{i3}from"./chunk-gzssw8ss.js";import{Xde,jn,En}from"./chunk-paax7ahr.js";import{ct}from"./chunk-ex8w1b3a.js";import{PR,Vve}from"./chunk-y573qe02.js";import{E1}from"./chunk-cmsf207v.js";import{nYo}from"./chunk-xkmzccqt.js";import{Qe}from"./chunk-7nh1172a.js";function Fce(a,s,e){let o=nYo(a),i=(r)=>Object.fromEntries(E1.map((l)=>[l,[...o[r][l]??[],...(s[r][l]??[]).filter((n)=>{if(!i3.test(n))return!0;return t(`Ignoring the launch ${r==="alwaysDenyRules"?"deny":"ask"} rule "${n}" (from CLAUDE_CODE_MCP_SERVE_SETTINGS, or for ReadFileForRemote and ListDirectoryForRemote a settings file here): a rule starting with "!" removes paths from the rules listed before it instead of restricting anything, and here those include the calling session's own rules. Spell the rule without the exception instead.`,{level:"warn"}),!1}).flatMap((n)=>[n,...m(n,e)])]]));return{...o,alwaysDenyRules:i("alwaysDenyRules"),alwaysAskRules:i("alwaysAskRules")}}function m(a,s){let{toolName:e,ruleContent:o}=jn(a);if(o===void 0||e!==Qe&&e!==ct)return[];let{relativePattern:i,root:r}=Vve(o,s);if(r!==null)return[];return[En({toolName:e,ruleContent:`/${Xde(`${PR(s)}/`,{escapeGlobs:!0})}**/${i}`})]}
export{Fce};
