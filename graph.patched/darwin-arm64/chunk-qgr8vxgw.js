// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{Uf}from"./chunk-ecyypctx.js";import{ve}from"./chunk-wrh0fk6w.js";import{$k}from"./chunk-53hfjk6d.js";import{Se}from"./chunk-jkwva1zz.js";import{qht,xrn}from"./chunk-jc4378zy.js";import{gA}from"./chunk-h21zbzen.js";import{Sa}from"./chunk-t0ev680s.js";function Yp(r){console.error(Se.red(r))}function Sn(r,e="cli_error"){if(r)Yp(r);if(!Uf())$k(e);process.exit(1);return}function LW(r){if(r)process.stdout.write(r+`
`);process.exit(0);return}function KZt(r){process.exit(r);return}async function Uu(r){await new Promise((e)=>{process.stdout.write(r,()=>e())})}function aN(r){process.stderr.write(Se.yellow(Sa(r))+`
`)}var t=2000,n=250;async function uz({waitForOAuthRefresh:r=!0}={}){let e=qht();if(r&&!e)await xrn();await ve(gA(),t);try{let{flushAnalyticsSinks:i}=await import("./chunk-35n7adwy.js");await i()}catch{}if(r&&e)await xrn(),await ve(gA(),n)}async function bo(r){await uz(),process.exit(r);return}async function uo(r){if(r)Yp(r);return await uz(),Sn()}async function tE(r){if(r)process.stdout.write(r+`
`);return await uz(),LW()}
export{Yp,Sn,LW,KZt,Uu,aN,uz,bo,uo,tE};
