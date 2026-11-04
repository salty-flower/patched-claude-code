// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{ORe,QL}from"./chunk-ecyypctx.js";import{i}from"./chunk-n1cpnz94.js";import{FB}from"./chunk-z77crbrb.js";function NB(){return i.CLAUDE_CODE_REMOTE_SESSION_ORIGIN==="review"}function hO(){return FB()&&NB()}function IDs(){return hO()?["CLAUDE_CODE_SESSION_ACCESS_TOKEN","CLAUDE_SESSION_INGRESS_TOKEN_FILE"]:[]}function n5i(r,e){if(!hO())return!1;if(r==="CLAUDE_CODE_SESSION_ACCESS_TOKEN"){if(e!=="")ORe(e);return!0}if(r==="CLAUDE_CODE_OAUTH_TOKEN"){if(e!=="")QL(e);return!0}return!1}
export{NB,hO,IDs,n5i};
