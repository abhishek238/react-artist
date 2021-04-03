const INITIAL_STATE = {
    artists: [
        {
            id: 1,
            name: 'Andy Warhol',
            imageUrl: 'andy-warhol.jpeg',
        },
        {
            id: 2,
            name: 'Pablo Picasso',
            imageUrl: 'pablo-picasso.jpeg',
        },
        {
            id: 3,
            name: 'Vincent van Gogh',
            imageUrl: 'vincent-van-gogh.jpeg',
        },
        {
            id: 4,
            name: 'Leonardo da Vinci',
            imageUrl: 'leonardo-da-vinci.jpeg',
        },
        {
            id: 5,
            name: 'Michelangelo',
            imageUrl: 'michelangelo.jpeg',
        },
        {
            id: 6,
            name: 'Henri Matisse',
            imageUrl: 'henri-matisse.jpeg',
        },
        {
            id: 7,
            name: 'Jackson Pollock',
            imageUrl: 'jackson-pollock.jpeg',
        },
        {
            id: 8,
            name: 'Edvard Munch',
            imageUrl: 'edvard-munch.jpeg',
        }
    ]
};

const artistReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default artistReducer;
