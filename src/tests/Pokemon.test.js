import { fireEvent } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Requisito 6', () => {
  it('Teste se é renderizado um card com as informações de determinado Pokémon:  O nome correto do Pokémon deve ser mostrado na tela;   O tipo correto do Pokémon deve ser mostrado na tela; O peso médio do Pokémon deve ser exibido com um texto no formato Average weight: value> <measurementUnit>; onde <value> e <measurementUnit> são, respectivamente, o peso médio do Pokémon e sua unidade de medida; A imagem do Pokémon deve ser exibida. Ela deve conter um atributo src com a URL da imagem e um atributo alt com o texto <name> sprite,nde <name> é o nome do Pokémon.', () => {
    const { getByText, getAllByText, getByAltText } = renderWithRouter(<App />);
    const pokemonType = getAllByText('Electric'); // 0
    fireEvent.click(pokemonType[1]);
    const pokemonName = getByText('Pikachu');
    const pokemonWeigth = getByText(/Average weight: 6.0 kg/i);
    const pokemonImg = getByAltText('Pikachu sprite');
    expect(pokemonImg).toHaveAttribute('src', 'https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_025_m.png');
    expect(pokemonImg).toHaveAttribute('alt', 'Pikachu sprite');
    expect(pokemonName && pokemonWeigth && pokemonType[0]).toBeInTheDocument();
  });
  it('Teste se o card do Pokémon indicado na Pokédex contém um link de navegação para exibir detalhes deste Pokémon. O link deve possuir a URL /pokemon/<id>, onde <id> é o id do Pokémon exibido;', () => {
    const { getByText } = renderWithRouter(<App />);
    const linkDetail = getByText(/more details/i);
    fireEvent.click(linkDetail);
    expect(linkDetail.href).toBe('http://localhost/pokemon/25');
  });
  it('Teste se ao clicar no link de navegação do Pokémon, é feito o redirecionamento da aplicação para a página de detalhes de Pokémon;', () => {
    const { getByText } = renderWithRouter(<App />);
    const linkDetail = getByText(/more details/i);
    fireEvent.click(linkDetail);
    const detailPage = getByText(/details/i);
    expect(detailPage).toBeInTheDocument();
  });
  it('Teste também se a URL exibida no navegador muda para /pokemon/<id>, onde <id> é o id do Pokémon cujos detalhes se deseja ver;', () => {
    const { getByText, history } = renderWithRouter(<App />);
    const linkDetail = getByText(/more details/i);
    fireEvent.click(linkDetail);
    expect(history.location.pathname).toBe('/pokemon/25');
  });
  it('Teste se existe um ícone de estrela nos Pokémon favoritados: O ícone deve ser uma imagem com o atributo src contendo o caminho /star-icon.svg; A imagem deve ter o atributo alt igual a <Pokemon> is marked as favorite, onde <Pokemon> é o nome do Pokémon exibido.', () => {
    const { getByText, getByLabelText, getByAltText } = renderWithRouter(<App />);
    const linkDetails = getByText(/more details/i);
    fireEvent.click(linkDetails);
    const checkbox = getByLabelText('Pokémon favoritado?');
    fireEvent.click(checkbox);
    const littleStar = getByAltText('Pikachu is marked as favorite');
    expect(littleStar.src).toBe('http://localhost/star-icon.svg');
  });
});
