/// <reference types="cypress" />

import { titleRoot, links, queryWidths } from './../../src/constants'
import { mobile, desktop } from './../constants'
import loaders from './../../src/loaders'

const baseUrl = Cypress.config().baseUrl 

context('Nav', () => {
  describe('Desktop', desktop, () => {
    beforeEach(() => {
      cy.viewport(desktop.width, desktop.height) 
    })
    it('title link', () => {
      cy.visit(`${baseUrl}/loaders/`);
      cy.get('.nav_title').eq(0).click()
      cy.url().should('eq', `${baseUrl}/`)
    }) 
    it('links visible', () => {
      cy.visit(`${baseUrl}/`);
      cy.get('.nav_link').eq(0).should('be.visible')
      cy.get('.nav_link').eq(1).should('be.visible')
    }) 
    it('home link active', () => {
      cy.visit(`${baseUrl}/`);
      cy.get('.nav_link').eq(0).should('have.text', 'About')
      cy.get('.nav_link').eq(0).should('have.class', 'active')
    }) 
    it('loaders link active', () => {
      cy.visit(`${baseUrl}/loaders`);
      cy.get('.nav_link').eq(1).should('have.text', 'Loaders')
      cy.get('.nav_link').eq(1).should('have.class', 'active')
    })
    it('loader link', () => {
      cy.visit(`${baseUrl}/`);
      cy.get('.nav_link').eq(1).click()
      cy.url().should('eq', `${baseUrl}/loaders/square`)
    }) 
    it('home link', () => {
      cy.visit(`${baseUrl}/loaders/`);
      cy.get('.nav_link').eq(0).click()
      cy.url().should('eq', `${baseUrl}/`)
    }) 
  })
  describe('Mobile', mobile, () => {
    beforeEach(() => {
      cy.viewport(mobile.width, mobile.height) 
    })
    it('title link', () => {
      cy.visit(`${baseUrl}/loaders/`);
      cy.get('.nav_title').eq(0).click()
      cy.url().should('eq', `${baseUrl}/`)
    })
    it('links not visible', () => {
      cy.visit(`${baseUrl}/`);
      cy.get('.nav_link').should('have.length', 0)
    })  
  })
})
