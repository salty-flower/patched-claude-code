// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{rf}from"./chunk-h3jhrqve.js";var Xf={CURSOR_VISIBLE:25,ALT_SCREEN:47,ALT_SCREEN_CLEAR:1049,MOUSE_NORMAL:1000,MOUSE_BUTTON:1002,MOUSE_ANY:1003,MOUSE_SGR:1006,FOCUS_EVENTS:1004,BRACKETED_PASTE:2004,THEME_NOTIFY:2031,SYNCHRONIZED_UPDATE:2026,WIN32_INPUT_MODE:9001};function QP(E){return rf(`?${E}h`)}function HW(E){return rf(`?${E}l`)}var A9e=QP(Xf.SYNCHRONIZED_UPDATE),G_e=HW(Xf.SYNCHRONIZED_UPDATE),eMt=QP(Xf.BRACKETED_PASTE),C9e=HW(Xf.BRACKETED_PASTE),glt=QP(Xf.FOCUS_EVENTS),mxe=HW(Xf.FOCUS_EVENTS),tMt=QP(Xf.THEME_NOTIFY),v9e=HW(Xf.THEME_NOTIFY),uv=QP(Xf.CURSOR_VISIBLE),VR=HW(Xf.CURSOR_VISIBLE),hlt=QP(Xf.ALT_SCREEN_CLEAR),cjn=HW(Xf.ALT_SCREEN_CLEAR),_lt=HW(Xf.WIN32_INPUT_MODE),_=QP(Xf.MOUSE_NORMAL)+QP(Xf.MOUSE_BUTTON)+QP(Xf.MOUSE_ANY)+QP(Xf.MOUSE_SGR),t=QP(Xf.MOUSE_NORMAL)+QP(Xf.MOUSE_SGR),M1=HW(Xf.MOUSE_SGR)+HW(Xf.MOUSE_ANY)+HW(Xf.MOUSE_BUTTON)+HW(Xf.MOUSE_NORMAL);function x8(E){switch(E){case"full":return _;case"scroll":return t;case"off":return""}}
export{Xf,QP,HW,A9e,G_e,eMt,C9e,glt,mxe,tMt,v9e,uv,VR,hlt,cjn,_lt,M1,x8};
