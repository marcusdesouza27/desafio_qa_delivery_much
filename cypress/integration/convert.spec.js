describe('Convert Number in Text', () => {

    it('Validar Conversão de Número - Texto em Português', () => {
        cy.newNumber().then((nro) => {
            cy.log(nro)
            cy.request({
                method: ('GET'),
                url: `/${nro}`
            }).then((response) => {
                cy.log(response.body);
                expect(response.status).to.equal(200)
            })
        })

    })

    it('Validar Conversão de Número - Texto em Inglês', () => {
        cy.newNumber().then((nro) => {
            cy.log(nro)
            cy.request({
                method: ('GET'),
                url: `/en/${nro}`
            }).then((response) => {
                cy.log(response.body);
                expect(response.status).to.equal(200)
            })
        })
    })

    it('Número inválido - Valor Máximo - BR', () => {
        cy.newInvNumber().then((nro) => {
            cy.log(nro)
            cy.request({
                method: ('GET'),
                url: `/${nro}`,
                failOnStatusCode: false
            }).then((response) => {
                cy.log(response.body);
                expect(response.status).to.equal(400)
                expect(response.body).to.deep.equal({ "extenso": "Invalid data" })
            })
        })
    })

    it('Número inválido - Valor Máximo - EN', () => {
        cy.newInvNumber().then((nro) => {
            cy.log(nro)
            cy.request({
                method: ('GET'),
                url: `/${nro}`,
                failOnStatusCode: false
            }).then((response) => {
                cy.log(response.body);
                expect(response.status).to.equal(400)
                expect(response.body).to.deep.equal({ "full": "Invalid data" })
            })
        })
    })

    it('Número inválido - Valor Mínimo - BR', () => {
        cy.newInvNumber_neg().then((nro) => {
            cy.log(nro)
            cy.request({
                method: ('GET'),
                url: `/${nro}`,
                failOnStatusCode: false
            }).then((response) => {
                cy.log(response.body);
                expect(response.status).to.equal(400)
                expect(response.body).to.deep.equal({ "extenso": "Invalid data" })
            })
        })
    })

    it('Número inválido - Valor Mínimo - EN', () => {
        cy.newInvNumber_neg().then((nro) => {
            cy.log(nro)
            cy.request({
                method: ('GET'),
                url: `/en/${nro}`,
                failOnStatusCode: false
            }).then((response) => {
                cy.log(response.body);
                expect(response.status).to.equal(400)
                expect(response.body).to.deep.equal({ "full": "Invalid data" })
            })
        })
    })
})