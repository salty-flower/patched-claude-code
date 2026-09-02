// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{n}from"./chunk-d0cr5d2v.js";import{Qf,rR}from"./chunk-8cwhsrt3.js";import{Jnn}from"./chunk-5w91yk64.js";import{qot,pPt}from"./chunk-9xwyp2p7.js";import{QC}from"./chunk-2txjr9b6.js";import{format as t}from"util";class s{silly(e,...r){n(t(e,...r),{level:"debug"})}debug(e,...r){n(t(e,...r),{level:"debug"})}info(e,...r){n(t(e,...r),{level:"info"})}warn(e,...r){n(t(e,...r),{level:"warn"})}error(e,...r){n(t(e,...r),{level:"error"})}}function Vot(){let e=Qf();if(e.hostAdapter)return e.hostAdapter;return e.hostAdapter={serverName:QC,logger:new s,executor:Jnn({getMouseAnimationEnabled:()=>pPt().mouseAnimation,getHideBeforeActionEnabled:()=>pPt().hideBeforeAction}),ensureOsPermissions:async()=>{let r=rR(),o=r.tcc.checkAccessibility(),i=r.tcc.checkScreenRecording();return o&&i?{granted:!0}:{granted:!1,accessibility:o,screenRecording:i}},isDisabled:()=>!qot(),getSubGates:pPt,getAutoUnhideEnabled:()=>!0,cropRawPatch:()=>null},e.hostAdapter}
export{Vot};
