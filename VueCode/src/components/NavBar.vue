<template>
    <div class="boxxy">
        <div class="content">
            <b-navbar toggleable="lg" type="dark" variant="info" class="mb-5">
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
            
            <PagesPage 
              v-bind:selectedPage="selectedPage"
              v-on:change-selected-page="changeSelectedPage">
            </PagesPage>
        </div>
        
        <footer class="footer">
            <p>Email: </p>
        </footer>
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
  },
  methods: {
    changeSelectedPage(value) {
      this.selectedPage = value
    }
  }
}
</script>

<style>
.content {
  min-height: 100%;
  padding-bottom: 50px;
}
.boxxy {
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    display: block;
}
.footer {
  height: 50px;
  margin-top: -50px;
  background-color: darkgray;
}
html, body {
  margin: 0;
  height: 100%;
  background-color: rgba(0,0,0,0.1);
}
body {

}
</style>