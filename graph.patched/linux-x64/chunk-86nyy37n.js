// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Te}from"./chunk-eqmywwjn.js";import{p}from"./chunk-he0s6sfd.js";import{CTe,RTe,xTe}from"./chunk-8atjvxs1.js";import{M,u,He,A}from"./chunk-zypddzr3.js";var i="anthropic/renderUnderSessionRules";function fJs(){return{experimental:{[i]:{v:1}}}}var P=p(()=>u({experimental:u({[i]:u({v:A(1)})})}));var l=p(()=>He({v:A(1),permissionContext:CTe(),offersHandOff:M(),classifiesEveryCall:M(),grantsApply:M()}));function k1r(r,n){let e=RTe(r)?void 0:l().safeParse(r).data;if(e===void 0||n===void 0)return;let{mode:s,...o}=e.permissionContext;if(!(s==="default"||s==="dontAsk"||s==="acceptEdits"||s==="auto"&&e.offersHandOff)||Object.values(o.alwaysAllowRules).some((t)=>t.length>0)||o.strippedDangerousRules!==void 0||o.additionalWorkingDirectories.$map.length>0||o.trustedNetworkDirectories!==void 0)return;return{offersHandOff:e.offersHandOff,classifiesEveryCall:e.classifiesEveryCall,toolPermissionContext:{...xTe(e.permissionContext,n,Te()),...!e.grantsApply&&{pollEventDeliveryGuard:!0}}}}
export{fJs,k1r};
