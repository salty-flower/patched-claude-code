// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
var Iws="runner-declares";var AHn="diff-finds-nested-repository",Mws="no-repository-checked-out";function Dws(e){return"--runner-declares="+e.join(",")}async function Aua(e){if(!e.startsWith("--runner-declares="))return;let E=e.slice(18).split(","),n=E.includes("diff-finds-nested-repository"),t=!1;if(!n&&!t)return;let{setRunnerDeclaredFreshMachinePerSession:R,setRunnerDeclaredNestedRepositoryDiff:r,setRunnerDeclaredNoRepositoryCheckedOut:s}=await import("./chunk-mwgn9t0h.js");if(n){if(r(!0),E.includes("no-repository-checked-out"))s(!0)}if(t)R(!0)}
export{Iws,AHn,Mws,Dws,Aua};
