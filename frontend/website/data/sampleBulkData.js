let sampleBulkData = [
    {
        image: '',
        type: 'podcast',
        title: 'Nome do Episódio',
        createdAt: null,
        commentsAmount: 13,
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
    {
        image: '',
        type: 'podcast',
        title: 'Nome do Episódio',
        createdAt: null,
        commentsAmount: 2,
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
    {
        image: '',
        type: 'podcast',
        title: 'Nome do Episódio',
        createdAt: null,
        commentsAmount: 5,
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
    {
        image: '',
        type: 'podcast',
        title: 'Nome do Episódio',
        createdAt: null,
        commentsAmount: 1,
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
    {
        image: '',
        type: 'podcast',
        title: 'Nome do Episódio',
        createdAt: null,
        commentsAmount: 28,
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
    {
        image: '',
        type: 'podcast',
        title: 'Nome do Episódio',
        createdAt: null,
        commentsAmount: 15,
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
    {
        image: '',
        type: 'podcast',
        title: 'Nome do Episódio',
        createdAt: null,
        commentsAmount: 78,
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
    {
        image: '',
        type: 'podcast',
        title: 'Nome do Episódio',
        createdAt: null,
        commentsAmount: 29,
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
    {
        image: '',
        type: 'podcast',
        title: 'Nome do Episódio',
        createdAt: null,
        commentsAmount: 30,
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
];

sampleBulkData = sampleBulkData.map(x => ({...x, createdAt: new Date(+(new Date()) - Math.floor(Math.random()*10000000000))}));

export default sampleBulkData;