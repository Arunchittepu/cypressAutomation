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

   it('Navigate to Meal HomePage and check Chicken Sandwich', () => {
   Chickfile_meal.NavigateComida();
   Chickfile_meal.Sandwich_de_polo_chick_fil_A_Img();
   Chickfile_meal.Sandwich_de_polo_chick_fil_A_url();
   Chickfile_meal.checkSandwich_de_polo_chick_file_url();
   Chickfile_meal.Product_Information();
   Chickfile_meal.clickonAdditional();
   Chickfile_meal.clickonIngredients();
   Chickfile_meal.InsideIngredientsFindArestaurant();
   Chickfile_meal.seeRestaurantlocation();
   cy.go('back');
   })
   it('Navigate to Meal HomePage and check deluxe Chicken Sandwich', () => {
   Chickfile_meal.MenuUrl();
   Chickfile_meal.Sandwich_deluxe_de_polo_chick_fil_A_Img();
   Chickfile_meal.Sandwich_deluxe_de_polo_chick_fil_A_url();
   Chickfile_meal.Product_Information();
   Chickfile_meal.checkLearnMore();
   cy.wait(5000);
   //Chickfile_meal.check_Nutrition_Allergens_Url();
  // Chickfile_meal.Heading_Nutrition_Allergens();
  Chickfile_meal.visit2ndImgUrl();
  Chickfile_meal.clickonAdditional();
  Chickfile_meal.clickonIngredients();
  Chickfile_meal.InsideIngredientsFindArestaurant();
  Chickfile_meal.seeRestaurantlocation();
  cy.go('back');
  cy.wait(3000);
   })
  it('Navigate to Meal HomePage and check spicy Chicken Sandwich', () => {
  Chickfile_meal.MenuUrl();
  Chickfile_meal.Sandwich_de_polo_picante_Img();
  Chickfile_meal.Sandwich_de_polo_picante_url();
  Chickfile_meal.Product_Information();
  Chickfile_meal.clickonAdditional();
  Chickfile_meal.clickonIngredients();
  Chickfile_meal.InsideIngredientsFindArestaurant();
  Chickfile_meal.seeRestaurantlocation();
  Chickfile_meal.closeLocationPopup();
  Chickfile_meal.checkLearnMore();
  cy.wait(3000);
  })
  it('Navigate to Meal HomePage and check deluxe Spicy Chicken Sandwich', () => {
  Chickfile_meal.MenuUrl();
  Chickfile_meal.Sandwich_deluxe_de_pollo_picante_Img();
  Chickfile_meal.Sandwich_deluxe_de_pollo_picante_url();
  Chickfile_meal.Product_Information();
  Chickfile_meal.clickonAdditional();
  Chickfile_meal.clickonIngredients();
  Chickfile_meal.InsideIngredientsFindArestaurant();
  Chickfile_meal.seeRestaurantlocation();
  Chickfile_meal.closeLocationPopup();
  Chickfile_meal.checkLearnMore();
  cy.wait(3000);
  })
  it('Navigate to Meal HomePage and check grilled Chicken Sandwich', () => {
  Chickfile_meal.MenuUrl();
  Chickfile_meal.Sandwich_deluxe_de_pollo_a_la_parrilla_Img();
  Chickfile_meal.Sandwich_deluxe_de_pollo_a_la_parrilla_url();
  Chickfile_meal.Product_Information();
  Chickfile_meal.clickonAdditional();
  Chickfile_meal.clickonIngredients();
  Chickfile_meal.InsideIngredientsFindArestaurant();
  Chickfile_meal.seeRestaurantlocation();
  Chickfile_meal.closeLocationPopup();
  Chickfile_meal.checkLearnMore();
  cy.wait(3000);
  })
  it('Navigate to Meal HomePage and check grilled club Sandwich', () => {
  Chickfile_meal.MenuUrl();
  Chickfile_meal.Club_sándwich_a_la_parrilla_Img();
  Chickfile_meal.Club_sándwich_a_la_parrilla_url();
  Chickfile_meal.Product_Information();
  Chickfile_meal.clickonAdditional();
  Chickfile_meal.clickonIngredients();
  Chickfile_meal.InsideIngredientsFindArestaurant();
  Chickfile_meal.seeRestaurantlocation();
  Chickfile_meal.closeLocationPopup();
  Chickfile_meal.checkLearnMore();
  cy.wait(3000);
  })
  it('Navigate to Meal HomePage and check Nuggets', () => {
  Chickfile_meal.MenuUrl();
  Chickfile_meal.Nuggets_Chick_fil_A_Img();
  Chickfile_meal.Nuggets_Chick_fil_A_url();
  Chickfile_meal.Product_Information();
  Chickfile_meal.clickonAdditional();
  Chickfile_meal.clickonIngredients();
  Chickfile_meal.InsideIngredientsFindArestaurant();
  Chickfile_meal.seeRestaurantlocation();
  Chickfile_meal.closeLocationPopup();
  Chickfile_meal.checkLearnMore();
  cy.wait(3000);
  })
  it('Navigate to Meal HomePage and check grilled Nuggets', () => {
  Chickfile_meal.MenuUrl();
  Chickfile_meal.Nuggets_a_la_Parrilla_Img();
  Chickfile_meal.Nuggets_a_la_Parrilla_url();
  Chickfile_meal.Product_Information();
  Chickfile_meal.clickonAdditional();
  Chickfile_meal.clickonIngredients();
  Chickfile_meal.InsideIngredientsFindArestaurant();
  Chickfile_meal.seeRestaurantlocation();
  Chickfile_meal.closeLocationPopup();
  Chickfile_meal.checkLearnMore();
  Chickfile_meal.MenuUrl();
  cy.wait(5000);
   })

    it('Navigate to drinks Page', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_To_Bebidas();
      Chickfile_meal.check_Bebidas_url();
    })
    it('Check we can able to Navigate Sunjoy Mango Parcha drinks', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_To_Bebidas();
      Chickfile_meal.Sunjoy_de_Mango_Parcha_bebidas_Img();
      Chickfile_meal.Sunjoy_de_Mango_Parcha_bebidas_Url();
      Chickfile_meal.check_Sunjoy_de_Mango_Parcha_bebidas_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonAdditional();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
      Chickfile_meal.seeRestaurantlocation();
      Chickfile_meal.closeLocationPopup();
      Chickfile_meal.checkLearnMore();
      cy.wait(3000);
    })
    it('Check we can able to Navigate Cold Tea with Sugar', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_To_Bebidas();
      Chickfile_meal.Te_frio_con_azucar_Img();
      Chickfile_meal.Te_frio_con_azucar_Url();
      Chickfile_meal.check_Te_frio_con_azucar_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonAdditional();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
      Chickfile_meal.seeRestaurantlocation();
      Chickfile_meal.closeLocationPopup();
      Chickfile_meal.checkLearnMore();
      cy.wait(3000);
    })
    it('Check we can able to Navigate Cold Tea without Sugar', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_To_Bebidas();
      Chickfile_meal.Te_frio_sin_azucar_Img();
      Chickfile_meal.Te_frio_sin_azucar_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonAdditional();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
      Chickfile_meal.seeRestaurantlocation();
      Chickfile_meal.closeLocationPopup();
      Chickfile_meal.checkLearnMore();
      cy.wait(3000);
    })
    it('Check we can able to Navigate Lemonade', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_To_Bebidas();
      Chickfile_meal.Limonada_Chick_fil_A_Img();
      Chickfile_meal.Limonada_Chick_fil_A_Url();
      Chickfile_meal.check_Limonada_Chick_fil_A_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonAdditional();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
      Chickfile_meal.seeRestaurantlocation();
      Chickfile_meal.closeLocationPopup();
      Chickfile_meal.checkLearnMore();
      cy.wait(3000);
    })
    it('Check we can able to Navigate to diet Lemonada', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_To_Bebidas();
      Chickfile_meal.Limonada_de_dieta_Chick_fil_A_Img();
      Chickfile_meal.Limonada_de_dieta_Chick_fil_A_Url();
      Chickfile_meal.check_Limonada_de_dieta_Chick_fil_A_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonAdditional();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
      Chickfile_meal.seeRestaurantlocation();
      Chickfile_meal.closeLocationPopup();
      Chickfile_meal.checkLearnMore();
      cy.wait(3000);
    })
    it('Check we can able to Navigate sunjoy(1/2 tea with Sugar,1/2 Lemanode', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_To_Bebidas();
      Chickfile_meal.Sunjoy_Te_con_limonada_Img();
      Chickfile_meal.Sunjoy_Te_con_limonada_Url();
      Chickfile_meal.check_Sunjoy_Te_con_limonada_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonAdditional();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
      Chickfile_meal.seeRestaurantlocation();
      Chickfile_meal.closeLocationPopup();
      Chickfile_meal.checkLearnMore();
      cy.wait(3000);
    })
    it('Check we can able to Navigate sunjoy(1/2 Tea with sugar,1/2 diet Lemanode', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_To_Bebidas();
      Chickfile_meal.Sunjoy_Te_con_limonada_de_dieta_Img();
      Chickfile_meal.Sunjoy_Te_con_limonada_de_dieta_Url();
      Chickfile_meal.check_Sunjoy_Te_con_limonada_de_dieta_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonAdditional();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
      Chickfile_meal.seeRestaurantlocation();
      Chickfile_meal.closeLocationPopup();
      Chickfile_meal.checkLearnMore();
      cy.wait(3000);
    })
    it('Check we can able to Navigate sunjoy(1/2 unsweetened Tea,1/2 Lemanode', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_To_Bebidas();
      Chickfile_meal.Sunjoy_té_sin_azúcar_limonada_Img();
      Chickfile_meal.Sunjoy_té_sin_azúcar_limonada_Url();
      Chickfile_meal.check_Sunjoy_té_sin_azúcar_limonada_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonAdditional();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
      Chickfile_meal.seeRestaurantlocation();
      Chickfile_meal.closeLocationPopup();
      Chickfile_meal.checkLearnMore();
      cy.wait(3000);
    })
    it('Check we can able to Navigate to sunjoy(1/2 unsweetened Tea,1/2 diet Lemanode', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_To_Bebidas();
      Chickfile_meal.Sunjoy_Te_sin_limonada_de_dieta_Img();
      Chickfile_meal.Sunjoy_Te_sin_limonada_de_dieta_Url();
      Chickfile_meal.check_Sunjoy_Te_sin_limonada_de_dieta_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonAdditional();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
      Chickfile_meal.seeRestaurantlocation();
      Chickfile_meal.closeLocationPopup();
      Chickfile_meal.checkLearnMore();
      cy.wait(3000);
    })
    it('Check we can able to Navigate to cold coffee', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_To_Bebidas();
      Chickfile_meal.Cafe_frio_Img();
      Chickfile_meal.Cafe_frio_Url();
      Chickfile_meal.check_Cafe_frio_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonAdditional();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
      Chickfile_meal.seeRestaurantlocation();
      Chickfile_meal.closeLocationPopup();
      Chickfile_meal.checkLearnMore();
      cy.wait(3000);
    })
    it('Check we can able to Navigate Coca Cola', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_To_Bebidas();
      Chickfile_meal.Coca_Cola_Img();
      Chickfile_meal.Coca_Cola_Url();
      Chickfile_meal.check_Coca_Cola_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
      Chickfile_meal.seeRestaurantlocation();
      Chickfile_meal.closeLocationPopup();
      Chickfile_meal.checkLearnMore();
      cy.wait(3000);
    })
    it('Check we can able to Navigate to dasani water bottle', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_To_Bebidas();
      Chickfile_meal.Agua_embotellada_DASANI_Img();
      Chickfile_meal.Agua_embotellada_DASANI_Url();
      Chickfile_meal.check_Agua_embotellada_DASANI_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
      Chickfile_meal.seeRestaurantlocation();
      Chickfile_meal.closeLocationPopup();
      Chickfile_meal.checkLearnMore();
      cy.wait(3000);
    })
    it('Check we can able to Navigate Milk product', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_To_Bebidas();
      Chickfile_meal.Leche_Img();
      Chickfile_meal.Leche_Url();
      Chickfile_meal.check_Leche_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
      Chickfile_meal.seeRestaurantlocation();
      Chickfile_meal.closeLocationPopup();
      Chickfile_meal.checkLearnMore();
    
      cy.wait(3000);
    })
    it('Check we can able to Navigate Gallon product', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_To_Bebidas();
      Chickfile_meal.Galon_Img();
      Chickfile_meal.Galon_Url();
      Chickfile_meal.check_Galon_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
      Chickfile_meal.seeRestaurantlocation();
      Chickfile_meal.closeLocationPopup();
      Chickfile_meal.checkLearnMore();
      cy.wait(3000);
    })
    it('Check we can able to Navigate ice products', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_To_Bebidas();
      Chickfile_meal.Productos_de_hielo_Img();
      Chickfile_meal.Productos_de_hielo_Url();
      Chickfile_meal.check_Productos_de_hielo_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.checkLearnMore();
      cy.wait(3000);
    })
    it('Check we can able to Navigate Minute Maid Apple Juice product ', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_To_Bebidas();
      Chickfile_meal.Jugo_de_manzana_Minute_Maid_Img();
      Chickfile_meal.Jugo_de_manzana_Minute_Maid_Url();
      Chickfile_meal.check_Jugo_de_manzana_Minute_Maid_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
      Chickfile_meal.seeRestaurantlocation();
      Chickfile_meal.closeLocationPopup();
      Chickfile_meal.checkLearnMore();
      cy.wait(3000);
    })
    it('Check we can able to Navigate Minute Maid Chinese Juice product ', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_To_Bebidas();
      Chickfile_meal.Jugo_de_china_Minute_Maid_Img();
      Chickfile_meal.Jugo_de_china_Minute_Maid_Url();
      Chickfile_meal.check_Jugo_de_china_Minute_Maid_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
      Chickfile_meal.seeRestaurantlocation();
      Chickfile_meal.closeLocationPopup();
      Chickfile_meal.checkLearnMore();
      cy.wait(3000);
    })
    it('Check we can able to Navigate American product ', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_To_Bebidas();
      Chickfile_meal.Americano_Img();
      Chickfile_meal.Americano_Url();
      Chickfile_meal.check_Americano_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
      Chickfile_meal.seeRestaurantlocation();
      Chickfile_meal.closeLocationPopup();
      Chickfile_meal.checkLearnMore();
      cy.wait(3000);
    })
    it('Check we can able to Navigate Chopped up product ', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_To_Bebidas();
      Chickfile_meal.Cortado_Img();
      Chickfile_meal.Cortado_Url();
      Chickfile_meal.check_Cortado_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
      Chickfile_meal.seeRestaurantlocation();
      Chickfile_meal.closeLocationPopup();
      Chickfile_meal.checkLearnMore();
      cy.wait(3000);
    })
      it('Check we can able to Navigate Espresso product ', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_To_Bebidas();
      Chickfile_meal.Espresso_Img();
      Chickfile_meal.Espresso_Url();
      Chickfile_meal.check_Espresso_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
      Chickfile_meal.seeRestaurantlocation();
      Chickfile_meal.closeLocationPopup();
      Chickfile_meal.checkLearnMore();
      cy.wait(5000);
    })
    
    })