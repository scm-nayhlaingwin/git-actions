module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'type-enum': [
        2,
        'always',
        [
          'add',
          'update',
          'delete',
          'fix',
          'refactor',
          'feat',
          'chore',
          'test',
          'style',
        ],
      ],
    },
  }
  