// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{Ie}from"./chunk-hxt89a41.js";import{Db}from"./chunk-b6n7b0tm.js";import{XNe}from"./chunk-qnvapa9t.js";var $un=(o)=>o.name===XNe&&Db(o);var Lv=(o)=>{let e=o.startsWith("classic.")||o==="tool.describe"||o==="tool.call"||o==="tool.check";return Ie().loadedModules.filter((t)=>!(e&&$un(t)))};export{$un,Lv};
