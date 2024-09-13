import React from "react";
import { render, screen } from "@testing-library/react";
import UserCard from "../userCard";

test("muestra el nombre y la edad correctos", () => {
    render(<UserCard name="John Doe" age={30} isOnline={true} />);
  
    // Seleccionamos elementos por texto exacto
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Age: 30")).toBeInTheDocument();
  });
  
  test("muestra 'Online' cuando isOnline es true", () => {
    render(<UserCard name="Jane Doe" age={25} isOnline={true} />);
  
    // Seleccionamos el estado por texto exacto
    expect(screen.getByText("Status: Online")).toBeInTheDocument();
  });
  
  test("muestra 'Offline' cuando isOnline es false", () => {
    render(<UserCard name="Jane Doe" age={25} isOnline={false} />);
  
    // Seleccionamos el estado por texto exacto
    expect(screen.getByText("Status: Offline")).toBeInTheDocument();
  });
  
  test("selecciona elementos por rol y verifica su contenido", () => {
    render(<UserCard name="Alice" age={28} isOnline={true} />);
  
    // Seleccionamos el encabezado por su rol (heading)
    const heading = screen.getByRole("heading", { name: /Alice/i });
    expect(heading).toHaveTextContent("Alice");
  
    // Seleccionamos el párrafo de edad por su texto exacto
    const ageParagraph = screen.getByText(/Age: 28/i);
    expect(ageParagraph).toBeInTheDocument();
  });