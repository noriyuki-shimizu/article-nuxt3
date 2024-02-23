import { defineConfig } from '@playwright/test'
import commonConfig from './playwright.config'

export default defineConfig({
  ...commonConfig,
  testMatch: 'index.vrt.ts',
  snapshotPathTemplate:
    '{testFileDir}/__screenshots__{/projectName}/{arg}{ext}'
})
