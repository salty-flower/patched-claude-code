// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Ce}from"./chunk-kpqr86hf.js";import{f}from"./chunk-ynakaye4.js";import{$ce,Uce}from"./chunk-xkmzccqt.js";import{Fce}from"./chunk-1k7ef31c.js";import{O,u,Le,T}from"./chunk-xv841za9.js";var i="anthropic/renderUnderSessionRules";function eli(){return{experimental:{[i]:{v:1}}}}var P=f(()=>u({experimental:u({[i]:u({v:T(1)})})}));var l=f(()=>Le({v:T(1),permissionContext:$ce(),offersHandOff:O(),classifiesEveryCall:O(),grantsApply:O()}));function FVr(r,n){let e=Uce(r)?void 0:l().safeParse(r).data;if(e===void 0||n===void 0)return;let{mode:s,...o}=e.permissionContext;if(!(s==="default"||s==="dontAsk"||s==="acceptEdits"||s==="auto"&&e.offersHandOff)||Object.values(o.alwaysAllowRules).some((t)=>t.length>0)||o.strippedDangerousRules!==void 0||o.additionalWorkingDirectories.$map.length>0||o.trustedNetworkDirectories!==void 0)return;return{offersHandOff:e.offersHandOff,classifiesEveryCall:e.classifiesEveryCall,toolPermissionContext:{...Fce(e.permissionContext,n,Ce()),...!e.grantsApply&&{pollEventDeliveryGuard:!0}}}}
export{eli,FVr};
