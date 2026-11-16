// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Gt}from"./chunk-r3adsed5.js";import{zt,Rp,pf,bD}from"./chunk-ykf94k84.js";import{fCt,t2o,cD}from"./chunk-a5a37ds7.js";import{Um}from"./chunk-bvge8knx.js";import{R2r}from"./chunk-jspmyf04.js";import{Je}from"./chunk-eye8byva.js";function L2s(t){let r=fCt.get(t)??t2o.get(t);if(r===void 0)return[zt,Rp,pf,bD];return r===zt?[zt]:Um()?[zt,r]:[r,zt]}function H2s(){return Je("tengu_tidy_toast",{safe:!0})}function Xfa(t,r){if(r.mcpInfo===void 0||!(R2r(t)||Gt()&&cD(t.config)))return;let o=r.mcpInfo.toolName;r.mcpInfo={...r.mcpInfo,standsInForBuiltIn:!0},r.hookMatcherFamilyNames=()=>Gt()&&!H2s()?[]:L2s(o)}
export{L2s,H2s,Xfa};
