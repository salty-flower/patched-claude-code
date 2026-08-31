// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{n}from"./chunk-ynzt0fm1.js";import{Jp,aH}from"./chunk-sfrkvpqz.js";import{Znn}from"./chunk-10k8n1zq.js";import{Xot,fPt}from"./chunk-6ytn5t4g.js";import{e0}from"./chunk-t1mp6dc7.js";import{format as t}from"util";class s{silly(e,...r){n(t(e,...r),{level:"debug"})}debug(e,...r){n(t(e,...r),{level:"debug"})}info(e,...r){n(t(e,...r),{level:"info"})}warn(e,...r){n(t(e,...r),{level:"warn"})}error(e,...r){n(t(e,...r),{level:"error"})}}function Kot(){let e=Jp();if(e.hostAdapter)return e.hostAdapter;return e.hostAdapter={serverName:e0,logger:new s,executor:Znn({getMouseAnimationEnabled:()=>fPt().mouseAnimation,getHideBeforeActionEnabled:()=>fPt().hideBeforeAction}),ensureOsPermissions:async()=>{let r=aH(),o=r.tcc.checkAccessibility(),i=r.tcc.checkScreenRecording();return o&&i?{granted:!0}:{granted:!1,accessibility:o,screenRecording:i}},isDisabled:()=>!Xot(),getSubGates:fPt,getAutoUnhideEnabled:()=>!0,cropRawPatch:()=>null},e.hostAdapter}
export{Kot};
