import { expect, test } from "bun:test"
import { applyAstTransformPatches, verifyAstTransformPatch } from "../lib/ast-transform-patches"

test("append_call_arg appends one argument to a uniquely matched call", () => {
  const result = applyAstTransformPatches('const out=tK.createElement(V,null,"Read image (",q,")")', [
    {
      name: "append path suffix",
      ast: {
        schema: 1,
        match: { node: "CallExpression", callee_property: "createElement", string_literal: "Read image (" },
      },
      transform: { op: "append_call_arg", arg: "Z" },
    },
  ])

  expect(result.source).toBe('const out=tK.createElement(V,null,"Read image (",q,")",Z)')
  expect(result.reports).toEqual([
    expect.objectContaining({
      name: "append path suffix",
      op: "append_call_arg",
      matches: 1,
    }),
  ])
})

test("set_call_arg replaces an existing positional argument", () => {
  const result = applyAstTransformPatches("const out=L4.createElement(yr5,{key:J,item:w,verbose:q})", [
    {
      name: "force verbose",
      ast: {
        schema: 1,
        match: { node: "CallExpression", callee_property: "createElement", object_property: "verbose" },
      },
      transform: { op: "set_call_arg", index: 1, value: "{key:J,item:w,verbose:!0}" },
    },
  ])

  expect(result.source).toBe("const out=L4.createElement(yr5,{key:J,item:w,verbose:!0})")
})

test("set_object_property updates an existing property and appends a missing one", () => {
  const result = applyAstTransformPatches("const a={verbose:q};const b={key:J}", [
    {
      name: "update verbose",
      ast: { schema: 1, match: { node: "ObjectExpression", object_property: "verbose" } },
      transform: { op: "set_object_property", property: "verbose", value: "!0" },
    },
    {
      name: "add verbose",
      ast: { schema: 1, match: { node: "ObjectExpression", object_property: "key" } },
      transform: { op: "set_object_property", property: "verbose", value: "!0" },
    },
  ])

  expect(result.source).toBe("const a={verbose:!0};const b={key:J,verbose:!0}")
})

test("replace_function_body preserves the function signature", () => {
  const result = applyAstTransformPatches("function SP_(H,_=H){let q=H.filter(hn);return q}", [
    {
      name: "preserve history",
      ast: { schema: 1, match: { node: "FunctionDeclaration", function_name: "SP_" } },
      transform: { op: "replace_function_body", body: "{return H.filter(hn)}" },
    },
  ])

  expect(result.source).toBe("function SP_(H,_=H){return H.filter(hn)}")
})

test("wrap_expression substitutes the matched expression into a template", () => {
  const result = applyAstTransformPatches("const Hp=nH?void 0:Ws7(jH,qH)", [
    {
      name: "hide effort notification",
      ast: { schema: 1, match: { node: "ConditionalExpression", string: "Ws7(jH,qH)" } },
      transform: { op: "wrap_expression", template: "hidden?void 0:%%EXPR%%" },
    },
  ])

  expect(result.source).toBe("const Hp=hidden?void 0:nH?void 0:Ws7(jH,qH)")
})

test("replace_node replaces the exact matched node range", () => {
  const result = applyAstTransformPatches("switch(t){case\"thinking_delta\":return;case\"x\":return}", [
    {
      name: "stream thinking",
      ast: { schema: 1, match: { node: "SwitchCase", string_literal: "thinking_delta" } },
      transform: { op: "replace_node", value: 'case"thinking_delta":{return streamThinking()}' },
    },
  ])

  expect(result.source).toBe('switch(t){case"thinking_delta":{return streamThinking()}case"x":return}')
})

test("locator fails closed when the selector is ambiguous", () => {
  expect(() =>
    applyAstTransformPatches('a.createElement(V,null,"Read image (");b.createElement(V,null,"Read image (")', [
      {
        name: "ambiguous append",
        ast: {
          schema: 1,
          match: { node: "CallExpression", callee_property: "createElement", string_literal: "Read image (" },
        },
        transform: { op: "append_call_arg", arg: "Z" },
      },
    ]),
  ).toThrow("expected 1 AST match for ambiguous append, got 2")
})

test("verifyAstTransformPatch reports locator count and transform preconditions without applying edits", () => {
  const source = 'const out=tK.createElement(V,null,"Read image (",q,")")'
  const report = verifyAstTransformPatch(source, {
    name: "append path suffix",
    ast: {
      schema: 1,
      match: { node: "CallExpression", callee_property: "createElement", string_literal: "Read image (" },
    },
    transform: { op: "append_call_arg", arg: "Z" },
  })

  expect(report).toEqual({
    ok: true,
    matches: 1,
    message: "AST locator matches 1 node(s)",
    start: 10,
    end: source.length,
  })
})
