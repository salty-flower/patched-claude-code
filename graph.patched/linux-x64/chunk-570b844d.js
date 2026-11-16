// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{it,Ul,Rn}from"./chunk-r3adsed5.js";import{bs}from"./chunk-n61dvy9z.js";import{Dt,hn,Jn,wk,Xt}from"./chunk-a5a37ds7.js";import{DT,TC}from"./chunk-zaxe68t4.js";import{Whr}from"./chunk-txj7vvwg.js";import{randomUUID as t}from"crypto";var o="You can continue now. Continue the task you were working on when the usage limit was reached; do not repeat work that is already complete.";function DSe(){return Dt()&&hn()?.billingType!=="usage_based"&&bs()&&Ul()&&!Rn()&&!Xt()}function Tmt(e){return DSe()&&DT(e)&&e.rateLimitType==="five_hour"}var i=["five_hour","seven_day","seven_day_overage_included","seven_day_opus","seven_day_sonnet"];function jOn(e){return DSe()&&DT(e)&&e.rateLimitType!==void 0&&i.includes(e.rateLimitType)}function UHe(){return Whr(Jn(),wk())}function BDt(){TC({agentId:it(),mode:"prompt",priority:"later",value:o,uuid:t(),origin:{kind:"auto-continuation"},isMeta:!0,skipSlashCommands:!0})}
export{DSe,Tmt,jOn,UHe,BDt};
