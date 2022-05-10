<template>
    <div>
        <!-- Switch between pages -->
        <HomePage v-if="selectedPage == 'HomePage'"></HomePage>
        <ProjectsPage v-else-if="selectedPage == 'ProjectsPage'"></ProjectsPage>
        <AboutPage v-else-if="selectedPage == 'AboutPage'"></AboutPage>
        <ResumePage v-else-if="selectedPage == 'ResumePage'"></ResumePage>
    </div>
</template>

<script>
import HomePage from './HomePage.vue'
import ProjectsPage from './ProjectsPage.vue'
import AboutPage from './AboutPage.vue'
import ResumePage from './ResumePage.vue'

export default {
  name: 'PagesPage',
  props: {
    selectedPage: String,
  },
  components: {
    HomePage,
    ProjectsPage,
    AboutPage,
    ResumePage
  }
}
</script>

<style>

</style>