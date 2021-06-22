import { render, screen, fireEvent } from '@testing-library/react';
import TestingApp from "./Components/TestingApp";
import React from 'react';
import TestingFunction, { replaceCamelWithSpaces } from '../src/Components/TestingFunction';

test('Button has correct initial color', () => {
  render(<TestingApp />);

  // find an element with a role of button and text of 'Changed to blue' 
  let colorButton =  screen.getByRole("button", {name: 'Changed to blue'});
  expect(colorButton).toHaveStyle({backgroundColor: 'red'});
  // click button
  fireEvent.click(colorButton);
  // expect the background color to be blue
  expect(colorButton).toHaveStyle({backgroundColor: 'blue'});

  // expect the button text to be 'Change to red'
  expect(colorButton.textContent).toBe('Changed to red'); 

});

test('Initial conditions', () => {
  // check that the button starts out enabled
  render(<TestingApp />);
  let colorButton = screen.getByRole('button', {name: 'Changed to blue'});
  expect(colorButton).toBeEnabled();
  // check that the checkbox starts out unchecked
  let checkBox = screen.getByRole('checkbox');
  expect(checkBox).not.toBeChecked();
})

test('Test still work after two click', () => {
  render(<TestingApp />);
  let colorButton = screen.getByRole('button', {name: 'Changed to blue'});
  let checkBox = screen.getByRole('checkbox');
  
  fireEvent.dblClick(checkBox);
  fireEvent.click(colorButton);

  expect(colorButton.textContent).toBe('Changed to red');
})

describe('Spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });
  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });
  test('Works for multiple capital letter', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  })
})