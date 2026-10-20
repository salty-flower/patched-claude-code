// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
function hl(e,t){return{code:"InvalidArgument",argument:e,...t!==void 0&&{reason:t}}}function s_n(e="unknown",t){return{code:"Unavailable",failureClass:e,...t?.key!==void 0&&{key:t.key},...t?.retryAfterMs!==void 0&&{retryAfterMs:t.retryAfterMs},...t?.telemetryCode!==void 0&&{telemetryCode:t.telemetryCode}}}var i_n="OtherNames";var a_n="LeafMoved",KQs="HardeningUnavailable",_qo="RemoteLink",qQs="AsideStranded";var JGr="Unsupported";function qwt(e){return LTe(e)&&e.code==="Failed"&&e.telemetryCode===JGr}var n="ByteViewUnsupported";function V2t(e){return e.code==="Failed"&&"telemetryCode"in e&&e.telemetryCode===n}var r="StoreFenced";function Sqo(e){return e.code==="Failed"&&"telemetryCode"in e&&e.telemetryCode===r}var YQs="SourceNotRegular",XQs="SourceTooLarge",JQs="SourceShared",QQs="SourceOutside";var o=new Set(["InvalidArgument","NotFound","AlreadyExists","PreconditionFailed","LeaseHeld","Unavailable","Failed","ScopeNotFound"]);function LTe(e){return typeof e==="object"&&e!==null&&"code"in e&&typeof e.code==="string"&&o.has(e.code)}var bqo="AbsentParent";function wtt(e){return e.code==="Failed"&&"telemetryCode"in e&&e.telemetryCode===bqo}function Am(e){if(wtt(e))return"ENOENT";return"telemetryCode"in e?e.telemetryCode:void 0}var ZQs="TooLarge";function St(e){return e.code+("failureClass"in e?` ${e.failureClass}`:"")+("telemetryCode"in e&&e.telemetryCode?` ${e.telemetryCode}`:"")+("cause"in e&&e.cause?`: ${i(e.cause)}`:"")}function i(e){return e instanceof Error?e.message:String(e)}
export{hl,s_n,i_n,a_n,KQs,_qo,qQs,JGr,qwt,V2t,Sqo,YQs,XQs,JQs,QQs,LTe,bqo,wtt,Am,ZQs,St};
