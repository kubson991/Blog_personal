<template lang="pug">
div.M1
    div.M2
        div.M3
            div.M4
                img(:src="this.certificacion", alt="certificado")    
</template>
<script>
export default {
    name:'marco',
    props:{
    },
    props:{
        certificacion:''
    },   
}
</script>
<style lang="scss" scoped>
    @import "../css/marco.scss";
</style>