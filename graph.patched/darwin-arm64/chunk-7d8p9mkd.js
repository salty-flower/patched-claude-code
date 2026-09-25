// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{ma}from"./chunk-hn35vsf8.js";var tm={CURSOR_VISIBLE:25,ALT_SCREEN:47,ALT_SCREEN_CLEAR:1049,MOUSE_NORMAL:1000,MOUSE_BUTTON:1002,MOUSE_ANY:1003,MOUSE_SGR:1006,MOUSE_SGR_PIXELS:1016,FOCUS_EVENTS:1004,BRACKETED_PASTE:2004,THEME_NOTIFY:2031,SYNCHRONIZED_UPDATE:2026,WIN32_INPUT_MODE:9001};function WO(E){return ma(`?${E}h`)}function sB(E){return ma(`?${E}l`)}var Dmt=WO(tm.SYNCHRONIZED_UPDATE),_1e=sB(tm.SYNCHRONIZED_UPDATE),tGr=WO(tm.BRACKETED_PASTE),s2t=sB(tm.BRACKETED_PASTE),i2t=WO(tm.FOCUS_EVENTS),T8e=sB(tm.FOCUS_EVENTS),nGr=WO(tm.THEME_NOTIFY),a2t=sB(tm.THEME_NOTIFY),hx=WO(tm.CURSOR_VISIBLE),yx=sB(tm.CURSOR_VISIBLE),R8e=WO(tm.ALT_SCREEN_CLEAR),x8e=sB(tm.ALT_SCREEN_CLEAR),l2t=sB(tm.WIN32_INPUT_MODE),S=WO(tm.MOUSE_NORMAL)+WO(tm.MOUSE_BUTTON)+WO(tm.MOUSE_ANY)+WO(tm.MOUSE_SGR),_=WO(tm.MOUSE_NORMAL)+WO(tm.MOUSE_SGR),Mte=sB(tm.MOUSE_SGR)+sB(tm.MOUSE_ANY)+sB(tm.MOUSE_BUTTON)+sB(tm.MOUSE_NORMAL),rGr=WO(tm.MOUSE_SGR_PIXELS),oGr=sB(tm.MOUSE_SGR_PIXELS)+WO(tm.MOUSE_SGR);function c2t(E){switch(E){case"full":return S;case"scroll":return _;case"off":return""}}
export{tm,WO,sB,Dmt,_1e,tGr,s2t,i2t,T8e,nGr,a2t,hx,yx,R8e,x8e,l2t,Mte,rGr,oGr,c2t};
