import { formFieldsIds } from "../PageElements/FillTheFormPageElements";
const testData = require("../../fixtures/testData.json")

class FillTheFormPageObjects {

    visitHomePage() {
        cy.visit(testData.baseUrl)
        cy.url().should("include", "tivixlabs.com");
        return this;
    };

    selectCountryDropdown() {
        cy.get(`${formFieldsIds.countryDropdown}`)
            .select(testData.country);
        cy.get(`select${formFieldsIds.countryDropdown} option:selected` )
            .should('have.text', testData.country);
    };

    selectCityDropdown() {
        cy.get(`${formFieldsIds.cityDropdown}`)
            .select(testData.city);
        cy.get(`select${formFieldsIds.cityDropdown} option:selected` )
            .should('have.text', testData.city);
    };

    setCarModelInput() {
        cy.get(`${formFieldsIds.modelInput}`).type(testData.model);
    };

    fieldModelIsVisibleAndEmpty() {
        cy.get(`${formFieldsIds.modelInput}`).should('be.visible');
        cy.get(`${formFieldsIds.modelInput}`).should('have.value', "");
    }

    setPickUpDateInput() {
        cy.get(`${formFieldsIds.pickUpDateInput}`).type(testData.pickUpDate)
            .should('have.value', testData.pickUpDate);
    };

    setDropOffDateInput() {
        cy.get(`${formFieldsIds.dropOffDateInput}`).type(testData.dropOffDate)
            .should('have.value', testData.dropOffDate);
    };

    clickSearchButton() {
        cy.get(`${formFieldsIds.searchButton}`).click();
    };

    clickRentButton() {
        cy.contains(`${formFieldsIds.rentButton}`).click();
    };

    tableOfAvailableCarsIsDisplayed() {
        cy.get(`${formFieldsIds.tableOfAvailableCars}`).should('be.visible');

    }

    tableOfAvailableCarsSholudContainsTheRequiredElements() {
        // cy.get(`${formFieldsIds.tableOfAvailableCars}`).should('be.visible');
        cy.get('table').contains('th', testData.tableColumnId).should('be.visible');
        cy.get('table').contains('th', testData.tableColumnCompany).should('be.visible');
        cy.get('table').contains('th', testData.tableColumnModel).should('be.visible');
        cy.get('table').contains('th', testData.tableColumnLicensePlate).should('be.visible');
        cy.get('table').contains('th', testData.tableColumnPrice).should('be.visible');
        cy.get('table').contains('th', testData.tableColumnPricePerDay).should('be.visible');
        cy.get('table').contains('th', testData.tableColumnAction).should('be.visible');
        cy.get('table').contains('td', `${formFieldsIds.rentButton}`).should('be.visible');

    }

}
export const fillTheForm = new FillTheFormPageObjects();