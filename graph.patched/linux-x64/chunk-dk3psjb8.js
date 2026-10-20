// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Te}from"./chunk-dxktn51d.js";import{Dp}from"./chunk-jbgr14ef.js";import{kLe}from"./chunk-n5v91jc3.js";import{jq}from"./chunk-kx98rv5t.js";import{p}from"./chunk-949csv87.js";import{gd}from"./chunk-h3dn4j2q.js";import{Ev}from"./chunk-d7egt2xa.js";import{zu}from"./chunk-gzxd3rp1.js";import{nnt,kVr,TVr}from"./chunk-e5qzta9c.js";import{o}from"./chunk-mqaa2rrp.js";import{posix as f,resolve as u}from"path";var Ptr=p(()=>o().max(4096).refine(f.isAbsolute,"must be an absolute path"));async function _ai(){let r=Ev.CLAUDE_CODE_MCP_SERVE_WORKSPACE_ROOT;if(Ev.unset("CLAUDE_CODE_MCP_SERVE_WORKSPACE_ROOT"),r===void 0)return{kind:"absent"};if(!Ptr().safeParse(r).success)return{kind:"invalid",fault:"bad_path"};let i,n;try{i=await TVr(r,gd),n=jq()}catch(e){return{kind:"invalid",fault:nnt(e)??"error"}}let t=u(r),s=kVr(t,Te(),[],[]);if(s.allowed||s.code==="is_cwd")return{kind:"absent"};let a=Dp(),m=(await Promise.all((a===null?[]:[a,n]).map((e)=>kLe(e)))).some((e)=>e.unresolved||e.spellings.some((l)=>[t,i].some((d)=>zu(l,d,{caseFold:!0})||zu(d,l,{caseFold:!0}))));if(a===null||m)return{kind:"invalid",fault:"private_folder"};return{kind:"valid",root:t}}
export{Ptr,_ai};
