/// <reference types="cypress" />

import { postRequest } from "../../utils/apiUtils";



describe('Funcionalidade: Login', () => {
    before(() => { 
    });

    const username = Cypress.env('USERNAME')
    const password = Cypress.env('PASSWORD')

    it('Login com sucesso', () => {
        
        const body = {
            "email": username,
            "password": password
        }
        cy.log(body)
            postRequest('/login',body)
            .then((response) => {
                cy.log(response.body.message)
                expect(response.status).to.equal(200)
                expect(response.body.message).to.equal('Login realizado com sucesso')
        })
        
    });

    it('Login usuario incorreto', () => {
        const body = {
            "email": "fulanno@qa.com",
            "password": password
        }
            postRequest('/login',body)
            .then((response) => {
            cy.log(response.body.message)
            expect(response.status).to.equal(401)
            expect(response.body.message).to.equal('Email e/ou senha inválidos')
        })
    });

    it('Login senha incorreta', () => {
        const body = {
            "email": username,
            "password": "tititi"
        }
            postRequest('/login',body)
            .then((response) => {
            cy.log(response.body.message)
            expect(response.status).to.equal(401)
            expect(response.body.message).to.equal('Email e/ou senha inválidos')
        })
    });
});