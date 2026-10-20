// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
function gl(e,t){return{code:"InvalidArgument",argument:e,...t!==void 0&&{reason:t}}}function Gyn(e="unknown",t){return{code:"Unavailable",failureClass:e,...t?.key!==void 0&&{key:t.key},...t?.retryAfterMs!==void 0&&{retryAfterMs:t.retryAfterMs},...t?.telemetryCode!==void 0&&{telemetryCode:t.telemetryCode}}}var zyn="OtherNames";var Kyn="LeafMoved",p7s="HardeningUnavailable",Vqo="RemoteLink",f7s="AsideStranded";var Pzr="Unsupported";function jwt(e){return PAe(e)&&e.code==="Failed"&&e.telemetryCode===Pzr}var n="ByteViewUnsupported";function LGt(e){return e.code==="Failed"&&"telemetryCode"in e&&e.telemetryCode===n}var r="StoreFenced";function qqo(e){return e.code==="Failed"&&"telemetryCode"in e&&e.telemetryCode===r}var m7s="SourceNotRegular",g7s="SourceTooLarge",h7s="SourceShared",y7s="SourceOutside";var o=new Set(["InvalidArgument","NotFound","AlreadyExists","PreconditionFailed","LeaseHeld","Unavailable","Failed","ScopeNotFound"]);function PAe(e){return typeof e==="object"&&e!==null&&"code"in e&&typeof e.code==="string"&&o.has(e.code)}var Yqo="AbsentParent";function htt(e){return e.code==="Failed"&&"telemetryCode"in e&&e.telemetryCode===Yqo}function Cm(e){if(htt(e))return"ENOENT";return"telemetryCode"in e?e.telemetryCode:void 0}var _7s="TooLarge";function bt(e){return e.code+("failureClass"in e?` ${e.failureClass}`:"")+("telemetryCode"in e&&e.telemetryCode?` ${e.telemetryCode}`:"")+("cause"in e&&e.cause?`: ${i(e.cause)}`:"")}function i(e){return e instanceof Error?e.message:String(e)}
export{gl,Gyn,zyn,Kyn,p7s,Vqo,f7s,Pzr,jwt,LGt,qqo,m7s,g7s,h7s,y7s,PAe,Yqo,htt,Cm,_7s,bt};
