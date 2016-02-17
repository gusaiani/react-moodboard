const initialBoardItems = {
  items: [
    {
      id: 1,
      name: 'Product 1',
      image: 'product1.png',
      brand: 'Cool Brand One',
      price: '20.00',
      tiling: 'two-by-two'
    },
    {
      container: true,
      tiling: 'one-by-two',
      items: [
        {
          id: 2,
          name: 'Product 2',
          image: 'product2.png',
          brand: 'Cool Brand Two',
          price: '100.00',
          tiling: 'one-by-one'
        },
        {
          id: 3,
          name: 'Product 3',
          image: 'product3.png',
          brand: 'Cool Brand Three',
          price: '70.00',
          tiling: 'one-by-one'
        }
      ]
    },
    {
      id: 4,
      name: 'Product 4',
      image: 'product4.png',
      brand: 'Cool Brand Four',
      price: '35.00',
      tiling: 'two-by-two'
    },
    {
      container: true,
      tiling: 'one-by-two',
      items: [
        {
          id: 5,
          name: 'Product 5',
          image: 'product5.png',
          brand: 'Cool Brand Five',
          price: '48.00',
          tiling: 'one-by-one'
        },
        {
          id: 6,
          name: 'Product 6',
          image: 'product6.png',
          brand: 'Cool Brand Six',
          price: '99.00',
          tiling: 'one-by-one'
        }
      ]
    },
    {
      id: 7,
      name: 'Product 7',
      image: 'product7.png',
      brand: 'Cool Brand Seven',
      price: '4.00',
      tiling: 'two-by-two'
    },
    {
      id: 8,
      name: 'Product 8',
      image: 'product8.png',
      brand: 'Cool Brand Eight',
      price: '832.00',
      tiling: 'two-by-two'
    }
  ]
}

export default function boardItems(state = initialBoardItems, action) {
  return state
}
