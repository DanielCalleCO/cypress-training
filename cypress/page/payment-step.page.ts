class PaymentPage {
    private payment: string;
    private confirm: string;
    private button: string;
    private title: string;

    constructor() {
        this.payment = "[ title = \"Pay by bank wire\" ]";
        this.confirm = "I confirm my order";
        this.button = "button";
        this.title = ".cheque-indent > .dark";
    }

    public confirmBankWirePayment(): void {

        cy.get(this.payment).click();
    }
    public confirmOrder(): void {
        cy.get(this.button).contains(this.confirm).click();
    }

    public getConfirmationTitle() {
        return cy.get(this.title);
    }
}

export { PaymentPage }
