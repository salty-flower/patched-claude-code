// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{cf}from"./chunk-qs8h438x.js";var Mf={CURSOR_VISIBLE:25,ALT_SCREEN:47,ALT_SCREEN_CLEAR:1049,MOUSE_NORMAL:1000,MOUSE_BUTTON:1002,MOUSE_ANY:1003,MOUSE_SGR:1006,FOCUS_EVENTS:1004,BRACKETED_PASTE:2004,THEME_NOTIFY:2031,SYNCHRONIZED_UPDATE:2026,WIN32_INPUT_MODE:9001};function QP(E){return cf(`?${E}h`)}function PW(E){return cf(`?${E}l`)}var tWe=QP(Mf.SYNCHRONIZED_UPDATE),tye=PW(Mf.SYNCHRONIZED_UPDATE),WFn=QP(Mf.BRACKETED_PASTE),rit=PW(Mf.BRACKETED_PASTE),oit=QP(Mf.FOCUS_EVENTS),XHe=PW(Mf.FOCUS_EVENTS),GFn=QP(Mf.THEME_NOTIFY),sit=PW(Mf.THEME_NOTIFY),av=QP(Mf.CURSOR_VISIBLE),lv=PW(Mf.CURSOR_VISIBLE),YHe=QP(Mf.ALT_SCREEN_CLEAR),JHe=PW(Mf.ALT_SCREEN_CLEAR),iit=PW(Mf.WIN32_INPUT_MODE),_=QP(Mf.MOUSE_NORMAL)+QP(Mf.MOUSE_BUTTON)+QP(Mf.MOUSE_ANY)+QP(Mf.MOUSE_SGR),t=QP(Mf.MOUSE_NORMAL)+QP(Mf.MOUSE_SGR),A8=PW(Mf.MOUSE_SGR)+PW(Mf.MOUSE_ANY)+PW(Mf.MOUSE_BUTTON)+PW(Mf.MOUSE_NORMAL);function nWe(E){switch(E){case"full":return _;case"scroll":return t;case"off":return""}}
export{Mf,QP,PW,tWe,tye,WFn,rit,oit,XHe,GFn,sit,av,lv,YHe,JHe,iit,A8,nWe};
