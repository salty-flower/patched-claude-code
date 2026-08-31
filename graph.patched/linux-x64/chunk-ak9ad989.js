// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{op}from"./chunk-1h5xyv3q.js";var Kp={CURSOR_VISIBLE:25,ALT_SCREEN:47,ALT_SCREEN_CLEAR:1049,MOUSE_NORMAL:1000,MOUSE_BUTTON:1002,MOUSE_ANY:1003,MOUSE_SGR:1006,FOCUS_EVENTS:1004,BRACKETED_PASTE:2004,THEME_NOTIFY:2031,SYNCHRONIZED_UPDATE:2026,WIN32_INPUT_MODE:9001};function KP(E){return op(`?${E}h`)}function kG(E){return op(`?${E}l`)}var wWe=KP(Kp.SYNCHRONIZED_UPDATE),Uye=kG(Kp.SYNCHRONIZED_UPDATE),eMt=KP(Kp.BRACKETED_PASTE),EWe=kG(Kp.BRACKETED_PASTE),plt=KP(Kp.FOCUS_EVENTS),fxe=kG(Kp.FOCUS_EVENTS),tMt=KP(Kp.THEME_NOTIFY),AWe=kG(Kp.THEME_NOTIFY),lk=KP(Kp.CURSOR_VISIBLE),WT=kG(Kp.CURSOR_VISIBLE),mlt=KP(Kp.ALT_SCREEN_CLEAR),ozn=kG(Kp.ALT_SCREEN_CLEAR),glt=kG(Kp.WIN32_INPUT_MODE),_=KP(Kp.MOUSE_NORMAL)+KP(Kp.MOUSE_BUTTON)+KP(Kp.MOUSE_ANY)+KP(Kp.MOUSE_SGR),t=KP(Kp.MOUSE_NORMAL)+KP(Kp.MOUSE_SGR),$N=kG(Kp.MOUSE_SGR)+kG(Kp.MOUSE_ANY)+kG(Kp.MOUSE_BUTTON)+kG(Kp.MOUSE_NORMAL);function T6(E){switch(E){case"full":return _;case"scroll":return t;case"off":return""}}
export{Kp,KP,kG,wWe,Uye,eMt,EWe,plt,fxe,tMt,AWe,lk,WT,mlt,ozn,glt,$N,T6};
