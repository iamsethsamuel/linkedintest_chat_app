import { Provider } from "react-redux"
import App from "../../src/App"
import {store} from "../../src/stores/store"

describe("Login.cy.ts", () => {
  it("Tests login", () => {
    cy.mount(<Provider store={store}><App /></Provider>)
    cy.get("[data-test-id=name]").type("Test User")
    cy.get("[data-test-id=submit]").click()
    cy.get("[data-test-id=username]").should("have.text", "Test User")
  })
})