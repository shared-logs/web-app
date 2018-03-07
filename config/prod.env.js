'use strict'
const merge = require('webpack-merge')
const fs = require('fs')
const dotenv = require('dotenv')

const loadEnv = (file) => {
  try {
    const parsed = dotenv.parse(fs.readFileSync(file))
    for (let i in parsed) parsed[i] = '`' + parsed[i] + '`'
    return parsed
  } catch (e) {
    return null
  }
}

module.exports = merge(loadEnv('.env'), loadEnv('.env.local'), {
  NODE_ENV: '"production"'
})
