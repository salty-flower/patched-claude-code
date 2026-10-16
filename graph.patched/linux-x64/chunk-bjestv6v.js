// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{x,d,jm}from"./chunk-w7m8nded.js";import{g,m}from"./chunk-rhe3yjtx.js";import{k,Ae,ue}from"./chunk-k16gymf7.js";import{t}from"./chunk-cwsn6mdf.js";import{l}from"./chunk-9pt2nr7j.js";import{mke}from"./chunk-3axhkz18.js";import{pce,MF,dYt}from"./chunk-ndrjwkf9.js";import{si}from"./chunk-7f1jmyrt.js";var f="tengu_violin_guarneri";function u(){try{return k(f,!1)===!0}catch{return!1}}function p(){return u()&&!mke()&&!MF()&&ue().hasBeenAskedUnattendedServingUpFront!==!0}function her(e){try{return e==="unset"&&p()&&!dYt()}catch{return!1}}async function U(){try{return p()&&her(await pce())}catch{return!1}}async function yer(e){try{await Ae((n)=>n.hasBeenAskedUnattendedServingUpFront===!0?n:{...n,hasBeenAskedUnattendedServingUpFront:!0},e)}catch(n){t(`unattended-serving up-front question: mark not saved (${d(n)})`,{level:"warn"})}}var _=60000;function Mwt(e){if(e==="answered")g("remote_control_unattended_up_front");else m("remote_control_unattended_up_front",e)}async function v(e){let{showUnattendedServingUpFrontQuestion:n}=await import("./chunk-j8k8dbse.js");return n(e)}function S(e){process.stdout.write(`${e}
`)}async function NQs({couldOfferFolder:e,allowUnattendedToolCalls:n,storageV5:c,seams:o={}}){let a=!1,i=!1;try{if(n||!(o.hasTerminal??F)()||!await U()||!await e())return"carry_on";a=!0;let r=await(o.showDialog??v)(_);if(r==="interrupted")return"interrupted";i=!0;let s=o.print??S;if(r==="not_saved")return Mwt("save_failed"),s(si["consent.unattended.upfront.not_saved"]),"carry_on";if(Mwt("answered"),await yer(c),r==="timed_out")s(si["consent.unattended.upfront.timed_out"])}catch(r){if(a&&!i)Mwt("ask_failed");l(new x(`the up-front unattended-serving question could not be asked (${jm(r)??typeof r})`,"the up-front unattended-serving question could not be asked"))}return"carry_on"}function F(){return process.stdin.isTTY===!0&&process.stdout.isTTY===!0}
export{her,yer,Mwt,NQs};
