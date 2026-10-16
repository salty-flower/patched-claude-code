// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{vr,k,zk}from"./chunk-1901fdh6.js";import{DWe}from"./chunk-d9vq4daa.js";import{Xi}from"./chunk-1qxwm3cf.js";import{Zh}from"./chunk-vdfx3rm8.js";import{xF}from"./chunk-g9np3j8j.js";var t={enabled:!1,pixelValidation:!1,clipboardPasteMultiline:!0,mouseAnimation:!0,hideBeforeAction:!0,autoTargetDisplay:!0,clipboardGuard:!0,maskFailClosed:!0,adaptiveResolution:!1,coordinateMode:"pixels"};function o(){return{...t,...zk("tengu_malort_pedway",t)}}function a(){let e=vr();return e==="max"||e==="pro"}function akn(){if(Xi("hipaa"))return!1;return a()&&o().enabled}function pQo(){return DWe()&&!xF()&&!Xi("hipaa")&&!0&&k("tengu_dapper_acorn",!1)}function _sr(){let{enabled:e,coordinateMode:n,...r}=o();return r}function srt(){let e=Zh();return e.frozenCoordinateMode??=o().coordinateMode,e.frozenCoordinateMode}
export{akn,pQo,_sr,srt};
