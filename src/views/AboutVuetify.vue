<template>
    <div class="mx-3 px-4">
    <v-hover v-slot="{ isHovering, props }">
    <v-row>
        <v-col>
            <v-card :elevation="isHovering ? 12 : 2" v-bind="props" class="mx-auto" max-width="900" variant="outlined">
                <v-card-item>
                    <div>
                        <div class="text-h5 mb-1">
                            About Vuetify
                        </div>
                        <div class="mb-1 text-justify" width="100">
                            Vuetify is a complete UI framework built on top of Vue.js. The goal of the project is to provide developers with the tools they need to build rich and engaging user experiences. Unlike other frameworks, Vuetify is designed from the ground up to be easy to learn and rewarding to master with hundreds of carefully crafted components from the
                        </div>
                        <v-divider></v-divider>
                        <div class="mb-1 text-justify" width="100">
                            Since its initial release in 2014, Vue.js has grown to be one of the most popular JavaScript frameworks in the world. One of the reasons for this popularity is the wide use of components which enable developers to create concise modules to be used and re-used throughout their application. UI Libraries are collections of these modules that implement a specific style guideline and provide the necessary tools to build expansive web applications.
                        </div>
                        <v-divider ></v-divider>
                        <div class="mb-1 text-justify" width="100">
                            Vuetify is developed exactly according to Material Design specification with every component meticulously crafted to be modular, responsive, and performant. Customize your application with unique and dynamic Layouts and customize the styles of your components using SASS variables.
                        </div>
                    </div>
                </v-card-item>
                <v-card-actions>
                    <v-btn rounded href="https://vuetifyjs.com/en/introduction/why-vuetify/#what-is-vuetify3f">
                        Read more as to why use Vue
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
     </v-row>
    </v-hover>
    </div>
    </template>
    
    <script>
    
    </script>