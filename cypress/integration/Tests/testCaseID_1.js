import { fillTheForm } from '../../support/pageObjects/FillTheFormPageObjects';

describe("Correct display a table of all available car models in a specific country / city", () => {
  it("Go to the website 'http://qalab.pl.tivixlabs.com/'", () => {
    fillTheForm.visitHomePage();
  });

    context("Fill form and search", () => {
      it("Data entered correctly, displays the table of available cars.", () => {
        fillTheForm.selectCountryDropdown();
        fillTheForm.selectCityDropdown();
        fillTheForm.fieldModelIsVisibleAndEmpty();
        fillTheForm.setPickUpDateInput();
        fillTheForm.setDropOffDateInput();
        fillTheForm.clickSearchButton();
        fillTheForm.tableOfAvailableCarsIsDisplayed();
      });
    });

    context("Check the correctness of the displayed data in the table", () => {
      it("Dates correctly selected, table of available cars contains the required elements", () => {
        fillTheForm.tableOfAvailableCarsSholudContainsTheRequiredElements();
      });
    });
});
