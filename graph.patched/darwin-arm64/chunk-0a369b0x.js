// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{f}from"./chunk-ynakaye4.js";import{Qe,mhe}from"./chunk-7nh1172a.js";import{Dc,Le}from"./chunk-xv841za9.js";function HHr(e,n){return e!==void 0&&Number.isInteger(e)&&e>=6&&e<=n?e:6}var WFt={first:5,permissionRequestRenames:6,readAllowLarge:7,editOriginalFile:8,containerSearchTools:9,managedHookCall:10,keptBackgroundCommands:11,readCallsByToolUseId:12},r=Math.max(...Object.values(WFt)),c={[Qe]:{[mhe]:WFt.readAllowLarge}};var _ln={version:r,min_version:HHr(void 0,r)},Sln={version:_ln.version,min_version:1},GFt=f(()=>Le({version:Dc().min(1),min_version:Dc().min(1)}).refine(({version:e,min_version:n})=>n<=e));function s3n(e){return GFt().safeParse(e).data}function i3n(e,n){if(n.version<e.min_version)return{kind:"peer_too_old"};return e.version<n.min_version?{kind:"self_too_old"}:{kind:"agreed",version:Math.min(e.version,n.version)}}
export{HHr,WFt,_ln,Sln,GFt,s3n,i3n};
