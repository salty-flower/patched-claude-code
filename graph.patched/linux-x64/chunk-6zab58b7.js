// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{zi}from"./chunk-d6f1t6sb.js";var gg={CURSOR_VISIBLE:25,ALT_SCREEN:47,ALT_SCREEN_CLEAR:1049,MOUSE_NORMAL:1000,MOUSE_BUTTON:1002,MOUSE_ANY:1003,MOUSE_SGR:1006,FOCUS_EVENTS:1004,BRACKETED_PASTE:2004,THEME_NOTIFY:2031,SYNCHRONIZED_UPDATE:2026,WIN32_INPUT_MODE:9001};function xM(E){return zi(`?${E}h`)}function n3(E){return zi(`?${E}l`)}var i7e=xM(gg.SYNCHRONIZED_UPDATE),CRe=n3(gg.SYNCHRONIZED_UPDATE),war=xM(gg.BRACKETED_PASTE),tEt=n3(gg.BRACKETED_PASTE),nEt=xM(gg.FOCUS_EVENTS),qUe=n3(gg.FOCUS_EVENTS),Ear=xM(gg.THEME_NOTIFY),rEt=n3(gg.THEME_NOTIFY),XA=xM(gg.CURSOR_VISIBLE),JA=n3(gg.CURSOR_VISIBLE),VUe=xM(gg.ALT_SCREEN_CLEAR),KUe=n3(gg.ALT_SCREEN_CLEAR),oEt=n3(gg.WIN32_INPUT_MODE),_=xM(gg.MOUSE_NORMAL)+xM(gg.MOUSE_BUTTON)+xM(gg.MOUSE_ANY)+xM(gg.MOUSE_SGR),t=xM(gg.MOUSE_NORMAL)+xM(gg.MOUSE_SGR),CY=n3(gg.MOUSE_SGR)+n3(gg.MOUSE_ANY)+n3(gg.MOUSE_BUTTON)+n3(gg.MOUSE_NORMAL);function a7e(E){switch(E){case"full":return _;case"scroll":return t;case"off":return""}}
export{gg,xM,n3,i7e,CRe,war,tEt,nEt,qUe,Ear,rEt,XA,JA,VUe,KUe,oEt,CY,a7e};
