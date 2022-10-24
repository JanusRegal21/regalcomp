<template>
    <div class="mx-3 px-4">
    <v-hover v-slot="{ isHovering, props }">
    <v-row>
        <v-col>
            <v-card :elevation="isHovering ? 12 : 2" v-bind="props" class="mx-auto" max-width="900" variant="outlined">
                <v-card-item>
                    <div>
                        <div class="text-h5 mb-1">
                            About Composition API in Vue JS
                        </div>
                        <div class="mb-1 text-justify" width="100">
                            Composition API is a set of APIs that allows us to author Vue components using imported functions instead of declaring options.Composition API is a built-in feature of Vue 3 and Vue 2.7. For older Vue 2 versions
                        </div>
                        <v-divider></v-divider>
                        <div class="mb-1 text-justify" width="100">
                            Despite an API style based on function composition, Composition API is NOT functional programming. Composition API is based on Vue's mutable, fine-grained reactivity paradigm, whereas functional programming emphasizes immutability.
                        </div>
                        <v-divider ></v-divider>
                        <div class="mb-1 text-justify" width="100">
                            The primary advantage of Composition API is that it enables clean, efficient logic reuse in the form of Composable functions. It solves all the drawbacks of mixins, the primary logic reuse mechanism for Options API.Composition API's logic reuse capability has given rise to impressive community projects such as VueUse, an ever-growing collection of composable utilities. It also serves as a clean mechanism for easily integrating stateful third-party services or libraries into Vue's reactivity system, for example immutable data, state machines, and RxJS.
                        </div>
                    </div>
                </v-card-item>
                <v-card-actions>
                    <v-btn rounded href="https://vuejs.org/guide/extras/composition-api-faq.html#what-is-composition-api">
                        Read more about Composition API
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