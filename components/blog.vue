<template lang="pug">
    main
        img(:src="require(`../assets/img/${this.img}`)", :alt="this.h1")   
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