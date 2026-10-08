// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
function Oa(e,t){return{code:"InvalidArgument",argument:e,...t!==void 0&&{reason:t}}}function wZt(e="unknown",t){return{code:"Unavailable",failureClass:e,...t?.key!==void 0&&{key:t.key},...t?.retryAfterMs!==void 0&&{retryAfterMs:t.retryAfterMs},...t?.telemetryCode!==void 0&&{telemetryCode:t.telemetryCode}}}var vZt="OtherNames";var EZt="LeafMoved",Qws="HardeningUnavailable",Nbo="RemoteLink",Zws="AsideStranded";var Dvr="Unsupported";function Olt(e){return u6e(e)&&e.code==="Failed"&&e.telemetryCode===Dvr}var n="ByteViewUnsupported";function mIt(e){return e.code==="Failed"&&"telemetryCode"in e&&e.telemetryCode===n}var r="StoreFenced";function $bo(e){return e.code==="Failed"&&"telemetryCode"in e&&e.telemetryCode===r}var evs="SourceNotRegular",tvs="SourceTooLarge",nvs="SourceShared",rvs="SourceOutside";var o=new Set(["InvalidArgument","NotFound","AlreadyExists","PreconditionFailed","LeaseHeld","Unavailable","Failed","ScopeNotFound"]);function u6e(e){return typeof e==="object"&&e!==null&&"code"in e&&typeof e.code==="string"&&o.has(e.code)}var Fbo="AbsentParent";function p6e(e){return e.code==="Failed"&&"telemetryCode"in e&&e.telemetryCode===Fbo}function Cm(e){if(p6e(e))return"ENOENT";return"telemetryCode"in e?e.telemetryCode:void 0}var ovs="TooLarge";function ft(e){return e.code+("failureClass"in e?` ${e.failureClass}`:"")+("telemetryCode"in e&&e.telemetryCode?` ${e.telemetryCode}`:"")+("cause"in e&&e.cause?`: ${i(e.cause)}`:"")}function i(e){return e instanceof Error?e.message:String(e)}
export{Oa,wZt,vZt,EZt,Qws,Nbo,Zws,Dvr,Olt,mIt,$bo,evs,tvs,nvs,rvs,u6e,Fbo,p6e,Cm,ovs,ft};
