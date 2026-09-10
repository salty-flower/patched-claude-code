// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{jn,Ay}from"./chunk-e02s7cks.js";import{Nm}from"./chunk-v2tkmkax.js";import{Af}from"./chunk-ce74dees.js";var t={enabled:!1,pixelValidation:!1,clipboardPasteMultiline:!0,mouseAnimation:!0,hideBeforeAction:!0,autoTargetDisplay:!0,clipboardGuard:!0,maskFailClosed:!0,adaptiveResolution:!1,coordinateMode:"pixels"};function o(){return{...t,...Ay("tengu_malort_pedway",t)}}function r(){let e=jn();return e==="max"||e==="pro"}function xmt(){if(Nm("hipaa"))return!1;return r()&&o().enabled}function yBt(){let{enabled:e,coordinateMode:a,...n}=o();return n}function xEe(){let e=Af();return e.frozenCoordinateMode??=o().coordinateMode,e.frozenCoordinateMode}
export{xmt,yBt,xEe};
