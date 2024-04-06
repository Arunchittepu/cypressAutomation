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
})