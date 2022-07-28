class LoginPage {
    private email: string;
    private passwd: string;
    private login: string;

    constructor() {
        this.email = "#email";
        this.passwd = "#passwd";
        this.login = "#SubmitLogin";
    }

    public logIn(email: string,passwd: string): void {
        cy.get(this.email).type(email)
        cy.get(this.passwd).type(passwd);
        cy.get(this.login).click();
    }
}

export { LoginPage }
