import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import ResaultModal from './ResultModal';

let container = null;
beforeEach(() => {
    // подготавливаем DOM-элемент, куда будем рендерить
    container = document.createElement("div");
    document.body.append(container);
});

afterEach(() => {
    // подчищаем после завершения
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders with or without a name", () => {
    act(() => {
        render(<ResaultModal />, container);
    });
    expect(container.textContent).toBe("Hey, stranger");

    act(() => {
        render(<ResaultModal socket={socket} />, container);
    });
    expect(container.textContent).toBe("Hello, Jenny!");

    act(() => {
        render(<ResaultModal name="Margaret" />, container);
    });
    expect(container.textContent).toBe("Hello, Margaret!");
});