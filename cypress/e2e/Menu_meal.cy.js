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

    it('Navigate to Catering',() => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Check_Catering_Url();
    })
    it('Navigate to Catering and see weather Chicken Sandwitch item is working properly',() => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Sandwitch_de_Pollo_Chick_fil_A_Img();
      Chickfile_meal.Sandwitch_de_Pollo_Chick_fil_A_link();
      Chickfile_meal.check_Sandwitch_de_pollo_Chick_fil_A_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
      // Chickfile_meal.seeRestaurantlocation();
      // Chickfile_meal.closeLocationPopup();
      cy.go('back');
      cy.wait(3000);
    })
    it('Navigate to Catering and see weather Chicken Sandwitch item is working properly',() => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Sandwitch_de_pollo_picante_Img();
      Chickfile_meal.Sandwitch_de_pollo_picante_link();
      Chickfile_meal.check_Sandwitch_de_pollo_picante_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
      // Chickfile_meal.seeRestaurantlocation();
      // Chickfile_meal.closeLocationPopup();
      cy.go('back');
      cy.wait(3000);
    })
    it('Navigate to Catering and see weather Nuggets item is working properly',() => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Nuggets_Chick_fil_Img();
      Chickfile_meal.Nuggets_Chick_fil_link();
      Chickfile_meal.check_Nuggets_Chick_fil_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
      // Chickfile_meal.seeRestaurantlocation();
      // Chickfile_meal.closeLocationPopup();
    })
    it('check the breakfast in Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_To_Catering_Breakfast();
      Chickfile_meal.Check_Catering_Breakfast_Url();
    })
    it('check the breakfast item in a tray of mini chicken under Catering is working or not', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_To_Catering_Breakfast();
      Chickfile_meal.Bandeja_de_chick_n_Minis_Img();
      Chickfile_meal.Bandeja_de_chick_n_Minis_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('check the breakfast item Chicken Biscuit under Catering is working or not', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_To_Catering_Breakfast();
      Chickfile_meal.Biscuit_con_pollo_Img();
      Chickfile_meal.Biscuit_con_pollo_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('check the breakfast item Biscuit with Bacon under Catering is working or not', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_To_Catering_Breakfast();
      Chickfile_meal.Biscuit_con_tocineta_Img();
      Chickfile_meal.Biscuit_con_tocineta_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('check the breakfast item Biscuit with Sausage under Catering is working or not', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_To_Catering_Breakfast();
      Chickfile_meal.Biscuit_con_salchicha_Img();
      Chickfile_meal.Biscuit_con_salchicha_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('check the breakfast item Biscuit under Catering is working or not', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_To_Catering_Breakfast();
      Chickfile_meal.Biscuit_Img();
      Chickfile_meal.Biscuit_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('check the breakfast item Fruit Salad under Catering is working or not', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_To_Catering_Breakfast();
      Chickfile_meal.Catering_Ensalada_de_frutas_Img();
      Chickfile_meal.Catering_Ensalada_de_frutas_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('Navigate to Trays under Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Trays();
    })
    it('check the Tray items with filled of Grilled Chicken,Bundle under Trays in Catering is working or not', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Trays();
      Chickfile_meal.Pollo_a_la_parilla_Bundle_Img();
      Chickfile_meal.Pollo_a_la_parilla_Bundle_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('check the Nugget Tray under Trays in Catering is working or not', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Trays();
      Chickfile_meal.Bandeja_de_nugget_Img();
      Chickfile_meal.Bandeja_de_nugget_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('check the Cold Nugget Tray under Trays in Catering is working or not', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Trays();
      Chickfile_meal.Bandeja_de_nugget_fria_Img();
      Chickfile_meal.Bandeja_de_nugget_fria_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('check the Fruit Salad Tray under Trays in Catering is working or not', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Trays();
      Chickfile_meal.Bandeja_de_ensalada_de_frutas_Img();
      Chickfile_meal.Bandeja_de_ensalada_de_frutas_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('check the Macaroni and Cheese Platter under Trays in Catering is working or not', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Trays();
      Chickfile_meal.Bandeja_de_macarrones_con_queso_Img();
      Chickfile_meal.Bandeja_de_macarrones_con_queso_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('check the Salad tray under Trays in Catering is working or not', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Trays();
      Chickfile_meal.Bandeja_de_ensalada_Img();
      Chickfile_meal.Bandeja_de_ensalada_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })

    it('check the Choclate chip cookie tray under Trays in catering is working or not', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Trays();
      Chickfile_meal.Bandeja_de_galletas_de_choclate_chip_Img();
      Chickfile_meal.Bandeja_de_galletas_de_choclate_chip_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('check the Choclate Fudge Brownie cookie tray under Trays in catering is working or not', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Trays();
      Chickfile_meal.Bandeja_de_browine_con_fudge_de_choclate_Img();
      Chickfile_meal.Bandeja_de_browine_con_fudge_de_choclate_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('check the Choclate Chip and Brownie cookie tray under Trays in catering is working or not', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Trays();
      Chickfile_meal.Bandeja_de_galletas_de_choclate_chip_y_brownie_Img();
      Chickfile_meal.Bandeja_de_galletas_de_choclate_chip_y_brownie_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('Navigate to Main course under Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Main_Courses();
    })

    it('see weather Chicken sandwitch is available and working under main courses of catering ', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Main_Courses();
      Chickfile_meal.Sandwith_de_Pollo_Img();
      Chickfile_meal.Sandwith_de_Pollo_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('see weather Spicy Chicken sandwitch is available and working under main courses of catering ', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Main_Courses();
      Chickfile_meal.Sandwich_de_pollo_picante_Img();
      Chickfile_meal.Sandwich_de_pollo_picante_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('see weather  Nuggets is available and working under main courses of catering ', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Main_Courses();
      Chickfile_meal.Nuggets_Img();
      Chickfile_meal.Nuggets_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('Navigate to salads under Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Catering_Salads(); 
    })
    it('Check the chick fil A salad is working under salds of Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Catering_Salads();
      Chickfile_meal.Catering_Ensalada_Img();
      Chickfile_meal.Catering_Ensalada_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('Navigate to Sides and Sweets under Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_catering_sides_sweets(); 
    })
    it('see weather the Fruit salad is working and navigating under sides and sweets of Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_catering_sides_sweets();
      Chickfile_meal.Catering_Sides_Ensalada_de_frutas_Img();
      Chickfile_meal.Catering_sides_Ensalada_de_frutas_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('see weather the salad is working and navigating under sides and sweets of Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_catering_sides_sweets();
      Chickfile_meal.Catering_sides_Ensalada_Img();
      Chickfile_meal.Catering_sides_Ensalada_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('see weather the item waffle potato chips is working and navigating under sides and sweets of Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_catering_sides_sweets();
      Chickfile_meal.Catering_Waffel_Potato_Chips_Img();
      Chickfile_meal.Catering_Waffel_Potato_Chips_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('see weather the item Chocolate chip cookie is working and navigating under sides and sweets of Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_catering_sides_sweets();
      Chickfile_meal.Catering_Galleta_de_chocolate_chip_Img();
      Chickfile_meal.Catering_Galleta_de_chocolate_chip_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('see weather the item Brownie with Chocolate fudge is working and navigating under sides and sweets of Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_catering_sides_sweets();
      Chickfile_meal.Catering_Brownie_con_fudge_de_choclate_Img();
      Chickfile_meal.Catering_Brownie_con_fudge_de_choclate_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('Navigate to Drinks under Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Drinks(); 
    })
    it('see weather the Cold tea with sugar,gallon is perfectly working in Beverages under Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Drinks();
      Chickfile_meal.Catering_Te_frio_con_azucar_galon_Img();
      Chickfile_meal.Catering_Te_frio_con_azucar_galon_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('see weather the Unsweeted Cold tea ,gallon is perfectly working in Beverages under Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Drinks();
      Chickfile_meal.Catering_Te_frio_sin_azucar_galon_Img();
      Chickfile_meal.Catering_Te_frio_sin_azucar_galon_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('see weather the tea with/without sugar ,gallon is perfectly working in Beverages under Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.VisitDrinksUrl();
      Chickfile_meal.Catering_Te_con_sin_azucar_galon_Img();
      Chickfile_meal.Catering_Te_con_sin_azucar_galon_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('see weather the Lemonade ,gallon is perfectly working in Beverages under Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.VisitDrinksUrl();
      Chickfile_meal.Catering_Limonada_Chick_fil_A_galon_Img();
      Chickfile_meal.Catering_Limonada_Chick_fil_A_galon_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('see weather the Diet Lemonade ,gallon is perfectly working in Beverages under Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Drinks();
      Chickfile_meal.Cateroing_Limonada_de_dieta_galon_Img();
      Chickfile_meal.Catering_Limonada_de_dieta_galon_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('see weather the Lemonade(1/2 Lemonade,1/2 diet) ,gallon is perfectly working in Beverages under Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Drinks();
      Chickfile_meal.Catering_Limonada_Chick_fil_A_half_limanoda_dieta_galon_Img();
      Chickfile_meal.Catering_Limonada_Chick_fil_A_half_limanoda_dieta_galon_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('see weather the Sunjoy,gallon(1/2 Tea with sugar,1/2 lemonade) is perfectly working in Beverages under Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Drinks();
      Chickfile_meal.Catering_Sunjoy_galon_half_te_con_azucar_limonada_Img();
      Chickfile_meal.Catering_Sunjoy_galon_half_te_con_azucar_limonada_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('see weather the Sunjoy,gallon(1/2 Tea with sugar,1/2 diet lemonade) is perfectly working in Beverages under Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Drinks();
      Chickfile_meal.Catering_Sunjoy_galon_half_te_con_azucar_limonada_de_dieta_Img();
      Chickfile_meal.Catering_Sunjoy_galon_half_te_con_azucar_limonada_de_dieta_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('see weather the Sunjoy,gallon(1/2 Unsweetened tea,1/2 lemonade) is perfectly working in Beverages under Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Drinks();
      Chickfile_meal.Catering_Sunjoy_galon_half_te_sin_azucar_limonada_Img();
      Chickfile_meal.Catering_Sunjoy_galon_half_te_sin_azucar_limonada_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('see weather the Sunjoy,gallon(1/2 Unsweetened tea,1/2 diet lemonade) is perfectly working in Beverages under Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Drinks();
      Chickfile_meal.Catering_Sunjoy_galon_half_te_sin_azucar_limonada_de_dieta_Img();
      Chickfile_meal.Catering_Sunjoy_galon_half_te_sin_azucar_limonada_de_dieta_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('see weather the DASANI bottled water is perfectly working in Beverages under Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Drinks();
      Chickfile_meal.Catering_Agua_embotelleda_DASANI_Img();
      Chickfile_meal.Catering_Agua_embotelleda_DASANI_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('see weather the Milk is perfectly working in Beverages under Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Drinks();
      Chickfile_meal.Catering_Leche_1_Img();
      Chickfile_meal.Catering_Leche_1_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('see weather the Bag of ice is perfectly working in Beverages under Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Drinks();
      Chickfile_meal.Catering_Bolsa_de_hielo_Img();
      Chickfile_meal.Catering_Bolsa_de_hielo_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('see weather the Spoon is perfectly working in Beverages under Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      cy.wait(3000);
      Chickfile_meal.Navigate_to_Drinks();
      Chickfile_meal.Cuchara_Img();
      Chickfile_meal.Chuchara_Url();
      Chickfile_meal.Product_Information();
      
    })
    it('see weather the Ice bucket and Spoon is perfectly working in Beverages under Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Drinks();
      Chickfile_meal.Cubo_y_cuchara_para_hielo_Img();
      Chickfile_meal.Cubo_y_cuchara_para_hielo_Url();
      Chickfile_meal.Product_Information();
    })
    it('see weather the Minute Maid Chinese Juice is perfectly working in Beverages under Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Drinks();
      Chickfile_meal.Judo_de_China_Minute_Maid_Img();
      Chickfile_meal.Judo_de_China_Minute_Maid_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('see weather the Minute Maid Apple Juice is perfectly working in Beverages under Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Drinks();
      Chickfile_meal.Catering_Jugo_de_manzana_Minute_Maid_Img();
      Chickfile_meal.Catering_Jugo_de_manzana_Minute_Maid_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('Navigate to Packaged Meals under Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Packaged_Meals(); 
    })

    it('see weather the Chicken Sandwich Kit regular is perfectly working in Beverages under Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Packaged_Meals();
      Chickfile_meal.Sandwich_de_pollo_Kit_Regular_Img();
      Chickfile_meal.Sandwich_de_pollo_Kit_Regular_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('see weather the spicy Chicken Sandwich Kit regular is perfectly working in Beverages under Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Packaged_Meals();
      Chickfile_meal.Sandwich_de_pollo_picante_Kit_Regular_Img();
      Chickfile_meal.Sandwich_de_pollo_picante_Kit_Regular_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('see weather the 8 ct Chick-fil-A Nuggets Kit regular is perfectly working in Beverages under Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_Packaged_Meals();
      Chickfile_meal.ct_Nuggets_Kit_Img();
      Chickfile_meal.ct_Nuggets_Kit_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
    })
    it('Navigate to see personal menu under Catering', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Catering();
      Chickfile_meal.Navigate_to_See_Personal_Menu(); 
    })

})