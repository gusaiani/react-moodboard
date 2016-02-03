const initialBoardItems = {
  items: [
    {
      image: 'product1.png',
      name: 'Product 1',
      brand: 'Cool Brand One',
      price: '100.00',
      tiling: 'two-by-two'
    },
    {
      container: true,
      tiling: 'one-by-two',
      items: [
        {
          name: 'Product 2',
          image: 'product2.png',
          brand: 'Cool Brand Two',
          price: '100.00',
          tiling: 'one-by-one'
        },
        {
          name: 'Product 3',
          image: 'product3.png',
          brand: 'Cool Brand Three',
          price: '100.00',
          tiling: 'one-by-one'
        }
      ]
    },
    {
      name: 'Product 4',
      image: 'product4.png',
      brand: 'Cool Brand Four',
      price: '100.00',
      tiling: 'two-by-two'
    },
    {
      container: true,
      tiling: 'one-by-two',
      items: [
        {
          name: 'Product 5',
          image: 'product5.png',
          brand: 'Cool Brand Five',
          price: '100.00',
          tiling: 'one-by-one'
        },
        {
          name: 'Product 6',
          image: 'product6.png',
          brand: 'Cool Brand Six',
          price: '100.00',
          tiling: 'one-by-one'
        }
      ]
    },
    {
      name: 'Product 7',
      image: 'product7.png',
      brand: 'Cool Brand Seven',
      price: '100.00',
      tiling: 'two-by-two'
    },
    {
      name: 'Product 8',
      image: 'product8.png',
      brand: 'Cool Brand Eight',
      price: '100.00',
      tiling: 'two-by-two'
    }
  ]
}

export default function boardItems(state = initialBoardItems, action) {
  return state
}
