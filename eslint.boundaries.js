import boundaries from 'eslint-plugin-boundaries'

export const eslintBoundariesConfig = {
  files: ['src/**/*.{ts,tsx}'],
  plugins: {
    boundaries,
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
    'boundaries/elements': [
      { type: 'app', pattern: 'src/app' },
      { type: 'pages', pattern: 'src/pages/*' },
      { type: 'widgets', pattern: 'src/widgets/*' },
      { type: 'features', pattern: 'src/features/*' },
      { type: 'entities', pattern: 'src/entities/*' },
      { type: 'shared', pattern: 'src/shared/*' },
    ],
  },
  rules: {
    'boundaries/dependencies': [
      'error',
      {
        default: 'allow',
        policies: [
          {
            from: { element: { type: 'shared' } },
            disallow: {
              to: {
                element: {
                  types: {
                    anyOf: ['app', 'pages', 'widgets', 'features', 'entities'],
                  },
                },
              },
            },
            message: 'Shared не может зависеть от вышележащих слоёв',
          },
          {
            from: { element: { type: 'entities' } },
            disallow: {
              to: {
                element: {
                  types: { anyOf: ['app', 'pages', 'widgets', 'features'] },
                },
              },
            },
            message: 'Entities может зависеть только от shared',
          },
          {
            from: { element: { type: 'features' } },
            disallow: {
              to: {
                element: { types: { anyOf: ['app', 'pages', 'widgets'] } },
              },
            },
            message: 'Features не может зависеть от widgets, pages или app',
          },
          {
            from: { element: { type: 'widgets' } },
            disallow: {
              to: {
                element: { types: { anyOf: ['app', 'pages'] } },
              },
            },
            message: 'Widgets не может зависеть от pages или app',
          },
          {
            from: { element: { type: 'pages' } },
            disallow: {
              to: { element: { type: 'app' } },
            },
            message: 'Pages не может зависеть от app',
          },
        ],
      },
    ],
  },
}
