<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome é <strong>{{ name }}</strong></p>
        <p>Idade é <strong>{{ idade }}</strong></p>
        <button @click="reiniciarNome">Reiniciar nome</button>
        <button @click="reiniciarFn">Resetar Nome</button>
    </div>
</template>

<script>
import EventBus from '@/EventBus.js';

export default {
    props: {
        name: {
            type: String,
            // required: true,
            default: 'Anônimo'
        },
        reiniciarFn: Function,
        idade: Number
    },
    methods: {
        reiniciarNome() {
            this.$emit("nomeMudou", "João");
        }
    },
    created() {
        EventBus.$on('idadeMudou', idade => this.idade = idade);
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
