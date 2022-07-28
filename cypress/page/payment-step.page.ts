class PaymentPage {
    private payment: string;
    private confirm: string;
    private button: string;
    private title: string;

    constructor() {
        this.payment = "[ title = \"Pay by bank wire\" ]";
        this.confirm = "I confirm my order";
        this.button = "button";
        this.title = "#center_column > div > p > strong";
    }

    public confirmPayment(): void {

        cy.get(this.payment).click();
    }
    public shipOrder(): void {
        cy.get(this.button).contains(this.confirm).click();
    }

public getConfirmationTitle(): void {
    cy.get(this.title).should(
        "have.text",
        "Your order on My Store is complete.",
    );
}
}

export { PaymentPage }
