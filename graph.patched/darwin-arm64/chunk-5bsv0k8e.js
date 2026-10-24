// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{f}from"./chunk-nyvhtfb3.js";import{qe,cSe}from"./chunk-djgw0xdn.js";import{Bd,Ue}from"./chunk-k395ayhm.js";function d2r(e,n){return e!==void 0&&Number.isInteger(e)&&e>=6&&e<=n?e:6}var l2t={first:5,permissionRequestRenames:6,readAllowLarge:7,editOriginalFile:8,containerSearchTools:9,managedHookCall:10,keptBackgroundCommands:11,readCallsByToolUseId:12,repoRulesReadHere:13,repoRulesOnRenders:14,repoRulesOnUploads:15},r=Math.max(...Object.values(l2t)),d={[qe]:{[cSe]:l2t.readAllowLarge}};var dgn={version:r,min_version:d2r(void 0,r)},cgn={version:dgn.version,min_version:1},d2t=f(()=>Ue({version:Bd().min(1),min_version:Bd().min(1)}).refine(({version:e,min_version:n})=>n<=e));function FJn(e){return d2t().safeParse(e).data}function $Jn(e,n){if(n.version<e.min_version)return{kind:"peer_too_old"};return e.version<n.min_version?{kind:"self_too_old"}:{kind:"agreed",version:Math.min(e.version,n.version)}}
export{d2r,l2t,dgn,cgn,d2t,FJn,$Jn};
