// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{ye}from"./chunk-e44qnbvj.js";import{aVr}from"./chunk-xyvnvprf.js";import{Y5}from"./chunk-hmetenny.js";import{co}from"./chunk-vgkthyc3.js";var uFo=co();var fFo=co();function Qf(o){let t=ye().admissionText;if((o.judgedUnder??null)===t)return!0;let r=o.args.pluginStorageId;return Y5(r)||o.args.sealed===!0&&fFo.get()?.(r)===!0||!aVr(r,uFo.get()?.()??null)}export{uFo,fFo,Qf};
