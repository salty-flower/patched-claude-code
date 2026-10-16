// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
function al(e,t){return{code:"InvalidArgument",argument:e,...t!==void 0&&{reason:t}}}function Ffn(e="unknown",t){return{code:"Unavailable",failureClass:e,...t?.key!==void 0&&{key:t.key},...t?.retryAfterMs!==void 0&&{retryAfterMs:t.retryAfterMs},...t?.telemetryCode!==void 0&&{telemetryCode:t.telemetryCode}}}var $fn="OtherNames";var Ufn="LeafMoved",gKs="HardeningUnavailable",IBo="RemoteLink",hKs="AsideStranded";var xUr="Unsupported";function aSt(e){return sZe(e)&&e.code==="Failed"&&e.telemetryCode===xUr}var n="ByteViewUnsupported";function vBt(e){return e.code==="Failed"&&"telemetryCode"in e&&e.telemetryCode===n}var r="StoreFenced";function OBo(e){return e.code==="Failed"&&"telemetryCode"in e&&e.telemetryCode===r}var yKs="SourceNotRegular",_Ks="SourceTooLarge",SKs="SourceShared",bKs="SourceOutside";var o=new Set(["InvalidArgument","NotFound","AlreadyExists","PreconditionFailed","LeaseHeld","Unavailable","Failed","ScopeNotFound"]);function sZe(e){return typeof e==="object"&&e!==null&&"code"in e&&typeof e.code==="string"&&o.has(e.code)}var HBo="AbsentParent";function iZe(e){return e.code==="Failed"&&"telemetryCode"in e&&e.telemetryCode===HBo}function im(e){if(iZe(e))return"ENOENT";return"telemetryCode"in e?e.telemetryCode:void 0}var wKs="TooLarge";function yt(e){return e.code+("failureClass"in e?` ${e.failureClass}`:"")+("telemetryCode"in e&&e.telemetryCode?` ${e.telemetryCode}`:"")+("cause"in e&&e.cause?`: ${i(e.cause)}`:"")}function i(e){return e instanceof Error?e.message:String(e)}
export{al,Ffn,$fn,Ufn,gKs,IBo,hKs,xUr,aSt,vBt,OBo,yKs,_Ks,SKs,bKs,sZe,HBo,iZe,im,wKs,yt};
