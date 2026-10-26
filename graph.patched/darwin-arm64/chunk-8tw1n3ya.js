// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
var sVo="runner-declares";var cyn="diff-finds-nested-repository",iVo="no-repository-checked-out";function aVo(e){return"--runner-declares="+e.join(",")}async function Dxi(e){if(!e.startsWith("--runner-declares="))return;let E=e.slice(18).split(",");if(!E.includes("diff-finds-nested-repository"))return;let{setRunnerDeclaredNestedRepositoryDiff:t,setRunnerDeclaredNoRepositoryCheckedOut:R}=await import("./chunk-n7y2qj65.js");if(t(!0),E.includes("no-repository-checked-out"))R(!0)}
export{sVo,cyn,iVo,aVo,Dxi};
