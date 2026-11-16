// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{gr,QAt}from"./chunk-pp8jvhe8.js";import{i}from"./chunk-428zme0n.js";import{Ztr}from"./chunk-gg7nabmz.js";function XIe(){return i.CLAUDE_CODE_REMOTE_TOOLS_FORWARD===!0||Ztr()}function uf(){return Ztr()}function Okt(){return QAt()?.desktopAppTakenAway===!0}function N3s(e=!0){if(e!==Okt())gr().desktopAppTakenAway=e||void 0}function YKe(){return XIe()&&!uf()}function M5(){return XIe()&&!uf()&&!FGt()}function FGt(){return QAt()?.takesMachinesMcpToolsAlone===!0}function QM(){return M5()}
export{XIe,uf,Okt,N3s,YKe,M5,FGt,QM};
