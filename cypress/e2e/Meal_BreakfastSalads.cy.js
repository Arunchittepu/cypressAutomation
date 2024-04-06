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

it('Navigate to Meal and check the Breakfast ', () => {
     Chickfile_meal.MenuUrl();
     Chickfile_meal.NavigateComida();
     Chickfile_meal.Navigate_to_Breakfast();
     Chickfile_meal.Breakfast_Url();
  })
  it('check weather the chicken Biscuit image is visible and can able to naviagate or not ', () => {
     Chickfile_meal.MenuUrl();
     Chickfile_meal.NavigateComida();
     Chickfile_meal.Navigate_to_Breakfast();
     Chickfile_meal.Biscuit_Con_Pollo_Img();
     Chickfile_meal.Biscuit_Con_Pollo_Url();
     Chickfile_meal.Check_Biscuit_con_url();
     Chickfile_meal.Product_Information();
     Chickfile_meal.clickonAdditional();
     Chickfile_meal.clickonIngredients();
     Chickfile_meal.InsideIngredientsFindArestaurant();
     Chickfile_meal.seeRestaurantlocation();
     Chickfile_meal.closeLocationPopup();
     Chickfile_meal.checkLearnMore();
     cy.wait(5000);
  })
  it('check weather the Chick-n-Minis image is visible and can able to naviagate or not ', () => {
     Chickfile_meal.MenuUrl();
     Chickfile_meal.NavigateComida();
     Chickfile_meal.Navigate_to_Breakfast();
     Chickfile_meal.Chick_n_minis_Img();
     Chickfile_meal.Chick_n_minis_Url();
     Chickfile_meal.Check_chick_n_minis_url();
     Chickfile_meal.Product_Information();
     Chickfile_meal.clickonAdditional();
     Chickfile_meal.clickonIngredients();
     Chickfile_meal.InsideIngredientsFindArestaurant();
     Chickfile_meal.seeRestaurantlocation();
     Chickfile_meal.closeLocationPopup();
     Chickfile_meal.checkLearnMore();
     cy.wait(5000);
  })
  it('check weather the Breakfast burrito image is visible and can able to naviagate or not ', () => {
     Chickfile_meal.MenuUrl();
     Chickfile_meal.NavigateComida();
     Chickfile_meal.Navigate_to_Breakfast();
     Chickfile_meal.Burrito_de_desayuno_Img();
     Chickfile_meal.Burrito_de_desayuno_Url();
     Chickfile_meal.Check_Burrito_de_desayuno_url();
     Chickfile_meal.Product_Information();
     Chickfile_meal.clickonAdditional();
     Chickfile_meal.clickonIngredients();
     Chickfile_meal.InsideIngredientsFindArestaurant();
     Chickfile_meal.seeRestaurantlocation();
     Chickfile_meal.closeLocationPopup();
     Chickfile_meal.checkLearnMore();
     cy.wait(5000);
  })
  it('check weather the Biscuit with chicken,egg and cheese image is visible and can able to naviagate or not ', () => {
     Chickfile_meal.MenuUrl();
     Chickfile_meal.NavigateComida();
     Chickfile_meal.Navigate_to_Breakfast();
     Chickfile_meal.Biscuit_con_pollo_huevo_y_queso_Img();
     Chickfile_meal.Biscuit_con_pollo_huevo_y_queso_Url();
     Chickfile_meal.Check_Biscuit_con_pollo_huevo_y_queso_url();
     Chickfile_meal.Product_Information();
     Chickfile_meal.clickonAdditional();
     Chickfile_meal.clickonIngredients();
     Chickfile_meal.InsideIngredientsFindArestaurant();
     Chickfile_meal.seeRestaurantlocation();
     Chickfile_meal.closeLocationPopup();
     Chickfile_meal.checkLearnMore();
     cy.wait(5000);
  })
  it('check weather the Biscuit with bacon,egg and cheese image is visible and can able to naviagate or not ', () => {
     Chickfile_meal.MenuUrl();
     Chickfile_meal.NavigateComida();
     Chickfile_meal.Navigate_to_Breakfast();
     Chickfile_meal.Biscuit_con_tocineta_huevo_y_queso_Img();
     Chickfile_meal.Biscuit_con_tocineta_huevo_y_queso_Url();
     Chickfile_meal.Check_Biscuit_con_tocineta_huevo_y_queso_url();
     Chickfile_meal.Product_Information();
     Chickfile_meal.clickonAdditional();
     Chickfile_meal.clickonIngredients();
     Chickfile_meal.InsideIngredientsFindArestaurant();
     Chickfile_meal.seeRestaurantlocation();
     Chickfile_meal.closeLocationPopup();
     Chickfile_meal.checkLearnMore();
     cy.wait(5000);
  })
  it('check weather the Biscuit with sausage,egg and cheese image is visible and can able to naviagate or not ', () => {
     Chickfile_meal.MenuUrl();
     Chickfile_meal.NavigateComida();
     Chickfile_meal.Navigate_to_Breakfast();
     Chickfile_meal.Biscuit_con_salchicha_huevo_y_queso_Img();
     Chickfile_meal.Biscuit_con_salchicha_huevo_y_queso_Url();
     Chickfile_meal.Check_Biscuit_con_salchicha_huevo_y_queso_url();
     Chickfile_meal.Product_Information();
     Chickfile_meal.clickonAdditional();
     Chickfile_meal.clickonIngredients();
     Chickfile_meal.InsideIngredientsFindArestaurant();
     Chickfile_meal.seeRestaurantlocation();
     Chickfile_meal.closeLocationPopup();
     Chickfile_meal.checkLearnMore();
     cy.wait(5000);
  })
  it('check weather the Breakfast image is visible and can able to naviagate or not ', () => {
     Chickfile_meal.MenuUrl();
     Chickfile_meal.NavigateComida();
     Chickfile_meal.Navigate_to_Breakfast();
     Chickfile_meal.Plato_de_desayuno_Chick_fil_A_Img();
     Chickfile_meal.Plato_de_desayuno_Chick_fil_A_Url();
     Chickfile_meal.Check_Plato_de_desayuno_url();
     Chickfile_meal.Product_Information();
     Chickfile_meal.clickonAdditional();
     Chickfile_meal.clickonIngredients();
     Chickfile_meal.InsideIngredientsFindArestaurant();
     Chickfile_meal.seeRestaurantlocation();
     Chickfile_meal.closeLocationPopup();
     Chickfile_meal.checkLearnMore();
     cy.wait(5000);
  })
  it('check weather the Hash Browns image is visible and can able to naviagate or not ', () => {
     Chickfile_meal.MenuUrl();
     Chickfile_meal.NavigateComida();
     Chickfile_meal.Navigate_to_Breakfast();
     Chickfile_meal.Hash_browns_Img();
     Chickfile_meal.Hash_browns_Url();
     Chickfile_meal.Check_Hash_browns__url();
     Chickfile_meal.Product_Information();
     Chickfile_meal.clickonAdditional();
     Chickfile_meal.clickonIngredients();
     Chickfile_meal.InsideIngredientsFindArestaurant();
     Chickfile_meal.seeRestaurantlocation();
     Chickfile_meal.closeLocationPopup();
     Chickfile_meal.checkLearnMore();
     cy.wait(5000);
  })
  it('check weather the fruit salad image is visible and can able to naviagate or not ', () => {
     Chickfile_meal.MenuUrl();
     Chickfile_meal.NavigateComida();
     Chickfile_meal.Navigate_to_Breakfast();
     Chickfile_meal.Ensalada_de_frutas_Img();
     Chickfile_meal.Ensalada_de_frutas_Url();
     Chickfile_meal.check_Ensalada_de_frutas_url();
     Chickfile_meal.Product_Information();
     Chickfile_meal.clickonIngredients();
     Chickfile_meal.InsideIngredientsFindArestaurant();
     Chickfile_meal.seeRestaurantlocation();
     Chickfile_meal.closeLocationPopup();
     Chickfile_meal.checkLearnMore();
     cy.wait(5000);
  })
  it('check weather the Breakfast Breads is visible and can able to naviagate or not ', () => {
     Chickfile_meal.MenuUrl();
     Chickfile_meal.NavigateComida();
     Chickfile_meal.Navigate_to_Breakfast();
     Chickfile_meal.Panes_de_desayuno_Img();
     Chickfile_meal.Panes_de_desayuno_Url();
     Chickfile_meal.Check_Panes_de_desayuno__url();
    })

    it('Navigate to Salads page and can able to check the page is working properly', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Ensaladas_url();
      Chickfile_meal.Check_Ensaladas_url();
    })
    it('check weather the chick-fil-A Salad image is visible and can able to naviagate ', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Ensaladas_url();
      Chickfile_meal.Ensalada_chick_fil_a_Img();
      Chickfile_meal.Ensalada_chick_fil_a_url();
      Chickfile_meal.check_Ensalada_chick_fil_A_url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
      Chickfile_meal.seeRestaurantlocation();
      Chickfile_meal.closeLocationPopup();
      Chickfile_meal.checkLearnMore();
    })
    it('Navigate to Accompaniments and check the page is working properly or not', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Acompanamientos();
      Chickfile_meal.check_Acompanamientos_url();
    })
    it('check waffle fries Img is visible and can able to Navigate properly', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Acompanamientos();
      Chickfile_meal.Papas_Fritas_Waffle_Img();
      Chickfile_meal.Papas_Fritas_Waffle_url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
      Chickfile_meal.seeRestaurantlocation();
      Chickfile_meal.closeLocationPopup();
      cy.wait(3000);
      Chickfile_meal.checkLearnMore();
      cy.wait(3000);
    })
    it('check waffle fries Img is visible and can able to Navigate properly', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Acompanamientos();
      Chickfile_meal.Ensalada_de_fruta_img();
      Chickfile_meal.Ensalada_de_fruta_url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
      Chickfile_meal.seeRestaurantlocation();
      Chickfile_meal.closeLocationPopup();
      Chickfile_meal.checkLearnMore();
      cy.wait(3000);
    })
    it('check Fruit Salad Img is visible and can able to Navigate properly', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Acompanamientos();
      Chickfile_meal.Ensalada_Img();
      Chickfile_meal.Ensalada_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonAdditional();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
      Chickfile_meal.seeRestaurantlocation();
      Chickfile_meal.closeLocationPopup();
      Chickfile_meal.checkLearnMore();
      cy.wait(3000);
    })
    it('check Salad Img is visible and can able to Navigate properly', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Acompanamientos();
      Chickfile_meal.Maccarrones_con_queso_Img();
      Chickfile_meal.Maccarrones_con_queso_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
      Chickfile_meal.seeRestaurantlocation();
      Chickfile_meal.closeLocationPopup();
      Chickfile_meal.checkLearnMore();
      cy.wait(3000);
    })
    it('check Macaroni and cheese Img is visible and can able to Navigate properly', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Acompanamientos();
      Chickfile_meal.Sopa_de_pollo_Img();
      Chickfile_meal.Sopa_de_pollo_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonAdditional();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
      Chickfile_meal.seeRestaurantlocation();
      Chickfile_meal.closeLocationPopup();
      Chickfile_meal.checkLearnMore();
    })
    it('check Chicken Soup is visible and can able to Navigate properly', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Acompanamientos();
      Chickfile_meal.Sopa_de_pollo_Img();
      Chickfile_meal.Sopa_de_pollo_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonAdditional();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
      Chickfile_meal.seeRestaurantlocation();
      Chickfile_meal.closeLocationPopup();
      Chickfile_meal.checkLearnMore();
    })
    it('Navigate to Meals for Children Page', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Comidas_para_ninos_Url()
      Chickfile_meal.check_Comidas_para_ninos_Url();
    })
    it('In meals for childrens page,Navigate Kids combo 5 nuggests item', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Comidas_para_ninos_Url()
      Chickfile_meal.Combo_nino_5_nuggets_Img();
      Chickfile_meal.Combo_nino_5_nuggets_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonAdditional();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
      Chickfile_meal.seeRestaurantlocation();
      Chickfile_meal.closeLocationPopup();
      Chickfile_meal.checkLearnMore();
      cy.wait(3000);
    })
    it('In meals for childrens page,Navigate Kids combo 5 grilled nuggests item', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Comidas_para_ninos_Url();
      Chickfile_meal.Combo_nino_5_nuggets_a_la_parrilla_Img();
      Chickfile_meal.Combo_nino_5_nuggets_a_la_parrilla_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonAdditional();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
      Chickfile_meal.seeRestaurantlocation();
      Chickfile_meal.closeLocationPopup();
      Chickfile_meal.checkLearnMore();
      cy.wait(5000);
    })

    it('Navigate to sweets Page', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Dulces();
      Chickfile_meal.check_Dulces_Url();
    })
    it('In sweets page, access the Mango Passion Fruit Froasted Lemonade drink Image and check the ingredients inside of it ', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Dulces();
      Chickfile_meal.Limanada_Frosted_de_Mango_Parcha_bebidas_Img();
      Chickfile_meal.Limanada_Frosted_de_Mango_Parcha_bebidas_Url();
      Chickfile_meal.check_Limanada_Frosted_de_Mango_Parcha_bebidas_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
      Chickfile_meal.seeRestaurantlocation();
      Chickfile_meal.closeLocationPopup();
      Chickfile_meal.checkLearnMore();
      cy.wait(3000);
    })
    it('In sweets page, access the Froasted Lemonade Image and check the ingredients inside of it ', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Dulces();
      Chickfile_meal.Limonada_Frosted_Img();
      Chickfile_meal.Limonada_Frosted_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonAdditional();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
      Chickfile_meal.seeRestaurantlocation();
      Chickfile_meal.closeLocationPopup();
      Chickfile_meal.checkLearnMore();
      cy.wait(3000);
    })
    it('In sweets page, access the choclate chip cookie Image and check the ingredients inside of it ', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Dulces();
      Chickfile_meal.Galleta_de_chocolate_chip_Img();
      Chickfile_meal.Galleta_de_chocolate_chip_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
      Chickfile_meal.seeRestaurantlocation();
      Chickfile_meal.closeLocationPopup();
      Chickfile_meal.checkLearnMore();
      cy.wait(3000);
    })
    it('In sweets page, access the Browine with choclate fudge Image and check the ingredients inside of it ', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Dulces();
      Chickfile_meal.Brownie_con_fudge_de_choclate_Img();
      Chickfile_meal.Brownie_con_fudge_de_choclate_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
      Chickfile_meal.seeRestaurantlocation();
      Chickfile_meal.closeLocationPopup();
      Chickfile_meal.checkLearnMore();
      cy.wait(3000);
    })
    it('In sweets page, access the Cookies and cream shake Image and check the ingredients inside of it ', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Dulces();
      Chickfile_meal.Batida_de_cookies_cream_Img();
      Chickfile_meal.Batida_de_cookies_cream_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonAdditional();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
      Chickfile_meal.seeRestaurantlocation();
      Chickfile_meal.closeLocationPopup();
      Chickfile_meal.checkLearnMore();
      cy.wait(3000);
    })
    it('In sweets page, access the choclate shake Image and check the ingredients inside of it ', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Dulces();
      Chickfile_meal.Batida_de_Chocolate_Img();
      Chickfile_meal.Batida_de_Chocolate_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonAdditional();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
      Chickfile_meal.seeRestaurantlocation();
      Chickfile_meal.closeLocationPopup();
      Chickfile_meal.checkLearnMore();
      cy.wait(3000);
    })
    it('In sweets page, access the Strwaberry Milk Shake Image and check the ingredients inside of it ', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Dulces();
      Chickfile_meal.Batida_de_fresa_Img();
      Chickfile_meal.Batida_de_fresa_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonAdditional();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
      Chickfile_meal.seeRestaurantlocation();
      Chickfile_meal.closeLocationPopup();
      Chickfile_meal.checkLearnMore();
      cy.wait(3000);
    })
    it('In sweets page, access the Vanilla shake Image and check the ingredients inside of it ', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Dulces();
      Chickfile_meal.Batida_de_vainilla_Img();
      Chickfile_meal.Batida_de_vainilla_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
      Chickfile_meal.seeRestaurantlocation();
      Chickfile_meal.closeLocationPopup();
      Chickfile_meal.checkLearnMore();
      cy.wait(3000);
    })

    it('In sweets page, access the Icedream Cone Image and check the ingredients inside of it ', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Dulces();
      Chickfile_meal.Cono_Icedream_Img();
      Chickfile_meal.Cono_Icedream_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
      Chickfile_meal.seeRestaurantlocation();
      Chickfile_meal.closeLocationPopup();
      Chickfile_meal.checkLearnMore();
      cy.wait(3000);
    })
    it('In sweets page, access the Icedream glass Image and check the ingredients inside of it ', () => {
      Chickfile_meal.MenuUrl();
      Chickfile_meal.NavigateComida();
      Chickfile_meal.Navigate_to_Dulces();
      Chickfile_meal.Vaso_Icedream_Img();
      Chickfile_meal.Vaso_Icedream_Url();
      Chickfile_meal.Product_Information();
      Chickfile_meal.clickonAdditional();
      Chickfile_meal.clickonIngredients();
      Chickfile_meal.InsideIngredientsFindArestaurant();
      Chickfile_meal.seeRestaurantlocation();
      Chickfile_meal.closeLocationPopup();
      Chickfile_meal.checkLearnMore();
      cy.wait(5000);
    })
    })