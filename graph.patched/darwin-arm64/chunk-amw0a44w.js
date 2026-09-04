// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{mf}from"./chunk-q6cqt9d2.js";var Qf={CURSOR_VISIBLE:25,ALT_SCREEN:47,ALT_SCREEN_CLEAR:1049,MOUSE_NORMAL:1000,MOUSE_BUTTON:1002,MOUSE_ANY:1003,MOUSE_SGR:1006,FOCUS_EVENTS:1004,BRACKETED_PASTE:2004,THEME_NOTIFY:2031,SYNCHRONIZED_UPDATE:2026,WIN32_INPUT_MODE:9001};function NO(E){return mf(`?${E}h`)}function y9(E){return mf(`?${E}l`)}var u3e=NO(Qf.SYNCHRONIZED_UPDATE),SSe=y9(Qf.SYNCHRONIZED_UPDATE),zDt=NO(Qf.BRACKETED_PASTE),d3e=y9(Qf.BRACKETED_PASTE),elt=NO(Qf.FOCUS_EVENTS),qIe=y9(Qf.FOCUS_EVENTS),VDt=NO(Qf.THEME_NOTIFY),p3e=y9(Qf.THEME_NOTIFY),Xv=NO(Qf.CURSOR_VISIBLE),Tk=y9(Qf.CURSOR_VISIBLE),tlt=NO(Qf.ALT_SCREEN_CLEAR),R2n=y9(Qf.ALT_SCREEN_CLEAR),nlt=y9(Qf.WIN32_INPUT_MODE),_=NO(Qf.MOUSE_NORMAL)+NO(Qf.MOUSE_BUTTON)+NO(Qf.MOUSE_ANY)+NO(Qf.MOUSE_SGR),t=NO(Qf.MOUSE_NORMAL)+NO(Qf.MOUSE_SGR),TF=y9(Qf.MOUSE_SGR)+y9(Qf.MOUSE_ANY)+y9(Qf.MOUSE_BUTTON)+y9(Qf.MOUSE_NORMAL);function k7(E){switch(E){case"full":return _;case"scroll":return t;case"off":return""}}
export{Qf,NO,y9,u3e,SSe,zDt,d3e,elt,qIe,VDt,p3e,Xv,Tk,tlt,R2n,nlt,TF,k7};
