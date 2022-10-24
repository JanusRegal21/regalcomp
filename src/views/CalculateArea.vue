<template>
    <v-row>
        <v-col>
            <v-card
                class="mx-auto"
                max-width="500"
                variant="outlined"
            >
                <v-card-item>
                    <div>
                        <div class="text-overline">
                            Hello user pick a number corresponding to your needs in terms of calculating a shape's area
                        </div>
                        <div>
                            <v-list-item>1 : Rectangle</v-list-item>
                            <v-list-item>2 : Square</v-list-item>
                            <v-list-item>3 : Triangle</v-list-item>
                            <v-list-item>4 : Circle</v-list-item>
                        </div>
                        <div class="text-h6 mb-1 text-center">
                            <v-text-field label="Choice" placeholder="Input your String of Characters here!" variant="outlined" hint="just choose any of the provided number :D" v-model="ftext"></v-text-field>
                        </div>
                    </div>
                </v-card-item>
            </v-card>
        </v-col>
        <v-col>
            <template v-if="ftext == '1'">
                <v-card
                    class="mx-auto"
                    max-width="500"
                    variant="outlined"
                >
                <v-card-item>
                    <div>
                        <div class="text-overline mb-1">
                            Rectangle's Area Computation
                        </div>
                        <div class="">
                            <v-text-field label="Input Base" placeholder="Input your String of Characters here!" variant="outlined"  v-model="base"></v-text-field>
                            <v-text-field label="Input Height" placeholder="Input your String of Characters here!" variant="outlined"  v-model="height"></v-text-field>
                        </div>
                        <div>
                            <v-row>
                                <v-col>
                                   Rectangle's Area:  {{rectArea}}
                                </v-col>
                            </v-row>
                        </div>
                    </div>
                </v-card-item>
    
                    <v-card-actions>
                        <v-btn @click="getRectArea">
                            Calculate
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </template>
    
            <template v-if="ftext == '2'">
                <v-card
                    class="mx-auto"
                    max-width="500"
                    variant="outlined"
                >
                <v-card-item>
                    <div>
                        <div class="text-overline mb-1">
                           Square's Area Computation
                        </div>
                        <div class="">
                            <v-text-field label="Input Side" placeholder="Input your String of Characters here!" variant="outlined"  v-model="side"></v-text-field>
                        </div>
                        <div>
                            <v-row>
                                <v-col>
                                   Square's Area:  {{sqArea}}
                                </v-col>
                            </v-row>
                        </div>
                    </div>
                </v-card-item>
    
                    <v-card-actions>
                        <v-btn @click="getSquareArea">
                            Calculate
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </template>
    
            <template v-if="ftext == '3'">
                <v-card
                    class="mx-auto"
                    max-width="500"
                    variant="outlined"
                >
                <v-card-item>
                    <div>
                        <div class="text-overline mb-1">
                            Triangle's Area Computation
                        </div>
                        <div class="">
                            <v-text-field label="Input Base" placeholder="Input your String of Characters here!" variant="outlined"  v-model="basetria"></v-text-field>
                            <v-text-field label="Input Height" placeholder="Input your String of Characters here!" variant="outlined"  v-model="heighttria"></v-text-field>
                        </div>
                        <div>
                            <v-row>
                                <v-col>
                                   Triangle's Area:  {{triArea}}
                                </v-col>
                            </v-row>
                        </div>
                    </div>
                </v-card-item>
    
                    <v-card-actions>
                        <v-btn @click="getTriangleArea">
                            Calculate
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </template>
    
            <template v-if="ftext == '4'">
                <v-card
                    class="mx-auto"
                    max-width="500"
                    variant="outlined"
                >
                <v-card-item>
                    <div>
                        <div class="text-overline mb-1">
                            Circle's Area Computation
                        </div>
                        <div class="">
                            <v-text-field label="Input Radius" placeholder="Input your String of Characters here!" variant="outlined"  v-model="radius"></v-text-field>
                        </div>
                        <div>
                            <v-row>
                                <v-col>
                                   Circle's Area:  {{circArea}}
                                </v-col>
                            </v-row>
                        </div>
                    </div>
                </v-card-item>
    
                    <v-card-actions>
                        <v-btn @click="getCircleArea">
                            Calculate
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </template>
    
        </v-col>
    </v-row>
        
        
    </template>
    
    <script setup>
        import {ref} from 'vue'
    
        const ftext=ref('')
        
        //Rectangular's Variable
        const base=ref(0)
        const height=ref(0)
        const rectArea=ref(0)
    
        //Square's Variable
        const side=ref(0)
        const sqArea=ref(0)
    
        //Triangle's Variable
        const basetria=ref(0)
        const heighttria=ref(0)
        const triArea=ref(0)
        
        //Circle's Variable
        const radius=ref(0)
        const circArea=ref(0)
    
        function getRectArea (){
           return rectArea.value = base.value * height.value
        }
    
        function getSquareArea(){
            sqArea.value = side.value * side.value
        }
        function getTriangleArea(){
            triArea.value = 1/2*(basetria.value*heighttria.value)
        }
        function getCircleArea(){
            circArea.value = 3.12*radius.value*radius.value
        }
    </script>