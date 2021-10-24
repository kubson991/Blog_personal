<template lang="pug">
div.M1
    div.M2
        div.M3
            div.M4
                nuxt-img(:src="this.certificacion", alt="certificado")    
</template>
<script>
export default {
    name:'marco',
    props:{
        certificacion:''
    },   
}
</script>
<style lang="scss" scoped>
    @import "../css/marco.scss";
</style>