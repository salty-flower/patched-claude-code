// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
var Os="github.com",$Pn=["git@github.com:","ssh://git@github.com/"];var a=/[:/\\?#@\s]/,u=new Set(["http","https","ws","wss","ftp"]);function c8(t){let e=c(t.replace(/[\t\n\r]/g,"").toLowerCase());if(e===""||a.test(e))return e;try{let n=new URL(`https://${e}`);if(n.username!==""||n.password!==""||n.port!==""||n.pathname!=="/"||n.search!==""||n.hash!=="")return e;return c(n.hostname)}catch{return e}}function UPn(t,e){let n=c8(t);while(n.startsWith("www."))n=n.slice(4);return n===e}function qo(t){return UPn(t,"github.com")}function IW(t,e){if(!t||!e)return!1;let n=c8(t);return n!==""&&n===c8(e)}function _xt(t){return qo(t)?"https://api.github.com":`https://${t}/api/v3`}function wfr(t){return qo(t)?"https://api.github.com/graphql":`https://${t}/api/graphql`}function o(t){return/[%\x00-\x1f\x7f-\u{10FFFF}]/u.test(t)}function fae(t){t=t.replace(/^[\x00-\x20]+/,"");let e=t.indexOf("://");if(e===-1)return!1;let n=t.slice(e+3),s=t.slice(0,e).toLowerCase();if(u.has(s)){let i=n.match(/^[/\\]+/)?.[0]??"";if(i.includes("\\"))return!0;n=n.slice(i.length)}let r=n.search(/[/?#]/);return(r===-1?n:n.slice(0,r)).includes("\\")}function Whe(t){if(t.includes("://")){if(fae(t))return!0;try{let r=new URL(t);if(r.protocol==="http:"||r.protocol==="https:")return!1;return o(r.hostname)}catch{return!0}}let e=t.indexOf(":"),n=t.indexOf("@");if(e>=0&&n>e)return!0;let s=t.match(/^(?:[^@]+@)?([^:]+):/)?.[1];return s?o(s):!1}function c(t){let e=t.length;while(e>0&&t[e-1]===".")e--;return t.slice(0,e)}
export{Os,$Pn,c8,UPn,qo,IW,_xt,wfr,fae,Whe};
