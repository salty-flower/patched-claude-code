// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{dr,C,dv}from"./chunk-gcyvvtkw.js";import{vNe}from"./chunk-5g70wphz.js";import{$a}from"./chunk-zttk1yx5.js";import{xy}from"./chunk-abk10gvz.js";import{VD}from"./chunk-9476fev4.js";var t={enabled:!1,pixelValidation:!1,clipboardPasteMultiline:!0,mouseAnimation:!0,hideBeforeAction:!0,autoTargetDisplay:!0,clipboardGuard:!0,maskFailClosed:!0,adaptiveResolution:!1,coordinateMode:"pixels"};function o(){return{...t,...dv("tengu_malort_pedway",t)}}function n(){let e=dr();return e==="max"||e==="pro"}function icn(){if($a("hipaa"))return!1;return n()&&o().enabled}function FLo(){return vNe()&&!VD()&&!$a("hipaa")&&!0&&C("tengu_dapper_acorn",!1)}function Eqn(){let{enabled:e,coordinateMode:a,...r}=o();return r}function J8e(){let e=xy();return e.frozenCoordinateMode??=o().coordinateMode,e.frozenCoordinateMode}
export{icn,FLo,Eqn,J8e};
