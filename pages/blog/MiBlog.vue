<template lang="pug">
    div
        headerB
        main_blog(:img="img" :h1="h1" :p="p" :p2="p2")
        section.main__correo
            img(src="../../assets/img/mail.png", alt="mail")
            div
                a(href="mailto:poveda1999@gmail.com") contactame
                p poveda1999@gmail.com 
        footerB
</template>
<script>
import headerB from '@/components/header.vue'
import footerB from '@/components/footer.vue'
import main_blog from '@/components/blog.vue'
export default {
    components:{headerB,footerB,main_blog},
    name:'blog', 
    data(){
        return{
            img:'v1635112679/blogPersonal/indexpage_vbluxj.png', //usando cloudinary
            h1:'papa',
            p:`exercitationem tempore voluptas rerum officiis! Provident quidem voluptas aspernatur ex? Obcaecati libero vitae ipsa, rerum fugit incidunt rem accusantium officiis maiores soluta molestiae sapiente atque aspernatur nesciunt veniam doloremque optio beatae ut ad iusto itaque culpa tempore aliquam laborum. Odit. Quae dolor a, modi repellat temporibus dolorum sed nemo molestias voluptas vel possimus, culpa architecto voluptatibus eius aliquid nesciunt officiis quaerat rerum blanditiis dolore corrupti numquam! Et nostrum quam molestiae! Corrupti, cum maiores natus quasi nobis, officiis quas, aliquam aut odit possimus obcaecati libero ipsum incidunt. Maxime consequuntur reiciendis accusantium distinctio blanditiis, maiores debitis rerum quo et cumque dolorem nam? Dolores ipsum iure sint maiores. Veniam fugiat recusandae qui. In eum error sunt accusamus nesciunt ut blanditiis odio tempora reiciendis nemo. Minus eligendi debitis magnam, delectus ad molestiae accusantium eum. Lorem ipsum dolor sit amet consectetur adipisicing elit.  `,
            p2:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo enim autem sunt illo harum neque illum deserunt! Repellat molestias, cupiditate voluptatibus non quam, nulla, ducimus doloribus ut magnam alias earum. Id placeat, asperiores eveniet, magnam nesciunt quos ipsam esse, neque iure a perspiciatis amet. Mollitia placeat ipsam vel quidem pariatur. Porro fuga nesciunt quidem accusamus maiores illo debitis aliquid dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quis nihil voluptatum beatae facere, nemo, error, nam quia ullam fuga eum? Dignissimos mollitia, facilis quis aut non sint ipsa nisi. Atque corrupti numquam maxime, dolorum, ullam, inventore illum expedita deleniti aspernatur ducimus dolores nemo? Laudantium error earum quam minima repudiandae neque natus eum deserunt et atque delectus, eaque, rem dolores! Magnam nemo placeat molestias distinctio! Mollitia veritatis optio magnam minus nulla atque voluptatibus perspiciatis voluptatum ipsa praesentium molestiae tempora at, nesciunt in deleniti. Dolore possimus corporis rem officia! Sunt, sequi? Quibusdam, incidunt animi esse voluptate aliquam id ipsa modi exercitationem? Doloremque aliquam fugit quae itaque rerum maxime ab nam amet, molestias reprehenderit harum officiis animi, eveniet veniam vero tempore voluptate. Asperiores accusamus quisquam possimus cumque neque unde sint quaerat iure quam omnis consequatur placeat deleniti vero praesentium sed necessitatibus, atque facere consequuntur eos molestiae nulla ipsum. Aliquid soluta nam odio. Molestiae cupiditate laudantium dolorem, non optio, consectetur, magni fuga impedit hic veniam minima? Consectetur consequatur, eveniet maxime doloremque veniam natus itaque consequuntur, molestiae facilis aliquam vel, corporis illo quo impedit? Expedita beatae tempora suscipit, nihil reprehenderit praesentium recusandae eligendi hic earum aliquam? Eaque, accusamus rem, repellendus deserunt cumque deleniti dolorem explicabo dolorum impedit laborum voluptates. Reprehenderit tenetur ipsam enim debitis!`,
        }
    }   
}
</script>
<style lang="scss" scoped>
    @import "@/css/correo.scss";    
</style>