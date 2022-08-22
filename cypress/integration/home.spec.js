/// <reference types="cypress" />

import { links } from './../../src/constants'
import { mobile, desktop } from './../constants'
import loaders from './../../src/loaders'

const baseUrl = Cypress.config().baseUrl 

context('Home', () => {
  describe('Desktop', () => {
    beforeEach(() => {
      cy.viewport(desktop.width, desktop.height) 
    })
    it('load home', () => {
      cy.visit(`${baseUrl}/`);
      cy.url().should('eq', `${baseUrl}/`);
    }) 
    it('page title', () => {
      cy.title().should('eq', 'Square - CSS Loaders');
    })
    describe('header content', () => {
      it('creator link', () => {
        const creatorLink = cy.get(`a[href="${links.creator}"]`)
        creatorLink.should('be.visible')
        creatorLink.should('have.text', 'Daniel Hearn');
      })
    })
    describe('loader selection', () => {
      it('initial loaders', () => {
        cy.get('.grid .grid_item').should('have.length', loaders.length)
      })
      it('filtered loaders input', () => {
        const loaderGrid = cy.get('.filtered_grid')
        loaderGrid.get('.input_box').type('hollow box')
        loaderGrid.get('.input_box .input_icon').should('be.visible')
        loaderGrid.get('.input_box input').should('value', 'hollow box')
      })
      it('filtered loaders match', () => {
        cy.get('.grid .grid_item').should('have.length', 1)
      })
      it('filtered loaders clear', () => {
        const loaderFilter = cy.get('.filtered_grid').find('.input_box')
        loaderFilter.get('.clear_button').click()
        cy.get('.grid .input_box input').should('value', '')
        cy.get('.grid').find('.grid_item').should('have.length', loaders.length)
      })
    })
  })
  describe('Mobile', () => {
    beforeEach(() => {
      cy.viewport(mobile.width, mobile.height) 
    })
    it('load home', () => {
      cy.visit(`${baseUrl}/`);
      cy.url().should('eq', `${baseUrl}/`);
    }) 
    it('page title', () => {
      cy.title().should('eq', 'Square - CSS Loaders');
    })
    describe('header content', () => {
      it('creator link', () => {
        const creatorLink = cy.get(`a[href="${links.creator}"]`)
        creatorLink.should('be.visible')
        creatorLink.should('have.text', 'Daniel Hearn');
      })
    })
    describe('loader selection', () => {
      it('initial loaders', () => {
        cy.get('.mobile_nav_tab').eq(2).click()
        cy.get('.grid .grid_item').should('have.length', loaders.length)
      })
      it('filtered loaders input', () => {
        const loaderGrid = cy.get('.filtered_grid')
        loaderGrid.get('.input_box').type('hollow box')
        loaderGrid.get('.input_box .input_icon').should('be.visible')
        loaderGrid.get('.input_box input').should('value', 'hollow box')
      })
      it('filtered loaders match', () => {
        cy.get('.grid .grid_item').should('have.length', 1)
      })
      it('filtered loaders clear', () => {
        cy.get('.clear_button').click()
        cy.get('.grid .input_box input').should('value', '')
        cy.get('.grid').find('.grid_item').should('have.length', loaders.length)
      })
      it('filtered loaders click', () => {
        cy.get('.grid_item').first().click()
        cy.url().should('eq', `${baseUrl}/square`);
      })
    })
  })
})
