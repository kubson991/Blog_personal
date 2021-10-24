<template lang="pug">
    main
        nuxt-img(:src="this.img", 
        :alt="this.h1" , provider="cloudinary", format="webp")   
        h1 {{this.h1}}
        p {{this.p}} 
        p {{this.p2}}
</template>
<script>
export default {
    name:'main_blog',
    props:{
        img:'',
        h1:"",
        p:"",
        p2:""
    },
}
</script>
<style lang="scss" scoped>
    @import "../css/miBlog.scss";
</style>