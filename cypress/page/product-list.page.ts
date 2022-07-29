class ProductListPage {
    private productList: string;
    private proceedToCheckout: string;

    constructor() {
        this.productList = "[title='Add to cart']";
        this.proceedToCheckout = "[title='Proceed to checkout']";
    }

    public visitProductList(): void {
        cy.get(this.productList).click();
    }

    public goToCheckout(): void {
        cy.get(this.proceedToCheckout).click()
    }
}

export {ProductListPage }
