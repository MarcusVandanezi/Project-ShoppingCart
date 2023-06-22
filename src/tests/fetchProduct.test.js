import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

describe('Teste a função fetchProduct', () => {
  it('se é func', () => {
    expect(typeof fetchProduct).toBe('function')
  });
  it('se é chamado', async () => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalled();
  });
  it('se é chamado correto', async () => {
    await fetchProduct('MLB1405519561')
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1405519561');
  });
  it('se o retorno é  obj product', async () => {
    expect(await fetchProduct('MLB1405519561')).toEqual(product)
  });
  it('retorna erro', async () => {
    await expect(fetchProduct()).rejects.toThrow('ID não informado');
  });
});
