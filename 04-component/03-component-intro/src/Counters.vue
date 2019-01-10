<template>
    <div>
        <counter v-for="component in 5" :key="component"/>
    </div>
</template>

<script>
import Counter from './Counter.vue'

export default {
    components: {
        Counter
    }
}
</script>

<style>

</style>
