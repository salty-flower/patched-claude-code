/** Semantic anchors audited against upstream 2.1.301; use on final request text. */
export type MemoryPromptProfile = "full" | "lean"

export function missingMemoryPromptRules(
  text: string,
  options: { directory: string; profile?: MemoryPromptProfile },
): string[] {
  const rules: Array<[string, RegExp]> = [
    ["frontmatter name", /name:\s*(?:\{\{|<)short-kebab-case-slug/],
    ["frontmatter description", /description:\s*(?:\{\{|<)one-line summary/],
    ["frontmatter metadata type", /metadata:\s*\n\s+type:/],
    ["four memory types", /user[\s\S]*feedback[\s\S]*project[\s\S]*reference/],
    ["feedback/project rationale and application", /\*\*Why:\*\*[\s\S]*\*\*How to apply:\*\*/],
    ["related-memory links", /\[\[name\]\]/],
    ["duplicate prevention", /(?:duplicate|duplicate memories)/i],
    ["update existing memory", /(?:update (?:that|an? existing)|existing memory you can update)/i],
    ["delete incorrect memory", /(?:delete memor|wrong, delete|remove memor)/i],
    [
      "exclude repository facts",
      /(?:repo already records|covered in the repo|derived by reading the current project state)/,
    ],
    [
      "exclude conversation state",
      /(?:only matters to this conversation|only relevant to this conversation|Ephemeral task details)/,
    ],
    ["verify remembered references", /(?:verify it still exists|double-check it still exists|check the file exists)/],
  ]
  if ((options.profile ?? "full") === "full") {
    rules.push(
      ["separate memory files", /memory to its own file/],
      ["index pointer", /add a pointer to that file/],
      ["index has no frontmatter", /It has no frontmatter/],
      ["index contains no memory body", /Never write memory content directly into/],
      ["index truncation", /lines after 200 will be truncated/],
      ["maintain metadata", /name, description, and type fields[\s\S]*up-to-date/],
      ["topic organization", /semantically by topic, not chronologically/],
      ["explicit forget request", /forget something[\s\S]*remove the relevant entry/],
      ["current state beats stale memory", /trust what you observe now/],
      ["plans and tasks are separate", /update a plan instead of memory[\s\S]*update tasks instead of memory/],
    )
  } else {
    rules.push(
      ["separate fact files", /one file holding one fact/],
      ["index pointer", /one-line pointer in `MEMORY\.md`/],
      ["index has no frontmatter", /no frontmatter/],
      ["index contains no memory body", /never put memory content there/],
      ["recall is background", /background context, not (?:user instructions|an instruction from the user)/],
    )
  }
  const missing = rules.filter(([, pattern]) => !pattern.test(text)).map(([name]) => name)
  if (!text.includes(options.directory)) missing.push("current project memory directory")
  if (!text.includes("MEMORY.md")) missing.push("MEMORY.md index")
  return missing
}

export function assertMemoryPromptContract(
  text: string,
  options: { directory: string; profile?: MemoryPromptProfile },
): void {
  const missing = missingMemoryPromptRules(text, options)
  if (missing.length > 0) throw new Error(`Missing upstream memory rules: ${missing.join(", ")}`)
}
