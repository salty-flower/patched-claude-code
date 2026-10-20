// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{sl}from"./chunk-dwxnayss.js";var gy={CURSOR_VISIBLE:25,ALT_SCREEN:47,ALT_SCREEN_CLEAR:1049,MOUSE_NORMAL:1000,MOUSE_BUTTON:1002,MOUSE_ANY:1003,MOUSE_SGR:1006,MOUSE_SGR_PIXELS:1016,FOCUS_EVENTS:1004,BRACKETED_PASTE:2004,THEME_NOTIFY:2031,SYNCHRONIZED_UPDATE:2026,WIN32_INPUT_MODE:9001};function j1(E){return sl(`?${E}h`)}function YY(E){return sl(`?${E}l`)}var _qt=j1(gy.SYNCHRONIZED_UPDATE),Qrt=YY(gy.SYNCHRONIZED_UPDATE),D7o=j1(gy.BRACKETED_PASTE),Skn=YY(gy.BRACKETED_PASTE),wkn=j1(gy.FOCUS_EVENTS),Mkt=YY(gy.FOCUS_EVENTS),L7o=j1(gy.THEME_NOTIFY),vkn=YY(gy.THEME_NOTIFY),KL=j1(gy.CURSOR_VISIBLE),VL=YY(gy.CURSOR_VISIBLE),Hkt=j1(gy.ALT_SCREEN_CLEAR),Dkt=YY(gy.ALT_SCREEN_CLEAR),Ekn=YY(gy.WIN32_INPUT_MODE),S=j1(gy.MOUSE_NORMAL)+j1(gy.MOUSE_BUTTON)+j1(gy.MOUSE_ANY)+j1(gy.MOUSE_SGR),_=j1(gy.MOUSE_NORMAL)+j1(gy.MOUSE_SGR),U_e=YY(gy.MOUSE_SGR)+YY(gy.MOUSE_ANY)+YY(gy.MOUSE_BUTTON)+YY(gy.MOUSE_NORMAL),N7o=j1(gy.MOUSE_SGR_PIXELS),$7o=YY(gy.MOUSE_SGR_PIXELS)+j1(gy.MOUSE_SGR);function kkn(E){switch(E){case"full":return S;case"scroll":return _;case"off":return""}}
export{gy,j1,YY,_qt,Qrt,D7o,Skn,wkn,Mkt,L7o,vkn,KL,VL,Hkt,Dkt,Ekn,U_e,N7o,$7o,kkn};
