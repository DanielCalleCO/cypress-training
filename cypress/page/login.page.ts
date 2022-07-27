class LoginPage {
    private email: string;
    private passwd: string;
    private login: string;

    constructor() {
        this.email = "#email";
        this.passwd = "#passwd";
        this.login = "#SubmitLogin";
    }

    public logIn(): void {
        cy.get(this.email).type("aperdomobo@gmail.com");
        cy.get(this.passwd).type("WorkshopProtractor");
        cy.get(this.login).click();
    }
}

export { LoginPage }
