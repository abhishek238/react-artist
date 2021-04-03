const INITIAL_STATE = {
    arts: [
        {
            id: 8,
            name: 'The Birth of Venus',
            price: 613.5,
            imageUrl: '8.jpeg',
            artist: {
                name: 'Andy Warhol',
                imageUrl: 'andy-warhol.jpeg',
            }
        },
        {
            id: 7,
            name: 'Girl With a Pearl Earring',
            price: 531.5,
            imageUrl: '7.jpeg',
            artist: {
                name: 'Pablo Picasso',
                imageUrl: 'pablo-picasso.jpeg',
            }
        },
        {
            id: 2,
            name: 'The Last Supper',
            price: 1346,
            imageUrl: '2.jpeg',
            artist: {
                name: 'Vincent van Gogh',
                imageUrl: 'vincent-van-gogh.jpeg',
            }
        },
        {
            id: 3,
            name: 'The Starry Night',
            price: 3.5,
            imageUrl: '3.jpeg',
            artist: {
                name: 'Leonardo da Vinci',
                imageUrl: 'leonardo-da-vinci.jpeg',
            }
        },
        {
            id: 4,
            name: 'The Scream',
            price: 134,
            imageUrl: '4.jpeg',
            artist: {
                name: 'Michelangelo',
                imageUrl: 'michelangelo.jpeg',
            }
        },
        {
            id: 5,
            name: 'Guernica',
            price: 99.9,
            imageUrl: '5.jpeg',
            artist: {
                name: 'Henri Matisse',
                imageUrl: 'henri-matisse.jpeg',
            }
        },
        {
            id: 6,
            name: 'The Kiss',
            price: 446.5,
            imageUrl: '6.jpeg',
            artist: {
                name: 'Jackson Pollock',
                imageUrl: 'jackson-pollock.jpeg',
            }
        },
        {
            id: 1,
            name: 'Mona Lisa',
            price: 54.5,
            imageUrl: '1.jpeg',
            artist: {
                name: 'Edvard Munch',
                imageUrl: 'edvard-munch.jpeg',
            }
        },
        {
            id: 11,
            name: 'The Starry Night',
            price: 3.5,
            imageUrl: '3.jpeg',
            artist: {
                name: 'Michelangelo',
                imageUrl: 'michelangelo.jpeg',
            }
        },
        {
            id: 12,
            name: 'The Scream',
            price: 134,
            imageUrl: '4.jpeg',
            artist: {
                name: 'Michelangelo',
                imageUrl: 'michelangelo.jpeg',
            }
        },
    ],
};

const artReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default artReducer;