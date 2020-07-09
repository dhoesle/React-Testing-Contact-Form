import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ContactForm from './ContactForm'

test('ContactForm displays new contact to the screen', () => {
    render(<ContactForm />)

    const firstNameInput = screen.getByLabelText(/first name/i)
    const lastNameInput = screen.getByText(/last name/i)
    const emailInput = screen.getByText(/email/i)
    const messageInput = screen.getByText(/message/i)

    fireEvent.change(firstNameInput, { target: { value: 'Dan' } })
    // fireEvent.change(lastNameInput, { target: { value: 'Dan' } })
    // fireEvent.change(emailInput, { target: { value: 'Dan' } })
    // fireEvent.change(messageInput, { target: { value: 'Dan' })

    // const submitButton = screen.getByText(/submit/i)
})