// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{ke}from"./chunk-ersar6wn.js";import{f}from"./chunk-nyvhtfb3.js";import{Wz,Gz}from"./chunk-5s2n3v1z.js";import{jz}from"./chunk-x289pnbh.js";import{D$e}from"./chunk-hhym9jqc.js";import{M,u,Ue,T}from"./chunk-k395ayhm.js";var i="anthropic/renderUnderSessionRules";function Evi(){return{experimental:{[i]:{v:1}}}}var z=f(()=>u({experimental:u({[i]:u({v:T(1)})})}));var a=f(()=>Ue({v:T(1),permissionContext:Wz(),offersHandOff:M(),classifiesEveryCall:M(),grantsApply:M()}));function DJr(r,n,t){let e=Gz(r)?void 0:a().safeParse(r).data;if(e===void 0||n===void 0)return;let{mode:s,...o}=e.permissionContext;if(!(s==="default"||s==="dontAsk"||s==="acceptEdits"||s==="auto"&&e.offersHandOff)||Object.values(o.alwaysAllowRules).some((l)=>l.length>0)||o.strippedDangerousRules!==void 0||o.additionalWorkingDirectories.$map.length>0||o.trustedNetworkDirectories!==void 0)return;return{offersHandOff:e.offersHandOff,classifiesEveryCall:e.classifiesEveryCall,toolPermissionContext:{...D$e(jz(e.permissionContext,n,ke(),t)),...!e.grantsApply&&{pollEventDeliveryGuard:!0}}}}
export{Evi,DJr};
