// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{NGt}from"./chunk-104m6ssk.js";import{randomBytes as o}from"crypto";import{hostname as s}from"os";var i=/^[A-Za-z0-9][A-Za-z0-9._-]{0,63}$/,a=/^[A-Za-z]{1,64}$/,c=/^([A-Za-z0-9][A-Za-z0-9._-]{0,63})\/([A-Za-z]{1,64})\/(\d{1,4})$/,m=8,I=64,d=9999,r={hostname:s,randomHex:(t)=>o(t).toString("hex")};function wwi(t=r){return`dev-${t.randomHex(m)}`}function p7t(t=r){let[e=""]=t.hostname().split(".");return NGt(e,I)}function Ewi(t,e,n){if(!i.test(t)||!a.test(e)||!Number.isInteger(n)||n<0||n>d)throw Error("cannot form a device hook id from these inputs");return`${t}/${e}/${n}`}function ILe(t){let e=c.exec(t);return e?{instanceId:e[1],event:e[2],index:Number(e[3])}:null}
export{wwi,p7t,Ewi,ILe};
