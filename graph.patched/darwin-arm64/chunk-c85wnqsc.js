// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{Lf}from"./chunk-4kwsawbv.js";var dm={CURSOR_VISIBLE:25,ALT_SCREEN:47,ALT_SCREEN_CLEAR:1049,MOUSE_NORMAL:1000,MOUSE_BUTTON:1002,MOUSE_ANY:1003,MOUSE_SGR:1006,FOCUS_EVENTS:1004,BRACKETED_PASTE:2004,THEME_NOTIFY:2031,SYNCHRONIZED_UPDATE:2026,WIN32_INPUT_MODE:9001};function uD(E){return Lf(`?${E}h`)}function wG(E){return Lf(`?${E}l`)}var X3e=uD(dm.SYNCHRONIZED_UPDATE),Fbe=wG(dm.SYNCHRONIZED_UPDATE),NWn=uD(dm.BRACKETED_PASTE),mut=wG(dm.BRACKETED_PASTE),gut=uD(dm.FOCUS_EVENTS),YPe=wG(dm.FOCUS_EVENTS),FWn=uD(dm.THEME_NOTIFY),hut=wG(dm.THEME_NOTIFY),ZT=uD(dm.CURSOR_VISIBLE),ek=wG(dm.CURSOR_VISIBLE),XPe=uD(dm.ALT_SCREEN_CLEAR),JPe=wG(dm.ALT_SCREEN_CLEAR),yut=wG(dm.WIN32_INPUT_MODE),_=uD(dm.MOUSE_NORMAL)+uD(dm.MOUSE_BUTTON)+uD(dm.MOUSE_ANY)+uD(dm.MOUSE_SGR),t=uD(dm.MOUSE_NORMAL)+uD(dm.MOUSE_SGR),g7=wG(dm.MOUSE_SGR)+wG(dm.MOUSE_ANY)+wG(dm.MOUSE_BUTTON)+wG(dm.MOUSE_NORMAL);function J3e(E){switch(E){case"full":return _;case"scroll":return t;case"off":return""}}
export{dm,uD,wG,X3e,Fbe,NWn,mut,gut,YPe,FWn,hut,ZT,ek,XPe,JPe,yut,g7,J3e};
