// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{d}from"./chunk-wryttfdq.js";import{t}from"./chunk-bdfv2ky4.js";import{ol}from"./chunk-gg7nabmz.js";import{Iri}from"./chunk-x4r54n7x.js";import{zqs}from"./chunk-bkcxqeq8.js";import{N3t}from"./chunk-29cd2nzs.js";function n(){return ol()==="claude-desktop"&&Iri()}function Igs(e,r){let o=r?.experimental?.[zqs];return e.type==="sdk"&&typeof o==="object"&&o!==null&&"showsConnectorsOff"in o&&o.showsConnectorsOff===!0&&n()}function Kbr(e){try{return(e.errorCode===N3t?n():Igs(e.config,e.capabilities))?"left_out":"kept"}catch(r){return t(`MCP server "${e.name}": could not read disableClaudeAiConnectors from the managed sources: ${d(r)}`,{level:"warn"}),"unreadable"}}
export{Igs,Kbr};
