import { carDetailsIds } from "../pageElements/CarDetailsPageElements"
const testData = require("../../fixtures/testData.json")

class CarDetailsPageObjects {

    clickRentButton() {
        cy.get(`${carDetailsIds.rentButton}`).click().wait(2000);
    }
}
export const carDetails = new CarDetailsPageObjects();