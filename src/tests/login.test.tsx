import React from "react";

import App from "../App";
import { render, screen } from "@testing-library/react";
import { renderWithProviders } from "./utils";

test("renders learn react link", async () => {
    renderWithProviders(<App />)
    // const formField = await screen.findByPlaceholderText(/Enter your name/),
    //     submitBtn = await screen.findByText("Submit");

    // expect(formField).toBeInTheDocument();
    // expect(submitBtn).toBeInTheDocument();

    // //@ts-ignore
    // formField.value("Seth");

    // submitBtn.click();
    // expect (await screen.findByText("Seth"))
});
