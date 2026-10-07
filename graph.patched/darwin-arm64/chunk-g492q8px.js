// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{$a}from"./chunk-1jrtnqew.js";var Pg={CURSOR_VISIBLE:25,ALT_SCREEN:47,ALT_SCREEN_CLEAR:1049,MOUSE_NORMAL:1000,MOUSE_BUTTON:1002,MOUSE_ANY:1003,MOUSE_SGR:1006,MOUSE_SGR_PIXELS:1016,FOCUS_EVENTS:1004,BRACKETED_PASTE:2004,THEME_NOTIFY:2031,SYNCHRONIZED_UPDATE:2026,WIN32_INPUT_MODE:9001};function xF(E){return $a(`?${E}h`)}function F6(E){return $a(`?${E}l`)}var rOt=xF(Pg.SYNCHRONIZED_UPDATE),z3e=F6(Pg.SYNCHRONIZED_UPDATE),Hwo=xF(Pg.BRACKETED_PASTE),wtn=F6(Pg.BRACKETED_PASTE),Etn=xF(Pg.FOCUS_EVENTS),Jat=F6(Pg.FOCUS_EVENTS),Mwo=xF(Pg.THEME_NOTIFY),vtn=F6(Pg.THEME_NOTIFY),e0=xF(Pg.CURSOR_VISIBLE),t0=F6(Pg.CURSOR_VISIBLE),Qat=xF(Pg.ALT_SCREEN_CLEAR),Zat=F6(Pg.ALT_SCREEN_CLEAR),Ctn=F6(Pg.WIN32_INPUT_MODE),S=xF(Pg.MOUSE_NORMAL)+xF(Pg.MOUSE_BUTTON)+xF(Pg.MOUSE_ANY)+xF(Pg.MOUSE_SGR),_=xF(Pg.MOUSE_NORMAL)+xF(Pg.MOUSE_SGR),Bce=F6(Pg.MOUSE_SGR)+F6(Pg.MOUSE_ANY)+F6(Pg.MOUSE_BUTTON)+F6(Pg.MOUSE_NORMAL),Dwo=xF(Pg.MOUSE_SGR_PIXELS),Lwo=F6(Pg.MOUSE_SGR_PIXELS)+xF(Pg.MOUSE_SGR);function ktn(E){switch(E){case"full":return S;case"scroll":return _;case"off":return""}}
export{Pg,xF,F6,rOt,z3e,Hwo,wtn,Etn,Jat,Mwo,vtn,e0,t0,Qat,Zat,Ctn,Bce,Dwo,Lwo,ktn};
