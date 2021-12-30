<template>
  <v-container class="py-6 py-lg-12 text-left centered-text-left">
    <h1 class="text-h4 text-sm-h3 text-md-h2 text-lg-h1">Hi, my name is <span class="primary--text">Cody</span></h1>
    <h1 class="text-h4 text-sm-h3 text-md-h2 text-lg-h1">I work with 
      <span class="secondary--text">
        <a href=""> 
          <span class="typing-words">
            <span class="word" text="Line 2">Data Science</span>
            <span class="word" text="Line 4.">Mobile Apps</span>
            <span class="word" text="Line 6.">Software.</span>
            <span class="word" text="Design">Web Development</span>
            <span class="word" text="Line 3.">Embedded Systems</span>
            <span class="word" text="Line 5.">Databases</span>
          </span>
        </a>
      </span>
    </h1>
    <h3 class="font-weight-regular secondary--text mt-4 mx-auto">I'm an engineer working out of Baltimore, MD. I currently work as the CTO for the health technology startup Tanzen Medical, and I am available for freelance contractor work.</h3>
    
    <div class="mt-2">
      <!-- <v-btn x-large class="my-1 mx-sm-1 w-full w-sm-auto btn-outlined">Web Resume</v-btn> -->
      <div class="d-flex align-center justify-start mt-1">
        <!-- Resume -->
        <v-tooltip bottom color="#33333d">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              href="Resume.pdf"
              target="_blank"
              color="secondary lighten-2"
              class="mx-1"
              style="background-color:#27272f;"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-file-document</v-icon>
            </v-btn>
          </template>
          <span>Resume</span>
        </v-tooltip>
        <!-- Linkedin -->
        <v-tooltip bottom color="#33333d">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              href="https://www.linkedin.com/in/codyfeltch/"
              target="_blank"
              icon
              v-bind="attrs"
              color="secondary lighten-2"
              class="mx-1"
              style="background-color:#27272f;"
              v-on="on"
            ><v-icon>mdi-linkedin</v-icon></v-btn>
          </template>
          <span>LinkedIn</span>
        </v-tooltip>
        <!-- Linkedin -->
        <v-tooltip bottom color="#33333d">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              href="https://github.com/cfeltch537"
              target="_blank"
              icon
              v-bind="attrs"
              color="secondary lighten-2"
              class="mx-1"
              style="background-color:#27272f;"
              v-on="on"
            ><v-icon>mdi-github</v-icon></v-btn>
          </template>
          <span>Github</span>
        </v-tooltip>
        <!-- Linkedin -->
        <v-tooltip bottom color="#33333d">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              href="https://stackoverflow.com/users/3981034/codyf"
              target="_blank"
              v-bind="attrs"
              color="secondary lighten-2"
              class="mx-1"
              style="background-color:#27272f;"
              v-on="on"
            ><v-icon>mdi-stack-overflow</v-icon></v-btn>
          </template>
          <span>StackOverflow</span>
        </v-tooltip>
      </div>
    </div>
  </v-container>
</template>

<style scoped>
  @import url(https://fonts.googleapis.com/css?family=PT+Mono);

  .btn-outlined{
    background-color: var(--v-background-base) !important; 
    border: 1px solid var(--v-anchor-base); /* Green */
  }

  .centered-text-left{
    max-width: 1000px;
    height: calc(100vh - 55px);
    -webkit-flex-flow: column wrap;
    -ms-flex-flow: column wrap;
    flex-flow: column wrap;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack:center;
    -webkit-justify-content:center;
    -ms-flex-pack:center;
    justify-content:center;
  }

  body {
      font-family: 'PT Mono';
      color: #171717;
  }

  a {
      /* color: #000; */
      -webkit-transition: all .35s;
      -moz-transition: all .35s;
      transition: all .35s;
      background-image: linear-gradient(180deg,transparent 75%,#fcf113 0);
      background-size: 0 100%;
      background-repeat: no-repeat;
      -webkit-transition: background-size .4s ease;
      transition: background-size .4s ease;
  }

  /* a:hover,
  a:focus {
      outline: 0 !important;
      outline-color: white;
      background-size: 100% 100%;
      text-decoration: none;
  } */

  h1 {
      font-size: 8rem;
      font-weight: 300;
  }

  @media (max-width:768px) {
      h1 {
          font-size: 5rem;
      }
  }

  @keyframes typing {
      from { width: 100%;  }
      to { width:0; }
  }

  @keyframes typingReverse {
      from { width: 0;  }
      to { width: 100%; }
  }

  @keyframes blink-cursor {
      from, to { border-color: transparent; }
      50% { border-color: #999; }
  }

  @keyframes cursor-wait {
      from, to { border-color: #999; }
      50% { border-color: transparent; }
  }

  @keyframes hide-me {
      100% { visibility:hidden; height:0; width:0; }
  }

  @keyframes show-me {
      from,to { visibility:visible; height:auto; width:auto; }
  }

  .typing-words { 

  }

  .typing-words .word {
      position: relative;
      overflow: hidden;
      display: inline-block;
      vertical-align: middle;
      visibility: hidden;
      width: 0;
      height: 0;
  }

  .typing-words .word:after {
      content: attr(text);
      color: transparent;
      background: var(--v-background-base); 
      position: absolute;
      top: 0;
      right: 0;
      width: 0;
      z-index: 1;
      border-left: 3px solid transparent;
  }

   /* Word 1:  */
  .typing-words .word:nth-child(1) {
      animation: 3s show-me 0s;
  }

  .typing-words .word:nth-child(1):after {
      animation: 1s typing steps(12), typingReverse 1s steps(12) 1s forwards, 0.6s blink-cursor step-end infinite, 0.6s cursor-wait step-end 1 1s;
  }

   /* Word 2:  */
  .typing-words .word:nth-child(2) {
      animation: 3s show-me 3s;
  }

  .typing-words .word:nth-child(2):after {
      animation: 1s typing 3s steps(11), typingReverse 1s steps(11) 4s forwards, 0.6s blink-cursor step-end infinite, 0.6s cursor-wait step-end 1 5s;
  }

   /* Word 3:  */
  .typing-words .word:nth-child(3) {
      animation: 2s show-me 6s forwards;
  }

  .typing-words .word:nth-child(3):after {
      animation: 1s typing 6s steps(9) forwards, 0.6s blink-cursor 6s step-end 6;
  }

</style>