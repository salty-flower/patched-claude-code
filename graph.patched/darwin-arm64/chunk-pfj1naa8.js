// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{i}from"./chunk-9a41hw1t.js";import{posix as _}from"path";var{dirname:o,isAbsolute:n,join:e,normalize:E,relative:T,sep:p}=_,_De="/mnt/user-data/uploads",Jet="/uploads",h2o="/uploads/cowork-folders/",d6e=e(o(_De),"outputs"),ggn="/mnt/attach/outputs",O=e(o(_De),"attachments"),c=e(o(_De),"project-docs"),u="/home/claude",Qet="/uploads/.home",m2t="/outputs",MU=".stage-tmp.";function hgn(t){if(!t)return _De;if(!n(t))throw Error("CLAUDE_STAGE_FILE_ROOT must be an absolute path");return E(t)}function EV(){return hgn(i.CLAUDE_STAGE_FILE_ROOT)}function Pce(){return e(o(EV()),"outputs")}function Zre(){return u}function ygn(){return O}function y2o(){return c}var g2r=[_De,d6e];function _2o(){return g2r}function _gn(t,s){let r=T(t,s);return!(r===".."||r.startsWith(".."+p)||n(r))}
export{_De,Jet,h2o,d6e,ggn,Qet,m2t,MU,hgn,EV,Pce,Zre,ygn,y2o,g2r,_2o,_gn};
