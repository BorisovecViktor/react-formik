const API_URL = 'https://borisovecviktor.github.io/react_phone-catalog/api';

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${API_URL}/products.json`);

  return response.json();
};
