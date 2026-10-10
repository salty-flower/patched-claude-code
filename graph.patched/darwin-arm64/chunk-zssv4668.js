// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{p}from"./chunk-fdwn5gdv.js";import{rt,vue}from"./chunk-1d8w1b0d.js";import{Mf,De}from"./chunk-9cmjz7j9.js";function r(e,n){return e!==void 0&&Number.isInteger(e)&&e>=6&&e<=n?e:6}var qyr={first:5,permissionRequestRenames:6,readAllowLarge:7,editOriginalFile:8},o=Math.max(...Object.values(qyr)),_={[rt]:{[vue]:qyr.readAllowLarge}};var PNe={version:o,min_version:r(void 0,o)},QXt={version:PNe.version,min_version:1},lxt=p(()=>De({version:Mf().min(1),min_version:Mf().min(1)}).refine(({version:e,min_version:n})=>n<=e));function XLn(e){return lxt().safeParse(e).data}function JLn(e,n){if(n.version<e.min_version)return{kind:"peer_too_old"};return e.version<n.min_version?{kind:"self_too_old"}:{kind:"agreed",version:Math.min(e.version,n.version)}}
export{qyr,PNe,QXt,lxt,XLn,JLn};
