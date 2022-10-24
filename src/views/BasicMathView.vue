<template>
    <v-card
        color="black"
        class="mx-auto"
        max-width="750"
        variant="outlined"
    >
        <v-card-item class="mx-2 my-2">
            <div>
                <div class="text-overline mb-1">
                    Vuetify Activity
                </div>
            </div>
            <v-text-field label="First Input" placeholder="0" variant="outlined" v-model.number="fNumber"></v-text-field>
            <v-text-field label="Second Input" placeholder="0" variant="outlined" v-model.number="sNumber"></v-text-field>
            <v-row>
              <v-col>Addition: {{sum}}</v-col>
              <v-col>Subtracton: {{sub}}</v-col>
            </v-row>
            <v-row>
              <v-col>Multiplication: {{multiply}}</v-col>
              <v-col>Division: {{divi}}</v-col>
            </v-row>
            <v-row>
              <v-col>Average: {{ave}}</v-col>
            </v-row>
        </v-card-item>

        <v-card-actions class="justify-center px-4 py-4">
              <v-btn @click="doSum">
                  Result
              </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup>
import {ref} from 'vue'

const fNumber=ref('')
const sNumber=ref('')
const sum=ref(0)
const sub=ref(0)
const multiply=ref(0)
const divi=ref(0)
const ave=ref(0)

function doSum(){
sum.value = fNumber.value + sNumber.value
sub.value = fNumber.value - sNumber.value
multiply.value = fNumber.value * sNumber.value
divi.value = fNumber.value / sNumber.value
ave.value = (fNumber.value + sNumber.value)/2
}
</script>


