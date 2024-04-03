/// <reference types="@testing-library/cypress" />
/// <reference types="cypress-xpath" />
require('cypress-xpath');
import '@testing-library/cypress/add-commands';
Cypress.on('uncaught:exception', (err, runnable) => {
  console.log(err);
  return false;
})
import Footers from "../POM/Footers.js";
const Chickfile_Footers = new Footers();
describe('visit Footers Page Url', () => {
  before('should visit the chickfil Home page', () => {
    cy.visit('/'); // Cypress will automatically prepend the base URL
  })

  it('Navigate to Customer support Footer', () => {
    Chickfile_Footers.Navigate_to_Atencion_al_cliente();
    Chickfile_Footers.check_Contact_Support_Url();
    Chickfile_Footers.Heading_of_Atencion_al_cliente();
  })
  it('Check weather the contacts of chick file A restaurant is available or not', () => {
    Chickfile_Footers.check_contact_Support();
    // Chickfile_Footers.Navigate_to_Atencion_al_cliente();
    Chickfile_Footers.Plaza_del_Sol_Help_Mail_Id();
    Chickfile_Footers.Los_Filtros_Mail_Id();
    Chickfile_Footers.Humacao_Mail_Id();
  })
  it('See weather about us page is navigating correctly available or not', () => {
    Chickfile_Footers.check_contact_Support();
    // Chickfile_Footers.Navigate_to_Atencion_al_cliente();
    Chickfile_Footers.check_Contact_Support_Url();
    cy.scrollTo(0,800);
    Chickfile_Footers.Lee_nuestras_preguntas_frecuentes();
    Chickfile_Footers.Quiénes_somos();
    Chickfile_Footers.What_is_Chick_fil_A();
    Chickfile_Footers.sobre_nosotros();
    cy.go('back');
    Chickfile_Footers.Request_donation();
    Chickfile_Footers.Locations_Url();
    Chickfile_Footers.check_Hatillo_location();
    Chickfile_Footers.Hatillo_Restaurant_Menu();
    Chickfile_Footers.check_Hatillo_Menu_Url();
    cy.go('back');
    // Chickfile_Footers.Hatillo_Restaurant_location_Directions();
    // cy.wait(3000);
    Chickfile_Footers.check_contact_Support();
    Chickfile_Footers.Privacy_Policy_Mail_Id();
    Chickfile_Footers.Privacy_Policy_link();
     Chickfile_Footers.check_Legal();
     Chickfile_Footers.Legal_question1();
    Chickfile_Footers.Legal_question2();
    Chickfile_Footers.Legal_question3();
    Chickfile_Footers.Legal_question4();
    Chickfile_Footers.Legal_question5();
    Chickfile_Footers.Legal_question6();
    Chickfile_Footers.Legal_question7();
    Chickfile_Footers.Legal_question8();
    Chickfile_Footers.Legal_question9();
    Chickfile_Footers.Legal_question10();
    Chickfile_Footers.Legal_question11();
    cy.go('back');
  })
  it('See weather meal page is navigating correctly available or not', () => {
    Chickfile_Footers.check_contact_Support();
    // Chickfile_Footers.Navigate_to_Atencion_al_cliente();
    Chickfile_Footers.check_Contact_Support_Url();
    Chickfile_Footers.Nuestras_comidas();
  })
  it('See weather Employement Oppurtinities page is navigating correctly available or not', () => {
    Chickfile_Footers.check_contact_Support();
  // Chickfile_Footers.Navigate_to_Atencion_al_cliente();
    Chickfile_Footers.check_Contact_Support_Url();
    Chickfile_Footers.Oppurtunidades_de_Empleo();
    cy.wait(3000);
  })
  it('See weather Register link is navigating correctly available or not under Employement Oppurtinities page', () => {
    Chickfile_Footers.check_contact_Support();
    // Chickfile_Footers.Navigate_to_Atencion_al_cliente();
    Chickfile_Footers.check_Contact_Support_Url();
    Chickfile_Footers.Oppurtunidades_de_Empleo();
    Chickfile_Footers.Register();
    // Chickfile_Footers.Heading_of_Franchise_Oppurtunities();
    // cy.go('back');
    // Chickfile_Footers.Franchise_link();
    // cy.wait(3000);
    // Chickfile_Footers.check_Franchise_Url();
    // Chickfile_Footers.Heading_Franchise();
    // Chickfile_Footers.An_Operators_life_vedio();
    // Chickfile_Footers.NextVedio_Button();
    // Chickfile_Footers.Hear_more_Stories();
    // Chickfile_Footers.Inside_Stories_Headings();
    // Chickfile_Footers.Franchise_vedios();
    // Chickfile_Footers.Milk_shake_Footer_Img();
    // cy.go('back');
    // Chickfile_Footers.find_an_Upcoming_Event_Link();
    // Chickfile_Footers.find_an_Upcoming_Event_Url();
    // Chickfile_Footers.view_Franchise_Information_sessions_text();
    // Chickfile_Footers.find_an_Upcoming_Event_Url();
    // Chickfile_Footers.view_Franchise_Information_sessions_text();
    // Chickfile_Footers.Webinar_Sessions_Link();
  })

  it('Navigate to Nutrients and Allergens', () => {
    Chickfile_Footers.Home_Page_Url();
    Chickfile_Footers.Navigate_to_Nutrients_And_Allergens();
    Chickfile_Footers.check_Nutrients_And_Allergens_Url();
    Chickfile_Footers.Heading_Information_of_Nutrients();
  })
})