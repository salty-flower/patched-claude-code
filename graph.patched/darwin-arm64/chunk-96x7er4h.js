// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{zi}from"./chunk-gyqjm99t.js";var yg={CURSOR_VISIBLE:25,ALT_SCREEN:47,ALT_SCREEN_CLEAR:1049,MOUSE_NORMAL:1000,MOUSE_BUTTON:1002,MOUSE_ANY:1003,MOUSE_SGR:1006,FOCUS_EVENTS:1004,BRACKETED_PASTE:2004,THEME_NOTIFY:2031,SYNCHRONIZED_UPDATE:2026,WIN32_INPUT_MODE:9001};function jD(E){return zi(`?${E}h`)}function pq(E){return zi(`?${E}l`)}var xJe=jD(yg.SYNCHRONIZED_UPDATE),jRe=pq(yg.SYNCHRONIZED_UPDATE),Glr=jD(yg.BRACKETED_PASTE),Fvt=pq(yg.BRACKETED_PASTE),$vt=jD(yg.FOCUS_EVENTS),uBe=pq(yg.FOCUS_EVENTS),Vlr=jD(yg.THEME_NOTIFY),Uvt=pq(yg.THEME_NOTIFY),QC=jD(yg.CURSOR_VISIBLE),ZC=pq(yg.CURSOR_VISIBLE),dBe=jD(yg.ALT_SCREEN_CLEAR),pBe=pq(yg.ALT_SCREEN_CLEAR),Bvt=pq(yg.WIN32_INPUT_MODE),_=jD(yg.MOUSE_NORMAL)+jD(yg.MOUSE_BUTTON)+jD(yg.MOUSE_ANY)+jD(yg.MOUSE_SGR),t=jD(yg.MOUSE_NORMAL)+jD(yg.MOUSE_SGR),LY=pq(yg.MOUSE_SGR)+pq(yg.MOUSE_ANY)+pq(yg.MOUSE_BUTTON)+pq(yg.MOUSE_NORMAL);function HJe(E){switch(E){case"full":return _;case"scroll":return t;case"off":return""}}
export{yg,jD,pq,xJe,jRe,Glr,Fvt,$vt,uBe,Vlr,Uvt,QC,ZC,dBe,pBe,Bvt,LY,HJe};
