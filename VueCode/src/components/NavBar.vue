<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#">Aaron Hobgood</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item @click="selectedPage = 'HomePage'">Home</b-nav-item>
                    <b-nav-item @click="selectedPage = 'ProjectsPage'">Projects</b-nav-item>
                    <b-nav-item @click="selectedPage = 'AboutPage'">About</b-nav-item>
                    <b-nav-item @click="selectedPage = 'ResumePage'">Resume</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>

        <img alt="Vue logo" src="../assets/logo.png">
        
        <PagesPage v-bind:selectedPage="selectedPage"></PagesPage>
    </div>
</template>

<script>
import PagesPage from './Pages/PagesPage.vue'
export default {
  name: 'NavBar',
  components: {
    PagesPage
  },
  props: {
    
  },
  data() {
      return {
          selectedPage: "HomePage"
      }
  }
}
</script>

<style>

</style>