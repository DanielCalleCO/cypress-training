class ShopingCartPage {
    private shopingCart: string;

    constructor() {
        this.shopingCart = ".cart_navigation a[title='Proceed to checkout']";
    }

    public visitShopingCart(): void {
        cy.get(this.shopingCart).click();
    }
}

export { ShopingCartPage }
