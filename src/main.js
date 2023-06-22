import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList, fetchProduct } from './helpers/fetchFunctions';
import {
  createProductElement, createCartProductElement } from './helpers/shopFunctions';
import './style.css';
import { getSavedCartIDs } from './helpers/cartFunctions';

const itens = document.querySelector('.products');

const createError = () => {
  const e = document.createElement('p');
  e.innerHTML = 'Algum erro ocorreu, recarregue a página e tente novamente';
  e.classList.add('error');
  itens.appendChild(e);
};

const funcCarregando = () => {
  const p = document.createElement('p');
  p.innerHTML = 'carregando...';
  p.classList.add('loading');
  itens.appendChild(p);
};

funcCarregando();

const clear = () => {
  itens.innerHTML = '';
};

const apiProd = async () => {
  try {
    const c = await fetchProductsList('computador');
    clear();
    const array = c.forEach((product) => {
      const p = createProductElement(product);
      itens.appendChild(p);
    });
    return array;
  } catch (error) {
    clear();
    createError();
  }
};

apiProd();
fetchProductsList('computador').then((info) => (info));

const savels = async () => {
  const pega = getSavedCartIDs();
  pega.forEach(async (element) => {
    const pegaItem = await fetchProduct(element);
    const pegaCarrinho = createCartProductElement(pegaItem);
    const list = document.querySelector('.cart__products');
    list.appendChild(pegaCarrinho);
  });
};

window.onload = () => {
  savels();
};

document.querySelector('.cep-button').addEventListener('click', searchCep);
