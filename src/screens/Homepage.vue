<template>
    <div>
        <Navbar/>
        <div class="bannerr" :class="{bgimage, bgimage2}" >
            <div>
                <h2>Find the perfect Doctor <br>and book an appointment</h2>
                <div class="box ">
                    <form action="">
                        <img src="../assets/img/icons/search.png" alt="" class="fa-envelope">
                        <input type="text" placeholder="Try “Radiologists” ">
                        <input type="submit" name="" value="Search" :class="{colorPink, colorPurple}">
                    </form>
                </div>
                <div>
                <div class="popular-list">
                    <h3>Popular:</h3>
                    <ul>
                        <li><a href="#">Pediatricians</a></li>
                        <li><a href="#">Cardiologists</a></li>
                        <li><a href="#">{{ name }}</a></li>
                        <li><a href="#">Psychiatrists</a></li>
                    </ul>
                </div>
                </div>
            </div>
            <div class="left-image">
                 <div class="main-image">
                        <img :src="mainImageSrc" :alt="img" />
                </div>
                <!--<div class="image-list">
                    <div v-for="img in images" class="item" :key="img">
                        <img src="img.image" >
                    </div>
                </div> -->
            </div>
        </div>
        <div class="ongoing_project">
            <div>
                Project is an ongoing project <br/><br/>
                Please Kindly Check My Ongoing Project on Desktop Mode
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import image from '../assets/img/maleDoctor.png'
import image2 from '../assets/img/femaleDoctor.png'

export default {
    name: 'Homepage',

     components:{
        Navbar
    },

   data() {
       return {
            // images:[],
            mainImageSrc: image,
            bgimage : true,
            bgimage2: false,
            colorPink: true,
            colorPurple: false
       }
   },
  
    computed : {
        name() {
            return this.$store.state.name;
        },
    },
    mounted() {
        setTimeout(() => this.changeBackground(), 3200);
    },
    updated(){
        setTimeout(() => this.changeBackground(), 3200);
    },
    methods: {
        changeBackground: function(){
            if(this.bgimage) {
                this.bgimage = false,
                this.bgimage2 = true
            }
            else if(this.bgimage2){
                this.bgimage = true,
                this.bgimage2=false
            }
             if(this.colorPink) {
                this.colorPink = false,
                this.colorPurple = true
            }
            else if(this.colorPurple){
                this.colorPink = true,
                this.colorPurple=false
            }
        },
    },
}
</script>

<style>
</style>