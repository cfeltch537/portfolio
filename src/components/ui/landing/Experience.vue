<template>
  <v-sheet color="#27272f">
    <v-container class="py-4 pt-lg-8" fluid>
      <!-- Experience -->
      <div class="text-center">
        <div class="text-uppercase font-weight-bold body-2 primary--text mb-2">
          History
        </div>
        <h2 class="text-h3 text-lg-h2">Experience</h2>
        <v-responsive max-width="1200" class="mx-auto">
          <div class="text-h6 text-lg-h5 mt-4">
            A timeline of my education and work history.
          </div>
        </v-responsive>
      </div>
      <section id="job-history" class="main">
        <section id="cd-timeline" class="cd-container">
          <!-- Tanzen -->
          <div class="cd-timeline-block">
            <div class="cd-timeline-img cd-picture">
              <v-icon class="fa-timeline" dark>mdi-medical-bag</v-icon>
            </div>
            <v-card class="cd-timeline-content" flat>
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
                Responsible for the developing and overseeing a technical
                strategy to enable Tanzen's buissiness plan.
                <br /><br />
                Tanzen is developing the next generation of wearable in-home
                sleep monitoring devices. We hope to bring affordable, medical
                grade sleep assessment devices to the consumer.
              </p>
              <v-card-actions class="pl-0">
                <div>
                  <v-chip color="#27272f" class="compact-chip" small label>Android</v-chip>
                  <v-chip color="#27272f" class="compact-chip" small label>Python</v-chip>
                  <v-chip color="#27272f" class="compact-chip" small label>Node.js</v-chip>
                  <v-chip color="#27272f" class="compact-chip" small label>Vue.js</v-chip>
                  <v-chip color="#27272f" class="compact-chip" small label>C</v-chip>
                  <v-chip color="#27272f" class="compact-chip" small label>MongoDB</v-chip>
                  <v-chip color="#27272f" class="compact-chip" small label>InfluxDB</v-chip>
                </div>

                <v-spacer></v-spacer>

                <v-btn
                  icon
                  @click="showRaytheon = !showRaytheon"
                >
                  <v-icon dark >{{ showRaytheon ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
              </v-card-actions>

              <v-expand-transition>
                <div v-show="showRaytheon">
                  <v-divider></v-divider>

                  <v-card-text class="pl-0">
                    <div class="font-weight-regular">
                      <p><b>Wearable Device</b> - Invented RestEaze&#8482;, an ankle worn device containing an inertial measurenemtn unit (IMU), photoplethysmography (PPG), infrared temperature and capacitive distance sensors. </p>
                      <p><b>Machine Learning</b> - Trained classifiers to detect events of interest and estimate sleep state based on time-series data from a multi-sensor wearable device.</p>
                      <p><b>Web Application</b> - Developed a web application to act as a dashboard for RestEaze&#8482; users. Stored time-series and statistical data. Interfaced with a flask microservice to run analytics. Contained subject management and visualization features for physicians to track and manage multiple patients. </p>
                      <p><b>Mobile Apps</b> - Created an app to pair with the RestEaze&#8482; wearable to control and offload data from the device using Bluetooth Low Energy (BLE), then upload data to the Tanzen server.</p>
                    </div>
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
            <!-- cd-timeline-content -->
          </div>
          <!-- cd-timeline-block -->
          <!-- DCS Corp -->
          <div class="cd-timeline-block">
            <div class="cd-timeline-img cd-picture">
              <v-icon class="fa-timeline" dark>mdi-heart-pulse</v-icon>
            </div>
            <v-card class="cd-timeline-content" flat>
              <h2>DCS Corp, Army Research Lab</h2>
              <div class="timeline-content-info">
                <span class="timeline-content-info-title">
                  <i class="fa fa-user" aria-hidden="true"></i>
                  Computer Engineer
                </span>
                <span class="timeline-content-info-date">
                  <i class="fa fa-calendar-o" aria-hidden="true"></i>
                  Oct. 2014 - Oct. 2018
                </span>
              </div>
              <p>
                Responsible for the development of mobile and desktop
                applications for subject data collection, storage, networking, and synchronization, to support psychophysiology research for ARL's Human Research and Engineering (HRED) directorate.
              </p>
              <p>
                Developed a suite on Android apps and services to collect data from bluetooth sensors. Created networked
                applications to stream and record data from physiological measurement systems. Wrote scripts to aggreagate, clean and process time-series data.
              </p>
              <!-- <br><br>Created a suite of Android apps for the collection and networking of physiological data from Bluetooth devices. Developed scripts for data analysis and time synchronization. Developed Java, C++, C#, and Python programs for data streaming,
												collection, visualization, and synchronous logging. Created Arduino based sensing circuits. Developed VR applications in Unity, using SteamVR. Developed a Cross-Platform surveying web application.</p> -->
              <!-- </p> -->
              <v-card-actions class="pl-0">
                <div>
                  <v-chip color="#27272f" class="compact-chip" small label>C#</v-chip>
                  <v-chip color="#27272f" class="compact-chip" small label>Java</v-chip>
                  <v-chip color="#27272f" class="compact-chip" small label>Python</v-chip>
                  <v-chip color="#27272f" class="compact-chip" small label>C++</v-chip>
                  <v-chip color="#27272f" class="compact-chip" small label>MATLAB</v-chip>
                  <v-chip color="#27272f" class="compact-chip" small label>Android</v-chip>
                  <v-chip color="#27272f" class="compact-chip" small label>Unity</v-chip>
                  <v-chip color="#27272f" class="compact-chip" small label>Qt</v-chip>
                  <v-chip color="#27272f" class="compact-chip" small label>WPF</v-chip>
                </div>

                <v-spacer></v-spacer>

                <v-btn
                  icon 
                  @click="showDCS = !showDCS"
                >
                  <v-icon>{{ showDCS ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
              </v-card-actions>

              <v-expand-transition>
                <div v-show="showDCS">
                  <v-divider></v-divider>

                  <v-card-text class="pl-0">
                    <div class="font-weight-regular">
                      <p><b>Closed Loop</b> - Developed a platform for prototyping real-time data analysis techniques and visualizations, using the open-source lab streaming layer (LSL) library for time-synchronized data/event streaming.</p>
                      <p><b>Neurofeedback Study</b> - Developed a python application to process electroencephalogram (EEG) data and modulate the height and color of a drawable based on the users brainwave activity in real-time .</p>
                      <p><b>Cyber Shooter Study</b> - Created a virtual reality shooting range simulator with Unity and StreamVR. Instrumented participants with physio sensors built for real-time data synchronization using the Lab Streaming Layer (LSL) framework.</p>
                      <p><b>Real World Neuroimaging – Vehicle Driving Experiment (RWNVDE)</b> -
                        Supported the instrumentaiton of a vehicle and participants with sensors for a psychophysiology experiment which took place while driving. Wrote scripts to aggregate, synchronize and epoch data from sensor sources.</p>
                      <p><b>Autonomous Research Project Initiative (ARPI)</b> - Developed a user interface that acted as an automated assistant, aiding users as they made firing decisions and controlled the movement of simulated autonomous robots/sensors in a search and destroy mission.</p>
                    </div>
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
            <!-- cd-timeline-content -->
          </div>
          <!-- cd-timeline-block -->

          <!-- Johns Hopkins -->
          <div class="cd-timeline-block">
            <div class="cd-timeline-img cd-movie">
              <v-icon class="fa-timeline" dark>mdi-school</v-icon>
            </div>
            <!-- cd-timeline-img -->

            <v-card class="cd-timeline-content" flat>
              <h2>The Johns Hopkins University</h2>
              <p>
                M.S. Electrical and Computer Engineering <br />
                Graduated with Honors (Part-Time Student)
              </p>
              <span class="cd-date">May 2017</span>
              <v-card-actions class="pl-0">
                <div>
                  <v-chip color="#27272f" class="compact-chip" small label>Python</v-chip>
                  <v-chip color="#27272f" class="compact-chip" small label>Java</v-chip>
                  <v-chip color="#27272f" class="compact-chip" small label>MATLAB</v-chip>
                  <v-chip color="#27272f" class="compact-chip" small label>Android</v-chip>
                  <v-chip color="#27272f" class="compact-chip" small label>OpenCV</v-chip>
                </div>
                <v-spacer></v-spacer>
                <v-btn
                  icon
                  @click="showJHU = !showJHU"
                >
                  <v-icon dark >{{ showJHU ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
              </v-card-actions>
              <v-expand-transition>
                <div v-show="showJHU">
                  <v-divider></v-divider>
                  <v-card-text class="pl-0 ">
                    <h4 class="py-1"> Courses </h4>
                    <div class="font-weight-regular">
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
                    </div>
                    <!-- <div class="font-weight-regular">
                      <p><b>Capstone Project</b> - Joint Architecture for Unmanned Systems (JAUS) implementation for an autonomous robot. Software implementation of communication system with broadcast discovery, data subscription and control commands. </p>
                      <p><b>Independent Study</b> - Studied Radar and Electronic Warfare systems. Developed a MATLAB simulation of a passive emitter detection and geolocation sensor array. Created course content for an Advanced Radar and Electronic Warefare systems class. </p>
                    </div> -->
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
            <!-- cd-timeline-content -->
          </div>

          <!-- Raytheon -->
          <div class="cd-timeline-block">
            <div class="cd-timeline-img cd-picture">
              <v-icon class="fa-timeline" dark>mdi-airplane</v-icon>
            </div>
            <v-card class="cd-timeline-content" flat>
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
                  Responsible for the development of system requirements,
                  diagrams, and test set software for Identification Friend or
                  Foe (IFF) systems.
                </p>
                <v-card-actions class="pl-0">
                  <div>
                    <v-chip color="#27272f" class="compact-chip" small label>MATLAB</v-chip>
                    <v-chip color="#27272f" class="compact-chip" small label>Simulink</v-chip>
                    <v-chip color="#27272f" class="compact-chip" small label>C</v-chip>
                    <v-chip color="#27272f" class="compact-chip" small label>LabVIEW</v-chip>
                  </div>

                  <v-spacer></v-spacer>

                  <v-btn
                    icon
                    @click="showRaytheon = !showRaytheon"
                  >
                    <v-icon dark >{{ showRaytheon ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                  </v-btn>
                </v-card-actions>

                <v-expand-transition>
                  <div v-show="showRaytheon">
                    <v-divider></v-divider>

                    <v-card-text class="pl-0">
                      <div class="font-weight-regular">
                        <p>Modeled system requirement in Rational Rhapsody for specification document and code generation. Wrote C based test set software to interface with GPIB and RS-232 devices, for instrument control. </p>
                        <p>Automated testing to minimizing manual operator interaction. Developed test plans, procedures, and operation manuals from system requirements specifications. Allocated and maintained system requirements in Rational DOORs.</p>
                      </div>
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </div>
            </v-card>
            <!-- cd-timeline-content -->
          </div>
          <!-- cd-timeline-block -->

          <!-- York College -->
          <div class="cd-timeline-block">
            <div class="cd-timeline-img cd-movie">
              <v-icon class="fa-timeline" dark>mdi-school</v-icon>
            </div>
            <!-- cd-timeline-img -->

            <v-card class="cd-timeline-content" flat>
              <h2>York College of Pennsylvania</h2>
              <p>
                B.S. Electrical Engineering <br />
                Graduated Magna Cum Laude (GPA 3.81)
              </p>
              
              <span class="cd-date">May 2013</span>
              <v-card-actions class="pl-0">
                <div>
                  <v-chip color="#27272f" class="compact-chip" small label>Java</v-chip>
                  <v-chip color="#27272f" class="compact-chip" small label>MATLAB</v-chip>
                  <v-chip color="#27272f" class="compact-chip" small label>C#</v-chip>
                  <v-chip color="#27272f" class="compact-chip" small label>C++</v-chip>
                </div>

                <v-spacer></v-spacer>

                <v-btn
                  icon
                  @click="showYCP = !showYCP"
                >
                  <v-icon dark >{{ showYCP ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
              </v-card-actions>

              <v-expand-transition>
                <div v-show="showYCP">
                  <v-divider></v-divider>

                  <v-card-text class="pl-0">
                    <h3 class="py-1"> Focus Areas </h3>
                    <div class="font-weight-regular">
                      <li>Communications and Networking</li>
                      <li>Systems and Controls</li>
                      <li>Signal Processing</li>
                      <li>Radar and EW Systems</li>
                    </div>
                    <div class="font-weight-regular">
                      <p><b>Capstone Project</b> - Joint Architecture for Unmanned Systems (JAUS) implementation for an autonomous robot. Software implementation of communication system with broadcast discovery, data subscription and control commands. </p>
                      <p><b>Independent Study</b> - Studied Radar and Electronic Warfare systems. Developed a MATLAB simulation of a passive emitter detection and geolocation sensor array. Created course content for an Advanced Radar and Electronic Warefare systems class. </p>
                      <p><b>Pokémon Web App</b> - Created a Pokémon game clone as a web app using Google web toolkit (GWT). Drafted requirements, created UML diagrams, and performed object oriented analysis. Utilized Agile development techniques to manage a 4 person team.</p>
                    </div>
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
            <!-- cd-timeline-content -->
          </div>
          <!-- cd-timeline-block -->

          <!-- Raytheon  Coop-->
          <div class="cd-timeline-block">
            <div class="cd-timeline-img cd-picture">
              <v-icon class="fa-timeline" dark>mdi-airplane</v-icon>
            </div>
            <v-card class="cd-timeline-content" flat>
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
                Supported the allocation and modeling of Identification Friend
                or Foe (IFF) system requirements.
              </p>
              <p class="more-raytheon2 hidden">
                Modeled requirement in Rational Rhapsody for specifications and
                code generation. Developed test plans, procedures, and manuals.
                Allocated and maintained requirements in Rational DOORs.
              </p>
              <div class="more-raytheon2">
                <v-chip color="#27272f" class="compact-chip" small label>MATLAB</v-chip>
                <v-chip color="#27272f" class="compact-chip" small label>Rational DOORs</v-chip>
                <v-chip color="#27272f" class="compact-chip" small label>Rational Rhapsody</v-chip>
                <v-chip color="#27272f" class="compact-chip" small label>UML</v-chip>
              </div>
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
            </v-card>
            <!-- cd-timeline-content -->
          </div>
          <!-- cd-timeline-block -->
        </section>
        <!-- cd-timeline -->
      </section>
    </v-container>
  </v-sheet>
</template>
<script>
export default {
  data() {
    return {
      showTanzen: false,
      showDCS: false,
      showRaytheon: false,
      showRaytheonCoop: false,
      showYCP: false,
      showJHU: false
    }
  }
}
</script>
<style scoped>
/* ------------------------------------------------------------------------ */
/* Show/Hide */
/* ------------------------------------------------------------------------ */

.hidden {
  display: none !important;
}

button.showhide {
  background-color: #33333d;
  color: rgba(255, 255, 255, 0.7);
  border: none;
  font: inherit;
  padding: 5px 20px 5px 0px;
}

button.showhide > p {
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
  max-width: 1400px;
  margin: 0 auto;
  /*background: #2B343A;*/
  /*padding: 0 10%;*/
  border-radius: 2px;
}

.cd-container::after {
  content: "";
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
  content: "";
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
  box-shadow: 0 0 0 4px rgba(94, 208, 177, 0.53),
    inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
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
  max-width: 650px;
  /* border-radius: 2px; */
  padding: 1em;
  /* box-shadow: 0 20px 25px -15px rgba(0, 0, 0, 0.3); */
  /* box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); */
}

.cd-timeline-content .timeline-content-info {
  margin-top: 1em;
  background: #27272f;
  /* color: #33333d; */
  padding: 5px 10px;
  font-size: 13px;
  /* box-shadow: inset 0 1px 0 rgba(0, 0, 0, 0.03);
  border-radius: 2px; */
  border-radius: 6px !important;
}

.cd-timeline-content .timeline-content-info i {
  margin-right: 5px;
}

.cd-timeline-content .timeline-content-info .timeline-content-info-title,
.cd-timeline-content .timeline-content-info .timeline-content-info-date {
  width: calc(50% - 2px);
  display: inline-block;
}

@media (max-width: 500px) {
  .cd-timeline-content .timeline-content-info .timeline-content-info-title,
  .cd-timeline-content .timeline-content-info .timeline-content-info-date {
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
  color: #fff;
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
  padding-left: 0em;
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
  color: #fff;
  margin-top: 0;
  margin-bottom: 5px;
}

.cd-timeline-content h4 {
  color: rgba(255, 255, 255, 0.7);
}

.cd-timeline-content p,
.cd-timeline-content li,
.cd-timeline-content .cd-date,
.cd-timeline-content .content-courses {
  color: rgba(255, 255, 255, 0.7);
  font-weight: 300;
  line-height: 1.375rem;
    letter-spacing: 0.0071428571em;
}

.cd-timeline-content .cd-date {
  display: inline-block;
}

.cd-timeline-content p {
  margin: 1em 0;
  /* line-height: 1.6; */
}

.cd-timeline-content::before {
  content: "";
  position: absolute;
  top: 16px;
  right: 100%;
  height: 0;
  width: 0;
  border: 7px solid transparent;
  border-right: 7px solid #333c42;
}

.cd-timeline-content h2 {
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
    border-left-color: #333c42;
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
    border-right-color: #333c42;
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
.compact-chip{
  margin-right: 4px;
  margin-top: 4px;
}

.theme--dark.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
    background-color: #00000000;
}
</style>
