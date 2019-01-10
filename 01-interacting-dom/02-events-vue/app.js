new Vue({
    el: '#desafio',
    data: {
        valor: '',
    },
    methods: {
        exibirAlerta() {
            alert('Alerta!!!');
        },
        /*
            A propriedade event é nativa é vem automatica
            caso não seja passado nenhum parametro em sua chamada
        */
        printValue(event) {
            this.valor = event.target.value;
        }
    }
})
