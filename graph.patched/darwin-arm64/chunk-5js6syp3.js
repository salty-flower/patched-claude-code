// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Gt}from"./chunk-m8nhymg4.js";import{zt,Ap,mf,bD}from"./chunk-x875pyqe.js";import{yAt,AWo,fD}from"./chunk-e44qnbvj.js";import{Um}from"./chunk-97tgbr42.js";import{ZWr}from"./chunk-jrzzk4bn.js";import{Je}from"./chunk-xynpsnk2.js";function g6s(t){let r=yAt.get(t)??AWo.get(t);if(r===void 0)return[zt,Ap,mf,bD];return r===zt?[zt]:Um()?[zt,r]:[r,zt]}function _6s(){return Je("tengu_tidy_toast",{safe:!0})}function $pa(t,r){if(r.mcpInfo===void 0||!(ZWr(t)||Gt()&&fD(t.config)))return;let o=r.mcpInfo.toolName;r.mcpInfo={...r.mcpInfo,standsInForBuiltIn:!0},r.hookMatcherFamilyNames=()=>Gt()&&!_6s()?[]:g6s(o)}
export{g6s,_6s,$pa};
