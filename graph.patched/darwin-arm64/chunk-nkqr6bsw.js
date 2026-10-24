// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{N}from"./chunk-36ysyspx.js";import{l}from"./chunk-thm21ca7.js";import{X9s}from"./chunk-2nbdxfp7.js";import{Ie}from"./chunk-hxt89a41.js";import{Dde}from"./chunk-3qffpjgv.js";import{Rcn}from"./chunk-j9gtepjs.js";import{aye}from"./chunk-tcdz2w3z.js";import{Db}from"./chunk-b6n7b0tm.js";function n(){try{return Dde()&&Rcn()}catch(r){return l(N(r)),!0}}function bD(r){try{let o=Ie(),e=o.hookRegistrationEpoch!==r.epoch||o.loadedModules!==r.modules;return r.wasUnknown||n()||e&&aye()&&Rcn()}catch(o){return l(N(o)),!0}}function dB(){let r=Ie();return{wasUnknown:n(),epoch:r.hookRegistrationEpoch,modules:r.loadedModules}}function y8e({isRunReached:r}){try{return n()||Ie().loadedModules.some((o)=>!Db(o)&&X9s(o.args.pluginStorageId)&&(o.hooks("prompt.submit")||!r&&o.hooks("command.run")))}catch(o){return l(N(o)),!0}}
export{bD,y8e,dB};
