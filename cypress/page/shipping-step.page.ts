class ShippingPage {
    private terms: string;
    private ship: string;

    constructor() {
        this.terms = "#cgv";
        this.ship = "[ name = \"processCarrier\" ]";
    }

    public confirmTermsAndShip(): void {

        cy.get(this.terms).click();
        cy.get(this.ship).click();
    }
}

export { ShippingPage }
