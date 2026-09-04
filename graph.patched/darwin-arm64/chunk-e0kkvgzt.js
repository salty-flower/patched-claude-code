// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{t}from"./chunk-84crg0gy.js";import{pf,d0}from"./chunk-pwg03x6k.js";import{$dn}from"./chunk-ag61h8e3.js";import{k0}from"./chunk-vtwn1md5.js";import{fut,$Nt}from"./chunk-stsff6jb.js";import{format as o}from"util";class s{silly(e,...r){t(o(e,...r),{level:"debug"})}debug(e,...r){t(o(e,...r),{level:"debug"})}info(e,...r){t(o(e,...r),{level:"info"})}warn(e,...r){t(o(e,...r),{level:"warn"})}error(e,...r){t(o(e,...r),{level:"error"})}}function put(){let e=pf();if(e.hostAdapter)return e.hostAdapter;return e.hostAdapter={serverName:k0,logger:new s,executor:$dn({getMouseAnimationEnabled:()=>$Nt().mouseAnimation,getHideBeforeActionEnabled:()=>$Nt().hideBeforeAction}),ensureOsPermissions:async()=>{let r=d0(),n=r.tcc.checkAccessibility(),i=r.tcc.checkScreenRecording();return n&&i?{granted:!0}:{granted:!1,accessibility:n,screenRecording:i}},isDisabled:()=>!fut(),getSubGates:$Nt,getAutoUnhideEnabled:()=>!0,cropRawPatch:()=>null},e.hostAdapter}
export{put};
