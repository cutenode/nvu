// @ts-check
const logger = require('./logger')

/**
 * custom types:
 * @typedef { 'json' | 'ci' | 'human' } Output
 * @typedef { 'success' | 'info' | 'warning' | 'error' } Status
 * 
 * Expected inputs:
 * @param {{}} input 
 * @param { Output } outputType 
 * @param { Status } status 
 */
const output = function(input, outputType, status) {
  switch(outputType) {
    case 'json':
      console.log(input) // input should just be a JSON object
      process.exit(0)
      break
    case 'ci':
      if(status === 'error') {
        process.exit(1)
      } else {
        process.exit(0)
      }
      break
    case 'human':
      logger(input, status)
      break
  }
}

module.exports = output