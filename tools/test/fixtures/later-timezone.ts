#!/usr/bin/env bun

import { strict as assert } from "node:assert/strict"
import {
  createLaterCommandHarness,
  type LaterCommandHarness,
  type LaterSubmitHookPlatform,
  laterSubmitHookPlatforms,
} from "../helpers/later-command-harness"

const EXPECTED_TIME_ZONE = "America/New_York"
const springNow = Date.parse("2030-03-09T17:00:00.000Z")
const springAt = Date.parse("2030-03-10T07:30:15.000Z")
const fallNow = Date.parse("2030-11-03T04:30:00.000Z")
const fallAt = Date.parse("2030-11-03T05:30:45.000Z")

function assertRejected(harness: LaterCommandHarness, label: string): void {
  assert.equal(harness.jobs.size, 0, `${label}: invalid timestamp scheduled a job`)
  assert.equal(harness.timers.length, 0, `${label}: invalid timestamp installed a timer`)
  assert.deepEqual(harness.cleanup, [], `${label}: invalid timestamp changed input state`)
  const notice = harness.notices[0]
  assert.equal(notice?.kind, "error", `${label}: invalid timestamp did not emit an error notice`)
}

function assertScheduled(harness: LaterCommandHarness, expectedAt: number, label: string): void {
  const task = [...harness.jobs.values()][0]
  assert.ok(task, `${label}: valid timestamp did not schedule a job`)
  assert.equal(task.at, expectedAt, `${label}: expected ${expectedAt}, got ${task.at}`)
  assert.equal(harness.timers.length, 1, `${label}: expected one timer, got ${harness.timers.length}`)
  const timer = harness.timers[0]
  assert.ok(timer, `${label}: valid timestamp did not install a timer`)
  assert.equal(timer.delay, expectedAt - harness.now, `${label}: unexpected timer delay`)
}

function runPlatform(platform: LaterSubmitHookPlatform): LaterSubmitHookPlatform {
  const explicitGap = createLaterCommandHarness(platform, springNow)
  explicitGap.run("/later 2030-03-10 02:30 explicit spring gap")
  assertRejected(explicitGap, `${platform} explicit spring gap`)

  const timeOnlyGap = createLaterCommandHarness(platform, springNow)
  timeOnlyGap.run("/later 02:30 time-only next-day spring gap")
  assertRejected(timeOnlyGap, `${platform} time-only spring gap`)

  const explicitSpring = createLaterCommandHarness(platform, springNow)
  explicitSpring.run("/later 2030-03-10 03:30:15 valid spring transition")
  assertScheduled(explicitSpring, springAt, `${platform} explicit spring transition`)

  const timeOnlySpring = createLaterCommandHarness(platform, springNow)
  timeOnlySpring.run("/later 03:30:15 valid time-only spring transition")
  assertScheduled(timeOnlySpring, springAt, `${platform} time-only spring transition`)

  const fallBack = createLaterCommandHarness(platform, fallNow)
  fallBack.run("/later 2030-11-03 01:30:45 valid fall-back transition")
  assertScheduled(fallBack, fallAt, `${platform} fall-back transition`)

  const afterFallBack = createLaterCommandHarness(platform, fallNow)
  afterFallBack.run("/later 02:30:45 after fall-back transition")
  assertScheduled(afterFallBack, Date.parse("2030-11-03T07:30:45.000Z"), `${platform} elapsed fall-back delay`)

  return platform
}

const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
assert.equal(process.env.TZ, EXPECTED_TIME_ZONE, `expected TZ=${EXPECTED_TIME_ZONE}`)
assert.equal(timeZone, EXPECTED_TIME_ZONE, `expected effective time zone ${EXPECTED_TIME_ZONE}`)
const localSpringNow = new Date(springNow)
assert.deepEqual(
  [localSpringNow.getFullYear(), localSpringNow.getMonth(), localSpringNow.getDate(), localSpringNow.getHours()],
  [2030, 2, 9, 12],
  `fixed spring clock did not resolve to 2030-03-09 12:00 in ${EXPECTED_TIME_ZONE}: ${localSpringNow.toString()}`,
)

const report = {
  timeZone,
  platforms: laterSubmitHookPlatforms.map(runPlatform),
}
process.stdout.write(`${JSON.stringify(report)}\n`)
