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