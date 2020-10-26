export const carouselSort = (products: Product[], sortType: string) => {
  switch (sortType) {
    case 'hotPrice':
      return [...products]
        .sort((a: Product, b: Product): number => (
          ((b.discount / 100) * b.price) - ((a.discount / 100) * a.price))
        );

    case 'newModels':
      return [...products]
        .sort((a: Product, b: Product): number => (
          a.age - b.age
        ));

    default:
      return products;
  }
};
