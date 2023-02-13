<script setup>
</script>
<template>
    <div>
        <button v-on:click="toggleVisibility('element1')">Toggle Element 1</button>
        <p v-if="visibility.element1">Element 1</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            visibility: {
                element1: true,
            }
        }
    },
    methods: {
        toggleVisibility(element) {
            this.visibility[element] = !this.visibility[element];
        }
    }
}
</script>