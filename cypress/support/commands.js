const pure = require('pure-gen');

Cypress.Commands.add('newNumber', () => {
    const number = pure.random.number({ min: -10000, max: 10000 })
    return number
})

Cypress.Commands.add('newInvNumber', () => {
    const number = pure.random.number({ min: 10001 })
    return number
})

Cypress.Commands.add('newInvNumber_neg', () => {
    const number = pure.random.number({ max: -9999 })
    return number
})