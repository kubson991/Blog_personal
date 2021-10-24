<template lang="pug">
    section.pantalla
        headerB
        main
            section.main__principal
                img(:src="require('@/assets/img/BlogIndex.jpg')", alt="alt")
                article.principal__articulo
                    h1 Creacion de un blog profesional con el uso de dipslay Grid y Display Flex
                    p Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto impedit ab facilis temporibus consequatur magni ex optio a voluptatibus unde facere odit similique voluptatum deserunt architecto iste, accusantium minus aspernatur. Reprehenderit error, libero ut eos incidunt, ratione, reiciendis dolorem fugiat nulla veritatis earum optio neque laudantium vitae. Unde atque, fugiat rerum perferendis sapiente, non magnam earum aliquid, ad autem dolore.   
                    nuxt-link.boton-articulos(:to="`/blog/MiBlog`") Leer mas
            section.main__blogs
                h2 Mis proyectos
                div  
                    articles(v-for="article in articles" :article="article" :key="article.h1")     
        footerB
</template>
<script>
import headerB from '../components/header.vue'
import footerB from '../components/footer.vue'
import articles from '../components/articles.vue'
export default {
    components:{headerB,footerB,articles},
    name:'blogs',
    data(){
        return{
            articles:[
                {        
                    imagen:'facebookIcon.png',
                    alt:'PAPA',
                    h1:'maquetacion de patatavid',
                    p:'esto si es un lorem ipsum y noa mamadas muchas mas cosas vienen entre todo esto texto largo porque si xd lmaoalfnalfnakfnakjf',
                    to:'/'
                },
                {
                    imagen:'facebookIcon.png',
                    alt:'piedra papel y tijera',
                    h1:'Piedra papel o tijera con javaScript',
                    p:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eum officiis aliquam quaerat facere est minima voluptatem officia, tenetur sint aspernatur sequi tempora saepe similique. Inventore vitae quibusdam reiciendis illo',
                    to:'/'                    
                },
                {
                    imagen:'facebookIcon.png',
                    alt:'platziGames',
                    h1:'Maquetacion de sitio web estatico con preprocesadores',
                    p:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eum officiis aliquam quaerat facere est minima voluptatem officia, tenetur sint aspernatur sequi tempora saepe similique. Inventore vitae quibusdam reiciendis illo',
                    to:'/'                     
                },
                {
                    imagen:'facebookIcon.png',
                    alt:'platzi exchange',
                    h1:'creacion y despliegue de pagina acerca de criptomonedas',
                    p:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eum officiis aliquam quaerat facere est minima voluptatem officia, tenetur sint aspernatur sequi tempora saepe similique. Inventore vitae quibusdam reiciendis illo',
                    to:'/'                     
                },
                {
                    imagen:'facebookIcon.png',
                    alt:'Maquetacion de google',
                    h1:'maquetacion de google',
                    p:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eum officiis aliquam quaerat facere est minima voluptatem officia, tenetur sint aspernatur sequi tempora saepe similique. Inventore vitae quibusdam reiciendis illo',
                    to:'/'                     
                },                {
                    imagen:'facebookIcon.png',
                    alt:'maquetacion de wikipedia',
                    h1:'Maquetacion de wikipedia',
                    p:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eum officiis aliquam quaerat facere est minima voluptatem officia, tenetur sint aspernatur sequi tempora saepe similique. Inventore vitae quibusdam reiciendis illo',
                    to:'/'                     
                },                
                {
                    imagen:'facebookIcon.png',
                    alt:'Rick y Morty',
                    h1:'SWA de Rick y Morty',
                    p:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eum officiis aliquam quaerat facere est minima voluptatem officia, tenetur sint aspernatur sequi tempora saepe similique. Inventore vitae quibusdam reiciendis illo',
                    to:'/'                     
                },
                {
                    imagen:'facebookIcon.png',
                    alt:'reproductor',
                    h1:'maquetacion de reproductor movil usando dimorfismo',
                    p:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eum officiis aliquam quaerat facere est minima voluptatem officia, tenetur sint aspernatur sequi tempora saepe similique. Inventore vitae quibusdam reiciendis illo',
                    to:'/'                     
                }
            ]
        }
    },
}

</script>
<style lang="scss" scoped>
    @import "../css/blogs.scss";
        @media (min-width: 1024px) {
            .main__principal{
                justify-content: space-evenly;
               img{
                    width: 45%;
               }
                article{
                    width: 45%;
                }   
            }   
            .main__blogs{
                div{
                    grid-template-columns:repeat(auto-fit,minmax(450px,1fr));    
                }
            }
        }
</style>

 