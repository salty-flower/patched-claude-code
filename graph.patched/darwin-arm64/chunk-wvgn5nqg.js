// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{Uf}from"./chunk-fk28fhjr.js";var Sm={CURSOR_VISIBLE:25,ALT_SCREEN:47,ALT_SCREEN_CLEAR:1049,MOUSE_NORMAL:1000,MOUSE_BUTTON:1002,MOUSE_ANY:1003,MOUSE_SGR:1006,FOCUS_EVENTS:1004,BRACKETED_PASTE:2004,THEME_NOTIFY:2031,SYNCHRONIZED_UPDATE:2026,WIN32_INPUT_MODE:9001};function tI(E){return Uf(`?${E}h`)}function UG(E){return Uf(`?${E}l`)}var w4e=tI(Sm.SYNCHRONIZED_UPDATE),Dwe=UG(Sm.SYNCHRONIZED_UPDATE),k3n=tI(Sm.BRACKETED_PASTE),Ydt=UG(Sm.BRACKETED_PASTE),Xdt=tI(Sm.FOCUS_EVENTS),SDe=UG(Sm.FOCUS_EVENTS),R3n=tI(Sm.THEME_NOTIFY),Jdt=UG(Sm.THEME_NOTIFY),mk=tI(Sm.CURSOR_VISIBLE),gk=UG(Sm.CURSOR_VISIBLE),bDe=tI(Sm.ALT_SCREEN_CLEAR),wDe=UG(Sm.ALT_SCREEN_CLEAR),Qdt=UG(Sm.WIN32_INPUT_MODE),_=tI(Sm.MOUSE_NORMAL)+tI(Sm.MOUSE_BUTTON)+tI(Sm.MOUSE_ANY)+tI(Sm.MOUSE_SGR),t=tI(Sm.MOUSE_NORMAL)+tI(Sm.MOUSE_SGR),D7=UG(Sm.MOUSE_SGR)+UG(Sm.MOUSE_ANY)+UG(Sm.MOUSE_BUTTON)+UG(Sm.MOUSE_NORMAL);function E4e(E){switch(E){case"full":return _;case"scroll":return t;case"off":return""}}
export{Sm,tI,UG,w4e,Dwe,k3n,Ydt,Xdt,SDe,R3n,Jdt,mk,gk,bDe,wDe,Qdt,D7,E4e};
