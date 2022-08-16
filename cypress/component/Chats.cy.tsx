import { Provider } from "react-redux";
import App from "../../src/App";
import { store } from "../../src/stores/store";

describe("Login.cy.ts", () => {
    it("Tests login", () => {
        cy.mount(
            <Provider store={store}>
                <App />
            </Provider>
        );
        cy.get("[data-test-id=name]").type("Test User");
        cy.get("[data-test-id=submit]").click();
        cy.get("[data-test-id=username]").should("have.text", "Test User");
    });
    it("Tests Sending Chats Send Button", () => {
        cy.mount(
            <Provider store={store}>
                <App />
            </Provider>
        );
        cy.get("[data-test-id=message]").type("Sent with Button");
        cy.get("[data-test-id=send]").click();
        cy.get(".chat_bubbles").contains("Sent with Button");
    });
});

describe("", () => {
    it("Tests Sending Chats Enter Key", () => {
        cy.mount(
            <Provider store={store}>
                <App />
            </Provider>
        );
        cy.get("[data-test-id=message]").type("Sent Enter Key").type("{enter}");
        cy.get("[data-test-id=message]").should("not.have.text", "Sent Enter Key");
        cy.get(".chat_bubbles").contains("Sent Enter Key");
    });
});
