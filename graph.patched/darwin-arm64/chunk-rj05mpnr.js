// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{x,d,jm}from"./chunk-wkh5syvr.js";import{g,m}from"./chunk-n1esck2w.js";import{k,Ae,ue}from"./chunk-1901fdh6.js";import{t}from"./chunk-bnfhb7sj.js";import{l}from"./chunk-e666gr8q.js";import{bke}from"./chunk-3sm6609v.js";import{yce,$$,v3t}from"./chunk-s50bsytd.js";import{si}from"./chunk-dvmwj6gj.js";var f="tengu_violin_guarneri";function u(){try{return k(f,!1)===!0}catch{return!1}}function p(){return u()&&!bke()&&!$$()&&ue().hasBeenAskedUnattendedServingUpFront!==!0}function Gtr(e){try{return e==="unset"&&p()&&!v3t()}catch{return!1}}async function U(){try{return p()&&Gtr(await yce())}catch{return!1}}async function ztr(e){try{await Ae((n)=>n.hasBeenAskedUnattendedServingUpFront===!0?n:{...n,hasBeenAskedUnattendedServingUpFront:!0},e)}catch(n){t(`unattended-serving up-front question: mark not saved (${d(n)})`,{level:"warn"})}}var _=60000;function hEt(e){if(e==="answered")g("remote_control_unattended_up_front");else m("remote_control_unattended_up_front",e)}async function v(e){let{showUnattendedServingUpFrontQuestion:n}=await import("./chunk-r142p0pw.js");return n(e)}function S(e){process.stdout.write(`${e}
`)}async function TQs({couldOfferFolder:e,allowUnattendedToolCalls:n,storageV5:c,seams:o={}}){let a=!1,i=!1;try{if(n||!(o.hasTerminal??F)()||!await U()||!await e())return"carry_on";a=!0;let r=await(o.showDialog??v)(_);if(r==="interrupted")return"interrupted";i=!0;let s=o.print??S;if(r==="not_saved")return hEt("save_failed"),s(si["consent.unattended.upfront.not_saved"]),"carry_on";if(hEt("answered"),await ztr(c),r==="timed_out")s(si["consent.unattended.upfront.timed_out"])}catch(r){if(a&&!i)hEt("ask_failed");l(new x(`the up-front unattended-serving question could not be asked (${jm(r)??typeof r})`,"the up-front unattended-serving question could not be asked"))}return"carry_on"}function F(){return process.stdin.isTTY===!0&&process.stdout.isTTY===!0}
export{Gtr,ztr,hEt,TQs};
