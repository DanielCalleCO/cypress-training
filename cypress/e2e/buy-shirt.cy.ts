import {MenuContentPage,
  ProductListPage,
  ShopingCartPage,
  LoginPage,
  AddressPage,
  ShippingPage,
  PaymentPage,
} from "../page/index";

const menuContentPage = new MenuContentPage();
const productListPage = new ProductListPage();
const shopingCartPage = new ShopingCartPage();
const loginPage = new LoginPage();
const addressPage = new AddressPage();
const shippingPage = new ShippingPage();
const paymentPage = new PaymentPage();

describe("Buy a t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();
    productListPage.visitProductList();
    productListPage.goToCheckout();
    shopingCartPage.visitShopingCart();
    loginPage.logIn("aperdomobo@gmail.com", "WorkshopProtractor");
    addressPage.confirmAdress();
    shippingPage.confirmTermsAndShip();
    paymentPage.confirmBankWirePayment();
    paymentPage.confirmOrder();
    paymentPage.getConfirmationTitle();
    cy.should(
        "have.text",
        "Your order on My Store is complete.");
  });
});
