import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ContactForm from './ContactForm'

// test('ContactForm can be filled out', () => {
//     render(<ContactForm />)

//     const firstNameInput = screen.getByLabelText(/first name/i)
//     const lastNameInput = screen.getByLabelText(/last name/i)
//     const emailInput = screen.getByLabelText(/email/i)
//     const messageInput = screen.getByLabelText(/message/i)

//     fireEvent.change(firstNameInput, { target: { value: 'Danny' } })
//     console.log("firstNameInput", firstNameInput)
//     fireEvent.change(lastNameInput, { target: { value: 'Burke' } })
//     fireEvent.change(emailInput, { target: { value: 'bluebill1049@hotmail.com' }})
//     fireEvent.change(messageInput, { target: { value: 'please work dear sweet god please work'}})
    
    
// })

test('ContactForm can submit', async () => {
    render(<ContactForm />)

    const firstNameInput = screen.getByLabelText(/first name/i)
    const lastNameInput = screen.getByLabelText(/last name/i)
    const emailInput = screen.getByLabelText(/email/i)
    const messageInput = screen.getByLabelText(/message/i)

    fireEvent.change(firstNameInput, { target: { value: 'Danny' } })
    fireEvent.change(lastNameInput, { target: { value: 'Burke' } })
    fireEvent.change(emailInput, { target: { value: 'bluebill1049@hotmail.com' }})
    fireEvent.change(messageInput, { target: { value: 'please work dear sweet god please work'}})

    const submitButton = screen.getByRole('button')
    fireEvent.click(submitButton)
    
    // const newPerson = screen.findByText(/junior/i)

    const result = await screen.findByTestId('result')
    console.log("result", result)
    expect(result).toBeInTheDocument()
    

})