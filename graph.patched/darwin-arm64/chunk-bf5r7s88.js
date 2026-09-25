// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{lo}from"./chunk-z2w95mdn.js";import{Mt}from"./chunk-s2y7je9b.js";var S3r="main",nUe={name:"Claude Code file sync",email:"noreply@anthropic.com"},b3r="refs/seed/root",HRe=104857600,r=1048576,n=160;function wWt(e,t){let o=Math.min(r,Math.floor(e/16));return Math.max(0,e-o-n*t)}var OYe=3;function Hht(e){let t=e.largest.slice(0,OYe).map((o)=>`${lo(o.path,{maxCodeUnits:512})} (${Mt(o.bytes)})`);return`its files come to ${Mt(e.totalBytes)}, which with packaging does not fit the ${Mt(e.capBytes)} a cloud session can start with from a folder${t.length>0?`; the largest: ${t.join(", ")}`:""}`}var b7n="Remove or ignore what the session does not need (a .gitignore in this folder is honoured) and start again",EWt=2147483648,rUe={repoPass:"tengu_dir_sync_folder_repo",seed:"tengu_dir_sync_folder_seed"};
export{S3r,nUe,b3r,HRe,wWt,OYe,Hht,b7n,EWt,rUe};
