// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
var ks="github.com";var a=/[:/\\?#@\s]/,u=new Set(["http","https","ws","wss","ftp"]);function e7(t){let e=c(t.replace(/[\t\n\r]/g,"").toLowerCase());if(e===""||a.test(e))return e;try{let n=new URL(`https://${e}`);if(n.username!==""||n.password!==""||n.port!==""||n.pathname!=="/"||n.search!==""||n.hash!=="")return e;return c(n.hostname)}catch{return e}}function Ekn(t,e){let n=e7(t);while(n.startsWith("www."))n=n.slice(4);return n===e}function Go(t){return Ekn(t,"github.com")}function ez(t,e){if(!t||!e)return!1;let n=e7(t);return n!==""&&n===e7(e)}function eAt(t){return Go(t)?"https://api.github.com":`https://${t}/api/v3`}function ysr(t){return Go(t)?"https://api.github.com/graphql":`https://${t}/api/graphql`}function o(t){return/[%\x00-\x1f\x7f-\u{10FFFF}]/u.test(t)}function lpe(t){t=t.replace(/^[\x00-\x20]+/,"");let e=t.indexOf("://");if(e===-1)return!1;let n=t.slice(e+3),s=t.slice(0,e).toLowerCase();if(u.has(s)){let i=n.match(/^[/\\]+/)?.[0]??"";if(i.includes("\\"))return!0;n=n.slice(i.length)}let r=n.search(/[/?#]/);return(r===-1?n:n.slice(0,r)).includes("\\")}function cpe(t){if(t.includes("://")){if(lpe(t))return!0;try{let r=new URL(t);if(r.protocol==="http:"||r.protocol==="https:")return!1;return o(r.hostname)}catch{return!0}}let e=t.indexOf(":"),n=t.indexOf("@");if(e>=0&&n>e)return!0;let s=t.match(/^(?:[^@]+@)?([^:]+):/)?.[1];return s?o(s):!1}function c(t){let e=t.length;while(e>0&&t[e-1]===".")e--;return t.slice(0,e)}
export{ks,e7,Ekn,Go,ez,eAt,ysr,lpe,cpe};
