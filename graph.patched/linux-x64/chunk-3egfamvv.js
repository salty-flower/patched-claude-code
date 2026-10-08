// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
var FUt="you are not signed in, or this machine is not authorized to write to the session",Qmn="without your deny and ask rules";function tjo({completion:o,status:a,description:s=l,afterFirstReply:m=i}){let n;o.then((e)=>{n=e});let r=m,t,u=new Promise((e)=>{t=e});return{completion:o,status:a,description:s,outcome:()=>n,async afterFirstReply(e){let d=r;if(r=null,d===null)return i();try{return await d(e,t)}finally{t(void 0)}},readBack:u}}function i(){return Promise.resolve("skipped")}function l(){return null}
export{FUt,Qmn,tjo};
