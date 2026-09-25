// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
function Ai(e,t){return{code:"InvalidArgument",argument:e,...t!==void 0&&{reason:t}}}var CMt="OtherNames";var AMt="LeafMoved",oRo="HardeningUnavailable",XDr="RemoteLink",sRo="AsideStranded";var K6n="Unsupported";function _Ke(e){return FNe(e)&&e.code==="Failed"&&e.telemetryCode===K6n}var n="ByteViewUnsupported";function qct(e){return e.code==="Failed"&&"telemetryCode"in e&&e.telemetryCode===n}var r="StoreFenced";function JDr(e){return e.code==="Failed"&&"telemetryCode"in e&&e.telemetryCode===r}var iRo="SourceNotRegular",aRo="SourceTooLarge",lRo="SourceShared",cRo="SourceOutside";var o=new Set(["InvalidArgument","NotFound","AlreadyExists","PreconditionFailed","LeaseHeld","Unavailable","Failed","ScopeNotFound"]);function FNe(e){return typeof e==="object"&&e!==null&&"code"in e&&typeof e.code==="string"&&o.has(e.code)}var QDr="AbsentParent";function $Ne(e){return e.code==="Failed"&&"telemetryCode"in e&&e.telemetryCode===QDr}function zp(e){if($Ne(e))return"ENOENT";return"telemetryCode"in e?e.telemetryCode:void 0}var dRo="TooLarge";function Ze(e){return e.code+("failureClass"in e?` ${e.failureClass}`:"")+("telemetryCode"in e&&e.telemetryCode?` ${e.telemetryCode}`:"")+("cause"in e&&e.cause?`: ${i(e.cause)}`:"")}function i(e){return e instanceof Error?e.message:String(e)}
export{Ai,CMt,AMt,oRo,XDr,sRo,K6n,_Ke,qct,JDr,iRo,aRo,lRo,cRo,FNe,QDr,$Ne,zp,dRo,Ze};
