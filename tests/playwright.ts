import { test as base, expect } from '@playwright/test'
import type { MockServiceWorker } from 'playwright-msw'
import { createWorkerFixture } from 'playwright-msw'

const test = base.extend<{
  worker: MockServiceWorker;
}>({
  worker: createWorkerFixture()
})

export { test, expect }
