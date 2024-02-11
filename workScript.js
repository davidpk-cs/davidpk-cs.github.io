var tfInfo = `<h2>Teaching Fellow</h2>\
<h5>UMBC</h5>\
<h5>Fall 2022 - Present</h5>\
\
<p>Every semester since the fall of 2022, I've been a part of the course staff for CMSC 201, UMBC's introductory computer science class, at UMBC. \
    My job there has several responsibilities. First of all, I'm responsible for a 1-hour lab section (consisting of 20 students). In these labs,\
    I briefly cover the relevant material and then facilitate an exercise and grade students for their work on the problem. Next, I'm responsible for\
    being present 3 hours a week of office hours. Here I help students with assignments, pointing them in the right direction when they don't know how\
    to approach a problem or project. The final big responsibility I have as a teaching fellow is grading most of the assignments of my lab section. This\
    includes their homework and projects. In addition, I may have some other responsibilities, such as exam proctoring/grading or responding to student emails.\
</p>\
\
<p>\
    Being a teaching fellow has been very enjoyable and rewarding. The students taking CMSC201 enter the course with varying degrees of experience. Some are already\
    prepared for more advanced courses, others are completely new to programming. As a result, I've had to develop my ability to take tricky concepts and explain them in a\
    easy-to-understand manner. As a result, I've gotten a lot better at presenting things in all aspects of life.\
</p>`;

var brInfo = `<h2>Assistant Instructor</h2>\
<h5>Black Rocket Productions</h5>\
<h5>Summer 2023</h5>\
\
<p>Over the summer of 2023, I worked as an Instructor at Black Rocket Productions, a summer camp vendor/partner with various STEM based camps all over the country. I worked with\
another instructor to teach a class of kids how to use various software creatively in a fun and engaging manner. While there were outlines for all courses taught, being able to\
re-adjust plans throughout the week was a necessary part of the job in order to ensure that the kids were safe, had fun, and learned something meaningful by the end of the week.\
Some of the software taught inclues Unity, Atmosphir, LMMS, Hitfilm Express, etc.\
</p>\
\
<p>\
    Working at Black Rocket was not only very fun, it was also quite enriching for myself just as it was for the kids in the classes I was teaching. My presentation and interpersonal\
    skills got a boost (akin to all the other jobs I worked) and I got better at explaining tricky concepts in an easy to understand manner. In addition, I was able to gain exposure to\
    various software myself, thus increasing my available toolset.\
</p>`;

var cfaInfo = `<h2>Team Member/Leader</h2>\
<h5>UMBC</h5>\
<h5>Fall 2021 - Fall 2022</h5>\
\
<p>Shortly after graduating from High School, I got a job as a Team Member at Chick-Fil-A. My responsibilities varied from day to day. The primary duties I\
performed included order-taking, drink making, working at the window, bagging, or running orders. I was promoted to Team Leader following my first evaluation (roughly 6 months in).\
Team Leader duties include running the shifts of Team Member's working the drive-thru (their roles and breaks), leading closing for front of the house, answering the phone, taking catering\
orders, and resolving customer issues.\
</p>\
\
<p>\
    Working at Chick-Fil-A gave me a lot of transferrable skills. People skills, for a start, given how many people I would interact with day to day. As a Team Leader I also learned and\
    developed my leadership skills. This most important skill I was able to hone, however, was being able to remain steady under pressure and maintaina sense of urgency when needed.\
</p>`;

var pgInfo = `<h2>Inclusion Aide</h2>\
<h5>PG Parks and Recreation</h5>\
<h5>Summer 2019</h5>\
\
<p>My very first job was as an Inclusion Aide as part of the inclusion services offered by Prince Georrges County Parks and Recreation. My primary duty as an Inclusion Aide was working with a\
specific child with special needs at a summer camp and helping them integrate into the general camp environment. In order to do my job however, I did get to know all the kids in the classes I\
was in.\
</p>\
\
<p>\
    As my first job, that summer held a special place in my heart. The biggest "skill" I gained was empathy. This job, as my first did help me learn how to be punctual and have a good
    work ethic. Getting to work on time was especially hard then because I had to take 2 busses (too young to drive then).
</p>`;


function changeJob(job){

    jobElement = document.getElementById("jobInfo");

    if(job == 1){
        jobElement.innerHTML = tfInfo;
    }
    if(job == 2){
        jobElement.innerHTML = brInfo;
    }
    if(job == 3){
        jobElement.innerHTML = cfaInfo;
    }
    if(job == 4){
        jobElement.innerHTML = pgInfo;
    }
}