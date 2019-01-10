new Vue({
    el: '#desafio',
    data: {
        destaque: true,
        encolher: false,
        classeCSS: '',
        classeCSS2: '',
        styleCSS: '',
        styleProgressCSS: {
            height: '20px',
            width: '0px',
            background: 'blue',
        },
        hide: false
    },
    methods: {
        iniciarEfeito() {
            setInterval(() => {
                this.destaque = !this.destaque;
                this.encolher = !this.encolher;
            }, 200);
        },
        startProgress() {
            let valor = 0;

            let clear = setInterval(() => {

                valor += 10;

                this.styleProgressCSS.width = `${valor}px`;

                if (valor === 100) clearInterval(clear);
            }, 200);
        },
        setHide(event) {
            this.hide = event.target.value === 'true' ? true : event.target.value === 'false' ? false : '';
        }
    }
})
