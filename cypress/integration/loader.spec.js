/// <reference types="cypress" />

import { mobile, desktop } from './../constants'
import loaders from './../../src/loaders'

const baseUrl = Cypress.config().baseUrl 

context('Loader', () => {
  describe('Desktop', () => {
    beforeEach(() => {
      cy.viewport(desktop.width, desktop.height) 
    })
    it('load loader', () => {
      cy.visit(`${baseUrl}/square`);
      cy.url().should('eq', `${baseUrl}/square`);
    }) 
    it('page title', () => {
      cy.title().should('eq', 'Square - CSS Loaders');
    })
    describe('loader content', () => {
      it('loader', () => {
        cy.get('.loader').first().should('be.visible')
        cy.get('.heading').first().should('have.text', loaders[0].name)
      })
    })
    describe('loader code', () => {
      it('code tabs', () => {
        cy.get('.tabs_container .tab').eq(0).should('be.visible')
        cy.get('.tabs_container .tab').eq(1).should('be.visible')
        cy.get('.tabs_container .tab').eq(2).should('be.visible')
        cy.get('.tabs_container .tab').eq(0).should('have.text', 'HTML')
        cy.get('.tabs_container .tab').eq(1).should('have.text', 'CSS')
        cy.get('.tabs_container .tab').eq(2).should('have.text', 'SCSS')
      })
      it('code blocks', () => {
        cy.get('.tabs_container .tab').eq(0).should('have.class', 'active')
        cy.get('.tabs_container .tab').eq(1).should('not.have.class', 'active')
        cy.get('.tabs_container .tab').eq(2).should('not.have.class', 'active')
        cy.get('.code_block').should('be.visible')
        cy.get('.code_block').should('contain.text', loaders[0].code.html)
        cy.get('.code_block').should('not.contain.text', loaders[0].code.css)
        cy.get('.code_block').should('not.contain.text', loaders[0].code.scss)

        cy.get('.tabs_container .tab').eq(1).click()
        cy.get('.tabs_container .tab').eq(0).should('not.have.class', 'active')
        cy.get('.tabs_container .tab').eq(1).should('have.class', 'active')
        cy.get('.tabs_container .tab').eq(2).should('not.have.class', 'active')
        cy.get('.code_block').should('be.visible')
        cy.get('.code_block').should('not.contain.text', loaders[0].code.html)
        cy.get('.code_block').should('contain.text', loaders[0].code.css)
        cy.get('.code_block').should('not.contain.text', loaders[0].code.scss)

        cy.get('.tabs_container .tab').eq(2).click()
        cy.get('.tabs_container .tab').eq(0).should('not.have.class', 'active')
        cy.get('.tabs_container .tab').eq(1).should('not.have.class', 'active')
        cy.get('.tabs_container .tab').eq(2).should('have.class', 'active')
        cy.get('.code_block').should('be.visible')
        cy.get('.code_block').should('not.contain.text', loaders[0].code.html)
        cy.get('.code_block').should('not.contain.text', loaders[0].code.css)
        cy.get('.code_block').should('contain.text', loaders[0].code.scss)
      })
    })
    describe('loader selection', () => {
      it('initial loaders', () => {
        cy.get('.grid .grid_item').should('have.length', loaders.length)
      })
      it('filtered loaders input', () => {
        cy.get('.grid .input_box').type('hollow box')
        cy.get('.grid .input_box .input_icon').should('be.visible')
        cy.get('.grid .input_box input').should('value', 'hollow box')
      })
      it('filtered loaders match', () => {
        cy.get('.grid .grid_item').should('have.length', 1)
      })
      it('filtered loaders clear', () => {
        cy.get('.grid .input_box .clear_button').click()
        cy.get('.grid .input_box input').should('value', '')
        cy.get('.grid .grid_item').should('have.length', loaders.length)
      })
      it('filtered loaders click', () => {
        cy.get('.grid_item').eq(1).click()
        cy.url().should('eq', `${baseUrl}/heartbeat`);
      })
      it('new page title', () => {
        cy.title().should('eq', 'Heartbeat - CSS Loaders');
      })
      it('new loader', () => {
        cy.get('.loader').first().should('be.visible')
        cy.get('.heading').first().should('have.text', loaders[1].name)
      })
    })
  })
  describe('Mobile', () => {
    beforeEach(() => {
      cy.viewport(mobile.width, mobile.height) 
      cy.wait(50)
    })
    it('load loader', () => {
      cy.visit(`${baseUrl}/square`);
      cy.url().should('eq', `${baseUrl}/square`);
    }) 
    it('page title', () => {
      cy.title().should('eq', 'Square - CSS Loaders');
    })
    describe('loader content', () => {
      it('loader', () => {
        cy.get('.loader').first().should('be.visible')
        cy.get('.heading').first().should('have.text', loaders[0].name)
      })
    })
    describe('mobile tabs', () => {
      it('tabs', () => {
        cy.get('.mobile_nav_tabs .mobile_nav_tab').eq(0).should('be.visible')
        cy.get('.mobile_nav_tabs .mobile_nav_tab').eq(1).should('be.visible')
        cy.get('.mobile_nav_tabs .mobile_nav_tab').eq(2).should('be.visible')
        cy.get('.mobile_nav_tabs .mobile_nav_tab .mobile_nav_tab_icon').eq(0).should('be.visible')
        cy.get('.mobile_nav_tabs .mobile_nav_tab .mobile_nav_tab_icon').eq(1).should('be.visible')
        cy.get('.mobile_nav_tabs .mobile_nav_tab .mobile_nav_tab_icon').eq(2).should('be.visible')
        cy.get('.mobile_nav_tabs .mobile_nav_tab').eq(0).should('have.text', 'Animation')
        cy.get('.mobile_nav_tabs .mobile_nav_tab').eq(1).should('have.text', 'Code')
        cy.get('.mobile_nav_tabs .mobile_nav_tab').eq(2).should('have.text', 'Library')
      })
      it('animation tab', () => {
        cy.get('.mobile_nav_tabs .mobile_nav_tab').eq(0).should('have.class', 'active')
        cy.get('.mobile_nav_tabs .mobile_nav_tab').eq(1).should('not.have.class', 'active')
        cy.get('.mobile_nav_tabs .mobile_nav_tab').eq(2).should('not.have.class', 'active')
      })
      describe('code tab', () => {
        it('tab click', () => {
          cy.visit(`${baseUrl}/square`, {
            onBeforeLoad(win) {
              cy.stub(win, 'prompt').as('windowAlert')
            }
          })
          cy.get('.mobile_nav_tabs .mobile_nav_tab').eq(1).click()

          cy.get('.mobile_nav_tabs .mobile_nav_tab').eq(0).should('not.have.class', 'active')
          cy.get('.mobile_nav_tabs .mobile_nav_tab').eq(1).should('have.class', 'active')
          cy.get('.mobile_nav_tabs .mobile_nav_tab').eq(2).should('not.have.class', 'active')

          cy.get('.tabs_container .tab').eq(0).should('be.visible')
          cy.get('.tabs_container .tab').eq(1).should('be.visible')
          cy.get('.tabs_container .tab').eq(2).should('be.visible')
          cy.get('.tabs_container .tab').eq(0).should('have.text', 'HTML')
          cy.get('.tabs_container .tab').eq(1).should('have.text', 'CSS')
          cy.get('.tabs_container .tab').eq(2).should('have.text', 'SCSS')

          cy.get('.tabs_container .tab').eq(0).should('have.class', 'active')
          cy.get('.tabs_container .tab').eq(1).should('not.have.class', 'active')
          cy.get('.tabs_container .tab').eq(2).should('not.have.class', 'active')
          cy.get('.code_block').should('be.visible')
          cy.get('.code_block').should('contain.text', loaders[0].code.html)
          cy.get('.code_block').should('not.contain.text', loaders[0].code.css)
          cy.get('.code_block').should('not.contain.text', loaders[0].code.scss)
          cy.get('.copy_success').should('not.be.visible')

          cy.get('.code_actions .button').first().click().then(function () {
            expect(this.windowAlert).to.be.calledWith('Copy to clipboard: Ctrl+C, Enter', loaders[0].code.html)
          })
          cy.get('.copy_success').should('be.visible')

          cy.get('.tabs_container .tab').eq(1).click()
          cy.get('.tabs_container .tab').eq(0).should('not.have.class', 'active')
          cy.get('.tabs_container .tab').eq(1).should('have.class', 'active')
          cy.get('.tabs_container .tab').eq(2).should('not.have.class', 'active')
          cy.get('.code_block').should('be.visible')
          cy.get('.code_block').should('not.contain.text', loaders[0].code.html)
          cy.get('.code_block').should('contain.text', loaders[0].code.css)
          cy.get('.code_block').should('not.contain.text', loaders[0].code.scss)
          cy.get('.copy_success').should('not.be.visible')
          cy.get('.code_actions .button').first().click().then(function () {
            expect(this.windowAlert).to.be.calledWith('Copy to clipboard: Ctrl+C, Enter', loaders[0].code.css)
          })
          cy.get('.copy_success').should('be.visible')
  
          cy.get('.tabs_container .tab').eq(2).click()
          cy.get('.tabs_container .tab').eq(0).should('not.have.class', 'active')
          cy.get('.tabs_container .tab').eq(1).should('not.have.class', 'active')
          cy.get('.tabs_container .tab').eq(2).should('have.class', 'active')
          cy.get('.code_block').should('be.visible')
          cy.get('.code_block').should('not.contain.text', loaders[0].code.html)
          cy.get('.code_block').should('not.contain.text', loaders[0].code.css)
          cy.get('.code_block').should('contain.text', loaders[0].code.scss)
          cy.get('.copy_success').should('not.be.visible')
          cy.get('.code_actions .button').first().click().then(function () {
            expect(this.windowAlert).to.be.calledWith('Copy to clipboard: Ctrl+C, Enter', loaders[0].code.scss)
          })
          cy.get('.copy_success').should('be.visible')
        })
      })
      describe('library tab', () => {
        it('tab click', () => {
          cy.get('.mobile_nav_tabs .mobile_nav_tab').eq(2).click()

          cy.get('.mobile_nav_tabs .mobile_nav_tab').eq(0).should('not.have.class', 'active')
          cy.get('.mobile_nav_tabs .mobile_nav_tab').eq(1).should('not.have.class', 'active')
          cy.get('.mobile_nav_tabs .mobile_nav_tab').eq(2).should('have.class', 'active')

          cy.get('.grid .grid_item').should('have.length', loaders.length)

          cy.get('.grid .input_box input').type('hollow box')
          cy.get('.grid .input_box .input_icon').should('be.visible')
          cy.get('.grid .input_box input').should('value', 'hollow box')

          cy.get('.grid .grid_item').should('have.length', 1)

          cy.get('.grid .input_box .clear_button').click()
          cy.get('.grid .input_box input').should('value', '')
          cy.get('.grid').find('.grid_item').should('have.length', loaders.length)

          cy.get('.grid_item').eq(1).click()
          cy.url().should('eq', `${baseUrl}/heartbeat`);

          cy.title().should('eq', 'Heartbeat - CSS Loaders');

          cy.get('.loader').first().should('be.visible')
          cy.get('.heading').first().should('have.text', loaders[1].name)
        })
      })
    })
  })
})
