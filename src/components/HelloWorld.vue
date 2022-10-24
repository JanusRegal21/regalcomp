<template>
       <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
      >
        <v-list-item
          prepend-avatar="https://tip.instructure.com/images/thumbnails/14233791/BkVPO722zd0baaX7lCEpg4XsduPI3CxGi3cIObwQ"
          title="Janus Regal"
          nav
        >
          <template v-slot:append>
            <v-btn
              variant="text"
              icon="mdi-chevron-left"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-home-city" title="Home" value="home" href="/Dashboard"></v-list-item>
          <v-list-item prepend-icon="mdi-code-string" title="String Manipulation" value="account" href="/stringApp"></v-list-item>
          <v-list-item prepend-icon="mdi-calculator" title="Calculator" value="basicmath" href="/basicMath"></v-list-item>
          <v-list-item prepend-icon="mdi-calculator" title="Calculator for Area" value="aboutapi" href="/calarea"></v-list-item>
          <v-list-item prepend-icon="mdi-api" title="Axios" value="aboutapi" href="/axios"></v-list-item>
          <v-list-item prepend-icon="mdi-api" title="QuizApp" value="Quiz" href="/quiz"></v-list-item>
          <v-list-item prepend-icon="mdi-vuetify" title="About Vuetify" value="aboutvue" href="/aboutvue"></v-list-item>
          <v-list-item prepend-icon="mdi-api" title="About Composition API" value="aboutapi" href="/aboutapi"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main></v-main>
</template>

<script>
export default {
    data () {
      return {
        drawer: true,
        rail: false,
      }
    },
  }
</script>
