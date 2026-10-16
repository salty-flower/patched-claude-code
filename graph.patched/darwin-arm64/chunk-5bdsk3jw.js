// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Ce}from"./chunk-xzypj06m.js";import{f}from"./chunk-5r64b6x9.js";import{MCe,DCe,LCe}from"./chunk-nh1k6kbk.js";import{H,u,Me,A}from"./chunk-82bgdty3.js";var i="anthropic/renderUnderSessionRules";function J7s(){return{experimental:{[i]:{v:1}}}}var P=f(()=>u({experimental:u({[i]:u({v:A(1)})})}));var l=f(()=>Me({v:A(1),permissionContext:MCe(),offersHandOff:H(),classifiesEveryCall:H(),grantsApply:H()}));function KBr(r,n){let e=DCe(r)?void 0:l().safeParse(r).data;if(e===void 0||n===void 0)return;let{mode:s,...o}=e.permissionContext;if(!(s==="default"||s==="dontAsk"||s==="acceptEdits"||s==="auto"&&e.offersHandOff)||Object.values(o.alwaysAllowRules).some((t)=>t.length>0)||o.strippedDangerousRules!==void 0||o.additionalWorkingDirectories.$map.length>0||o.trustedNetworkDirectories!==void 0)return;return{offersHandOff:e.offersHandOff,classifiesEveryCall:e.classifiesEveryCall,toolPermissionContext:{...LCe(e.permissionContext,n,Ce()),...!e.grantsApply&&{pollEventDeliveryGuard:!0}}}}
export{J7s,KBr};
