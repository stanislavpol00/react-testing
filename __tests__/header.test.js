import React from 'react';
import { cleanup, render, screen } from "@testing-library/react";
import Header from '../app/header';
afterEach(cleanup);

describe('Header Component', () => {

    let wrapper
    beforeEach(() => {
        wrapper = render(<Header/>)
    })
    
    test('should check the menu icon', () => {
       expect(screen.getByTestId("menu-icon")).toBeInTheDocument();
    })

    test('should check the header component title', () => {
       expect(screen.getByText('Unit Testing with Jest and Enzyme')).toBeInTheDocument();
    })

})
