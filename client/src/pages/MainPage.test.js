// import React from "react";
// import { render, unmountComponentAtNode } from "react-dom";
// import { act } from "react-dom/test-utils";

// import MainPage from './MainPage';

// let container = null;
// beforeEach(() => {
//     // подготавливаем DOM-элемент, куда будем рендерить
//     container = document.createElement("div");
//     document.body.appendChild(container);
// });

// afterEach(() => {
//     // подчищаем после завершения
//     unmountComponentAtNode(container);
//     container.remove();
//     container = null;
// });

// it("renders with or without a name", () => {
//     act(() => {
//         render(<MainPage />, container);
//     });
//     expect(container.textContent).toBe("Hey, stranger");

//     act(() => {
//         render(<MainPage name="Jenny" />, container);
//     });
//     expect(container.textContent).toBe("Hello, Jenny!");

//     act(() => {
//         render(<MainPage name="Margaret" />, container);
//     });
//     expect(container.textContent).toBe("Hello, Margaret!");
// });