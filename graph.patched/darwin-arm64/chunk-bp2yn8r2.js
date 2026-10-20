// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{gr,k,mC}from"./chunk-bvn0epzr.js";import{tze}from"./chunk-gzssw8ss.js";import{oi}from"./chunk-jy7b5szn.js";import{Ty}from"./chunk-kmk705pn.js";import{p$}from"./chunk-31gy95w5.js";var t={enabled:!1,pixelValidation:!1,clipboardPasteMultiline:!0,mouseAnimation:!0,hideBeforeAction:!0,autoTargetDisplay:!0,clipboardGuard:!0,maskFailClosed:!0,adaptiveResolution:!1,coordinateMode:"pixels"};function o(){return{...t,...mC("tengu_malort_pedway",t)}}function a(){let e=gr();return e==="max"||e==="pro"}function MMn(){if(oi("hipaa"))return!1;return a()&&o().enabled}function Rms(){return tze()&&!p$()&&!oi("hipaa")&&!0&&k("tengu_dapper_acorn",!1)}function Ngr(){let{enabled:e,coordinateMode:n,...r}=o();return r}function rat(){let e=Ty();return e.frozenCoordinateMode??=o().coordinateMode,e.frozenCoordinateMode}
export{MMn,Rms,Ngr,rat};
