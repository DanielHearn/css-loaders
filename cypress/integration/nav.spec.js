/// <reference types="cypress" />

import { urlRoot, titleRoot, links } from './constants'

context('Nav', () => {
  describe('Desktop', () => {
    beforeEach(() => {
      cy.viewport('macbook-15')
    })
    it('title link', () => {
      cy.visit(`${urlRoot}/loaders/`);
      cy.get('.nav_title').eq(0).click()
      cy.url().should('eq', `${urlRoot}/`)
    }) 
    it('links visible', () => {
      cy.visit(`${urlRoot}/`);
      cy.get('.nav_link').eq(0).should('be.visible')
      cy.get('.nav_link').eq(1).should('be.visible')
    }) 
    it('home link active', () => {
      cy.visit(`${urlRoot}/`);
      cy.get('.nav_link').eq(0).should('have.text', 'About')
      cy.get('.nav_link').eq(0).should('have.class', 'active')
    }) 
    it('loaders link active', () => {
      cy.visit(`${urlRoot}/loaders`);
      cy.get('.nav_link').eq(1).should('have.text', 'Loaders')
      cy.get('.nav_link').eq(1).should('have.class', 'active')
    })
    it('loader link', () => {
      cy.visit(`${urlRoot}/`);
      cy.get('.nav_link').eq(1).click()
      cy.url().should('eq', `${urlRoot}/loaders/square`)
    }) 
    it('home link', () => {
      cy.visit(`${urlRoot}/loaders/`);
      cy.get('.nav_link').eq(0).click()
      cy.url().should('eq', `${urlRoot}/`)
    }) 
  })
  describe('Mobile', () => {
    beforeEach(() => {
      cy.viewport('iphone-6+')
    })
    it('title link', () => {
      cy.visit(`${urlRoot}/loaders/`);
      cy.get('.nav_title').eq(0).click()
      cy.url().should('eq', `${urlRoot}/`)
    })
    it('links not visible', () => {
      cy.visit(`${urlRoot}/`);
      cy.get('.nav_link').should('have.length', 0)
    })  
  })
})
