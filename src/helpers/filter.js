export const categoriesFilter = (products: Product[], filterType: string) => {
  switch (filterType) {
    case 'phone':
      return [...products]
        .filter((product: Product) => (
          product.type === 'phone'
        ));

    case 'tablet':
      return [...products]
        .filter((product: Product) => (
          product.type === 'tablet'
        ));

    case 'accessories':
      return [...products]
        .filter((product: Product) => (
          product.type === 'accessories'
        ));

    default:
      return products;
  }
};
