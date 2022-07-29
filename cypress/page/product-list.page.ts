class ProductListPage {
    private productList: string;
    private proceedToCheckout: string;

    constructor() {
        this.productList = "#center_column a.button.ajax_add_to_cart_button.btn.btn-default";
        this.proceedToCheckout = "[style*='display: block;'] .button-container > a"
    }

    public visitProductList(): void {
        cy.get(this.productList).click();
    }

    public goToCheckout(): void {
        cy.get(this.proceedToCheckout).click()
    }
}

export {ProductListPage }
