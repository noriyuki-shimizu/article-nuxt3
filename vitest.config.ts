import { defineVitestConfig } from '@nuxt/test-utils/config'
import { configDefaults } from 'vitest/config'

/** Vitest設定 */
export default defineVitestConfig({
  test: {
    globals: true,
    environment: 'happy-dom',
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
