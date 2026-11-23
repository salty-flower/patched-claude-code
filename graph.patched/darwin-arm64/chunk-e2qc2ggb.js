// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{d,mor}from"./chunk-wryttfdq.js";import{t}from"./chunk-bdfv2ky4.js";function sve(o){try{let r=o(),e=typeof r==="object"&&r!==null&&"default"in r?r.default:r;if(typeof e!=="string")throw Error("a bundled text did not load as a string");return e}catch(r){let e=r instanceof Error?r.cause:void 0;throw t(`A bundled text could not be read: ${d(r)}; asset: ${mor(r)}; cause: ${d(e)}`,{level:"error"}),r}}
export{sve};
