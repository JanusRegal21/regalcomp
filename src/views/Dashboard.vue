<template>
    <div class="mx-3 px-4">
       
   <v-row>
       <v-col>
           <v-hover v-slot="{ isHovering, props }"> 
           <v-card
               :elevation="isHovering ? 12 : 2" 
               v-bind="props"
               class="mx-auto"
               max-width="500"
               variant="outlined"
           >
               <v-card-item>
                   <div>
                       <div class="text-overline mb-1">
                           Vuetify Activity
                       </div>
                       <div class="text-h6 mb-1 text-center">
                           Do you wish to use the String Manipulation? click below
                       </div>
                   </div>
               </v-card-item>
   
               <v-card-actions>
                   <v-btn rounded href="/stringApp">
                       Go to String Manipulation
                   </v-btn>
               </v-card-actions>
           </v-card>
       </v-hover>
       </v-col>
       <v-col>
           <v-hover v-slot="{ isHovering, props }">
           <v-card
               :elevation="isHovering ? 12 : 2" 
               v-bind="props"
               class="mx-auto"
               max-width="500"
               variant="outlined"
           >
               <v-card-item>
                   <div>
                       <div class="text-overline mb-1">
                           Vuetify Activity
                       </div>
                       <div class="text-h6 mb-1 text-center">
                           Do you wish to use the Calculator? click below
                       </div>
                   </div>
               </v-card-item>
   
               <v-card-actions>
                   <v-btn rounded href="/basicMath">
                       Go to Calculator
                   </v-btn>
               </v-card-actions>
           </v-card>
           </v-hover>
       </v-col>
       <v-col>
           <v-hover v-slot="{ isHovering, props }">
           <v-card
           :elevation="isHovering ? 12 : 2" 
               v-bind="props"
               class="mx-auto"
               max-width="500"
               variant="outlined"
           >
               <v-card-item>
                   <div>
                       <div class="text-overline mb-1">
                           Vuetify Activity
                       </div>
                       <div class="text-h6 mb-1 text-center">
                           Do you wish to use the String Application? click below
                       </div>
                   </div>
               </v-card-item>
   
               <v-card-actions>
                   <v-btn rounded href="/aboutvue">
                       Go to About Vuetify
                   </v-btn>
               </v-card-actions>
           </v-card>
           </v-hover>
       </v-col>
    </v-row>
   
    <v-row>
       <v-col>
           <v-hover v-slot="{ isHovering, props }">
           <v-card
               :elevation="isHovering ? 12 : 2" 
               v-bind="props"
               class="mx-auto"
               max-width="800"
               variant="outlined"
           >
               <v-card-item>
                   <div>
                       <div class="text-overline mb-1">
                           Vuetify Activity
                       </div>
                       <div class="text-h6 mb-1 text-center">
                           Proceed about Composition API and find out what it is all about. click below
                       </div>
                   </div>
               </v-card-item>
   
               <v-card-actions>
                   <v-btn rounded href="/aboutapi">
                       Go to Composition API
                   </v-btn>
               </v-card-actions>
           </v-card>
           </v-hover>
       </v-col>
    </v-row>
    </div>
   </template>
   
   <script>
   
   </script>
   
   
   