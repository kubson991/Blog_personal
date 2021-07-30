<template lang="pug">
    article    
        img(:src="require(`../assets/img/${this.article.imagen}`)", :alt="this.article.alt")  
        h1 {{article.h1}}
        p {{article.p}}
        NuxtLink(to=`/`) Leer mas    
</template>
<script>
export default {
    name:"articles",
    props:{
        article:Object
    },
}
</script>
<style lang="scss" scoped>
    @import "../css/article.scss";
    @media(min-width: 1028px){
        article{height: 500px;}        
    }
</style>