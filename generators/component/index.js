/**
 * Component Generator
 */

'use strict'

module.exports = {
  description: 'A configurable component',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    default: 'Button',
  }, {
    type: 'confirm',
    name: 'hasColor',
    message: 'Do you to add a color?',
    default: false,
  }, {
    when: function (response) {
      return response.hasColor
    },
    type: 'input',
    name: 'colorValue',
    message: 'Which color would you like?',
    default: '#f311a5',
  }],
  actions: (data) => {
    const actions = [{
      type: 'add',
      path: '../src/{{properCase name}}.js',
      templateFile: './component/component.js.hbs',
      abortOnFail: true,
    }]

    return actions
  },
}
