// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import"./chunk-w5484khd.js";import"./chunk-d50ak5jt.js";import"./chunk-ecyypctx.js";import"./chunk-sr5zgxjs.js";import"./chunk-h58p4vvs.js";import"./chunk-sktwb66b.js";import"./chunk-wrh0fk6w.js";import"./chunk-qedh1vmm.js";import"./chunk-8915xd28.js";import"./chunk-pna2vbye.js";import"./chunk-pbhb4gc5.js";import"./chunk-h4pr19wq.js";import"./chunk-nrkkxan0.js";import"./chunk-zmmnrc9r.js";import{go}from"./chunk-rwx94tm5.js";import{f}from"./chunk-tkh9f09d.js";import{o,T,u}from"./chunk-97je7cvf.js";import"./chunk-k6s5je75.js";var t=f(()=>T(u({name:o(),authTool:o()})));function p(r){let e=t().safeParse(r.servers);return e.success?e.data:[]}function c(r){return r.map((e)=>`MCP server ${go(e.name)} needs authentication before its tools answer; its ${e.authTool} tool is callable from a script.`).join(`
`)}export{c as renderReplMcpNeedsAuthNotice,p as replMcpNeedsAuthServersOf};
