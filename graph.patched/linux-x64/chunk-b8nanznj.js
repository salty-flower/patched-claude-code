// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
function wa(e,t){return{code:"InvalidArgument",argument:e,...t!==void 0&&{reason:t}}}function fXt(e="unknown",t){return{code:"Unavailable",failureClass:e,...t?.key!==void 0&&{key:t.key},...t?.retryAfterMs!==void 0&&{retryAfterMs:t.retryAfterMs},...t?.telemetryCode!==void 0&&{telemetryCode:t.telemetryCode}}}var mXt="OtherNames";var gXt="LeafMoved",dps="HardeningUnavailable",Cuo="RemoteLink",ups="AsideStranded";var jgr="Unsupported";function Sst(e){return yKe(e)&&e.code==="Failed"&&e.telemetryCode===jgr}var n="ByteViewUnsupported";function $Ct(e){return e.code==="Failed"&&"telemetryCode"in e&&e.telemetryCode===n}var r="StoreFenced";function Ruo(e){return e.code==="Failed"&&"telemetryCode"in e&&e.telemetryCode===r}var pps="SourceNotRegular",fps="SourceTooLarge",mps="SourceShared",gps="SourceOutside";var o=new Set(["InvalidArgument","NotFound","AlreadyExists","PreconditionFailed","LeaseHeld","Unavailable","Failed","ScopeNotFound"]);function yKe(e){return typeof e==="object"&&e!==null&&"code"in e&&typeof e.code==="string"&&o.has(e.code)}var xuo="AbsentParent";function _Ke(e){return e.code==="Failed"&&"telemetryCode"in e&&e.telemetryCode===xuo}function hm(e){if(_Ke(e))return"ENOENT";return"telemetryCode"in e?e.telemetryCode:void 0}var hps="TooLarge";function ut(e){return e.code+("failureClass"in e?` ${e.failureClass}`:"")+("telemetryCode"in e&&e.telemetryCode?` ${e.telemetryCode}`:"")+("cause"in e&&e.cause?`: ${i(e.cause)}`:"")}function i(e){return e instanceof Error?e.message:String(e)}
export{wa,fXt,mXt,gXt,dps,Cuo,ups,jgr,Sst,$Ct,Ruo,pps,fps,mps,gps,yKe,xuo,_Ke,hm,hps,ut};
