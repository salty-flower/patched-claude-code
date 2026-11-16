// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{d}from"./chunk-5p3mkpyy.js";import{t}from"./chunk-ray9kegj.js";import{ol}from"./chunk-acx2qgbr.js";import{Zni}from"./chunk-4rkc6f3s.js";import{f6s}from"./chunk-yfhfp9nd.js";import{C4t}from"./chunk-5z5dtbrz.js";function n(){return ol()==="claude-desktop"&&Zni()}function qgs(e,r){let o=r?.experimental?.[f6s];return e.type==="sdk"&&typeof o==="object"&&o!==null&&"showsConnectorsOff"in o&&o.showsConnectorsOff===!0&&n()}function uwr(e){try{return(e.errorCode===C4t?n():qgs(e.config,e.capabilities))?"left_out":"kept"}catch(r){return t(`MCP server "${e.name}": could not read disableClaudeAiConnectors from the managed sources: ${d(r)}`,{level:"warn"}),"unreadable"}}
export{qgs,uwr};
