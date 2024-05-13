<template>
  <v-sheet color="#33333d">
    <div id="section-about" class="d-flex flex-column flex-lg-row">
      <div class="col-12 col-lg-4 col-xl-5 no-padding">
        <v-img id="about-me-img" src="@/assets/images/park.jpg" alt=""></v-img>
      </div>
      <div class="col-12 col-lg-8 col-xl-7 no-padding d-flex align-center">
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
                Received a <b>B.S. in Electrical Engineering</b> with focus on
                digital communications and signal processing, then
                started my <b>M.S. in Computer Engineering</b> while working
                full-time. Changed my focus toward software and hardware
                development, with additional coursework in machine
                learning.
              </p>
              <p class="font-weight-regular">
                Held a variety of software
                engineering roles, act as a part-time software contractor, and currently the CTO for a health tech wearable start-up.

                I've
                been lucky enough to gain experience with many application
                areas, while working on interesting and diverse projects.
              </p>
              <div class="mt-4 mb-2 text-h6 text-lg-h5 font-weight-bold">
                My Tech Stacks
              </div>
              <ul style="padding-left:20px;" class="font-weight-regular">
                <li><b>Web Development</b> (Vue, React, Node, Express, Flask, AWS Cloud Services)</li>
                <li><b>Mobile Apps</b> (Android, ~iOS)</li>
                <li><b>Desktop Apps</b> (Qt, PyQt, WPF, Winforms)</li>
                <li><b>Embedded</b> (TI and ARM processors/MCUs, FreeRTOS)</li>
                <li><b>Databases</b> (Mongo, Dynamo, MySQL, SQLite)</li>
                <li>
                  <b>Analytics & Machine Learning</b> (pandas, numpy, scikit, tsfresh)
                </li>
              </ul>

              <div class="mt-4 mb-2 text-h6 text-lg-h5 font-weight-bold">
                Personal
              </div>
              <div class="font-weight-regular">
                When I'm not in front of a computer, I'm either playing
                volleyball 🏐, disk golfing 🥏, or hiking with my wife and dogs
                (Rockwell & Petra) 🐶🐶.
              </div>
            </div>
          </v-responsive>
        </div>
      </div>
    </div>
  </v-sheet>
</template>
<style scoped>
#about-me-img {
  height: 100%;
  max-height: 100vh;
  object-fit: cover;
}

@media (min-width: 992px) {
  #about-me-img {
    max-height: 200vh;
  }
}

.no-padding {
  padding: 0 !important;
}
</style>
