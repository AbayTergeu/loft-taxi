import React from 'react'
import App from './App'
import {render, fireEvent} from '@testing-library/react'

jest.mock("./Home", () => ({ HomeWithAuth: () => <div>Home page</div> }));
jest.mock("./Map", () => ({ Map: () => <div>Map page</div> }));
jest.mock("./Profile", () => ({ ProfileWithAuth: () => <div>Profile page</div> }));

describe("App", () => {
    it("renders correctly", () => {
        const {container} = render(<App/>)
        expect(container.innerHTML).toMatch("Home page")
    })

    describe("when clicked on navigations buttons", () => {
        it("opens the corresponding page", () => {
            const {getByText, container} = render(<App isLoggedIn/>)

            fireEvent.click(getByText('Map'))
            expect(container.innerHTML).toMatch('Map page')

            fireEvent.click(getByText('Profile'))
            expect(container.innerHTML).toMatch('Profile page')
        })
    })
})