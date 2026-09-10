// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{Ff}from"./chunk-dz6vh6s7.js";var ym={CURSOR_VISIBLE:25,ALT_SCREEN:47,ALT_SCREEN_CLEAR:1049,MOUSE_NORMAL:1000,MOUSE_BUTTON:1002,MOUSE_ANY:1003,MOUSE_SGR:1006,FOCUS_EVENTS:1004,BRACKETED_PASTE:2004,THEME_NOTIFY:2031,SYNCHRONIZED_UPDATE:2026,WIN32_INPUT_MODE:9001};function zH(E){return Ff(`?${E}h`)}function Iq(E){return Ff(`?${E}l`)}var u4e=zH(ym.SYNCHRONIZED_UPDATE),Rwe=Iq(ym.SYNCHRONIZED_UPDATE),Qqn=zH(ym.BRACKETED_PASTE),Ldt=Iq(ym.BRACKETED_PASTE),$dt=zH(ym.FOCUS_EVENTS),uOe=Iq(ym.FOCUS_EVENTS),Zqn=zH(ym.THEME_NOTIFY),Ndt=Iq(ym.THEME_NOTIFY),dC=zH(ym.CURSOR_VISIBLE),pC=Iq(ym.CURSOR_VISIBLE),dOe=zH(ym.ALT_SCREEN_CLEAR),pOe=Iq(ym.ALT_SCREEN_CLEAR),Fdt=Iq(ym.WIN32_INPUT_MODE),_=zH(ym.MOUSE_NORMAL)+zH(ym.MOUSE_BUTTON)+zH(ym.MOUSE_ANY)+zH(ym.MOUSE_SGR),t=zH(ym.MOUSE_NORMAL)+zH(ym.MOUSE_SGR),TX=Iq(ym.MOUSE_SGR)+Iq(ym.MOUSE_ANY)+Iq(ym.MOUSE_BUTTON)+Iq(ym.MOUSE_NORMAL);function d4e(E){switch(E){case"full":return _;case"scroll":return t;case"off":return""}}
export{ym,zH,Iq,u4e,Rwe,Qqn,Ldt,$dt,uOe,Zqn,Ndt,dC,pC,dOe,pOe,Fdt,TX,d4e};
