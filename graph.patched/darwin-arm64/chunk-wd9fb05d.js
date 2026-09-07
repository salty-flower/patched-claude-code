// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{Bn,qh}from"./chunk-n495pc0t.js";import{lg}from"./chunk-n031qbtd.js";import{Yp}from"./chunk-wz3y1ccq.js";var t={enabled:!1,pixelValidation:!1,clipboardPasteMultiline:!0,mouseAnimation:!0,hideBeforeAction:!0,autoTargetDisplay:!0,clipboardGuard:!0,maskFailClosed:!0,adaptiveResolution:!1,coordinateMode:"pixels"};function o(){return{...t,...qh("tengu_malort_pedway",t)}}function r(){let e=Bn();return e==="max"||e==="pro"}function blt(){if(lg("hipaa"))return!1;return r()&&o().enabled}function tLt(){let{enabled:e,coordinateMode:a,...n}=o();return n}function qye(){let e=Yp();return e.frozenCoordinateMode??=o().coordinateMode,e.frozenCoordinateMode}
export{blt,tLt,qye};
