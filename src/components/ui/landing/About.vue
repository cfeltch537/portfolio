<template>
  <v-sheet color="#33333d">
    <div id="section-about" class="d-flex flex-column flex-lg-row">
      <div class="w-full w-lg-half">
        <v-img src="@/assets/images/park.jpg" height="100%" max-height="100vh" alt=""></v-img>
      </div>
      <div class="w-full w-lg-half d-flex align-center">
        <div class="pa-6 pa-md-12">
          <v-responsive max-width="900">
            <div
              class="text-uppercase font-weight-bold body-2 primary--text mb-2"
            >
              About Me
            </div>
            <h2 class="text-h3 text-lg-h2">Software Engineer</h2>
            <div class="mt-5">
              <div class="mt-4 mb-2 text-h6 text-lg-h5 font-weight-bold">
                Background
              </div>
              <p class="font-weight-regular">
                I received a <b>B.S. in Electrical Engineering</b>, focusing on
                digital comms and signal processing, then I realized I had a
                passion for software. I obtained my
                <b>M.S. in Computer Engineering</b> while
                working full-time. Since then, I've been working in roles as software engineer, software contractor and CTO.
              </p>
              <p class="font-weight-regular">
                I write code, model systems and prototype new technologies. I've
                been lucky enough to gain experience with many application
                areas, while working on interesting and diverse projects.
              </p>
              <div class="mt-4 mb-2 text-h6 text-lg-h5 font-weight-bold">
                My Tech Stacks
              </div>
              <ul class="font-weight-regular">
                <li><b>Embedded</b> (TI and ARM processors/MCUs)</li>
                <li><b>Desktop Apps</b> (Java, C#, C++ for Win, Linux)</li>
                <li><b>Mobile Apps</b> (Android, iOS)</li>
                <li><b>Web Dev</b> (MEVN, MERN)</li>
                <li><b>Analytics & Machine Learning</b> (pandas, numpy, scikit)</li>
              </ul>

              <div class="mt-4 mb-2 text-h6 text-lg-h5 font-weight-bold">
                Personal
              </div>
              <div class="font-weight-regular">
                When I'm not in front of a computer, I'm either playing
                volleyball, golfing, or hiking with my wife and two dogs
                (Rockwell & Petra).
              </div>
            </div>
          </v-responsive>
        </div>
      </div>
    </div>
  </v-sheet>
</template>
