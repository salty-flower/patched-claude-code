// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{o,n,md}from"./chunk-t50adtrb.js";import{gO}from"./chunk-56fbfc7s.js";import{e}from"./chunk-v5r13aq1.js";import{CZ}from"./chunk-a39vt5fa.js";function QZ({hunks:r,dim:i,width:f,filePath:m,firstLine:c,fileContent:p}){return CZ(r.map((t)=>e(o,{flexDirection:"column",children:e(gO,{patch:t,dim:i,width:f,filePath:m,firstLine:c,fileContent:p})},t.newStart)),(t)=>e(md,{fromLeftEdge:!0,children:e(n,{dimColor:!0,children:"..."})},`ellipsis-${t}`))}
export{QZ};
