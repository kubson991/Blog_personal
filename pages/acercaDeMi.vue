<template lang="pug">
    div
        headerB
        main
            section.main__perfil 
                img(src="https://i.imgur.com/LthqJjb.png", alt="foto de mi")
                article
                    h1  ¿Quién soy?
                    p Estudiante de decimo semestre de la universidad Autónoma de Bucaramanga con nivel intermedio de inglés y buenas aptitudes en el trabajo colaborativo.
                    p Soy una persona responsable, puntual, autodidacta, creativa y con muy buena disposición para cualquier tarea que se me asigne. Actualmente me estoy certificando en desarrollo web con Platzi. 
                    p Me interesa principalmente trabajar en proyectos nuevos y con un enfoque social, en el área de desarrollo web principalmente como Frontend developer. 
                    p Actualmente soy practicante en Carvajal tecnología y servicios, siendo a su vez futuro miembro del equipo del área de innovación.
            h2 Mis certificaciones
            section.main__certificaciones
                marco(v-for="certificado in certificaciones" :certificacion="certificado" :key="certificado")
        footerB                
</template>
<script>
    import headerB from '../components/header.vue'
    import footerB from '../components/footer.vue'
    import marco from '../components/marcos.vue'
    export default {
        components:{headerB,footerB,marco}, 
            data(){
            return{
                certificaciones:["https://i.imgur.com/foUVgC8.jpg","https://i.imgur.com/Ure1lKA.jpg","https://i.imgur.com/Z80Zh97.jpg","https://i.imgur.com/mJKrwBD.jpg","https://i.imgur.com/0Kxfzpp.jpg","https://i.imgur.com/MJ1lwQL.jpg","https://i.imgur.com/Rf3mDfX.jpg","https://i.imgur.com/c1TAeDc.jpg","https://i.imgur.com/HFzTZX6.jpg","https://i.imgur.com/3ZYmstD.jpg","https://i.imgur.com/hDbf6tU.jpg","https://i.imgur.com/SIEafh3.jpg","https://i.imgur.com/boY4Hgn.jpg","https://i.imgur.com/B2Qa2wN.jpg","https://i.imgur.com/6tZauxL.jpg","https://i.imgur.com/uQC6aj6.jpg","https://i.imgur.com/s6ENlii.jpg","https://i.imgur.com/c8I5sx0.jpg","https://i.imgur.com/9fCynSO.jpg","https://i.imgur.com/2d4h3do.jpg","https://i.imgur.com/gnAWuS7.jpg","https://i.imgur.com/xwPG08y.jpg","https://i.imgur.com/t5sqNkO.jpg","https://i.imgur.com/lz9csUT.jpg","https://i.imgur.com/uBj98X1.jpg","https://i.imgur.com/nafN6YH.png","https://i.imgur.com/1yJUzrp.jpg","https://i.imgur.com/G9iIh6X.jpeg"]                
            }    
        }
    }
</script>
<style lang="scss" scoped>
    @import "../css/acercaMi.scss";
    @media(min-width: 1024px){
        .main__perfil{
            img{
                width: 20%;
                max-height: 360px;
            }
            article{
                width: 60%;
            }
        }
    }
    @media(min-width: 1550px){
        .main__certificaciones{
            grid-template-columns:repeat(auto-fit,minmax(450px,1fr));
        }
    }
</style>