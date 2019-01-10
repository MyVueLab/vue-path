

new Vue({
    el: '#desafio',
    data: {
        valor: 0,
    },
    computed: {
        resultado() {
            return this.valor !== 37 ? 'Valor Diferente' : 'Valor Igual';
        }
    },
    /*
        Só dispara quando há uma mudança de valor
        na propriedade informada seja do data ou do
        computed
    */
    watch: {
        resultado(novo, antigo) {
            setTimeout(() => {
                this.valor = 0;
            }, 5000);
        }
    },
})
