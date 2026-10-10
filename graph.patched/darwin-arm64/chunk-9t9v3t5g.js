// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
function Va(e,t){return{code:"InvalidArgument",argument:e,...t!==void 0&&{reason:t}}}function zon(e="unknown",t){return{code:"Unavailable",failureClass:e,...t?.key!==void 0&&{key:t.key},...t?.retryAfterMs!==void 0&&{retryAfterMs:t.retryAfterMs},...t?.telemetryCode!==void 0&&{telemetryCode:t.telemetryCode}}}var Von="OtherNames";var qon="LeafMoved",G0s="HardeningUnavailable",ERo="RemoteLink",z0s="AsideStranded";var bxr="Unsupported";function kpt(e){return H8e(e)&&e.code==="Failed"&&e.telemetryCode===bxr}var n="ByteViewUnsupported";function jMt(e){return e.code==="Failed"&&"telemetryCode"in e&&e.telemetryCode===n}var r="StoreFenced";function vRo(e){return e.code==="Failed"&&"telemetryCode"in e&&e.telemetryCode===r}var V0s="SourceNotRegular",q0s="SourceTooLarge",K0s="SourceShared",Y0s="SourceOutside";var o=new Set(["InvalidArgument","NotFound","AlreadyExists","PreconditionFailed","LeaseHeld","Unavailable","Failed","ScopeNotFound"]);function H8e(e){return typeof e==="object"&&e!==null&&"code"in e&&typeof e.code==="string"&&o.has(e.code)}var kRo="AbsentParent";function M8e(e){return e.code==="Failed"&&"telemetryCode"in e&&e.telemetryCode===kRo}function Vm(e){if(M8e(e))return"ENOENT";return"telemetryCode"in e?e.telemetryCode:void 0}var X0s="TooLarge";function gt(e){return e.code+("failureClass"in e?` ${e.failureClass}`:"")+("telemetryCode"in e&&e.telemetryCode?` ${e.telemetryCode}`:"")+("cause"in e&&e.cause?`: ${i(e.cause)}`:"")}function i(e){return e instanceof Error?e.message:String(e)}
export{Va,zon,Von,qon,G0s,ERo,z0s,bxr,kpt,jMt,vRo,V0s,q0s,K0s,Y0s,H8e,kRo,M8e,Vm,X0s,gt};
