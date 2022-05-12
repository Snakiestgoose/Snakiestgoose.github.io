<template>
    <div class="boxxy">
        <div class="content">
            <b-navbar 
              toggleable="lg" 
              type="light" 
              style="background-color:#7DA2A9;" 
              class="mb-5">

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
          <b-container>
            <b-row>
              <b-col style="align-self: center;">
                <a href = "mailto: ahobgood.dev@gmail.com?subject=Portfolio Inquiry">Send Email</a>
              </b-col>
              <b-col>
              <a target="_blank" 
                href="https://www.linkedin.com/in/aaronhobgood/"
                > 
                <img alt="LinkedIn" 
                  class=""
                  style="width:30px;"
                  src="../assets/linkedin-brands.svg">
              </a>
            </b-col>
            <b-col>
              <a target="_blank" 
                href="https://github.com/Snakiestgoose"
                >
                <img alt="GitHub" 
                  class=""
                  style="width:30px;"
                  src="../assets/github-brands.svg">
              </a>
            </b-col>
            </b-row>
          </b-container>
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
          selectedPage: "ProjectsPage"
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
  min-height: calc(100vh - 70px);
}
.boxxy {
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    display: block;
}
.footer {
  padding: 18px;
  background-color: #7DA2A9;
}
html, body {
  margin: 0;
  min-height: calc(100vh - 70px);
}
body {

}
</style>