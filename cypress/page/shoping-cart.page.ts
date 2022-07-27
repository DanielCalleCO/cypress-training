class ShopingCartPage {
    private shopingCart: string;

    constructor() {
        this.shopingCart = ".cart_navigation span";
    }

    public visitShopingCart(): void {
        cy.get(this.shopingCart).click();
    }
}

export { ShopingCartPage }
