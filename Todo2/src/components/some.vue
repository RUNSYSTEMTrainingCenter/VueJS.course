<template>
    <div>
        <input v-model="inp" type="text" @input="dothat" />
        <p>Reversed input: {{ reversedinp }}</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            inp: '',
            reversedinp: ''
        }
    },
    methods: {
        dothat() {
            this.reversedinp = this.inp.split('').reverse().join('');
        }
    }
}
</script>
