import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Hero from '../src/components/Hero'
 
describe('Hero component', () => {
    it('renders the main heading text', () => {
      render(<Hero />)
      const heading = screen.getByRole('heading', { name: /your next great hire/i })
      expect(heading).toBeInTheDocument()
    })
  
    it('renders the subheading/description text', () => {
      render(<Hero />)
      const subheading = screen.getByText(/you're on a mission to build exceptional tech teams/i)
      expect(subheading).toBeInTheDocument()
    })
  
    it('renders the CTA button', () => {
      render(<Hero />)
      const cta = screen.getByRole('button', { name: /go now/i })
      expect(cta).toBeInTheDocument()
    })
  
    it('renders the hero visual background', () => {
      render(<Hero />)
      const visual = screen.getByRole('textbox', { name: /enter your email address/i })
      expect(visual).toBeInTheDocument()
    })
  })