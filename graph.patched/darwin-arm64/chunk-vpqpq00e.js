// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{zCe,uSe,hct,gct,nqo,Sie,MDe}from"./chunk-se7em3qw.js";import{jS}from"./chunk-qckkfdgd.js";var i="[object Map]",f="[object Set]",p=Object.prototype,e=p.hasOwnProperty;function m(r){if(r==null)return!0;if(Sie(r)&&(jS(r)||typeof r=="string"||typeof r.splice=="function"||uSe(r)||hct(r)||zCe(r)))return!r.length;var t=MDe(r);if(t==i||t==f)return!r.size;if(gct(r))return!nqo(r).length;for(var o in r)if(e.call(r,o))return!1;return!0}var _Le=m;
export{_Le};
