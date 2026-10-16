// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{f}from"./chunk-5r64b6x9.js";import{Je,tge}from"./chunk-1rc6bk2z.js";import{Lu,Me}from"./chunk-82bgdty3.js";function hxr(e,n){return e!==void 0&&Number.isInteger(e)&&e>=6&&e<=n?e:6}var DDt={first:5,permissionRequestRenames:6,readAllowLarge:7,editOriginalFile:8,containerSearchTools:9,managedHookCall:10,keptBackgroundCommands:11},r=Math.max(...Object.values(DDt)),c={[Je]:{[tge]:DDt.readAllowLarge}};var ion={version:r,min_version:hxr(void 0,r)},aon={version:ion.version,min_version:1},LDt=f(()=>Me({version:Lu().min(1),min_version:Lu().min(1)}).refine(({version:e,min_version:n})=>n<=e));function QGn(e){return LDt().safeParse(e).data}function ZGn(e,n){if(n.version<e.min_version)return{kind:"peer_too_old"};return e.version<n.min_version?{kind:"self_too_old"}:{kind:"agreed",version:Math.min(e.version,n.version)}}
export{hxr,DDt,ion,aon,LDt,QGn,ZGn};
