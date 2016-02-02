const initialBoardItems = {
  items: [
    {
      name: 'Product 1',
      tiling: 'two-by-two'
    },
    {
      container: true,
      tiling: 'one-by-two',
      items: [
        {
          name: 'Product 2',
          tiling: 'one-by-one'
        },
        {
          name: 'Product 3',
          tiling: 'one-by-one'
        }
      ]
    },
    {
      name: 'Product 4',
      tiling: 'two-by-two'
    },
    {
      container: true,
      tiling: 'one-by-two',
      items: [
        {
          name: 'Product 5',
          tiling: 'one-by-one'
        },
        {
          name: 'Product 6',
          tiling: 'one-by-one'
        }
      ]
    },
    {
      name: 'Product 7',
      tiling: 'two-by-two'
    },
    {
      name: 'Product 8',
      tiling: 'two-by-two'
    }
  ]
}

export default function boardItems(state = initialBoardItems, action) {
  return state
}
