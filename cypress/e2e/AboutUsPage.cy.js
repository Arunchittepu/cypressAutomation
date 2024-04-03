/// <reference types="@testing-library/cypress" />
import '@testing-library/cypress/add-commands';

import aboutUs from "../POM/About_us.js";
const ChickfilAboutusPage = new aboutUs();
describe('visit Home Page Url', () => {
  before('should visit the chickfil Home page', () => {
    cy.visit('/', { failOnStatusCode: false }); // Cypress will automatically prepend the base URL
  })

  it('Navigate About us Page', () => {
    ChickfilAboutusPage.visitsobre_nosotros();
    ChickfilAboutusPage.sobre_nosotrosUrl();
    ChickfilAboutusPage.checksobre_nosotrosPge();
     ChickfilAboutusPage.chickfil_Logo();
  })
  it('Navigate locations under About us Page', () => {
     ChickfilAboutusPage.visitAboutusUrl();
     ChickfilAboutusPage.Locations();
     ChickfilAboutusPage.checkLocationsUrl();
     cy.wait(3000);
     ChickfilAboutusPage.VisitoneLocation();
     ChickfilAboutusPage.checkHatilloLocation();
     ChickfilAboutusPage.Customersupport();
     ChickfilAboutusPage.OrderCateringImg();
     ChickfilAboutusPage.OrderCateringurl();
     ChickfilAboutusPage.visitsobre_nosotros();
     ChickfilAboutusPage.checkImg1();
     ChickfilAboutusPage.checkFooter();
  })
  it('check service options and hours under restaurant details',() =>{
    ChickfilAboutusPage.Restaurant_services();
    ChickfilAboutusPage.ServingOptionDineIn();
    ChickfilAboutusPage.Carry_Out_Option();
    ChickfilAboutusPage.Drive_thru_option();
  })
  it('check weather we can able to visit restaurant menu',()=>{
    ChickfilAboutusPage.visitlocations();
    ChickfilAboutusPage.checkRestaurantMenu();
  })
  it('see the chicken sandwitch is visible and can able to navigate or not',()=>{
    ChickfilAboutusPage.visitlocations();
    ChickfilAboutusPage.checkRestaurantMenu();
    ChickfilAboutusPage.Chicken_Sandwich_Img();
    ChickfilAboutusPage.Chicken_sandwich_Url();
  })
  it('see the sandwitch chickfil A is visible and can able to navigate or not',()=>{
    ChickfilAboutusPage.visitlocations();
    ChickfilAboutusPage.checkRestaurantMenu();
    ChickfilAboutusPage.Sandwitch_chickFil_A_Img();
    ChickfilAboutusPage.Sandwitch_chickFil_A_link();
  })
  it('see the sandwitch picante is visible and can able to navigate or not',()=>{
    ChickfilAboutusPage.visitlocations();
    ChickfilAboutusPage.checkRestaurantMenu();
    ChickfilAboutusPage.Sandwich_picante_Img();
    ChickfilAboutusPage.Sandwich_picante_link();
  })
  it('see the sandwitch deluxe picante is visible and can able to navigate or not',()=>{
    ChickfilAboutusPage.visitlocations();
    ChickfilAboutusPage.checkRestaurantMenu();
    ChickfilAboutusPage.Sandwich_deluxe_picante_Img();
    ChickfilAboutusPage.Sandwich_deluxe_picante_link();
  })
  it('see the sandwitch parilla is visible and can able to navigate or not',()=>{
    ChickfilAboutusPage.visitlocations();
    ChickfilAboutusPage.checkRestaurantMenu();
    ChickfilAboutusPage.Sandwich_parrilla_Img();
    ChickfilAboutusPage.Sandwich_parrilla_link();
  })
  it('see the club sandwitch are visible and can able to navigate or not',()=>{
    ChickfilAboutusPage.visitlocations();
    ChickfilAboutusPage.checkRestaurantMenu();
    ChickfilAboutusPage.Club_sandwich_Img();
    ChickfilAboutusPage.Club_sandwich_link();
  })
  it('see the Nuggets chick fil A is visible and can able to navigate or not',()=>{
    ChickfilAboutusPage.visitlocations();
    ChickfilAboutusPage.checkRestaurantMenu();
    ChickfilAboutusPage.Nuggets_Chick_fil_A_Img();
    ChickfilAboutusPage.Nuggets_Chick_fil_A_link();
  })
  it('see the Nuggets parrilla is visible and can able to navigate or not',()=>{ 
    ChickfilAboutusPage.visitlocations();
    ChickfilAboutusPage.checkRestaurantMenu();
    ChickfilAboutusPage.Nuggets_parrilla_Img();
    ChickfilAboutusPage.Nuggets_parrilla_link(); 
  })

  it('visit Meal and Employment elements under About page',() =>{
    ChickfilAboutusPage.visitAboutusUrl();
    ChickfilAboutusPage.NavigateComida();
    cy.go('back');
    ChickfilAboutusPage.NavigateEmploymentopurtunities();
  })
 })