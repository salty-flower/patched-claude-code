// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{p}from"./chunk-he0s6sfd.js";import{Je,qme}from"./chunk-ymemkdhw.js";import{Lu,He}from"./chunk-zypddzr3.js";function qRr(e,n){return e!==void 0&&Number.isInteger(e)&&e>=6&&e<=n?e:6}var k0t={first:5,permissionRequestRenames:6,readAllowLarge:7,editOriginalFile:8,containerSearchTools:9,managedHookCall:10,keptBackgroundCommands:11},r=Math.max(...Object.values(k0t)),c={[Je]:{[qme]:k0t.readAllowLarge}};var Grn={version:r,min_version:qRr(void 0,r)},Vrn={version:Grn.version,min_version:1},T0t=p(()=>He({version:Lu().min(1),min_version:Lu().min(1)}).refine(({version:e,min_version:n})=>n<=e));function HGn(e){return T0t().safeParse(e).data}function DGn(e,n){if(n.version<e.min_version)return{kind:"peer_too_old"};return e.version<n.min_version?{kind:"self_too_old"}:{kind:"agreed",version:Math.min(e.version,n.version)}}
export{qRr,k0t,Grn,Vrn,T0t,HGn,DGn};
