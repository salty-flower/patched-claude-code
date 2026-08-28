// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{Ip}from"./chunk-crrbmb71.js";var Ef={CURSOR_VISIBLE:25,ALT_SCREEN:47,ALT_SCREEN_CLEAR:1049,MOUSE_NORMAL:1000,MOUSE_BUTTON:1002,MOUSE_ANY:1003,MOUSE_SGR:1006,FOCUS_EVENTS:1004,BRACKETED_PASTE:2004,THEME_NOTIFY:2031,SYNCHRONIZED_UPDATE:2026,WIN32_INPUT_MODE:9001};function IP(E){return Ip(`?${E}h`)}function I6(E){return Ip(`?${E}l`)}var T6e=IP(Ef.SYNCHRONIZED_UPDATE),ihe=I6(Ef.SYNCHRONIZED_UPDATE),RPt=IP(Ef.BRACKETED_PASTE),E6e=I6(Ef.BRACKETED_PASTE),qot=IP(Ef.FOCUS_EVENTS),kke=I6(Ef.FOCUS_EVENTS),xPt=IP(Ef.THEME_NOTIFY),C6e=I6(Ef.THEME_NOTIFY),fC=IP(Ef.CURSOR_VISIBLE),WA=I6(Ef.CURSOR_VISIBLE),Got=IP(Ef.ALT_SCREEN_CLEAR),hNn=I6(Ef.ALT_SCREEN_CLEAR),Vot=I6(Ef.WIN32_INPUT_MODE),_=IP(Ef.MOUSE_NORMAL)+IP(Ef.MOUSE_BUTTON)+IP(Ef.MOUSE_ANY)+IP(Ef.MOUSE_SGR),t=IP(Ef.MOUSE_NORMAL)+IP(Ef.MOUSE_SGR),fM=I6(Ef.MOUSE_SGR)+I6(Ef.MOUSE_ANY)+I6(Ef.MOUSE_BUTTON)+I6(Ef.MOUSE_NORMAL);function A8(E){switch(E){case"full":return _;case"scroll":return t;case"off":return""}}
export{Ef,IP,I6,T6e,ihe,RPt,E6e,qot,kke,xPt,C6e,fC,WA,Got,hNn,Vot,fM,A8};
