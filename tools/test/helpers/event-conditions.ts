type Waiter = {
  readonly predicate: () => boolean
  readonly description: string
  readonly resolve: () => void
  readonly reject: (reason: Error) => void
  evaluating: boolean
  recheckQueued: boolean
  settled: boolean
}

/**
 * Coordinates synchronous observations made by an event-driven session.
 *
 * A condition is checked once when it is registered and again whenever the
 * owner reports an event. The owner is responsible for deciding how long the
 * surrounding session may run; individual conditions deliberately have no
 * timers or polling loop.
 */
export class EventConditions {
  private readonly waiters = new Set<Waiter>()
  private stickyFailure: Error | undefined
  private notifying = false
  private notifyAgain = false

  waitFor(predicate: () => boolean, description: string): Promise<void> {
    const failure = this.stickyFailure
    if (failure !== undefined) return Promise.reject(this.describeFailure(description, failure))

    return new Promise<void>((resolve, reject) => {
      const waiter: Waiter = {
        predicate,
        description,
        resolve,
        reject,
        evaluating: false,
        recheckQueued: false,
        settled: false,
      }
      this.waiters.add(waiter)
      this.evaluate(waiter)
    })
  }

  notify(): void {
    if (this.stickyFailure !== undefined) return
    if (this.notifying) {
      this.notifyAgain = true
      return
    }

    this.notifying = true
    try {
      for (const waiter of [...this.waiters]) this.evaluate(waiter)
    } finally {
      this.notifying = false
      if (this.notifyAgain && this.stickyFailure === undefined) {
        this.notifyAgain = false
        queueMicrotask(() => this.notify())
      } else {
        this.notifyAgain = false
      }
    }
  }

  fail(error: Error): void {
    if (this.stickyFailure !== undefined) return
    this.stickyFailure = error
    for (const waiter of [...this.waiters]) this.rejectWaiter(waiter, error)
  }

  private evaluate(waiter: Waiter): void {
    if (waiter.settled || this.stickyFailure !== undefined) return
    if (waiter.evaluating) {
      waiter.recheckQueued = true
      return
    }

    waiter.evaluating = true
    try {
      let matched = false
      try {
        matched = waiter.predicate()
      } catch (error) {
        if (!waiter.settled) this.rejectWaiter(waiter, this.asError(error))
        return
      }

      if (!waiter.settled && this.stickyFailure === undefined && matched) this.resolveWaiter(waiter)
    } finally {
      waiter.evaluating = false
      if (!waiter.settled && waiter.recheckQueued && this.stickyFailure === undefined) {
        waiter.recheckQueued = false
        queueMicrotask(() => this.evaluate(waiter))
      } else {
        waiter.recheckQueued = false
      }
    }
  }

  private resolveWaiter(waiter: Waiter): void {
    if (waiter.settled) return
    waiter.settled = true
    this.waiters.delete(waiter)
    waiter.resolve()
  }

  private rejectWaiter(waiter: Waiter, error: Error): void {
    if (waiter.settled) return
    waiter.settled = true
    this.waiters.delete(waiter)
    waiter.reject(this.describeFailure(waiter.description, error))
  }

  private describeFailure(description: string, error: Error): Error {
    return new Error(`${description}: ${error.message}`, { cause: error })
  }

  private asError(error: unknown): Error {
    return error instanceof Error ? error : new Error(String(error))
  }
}
