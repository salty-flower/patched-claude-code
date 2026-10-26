// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
function vl(e,t){return{code:"InvalidArgument",argument:e,...t!==void 0&&{reason:t}}}function gCn(e="unknown",t){return{code:"Unavailable",failureClass:e,...t?.key!==void 0&&{key:t.key},...t?.retryAfterMs!==void 0&&{retryAfterMs:t.retryAfterMs},...t?.telemetryCode!==void 0&&{telemetryCode:t.telemetryCode}}}var hCn="OtherNames";var yCn="LeafMoved",_mi="HardeningUnavailable",Ots="RemoteLink",Smi="AsideStranded";var JYr="Unsupported";function yAt(e){return Nxe(e)&&e.code==="Failed"&&e.telemetryCode===JYr}var n="ByteViewUnsupported";function R3t(e){return e.code==="Failed"&&"telemetryCode"in e&&e.telemetryCode===n}var r="StoreFenced";function Mts(e){return e.code==="Failed"&&"telemetryCode"in e&&e.telemetryCode===r}var bmi="SourceNotRegular",wmi="SourceTooLarge",Emi="SourceShared",vmi="SourceOutside";var o=new Set(["InvalidArgument","NotFound","AlreadyExists","PreconditionFailed","LeaseHeld","Unavailable","Failed","ScopeNotFound"]);function Nxe(e){return typeof e==="object"&&e!==null&&"code"in e&&typeof e.code==="string"&&o.has(e.code)}var Hts="AbsentParent";function _it(e){return e.code==="Failed"&&"telemetryCode"in e&&e.telemetryCode===Hts}function Zm(e){if(_it(e))return"ENOENT";return"telemetryCode"in e?e.telemetryCode:void 0}var kmi="TooLarge";function Et(e){return e.code+("failureClass"in e?` ${e.failureClass}`:"")+("telemetryCode"in e&&e.telemetryCode?` ${e.telemetryCode}`:"")+("cause"in e&&e.cause?`: ${i(e.cause)}`:"")}function i(e){return e instanceof Error?e.message:String(e)}
export{vl,gCn,hCn,yCn,_mi,Ots,Smi,JYr,yAt,R3t,Mts,bmi,wmi,Emi,vmi,Nxe,Hts,_it,Zm,kmi,Et};
