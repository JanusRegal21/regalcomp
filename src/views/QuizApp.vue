<template>
    <!-- Question Area -->
    <v-card class="pa-1 ma-10 bg-grey-lighten-4 rounded w-50">
       <QuizEndOverlay v-if="endOfQuiz"></QuizEndOverlay>
       <div class="text-right text-h6 text-green-accent-4">Score: {{score}}</div>
       <div class="mx-10 py-3">
           <div class="rounded-lg grey-100 pa-1">
               <div class="bg-grey-darken-3 pa-4 text-capitalize rounded">
               {{currentQuestion.question}}
               </div>
           </div>
   <!-- Options Area -->
       
           <div v-for="(choice, item) in currentQuestion.choices" 
           :key="item">
            <v-list-item-title class=" bg-grey-lighten-1 rounded ma-2 pa-2">
               <v-row class="flex-col">
                   <v-col>
                       <v-list-item 
                       :ref="optionChosen"
                       @click="onOptionClicked(choice, item)">{{choice}}</v-list-item>
                   </v-col>
               </v-row>
           </v-list-item-title>
           </div>
           <div class="text-center py-1 text-h6">
                   {{questionCounter}}/10
           </div>
      </div> 
   </v-card>
   
   </template>
   
   <script>
   import { ref, onMounted, reactive } from 'vue';
   import QuizEndOverlay from './component/QuizEndOverlay.vue';
   import axios from 'axios'
   
   
   export default{
       setup() {
           let canClick = true;
           let questionCounter = ref(0);
           let score = ref(0);
           let endOfQuiz = ref(false)
           const currentQuestion = ref({
               question: "",
               answer: 1,
               choices: []
           });
           let questions = [];
           const LoadQuestion = () => {
               canClick = true;
               if (questions.length > questionCounter.value) {
                   currentQuestion.value = questions[questionCounter.value];
                   console.log("Current Questons: ", currentQuestion.value);
                   questionCounter.value++;
               }
               else {
                   endOfQuiz.value = true;
                   score.value = false;
                   console.log("Out of Questions");
               }
           };
           let itemsRef = [];
           const optionChosen = (element) => {
               if (element) {
                   itemsRef.push(element);
               }
           };
           const onOptionClicked = (choice, item) => {
               if (canClick) {
                   const divContainer = itemsRef[item];
                   const optionID = item + 1;
                   if (currentQuestion.value.answer == optionID) {
                       console.log("Correct!");
                       score.value += 10;
                   }
                   else {
                       console.log("Wrong!");
                   }
                   canClick = false;
                   LoadQuestion();
                   console.log(choice, item);
               }
               else {
                   console.log("Cant select Question");
               }
           };
           const fetchQuestionsFromServer = async function () {
               try {
                   const response = await axios.get("https://opentdb.com/api.php?amount=10&category=20&difficulty=easy&type=multiple");
                   const newQuestions = response.data.results.map((serverQuestion) => {
                       const arrangedQuestion = {
                           question: serverQuestion.question,
                           choices: "",
                           answer: ""
                       };
                       const choices = serverQuestion.incorrect_answers;
                       arrangedQuestion.answer = Math.floor(Math.random() * 4 + 1);
                       choices.splice(arrangedQuestion.answer - 1, 0, serverQuestion.correct_answer);
                       arrangedQuestion.choices = choices;
                       return arrangedQuestion;
                   });
                   questions = newQuestions;
                   LoadQuestion();
               }
               catch (e) {
                   console.error(e);
               }
           };
           onMounted(() => {
               fetchQuestionsFromServer();
           });
           return {
               currentQuestion,
               questions,
               score,
               LoadQuestion,
               questionCounter,
               onOptionClicked,
               optionChosen,
               endOfQuiz
           };
       },
       components: { QuizEndOverlay }
   }
   </script>