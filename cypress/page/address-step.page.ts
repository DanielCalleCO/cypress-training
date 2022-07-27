class AddressPage {
    private adress: string;

    constructor() {
        this.adress = "[ name = \"processAddress\" ]";
    }

    public confirmAdress(): void {

        cy.get(this.adress).click();
    }
}

export { AddressPage }
