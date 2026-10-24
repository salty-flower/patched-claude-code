// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{or,k,dT}from"./chunk-27xjmczp.js";import{nqe}from"./chunk-qnvapa9t.js";import{zs}from"./chunk-cg45s1mf.js";import{o_}from"./chunk-4yx6r993.js";import{UU}from"./chunk-ppcjex8g.js";import{gr}from"./chunk-7bt27r62.js";var t={enabled:!1,pixelValidation:!1,clipboardPasteMultiline:!0,mouseAnimation:!0,hideBeforeAction:!0,autoTargetDisplay:!0,clipboardGuard:!0,maskFailClosed:!0,adaptiveResolution:!1,coordinateMode:"pixels"};function o(){return{...t,...dT("tengu_malort_pedway",t)}}function n(){let e=or();return e==="max"||e==="pro"}function sUn(){if(zs("hipaa"))return!1;return n()&&o().enabled}function gRs(){return nqe()&&!UU()&&!zs("hipaa")&&!0&&k("tengu_dapper_acorn",!1)}function bCr(){return gr("tengu_clever_yeti",{safe:!0})}function wCr(){let{enabled:e,coordinateMode:a,...r}=o();return r}function spt(){let e=o_();return e.frozenCoordinateMode??=o().coordinateMode,e.frozenCoordinateMode}
export{sUn,gRs,bCr,wCr,spt};
