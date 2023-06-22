const adress = document.querySelector('.cart__address');
export const getAddress = async (z) => {
  if (!z) {
    return alert('CEP não encontrado');
  }
  const a = [
    `https://cep.awesomeapi.com.br/json/${z}`,
    `https://brasilapi.com.br/api/cep/v2/${z}`,
  ];

  const fa = a.map((info) => fetch(info));

  const promises = await Promise.any(fa);

  const retorna = await promises.json();

  console.log(retorna);

  return retorna;
};
export const searchCep = async () => {
  try {
    const valorcep = document.querySelector('.cep-input').value;

    const valor = await getAddress(valorcep);

    const { address, district, city, state } = valor;

    adress.innerHTML = `${address} - ${district} - ${city} - ${state}`;
  } catch (error) {
    adress.innerHTML = 'CEP não encontrado';
  }
};
