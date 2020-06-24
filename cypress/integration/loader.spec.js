/// <reference types="cypress" />

import { urlRoot, titleRoot, links } from './constants'
import loaders from './../../src/loaders'

context('Loader', () => {
  describe('Desktop', () => {
    beforeEach(() => {
      cy.viewport('macbook-15')
    })
    it('load loader', () => {
      cy.visit(`${urlRoot}/loaders/square`);
      cy.url().should('eq', `${urlRoot}/loaders/square`);
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
        const loaderGrid = cy.get('.grid')
        const loaderFilter = loaderGrid.get('.input_box')
        loaderGrid.get('.input_box').type('hollow box')
        loaderGrid.get('.input_box .input_icon').should('be.visible')
        loaderGrid.get('.input_box input').should('value', 'hollow box')
      })
      it('filtered loaders match', () => {
        const loaderGrid = cy.get('.grid')
        cy.get('.grid .grid_item').should('have.length', 1)
      })
      it('filtered loaders clear', () => {
        const loaderFilter = cy.get('.grid').find('.input_box')
        loaderFilter.get('.clear_button').click()
        cy.get('.grid .input_box input').should('value', '')
        cy.get('.grid').find('.grid_item').should('have.length', loaders.length)
      })
      it('filtered loaders click', () => {
        cy.get('.grid_item').eq(1).click()
        cy.url().should('eq', `${urlRoot}/loaders/heartbeat`);
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
      cy.viewport('iphone-6+')
    })
    it('load loader', () => {
      cy.visit(`${urlRoot}/loaders/square`);
      cy.url().should('eq', `${urlRoot}/loaders/square`);
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
          cy.get('.mobile_nav_tabs .mobile_nav_tab').eq(1).click()

          cy.get('.mobile_nav_tabs .mobile_nav_tab').eq(0).should('not.have.class', 'active')
          cy.get('.mobile_nav_tabs .mobile_nav_tab').eq(1).should('have.class', 'active')
          cy.get('.mobile_nav_tabs .mobile_nav_tab').eq(2).should('not.have.class', 'active')
        })
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
      describe('library tab', () => {
        it('tab click', () => {
          cy.get('.mobile_nav_tabs .mobile_nav_tab').eq(2).click()

          cy.get('.mobile_nav_tabs .mobile_nav_tab').eq(0).should('not.have.class', 'active')
          cy.get('.mobile_nav_tabs .mobile_nav_tab').eq(1).should('not.have.class', 'active')
          cy.get('.mobile_nav_tabs .mobile_nav_tab').eq(2).should('have.class', 'active')
        })
        it('initial loaders', () => {
          cy.get('.grid .grid_item').should('have.length', loaders.length)
        })
        it('filtered loaders input', () => {
          const loaderGrid = cy.get('.grid')
          const loaderFilter = loaderGrid.get('.input_box')
          loaderGrid.get('.input_box').type('hollow box')
          loaderGrid.get('.input_box .input_icon').should('be.visible')
          loaderGrid.get('.input_box input').should('value', 'hollow box')
        })
        it('filtered loaders match', () => {
          const loaderGrid = cy.get('.grid')
          cy.get('.grid .grid_item').should('have.length', 1)
        })
        it('filtered loaders clear', () => {
          const loaderFilter = cy.get('.grid').find('.input_box')
          loaderFilter.get('.clear_button').click()
          cy.get('.grid .input_box input').should('value', '')
          cy.get('.grid').find('.grid_item').should('have.length', loaders.length)
        })
        it('filtered loaders click', () => {
          cy.get('.grid_item').eq(1).click()
          cy.url().should('eq', `${urlRoot}/loaders/heartbeat`);
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
  })
})
