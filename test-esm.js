import jjv from './lib/jjv.esm.js'

const env = jjv()

const errors = env.validate({
  type: 'object',
  properties: {
    x: {
      type: 'number'
    },
    y: {
      type: 'number'
    }
  },
  required: ['x', 'y']
}, {x: 'w', y: 50})

console.assert(errors, 'returns if invalid')