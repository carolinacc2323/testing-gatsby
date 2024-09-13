import React from "react";
import { render } from "@testing-library/react";
import Greeting from "../Greeting";

test("muestra un saludo con el nombre correcto", () => {
  const { getByText } = render(<Greeting name="Gatsby" />);
  expect(getByText("Hello, Gatsby!")).toBeInTheDocument();
});

test("muestra un saludo con el nombre correcto 2", () => {
  const { getByText } = render(<Greeting name="Kitty"/>);
  expect(getByText("Hello, Kitty!")).toBeInTheDocument();
});

test("muestra un saludo sin poner ningún parámetro", () => {
  const { getByText } = render(<Greeting />);
  expect(getByText("Hello, Invitado!")).toBeInTheDocument();
});