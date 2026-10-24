// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{existsSync as o,lstatSync as r,readdirSync as i,statSync as s}from"fs";import{isAbsolute as a,join as l}from"path";var $kn="git is not installed on this Mac. To install it, run xcode-select --install, then try again.";function YFe(n,e){if(Boolean(e.DEVELOPER_DIR))return!1;try{return(n.includes("/")?n:(e.PATH??"").split(":").filter((t)=>a(t)).map((t)=>l(t,n)).find((t)=>o(t)))==="/usr/bin/git"&&s("/Library/Developer/CommandLineTools",{throwIfNoEntry:!1})===void 0&&r("/var/db/xcode_select_link",{throwIfNoEntry:!1})===void 0&&!i("/Applications").some((t)=>/^Xcode.*\.app$/i.test(t))}catch{return!1}}
export{$kn,YFe};
