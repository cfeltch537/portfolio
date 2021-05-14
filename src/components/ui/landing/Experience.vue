<template>
  <v-sheet color="#27272f">
    <v-container class="py-4 pt-lg-8">
      
      <!-- Experience -->
      <div class="text-center">
        <div class="text-uppercase font-weight-bold body-2 primary--text mb-2">History</div>
        <h2 class="text-h3 text-lg-h2">Experience</h2>
        <v-responsive max-width="1200" class="mx-auto">
          <div class="text-h6 text-lg-h5 mt-4">A timeline of my education and work history.</div>
        </v-responsive>
      </div>
      <section id="job-history" class="main">
        <section id="cd-timeline" class="cd-container">
          <!-- Tanzen -->
          <div class="cd-timeline-block">
            <div class="cd-timeline-img cd-picture">
              <v-icon class="fa-timeline" dark>mdi-medical-bag</v-icon>
            </div>
            <div class="cd-timeline-content">
              <h2>Tanzen Medical</h2>
              <div class="timeline-content-info">
                <span class="timeline-content-info-title">
                  <i class="fa fa-user" aria-hidden="true"></i>
                  Chief Technology Officer
                </span>
                <span class="timeline-content-info-date">
                  <i class="fa fa-calendar-o" aria-hidden="true"></i>
                  Oct. 2018 - Present
                </span>
              </div>
              <p>
                Responsible for the developing and overseeing a technical strategy to enable
                Tanzen's buissiness plan.
                <br><br> Tanzen is developing the next generation of wearable in-home sleep
                monitoring devices. We hope to bring affordable, medical grade sleep
                assessment devices to the consumer.
              </p>
              <ul class="content-skills">
                <!-- <li>Leadership</li>
											<li>Strategic Thinking</li>-->
                <li>Android</li>
                <li>Python</li>
                <li>NodeJS</li>
                <li>Vue</li>
                <li>C</li>
                <li>MongoDB</li>
                <li>InfluxDB</li>
              </ul>
            </div>
            <!-- cd-timeline-content -->
          </div>
          <!-- cd-timeline-block -->
          <!-- DCS Corp -->
          <div class="cd-timeline-block">
            <div class="cd-timeline-img cd-picture">
              <v-icon class="fa-timeline" dark>mdi-heart-pulse</v-icon>
            </div>
            <div class="cd-timeline-content">
              <h2>DCS Corp, Army Research Lab</h2>
              <div class="timeline-content-info">
                <span class="timeline-content-info-title">
                  <i class="fa fa-user" aria-hidden="true"></i>
                  Computer Engineer
                </span>
                <span class="timeline-content-info-date">
                  <i class="fa fa-calendar-o" aria-hidden="true"></i>
                  Oct. 2014 - Present
                </span>
              </div>
              <p>
                Responsible for the development of mobile and desktop applications for
                subject data collection, networking, and participant interaction.
                <br><br> Developed a suite on Android applications and services to view, log
                and stream data from bluetooth sensors. Created networked applications to
                synchronously stream and recieve data from physiological measurement
                systems.
              </p>
              <!-- <br><br>Created a suite of Android apps for the collection and networking of physiological data from Bluetooth devices. Developed scripts for data analysis and time synchronization. Developed Java, C++, C#, and Python programs for data streaming,
												collection, visualization, and synchronous logging. Created Arduino based sensing circuits. Developed VR applications in Unity, using SteamVR. Developed a Cross-Platform surveying web application.</p> -->
              <!-- </p> -->
              <ul class="content-skills">
                <li>C#</li>
                <li>C++</li>
                <li>Java</li>
                <li>Python</li>
                <li>MATLAB</li>
                <li>Android</li>
                <li>Unity</li>
              </ul>
            </div>
            <!-- cd-timeline-content -->
          </div>
          <!-- cd-timeline-block -->

          <!-- Johns Hopkins -->
          <div class="cd-timeline-block">
            <div class="cd-timeline-img cd-movie">
              <v-icon class="fa-timeline" dark>mdi-school</v-icon>
            </div>
            <!-- cd-timeline-img -->

            <div class="cd-timeline-content">
              <h2>The Johns Hopkins University</h2>
              <p>M.S. Electrical and Computer Engineering
                <br> Graduated with Honors (Part-Time Student)</p>
              <p id="courses-label" class="more-jhu hidden"><b>Courses</b></p>
              <ul class="content-courses more-jhu hidden">
                <li>Probability & Stochastic Processes</li>
                <li>Digital Signal Processing</li>
                <li>FPGA Design</li>
                <li>Enterprise Web Development</li>
                <li>Real-Time Computer Vision</li>
                <li>Introduction to Pattern Recognition</li>
                <li>Human Robotic Interation</li>
                <li>Image Compression, Packet Video</li>
                <li>Mobile Application Development for Android</li>
                <li>Object-Oriented Analysis, Design</li>
              </ul>
              <ul class="content-skills more-jhu">
                <li>Python</li>
                <li>Java</li>
                <li>MATLAB</li>
                <li>Android</li>
                <li>OpenCV</li>
              </ul>
              <!-- <button class="showhide more-jhu" onclick="showHide(self,'more-jhu');">
                <p>Show More
                  <i class="fa fa-caret-down" aria-hidden="true"></i>
                </p>
              </button>
              <button class="showhide more-jhu hidden" onclick="showHide(self,'more-jhu');">
                <p>Show Less
                  <i class="fa fa-caret-up" aria-hidden="true"></i>
                </p>
              </button> -->
              <span class="cd-date">May 2017</span>
            </div>
            <!-- cd-timeline-content -->
          </div>

          <!-- Raytheon -->
          <div class="cd-timeline-block">
            <div class="cd-timeline-img cd-picture">
              <v-icon class="fa-timeline" dark>mdi-airplane</v-icon>
            </div>
            <div class="cd-timeline-content">
              <h2>Raytheon SAS</h2>
              <div class="timeline-content-info">
                <span class="timeline-content-info-title">
                  <i class="fa fa-user" aria-hidden="true"></i>
                  Systems Engineer
                </span>
                <span class="timeline-content-info-date">
                  <i class="fa fa-calendar-o" aria-hidden="true"></i>
                  Aug. 2013 - Oct. 2014
                </span>
              </div>
              <div>
                <p>
                  Responsible for the development of system requirements, diagrams, and
                  test set software for Identification Friend or Foe (IFF) systems.
                </p>
                <p class="more-raytheon1 hidden">
                  Wrote C based test set software to interface with GPIB and RS-232
                  devices, for instrument control. Automated testing to minimizing manual
                  operator interaction.
                </p>
                <!-- Responsible for the development of system requirements, diagrams, test set software for Identification Friend or Foe (IFF) system components.
												<br><br> Modeled system requirement in Rational Rhapsody for specifications and code generation. Wrote C based test set software to interface with GPIB and RS-232 devices, for instrument control. Automated testing to minimizing manual operator
												interaction. Developed test plans, procedures, and operation manuals from system requirements specifications. Allocated and maintained system requirements in Rational DOORs. -->
                <ul class="content-skills more-raytheon1">
                  <li>MATLAB</li>
                  <li>Simulink</li>
                  <li>C</li>
                  <li>LabVIEW</li>
                </ul>
                <!-- <button
                  class="showhide more-raytheon1"
                  onclick="showHide(self,'more-raytheon1');"
                >
                  <p>Show More
                    <i class="fa fa-caret-down" aria-hidden="true"></i>
                  </p></button>
                <button
                  class="showhide more-raytheon1 hidden"
                  onclick="showHide(self,'more-raytheon1');"
                >
                  <p>Show Less
                    <i class="fa fa-caret-up" aria-hidden="true"></i>
                  </p></button> -->
              </div>
            </div>
            <!-- cd-timeline-content -->
          </div>
          <!-- cd-timeline-block -->

          <!-- York College -->
          <div class="cd-timeline-block">
            <div class="cd-timeline-img cd-movie">
              <v-icon class="fa-timeline" dark>mdi-school</v-icon>
            </div>
            <!-- cd-timeline-img -->

            <div class="cd-timeline-content">
              <h2>York College of Pennsylvania</h2>
              <p>B.S. Electrical Engineering <br> Graduated Magna Cum Laude (GPA 3.81)</p>
              <p id="courses-label" class="more-ycp hidden"><b>Specialized Courses</b></p>
              <ul class="content-courses more-ycp hidden">
                <li>Communciation Networks</li>
                <li>Communciation Systems</li>
                <li>Automatic Controls</li>
                <li>Applied Controls</li>
                <li>Intro to Radar Systems</li>
                <li>Independent Study: Radar Systems</li>
              </ul>
              <ul class="content-skills more-ycp">
                <li>Java</li>
                <li>MATLAB</li>
                <li>C#</li>
                <li>C++</li>
              </ul>
              <!-- <button class="showhide more-ycp" onclick="showHide(self,'more-ycp');">
                <p>Show More
                  <i class="fa fa-caret-down" aria-hidden="true"></i>
                </p>
              </button>
              <button class="showhide more-ycp hidden" onclick="showHide(self,'more-ycp');">
                <p>Show Less
                  <i class="fa fa-caret-up" aria-hidden="true"></i>
                </p>
              </button> -->
              <!-- <ul class="content-skills">
										<li>Comm. Systems</li>
										<li>Controls</li>
										<li>DSP</li>
										<li>Robotics</li>
									</ul> -->
              <span class="cd-date">May 2013</span>
            </div>
            <!-- cd-timeline-content -->
          </div>
          <!-- cd-timeline-block -->

          <!-- Raytheon  Coop-->
          <div class="cd-timeline-block">
            <div class="cd-timeline-img cd-picture">
              <v-icon class="fa-timeline" dark>mdi-airplane</v-icon>
            </div>
            <div class="cd-timeline-content">
              <h2>Raytheon SAS</h2>
              <div class="timeline-content-info">
                <span class="timeline-content-info-title">
                  <i class="fa fa-user" aria-hidden="true"></i>
                  Systems Engineering Co-op
                </span>
                <span class="timeline-content-info-date">
                  <i class="fa fa-calendar-o" aria-hidden="true"></i>
                  Spring 2012, Fall 2012
                </span>
              </div>
              <p>
                Supported the allocation and modeling of Identification Friend or Foe (IFF)
                system requirements.
              </p>
              <p class="more-raytheon2 hidden">
                Modeled requirement in Rational Rhapsody for specifications and code
                generation. Developed test plans, procedures, and manuals. Allocated and
                maintained requirements in Rational DOORs.
              </p>
              <ul class="content-skills more-raytheon2">
                <li>MATLAB</li>
                <li>Rational DOORs</li>
                <li>Rational Rhapsody</li>
                <li>UML</li>
              </ul>
              <!-- <button
                class="showhide more-raytheon2"
                onclick="showHide(self,'more-raytheon2');"
              >
                <p>Show More
                  <i class="fa fa-caret-down" aria-hidden="true"></i>
                </p></button>
              <button
                class="showhide more-raytheon2 hidden"
                onclick="showHide(self,'more-raytheon2');"
              >
                <p>Show Less
                  <i class="fa fa-caret-up" aria-hidden="true"></i>
                </p></button> -->
            </div>
            <!-- cd-timeline-content -->
          </div>
          <!-- cd-timeline-block -->
        </section>
        <!-- cd-timeline -->
      </section>
    </v-container>
  </v-sheet>
