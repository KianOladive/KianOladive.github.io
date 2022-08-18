<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="home-styles.css" defer>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.3/gsap.min.js" defer></script>
    <script src="home-script.js" defer></script>

    <!-- AOS -->
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

    <title>Ateneo Gabay</title>
</head>
<body>
    <div id="container">

        <div id="loader">
            <div id="loader-greeting">
                Welcome to Gabay's Website!
            </div>
            <div id="loader-loading">
                Loading
            </div>
            <div id="loading-animation">
                <span>.</span>
                <span>.</span>
                <span>.</span>
            </div>
        </div>
        
        <div id="progress-bar">
            <div id="progress"></div>
        </div>

        <div class="navbar">
            <a id="gabay-logo" href="#">
                <img  src="02 Full Logo - Horizontal (White).png" alt="">
            </a>
            <span id="navbar-links">
                <a href="#">Sectors</a>
                <a href="#">Affiliates</a>
                <a href="#">Yabag</a>
                <a href="#">About</a>
            </span>
        </div>

        <div id="landing-page" class="full-view-height">
            <div id="landing-black-layer" class="black-layer" data-rate="0.2"></div>
            <div id="landing-heading" data-rate="-0.5">ATENEO GABAY</div>
            <div id="landing-subheading" data-rate="-0.5">SA IKAAPATNAPU'T ANIM NA TAON NG PAGTATAYA crop picture thanks</div>
        </div>

        <div id="introduction" class="full-view-height">
            <div id="question-mark">?</div>
            <div id="intro-grid-container">
                <div id="intro-heading" class="heading" data-aos="fade-right">What is Gabay?</div>
                <div id="gabay-video" data-aos="fade-right">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/mo4_Io2LxCg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div id="intro-girl" data-aos="fade-left"><img src="assets/Frame 15.webp" alt=""></div>
            <div id="intro-square"></div>

            </div>
        </div>

        <div id="services">
            <div id="services-heading" data-aos="fade-up">Our Services</div>
            <div id="services-cards">

                <div id="card-1" class="card" data-aos="fade-up">
                    <div class="card-header">
                        <div class="services-bg-pic"><img src="assets/1 ACP.webp" alt=""></div>
                        <div class="services-black-layer black-layer"></div>
                        <div class="services-card-logo"><img src="assets/Studybuddy Yellow Icon.webp" alt=""></div>
                    </div>
                    
                    <div class="card-body">
                        <div class="card-text">
                            <div class="card-title">
                                Studybuddy
                            </div>
                            <div class="card-content">
                                Studybuddy is an anonymous online forum where students can discuss concepts from all Ateneo subjects. It also contains a search engine for Gabay's Long Exam Database, which students can use in their self-review. Finally, Studybuddy is the only forum in the world where students can earn real money by posting quality answers. Studybuddy is free for all scholars and Gabayanos.
                            </div>
                        </div>

                        <a href="#" class="card-button">
                            <div class="moving-pane">LEARN MORE</div>
                            <div class="orig-text-button">LEARN MORE</div>
                        </a>
                    </div>
                </div>

                <div id="card-2" class="card" data-aos="fade-up" data-aos-delay="400">
                    <div class="card-header">
                        <div class="services-bg-pic"><img src="assets/2 Neofight.webp" alt=""></div>
                        <div class="services-black-layer black-layer"></div>
                        <div class="services-card-logo"><img src="assets/Scholars_ Card 2021.webp" alt=""></div>
                    </div>
                    
                    <div class="card-body">
                        <div class="card-text">
                            <div class="card-title">
                                Scholars' Card
                            </div>
                            <div class="card-content">
                                The Ateneo Scholars' Card is distributed to undergraduate scholars. The card allows them to avail of various promos and discounts from different partner establishments.
                            </div>
                        </div>

                        <a href="#" class="card-button">
                            <div class="moving-pane">LEARN MORE</div>
                            <div class="orig-text-button">LEARN MORE</div>
                        </a>
                    </div>
                </div>

                <div id="card-3" class="card" data-aos="fade-up" data-aos-delay="800">
                    <div class="card-header">
                        <div class="services-bg-pic"><img src="assets/Copy of erya (334).webp" alt=""></div>
                        <div class="services-black-layer black-layer"></div>
                        <div class="services-card-logo"><img src="assets/Gabby Face.webp" alt=""></div>
                    </div>

                    <div class="card-body">
                        <div class="card-text">
                            <div class="card-title">
                                Gabby the Scholar
                            </div>
                            <div class="card-content">
                                Gabby the Scholar is your friendly online scholar buddy. He disseminates the latest scholar-related information and announcements to the Scholar community. Aside from that, he is a friend you can count on to answer all your questions and will help you adjust academically and socially in the Ateneo!
                            </div>
                        </div>
                    </div>
                </div>

                <div id="card-4" class="card" data-aos="fade-up">
                    <div class="card-header">
                        <div class="services-bg-pic"><img src="assets/Copy of erya (334).webp" alt=""></div>
                        <div class="services-black-layer black-layer"></div>
                        <div class="services-card-logo"><img src="assets/Owlito for Book Lending.webp" alt=""></div>
                    </div>

                    <div class="card-body">
                        <div class="card-text">
                            <div class="card-title">
                                Booklending
                            </div>
                            <div class="card-content">
                                The Ateneo Gabay Book Lending Service provides scholars and members with academic books they can borrow over the duration of one semester for a maintenance fee of only fifty pesos. Other initiatives under the said service includes the Book Drive and the Book Repair Activity.
                            </div>
                        </div>
                    </div>
                </div>
                
                <div id="card-5" class="card" data-aos="fade-up" data-aos-delay="400">
                    <div class="card-header">
                        <div class="services-bg-pic"><img src="assets/1 ACP.webp" alt=""></div>
                        <div class="services-black-layer black-layer"></div>
                        <div class="services-card-logo"><img src="assets/Gabay Store Icon-01.webp" alt=""></div>
                    </div>

                    <div class="card-body">
                        <div class="card-text">
                            <div class="card-title">
                                Gabay Online Store
                            </div>
                            <div class="card-content">
                                The Ateneo Scholars' Card is distributed to undergraduate scholars. The card allows them to avail of various promos and discounts from different partner establishments.
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div id="projects">
            <div id="cream-square-projects"></div>
            <div id="gray-square-projects"></div>

            <div id="projects-col-1" class="projects-col">
                <img src="assets/projects-vector.webp" alt="" id="projects-vector">
                <div id="project-card-one-desc" class="project-description"><span>gts desc</span></div>
                <div id="project-card-two-desc" class="project-description"><span>yep desc</span></div>
                <div id="project-card-three-desc" class="project-description"><span>gorsem desc</span></div>
                <div id="project-card-four-desc" class="project-description"><span>ssg desc</span></div>
                <div id="project-card-five-desc" class="project-description"><span>recweek desc</span></div>
                <div id="project-card-six-desc" class="project-description"><span>preperya desc</span></div>
            </div>

            <div id="projects-col-2" class="projects-col">
                <div id="projects-heading">
                    Upcoming <br> Projects
                </div>
                <div id="project-cards">
                    <div class="project-single-card" onmouseover="cardHoverOne()" onmouseout="cardHoverOneOut()"><span>Gabby the Scholar</span></div>
                    <div class="project-single-card" onmouseover="cardHoverTwo()" onmouseout="cardHoverTwoOut()"><span>Year-End Party</span></div>
                    <div class="project-single-card" onmouseover="cardHoverThree()" onmouseout="cardHoverThreeOut()"><span>GOrsem</span></div>
                    <div class="project-single-card" onmouseover="cardHoverFour()" onmouseout="cardHoverFourOut()"><span>Scholars' Support Group</span></div>
                    <div class="project-single-card" onmouseover="cardHoverFive()" onmouseout="cardHoverFiveOut()"><span>RecWeek</span></div>
                    <div class="project-single-card" onmouseover="cardHoverSix()" onmouseout="cardHoverSixOut()"><span>PrepErya</span></div>
                </div>
            </div>
        </div>

        <div id="footer">
            <div id="link-container">

                <div class="link-column">
                    <div class="link-categ">Sectors</div>
                    <div class="footer-link"><a href="#">Erya</a></div>
                    <div class="footer-link"><a href="#">Atenean Scholars</a></div>
                </div>

                <div class="link-column">
                    <div class="link-categ">Affiliates</div>
                    <div class="footer-link"><a href="#">Kulito</a></div>
                    <div class="footer-link"><a href="#">TikTok</a></div>
                    <div class="footer-link"><a href="#">YouTube</a></div>
                    <div class="footer-link"><a href="#">Gabby the Scholar</a></div>
                </div>

                <div class="link-column">
                    <div class="link-categ">Yabag</div>
                    <div class="footer-link"><a href="#">Newsbrief</a></div>
                    <div class="footer-link"><a href="#">Magazine</a></div>
                </div>

                <div class="link-column">
                    <div class="link-categ">About</div>
                    <div class="footer-link"><a href="#">Advocacy</a></div>
                    <div class="footer-link"><a href="#">History</a></div>
                    <div class="footer-link"><a href="#">Organizational Structure</div>
                    <div class="footer-link"><a href="#">Offices</a></div>
                    <div class="footer-link"><a href="#">Committees</a></div>
                </div>

            </div>

            <div id="contact-container">

                <div id="stay-connected">
                    <div id="stay-connected-text">Stay Connected:</div>
                    <a class="stay-connected-links" href="#">
                        <img src="assets/fb.webp">
                    </a>
                    <a class="stay-connected-links" href="#">
                        <img src="assets/twitter.webp" alt="">
                    </a>
                </div>

                <div id="contact-us">
                    <div id="contact-us-text">Contact Us:</div>

                    <form action="mailto:gabay.ls@obf.ateneo.edu" method="post" enctype="text/plain">
                        <div id="contact-subject-text-area">
                            <input type="text" name="subject" id="subject-input-field" placeholder="Subject">
                        </div>

                        <div id="contact-body-text-area">
                            <textarea  type="text" rows="6" name="body" id="body-text-area" placeholder="Message"></textarea>
                        </div>

                        <div>
                            <input id="email-button" type="submit" value="Send Message">
                        </div>
                    </form>

                    <a id="footer-button" onclick="sendEmail()">
                        <div id="moving-pane-footer">SEND</div>
                        <div id="orig-text-button-footer">SEND</div>
                    </a>
                </div>

            </div>
        </div>


    </div>
</body>
<script>
    AOS.init();
  </script>
</html>