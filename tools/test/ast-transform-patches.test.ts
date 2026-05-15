import { expect, test } from "bun:test"
import { applyAstTransformPatches, verifyAstTransformPatch, verifyAstTransformPatches } from "../lib/ast-transform-patches"

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

test("direct_string_literal matches only direct string arguments", () => {
  const result = applyAstTransformPatches(
    'const out=c("outer",c("inner"));const other=c("leaf")',
    [
      {
        name: "append to direct inner call",
        ast: { schema: 1, match: { node: "CallExpression", callee_property: "c", direct_string_literal: "inner" } },
        transform: { op: "append_call_arg", arg: "Z" },
      },
    ],
  )

  expect(result.source).toBe('const out=c("outer",c("inner",Z));const other=c("leaf")')
})

test("source matches the exact node source", () => {
  const result = applyAstTransformPatches('switch(t){case"outer":switch(u){case"inner":return;}}', [
    {
      name: "replace leaf case",
      ast: { schema: 1, match: { node: "SwitchCase", string_literal: "inner", source: 'case"inner":return;' } },
      transform: { op: "replace_node", value: 'case"inner":{return ok()}' },
    },
  ])

  expect(result.source).toBe('switch(t){case"outer":switch(u){case"inner":{return ok()}}}')
})

test("source_regex matches against the node source", () => {
  const result = applyAstTransformPatches("var outer=()=>{let C={target:1}};let C={target:2}", [
    {
      name: "replace top-level let",
      ast: { schema: 1, match: { node: "VariableDeclaration", source_regex: "^let C=\\{target:2\\}", string: "target" } },
      transform: { op: "replace_node", value: "let C={target:3}" },
    },
  ])

  expect(result.source).toBe("var outer=()=>{let C={target:1}};let C={target:3}")
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

test("applies an AST transform batch with one initial parse and one final parse", () => {
  let parses = 0
  const result = applyAstTransformPatches(
    "const a={verbose:q};const b={key:J}",
    [
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
    ],
    { onParse: () => parses++ },
  )

  expect(result.source).toBe("const a={verbose:!0};const b={key:J,verbose:!0}")
  expect(parses).toBe(2)
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

test("replace_function_body_with_first_var_initializer_return preserves minified initializer names", () => {
  const result = applyAstTransformPatches(
    'function SP_(H,_=H){let q=H.filter(hn);if(provider()==="ant")return q;let K=expand(_);return rewrite(q,K)}',
    [
      {
        name: "return filtered transcript directly",
        ast: {
          schema: 1,
          match: { node: "FunctionDeclaration", string_literal: "ant", string: ".filter(" },
        },
        transform: { op: "replace_function_body_with_first_var_initializer_return" },
      },
    ],
  )

  expect(result.source).toBe("function SP_(H,_=H){return H.filter(hn)}")
})

test("method_name matches class methods by key", () => {
  const result = applyAstTransformPatches(
    "class A{isEnabled(){if(flag())return!1;return!0}render(){if(flag())return!1;return!0}}",
    [
      {
        name: "force only the gate method",
        ast: { schema: 1, match: { node: "ClassMethod", method_name: "isEnabled", string: "return!1;return!0" } },
        transform: { op: "replace_function_body", body: "{return!0}" },
      },
    ],
  )

  expect(result.source).toBe("class A{isEnabled(){return!0}render(){if(flag())return!1;return!0}}")
})

test("body_statement_count matches functions by block size", () => {
  const result = applyAstTransformPatches(
    'function feature(){return flag("tengu_harbor",!1)}function startup(){setup();return flag("tengu_harbor")}',
    [
      {
        name: "force compact feature flag",
        ast: {
          schema: 1,
          match: { node: "FunctionDeclaration", string_literal: "tengu_harbor", body_statement_count: 1 },
        },
        transform: { op: "replace_function_body", body: "{return!0}" },
      },
    ],
  )

  expect(result.source).toBe('function feature(){return!0}function startup(){setup();return flag("tengu_harbor")}')
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

test("replace_with_consequent unwraps a conditional statement", () => {
  const result = applyAstTransformPatches("if(j)ZH.preserveToolUseResults=!0;next()", [
    {
      name: "preserve tool results unconditionally",
      ast: { schema: 1, match: { node: "IfStatement", string: "preserveToolUseResults=!0" } },
      transform: { op: "replace_with_consequent" },
    },
  ])

  expect(result.source).toBe("ZH.preserveToolUseResults=!0;next()")
})

test("prepend_function_body inserts code at the start of a function body", () => {
  const result = applyAstTransformPatches("function read(H){switch(H.type){case'text':return H.text}}", [
    {
      name: "add path suffix locals",
      ast: { schema: 1, match: { node: "FunctionDeclaration", function_name: "read" } },
      transform: { op: "prepend_function_body", code: "let P=arguments[2]?.input?.file_path,Z=P?` / ${P}`:\"\";" },
    },
  ])

  expect(result.source).toBe(
    "function read(H){let P=arguments[2]?.input?.file_path,Z=P?` / ${P}`:\"\";switch(H.type){case'text':return H.text}}",
  )
})

test("insert_after_node inserts a sibling statement after the matched node", () => {
  const result = applyAstTransformPatches('function load(P){let G=join(P,"CLAUDE.md");let W=join(P,".claude","CLAUDE.md")}', [
    {
      name: "load AGENTS.md",
      ast: { schema: 1, match: { node: "VariableDeclaration", string: 'join(P,"CLAUDE.md")' } },
      transform: { op: "insert_after_node", code: 'let Q=join(P,"AGENTS.md");' },
    },
  ])

  expect(result.source).toBe(
    'function load(P){let G=join(P,"CLAUDE.md");let Q=join(P,"AGENTS.md");let W=join(P,".claude","CLAUDE.md")}',
  )
})

test("replace_substring rewrites a unique text range inside the matched node", () => {
  const result = applyAstTransformPatches('function enabled(){if(flag())return!1;return!0}', [
    {
      name: "force enabled",
      ast: { schema: 1, match: { node: "FunctionDeclaration", function_name: "enabled" } },
      transform: { op: "replace_substring", find: "if(flag())return!1;", value: "" },
    },
  ])

  expect(result.source).toBe("function enabled(){return!0}")
})

test("replace_substring can apply to an intentional number of matched nodes", () => {
  const result = applyAstTransformPatches(
    "class A{isEnabled(){if(flag())return!1;return!0}}class B{isEnabled(){if(flag())return!1;return!0}}",
    [
      {
        name: "force enabled siblings",
        expectedMatches: 2,
        ast: { schema: 1, match: { node: "ClassMethod", string: "if(flag())return!1;return!0" } },
        transform: { op: "replace_function_body", body: "{return!0}" },
      },
    ],
  )

  expect(result.source).toBe("class A{isEnabled(){return!0}}class B{isEnabled(){return!0}}")
  expect(result.reports).toEqual([
    expect.objectContaining({
      name: "force enabled siblings",
      matches: 2,
    }),
  ])
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
  ).toThrow("expected 1 AST match(es) for ambiguous append, got 2")
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

test("verifies an AST transform batch with one initial parse and one final parse", () => {
  let parses = 0
  const reports = verifyAstTransformPatches(
    "const a={verbose:q};const b={key:J}",
    [
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
    ],
    { onParse: () => parses++ },
  )

  expect(reports).toEqual([
    expect.objectContaining({ ok: true, matches: 1 }),
    expect.objectContaining({ ok: true, matches: 1 }),
  ])
  expect(parses).toBe(2)
})
