import { afterAll, expect, test } from "bun:test"
import { mkdtempSync, readdirSync, readFileSync, rmSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { targetVersion } from "../lib/target"
import { renderRunnableBundle } from "./helpers/render-runnable-bundle"

const ROOT = join(import.meta.dir, "..", "..")
const TARGET_VERSION = targetVersion()

const tempDir = mkdtempSync(join(tmpdir(), "patched-cc-statusline-"))

afterAll(() => {
  rmSync(tempDir, { recursive: true, force: true })
})

function compareVersions(left: string, right: string): number {
  const parts = (value: string) => value.split(".").map((part) => Number.parseInt(part, 10))
  const leftParts = parts(left)
  const rightParts = parts(right)

  for (let index = 0; index < Math.max(leftParts.length, rightParts.length); index += 1) {
    const leftPart = leftParts[index] ?? 0
    const rightPart = rightParts[index] ?? 0
    if (leftPart > rightPart) return 1
    if (leftPart < rightPart) return -1
  }

  return 0
}

function isVersionAtLeast(version: string, floor: string): boolean {
  return compareVersions(version, floor) >= 0
}

function isVersionBefore(version: string, ceiling: string): boolean {
  return compareVersions(version, ceiling) < 0
}

test("patched bundle exposes --hide-builtin-footer and wires it into statusLine.disabledFooter", async () => {
  const entrypoint = await renderRunnableBundle({
    root: ROOT,
    version: TARGET_VERSION,
    outDir: tempDir,
    patchFiles: ["statusline-footer-control.toml"],
  })
  const graphDir = join(entrypoint, "..", "graph.patched", "darwin-arm64")
  const patched = readdirSync(graphDir).filter((file) => file.endsWith(".js")).map((file) => readFileSync(join(graphDir, file), "utf8")).join("\n")

  if (isVersionAtLeast(TARGET_VERSION, "2.1.181")) {
    expect(patched).toContain("--hide-builtin-footer")
    expect(patched).toContain(
      '["footer","permission_mode","mode","effort_notification","rate_limit_warning","clipboard_image_hint","teammate_idle_spacer"]',
    )
    if (TARGET_VERSION === "2.1.250") {
      expect(patched).toContain('globalThis.__acc_disabled_footer=t==="all"')
      expect(patched).toContain("__acc_hide_footer=Che?.hideBuiltinFooter")
      expect(patched).toContain("return __acc_hide_footer?null:jJe}")
      expect(patched).toContain("let Vs=!__acc_hide_mode&&jr&&Gr?")
      expect(patched).toContain("let Do=!__acc_hide_mode&&Gr&&Aa?")
      return
    }
    if (TARGET_VERSION === "2.1.246") {
      expect(patched).toContain(
        '.option("--hide-builtin-footer [items]","Hide built-in footer items",(e)=>e??"all")',
      )
      expect(patched).toContain(
        "globalThis.__acc_disabled_footer=H})():void 0,ie={sessionNoticesPoll:{pendingDeliveryUuids:[]},settings:lt()",
      )
      expect(patched).toContain(
        '__acc_hide_footer=sdt?.hideBuiltinFooter||sdt?.disabledFooter?.includes("footer")||globalThis.__acc_disabled_footer?.includes("footer")',
      )
      expect(patched).toContain("return __acc_hide_footer?_Y:ldt}")
      expect(patched).toContain("let Uo=!__acc_hide_mode&&nt&&je?")
      expect(patched).toContain("let oe=!__acc_hide_mode&&je&&fo?")
      expect(patched).toContain(
        '__acc_hide_effort_item=M((E)=>E.settings.statusLine?.disabledFooter?.includes("effort_notification"))',
      )
      expect(patched).toContain('if(!PT||__acc_hide_effort_level){Qr("effort-level");return}')
      expect(patched).toContain("globalThis.__acc_rate_limit_warning=s")
      expect(patched).toContain("globalThis.__acc_clipboard_image_available=u")
      expect(patched).toContain("effort_level:Cle(v)?UI(v,y):null")
      expect(patched).toContain(
        'permission_mode:t,clipboard_image:{available:globalThis.__acc_clipboard_image_available===!0,paste_shortcut:"ctrl+v"}',
      )
      expect(patched).toContain(
        'hideBuiltinFooter:a().optional().describe("Compatibility alias for hiding all built-in footer items."),disabledFooter:u(m(["footer","permission_mode","mode","effort_notification","rate_limit_warning","clipboard_image_hint","teammate_idle_spacer"])).optional()',
      )
      expect(patched).not.toContain(
        'hideBuiltinFooter:Bt().optional().describe("Compatibility alias for hiding all built-in footer items."),disabledFooter:ft(Dr(["footer","permission_mode","mode","effort_notification","rate_limit_warning","clipboard_image_hint","teammate_idle_spacer"])).optional()',
      )
      return
    }
    if (TARGET_VERSION === "2.1.241") {
      expect(patched).toContain(
        "globalThis.__acc_disabled_footer=H})():void 0,Rt={sessionNoticesPoll:{pendingDeliveryUuids:[]},settings:Qo()",
      )
      expect(patched).not.toContain(
        "globalThis.__acc_disabled_footer=H})():void 0,vt={sessionNoticesPoll:{pendingDeliveryUuids:[]},settings:Vo()",
      )
      expect(patched).toContain(
        'function ksy(G41){let __acc_hide_footer=Tt((FH)=>FH.settings.statusLine?.hideBuiltinFooter||FH.settings.statusLine?.disabledFooter?.includes("footer"))',
      )
      expect(patched).not.toContain("function wzg(L71){let __acc_hide_footer=_t(")
      expect(patched).toContain("return __acc_hide_footer?vZc:Dx0")
      expect(patched).not.toContain("return __acc_hide_footer?Pzc:nYE")
      expect(patched).toContain(
        "function biy({mode:e,toolPermissionContext:t,showHint:r,denseShowHint:n",
      )
      expect(patched).not.toContain(
        "function g3g({mode:e,toolPermissionContext:t,showHint:r,denseShowHint:n",
      )
      expect(patched).toContain("let zt=!__acc_hide_mode&&ke&&se?")
      expect(patched).not.toContain("let _r=!__acc_hide_mode&&ke&&ue?")
      expect(patched).toContain("let bt=!__acc_hide_mode&&se&&Kt?")
      expect(patched).not.toContain("let pt=!__acc_hide_mode&&ue&&or?")
      expect(patched).toContain(
        'hideBuiltinFooter:Bt().optional().describe("Compatibility alias for hiding all built-in footer items."),disabledFooter:ft(Dr(["footer","permission_mode","mode","effort_notification","rate_limit_warning","clipboard_image_hint","teammate_idle_spacer"])).optional()',
      )
      expect(patched).not.toContain(
        'hideBuiltinFooter:zt().optional().describe("Compatibility alias for hiding all built-in footer items."),disabledFooter:_t(Mr(["footer","permission_mode","mode","effort_notification","rate_limit_warning","clipboard_image_hint","teammate_idle_spacer"])).optional()',
      )
      expect(patched).toContain("O5=__acc_hide_effort_level?void 0:Nfg(Zl,id,Dh);")
      expect(patched).not.toContain("Qne=__acc_hide_effort_level?void 0:Zmh(lM,ywe,m3);")
      expect(patched).toContain(
        "__acc_hide_effort_all=Tt((I_)=>I_.settings.statusLine?.hideBuiltinFooter),__acc_hide_effort_item=Tt",
      )
      expect(patched).not.toContain("{addNotification:ir,removeNotification:ut}=hu();Cs.useEffect")
      expect(patched).toContain("globalThis.__acc_rate_limit_warning=i")
      expect(patched).toContain(
        'c?.disabledFooter?.includes("rate_limit_warning")||globalThis.__acc_disabled_footer?.includes("rate_limit_warning")',
      )
      expect(patched).not.toContain("let i=Fga(r,n);if(!i||i===e)return;e=i;let s=$up(r,n,o)")
      expect(patched).toContain("globalThis.__acc_clipboard_image_available=d")
      expect(patched).toContain(
        'h?.disabledFooter?.includes("clipboard_image_hint")||globalThis.__acc_disabled_footer?.includes("clipboard_image_hint")',
      )
      expect(patched).toContain("effort_level:QM(_)?lW(_,m):null")
      expect(patched).not.toContain("effort_level:MM(b)?nK(b,m):null")
      expect(patched).toContain(
        'permission_mode:t,clipboard_image:{available:globalThis.__acc_clipboard_image_available===!0,paste_shortcut:"ctrl+v"}',
      )
      expect(patched).not.toContain("return{...Sy(e,f),permission_mode:t,clipboard_image:")
      return
    }
    if (TARGET_VERSION === "2.1.238") {
      expect(patched).toContain(
        "globalThis.__acc_disabled_footer=H})():void 0,vt={sessionNoticesPoll:{pendingDeliveryUuids:[]},settings:Vo()",
      )
      expect(patched).toContain(
        'function wzg(L71){let __acc_hide_footer=_t((FH)=>FH.settings.statusLine?.hideBuiltinFooter||FH.settings.statusLine?.disabledFooter?.includes("footer"))',
      )
      expect(patched).toContain("return __acc_hide_footer?Pzc:nYE")
      expect(patched).toContain(
        "function g3g({mode:e,toolPermissionContext:t,showHint:r,denseShowHint:n",
      )
      expect(patched).toContain("let _r=!__acc_hide_mode&&ke&&ue?")
      expect(patched).toContain("let pt=!__acc_hide_mode&&ue&&or?")
      expect(patched).not.toContain("return __acc_hide_footer?null:VXw")
      return
    }
    if (TARGET_VERSION === "2.1.234") {
      expect(patched).toContain(
        'globalThis.__acc_disabled_footer=H})():void 0,Ot={sessionNoticesPoll:{pendingDeliveryUuids:[]},settings:Vo(),tasks:{},attentionBudget:d5o,proactivityLevel:q',
      )
      expect(patched).toContain(
        'hideBuiltinFooter:zt().optional().describe("Compatibility alias for hiding all built-in footer items."),disabledFooter:_t(Mr(["footer","permission_mode","mode","effort_notification","rate_limit_warning","clipboard_image_hint","teammate_idle_spacer"])).optional()',
      )
      expect(patched).toContain(
        'function Vos(PE1){let __acc_hide_footer=ft((se)=>se.settings.statusLine?.hideBuiltinFooter||se.settings.statusLine?.disabledFooter?.includes("footer"))',
      )
      expect(patched).toContain("return __acc_hide_footer?null:VXw")
      expect(patched).toContain("Qne=__acc_hide_effort_level?void 0:Zmh(lM,ywe,m3);")
      expect(patched).toContain(
        "__acc_hide_effort_all=ft((I_)=>I_.settings.statusLine?.hideBuiltinFooter),__acc_hide_effort_item=ft",
      )
      expect(patched).toContain("globalThis.__acc_rate_limit_warning=i")
      expect(patched).toContain(
        'c?.disabledFooter?.includes("rate_limit_warning")||globalThis.__acc_disabled_footer?.includes("rate_limit_warning")',
      )
      expect(patched).toContain(
        'function wsg({mode:e,toolPermissionContext:t,showHint:r,denseShowHint:n',
      )
      expect(patched).toContain("let Vt=!__acc_hide_mode&&Nt&&te?")
      expect(patched).toContain("let Ye=!__acc_hide_mode&&te&&St?")
      expect(patched).toContain("command_length:e.command?.length??0,padding:e.padding")
      expect(patched).toContain("effort_level:MM(b)?nK(b,m):null")
      expect(patched).toContain(
        'permission_mode:t,clipboard_image:{available:globalThis.__acc_clipboard_image_available===!0,paste_shortcut:"ctrl+v"}',
      )
      expect(patched).toContain("getCommandLength:()=>this.#t.statusLine?.command?.length??0")
      expect(patched).toContain("globalThis.__acc_clipboard_image_available=c")
      expect(patched).toContain('disabledFooter?.includes("clipboard_image_hint")')
      return
    }
    if (isVersionAtLeast(TARGET_VERSION, "2.1.233") && isVersionBefore(TARGET_VERSION, "2.1.234")) {
      expect(patched).toContain(
        'globalThis.__acc_disabled_footer=H})():void 0,Qt={settings:Wo(),tasks:{},attentionBudget:YBo,proactivityLevel:z',
      )
      expect(patched).toContain(
        'hideBuiltinFooter:qt().optional().describe("Compatibility alias for hiding all built-in footer items."),disabledFooter:ht(Mr(["footer","permission_mode","mode","effort_notification","rate_limit_warning","clipboard_image_hint","teammate_idle_spacer"])).optional()',
      )
      expect(patched).toContain(
        'function fJi(xzM){let __acc_hide_footer=ct((se)=>se.settings.statusLine?.hideBuiltinFooter||se.settings.statusLine?.disabledFooter?.includes("footer"))',
      )
      expect(patched).toContain("return __acc_hide_footer?null:HMw")
      expect(patched).toContain("qX=__acc_hide_effort_level?void 0:BJm(PNe,cRe,Nx);")
      expect(patched).toContain("__acc_hide_effort_all=ct((I_)=>I_.settings.statusLine?.hideBuiltinFooter)")
      expect(patched).toContain("globalThis.__acc_rate_limit_warning=i")
      expect(patched).toContain(
        "c?.disabledFooter?.includes(\"rate_limit_warning\")||globalThis.__acc_disabled_footer?.includes(\"rate_limit_warning\")",
      )
      expect(patched).toContain(
        'function _qh({mode:e,toolPermissionContext:t,embedded:r,showHint:n,denseShowHint:o',
      )
      expect(patched).toContain("let Xt=!__acc_hide_mode&&Me&&ee?")
      expect(patched).toContain("let Qt=!__acc_hide_mode&&ee&&ft?")
      expect(patched).toContain("command_length:e.command?.length??0,padding:e.padding")
      expect(patched).toContain("effort_level:ZD(b)?B8(b,m):null")
      expect(patched).toContain(
        'permission_mode:t,clipboard_image:{available:globalThis.__acc_clipboard_image_available===!0,paste_shortcut:"ctrl+v"}',
      )
      expect(patched).toContain("getCommandLength:()=>this.#t.statusLine?.command?.length??0")
      expect(patched).toContain("globalThis.__acc_clipboard_image_available=c")
      expect(patched).toContain('disabledFooter?.includes("clipboard_image_hint")')
      return
    }
    if (isVersionAtLeast(TARGET_VERSION, "2.1.229") && isVersionBefore(TARGET_VERSION, "2.1.233")) {
      expect(patched).toContain('globalThis.__acc_disabled_footer=q,_}).option("-c, --continue"')
      expect(patched).toContain("tr={settings:$o(),tasks:{},attentionBudget:XPo")
      expect(patched).not.toContain("tr={settings:Ho(),tasks:{},attentionBudget:tCo")
      expect(patched).toContain("getCommandLength:()=>v.current?.command?.length??0")
      expect(patched).toContain("command_length:B.command?.length??0,padding:B.padding")
      expect(patched).not.toContain("command_length:F.command?.length??0,padding:F.padding")
      expect(patched).toContain("globalThis.__acc_clipboard_image_available=c")
      expect(patched).toContain("globalThis.__acc_rate_limit_warning=PTw")
      expect(patched).not.toContain("globalThis.__acc_rate_limit_warning=MdE")
      expect(patched).toContain("__cci=st((X)=>X.clipboardImageAvailable??!1)")
      expect(patched).not.toContain("__cci=ot((X)=>X.clipboardImageAvailable??!1)")
      expect(patched).toContain(
        'function V5i($DD){let __acc_hide_footer=st((se)=>se.settings.statusLine?.hideBuiltinFooter||se.settings.statusLine?.disabledFooter?.includes("footer"))',
      )
      expect(patched).not.toContain(
        'function F3i(XmD){let __acc_hide_footer=it((se)=>se.settings.statusLine?.hideBuiltinFooter',
      )
      expect(patched).toContain("return __acc_hide_footer?null:dYT")
      expect(patched).not.toContain("return __acc_hide_footer?null:dqv")
      expect(patched).toContain(
        'hideBuiltinFooter:qt().optional().describe("Compatibility alias for hiding all built-in footer items."),disabledFooter:ft(Dr(["footer","permission_mode","mode","effort_notification","rate_limit_warning","clipboard_image_hint","teammate_idle_spacer"])).optional()',
      )
      expect(patched).not.toContain(
        'hideBuiltinFooter:Ut().optional().describe("Compatibility alias for hiding all built-in footer items.")',
      )
      expect(patched).toContain("iO.useEffect(()=>{z()},[__cci,z]);")
      expect(patched).not.toContain("YP.useEffect(()=>{j()},[__cci,j]);")
      expect(patched).not.toContain("EP.useEffect(()=>{$()},[__cci,$]);")
      expect(patched).toContain("effort_level:FO(y)?GW(y,f):null")
      expect(patched).not.toContain("effort_level:AO(g)?yW(g,p):null")
      expect(patched).toContain("let iVl=!__acc_hide_mode&&!!Tde&&HYT;")
      expect(patched).not.toContain("let Lzl=!__acc_hide_mode&&!!Vue&&Mqv;")
      expect(patched).toContain("H8=!__acc_hide_mode&&iVl&&Tde?")
      expect(patched).not.toContain("c8=!__acc_hide_mode&&Lzl&&Vue?")
      for (const item of [
        "footer",
        "permission_mode",
        "mode",
        "effort_notification",
        "rate_limit_warning",
        "clipboard_image_hint",
      ]) {
        expect(patched).toContain('disabledFooter?.includes("' + item + '")')
      }
      return
    }
    if (isVersionAtLeast(TARGET_VERSION, "2.1.228") && isVersionBefore(TARGET_VERSION, "2.1.229")) {
      expect(patched).toContain('globalThis.__acc_disabled_footer=q,_}).option("-c, --continue"')
      expect(patched).toContain("tr={settings:Ho(),tasks:{},attentionBudget:tCo")
      expect(patched).not.toContain("Wt={settings:Io(),tasks:{},attentionBudget:jbo")
      expect(patched).toContain("getCommandLength:()=>y.current?.command?.length??0")
      expect(patched).toContain("command_length:F.command?.length??0,padding:F.padding")
      expect(patched).not.toContain("command_length:B.command?.length??0,padding:B.padding")
      expect(patched).toContain("globalThis.__acc_clipboard_image_available=c")
      expect(patched).toContain("globalThis.__acc_rate_limit_warning=MdE")
      expect(patched).not.toContain("globalThis.__acc_rate_limit_warning=WGv")
      expect(patched).toContain("__cci=ot((X)=>X.clipboardImageAvailable??!1)")
      expect(patched).not.toContain("__cci=Ye((X)=>X.clipboardImageAvailable??!1)")
      expect(patched).toContain(
        'function F3i(XmD){let __acc_hide_footer=it((se)=>se.settings.statusLine?.hideBuiltinFooter||se.settings.statusLine?.disabledFooter?.includes("footer"))',
      )
      expect(patched).not.toContain(
        'function Y1i(j3O){let __acc_hide_footer=ot((se)=>se.settings.statusLine?.hideBuiltinFooter',
      )
      expect(patched).toContain("return __acc_hide_footer?null:dqv")
      expect(patched).not.toContain("return __acc_hide_footer?null:MRv")
      expect(patched).toContain(
        'hideBuiltinFooter:qt().optional().describe("Compatibility alias for hiding all built-in footer items."),disabledFooter:ft(Dr(["footer","permission_mode","mode","effort_notification","rate_limit_warning","clipboard_image_hint","teammate_idle_spacer"])).optional()',
      )
      expect(patched).not.toContain(
        'hideBuiltinFooter:Ut().optional().describe("Compatibility alias for hiding all built-in footer items.")',
      )
      expect(patched).toContain("YP.useEffect(()=>{j()},[__cci,j]);")
      expect(patched).not.toContain("EP.useEffect(()=>{$()},[__cci,$]);")
      expect(patched).not.toContain("Xk.useEffect(()=>{q()},[__cci,q]);")
      expect(patched).toContain("effort_level:AO(g)?yW(g,p):null")
      expect(patched).not.toContain("effort_level:KP(g)?k5(g,p):null")
      expect(patched).toContain("let Lzl=!__acc_hide_mode&&!!Vue&&Mqv;")
      expect(patched).not.toContain("let Z$l=!__acc_hide_mode&&!!Vce&&i0v;")
      expect(patched).toContain("c8=!__acc_hide_mode&&Lzl&&Vue?")
      expect(patched).not.toContain("DG=!__acc_hide_mode&&Z$l&&Vce?")
      for (const item of [
        "footer",
        "permission_mode",
        "mode",
        "effort_notification",
        "rate_limit_warning",
        "clipboard_image_hint",
      ]) {
        expect(patched).toContain('disabledFooter?.includes("' + item + '")')
      }
      return
    }
    if (isVersionAtLeast(TARGET_VERSION, "2.1.227")) {
      expect(patched).toContain('globalThis.__acc_disabled_footer=q,_}).option("-c, --continue"')
      expect(patched).toContain("Wt={settings:Io(),tasks:{},attentionBudget:jbo")
      expect(patched).not.toContain(
        "globalThis.__acc_disabled_footer=H})():void 0,Ct={settings:lo(),tasks:{},transcripts:{},taskDecorations:{}",
      )
      expect(patched).toContain("getCommandLength:()=>y.current?.command?.length??0")
      expect(patched).toContain("command_length:B.command?.length??0,padding:B.padding")
      expect(patched).not.toContain("command_length:F.command?.length??0,padding:F.padding")
      expect(patched).toContain("globalThis.__acc_clipboard_image_available=c")
      expect(patched).toContain("globalThis.__acc_rate_limit_warning=WGv")
      expect(patched).not.toContain("globalThis.__acc_rate_limit_warning=VJT")
      expect(patched).toContain("__cci=ot((X)=>X.clipboardImageAvailable??!1)")
      expect(patched).not.toContain("__cci=Ye((X)=>X.clipboardImageAvailable??!1)")
      expect(patched).toContain(
        'function Y1i(j3O){let __acc_hide_footer=ot((se)=>se.settings.statusLine?.hideBuiltinFooter||se.settings.statusLine?.disabledFooter?.includes("footer"))',
      )
      expect(patched).not.toContain(
        'function TCi(gwP){let __acc_hide_footer=Ye((se)=>se.settings.statusLine?.hideBuiltinFooter',
      )
      expect(patched).toContain("return __acc_hide_footer?null:MRv")
      expect(patched).toContain(
        'hideBuiltinFooter:E.boolean().optional().describe("Compatibility alias for hiding all built-in footer items."),disabledFooter:E.array(E.enum(["footer","permission_mode","mode","effort_notification","rate_limit_warning","clipboard_image_hint","teammate_idle_spacer"])).optional()',
      )
      expect(patched).not.toContain(
        'hideBuiltinFooter:b.boolean().optional().describe("Compatibility alias for hiding all built-in footer items.")',
      )
      expect(patched).toContain("EP.useEffect(()=>{$()},[__cci,$]);")
      expect(patched).not.toContain("Xk.useEffect(()=>{q()},[__cci,q]);")
      expect(patched).toContain("effort_level:KP(g)?k5(g,p):null")
      expect(patched).not.toContain("effort_level:gO(g)?xq(g,p):null")
      expect(patched).toContain("let Z$l=!__acc_hide_mode&&!!Vce&&i0v;")
      expect(patched).not.toContain("let pwl=!__acc_hide_mode&&!!Hie&&cPT;")
      expect(patched).toContain("DG=!__acc_hide_mode&&Z$l&&Vce?")
      expect(patched).not.toContain("E5=!__acc_hide_mode&&pwl&&Hie?")
      for (const item of [
        "footer",
        "permission_mode",
        "mode",
        "effort_notification",
        "rate_limit_warning",
        "clipboard_image_hint",
      ]) {
        expect(patched).toContain('disabledFooter?.includes("' + item + '")')
      }
      return
    }
    if (isVersionAtLeast(TARGET_VERSION, "2.1.221")) {
      expect(patched).toContain(
        "globalThis.__acc_disabled_footer=H})():void 0,Ct={settings:lo(),tasks:{},transcripts:{},taskDecorations:{}",
      )
      expect(patched).not.toContain(
        "globalThis.__acc_disabled_footer=H})():void 0,mt={settings:eo(),tasks:{},transcripts:{},taskDecorations:{}",
      )
      expect(patched).toContain("getCommandLength:()=>y.current?.command?.length??0")
      expect(patched).toContain("command_length:F.command?.length??0,padding:F.padding")
      expect(patched).not.toContain("command_length:q.command?.length??0,padding:q.padding")
      expect(patched).toContain("globalThis.__acc_clipboard_image_available=c")
      expect(patched).toContain("globalThis.__acc_rate_limit_warning=VJT")
      expect(patched).not.toContain("globalThis.__acc_rate_limit_warning=nrT")
      expect(patched).toContain("__cci=Ye((X)=>X.clipboardImageAvailable??!1)")
      expect(patched).not.toContain("__cci=Ve((X)=>X.clipboardImageAvailable??!1)")
      expect(patched).toContain(
        'function TCi(gwP){let __acc_hide_footer=Ye((se)=>se.settings.statusLine?.hideBuiltinFooter||se.settings.statusLine?.disabledFooter?.includes("footer"))',
      )
      expect(patched).not.toContain(
        'function qci(xpI){let __acc_hide_footer=Ve((se)=>se.settings.statusLine?.hideBuiltinFooter',
      )
      expect(patched).toContain("return __acc_hide_footer?null:zIT")
      expect(patched).toContain(
        'hideBuiltinFooter:E.boolean().optional().describe("Compatibility alias for hiding all built-in footer items."),disabledFooter:E.array(E.enum(["footer","permission_mode","mode","effort_notification","rate_limit_warning","clipboard_image_hint","teammate_idle_spacer"])).optional()',
      )
      expect(patched).not.toContain(
        'hideBuiltinFooter:b.boolean().optional().describe("Compatibility alias for hiding all built-in footer items.")',
      )
      expect(patched).toContain("Xk.useEffect(()=>{q()},[__cci,q]);")
      expect(patched).not.toContain("RR.useEffect(()=>{P()},[__cci,P]);")
      expect(patched).toContain("effort_level:gO(g)?xq(g,p):null")
      expect(patched).not.toContain("effort_level:FI(_)?y9(_,p):null")
      expect(patched).toContain("let pwl=!__acc_hide_mode&&!!Hie&&cPT;")
      expect(patched).not.toContain("let etl=!__acc_hide_mode&&!!dne&&qMS;")
      expect(patched).toContain("E5=!__acc_hide_mode&&pwl&&Hie?")
      expect(patched).not.toContain("Jjt=!__acc_hide_mode&&dne&&qMS?")
      for (const item of [
        "footer",
        "permission_mode",
        "mode",
        "effort_notification",
        "rate_limit_warning",
        "clipboard_image_hint",
      ]) {
        expect(patched).toContain('disabledFooter?.includes("' + item + '")')
      }
      return
    }
    if (isVersionAtLeast(TARGET_VERSION, "2.1.220")) {
      expect(patched).toContain(
        "globalThis.__acc_disabled_footer=H})():void 0,mt={settings:eo(),tasks:{},transcripts:{},taskDecorations:{}",
      )
      expect(patched).not.toContain(
        "globalThis.__acc_disabled_footer=H})():void 0,ht={settings:oo(),tasks:{},transcripts:{},taskDecorations:{}",
      )
      expect(patched).toContain("getCommandLength:()=>y.current?.command?.length??0")
      expect(patched).toContain("command_length:q.command?.length??0,padding:q.padding")
      expect(patched).not.toContain("command_length:j.command?.length??0,padding:j.padding")
      expect(patched).toContain("globalThis.__acc_clipboard_image_available=c")
      expect(patched).toContain("globalThis.__acc_rate_limit_warning=nrT")
      expect(patched).not.toContain("globalThis.__acc_rate_limit_warning=zVT")
      expect(patched).toContain("__cci=Ve((X)=>X.clipboardImageAvailable??!1)")
      expect(patched).not.toContain("__cci=ze((X)=>X.clipboardImageAvailable??!1)")
      expect(patched).toContain(
        'function qci(xpI){let __acc_hide_footer=Ve((se)=>se.settings.statusLine?.hideBuiltinFooter||se.settings.statusLine?.disabledFooter?.includes("footer"))',
      )
      expect(patched).not.toContain(
        'function jsi(pQx){let __acc_hide_footer=ze((se)=>se.settings.statusLine?.hideBuiltinFooter',
      )
      expect(patched).toContain("return __acc_hide_footer?null:CMS")
      expect(patched).toContain(
        'hideBuiltinFooter:E.boolean().optional().describe("Compatibility alias for hiding all built-in footer items."),disabledFooter:E.array(E.enum(["footer","permission_mode","mode","effort_notification","rate_limit_warning","clipboard_image_hint","teammate_idle_spacer"])).optional()',
      )
      expect(patched).not.toContain(
        'hideBuiltinFooter:b.boolean().optional().describe("Compatibility alias for hiding all built-in footer items.")',
      )
      expect(patched).toContain("RR.useEffect(()=>{P()},[__cci,P]);")
      expect(patched).not.toContain("C0.useEffect(()=>{q()},[__cci,q]);")
      expect(patched).toContain("effort_level:FI(_)?y9(_,p):null")
      expect(patched).not.toContain("effort_level:BI(_)?r9(_,p):null")
      expect(patched).toContain("let etl=!__acc_hide_mode&&!!dne&&qMS;")
      expect(patched).toContain("Jjt=!__acc_hide_mode&&dne&&qMS?")
      for (const item of [
        "footer",
        "permission_mode",
        "mode",
        "effort_notification",
        "rate_limit_warning",
        "clipboard_image_hint",
      ]) {
        expect(patched).toContain('disabledFooter?.includes("' + item + '")')
      }
      return
    }
    if (isVersionAtLeast(TARGET_VERSION, "2.1.218")) {
      expect(patched).toContain(
        "globalThis.__acc_disabled_footer=H})():void 0,ht={settings:oo(),tasks:{},transcripts:{},taskDecorations:{}",
      )
      expect(patched).not.toContain(
        "globalThis.__acc_disabled_footer=H})():void 0,Rt={settings:Qn(),tasks:{},transcripts:{},taskDecorations:{}",
      )
      expect(patched).toContain("getCommandLength:()=>y.current?.command?.length??0")
      expect(patched).toContain("command_length:j.command?.length??0,padding:j.padding")
      expect(patched).toContain("globalThis.__acc_clipboard_image_available=c")
      expect(patched).toContain("globalThis.__acc_rate_limit_warning=zVT")
      expect(patched).toContain("__cci=ze((X)=>X.clipboardImageAvailable??!1)")
      expect(patched).toContain(
        'function jsi(pQx){let __acc_hide_footer=ze((se)=>se.settings.statusLine?.hideBuiltinFooter||se.settings.statusLine?.disabledFooter?.includes("footer"))',
      )
      expect(patched).toContain("return __acc_hide_footer?null:bRT")
      expect(patched).toContain(
        'hideBuiltinFooter:b.boolean().optional().describe("Compatibility alias for hiding all built-in footer items."),disabledFooter:b.array(b.enum(["footer","permission_mode","mode","effort_notification","rate_limit_warning","clipboard_image_hint","teammate_idle_spacer"])).optional()',
      )
      expect(patched).toContain("C0.useEffect(()=>{q()},[__cci,q]);")
      expect(patched).toContain("effort_level:BI(_)?r9(_,p):null")
      expect(patched).toContain("let IJa=!__acc_hide_mode&&!!Lre&&MRT;")
      expect(patched).toContain('else w0=!__acc_hide_mode&&wqt&&!_He?"shortcuts":"none";')
      for (const item of [
        "footer",
        "permission_mode",
        "mode",
        "effort_notification",
        "rate_limit_warning",
        "clipboard_image_hint",
      ]) {
        expect(patched).toContain('disabledFooter?.includes("' + item + '")')
      }
      return
    }
    if (isVersionAtLeast(TARGET_VERSION, "2.1.217")) {
      expect(patched).toContain(
        "globalThis.__acc_disabled_footer=H})():void 0,Rt={settings:Qn(),tasks:{},transcripts:{},taskDecorations:{}",
      )
      expect(patched).not.toContain(
        "globalThis.__acc_disabled_footer=H})():void 0,Ct={settings:zn(),tasks:{},transcripts:{},taskDecorations:{}",
      )
      expect(patched).toContain("getCommandLength:()=>y.current?.command?.length??0")
      expect(patched).toContain("command_length:q.command?.length??0,padding:q.padding")
      expect(patched).toContain("globalThis.__acc_clipboard_image_available=c")
      expect(patched).toContain("globalThis.__acc_rate_limit_warning=vOS")
      expect(patched).toContain("__cci=We((X)=>X.clipboardImageAvailable??!1)")
      expect(patched).toContain(
        'function Cei(Qkk){let __acc_hide_footer=We((se)=>se.settings.statusLine?.hideBuiltinFooter||se.settings.statusLine?.disabledFooter?.includes("footer"))',
      )
      expect(patched).toContain("return __acc_hide_footer?null:YiS")
      expect(patched).toContain(
        'hideBuiltinFooter:v.boolean().optional().describe("Compatibility alias for hiding all built-in footer items."),disabledFooter:v.array(v.enum(["footer","permission_mode","mode","effort_notification","rate_limit_warning","clipboard_image_hint","teammate_idle_spacer"])).optional()',
      )
      expect(patched).toContain("ZR.useEffect(()=>{O()},[__cci,O]);")
      expect(patched).toContain("effort_level:iI(_)?y4(_,p):null")
      expect(patched).toContain("let CGa=!__acc_hide_mode&&!!Tte&&psS;")
      expect(patched).toContain("U9t=!__acc_hide_mode&&Tte&&psS?")
      for (const item of [
        "footer",
        "permission_mode",
        "mode",
        "effort_notification",
        "rate_limit_warning",
        "clipboard_image_hint",
      ]) {
        expect(patched).toContain('disabledFooter?.includes("' + item + '")')
      }
      return
    }
    if (isVersionAtLeast(TARGET_VERSION, "2.1.216")) {
      expect(patched).toContain(
        "globalThis.__acc_disabled_footer=H})():void 0,Ct={settings:zn(),tasks:{},transcripts:{},taskDecorations:{}",
      )
      expect(patched).not.toContain(
        "globalThis.__acc_disabled_footer=H})():void 0,Et={settings:Vn(),tasks:{},transcripts:{},taskDecorations:{}",
      )
      expect(patched).toContain("getCommandLength:()=>y.current?.command?.length??0")
      expect(patched).toContain("command_length:U.command?.length??0,padding:U.padding")
      expect(patched).toContain("globalThis.__acc_clipboard_image_available=c")
      expect(patched).toContain("globalThis.__acc_rate_limit_warning=tRS")
      expect(patched).toContain("__cci=We((X)=>X.clipboardImageAvailable??!1)")
      expect(patched).toContain(
        'function bQo(wTk){let __acc_hide_footer=We((se)=>se.settings.statusLine?.hideBuiltinFooter||se.settings.statusLine?.disabledFooter?.includes("footer"))',
      )
      expect(patched).toContain("return __acc_hide_footer?null:rZb}")
      expect(patched).toContain(
        'hideBuiltinFooter:T.boolean().optional().describe("Compatibility alias for hiding all built-in footer items."),disabledFooter:T.array(T.enum(["footer","permission_mode","mode","effort_notification","rate_limit_warning","clipboard_image_hint","teammate_idle_spacer"])).optional()',
      )
      expect(patched).toContain("$R.useEffect(()=>{q()},[__cci,q]);")
      expect(patched).toContain("effort_level:zk(_)?p4(_,p):null")
      expect(patched).toContain("let Dqa=!__acc_hide_mode&&!!ete&&_Zb;")
      expect(patched).toContain("s9t=!__acc_hide_mode&&ete&&_Zb?")
      for (const item of [
        "footer",
        "permission_mode",
        "mode",
        "effort_notification",
        "rate_limit_warning",
        "clipboard_image_hint",
      ]) {
        expect(patched).toContain('disabledFooter?.includes("' + item + '")')
      }
      return
    }
    if (isVersionAtLeast(TARGET_VERSION, "2.1.215")) {
      expect(patched).toContain(
        "globalThis.__acc_disabled_footer=H})():void 0,Et={settings:Vn(),tasks:{},transcripts:{},taskDecorations:{}",
      )
      expect(patched).not.toContain(
        "globalThis.__acc_disabled_footer=H})():void 0,Av={settings:Kn(),tasks:{},transcripts:{},taskDecorations:{}",
      )
      expect(patched).toContain("getCommandLength:()=>y.current?.command?.length??0")
      expect(patched).toContain("globalThis.__acc_clipboard_image_available=")
      expect(patched).toContain("globalThis.__acc_rate_limit_warning=yfS")
      expect(patched).toContain("__cci=Ve((X)=>X.clipboardImageAvailable??!1)")
      expect(patched).not.toContain("__cci=je((X)=>X.clipboardImageAvailable??!1)")
      expect(patched).toContain("if(__acc_hide_footer)vBa=null")
      expect(patched).not.toContain("if(__acc_hide_footer)F1a=null")
      expect(patched).toContain(
        'hideBuiltinFooter:S.boolean().optional().describe("Compatibility alias for hiding all built-in footer items."),disabledFooter:S.array(S.enum(["footer","permission_mode","mode","effort_notification","rate_limit_warning","clipboard_image_hint","teammate_idle_spacer"])).optional()',
      )
      expect(patched).not.toContain(
        'hideBuiltinFooter:v.boolean().optional().describe("Compatibility alias for hiding all built-in footer items.")',
      )
      for (const item of [
        "footer",
        "permission_mode",
        "mode",
        "effort_notification",
        "rate_limit_warning",
        "clipboard_image_hint",
      ]) {
        expect(patched).toContain('disabledFooter?.includes("' + item + '")')
      }
      return
    }
    if (isVersionAtLeast(TARGET_VERSION, "2.1.212")) {
      expect(patched).toContain(
        "globalThis.__acc_disabled_footer=H})():void 0,Av={settings:Kn(),tasks:{},transcripts:{},taskDecorations:{}",
      )
      expect(patched).toContain("getCommandLength:()=>y.current?.command?.length??0")
      expect(patched).toContain("globalThis.__acc_clipboard_image_available=")
      expect(patched).toContain("globalThis.__acc_rate_limit_warning=")
      expect(patched).toContain("__cci=Ve((X)=>X.clipboardImageAvailable??!1)")
      expect(patched).not.toContain("__cci=je((X)=>X.clipboardImageAvailable??!1)")
      for (const item of [
        "footer",
        "permission_mode",
        "mode",
        "effort_notification",
        "rate_limit_warning",
        "clipboard_image_hint",
      ]) {
        expect(patched).toContain('disabledFooter?.includes("' + item + '")')
      }
      return
    }
    if (isVersionAtLeast(TARGET_VERSION, "2.1.210")) {
      expect(patched).toContain(
        "globalThis.__acc_disabled_footer=H})():void 0,td={settings:Vn(),tasks:{},transcripts:{},taskDecorations:{}",
      )
      expect(patched).toContain("getCommandLength:()=>_.current?.command?.length??0")
      expect(patched).toContain("globalThis.__acc_clipboard_image_available=")
      expect(patched).toContain("globalThis.__acc_rate_limit_warning=")
      for (const item of [
        "footer",
        "permission_mode",
        "mode",
        "effort_notification",
        "rate_limit_warning",
        "clipboard_image_hint",
      ]) {
        expect(patched).toContain('disabledFooter?.includes("' + item + '")')
      }
      return
    }
    if (isVersionAtLeast(TARGET_VERSION, "2.1.208")) {
      expect(patched).toContain("globalThis.__acc_disabled_footer=H})():void 0,wR={settings:Kn()")
    } else if (isVersionAtLeast(TARGET_VERSION, "2.1.207")) {
      expect(patched).toContain("globalThis.__acc_disabled_footer=H})():void 0,Om={settings:Wn()")
    } else if (isVersionAtLeast(TARGET_VERSION, "2.1.206")) {
      expect(patched).toContain("globalThis.__acc_disabled_footer=H})():void 0,oS={settings:$n()")
    } else if (isVersionAtLeast(TARGET_VERSION, "2.1.205")) {
      expect(patched).toContain("globalThis.__acc_disabled_footer=H})():void 0,WS={settings:Bn()")
    } else if (isVersionAtLeast(TARGET_VERSION, "2.1.199")) {
      expect(patched).toContain("globalThis.__acc_disabled_footer=H}let Ny=")
    } else if (isVersionAtLeast(TARGET_VERSION, "2.1.197")) {
      expect(patched).toContain("globalThis.__acc_disabled_footer=H}let Z_={settings:Dr()")
    } else if (isVersionAtLeast(TARGET_VERSION, "2.1.186")) {
      expect(patched).toContain("globalThis.__acc_disabled_footer=H}let Ed={settings:Nr()")
    } else {
      expect(patched).toContain("globalThis.__acc_disabled_footer=H}let Od={settings:Kr()")
    }
    if (isVersionAtLeast(TARGET_VERSION, "2.1.208")) {
      expect(patched).toContain(
        'hideBuiltinFooter:v.boolean().optional().describe("Compatibility alias for hiding all built-in footer items."),disabledFooter:v.array(v.enum(["footer","permission_mode","mode","effort_notification","rate_limit_warning","clipboard_image_hint","teammate_idle_spacer"])).optional()',
      )
      expect(patched).not.toContain(
        'hideBuiltinFooter:E.boolean().optional().describe("Compatibility alias for hiding all built-in footer items.")',
      )
    } else if (isVersionAtLeast(TARGET_VERSION, "2.1.205") && isVersionBefore(TARGET_VERSION, "2.1.206")) {
      expect(patched).toContain(
        'hideBuiltinFooter:S.boolean().optional().describe("Compatibility alias for hiding all built-in footer items."),disabledFooter:S.array(S.enum(["footer","permission_mode","mode","effort_notification","rate_limit_warning","clipboard_image_hint","teammate_idle_spacer"])).optional()',
      )
      expect(patched).not.toContain(
        'hideBuiltinFooter:E.boolean().optional().describe("Compatibility alias for hiding all built-in footer items."),disabledFooter:E.array(E.enum(["footer","permission_mode","mode","effort_notification","rate_limit_warning","clipboard_image_hint","teammate_idle_spacer"])).optional()',
      )
    } else if (isVersionAtLeast(TARGET_VERSION, "2.1.199")) {
      expect(patched).toContain(
        'hideBuiltinFooter:E.boolean().optional().describe("Compatibility alias for hiding all built-in footer items."),disabledFooter:E.array(E.enum(["footer","permission_mode","mode","effort_notification","rate_limit_warning","clipboard_image_hint","teammate_idle_spacer"]))',
      )
      expect(patched).not.toContain(
        'hideBuiltinFooter:A.boolean().optional().describe("Compatibility alias for hiding all built-in footer items."),disabledFooter:A.array(A.enum(["footer","permission_mode","mode","effort_notification","rate_limit_warning","clipboard_image_hint","teammate_idle_spacer"])).optional()',
      )
    } else if (isVersionAtLeast(TARGET_VERSION, "2.1.186")) {
      expect(patched).toContain(
        'hideBuiltinFooter:A.boolean().optional().describe("Compatibility alias for hiding all built-in footer items."),disabledFooter:A.array(A.enum(["footer","permission_mode","mode","effort_notification","rate_limit_warning","clipboard_image_hint","teammate_idle_spacer"])).optional()',
      )
      expect(patched).not.toContain(
        'hideBuiltinFooter:E.boolean().optional().describe("Compatibility alias for hiding all built-in footer items.")',
      )
    } else {
      expect(patched).toContain(
        'hideBuiltinFooter:E.boolean().optional().describe("Compatibility alias for hiding all built-in footer items."),disabledFooter:E.array(E.enum(["footer","permission_mode","mode","effort_notification","rate_limit_warning","clipboard_image_hint","teammate_idle_spacer"])).optional()',
      )
      expect(patched).not.toContain(
        'hideBuiltinFooter:A.boolean().optional().describe("Compatibility alias for hiding all built-in footer items.")',
      )
    }
    if (isVersionAtLeast(TARGET_VERSION, "2.1.208")) {
      expect(patched).toContain("function rob({permissionMode:e,")
      expect(patched).toContain(
        "permission_mode:e,clipboard_image:{available:globalThis.__acc_clipboard_image_available===!0",
      )
      expect(patched).toContain("getCommandLength:()=>_.current?.command?.length??0")
      expect(patched).not.toContain("getCommandLength:()=>_.current?.command.length")
      expect(patched).toContain("globalThis.__acc_clipboard_image_available=c")
      expect(patched).toContain("globalThis.__acc_rate_limit_warning=AFb")
      expect(patched).toContain("__cci=je((X)=>X.clipboardImageAvailable??!1)")
      expect(patched).not.toContain("__cci=je((c)=>c.clipboardImageAvailable??!1)")
      expect(patched).toContain("bR.useEffect(()=>{q()},[__cci,q]);")
      expect(patched).toContain('je((I_)=>I_.settings.statusLine?.disabledFooter?.includes("effort_notification"))')
      expect(patched).toContain(
        'je((L)=>L.settings.statusLine?.hideBuiltinFooter||L.settings.statusLine?.disabledFooter?.includes("rate_limit_warning"))',
      )
      expect(patched).toContain(
        '__acc_hide_footer=je((se)=>se.settings.statusLine?.hideBuiltinFooter||se.settings.statusLine?.disabledFooter?.includes("footer"))',
      )
      const footerHookIndex = patched.indexOf("let __acc_hide_footer=je(")
      const exitHintIndex = patched.indexOf("w3o.show){")
      const pasteStateIndex = patched.indexOf("if(dlx){")
      const expandPasteIndex = patched.indexOf("if(plx&&!O_r){")
      expect(footerHookIndex).toBeGreaterThanOrEqual(0)
      expect(exitHintIndex).toBeGreaterThan(footerHookIndex)
      expect(pasteStateIndex).toBeGreaterThan(footerHookIndex)
      expect(expandPasteIndex).toBeGreaterThan(footerHookIndex)
      expect(patched).toContain("if(__acc_hide_footer)vAa=null")
      expect(patched).not.toContain("if(__acc_hide_footer)OSa=null")
      expect(patched).toContain(
        '__acc_hide_mode=je((FH)=>FH.settings.statusLine?.hideBuiltinFooter||FH.settings.statusLine?.disabledFooter?.includes("permission_mode")||FH.settings.statusLine?.disabledFooter?.includes("mode"))',
      )
      expect(patched).toContain("nde=!__acc_hide_mode&&HAa&&SQ?")
      expect(patched).toContain("_2t=!__acc_hide_mode&&SQ&&afb?")
    } else if (isVersionAtLeast(TARGET_VERSION, "2.1.207")) {
      expect(patched).toContain("globalThis.__acc_clipboard_image_available=c")
      expect(patched).toContain("globalThis.__acc_rate_limit_warning=vkb")
      expect(patched).toContain("__cci=je((c)=>c.clipboardImageAvailable??!1)")
      expect(patched).not.toContain("__cci=Ge((c)=>c.clipboardImageAvailable??!1)")
      expect(patched).toContain("z0.useEffect(()=>{D()},[__cci,D]);")
      expect(patched).toContain('je((I_)=>I_.settings.statusLine?.disabledFooter?.includes("effort_notification"))')
      expect(patched).toContain(
        'je((L)=>L.settings.statusLine?.hideBuiltinFooter||L.settings.statusLine?.disabledFooter?.includes("rate_limit_warning"))',
      )
      expect(patched).toContain(
        '__acc_hide_footer=je((se)=>se.settings.statusLine?.hideBuiltinFooter||se.settings.statusLine?.disabledFooter?.includes("footer"))',
      )
      const footerHookIndex = patched.indexOf("let __acc_hide_footer=je(")
      const exitHintIndex = patched.indexOf("L$o.show){")
      const pasteStateIndex = patched.indexOf("if(D7R){")
      const expandPasteIndex = patched.indexOf("if(P7R&&!Ngr){")
      expect(footerHookIndex).toBeGreaterThanOrEqual(0)
      expect(exitHintIndex).toBeGreaterThan(footerHookIndex)
      expect(pasteStateIndex).toBeGreaterThan(footerHookIndex)
      expect(expandPasteIndex).toBeGreaterThan(footerHookIndex)
      expect(patched).toContain("if(__acc_hide_footer)OSa=null")
      expect(patched).not.toContain("if(__acc_hide_footer)T_a=null")
      expect(patched).toContain(
        '__acc_hide_mode=je((FH)=>FH.settings.statusLine?.hideBuiltinFooter||FH.settings.statusLine?.disabledFooter?.includes("permission_mode")||FH.settings.statusLine?.disabledFooter?.includes("mode"))',
      )
      expect(patched).toContain("hue=!__acc_hide_mode&&BSa&&MX?")
      expect(patched).toContain("sNt=!__acc_hide_mode&&MX&&Inb?")
    } else if (isVersionAtLeast(TARGET_VERSION, "2.1.206")) {
      expect(patched).toContain("globalThis.__acc_clipboard_image_available=c")
      expect(patched).toContain("globalThis.__acc_rate_limit_warning=yvb")
      expect(patched).toContain("__cci=Ge((c)=>c.clipboardImageAvailable??!1)")
      expect(patched).not.toContain("__cci=Ve((c)=>c.clipboardImageAvailable??!1)")
      expect(patched).toContain("V0.useEffect(()=>{q()},[__cci,q]);")
      expect(patched).toContain('Ge((I_)=>I_.settings.statusLine?.disabledFooter?.includes("effort_notification"))')
      expect(patched).toContain(
        'Ge((L)=>L.settings.statusLine?.hideBuiltinFooter||L.settings.statusLine?.disabledFooter?.includes("rate_limit_warning"))',
      )
      expect(patched).toContain("globalThis.__acc_rate_limit_warning=yvb")
      expect(patched).toContain(
        '__acc_hide_footer=Ge((se)=>se.settings.statusLine?.hideBuiltinFooter||se.settings.statusLine?.disabledFooter?.includes("footer"))',
      )
      const footerHookIndex = patched.indexOf("let __acc_hide_footer=Ge(")
      const exitHintIndex = patched.indexOf("h2o.show){")
      const pasteStateIndex = patched.indexOf("if(H9R){")
      const expandPasteIndex = patched.indexOf("if(D9R&&!ahr){")
      expect(footerHookIndex).toBeGreaterThanOrEqual(0)
      expect(exitHintIndex).toBeGreaterThan(footerHookIndex)
      expect(pasteStateIndex).toBeGreaterThan(footerHookIndex)
      expect(expandPasteIndex).toBeGreaterThan(footerHookIndex)
      expect(patched).not.toContain(
        'let __acc_hide_footer=Ge((se)=>se.settings.statusLine?.hideBuiltinFooter||se.settings.statusLine?.disabledFooter?.includes("footer"))||globalThis.__acc_disabled_footer?.includes("footer");const Q3p=',
      )
      expect(patched).toContain("if(__acc_hide_footer)T_a=null")
      expect(patched).toContain(
        '__acc_hide_mode=Ge((FH)=>FH.settings.statusLine?.hideBuiltinFooter||FH.settings.statusLine?.disabledFooter?.includes("permission_mode")||FH.settings.statusLine?.disabledFooter?.includes("mode"))',
      )
      expect(patched).toContain("iue=!__acc_hide_mode&&A_a&&_X?")
      expect(patched).toContain("pMt=!__acc_hide_mode&&_X&&aX_?")
    } else if (isVersionAtLeast(TARGET_VERSION, "2.1.205")) {
      expect(patched).toContain("globalThis.__acc_clipboard_image_available=c")
      expect(patched).toContain("globalThis.__acc_rate_limit_warning=fmb")
      expect(patched).toContain("__cci=Ve((c)=>c.clipboardImageAvailable??!1)")
      expect(patched).not.toContain("__cci=Tt((c)=>c.clipboardImageAvailable??!1)")
      expect(patched).toContain('Ve((I_)=>I_.settings.statusLine?.disabledFooter?.includes("effort_notification"))')
      expect(patched).toContain(
        'Ve((L)=>L.settings.statusLine?.hideBuiltinFooter||L.settings.statusLine?.disabledFooter?.includes("rate_limit_warning"))',
      )
      expect(patched).toContain("globalThis.__acc_rate_limit_warning=fmb")
      expect(patched).toContain(
        '__acc_hide_footer=Ve((se)=>se.settings.statusLine?.hideBuiltinFooter||se.settings.statusLine?.disabledFooter?.includes("footer"))',
      )
      expect(patched).toContain("if(__acc_hide_footer)sha=null")
      expect(patched).toContain(
        '__acc_hide_mode=Ve((FH)=>FH.settings.statusLine?.hideBuiltinFooter||FH.settings.statusLine?.disabledFooter?.includes("permission_mode")||FH.settings.statusLine?.disabledFooter?.includes("mode"))',
      )
    } else if (isVersionAtLeast(TARGET_VERSION, "2.1.199")) {
      expect(patched).toContain("globalThis.__acc_clipboard_image_available=c")
      expect(patched).toContain("globalThis.__acc_rate_limit_warning=i")
      expect(patched).toContain("__cci=Tt((c)=>c.clipboardImageAvailable??!1)")
      expect(patched).not.toContain("__cci=Et((c)=>c.clipboardImageAvailable??!1)")
      expect(patched).toContain("WE.useEffect(()=>{N()},[__cci,N]);")
      expect(patched).not.toContain("wE.useEffect(()=>{M()},[__cci,M]);")
      expect(patched).toContain('Tt((I_)=>I_.settings.statusLine?.disabledFooter?.includes("effort_notification"))')
      expect(patched).toContain('L.settings.statusLine?.disabledFooter?.includes("rate_limit_warning")')
      expect(patched).toContain(
        '__acc_hide_footer=Tt((se)=>se.settings.statusLine?.hideBuiltinFooter||se.settings.statusLine?.disabledFooter?.includes("footer"))||globalThis.__acc_disabled_footer?.includes("footer")',
      )
      expect(patched).toContain("if(__acc_hide_footer)fe=null")
      expect(patched).toContain(
        '__acc_hide_mode=Tt((FH)=>FH.settings.statusLine?.hideBuiltinFooter||FH.settings.statusLine?.disabledFooter?.includes("permission_mode")||FH.settings.statusLine?.disabledFooter?.includes("mode"))',
      )
      expect(patched).toContain("let $t=!__acc_hide_mode&&Rt&&Q?")
      expect(patched).toContain("let ce=!__acc_hide_mode&&Q&&Z&&fe?")
    } else if (isVersionAtLeast(TARGET_VERSION, "2.1.197")) {
      expect(patched).toContain("__cci=Et((c)=>c.clipboardImageAvailable??!1)")
      expect(patched).not.toContain("__cci=_t((c)=>c.clipboardImageAvailable??!1)")
      expect(patched).toContain("wE.useEffect(()=>{M()},[__cci,M]);")
      expect(patched).not.toContain("Cb.useEffect(()=>{M()},[__cci,M]);")
      expect(patched).toContain('Et((I_)=>I_.settings.statusLine?.disabledFooter?.includes("effort_notification"))')
      expect(patched).toContain('L.settings.statusLine?.disabledFooter?.includes("rate_limit_warning")')
      expect(patched).toContain(
        '__acc_hide_footer=globalThis.__acc_disabled_footer?.includes("footer")||re?.statusLine?.hideBuiltinFooter||re?.statusLine?.disabledFooter?.includes("footer")',
      )
      expect(patched).toContain("if(__acc_hide_footer)ot=null")
      expect(patched).toContain(
        '__acc_hide_mode=Et((FH)=>FH.settings.statusLine?.hideBuiltinFooter||FH.settings.statusLine?.disabledFooter?.includes("permission_mode")||FH.settings.statusLine?.disabledFooter?.includes("mode"))',
      )
      expect(patched).toContain("let Pt=!__acc_hide_mode&&Ye&&Y?")
      expect(patched).toContain("let Te=!__acc_hide_mode&&Y&&Z&&he?")
    } else if (isVersionAtLeast(TARGET_VERSION, "2.1.186")) {
      expect(patched).toContain("__cci=_t((c)=>c.clipboardImageAvailable??!1)")
      expect(patched).not.toContain("__cci=ft((c)=>c.clipboardImageAvailable??!1)")
      expect(patched).toContain("Cb.useEffect(()=>{M()},[__cci,M]);")
      expect(patched).not.toContain("Rb.useEffect(()=>{M()},[__cci,M]);")
      expect(patched).toContain('_t((I_)=>I_.settings.statusLine?.disabledFooter?.includes("effort_notification"))')
      expect(patched).toContain('L.settings.statusLine?.disabledFooter?.includes("rate_limit_warning")')
      expect(patched).toContain(
        '__acc_hide_footer=globalThis.__acc_disabled_footer?.includes("footer")||pe?.statusLine?.hideBuiltinFooter||pe?.statusLine?.disabledFooter?.includes("footer")',
      )
      expect(patched).toContain("if(__acc_hide_footer)Ze=null")
      expect(patched).toContain(
        '__acc_hide_mode=_t((FH)=>FH.settings.statusLine?.hideBuiltinFooter||FH.settings.statusLine?.disabledFooter?.includes("permission_mode")||FH.settings.statusLine?.disabledFooter?.includes("mode"))',
      )
      expect(patched).toContain("let en=!__acc_hide_mode&&bt&&Q?")
      expect(patched).toContain("let ye=!__acc_hide_mode&&Q&&ee&&ae?")
    } else {
      expect(patched).toContain("__cci=ft((c)=>c.clipboardImageAvailable??!1)")
      expect(patched).toContain("Rb.useEffect(()=>{M()},[__cci,M]);")
      expect(patched).toContain('ft((I_)=>I_.settings.statusLine?.disabledFooter?.includes("effort_notification"))')
      expect(patched).toContain('L?.statusLine?.disabledFooter?.includes("rate_limit_warning")')
      expect(patched).toContain(
        '__acc_hide_footer=ft((se)=>se.settings.statusLine?.hideBuiltinFooter||se.settings.statusLine?.disabledFooter?.includes("footer"))',
      )
      expect(patched).toContain("if(__acc_hide_footer)ce=null")
      expect(patched).toContain(
        '__acc_hide_mode=ft((FH)=>FH.settings.statusLine?.hideBuiltinFooter||FH.settings.statusLine?.disabledFooter?.includes("permission_mode")||FH.settings.statusLine?.disabledFooter?.includes("mode"))',
      )
      expect(patched).toContain("let pe=!__acc_hide_mode&&V&&Y&&me?")
    }
    expect(patched).not.toContain(
      'hideBuiltinFooter:k.boolean().optional().describe("Compatibility alias for hiding all built-in footer items.")',
    )
    return
  }

  expect(patched).toContain("--hide-builtin-footer")
  expect(patched).toContain(
    '["footer","permission_mode","mode","effort_notification","rate_limit_warning","clipboard_image_hint","teammate_idle_spacer"]',
  )
  if (isVersionBefore(TARGET_VERSION, "2.1.170")) {
    expect(patched).toContain("disabledFooter:_")
  } else {
    expect(patched).toContain("globalThis.__acc_disabled_footer=q")
  }
  expect(patched).toContain(
    '["footer","permission_mode","mode","effort_notification","rate_limit_warning","clipboard_image_hint","teammate_idle_spacer"])).optional().describe("Built-in footer items to hide when a custom status line is configured.")',
  )
  expect(patched).toContain('disabledFooter?.includes("effort_notification")')
  expect(patched).toContain('disabledFooter?.includes("rate_limit_warning")')
  expect(patched).toContain('disabledFooter?.includes("teammate_idle_spacer")')
  expect(patched).toContain("Image in clipboard")
  expect(patched).toContain("globalThis.__acc_clipboard_image_available=")
  expect(patched).toContain(
    'clipboard_image:{available:globalThis.__acc_clipboard_image_available===!0,paste_shortcut:"ctrl+v"}',
  )
  expect(patched).toContain("globalThis.__acc_rate_limit_warning=T")
  expect(patched).toContain("rate_limit_warning:{message:globalThis.__acc_rate_limit_warning}")

  if (isVersionAtLeast(TARGET_VERSION, "2.1.140") && isVersionBefore(TARGET_VERSION, "2.1.142")) {
    expect(patched).toContain("z.hideBuiltinFooter")
    expect(patched).toContain("let H=u8()")
    expect(patched).not.toContain("A.hideBuiltinFooter?(()=>{let H=m8()")
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.142") && isVersionBefore(TARGET_VERSION, "2.1.146")) {
    expect(patched).toContain("$.hideBuiltinFooter")
    expect(patched).toContain("let H=m8()")
    expect(patched).not.toContain("z.hideBuiltinFooter?(()=>{let H=u8()")
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.146") && isVersionBefore(TARGET_VERSION, "2.1.156")) {
    expect(patched).toContain("z.hideBuiltinFooter")
    expect(patched).toContain("let H=e8()")
    expect(patched).not.toContain("$.hideBuiltinFooter?(()=>{let H=m8()")
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.156") && isVersionBefore(TARGET_VERSION, "2.1.168")) {
    expect(patched).toContain("$.hideBuiltinFooter")
    expect(patched).toContain("let H=i8()")
    expect(patched).not.toContain("z.hideBuiltinFooter?(()=>{let H=e8()")
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.168") && isVersionBefore(TARGET_VERSION, "2.1.170")) {
    expect(patched).toContain("$.hideBuiltinFooter")
    expect(patched).toContain("let H=l8()")
    expect(patched).toContain("globalThis.__acc_disabled_footer=_")
    expect(patched).not.toContain("z.hideBuiltinFooter?(()=>{let H=e8()")
    expect(patched).toContain(
      '__acc_hide_footer=globalThis.__acc_disabled_footer?.includes("footer")||OH?.statusLine?.hideBuiltinFooter||OH?.statusLine?.disabledFooter?.includes("footer")',
    )
    expect(patched).toContain("if(__acc_hide_footer)pH=null")
    expect(patched).not.toContain("__acc_hide_footer=j_(")
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.170") && isVersionBefore(TARGET_VERSION, "2.1.172")) {
    expect(patched).toContain("globalThis.__acc_disabled_footer=q")
    expect(patched).toContain("if(z.hideBuiltinFooter){let H=z.hideBuiltinFooter===!0")
    expect(patched).toContain("globalThis.__acc_disabled_footer=H}let Oz={settings:Q8()")
    expect(patched).not.toContain("settings:z.hideBuiltinFooter")
    expect(patched).not.toContain("z.hideBuiltinFooter?(()=>{let H=l8()")
    expect(patched).not.toContain("$.hideBuiltinFooter?(()=>{let H=l8()")
    expect(patched).toContain(
      '__acc_hide_footer=globalThis.__acc_disabled_footer?.includes("footer")||OH?.statusLine?.hideBuiltinFooter||OH?.statusLine?.disabledFooter?.includes("footer")',
    )
    expect(patched).toContain("if(__acc_hide_footer)A_=null")
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.172") && isVersionBefore(TARGET_VERSION, "2.1.177")) {
    expect(patched).toContain("globalThis.__acc_disabled_footer=q")
    expect(patched).toContain("if(z.hideBuiltinFooter){let H=z.hideBuiltinFooter===!0")
    expect(patched).toContain("globalThis.__acc_disabled_footer=H}let I1={settings:U8()")
    expect(patched).not.toContain("settings:z.hideBuiltinFooter")
    expect(patched).not.toContain("z.hideBuiltinFooter?(()=>{let H=l8()")
    expect(patched).not.toContain("$.hideBuiltinFooter?(()=>{let H=l8()")
    expect(patched).toContain(
      '__acc_hide_footer=globalThis.__acc_disabled_footer?.includes("footer")||TH?.statusLine?.hideBuiltinFooter||TH?.statusLine?.disabledFooter?.includes("footer")',
    )
    expect(patched).toContain("if(__acc_hide_footer)Y_=null")
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.177")) {
    expect(patched).toContain("globalThis.__acc_disabled_footer=q")
    expect(patched).toContain("if(z.hideBuiltinFooter){let H=z.hideBuiltinFooter===!0")
    expect(patched).toContain("globalThis.__acc_disabled_footer=H}let uf={settings:n8()")
    expect(patched).not.toContain("settings:z.hideBuiltinFooter")
    expect(patched).not.toContain("z.hideBuiltinFooter?(()=>{let H=l8()")
    expect(patched).not.toContain("$.hideBuiltinFooter?(()=>{let H=l8()")
    expect(patched).toContain(
      '__acc_hide_footer=globalThis.__acc_disabled_footer?.includes("footer")||zH?.statusLine?.hideBuiltinFooter||zH?.statusLine?.disabledFooter?.includes("footer")',
    )
    expect(patched).toContain("if(__acc_hide_footer)z_=null")
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.156") && isVersionBefore(TARGET_VERSION, "2.1.170")) {
    expect(patched).toContain(
      'hideBuiltinFooter:h.boolean().optional().describe("Compatibility alias for hiding all built-in footer items."),disabledFooter:h.array(h.enum(["footer","permission_mode","mode","effort_notification","rate_limit_warning","clipboard_image_hint","teammate_idle_spacer"])).optional()',
    )
    expect(patched).not.toContain(
      'hideBuiltinFooter:y.boolean().optional().describe("Compatibility alias for hiding all built-in footer items."),disabledFooter:y.array(y.enum(["footer","permission_mode","mode","effort_notification","rate_limit_warning","clipboard_image_hint","teammate_idle_spacer"])).optional()',
    )
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.170")) {
    expect(patched).toContain(
      'hideBuiltinFooter:k.boolean().optional().describe("Compatibility alias for hiding all built-in footer items."),disabledFooter:k.array(k.enum(["footer","permission_mode","mode","effort_notification","rate_limit_warning","clipboard_image_hint","teammate_idle_spacer"])).optional()',
    )
    expect(patched).not.toContain(
      'hideBuiltinFooter:h.boolean().optional().describe("Compatibility alias for hiding all built-in footer items."),disabledFooter:h.array(h.enum(["footer","permission_mode","mode","effort_notification","rate_limit_warning","clipboard_image_hint","teammate_idle_spacer"])).optional()',
    )
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.143")) {
    expect(patched).toContain('disabledFooter?.includes("permission_mode")')
    expect(patched).toContain('disabledFooter?.includes("mode")')
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.143") && isVersionBefore(TARGET_VERSION, "2.1.146")) {
    expect(patched).toContain(
      'Y_((m)=>m.settings.statusLine?.hideBuiltinFooter)||Y_((m)=>m.settings.statusLine?.disabledFooter?.includes("rate_limit_warning"))',
    )
    expect(patched).not.toContain(
      'A_((m)=>m.settings.statusLine?.hideBuiltinFooter)||A_((m)=>m.settings.statusLine?.disabledFooter?.includes("rate_limit_warning"))',
    )
    expect(patched).toContain("OD.useEffect(()=>{m()},[__cci,m]);")
    expect(patched).not.toContain("KD.useEffect(()=>{p()},[__cci,p]);")
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.146") && isVersionBefore(TARGET_VERSION, "2.1.156")) {
    expect(patched).toContain(
      'f_((m)=>m.settings.statusLine?.hideBuiltinFooter)||f_((m)=>m.settings.statusLine?.disabledFooter?.includes("rate_limit_warning"))',
    )
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.156") && isVersionBefore(TARGET_VERSION, "2.1.168")) {
    expect(patched).toContain(
      'M_((m)=>m.settings.statusLine?.hideBuiltinFooter)||M_((m)=>m.settings.statusLine?.disabledFooter?.includes("rate_limit_warning"))',
    )
    expect(patched).toContain("__acc_hide_effort_all=M_((I_)=>I_.settings.statusLine?.hideBuiltinFooter)")
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.168") && isVersionBefore(TARGET_VERSION, "2.1.170")) {
    expect(patched).toContain(
      'j_((m)=>m.settings.statusLine?.hideBuiltinFooter)||j_((m)=>m.settings.statusLine?.disabledFooter?.includes("rate_limit_warning"))||globalThis.__acc_disabled_footer?.includes("rate_limit_warning")',
    )
    expect(patched).toContain("__acc_hide_effort_all=j_((I_)=>I_.settings.statusLine?.hideBuiltinFooter)")
    expect(patched).toContain(
      '__acc_hide_effort_item=j_((I_)=>I_.settings.statusLine?.disabledFooter?.includes("effort_notification"))||globalThis.__acc_disabled_footer?.includes("effort_notification")',
    )
    expect(patched).toContain(
      '__acc_disabled_footer?.includes("permission_mode")||globalThis.__acc_disabled_footer?.includes("mode")',
    )
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.170") && isVersionBefore(TARGET_VERSION, "2.1.172")) {
    expect(patched).toContain(
      'D_((m)=>m.settings.statusLine?.hideBuiltinFooter)||D_((m)=>m.settings.statusLine?.disabledFooter?.includes("rate_limit_warning"))||globalThis.__acc_disabled_footer?.includes("rate_limit_warning")',
    )
    expect(patched).toContain("__acc_hide_effort_all=D_((I_)=>I_.settings.statusLine?.hideBuiltinFooter)")
    expect(patched).toContain(
      '__acc_hide_effort_item=D_((I_)=>I_.settings.statusLine?.disabledFooter?.includes("effort_notification"))||globalThis.__acc_disabled_footer?.includes("effort_notification")',
    )
    expect(patched).toContain(
      '__acc_disabled_footer?.includes("permission_mode")||globalThis.__acc_disabled_footer?.includes("mode")',
    )
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.172") && isVersionBefore(TARGET_VERSION, "2.1.177")) {
    expect(patched).toContain('O?.statusLine?.disabledFooter?.includes("rate_limit_warning")')
    expect(patched).toContain("__acc_hide_effort_all=X_((I_)=>I_.settings.statusLine?.hideBuiltinFooter)")
    expect(patched).toContain(
      '__acc_hide_effort_item=X_((I_)=>I_.settings.statusLine?.disabledFooter?.includes("effort_notification"))||globalThis.__acc_disabled_footer?.includes("effort_notification")',
    )
    expect(patched).toContain(
      '__acc_disabled_footer?.includes("permission_mode")||globalThis.__acc_disabled_footer?.includes("mode")',
    )
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.177")) {
    expect(patched).toContain('L?.statusLine?.disabledFooter?.includes("rate_limit_warning")')
    expect(patched).toContain("__acc_hide_effort_all=J_((I_)=>I_.settings.statusLine?.hideBuiltinFooter)")
    expect(patched).toContain(
      '__acc_hide_effort_item=J_((I_)=>I_.settings.statusLine?.disabledFooter?.includes("effort_notification"))||globalThis.__acc_disabled_footer?.includes("effort_notification")',
    )
    expect(patched).toContain(
      '__acc_disabled_footer?.includes("permission_mode")||globalThis.__acc_disabled_footer?.includes("mode")',
    )
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.146") && isVersionBefore(TARGET_VERSION, "2.1.156")) {
    expect(patched).toContain("__cci=f_((c)=>c.clipboardImageAvailable??!1)")
    expect(patched).not.toContain("__cci=z_((c)=>c.clipboardImageAvailable??!1)")
    expect(patched).toContain("rJ.useEffect(()=>{m()},[__cci,m]);")
    expect(patched).not.toContain("OD.useEffect(()=>{m()},[__cci,m]);")
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.156") && isVersionBefore(TARGET_VERSION, "2.1.168")) {
    expect(patched).toContain("__cci=M_((c)=>c.clipboardImageAvailable??!1)")
    expect(patched).not.toContain("__cci=f_((c)=>c.clipboardImageAvailable??!1)")
    expect(patched).toContain("EM.useEffect(()=>{S()},[__cci,S]);")
    expect(patched).not.toContain("wD.useEffect(()=>{S()},[__cci,S]);")
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.168") && isVersionBefore(TARGET_VERSION, "2.1.170")) {
    expect(patched).toContain("__cci=j_((c)=>c.clipboardImageAvailable??!1)")
    expect(patched).not.toContain("__cci=f_((c)=>c.clipboardImageAvailable??!1)")
    expect(patched).toContain("YD.useEffect(()=>{m()},[__cci,m]);")
    expect(patched).not.toContain("wD.useEffect(()=>{S()},[__cci,S]);")
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.170") && isVersionBefore(TARGET_VERSION, "2.1.172")) {
    expect(patched).toContain("__cci=j_((c)=>c.clipboardImageAvailable??!1)")
    expect(patched).not.toContain("__cci=f_((c)=>c.clipboardImageAvailable??!1)")
    expect(patched).toContain("BJ.useEffect(()=>{b()},[__cci,b]);")
    expect(patched).not.toContain("YD.useEffect(()=>{m()},[__cci,m]);")
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.172") && isVersionBefore(TARGET_VERSION, "2.1.177")) {
    expect(patched).toContain("__cci=X_((c)=>c.clipboardImageAvailable??!1)")
    expect(patched).not.toContain("__cci=j_((c)=>c.clipboardImageAvailable??!1)")
    expect(patched).toContain("aJ.useEffect(()=>{b()},[__cci,b]);")
    expect(patched).not.toContain("BJ.useEffect(()=>{b()},[__cci,b]);")
  }

  if (isVersionAtLeast(TARGET_VERSION, "2.1.177")) {
    expect(patched).toContain("__cci=J_((c)=>c.clipboardImageAvailable??!1)")
    expect(patched).not.toContain("__cci=X_((c)=>c.clipboardImageAvailable??!1)")
    expect(patched).toContain("aJ.useEffect(()=>{b()},[__cci,b]);")
    expect(patched).not.toContain("BJ.useEffect(()=>{b()},[__cci,b]);")
  }
}, 300_000)
