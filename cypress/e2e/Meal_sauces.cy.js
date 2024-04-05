/// <reference types="@testing-library/cypress" />
import '@testing-library/cypress/add-commands';
/// <reference types="cypress-xpath" />
/// <reference types="cypress" />
require('cypress-xpath');

Cypress.on('uncaught:exception', (err, runnable) => {
  console.log(err);
  return false;
})
import Meal from "../POM/Meal.js";
const Chickfile_meal = new Meal();
describe('visit Meal Page Url', () => {
  before('should visit the chickfil Home page', () => {
    cy.visit('/'); // Cypress will automatically prepend the base URL
  })
  it('Navigate to Dippinmg Sauces and Dressings', () => {
    Chickfile_meal.MenuUrl();
    Chickfile_meal.NavigateComida();
    Chickfile_meal.Navigate_to_Dipping_Salsas_y_Aderezos();
    Chickfile_meal.check_Dipping_Salsas_Url();
  })
  it('Navigate to BBQ sauce and check it is navigating properly', () => {
    Chickfile_meal.MenuUrl();
    Chickfile_meal.NavigateComida();
    Chickfile_meal.Navigate_to_Dipping_Salsas_y_Aderezos();
    Chickfile_meal.Salsa_BBQ_Img();
    Chickfile_meal.Salsa_BBQ_link();
    Chickfile_meal.check_Salsa_BBQ_Url();
    Chickfile_meal.Product_Information();
    Chickfile_meal.clickonIngredients();
    Chickfile_meal.InsideIngredientsFindArestaurant();
    Chickfile_meal.seeRestaurantlocation();
    Chickfile_meal.closeLocationPopup();
    Chickfile_meal.checkLearnMore();
    cy.wait(3000);
  })
  it('Navigate to Chick fil A Sauce and check it is navigating properly', () => {
    Chickfile_meal.MenuUrl();
    Chickfile_meal.NavigateComida();
    Chickfile_meal.Navigate_to_Dipping_Salsas_y_Aderezos();
    Chickfile_meal.Salsa_Chick_fil_A_Img();
    Chickfile_meal.Salsa_Chick_fil_A_link();
    Chickfile_meal.check_Salsa_Chick_fil_A_Url();
    Chickfile_meal.Product_Information();
    Chickfile_meal.clickonIngredients();
    Chickfile_meal.InsideIngredientsFindArestaurant();
    Chickfile_meal.seeRestaurantlocation();
    Chickfile_meal.closeLocationPopup();
    Chickfile_meal.checkLearnMore();
    cy.wait(3000);
  })
  it('Navigate to Garden Herb Ranch Sauce and check it is navigating properly', () => {
    Chickfile_meal.MenuUrl();
    Chickfile_meal.NavigateComida();
    Chickfile_meal.Navigate_to_Dipping_Salsas_y_Aderezos();
    Chickfile_meal.Salsa_Garden_Herb_Ranch_Img();
    Chickfile_meal.Salsa_Garden_Herb_Ranch_link();
    Chickfile_meal.check_Salsa_Garden_Herb_Ranch_Url();
    Chickfile_meal.Product_Information();
    Chickfile_meal.clickonIngredients();
    Chickfile_meal.InsideIngredientsFindArestaurant();
    Chickfile_meal.seeRestaurantlocation();
    Chickfile_meal.closeLocationPopup();
    Chickfile_meal.checkLearnMore();
    cy.wait(3000);
  })
  it('Navigate to Honey Mustard Sauce and check it is navigating properly', () => {
    Chickfile_meal.MenuUrl();
    Chickfile_meal.NavigateComida();
    Chickfile_meal.Navigate_to_Dipping_Salsas_y_Aderezos();
    Chickfile_meal.Salsa_Honey_Mustard_Img();
    Chickfile_meal.Salsa_Honey_Mustard_link();
    Chickfile_meal.check_Salsa_Honey_Mustard_Url();
    Chickfile_meal.Product_Information();
    Chickfile_meal.clickonIngredients();
    Chickfile_meal.InsideIngredientsFindArestaurant();
    Chickfile_meal.seeRestaurantlocation();
    Chickfile_meal.closeLocationPopup();
    Chickfile_meal.checkLearnMore();
    cy.wait(3000);
  })
    it('Navigate to Polynesian Sauce and check it is navigating properly', () => {
    Chickfile_meal.MenuUrl();
    Chickfile_meal.NavigateComida();
    Chickfile_meal.Navigate_to_Dipping_Salsas_y_Aderezos();
    Chickfile_meal.Salsa_Polynesian_Img();
    Chickfile_meal.Salsa_Polynesian_link();
    Chickfile_meal.check_Salsa_Polynesian_Url();
    Chickfile_meal.Product_Information();
    Chickfile_meal.clickonIngredients();
    Chickfile_meal.InsideIngredientsFindArestaurant();
    Chickfile_meal.seeRestaurantlocation();
    Chickfile_meal.closeLocationPopup();
    Chickfile_meal.checkLearnMore();
    cy.wait(3000);
    })
    it('Navigate to Sweet and spicy Sriracha Sauce and check it is navigating properly', () => {
    Chickfile_meal.MenuUrl();
    Chickfile_meal.NavigateComida();
    Chickfile_meal.Navigate_to_Dipping_Salsas_y_Aderezos();
    Chickfile_meal.Salsa_Sweet_and_Spicy_Sriracha_Img();
    Chickfile_meal.Salsa_Sweet_and_Spicy_Sriracha_link();
    Chickfile_meal.check_Salsa_Sweet_and_Spicy_Sriracha_Url();
    Chickfile_meal.Product_Information();
    Chickfile_meal.clickonIngredients();
    Chickfile_meal.InsideIngredientsFindArestaurant();
    Chickfile_meal.seeRestaurantlocation();
    Chickfile_meal.closeLocationPopup();
    Chickfile_meal.checkLearnMore();
    cy.wait(3000);
    })
    it('Navigate to Zesty Buffalo Sauce and check it is navigating properly', () => {
    Chickfile_meal.MenuUrl();
    Chickfile_meal.NavigateComida();
    Chickfile_meal.Navigate_to_Dipping_Salsas_y_Aderezos();
    Chickfile_meal.Salsa_Zesty_Buffalo_Img();
    Chickfile_meal.Salsa_Zesty_Buffalo_link();
    Chickfile_meal.check_Salsa_Zesty_Buffalo_Url();
    Chickfile_meal.Product_Information();
    Chickfile_meal.clickonIngredients();
    Chickfile_meal.InsideIngredientsFindArestaurant();
    Chickfile_meal.seeRestaurantlocation();
    Chickfile_meal.closeLocationPopup();
    Chickfile_meal.checkLearnMore();
    cy.wait(3000);
    })

   it('Navigate to Honey Roasted BBQ Sauce and check it is navigating properly', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Dipping_Salsas_y_Aderezos();
      Chickfile_meal.Salsa_Honey_Roasted_BBQ_Img();
      Chickfile_meal.Salsa_Honey_Roasted_BBQ_link();
      Chickfile_meal.check_Salsa_Honey_Roasted_BBQ_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
      Chickfile_meal.seeRestaurantlocation();
      Chickfile_meal.closeLocationPopup();
      Chickfile_meal.checkLearnMore();
      cy.wait(3000);
      })
      it('Navigate to Avocado Lime Ranch Dressing and check it is navigating properly', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Dipping_Salsas_y_Aderezos();
      Chickfile_meal.Aderezo_Avocado_Lime_Ranch_Img();
      Chickfile_meal.Aderezo_Avocado_Lime_Ranch_link();
      Chickfile_meal.check_Aderezo_Avocado_Lime_Ranch_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
      Chickfile_meal.seeRestaurantlocation();
      Chickfile_meal.closeLocationPopup();
      Chickfile_meal.checkLearnMore();
      cy.wait(3000);
      })
      it('Navigate to Fat Free Honey Mustard Dressing and check it is navigating properly', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Dipping_Salsas_y_Aderezos();
      Chickfile_meal.Aderezo_Fat_Free_Honey_Mustard_Img();
      Chickfile_meal.Aderezo_Fat_Free_Honey_Mustard_link();
      Chickfile_meal.check_Aderezo_Fat_Free_Honey_Mustard_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
      Chickfile_meal.seeRestaurantlocation();
      Chickfile_meal.closeLocationPopup();
      Chickfile_meal.checkLearnMore();
      cy.wait(3000);
      })
      it('Navigate to Garden Herb Ranch Dressing and check it is navigating properly', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Dipping_Salsas_y_Aderezos();
      Chickfile_meal.Aderezo_Garden_Herb_Ranch_Img();
      Chickfile_meal.Aderezo_Garden_Herb_Ranch_link();
      Chickfile_meal.check_Aderezo_Garden_Herb_Ranch_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
      Chickfile_meal.seeRestaurantlocation();
      Chickfile_meal.closeLocationPopup();
      Chickfile_meal.checkLearnMore();
      cy.wait(3000);
      })
      it('Navigate to Light Balsamic Vinaigrette Dressing and check it is navigating properly', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Dipping_Salsas_y_Aderezos();
      Chickfile_meal.Aderezo_Light_Balsamic_Vinaigrette_Img();
      Chickfile_meal.Aderezo_Light_Balsamic_Vinaigrette_link();
      Chickfile_meal.check_Aderezo_Light_Balsamic_Vinaigrette_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
      Chickfile_meal.seeRestaurantlocation();
      Chickfile_meal.closeLocationPopup();
      Chickfile_meal.checkLearnMore();
      cy.wait(3000);
      })
      it('Navigate to Zesty Apple Cider Vinaigrette Dressing and check it is navigating properly', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Dipping_Salsas_y_Aderezos();
      Chickfile_meal.Aderezo_Zesty_Apple_Cider_Vinaigrette_Img();
      Chickfile_meal.Aderezo_Zesty_Apple_Cider_Vinaigrette_link();
      Chickfile_meal.check_Aderezo_Zesty_Apple_Cider_Vinaigrette_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
      Chickfile_meal.seeRestaurantlocation();
      Chickfile_meal.closeLocationPopup();
      Chickfile_meal.checkLearnMore();
    })

  })