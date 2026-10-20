// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Ce}from"./chunk-kpqr86hf.js";import{Hp}from"./chunk-jrcdjayr.js";import{xDe}from"./chunk-tdxkq523.js";import{QK}from"./chunk-e72wd94x.js";import{f}from"./chunk-ynakaye4.js";import{gd}from"./chunk-f4yykyp9.js";import{kE}from"./chunk-2gr8qttp.js";import{zu}from"./chunk-y573qe02.js";import{lnt,qVr,YVr}from"./chunk-4k9pfj5t.js";import{o}from"./chunk-xv841za9.js";import{posix as m,resolve as u}from"path";var Ftr=f(()=>o().max(4096).refine(m.isAbsolute,"must be an absolute path"));async function zai(){let r=kE.CLAUDE_CODE_MCP_SERVE_WORKSPACE_ROOT;if(kE.unset("CLAUDE_CODE_MCP_SERVE_WORKSPACE_ROOT"),r===void 0)return{kind:"absent"};if(!Ftr().safeParse(r).success)return{kind:"invalid",fault:"bad_path"};let i,n;try{i=await YVr(r,gd),n=QK()}catch(e){return{kind:"invalid",fault:lnt(e)??"error"}}let t=u(r),s=qVr(t,Ce(),[],[]);if(s.allowed||s.code==="is_cwd")return{kind:"absent"};let a=Hp(),p=(await Promise.all((a===null?[]:[a,n]).map((e)=>xDe(e)))).some((e)=>e.unresolved||e.spellings.some((l)=>[t,i].some((d)=>zu(l,d,{caseFold:!0})||zu(d,l,{caseFold:!0}))));if(a===null||p)return{kind:"invalid",fault:"private_folder"};return{kind:"valid",root:t}}
export{Ftr,zai};
