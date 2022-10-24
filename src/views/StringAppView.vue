<template>
    <v-card
        class="mx-auto"
        max-width="1000"
        variant="outlined"
    >
        <v-card-item>
            <div>
                <div class="text-overline mb-1">
                    Vuetify Activity
                </div>
            </div>
            <v-text-field label="String Input" placeholder="Input your String of Characters here!" variant="outlined" v-model="ftext"></v-text-field>
            <v-row>
              <v-col>Convert to Uppercase: {{txtcount}}</v-col>
              <v-col>Number of Vowels: {{vowelCount}}</v-col>
            </v-row>
            <v-row>
              <v-col>Convert all Consonant to Uppercase: {{constCount}}</v-col>
              <v-col>Convert to *: {{convert}}</v-col>
            </v-row>
        </v-card-item>

        <v-card-actions class="justify-center px-4 py-4 color-black">
              <v-btn @click="doCountVowel">
                  Result
              </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup>
import {ref} from 'vue'

const ftext = ref('')
const vowelCount = ref(0)
const constCount = ref('')
const convert = ref('')
const txtcount = ref('')

function doCountVowel () {
 txtcount.value = ftext.value.toUpperCase()
 vowelCount.value = ftext.value.match(/[aeiou]/gi).length
 convert.value = ftext.value.replace(/[aeiou]/gi, '*')
 constCount.value = ftext.value.toUpperCase().match(/[bcdfghjklmnpqrstvwxyz]/gi)
}

</script>
