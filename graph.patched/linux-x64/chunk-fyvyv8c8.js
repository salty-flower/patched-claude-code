// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{gr,VCt}from"./chunk-wgxe6brw.js";import{i}from"./chunk-5g5ea6r9.js";import{Ptr}from"./chunk-acx2qgbr.js";function VOe(){return i.CLAUDE_CODE_REMOTE_TOOLS_FORWARD===!0||Ptr()}function cf(){return Ptr()}function AEt(){return VCt()?.desktopAppTakenAway===!0}function o4s(e=!0){if(e!==AEt())gr().desktopAppTakenAway=e||void 0}function G3e(){return VOe()&&!cf()}function T5(){return VOe()&&!cf()&&!xzt()}function xzt(){return VCt()?.takesMachinesMcpToolsAlone===!0}function X0(){return T5()}
export{VOe,cf,AEt,o4s,G3e,T5,xzt,X0};
