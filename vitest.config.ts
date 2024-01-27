import path from 'path'
import { defineVitestConfig } from '@nuxt/test-utils/config'
import { configDefaults } from 'vitest/config'

export default defineVitestConfig({
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), '.')
    }
  },
  test: {
    globals: true,
    include: ['**/*.spec.ts'],
    exclude: [...configDefaults.exclude],
    typecheck: {
      tsconfig: './tsconfig.vitest.json'
    },
    coverage: {
      reporter: ['text-summary', 'lcov'],
      all: true,
      enabled: true,
      include: ['**/*.ts', '**/*.vue'],
      exclude: [
        ...(configDefaults.coverage.exclude || []),
        '*.ts',
        '*.vue',
        '**/index.ts',
        '**/types.ts',
        '**/constants.ts',
        '**/enums.ts',
        'types/**/*.ts',
        'constants/**/*.ts'
      ]
    }
  }
})
