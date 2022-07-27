class PaymentPage {
    private payment: string;
    private confirm: string;
    private button: string;

    constructor() {
        this.payment = "[ title = \"Pay by bank wire\" ]";
        this.confirm = "I confirm my order";
        this.button = "button";
    }

    public confirmPaymentAndShip(): void {

        cy.get(this.payment).click();
        cy.get(this.button).contains(this.confirm).click();
    }
}

export { PaymentPage }
