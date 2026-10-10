// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Ee}from"./chunk-4bw62nzm.js";import{p}from"./chunk-fdwn5gdv.js";import{aBe,lBe,cBe}from"./chunk-rdkad6sh.js";import{H,u,De,C}from"./chunk-9cmjz7j9.js";var r="anthropic/renderUnderSessionRules";function e1s(){return{experimental:{[r]:{v:1}}}}var z=p(()=>u({experimental:u({[r]:u({v:C(1)})})}));var l=p(()=>De({v:C(1),permissionContext:aBe(),offersHandOff:H(),classifiesEveryCall:H(),grantsApply:H()}));function YIr(i,n){let e=lBe(i)?void 0:l().safeParse(i).data;if(e===void 0||n===void 0)return;let{mode:o,...s}=e.permissionContext;if(!(o==="default"||o==="dontAsk"||o==="acceptEdits"||o==="auto"&&e.offersHandOff)||Object.values(s.alwaysAllowRules).some((t)=>t.length>0)||s.strippedDangerousRules!==void 0||s.additionalWorkingDirectories.$map.length>0||s.trustedNetworkDirectories!==void 0)return;return{offersHandOff:e.offersHandOff,classifiesEveryCall:e.classifiesEveryCall,toolPermissionContext:{...cBe(e.permissionContext,n,Ee()),...!e.grantsApply&&{pollEventDeliveryGuard:!0}}}}
export{e1s,YIr};
