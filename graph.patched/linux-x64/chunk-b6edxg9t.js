// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
function nn(r){let e=r/1024;if(e<1)return`${r} bytes`;if(e<1024)return`${e.toFixed(1).replace(/\.0$/,"")}KB`;let n=e/1024;if(n<1024)return`${n.toFixed(1).replace(/\.0$/,"")}MB`;return`${(n/1024).toFixed(1).replace(/\.0$/,"")}GB`}function skn(r,e){let n=nn(e);if(r>=e)return`${n} of ${n}`;if(e<1024)return`${nn(r)} of ${n}`;let t=n.endsWith("GB")?1073741824:n.endsWith("MB")?1048576:1024;return`${Math.min(Math.floor(r/t*10)/10,parseFloat(n)-0.1).toFixed(1)}${n.slice(-2)} of ${n}`}function ikn(r){if(r<1000)return`${r} B`;if(r<999500)return`${Math.round(r/1000)} kB`;return`${(r/1e6).toFixed(1).replace(/\.0$/,"")} MB`}
export{nn,skn,ikn};
