// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{te,ule}from"./chunk-0vmvv2wk.js";import{K2}from"./chunk-65jn763j.js";import{As}from"./chunk-08y6ag9s.js";var zri="read_artifact",Kri="get_artifact",Vri="read_file",Ipi="read_shared_artifact";function Tp(){return ule()&&te().builtInArtifactHiddenForMcp}function Opi(e){return Tp()&&e.some((r)=>r.mcpInfo?.serverName===K2)}function Mpi(e){return Tp()&&e.mcpInfo?.serverName===K2}function Hpi(e){if(!Tp())return[];return[zri,Kri,...e?[Vri]:[]].map((r)=>({name:As(K2,r),mcpInfo:{serverName:K2,toolName:r}}))}
export{zri,Kri,Vri,Ipi,Tp,Opi,Mpi,Hpi};
