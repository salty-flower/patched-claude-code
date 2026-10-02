// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{Ra}from"./chunk-631kxjhr.js";var Tm={CURSOR_VISIBLE:25,ALT_SCREEN:47,ALT_SCREEN_CLEAR:1049,MOUSE_NORMAL:1000,MOUSE_BUTTON:1002,MOUSE_ANY:1003,MOUSE_SGR:1006,MOUSE_SGR_PIXELS:1016,FOCUS_EVENTS:1004,BRACKETED_PASTE:2004,THEME_NOTIFY:2031,SYNCHRONIZED_UPDATE:2026,WIN32_INPUT_MODE:9001};function jM(E){return Ra(`?${E}h`)}function hj(E){return Ra(`?${E}l`)}var Ubt=jM(Tm.SYNCHRONIZED_UPDATE),oWe=hj(Tm.SYNCHRONIZED_UPDATE),yZr=jM(Tm.BRACKETED_PASTE),Jqt=hj(Tm.BRACKETED_PASTE),Qqt=jM(Tm.FOCUS_EVENTS),NQe=hj(Tm.FOCUS_EVENTS),_Zr=jM(Tm.THEME_NOTIFY),Zqt=hj(Tm.THEME_NOTIFY),HP=jM(Tm.CURSOR_VISIBLE),OP=hj(Tm.CURSOR_VISIBLE),FQe=jM(Tm.ALT_SCREEN_CLEAR),$Qe=hj(Tm.ALT_SCREEN_CLEAR),e3t=hj(Tm.WIN32_INPUT_MODE),S=jM(Tm.MOUSE_NORMAL)+jM(Tm.MOUSE_BUTTON)+jM(Tm.MOUSE_ANY)+jM(Tm.MOUSE_SGR),_=jM(Tm.MOUSE_NORMAL)+jM(Tm.MOUSE_SGR),ise=hj(Tm.MOUSE_SGR)+hj(Tm.MOUSE_ANY)+hj(Tm.MOUSE_BUTTON)+hj(Tm.MOUSE_NORMAL),SZr=jM(Tm.MOUSE_SGR_PIXELS),bZr=hj(Tm.MOUSE_SGR_PIXELS)+jM(Tm.MOUSE_SGR);function t3t(E){switch(E){case"full":return S;case"scroll":return _;case"off":return""}}
export{Tm,jM,hj,Ubt,oWe,yZr,Jqt,Qqt,NQe,_Zr,Zqt,HP,OP,FQe,$Qe,e3t,ise,SZr,bZr,t3t};
