import React from 'react'
import {
  screen,
  render,
} from '@testing-library/react'
import App from './App'

test('Displays title on load', () => {
  render(<App />)
  const linkElement = screen.getByText(/built by cactus todo/i)
  expect(linkElement).toBeInTheDocument()
})
