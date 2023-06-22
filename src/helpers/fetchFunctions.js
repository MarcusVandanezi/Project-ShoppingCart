export const fetchProduct = async (x) => {
  if (!x) {
    throw new Error('ID não informado');
  }
  const URL = `https://api.mercadolibre.com/items/${x}`;
  const fetchUrl = await fetch(URL);
  const info = fetchUrl.json();
  return info.then((infos) => infos);
};

export const fetchProductsList = async (x) => {
  if (!x) {
    throw new Error('Termo de busca não informado');
  }
  const URL = `https://api.mercadolibre.com/sites/MLB/search?q=${x}`;
  const fetchUrl = await fetch(URL);
  const info = fetchUrl.json();
  return info.then((infos) => infos.results);
};
