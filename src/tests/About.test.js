import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import React from 'react';
import { About } from '../pages';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente <About.js />.', () => {
  it('link texto Home', () => {
    renderWithRouter(<About />);
    const aboutPodex = screen.getByText(/About Pokédex/i);
    expect(aboutPodex).toBeInTheDocument();
  });

  it('Verificando paragrafo 1 com texto', () => {
    renderWithRouter(<About />);
    const paragrafo1 = screen.getByText('This application simulates a Pokédex, a digital encyclopedia containing all Pokémon');
    expect(paragrafo1).toBeInTheDocument();
  });

  it('Verificando paragrafo 2 com texto', () => {
    renderWithRouter(<About />);
    const paragrafo2 = screen.getByText('One can filter Pokémon by type, and see more details for each one of them');
    expect(paragrafo2).toBeInTheDocument();
  });
  it('Testando se a página contém a seguinte imagem de uma Pokédex ', () => {
    renderWithRouter(<About />);
    const img = screen.getByAltText('Pokédex');
    expect(img.src).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
