// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Sr,k,zv}from"./chunk-bk5ct2gw.js";import{pUe}from"./chunk-3cynezh1.js";import{Za}from"./chunk-mke1mg83.js";import{_h}from"./chunk-5q1mqj6a.js";import{rN}from"./chunk-zxj5me3b.js";var t={enabled:!1,pixelValidation:!1,clipboardPasteMultiline:!0,mouseAnimation:!0,hideBeforeAction:!0,autoTargetDisplay:!0,clipboardGuard:!0,maskFailClosed:!0,adaptiveResolution:!1,coordinateMode:"pixels"};function o(){return{...t,...zv("tengu_malort_pedway",t)}}function r(){let e=Sr();return e==="max"||e==="pro"}function Vmn(){if(Za("hipaa"))return!1;return r()&&o().enabled}function KWo(){return pUe()&&!rN()&&!Za("hipaa")&&!0&&k("tengu_dapper_acorn",!1)}function RYn(){let{enabled:e,coordinateMode:a,...n}=o();return n}function bJe(){let e=_h();return e.frozenCoordinateMode??=o().coordinateMode,e.frozenCoordinateMode}
export{Vmn,KWo,RYn,bJe};
