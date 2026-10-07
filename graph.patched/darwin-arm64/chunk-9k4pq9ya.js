// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{cr,k,UE}from"./chunk-s46qgfx7.js";import{pDe}from"./chunk-nqb0d8cm.js";import{Ja}from"./chunk-napcsc17.js";import{ly}from"./chunk-h6t453jw.js";import{oD}from"./chunk-xenekfj4.js";var t={enabled:!1,pixelValidation:!1,clipboardPasteMultiline:!0,mouseAnimation:!0,hideBeforeAction:!0,autoTargetDisplay:!0,clipboardGuard:!0,maskFailClosed:!0,adaptiveResolution:!1,coordinateMode:"pixels"};function o(){return{...t,...UE("tengu_malort_pedway",t)}}function r(){let e=cr();return e==="max"||e==="pro"}function Oon(){if(Ja("hipaa"))return!1;return r()&&o().enabled}function ZRo(){return pDe()&&!oD()&&!Ja("hipaa")&&!0&&k("tengu_dapper_acorn",!1)}function T2n(){let{enabled:e,coordinateMode:a,...n}=o();return n}function Z4e(){let e=ly();return e.frozenCoordinateMode??=o().coordinateMode,e.frozenCoordinateMode}
export{Oon,ZRo,T2n,Z4e};
