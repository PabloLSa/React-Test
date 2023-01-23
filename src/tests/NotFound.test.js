import { screen } from '@testing-library/react';
import React from 'react';
import { NotFound } from '../pages';
import renderWithRouter from '../renderWithRouter';

describe('Testando Not Found', () => {
  it('', () => {
    renderWithRouter(<NotFound />);
    // verifiando se há na tela o texto de página não encontrada, quando a página solicitada nãop existir
    const pageResqueste = screen.getByText(/Page requested not found/i);
    expect(pageResqueste).toBeInTheDocument();
    // verifiando se há na tela o texto de página não encontrada, quando a página solicitada nãop existir
    const imagePageNotFound = screen.getByAltText('Pikachu crying because the page requested was not found');
    expect(imagePageNotFound.src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
