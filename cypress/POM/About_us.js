class aboutUs{
  
    chickfil_Logo(){
        return cy.get('[href="/"]').should('be.visible').click();
    }
    Locations(){
        //return cy.get('[title="Locations"]').should('be.visible').click();
       return cy.findByRole('link', { name: 'Ubicaciones'}).click();
    }
    checkLocationsUrl(){
        cy.url().should('eq',Cypress.config().baseUrl  + '/locations')
    }
    
    VisitoneLocation(){
        return cy.findByRole('heading', {  name: 'Ubicaciones'}).should('be.visible');
    }
    checkHatilloLocation(){
        return cy.findByRole('link', { name: 'Hatillo' }).click();
    }
    Customersupport(){
        cy.findByText('¿Necesitas ayuda?').should('be.visible');
    }
    OrderCateringImg(){
        cy.get('#LocationDetail-OrderCatering > img').should('be.visible')
    }
    OrderCateringurl(){
        cy.findByText('Order Catering').should('be.visible');
    }
    ServingOptionDineIn(){
        cy.get('[id="dine-in"]').should('be.visible').click();
    }
    Carry_Out_Option(){
        cy.get('[id="carry-out"]').should('be.visible').click();
    }
    Drive_thru_option(){
        cy.get('#drive-thru > p').should('be.visible').click();
    }
    visitlocations(){
        cy.visit(Cypress.config().baseUrl  + '/locations')
    }
    checkRestaurantMenu(){
        cy.get('[href="/locations/pr/hatillo/menu"]').should('be.visible').click();
    }
    Chicken_Sandwich_Img(){
        cy.findByRole('img', { name: 'Sándwich de pollo Chick-fil-A®' }).should('be.visible');
    }
    Chicken_sandwich_Url(){
        cy.get('[data-tag="SPICY_DELUXE_SANDWICH"] > .test1 > .item-details > .item-title').should('be.visible').click();
    }
    Sandwitch_chickFil_A_Img(){
        cy.findByRole('img', { name: 'Sándwich deluxe de pollo Chick-fil-A®' }).should('be.visible');
    }
    Sandwitch_chickFil_A_link(){
        cy.get('[data-tag="CFA_DELUXE_SANDWICH"] > .test1 > .item-details > .item-title').should('be.visible').click();
    }
    Sandwich_picante_Img(){
        cy.findByRole('img', { name: 'Sándwich de pollo picante' }).should('be.visible');
    }
    Sandwich_picante_link(){
        cy.findByText('Sándwich de pollo picante').should('be.visible').click();
    }
    Sandwich_deluxe_picante_Img(){
        cy.findByRole('img', { name: 'Sándwich deluxe de pollo picante' }).should('be.visible')
    }
    Sandwich_deluxe_picante_link(){
        cy.findByText('Sándwich deluxe de pollo picante').should('be.visible').click();
    }
    Sandwich_parrilla_Img(){
        cy.findByRole('img', { name: 'Sándwich de pollo a la parrilla' }).should('be.visible')
    }
    Sandwich_parrilla_link(){
        cy.findByText('Sándwich de pollo a la parrilla').should('be.visible').click();
    }
    Club_sandwich_Img(){
        cy.findByRole('img', { name: 'Club sándwich a la parrilla' }).should('be.visible');
    }
    Club_sandwich_link(){
        cy.findByText('Club sándwich a la parrilla').should('be.visible').click();
    }
    Nuggets_Chick_fil_A_Img(){
        cy.findByRole('img', { name: 'Nuggets Chick-fil-A®' }).should('be.visible');
    }
    Nuggets_Chick_fil_A_link(){
        cy.findByText('Nuggets Chick-fil-A').should('be.visible').click();
    }
    Nuggets_parrilla_Img(){
        cy.findByRole('img', { name: 'Nuggets a la Parrilla' }).should('be.visible');
    }
    Nuggets_parrilla_link(){
        cy.findByText('Nuggets a la Parrilla').should('be.visible').click();
    }
    Restaurant_services(){
        cy.visit(Cypress.config().baseUrl  + '/locations/pr/hatillo')
    }
    visitsobre_nosotros(){
    return cy.get('[title="Sobre nosotros"]').should('be.visible').click();
    }
    visitAboutusUrl(){
        return cy.visit(Cypress.config().baseUrl + '/sobre-nosotros')
    }
    sobre_nosotrosUrl(){
        return cy.url().should('eq',Cypress.config().baseUrl + '/sobre-nosotros');
    }
    checksobre_nosotrosPge(){
    return cy.get('[class="article-details"]').should('be.visible');
    }
    checkImg1(){
        return cy.findByRole('img', {  name: 'Who We Are'}).should('be.visible');
    }
    checkFooter(){
        return cy.findByRole('navigation', {  name: 'footer navigation'}).should('be.visible')
    }
    NavigateComida(){
        cy.findByRole('link', { name: 'Comida' }).should('be.visible').click();
    }
    NavigateEmploymentopurtunities(){
        cy.get(':nth-child(3) > .off-screen > span').should('be.visible').click();
    }

    
}
export default aboutUs;
