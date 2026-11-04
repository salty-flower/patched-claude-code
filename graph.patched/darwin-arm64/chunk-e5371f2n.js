// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{xe}from"./chunk-jr30bz1x.js";import{fTr}from"./chunk-4v7d2y9x.js";import{PK}from"./chunk-2ka9x51y.js";import{po}from"./chunk-0mc8pz6e.js";var Bco=po();var jco=po();function Op(o){let t=xe().admissionText;if((o.judgedUnder??null)===t)return!0;let r=o.args.pluginStorageId;return PK(r)||o.args.sealed===!0&&jco.get()?.(r)===!0||!fTr(r,Bco.get()?.()??null)}export{Bco,jco,Op};
