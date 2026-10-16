// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
function il(e,t){return{code:"InvalidArgument",argument:e,...t!==void 0&&{reason:t}}}function Efn(e="unknown",t){return{code:"Unavailable",failureClass:e,...t?.key!==void 0&&{key:t.key},...t?.retryAfterMs!==void 0&&{retryAfterMs:t.retryAfterMs},...t?.telemetryCode!==void 0&&{telemetryCode:t.telemetryCode}}}var kfn="OtherNames";var Tfn="LeafMoved",Hqs="HardeningUnavailable",i1o="RemoteLink",Dqs="AsideStranded";var dUr="Unsupported";function tbt(e){return eZe(e)&&e.code==="Failed"&&e.telemetryCode===dUr}var n="ByteViewUnsupported";function f1t(e){return e.code==="Failed"&&"telemetryCode"in e&&e.telemetryCode===n}var r="StoreFenced";function a1o(e){return e.code==="Failed"&&"telemetryCode"in e&&e.telemetryCode===r}var Lqs="SourceNotRegular",Nqs="SourceTooLarge",$qs="SourceShared",Fqs="SourceOutside";var o=new Set(["InvalidArgument","NotFound","AlreadyExists","PreconditionFailed","LeaseHeld","Unavailable","Failed","ScopeNotFound"]);function eZe(e){return typeof e==="object"&&e!==null&&"code"in e&&typeof e.code==="string"&&o.has(e.code)}var l1o="AbsentParent";function tZe(e){return e.code==="Failed"&&"telemetryCode"in e&&e.telemetryCode===l1o}function im(e){if(tZe(e))return"ENOENT";return"telemetryCode"in e?e.telemetryCode:void 0}var Uqs="TooLarge";function yt(e){return e.code+("failureClass"in e?` ${e.failureClass}`:"")+("telemetryCode"in e&&e.telemetryCode?` ${e.telemetryCode}`:"")+("cause"in e&&e.cause?`: ${i(e.cause)}`:"")}function i(e){return e instanceof Error?e.message:String(e)}
export{il,Efn,kfn,Tfn,Hqs,i1o,Dqs,dUr,tbt,f1t,a1o,Lqs,Nqs,$qs,Fqs,eZe,l1o,tZe,im,Uqs,yt};
