// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
var qBo={killed:"Stopped because the workflow was stopped",failed:"Stopped because the workflow failed",completed:"Stopped because the workflow finished without waiting for it"},d=new Set(Object.values(qBo));function BYn(e){return e!==void 0&&d.has(e)}var YBo="error details withheld for this workflow",XBo="This workflow run hides its script, and its record of that could not be read or written, so nothing was run.";function tzr(e){return e.type!=="workflow_log"}function JBo(e){let{promptPreview:o,phaseTitle:r,...t}=e,n=r!==void 0&&t.phaseIndex!==void 0;return{...t,...n&&{phaseTitle:`phase ${t.phaseIndex}`},...t.error!==void 0&&{error:"error details withheld for this workflow"}}}function s(e){return e.map((o)=>o.type==="workflow_phase"?{...o,title:`phase ${o.index}`}:JBo(o))}function QGt(e,o){let r=e.filter(tzr);return o?s(r):r}function Nhn({startedAt:e,queuedAt:o,tokens:r}){return e!==void 0||o===void 0||(r??0)>0}
export{qBo,BYn,YBo,XBo,tzr,JBo,QGt,Nhn};
