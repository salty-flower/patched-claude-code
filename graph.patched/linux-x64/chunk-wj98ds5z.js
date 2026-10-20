// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Te}from"./chunk-dxktn51d.js";import{p}from"./chunk-949csv87.js";import{Oce,Mce}from"./chunk-fe7rcm09.js";import{Ice}from"./chunk-c9bgdctg.js";import{O,u,Le,A}from"./chunk-mqaa2rrp.js";var i="anthropic/renderUnderSessionRules";function dai(){return{experimental:{[i]:{v:1}}}}var P=p(()=>u({experimental:u({[i]:u({v:A(1)})})}));var l=p(()=>Le({v:A(1),permissionContext:Oce(),offersHandOff:O(),classifiesEveryCall:O(),grantsApply:O()}));function pVr(r,n){let e=Mce(r)?void 0:l().safeParse(r).data;if(e===void 0||n===void 0)return;let{mode:s,...o}=e.permissionContext;if(!(s==="default"||s==="dontAsk"||s==="acceptEdits"||s==="auto"&&e.offersHandOff)||Object.values(o.alwaysAllowRules).some((t)=>t.length>0)||o.strippedDangerousRules!==void 0||o.additionalWorkingDirectories.$map.length>0||o.trustedNetworkDirectories!==void 0)return;return{offersHandOff:e.offersHandOff,classifiesEveryCall:e.classifiesEveryCall,toolPermissionContext:{...Ice(e.permissionContext,n,Te()),...!e.grantsApply&&{pollEventDeliveryGuard:!0}}}}
export{dai,pVr};
