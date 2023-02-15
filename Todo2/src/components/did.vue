<template>
    <div class="my-component">
        <div>{{ message.text }}</div>
        <div><button @click="changeMessage">Click me</button></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: {
                type: 'greeng',
                text: 'How you?'
            }
        }
    },
    methods: {
        changeMessage() {
            this.message.text = 'this is n message'
        }
    },
    watch: {
        message: {
            handler: function () {
                console.log('someti canged')
            },
            deep: true
        }
    }
}
</script>