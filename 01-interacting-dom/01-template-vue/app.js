new Vue({
    el: '#desafio',
    data: {
        name: 'Daniel',
        age: 28,
        imageUrl: 'https://image.freepik.com/free-photo/sitting-guitar-player_23-2147624372.jpg'
    },
    methods: {
        getRandom() {
            return Math.random();
        }
    }
})