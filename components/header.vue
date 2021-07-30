<template lang="pug">
    header(v-bind:class="{'header--transparent':this.$route.path=='/'}")
        section.header__IndexLogo
            nuxt-link(:to="`/`")
        section.header__About-me
            nuxt-link(v-bind:class="{'a--i':this.$route.path!=='/'}" :to="`/acercaDeMi`") Sobre mi    
        nav.header__icon-container
            a(href="https://www.facebook.com/sebastian.povedaflorez")
                span(class="facebook") 
            a(href="https://www.instagram.com/sebastianpovedaflorez/?hl=es-la") 
                span(class="instagram")  
            a(href="https://www.linkedin.com/in/juan-sebastián-poveda-flórez-07b412212/") 
                span(class="link") 
            a(href="https://wa.link/1q8fsy") 
                span(class="wap") 
</template>
<script>
export default {
    name:'headerB',    
}
</script>
<style lang="scss" scoped>
    @import "../css/header.scss";
    @media (min-width: 1024px) {
        .header__icon-container{
            width: 35%;
        }       
    }
    @media(min-width: 1440px){
        .header__icon-container{
            width: 25%;
        } 
    }      
</style>