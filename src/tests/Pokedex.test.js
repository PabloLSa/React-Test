import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testando o componente <Pokedex.js />', () => {
  it('Testando se a página contém um heading h2 com o texto Encountered Pokémon', () => {
    renderWithRouter(<App />);
    // Fazendo o teste se há na tela o texto Encountered Pokémon
    const enconteredPokemon = screen.getByText(/Encountered Pokémon/i);
    expect(enconteredPokemon).toBeInTheDocument();
  });

  it('Os próximos Pokémon da lista devem ser mostrados, um a um, ao clicar sucessivamente no botão', () => {
    renderWithRouter(<App />);
    const proxPokemon = screen.getByText(/Próximo Pokémon/i);
    expect(proxPokemon).toBeInTheDocument();
    userEvent.click(proxPokemon);
    const pokemon = screen.getByText(/Charmander/i); // Fazendo o teste se a cada click do botao aparece o proxi Pokeon
    expect(pokemon).toBeInTheDocument();
    userEvent.click(proxPokemon);
    const pokemon1 = screen.getByText(/Caterpie/i);
    expect(pokemon1).toBeInTheDocument();
    userEvent.click(proxPokemon);
    const pokemon2 = screen.getByText(/Ekans/i);
    expect(pokemon2).toBeInTheDocument();
    userEvent.click(proxPokemon);
    const pokemon3 = screen.getByText(/Alakazam/i);
    expect(pokemon3).toBeInTheDocument();
    userEvent.click(proxPokemon);
    const pokemon4 = screen.getByText(/Mew/i);
    expect(pokemon4).toBeInTheDocument();
    userEvent.click(proxPokemon);
    const pokemon5 = screen.getByText(/Rapidash/i);
    expect(pokemon5).toBeInTheDocument();
    userEvent.click(proxPokemon);
    const pokemon6 = screen.getByText(/Snorlax/i);
    expect(pokemon6).toBeInTheDocument();
    userEvent.click(proxPokemon);
    const pokemon7 = screen.getByText(/Dragonair/i);
    expect(pokemon7).toBeInTheDocument();
    userEvent.click(proxPokemon);
    const pokemon8 = screen.getByText(/Pikachu/i);
    expect(pokemon8).toBeInTheDocument();
  });
  it('Teste se é mostrado apenas um Pokémon por vez;', () => { // Fazendo o teste se é mostrado um Pokémon por vez
    renderWithRouter(<App />);
    const imagem = screen.getByAltText('Pikachu sprite');
    expect(imagem).toBeInTheDocument();
  });
  it('Testando se a Pokédex tem os botões de filtro:  ', () => {
    renderWithRouter(<App />);
    const pokType = 'pokemon-type';
    const proxPokemon = screen.getByText(/Próximo Pokémon/i);
    userEvent.click(proxPokemon); // click pŕox pokemon
    const bttAll = screen.getByRole('button', { name: /All/i }); // Testando se a poekedex tem botao de reset
    userEvent.click(bttAll); // click btt All
    const pikaChu = screen.getByText('Pikachu');
    expect(pikaChu).toBeInTheDocument();
    const bot1 = screen.getAllByTestId('pokemon-type-button');
    expect(bot1).toHaveLength(7); // testando se o pokedex tem botoes de filtro
    expect(bot1[0]).toHaveTextContent(/Electric/i);
    userEvent.click(bot1[0]);
    const eletric = screen.getByTestId(pokType);
    expect(eletric.innerHTML).toContain('Electric');
    userEvent.click(bot1[1]);
    const fire = screen.getByTestId(pokType);
    expect(fire.innerHTML).toContain('Fire');
    userEvent.click(bot1[2]); // click btt All
    const bug = screen.getByTestId(pokType);
    expect(bug.innerHTML).toContain('Bug');
    userEvent.click(bot1[3]); // click btt All
    const poison = screen.getByTestId(pokType);
    expect(poison.innerHTML).toContain('Poison');
    userEvent.click(bot1[4]); // click btt All
    const psychic = screen.getByTestId(pokType);
    expect(psychic.innerHTML).toContain('Psychic');
    userEvent.click(bot1[5]); // click btt All
    const normal = screen.getByTestId(pokType);
    expect(normal.innerHTML).toContain('Normal');
    userEvent.click(bot1[6]); // click btt All
    const dragon = screen.getByTestId(pokType);
    expect(dragon.innerHTML).toContain('Dragon');
  });
  it('Testando para ver se o botão All precisa está sempre visível', () => {
    renderWithRouter(<App />);
    const bttAll = screen.getByText(/All/i); // Testando se o botao All está sempre visível
    expect(bttAll).toBeVisible();
  });
  it('Testando se a Pokédex contém um botão para resetar o filtro', () => {
    renderWithRouter(<App />);
    const pikachu = screen.getByText(/Pikachu/i);
    expect(pikachu).toBeInTheDocument();
    const fire = screen.getByText(/Fire/i);
    userEvent.click(fire);
    const charMander = screen.getByText(/Charmander/i);
    expect(charMander).toBeInTheDocument();
    const proxPokemon = screen.getByText(/Próximo Pokémon/i); // Testando se a poekedex tem botao de reset
    userEvent.click(proxPokemon); // click pŕox pokemon
    const rapiDash = screen.getByText(/Rapidash/i);
    expect(rapiDash).toBeInTheDocument();
  });
  it('Testando se aocarregar a página, o filtro selecionado deverá ser All.', () => {
    renderWithRouter(<App />);
    const bttAll = screen.getByRole('button', { name: /All/i }); // Testando se a poekedex tem botao de reset
    expect(bttAll).toHaveTextContent('All');
    userEvent.click(bttAll); // click btt All
    const proxPokemon = screen.getByText(/Próximo Pokémon/i); // Testando se a poekedex tem botao de reset
    userEvent.click(proxPokemon); // click pŕox pokemon
    userEvent.click(proxPokemon); // click pŕox pokemon
    userEvent.click(proxPokemon); // click pŕox pokemon
    userEvent.click(proxPokemon); // click pŕox pokemon
    userEvent.click(proxPokemon); // click pŕox pokemon
    userEvent.click(proxPokemon); // click pŕox pokemon
    userEvent.click(proxPokemon); // click pŕox pokemon
    userEvent.click(proxPokemon); // click pŕox pokemon
    userEvent.click(proxPokemon); // click pŕox pokemon
    const pikachu = screen.getByText(/Pikachu/i);
    expect(pikachu).toBeInTheDocument();
  });
});
