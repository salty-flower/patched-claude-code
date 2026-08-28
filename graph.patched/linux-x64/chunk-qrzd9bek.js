// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{Ip}from"./chunk-yhsnhder.js";var Ef={CURSOR_VISIBLE:25,ALT_SCREEN:47,ALT_SCREEN_CLEAR:1049,MOUSE_NORMAL:1000,MOUSE_BUTTON:1002,MOUSE_ANY:1003,MOUSE_SGR:1006,FOCUS_EVENTS:1004,BRACKETED_PASTE:2004,THEME_NOTIFY:2031,SYNCHRONIZED_UPDATE:2026,WIN32_INPUT_MODE:9001};function TR(E){return Ip(`?${E}h`)}function Hj(E){return Ip(`?${E}l`)}var wje=TR(Ef.SYNCHRONIZED_UPDATE),Zme=Hj(Ef.SYNCHRONIZED_UPDATE),ARt=TR(Ef.BRACKETED_PASTE),Eje=Hj(Ef.BRACKETED_PASTE),zot=TR(Ef.FOCUS_EVENTS),EHe=Hj(Ef.FOCUS_EVENTS),kRt=TR(Ef.THEME_NOTIFY),Aje=Hj(Ef.THEME_NOTIFY),uk=TR(Ef.CURSOR_VISIBLE),BT=Hj(Ef.CURSOR_VISIBLE),Got=TR(Ef.ALT_SCREEN_CLEAR),a1n=Hj(Ef.ALT_SCREEN_CLEAR),Wot=Hj(Ef.WIN32_INPUT_MODE),_=TR(Ef.MOUSE_NORMAL)+TR(Ef.MOUSE_BUTTON)+TR(Ef.MOUSE_ANY)+TR(Ef.MOUSE_SGR),t=TR(Ef.MOUSE_NORMAL)+TR(Ef.MOUSE_SGR),d$=Hj(Ef.MOUSE_SGR)+Hj(Ef.MOUSE_ANY)+Hj(Ef.MOUSE_BUTTON)+Hj(Ef.MOUSE_NORMAL);function w8(E){switch(E){case"full":return _;case"scroll":return t;case"off":return""}}
export{Ef,TR,Hj,wje,Zme,ARt,Eje,zot,EHe,kRt,Aje,uk,BT,Got,a1n,Wot,d$,w8};
