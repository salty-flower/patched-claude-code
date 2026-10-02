// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
function Gi(e,t){return{code:"InvalidArgument",argument:e,...t!==void 0&&{reason:t}}}function Gjt(e="unknown",t){return{code:"Unavailable",failureClass:e,...t?.key!==void 0&&{key:t.key},...t?.retryAfterMs!==void 0&&{retryAfterMs:t.retryAfterMs},...t?.telemetryCode!==void 0&&{telemetryCode:t.telemetryCode}}}var zjt="OtherNames";var Vjt="LeafMoved",SGo="HardeningUnavailable",M3r="RemoteLink",bGo="AsideStranded";var D7n="Unsupported";function ZXe(e){return NBe(e)&&e.code==="Failed"&&e.telemetryCode===D7n}var n="ByteViewUnsupported";function _ht(e){return e.code==="Failed"&&"telemetryCode"in e&&e.telemetryCode===n}var r="StoreFenced";function L3r(e){return e.code==="Failed"&&"telemetryCode"in e&&e.telemetryCode===r}var wGo="SourceNotRegular",EGo="SourceTooLarge",vGo="SourceShared",CGo="SourceOutside";var o=new Set(["InvalidArgument","NotFound","AlreadyExists","PreconditionFailed","LeaseHeld","Unavailable","Failed","ScopeNotFound"]);function NBe(e){return typeof e==="object"&&e!==null&&"code"in e&&typeof e.code==="string"&&o.has(e.code)}var N3r="AbsentParent";function FBe(e){return e.code==="Failed"&&"telemetryCode"in e&&e.telemetryCode===N3r}function yf(e){if(FBe(e))return"ENOENT";return"telemetryCode"in e?e.telemetryCode:void 0}var AGo="TooLarge";function nt(e){return e.code+("failureClass"in e?` ${e.failureClass}`:"")+("telemetryCode"in e&&e.telemetryCode?` ${e.telemetryCode}`:"")+("cause"in e&&e.cause?`: ${i(e.cause)}`:"")}function i(e){return e instanceof Error?e.message:String(e)}
export{Gi,Gjt,zjt,Vjt,SGo,M3r,bGo,D7n,ZXe,_ht,L3r,wGo,EGo,vGo,CGo,NBe,N3r,FBe,yf,AGo,nt};
