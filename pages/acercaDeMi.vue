<template lang="pug">
    div
        headerB
        main
            section.main__perfil 
                nuxt-img(src="v1635132021/blogPersonal/foto_de_mi_dukgol.jpg", alt="blog" , provider="cloudinary", format="webp")
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
                certificaciones:["v1636150644/blogPersonal/certificados/diploma-dom-1_q7swzc.png","v1635127929/blogPersonal/certificados/diploma-webpack-1_pav10z.png","v1635127927/blogPersonal/certificados/diploma-vuejs2-1_foprbh.png","v1635127925/blogPersonal/certificados/diploma-transformaciones-transiciones-css-1_hbgpyd.png","v1635127923/blogPersonal/certificados/diploma-terminal-1_mlmgot.png","v1635127921/blogPersonal/certificados/diploma-scope-1_oo85im.png","v1635127919/blogPersonal/certificados/diploma-programacion-basica-1_jlyb9j.png","v1635127917/blogPersonal/certificados/diploma-prework-windows-1_muxiqc.png","v1635127915/blogPersonal/certificados/diploma-preprocesadores-1_okiqx6.png","v1635127913/blogPersonal/certificados/diploma-practico-css-1_sup7bz.png","v1635127909/blogPersonal/certificados/diploma-npm-1_re9lv1.png","v1635127906/blogPersonal/certificados/diploma-mobile-first-1_ipm8l0.png","v1635127902/blogPersonal/certificados/diploma-js-jest-2019-1_sxo9uk.png","v1635127898/blogPersonal/certificados/diploma-javascript-profesional-1_htk2vo.png","v1635127894/blogPersonal/certificados/diploma-javascript-practico-1_jekp0o.png","v1635127891/blogPersonal/certificados/diploma-javascript-poo-intermedio-1_a0fptk.png","v1635127888/blogPersonal/certificados/diploma-javascript-poo-1_tib5ge.png","v1635127884/blogPersonal/certificados/diploma-javascript-navegador-1_e1kh0t.png","v1635127880/blogPersonal/certificados/diploma-html-practico-1_o5v7dt.png","v1635127876/blogPersonal/certificados/diploma-html-css-1_dkvuah.png","v1635127873/blogPersonal/certificados/diploma-git-github-1_vkty5m.png","v1635127869/blogPersonal/certificados/diploma-fundamentos-javascript-2018-1_e84jw5.png","v1635127865/blogPersonal/certificados/diploma-frontend-developer-2019-1_momszr.png","v1635127861/blogPersonal/certificados/diploma-flexbox-css-grid-1_nbiljf.png","v1635127858/blogPersonal/certificados/diploma-ecmascript-6-1_lypcmz.png","v1635127855/blogPersonal/certificados/diploma-devtools_1_-1_umthmz.png","v1635127851/blogPersonal/certificados/diploma-css-grid-layout-1_a2sez7.png","v1635127847/blogPersonal/certificados/diploma-basico-javascript-1_nmoiqw.png","v1635127844/blogPersonal/certificados/diploma-asincronismo-js-1_cs6czk.png","v1635127840/blogPersonal/certificados/diploma-animaciones-css-practico_1_-1_mjrpad.png","v1635127839/blogPersonal/certificados/diploma-animaciones-css-1_pxoiew.png"]                
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