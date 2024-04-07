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
        cy.get('[data-tag="SANDWICH_CFA_CHICKEN"] > a > .item-details > .item-title').should('be.visible').click();
       // cy.get('[data-tag="SPICY_DELUXE_SANDWICH"] > .test1 > .item-details > .item-title').should('be.visible').click();
    }
    Sandwitch_chickFil_A_Img(){
        cy.findByRole('img', { name: 'Sándwich deluxe de pollo Chick-fil-A®' }).should('be.visible');
    }
    Sandwitch_chickFil_A_link(){
        cy.get('[data-tag="CFA_DELUXE_SANDWICH"] > a > .item-details > .item-title').should('be.visible').click();
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

    AboutUsLoction(){
        cy.findByRole('button', { name: 'About us', hidden: true }).click();
    }
    Hatillo_Link(){
        cy.findByRole('link', { name: 'Hatillo' }).should('be.visible').click();
    }
    ManagerImg(){
        cy.findByRole('img', { name: 'Juan Morales' }).should('be.visible');
    }
    ConnectHatillo(){
        cy.findByRole('heading', { name: 'Connect with Hatillo' }).should('be.visible');
    }
    ChickfilDrinkImg(){
        cy.get('[src="/-/media/images/cfacom/homepage-refresh-test/classic-desktop.jpg?h=426&w=722&la=es-PR&hash=220D349C6677E8B40F31CDEC693CCEA8"]').should('be.visible');
    }
    AppleAppStoreImg(){
        cy.findByRole('link', { name: 'Download on the App Store' }).should('be.visible');
    }
    GooglePlayImg(){
        cy.get('.google').should('be.visible');
    }
    CommunityLocation(){
        cy.findByRole('button', { name: 'Community', hidden: true }).should('be.visible').click();
    }
    CarrersLocation(){
        cy.findByRole('button', { name: 'Careers', hidden: true }).should('be.visible').click();
    }
    EmployeeScholarship_Carrers(){
        cy.findByRole('link', { name: 'Employee Scholarship and Educational Assistance Opportunities' }).should('be.visible').click();
    }
    SearchPositions(){
        cy.findByRole('link', { name: 'Search Positions' }).should('be.visible');
    }
    MeetTheScholars(){
        cy.get('#dropdown-section > :nth-child(1) > a').should('be.visible');
    }
    TypesofScholars(){
        cy.findByRole('link', { name: 'Types of scholarships' }).should('be.visible');
    }
    FrequentlyAskedQuestions(){
        cy.findByRole('link', { name: 'Frequently asked questions' })
    }
    ScholarshipImg(){
        cy.get('[src="https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/2022%20Scholarships/Other%20Images/Module-Image-(600x300)-6.png?h=300&w=600&la=en"]').should('be.visible');
    }
    Read_EddisStory(){
        cy.findByRole('link', { name: "Read Eddie's story" }).should('be.visible');
    }
    ScholarshipImg2(){
        cy.get(':nth-child(8) > .flex-wrapper > .img-wrapper > .desktop-img').should('be.visible');
        //cy.get('[src="https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Scholarship%20Images/2023%20RFS%20Images/Modules/CFA2208003_RemarkableFutures_.com_Module_D_Types-Scholarships_600x300.jpg?h=300&w=600&la=en"]').should('be.visible');
    }
    ScholarshipImg3(){
        cy.get('[src="https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/2022%20Scholarships/Other%20Images/Module-Image-(600x300)-2.png?h=300&w=600&la=en"]').scrollIntoView().should('be.visible');
    }
    Explore_discounts(){
        cy.findByRole('link', { name: '\Explore tuition discounts' }).should('be.visible');
    }
    ScholarshipImg4(){
        cy.get('[src="https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Home%20Page%20Refresh/Home%20Page%20Refresh%20V2/March%202024%20update/CFA_one_footer_desktop.jpg?h=637&w=692&la=en"]').should('be.visible');
    }

}
export default aboutUs;
