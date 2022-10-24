<template>
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
                    Covid Cases Total Results
                </div>
                <div class="text-h6 mb-1 text-center">
                   <h4>Confirmed Cases: {{covidData.confirmed}}</h4> 
                   <h4>Confirmed Deaths: {{covidData.deaths}}</h4>
                   <h4>Confirmed Recovered: {{covidData.recovered}}</h4> 
                   <h4>Confirmed Active: {{covidData.active}}</h4>
                </div>
            </div>
        </v-card-item>
    </v-card>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios'


const covidData=ref([])

async function getCovidData () {
   axios({
            method:'get',
            url:'https://covid-19-statistics.p.rapidapi.com/reports/total', 
            params: {date: '2020-04-07'},
            headers: {
                      'X-RapidAPI-Key': 'd2833f3299msh2606d3ca0210142p18c7aajsn5e1819f438d4',
                      'X-RapidAPI-Host': 'covid-19-statistics.p.rapidapi.com'
                    }  
        }).then( response => {
   covidData.value=(response.data.data)
   console.log(covidData.value)
  })

}
onMounted( async () => {
   await getCovidData()
})

</script>