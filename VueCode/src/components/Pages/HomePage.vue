<template>
  <div>
    <p>HOME</p>
    <img alt="Me, Aaron" src="../../assets/terrariaguide.png">
    <p>It's a me, Aaron.</p>

    <b-container class="text-left">
      <b-row>
        <b-col>

          <p>I'm a software developer, I enjoy developing my developer career, 
            and I hope this site can be a place to share that development.</p>
          
          <p>To learn more about me, check out the 
            <a href="#" @click.prevent="onPageChangeClick('AboutPage')">
              About
            </a> 
            page to listen to me monologue.</p>
          
          <p>To learn about past projects I've worked on, check out the 
            <a href="#" @click.prevent="onPageChangeClick('ProjectsPage')">
              Projects 
            </a>  
            page.</p>

          <p>To see my new and improved, downloadable resume, 
            check it out 
            <a href="#" @click.prevent="onPageChangeClick('ResumePage')">
              here</a>.</p>
        </b-col>
      </b-row>
    </b-container>
    
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {

  },
  methods: {
    onPageChangeClick(value) {
      if (value != null && value != "") {
        this.$emit('change-selected-page', value)
      }
    }
  }
}
</script>

<style>

</style>