// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
var e8s="runner-declares";var R9n="diff-finds-nested-repository",t8s="no-repository-checked-out";function n8s(e){return"--runner-declares="+e.join(",")}async function tXa(e){if(!e.startsWith("--runner-declares="))return;let E=e.slice(18).split(","),n=E.includes("diff-finds-nested-repository"),t=!1;if(!n&&!t)return;let{setRunnerDeclaredFreshMachinePerSession:R,setRunnerDeclaredNestedRepositoryDiff:r,setRunnerDeclaredNoRepositoryCheckedOut:s}=await import("./chunk-naw8qb8v.js");if(n){if(r(!0),E.includes("no-repository-checked-out"))s(!0)}if(t)R(!0)}
export{e8s,R9n,t8s,n8s,tXa};