</template>

<style scoped>
/* ------------------------------------------------------------------------ */
/* Show/Hide */
/* ------------------------------------------------------------------------ */

.hidden {
  display: none !important;
}

button.showhide{
  background-color: #33333d;
  color: #adadad;
  border: none;
  font: inherit;
  padding: 5px 20px 5px 0px;
}

button.showhide > p{
  margin: 0;
}

/* ------------------------------------------------------------------------ */
/* TIMELINE */
/* ------------------------------------------------------------------------ */

.VUE_CLASS {
  all: unset !important;
  /* Write the other styles for this component below */
}

.cd-container {
  /*width: 90%;*/
  max-width: 1080px;
  margin: 0 auto;
  /*background: #2B343A;*/
  /*padding: 0 10%;*/
  border-radius: 2px;
}

.cd-container::after {
  content: '';
  display: table;
  clear: both;
}

.fa-timeline {
  color: #33333d;
  position: inherit;
  font-size: 16px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#cd-timeline {
  position: relative;
  padding: 2em 0;
  margin-top: 2em;
  margin-bottom: 2em;
}

#cd-timeline::before {
  content: '';
  position: absolute;
  top: 0;
  left: 25px;
  height: 100%;
  width: 4px;
  background: #64ffda;
}

@media only screen and (min-width: 1170px) {
  #cd-timeline {
    /* margin-top: 3em; */
    margin-bottom: 3em;
  }
  #cd-timeline::before {
    left: 50%;
    margin-left: -2px;
  }
}

