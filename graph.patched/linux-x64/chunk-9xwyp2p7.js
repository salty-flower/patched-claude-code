// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{Nn,gh}from"./chunk-1e5y3pjf.js";import{yh}from"./chunk-xmefb9d5.js";import{Qf}from"./chunk-8cwhsrt3.js";var t={enabled:!1,pixelValidation:!1,clipboardPasteMultiline:!0,mouseAnimation:!0,hideBeforeAction:!0,autoTargetDisplay:!0,clipboardGuard:!0,maskFailClosed:!0,adaptiveResolution:!1,coordinateMode:"pixels"};function o(){return{...t,...gh("tengu_malort_pedway",t)}}function r(){let e=Nn();return e==="max"||e==="pro"}function qot(){if(yh("hipaa"))return!1;return r()&&o().enabled}function pPt(){let{enabled:e,coordinateMode:a,...n}=o();return n}function bhe(){let e=Qf();return e.frozenCoordinateMode??=o().coordinateMode,e.frozenCoordinateMode}
export{qot,pPt,bhe};
