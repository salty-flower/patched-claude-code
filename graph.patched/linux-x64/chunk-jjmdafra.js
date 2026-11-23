// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
function a9(e){qhi(e)}function qhi(e){try{if(!Bun.ant.setDumpable(!1))return e("prctl(PR_SET_DUMPABLE,0) returned nonzero"),!1;return!0}catch(r){return e(`prctl unavailable: ${r instanceof Error?r.message:String(r)}`),!1}}
export{a9,qhi};
