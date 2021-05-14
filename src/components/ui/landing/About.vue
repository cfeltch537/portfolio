<template>
  <v-sheet color="#33333d">
    <div id="section-about" class="d-flex flex-column flex-lg-row">
      <div class="w-full w-lg-half">
        <v-img
          src="@/assets/images/park.jpg"
          max-height="100%"
          alt=""
        ></v-img>
      </div>
      <div class="w-full w-lg-half d-flex align-center">

        <div class="pa-6 pa-md-12">
          <v-responsive max-width="900">
            <div class="text-uppercase font-weight-bold body-2 primary--text mb-2">About Me</div>
            <h2 class="text-h3 text-lg-h2">Full-Stack Engineer</h2>
            <div class="text-h6 text-lg-h5 mt-5">
              <div>
                I love writing code, and learning new technologies. I've been lucky enough to gain experience with many different application areas and work on some very cool projects.
              </div>

              <div class="mt-4 mb-2 font-weight-bold">My Stacks</div>
              <ul>
                <li>Embedded Systems</li>
                <li>Native Apps (Win, Linux)</li>
                <li>Mobile (Android, iOS)</li>
                <li>Front-End</li>
                <li>Back-End/Cloud</li>
              </ul>

              <div class="mt-4 mb-2 font-weight-bold">Background</div>
              <div>
                I received a BS in Electrical Engineering, focusing on digital communication and signal processing. Then, I realized I had a passion for software. I obtained my MS in Computer Engineering, while working full-time. Since then, I've worked on everything from data collection systems to brain-computer interfaces.
              </div>
              <div class="mt-4 mb-2 font-weight-bold">Personal</div>
              <div>
                When I'm not in front of a computer, I'm either playing volleyball, golfing, or hiking with my wife and dog (Rockwell).
              </div>
            </div>
          </v-responsive>
        </div>
      </div>
    </div>
  </v-sheet>
</template>
