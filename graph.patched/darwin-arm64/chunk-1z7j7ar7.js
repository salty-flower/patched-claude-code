// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
function Ea(e,t){return{code:"InvalidArgument",argument:e,...t!==void 0&&{reason:t}}}function xXt(e="unknown",t){return{code:"Unavailable",failureClass:e,...t?.key!==void 0&&{key:t.key},...t?.retryAfterMs!==void 0&&{retryAfterMs:t.retryAfterMs},...t?.telemetryCode!==void 0&&{telemetryCode:t.telemetryCode}}}var PXt="OtherNames";var IXt="LeafMoved",qps="HardeningUnavailable",rpo="RemoteLink",Kps="AsideStranded";var uhr="Unsupported";function Rst(e){return Cqe(e)&&e.code==="Failed"&&e.telemetryCode===uhr}var n="ByteViewUnsupported";function XTt(e){return e.code==="Failed"&&"telemetryCode"in e&&e.telemetryCode===n}var r="StoreFenced";function opo(e){return e.code==="Failed"&&"telemetryCode"in e&&e.telemetryCode===r}var Yps="SourceNotRegular",Xps="SourceTooLarge",Jps="SourceShared",Qps="SourceOutside";var o=new Set(["InvalidArgument","NotFound","AlreadyExists","PreconditionFailed","LeaseHeld","Unavailable","Failed","ScopeNotFound"]);function Cqe(e){return typeof e==="object"&&e!==null&&"code"in e&&typeof e.code==="string"&&o.has(e.code)}var spo="AbsentParent";function kqe(e){return e.code==="Failed"&&"telemetryCode"in e&&e.telemetryCode===spo}function hm(e){if(kqe(e))return"ENOENT";return"telemetryCode"in e?e.telemetryCode:void 0}var Zps="TooLarge";function ut(e){return e.code+("failureClass"in e?` ${e.failureClass}`:"")+("telemetryCode"in e&&e.telemetryCode?` ${e.telemetryCode}`:"")+("cause"in e&&e.cause?`: ${i(e.cause)}`:"")}function i(e){return e instanceof Error?e.message:String(e)}
export{Ea,xXt,PXt,IXt,qps,rpo,Kps,uhr,Rst,XTt,opo,Yps,Xps,Jps,Qps,Cqe,spo,kqe,hm,Zps,ut};
