import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should load the contact Component",()=>{

    render(<Contact/>)

    const heading = screen.getByRole("heading")

    //Assertion
    expect(heading).toBeInTheDocument()
})

test("Should load Button inside contact Component",()=>{

    render(<Contact/>)

    const button = screen.getByText("Submit")

    //Assertion
    expect(button).toBeInTheDocument()
})