.cd-timeline-block {
  position: relative;
  margin: 2em 0;
}

.cd-timeline-block:after {
  content: "";
  display: table;
  clear: both;
}

.cd-timeline-block:first-child {
  margin-top: 0;
}

.cd-timeline-block:last-child {
  margin-bottom: 0;
}

@media only screen and (min-width: 1170px) {
  .cd-timeline-block {
    margin: 2em 0;
  }
  .cd-timeline-block:first-child {
    margin-top: 0;
  }
  .cd-timeline-block:last-child {
    margin-bottom: 0;
  }
}

.cd-timeline-img {
  text-align: center;
  position: absolute;
  top: 8px;
  left: 12px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(94, 208, 177, 0.53), inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
}

.cd-timeline-img {
  /*background: #673AB7;*/
  background: #64ffda;
}

@media only screen and (min-width: 1170px) {
  .cd-timeline-img {
    width: 30px;
    height: 30px;
    left: 50%;
    margin-left: -15px;
    margin-top: 15px;
    /* Force Hardware Acceleration in WebKit */
    -webkit-transform: translateZ(0);
    -webkit-backface-visibility: hidden;
  }
}

.cd-timeline-content {
  position: relative;
  margin-left: 60px;
  /*margin-right: 30px;*/
  background: #33333d;
  /* background: #eee; */
  max-width: 550px;
  border-radius: 2px;
  padding: 1em;
  /* box-shadow: 0 20px 25px -15px rgba(0, 0, 0, 0.3); */
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}

