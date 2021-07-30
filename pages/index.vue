<template lang="pug">
    section.pantalla    
        headerB
        main   
            nuxt-link.main__boton-index( :to="`/blogs`") Entra ya
</template>
<script>
import headerB from '../components/header.vue'
export default {
    components:{headerB},
    name:'index',
    data(){
        return{
        }
    },
}
</script>
<style lang="scss" scoped>
    @import "../css/index.scss";

</style>