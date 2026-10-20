// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{p}from"./chunk-949csv87.js";import{Qe,ahe}from"./chunk-71nhcy1n.js";import{Hc,Le}from"./chunk-mqaa2rrp.js";function pDr(e,n){return e!==void 0&&Number.isInteger(e)&&e>=6&&e<=n?e:6}var O$t={first:5,permissionRequestRenames:6,readAllowLarge:7,editOriginalFile:8,containerSearchTools:9,managedHookCall:10,keptBackgroundCommands:11,readCallsByToolUseId:12},r=Math.max(...Object.values(O$t)),c={[Qe]:{[ahe]:O$t.readAllowLarge}};var rln={version:r,min_version:pDr(void 0,r)},oln={version:rln.version,min_version:1},M$t=p(()=>Le({version:Hc().min(1),min_version:Hc().min(1)}).refine(({version:e,min_version:n})=>n<=e));function B4n(e){return M$t().safeParse(e).data}function j4n(e,n){if(n.version<e.min_version)return{kind:"peer_too_old"};return e.version<n.min_version?{kind:"self_too_old"}:{kind:"agreed",version:Math.min(e.version,n.version)}}
export{pDr,O$t,rln,oln,M$t,B4n,j4n};
