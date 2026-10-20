// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{il}from"./chunk-2sjtpc7r.js";var hy={CURSOR_VISIBLE:25,ALT_SCREEN:47,ALT_SCREEN_CLEAR:1049,MOUSE_NORMAL:1000,MOUSE_BUTTON:1002,MOUSE_ANY:1003,MOUSE_SGR:1006,MOUSE_SGR_PIXELS:1016,FOCUS_EVENTS:1004,BRACKETED_PASTE:2004,THEME_NOTIFY:2031,SYNCHRONIZED_UPDATE:2026,WIN32_INPUT_MODE:9001};function JB(E){return il(`?${E}h`)}function o4(E){return il(`?${E}l`)}var AKt=JB(hy.SYNCHRONIZED_UPDATE),rot=o4(hy.SYNCHRONIZED_UPDATE),uZo=JB(hy.BRACKETED_PASTE),Dkn=o4(hy.BRACKETED_PASTE),Lkn=JB(hy.FOCUS_EVENTS),Ukt=o4(hy.FOCUS_EVENTS),pZo=JB(hy.THEME_NOTIFY),Nkn=o4(hy.THEME_NOTIFY),XD=JB(hy.CURSOR_VISIBLE),JD=o4(hy.CURSOR_VISIBLE),Bkt=JB(hy.ALT_SCREEN_CLEAR),jkt=o4(hy.ALT_SCREEN_CLEAR),Fkn=o4(hy.WIN32_INPUT_MODE),S=JB(hy.MOUSE_NORMAL)+JB(hy.MOUSE_BUTTON)+JB(hy.MOUSE_ANY)+JB(hy.MOUSE_SGR),_=JB(hy.MOUSE_NORMAL)+JB(hy.MOUSE_SGR),V_e=o4(hy.MOUSE_SGR)+o4(hy.MOUSE_ANY)+o4(hy.MOUSE_BUTTON)+o4(hy.MOUSE_NORMAL),fZo=JB(hy.MOUSE_SGR_PIXELS),mZo=o4(hy.MOUSE_SGR_PIXELS)+JB(hy.MOUSE_SGR);function $kn(E){switch(E){case"full":return S;case"scroll":return _;case"off":return""}}
export{hy,JB,o4,AKt,rot,uZo,Dkn,Lkn,Ukt,pZo,Nkn,XD,JD,Bkt,jkt,Fkn,V_e,fZo,mZo,$kn};
