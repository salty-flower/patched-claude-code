// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
function Ha(e,t){return{code:"InvalidArgument",argument:e,...t!==void 0&&{reason:t}}}function NZt(e="unknown",t){return{code:"Unavailable",failureClass:e,...t?.key!==void 0&&{key:t.key},...t?.retryAfterMs!==void 0&&{retryAfterMs:t.retryAfterMs},...t?.telemetryCode!==void 0&&{telemetryCode:t.telemetryCode}}}var FZt="OtherNames";var $Zt="LeafMoved",DEs="HardeningUnavailable",fbo="RemoteLink",LEs="AsideStranded";var ovr="Unsupported";function Ult(e){return _4e(e)&&e.code==="Failed"&&e.telemetryCode===ovr}var n="ByteViewUnsupported";function AIt(e){return e.code==="Failed"&&"telemetryCode"in e&&e.telemetryCode===n}var r="StoreFenced";function mbo(e){return e.code==="Failed"&&"telemetryCode"in e&&e.telemetryCode===r}var NEs="SourceNotRegular",FEs="SourceTooLarge",$Es="SourceShared",UEs="SourceOutside";var o=new Set(["InvalidArgument","NotFound","AlreadyExists","PreconditionFailed","LeaseHeld","Unavailable","Failed","ScopeNotFound"]);function _4e(e){return typeof e==="object"&&e!==null&&"code"in e&&typeof e.code==="string"&&o.has(e.code)}var gbo="AbsentParent";function S4e(e){return e.code==="Failed"&&"telemetryCode"in e&&e.telemetryCode===gbo}function Tm(e){if(S4e(e))return"ENOENT";return"telemetryCode"in e?e.telemetryCode:void 0}var BEs="TooLarge";function ft(e){return e.code+("failureClass"in e?` ${e.failureClass}`:"")+("telemetryCode"in e&&e.telemetryCode?` ${e.telemetryCode}`:"")+("cause"in e&&e.cause?`: ${i(e.cause)}`:"")}function i(e){return e instanceof Error?e.message:String(e)}
export{Ha,NZt,FZt,$Zt,DEs,fbo,LEs,ovr,Ult,AIt,mbo,NEs,FEs,$Es,UEs,_4e,gbo,S4e,Tm,BEs,ft};
