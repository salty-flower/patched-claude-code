// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{t}from"./chunk-t2jwg94b.js";import{af,KH}from"./chunk-bxce5tys.js";import{yln}from"./chunk-5vx3qm4y.js";import{f0}from"./chunk-h6md7820.js";import{Elt,bLt}from"./chunk-cfkgwmtz.js";import{format as o}from"util";class s{silly(e,...r){t(o(e,...r),{level:"debug"})}debug(e,...r){t(o(e,...r),{level:"debug"})}info(e,...r){t(o(e,...r),{level:"info"})}warn(e,...r){t(o(e,...r),{level:"warn"})}error(e,...r){t(o(e,...r),{level:"error"})}}function wlt(){let e=af();if(e.hostAdapter)return e.hostAdapter;return e.hostAdapter={serverName:f0,logger:new s,executor:yln({getMouseAnimationEnabled:()=>bLt().mouseAnimation,getHideBeforeActionEnabled:()=>bLt().hideBeforeAction}),ensureOsPermissions:async()=>{let r=KH(),n=r.tcc.checkAccessibility(),i=r.tcc.checkScreenRecording();return n&&i?{granted:!0}:{granted:!1,accessibility:n,screenRecording:i}},isDisabled:()=>!Elt(),getSubGates:bLt,getAutoUnhideEnabled:()=>!0,cropRawPatch:()=>null},e.hostAdapter}
export{wlt};