.cd-timeline-content .timeline-content-info {
  margin-top: 1em;
  background: #27272f;
  /* color: #33333d; */
  padding: 5px 10px;
  font-size: 13px;
  box-shadow: inset 0 1px 0 rgba(0, 0, 0, 0.03);
  border-radius: 2px;
}

.cd-timeline-content .timeline-content-info i {
  margin-right: 5px;
}

.cd-timeline-content .timeline-content-info .timeline-content-info-title, .cd-timeline-content .timeline-content-info .timeline-content-info-date {
  width: calc(50% - 2px);
  display: inline-block;
}

@media (max-width: 500px) {
  .cd-timeline-content .timeline-content-info .timeline-content-info-title, .cd-timeline-content .timeline-content-info .timeline-content-info-date {
    display: block;
    width: 100%;
  }
}

.cd-timeline-content .content-skills {
  font-size: 12px;
  padding: 0;
  margin-bottom: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.cd-timeline-content .content-skills li {
  background: #27272f;
  border-radius: 2px;
  display: inline-block;
  padding: 2px 10px;
  color: #FFF;
  margin: 3px 2px;
  text-align: center;
  flex-grow: 1;
  /* min-width: 18%; */
}

p#courses-label {
  margin-bottom: 0;
}

.cd-timeline-content .content-courses {
  list-style: none;
  padding: 0;
  font-weight: bold;
  line-height: 1.6;
}

.cd-timeline-content .content-courses li {
  padding-left: 0.0em;
  font-weight: normal;
}

cd-timeline-content .content-courses li::before {
  color: #006b6e;
  /* color of bullet or square */
  content: "\2022";
  /* Unicode of character to precede the list item */
  font-size: 1em;
  /* em or %*/
  padding-right: 1.1225em;
  /* use em*/
  position: relative;
  top: 0em;
  /* use em or % */
}

.cd-timeline-content:after {
  content: "";
  display: table;
  clear: both;
}

.cd-timeline-content h2 {
  font-size: 1.5em;
  line-height: 1.5em;
  color: #FFF;
  margin-top: 0;
  margin-bottom: 5px;
}

.cd-timeline-content p, .cd-timeline-content .cd-date, .cd-timeline-content .content-courses {
  color: #adadad;
}

.cd-timeline-content .cd-date {
  display: inline-block;
}

.cd-timeline-content p {
  margin: 1em 0;
  /* line-height: 1.6; */
}

.cd-timeline-content::before {
  content: '';
  position: absolute;
  top: 16px;
  right: 100%;
  height: 0;
  width: 0;
  border: 7px solid transparent;
  border-right: 7px solid #333C42;
}

.cd-timeline-content h2{
  line-height: 1.5em;
}

/* @media only screen and (min-width: 768px) {
  .cd-timeline-content h2 {
    font-size: 20px;
    font-size: 1.25rem;
  }
  .cd-timeline-content p, .cd-timeline-content .content-courses {
    font-size: 16px;
    font-size: 1rem;
  }
  .cd-timeline-content .cd-read-more, .cd-timeline-content .cd-date {
    font-size: 14px;
    font-size: 0.875rem;
  }
} */

@media only screen and (min-width: 1170px) {
  .cd-timeline-content {
    color: white;
    margin-left: 0;
    padding: 1.6em;
    width: 45%;
    /*margin: 0 5%;*/
  }
  .cd-timeline-content::before {
    top: 24px;
    left: 100%;
    border-color: transparent;
    border-left-color: #333C42;
  }
  .cd-timeline-content .cd-date {
    position: absolute;
    width: 100%;
    left: 122%;
    top: 20px;
    /* font-size: 16px; */
    /* font-size: 1rem; */
  }
  .cd-timeline-block:nth-child(even) .cd-timeline-content {
    float: right;
  }
  .cd-timeline-block:nth-child(even) .cd-timeline-content::before {
    top: 24px;
    left: auto;
    right: 100%;
    border-color: transparent;
    border-right-color: #333C42;
  }
  .cd-timeline-block:nth-child(even) .cd-timeline-content .cd-read-more {
    float: right;
  }
  .cd-timeline-block:nth-child(even) .cd-timeline-content .cd-date {
    left: auto;
    right: 122%;
    text-align: right;
  }
}
</style>