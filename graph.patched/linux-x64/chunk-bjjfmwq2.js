// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
class a{availability=()=>!1;register(i){this.availability=i}isAvailable(){return this.availability()}}var e=new a;function Dsa(i){e.register(i)}function Qnt(){return e.isAvailable()}
export{Dsa,Qnt};
