new Vue({
    el: '#desafio',
    data: {
        valor: '',
    },
    methods: {
        exibirAlerta() {
            alert('Alerta!!!');
        },
        printValue(event) {
            this.valor = event.target.value;
        }
    }
})