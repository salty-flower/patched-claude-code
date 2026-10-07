// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{$a}from"./chunk-0qcng0ek.js";var xg={CURSOR_VISIBLE:25,ALT_SCREEN:47,ALT_SCREEN_CLEAR:1049,MOUSE_NORMAL:1000,MOUSE_BUTTON:1002,MOUSE_ANY:1003,MOUSE_SGR:1006,MOUSE_SGR_PIXELS:1016,FOCUS_EVENTS:1004,BRACKETED_PASTE:2004,THEME_NOTIFY:2031,SYNCHRONIZED_UPDATE:2026,WIN32_INPUT_MODE:9001};function S$(E){return $a(`?${E}h`)}function x2(E){return $a(`?${E}l`)}var zIt=S$(xg.SYNCHRONIZED_UPDATE),$3e=x2(xg.SYNCHRONIZED_UPDATE),nwo=S$(xg.BRACKETED_PASTE),otn=x2(xg.BRACKETED_PASTE),stn=S$(xg.FOCUS_EVENTS),jat=x2(xg.FOCUS_EVENTS),rwo=S$(xg.THEME_NOTIFY),itn=x2(xg.THEME_NOTIFY),XO=S$(xg.CURSOR_VISIBLE),JO=x2(xg.CURSOR_VISIBLE),Wat=S$(xg.ALT_SCREEN_CLEAR),zat=x2(xg.ALT_SCREEN_CLEAR),atn=x2(xg.WIN32_INPUT_MODE),S=S$(xg.MOUSE_NORMAL)+S$(xg.MOUSE_BUTTON)+S$(xg.MOUSE_ANY)+S$(xg.MOUSE_SGR),_=S$(xg.MOUSE_NORMAL)+S$(xg.MOUSE_SGR),Dce=x2(xg.MOUSE_SGR)+x2(xg.MOUSE_ANY)+x2(xg.MOUSE_BUTTON)+x2(xg.MOUSE_NORMAL),owo=S$(xg.MOUSE_SGR_PIXELS),swo=x2(xg.MOUSE_SGR_PIXELS)+S$(xg.MOUSE_SGR);function ltn(E){switch(E){case"full":return S;case"scroll":return _;case"off":return""}}
export{xg,S$,x2,zIt,$3e,nwo,otn,stn,jat,rwo,itn,XO,JO,Wat,zat,atn,Dce,owo,swo,ltn};
