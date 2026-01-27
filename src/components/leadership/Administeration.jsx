import { motion } from "framer-motion";
import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
const Administeration = () => {
  return (
    <div>
      <div className="py-12 px-10 space-y-5 mb-6 font-serif">
        <div className="flex flex-col justify-center items-center space-y-5 text-center overflow-hidden">
          <motion.h1
            variants={SlideUp(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[#cf3527] h1 mb-4 italic"
          >
            School Administration
          </motion.h1>
          <motion.h2
            variants={SlideRight(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="h2 italic mt-6  text-gray-800"
          >
            Educators. Innovators. Role Models.
          </motion.h2>
          <motion.p
            variants={SlideLeft(0.7)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full md:w-6xl text-justify md:text-center p  text-gray-700"
          >
            Our administration team is the engine that drives daily excellence
            at HQA. From classrooms to campus operations, they lead with
            professional expertise,{" "}
            <strong>Islamic character, and unwavering dedication.</strong>
            <br />
            <br />
            Together, they create a{" "}
            <strong>nurturing, innovative, and safe environment</strong> where
            faith and knowledge flourish side by side.
          </motion.p>
          <motion.h3
            variants={SlideRight(0.9)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="h2 italic mb-8"
          >
            Our Esteemed Leadership Team
          </motion.h3>
        </div>

        <motion.div
          variants={SlideUp(0.9)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative shadow-[0_0_30px_rgba(0,0,0,0.25)] flex flex-col justify-center items-center px-10 mb-16 rounded-lg"
        >
          {/* Blue div behind the whole card */}
          <div className="absolute -top-3 left-2 md:-left-0 z-[-1] w-[20%] md:w-[26%] h-90 rounded-[5px] shadow-xl bg-[#00285E]"></div>

          {/* Main content  */}
          <div className="flex flex-col md:flex-row justify-center items-center md:space-x-11 space-y-4 md:space-y-0">
            <img
              className="h-64 md:h-96 rounded-[8px] w-full md:w-auto max-w-xs object-cover relative z-10"
              src="/leadership/a1.jpg"
              alt="Dr. Hamed Ghazali"
            />
            <div className="w-full">
              <h1 className="text-[#00285E]  h2">Dr. Hamed Ghazali</h1>
              <h4 className="text-[#00285E] italic mb-6 text-2xl">
                Founder and Director of Houston Quran Academy
              </h4>
              <p className="w-full hidden md:block ">
                Dr. Hamed Ghazali is the visionary founder and current director
                of Houston Quran Academy (HQA), where he has been instrumental
                in transforming the institution into a model of integrated
                Islamic and academic education. A hafiz of the Quran with a
                Ph.D. in Curriculum and Instruction from Kansas State
                University, Dr. Ghazali brings over two decades of experience in
                Islamic education, having served as a principal, superintendent,
                and imam.
                <br />
                <br />
                Since joining HQA in 2009, Dr. Ghazali has led a comprehensive
                overhaul of the school’s curriculum, expanding it beyond Quranic
                studies to include core academic subjects such as mathematics,
                science, English, social studies, physical education, and art.
                This initiative not only broadened the educational scope but
                also facilitated the school’s accreditation and significant
                growth in student enrollment.
              </p>
            </div>
          </div>

          {/* Extra paragraphs  */}
          <div className="w-full mt-4 space-y-4 mb-4">
            <p>
              Dr. Hamed Ghazali is the visionary founder and current director of
              Houston Quran Academy (HQA), where he has been instrumental in
              transforming the institution into a model of integrated Islamic
              and academic education. A hafiz of the Quran with a Ph.D. in
              Curriculum and Instruction from Kansas State University, Dr.
              Ghazali brings over two decades of experience in Islamic
              education, having served as a principal, superintendent, and imam.
            </p>
            <p>
              Since joining HQA in 2009, Dr. Ghazali has led a comprehensive
              overhaul of the school’s curriculum, expanding it beyond Quranic
              studies to include core academic subjects such as mathematics,
              science, English, social studies, physical education, and art.
              This initiative not only broadened the educational scope but also
              facilitated the school’s accreditation and significant growth in
              student enrollment.
            </p>
          </div>
        </motion.div>

        {/* FIRST sub CARD END */}

        {/*2nd card*/}
        <motion.div
          variants={SlideRight(1.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative shadow-[0_0_30px_rgba(0,0,0,0.25)] flex flex-col justify-center items-center px-10 mb-16 rounded-lg py-6"
        >
          <div className="absolute top-4 left-6 z-[-1] w-[14%] md:w-[18%] h-60 rounded-[5px] shadow-xl bg-[#00285E]"></div>

          {/* Main content  */}
          <div className="flex flex-col md:flex-row justify-center items-center md:space-x-11 space-y-4 md:space-y-0">
            <img
              className="h-64 md:h-76 mb-20 rounded-[8px] w-full md:w-auto max-w-xs object-cover relative z-10"
              src="/leadership/a3.jpg"
              alt="Dr. Hamed Ghazali"
            />
            <div className="w-full">
              <h1 className="text-[#00285E] italic  h2"> Sr. Shamima Khalid</h1>
              <h4 className="text-[#00285E] italic mb-6 text-2xl">
                Vice principal{" "}
              </h4>
              <p className="w-full hidden md:block ">
                Shamima Khalid is one of the esteemed founders of Houston Quran
                Academy (HQA), where she has played a pivotal leadership role in
                establishing and nurturing a faith-based academic environment
                rooted in Islamic values and academic excellence. With a
                Master’s degree and over two decades of experience as a
                principal and educator in Muslim schools, she brought a wealth
                of knowledge, vision, and dedication to the institution.
                <br />
                <br />
                As a founding leader, Shamima Khalid was instrumental in shaping
                HQA’s mission and curriculum, emphasizing both strong Quranic
                education and rigorous academic standards. Her leadership was
                characterized by a student-centered approach, faculty
                development, and the creation of a nurturing environment that
                fosters moral and spiritual growth alongside scholastic
                achievement.
                <br />
                <br />
                Throughout her tenure, she mentored teachers, engaged parents,
                and helped build a school culture grounded in compassion,
                discipline, and continuous improvement. Her contributions have
                had a lasting impact on the community, helping to raise
                generations of students who are not only academically capable
                but also confident in their Islamic identity.
              </p>
            </div>
          </div>
        </motion.div>

        {/*3rd card*/}
        <motion.div
          variants={SlideRight(1.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative shadow-[0_0_30px_rgba(0,0,0,0.25)] flex flex-col justify-center items-center px-10 mb-16 rounded-lg py-6"
        >
          <div className="absolute top-4 left-6 z-[-1] w-[14%] md:w-[18%] h-60 rounded-[5px] shadow-xl bg-[#00285E]"></div>

          {/* Main content  */}
          <div className="flex flex-col md:flex-row justify-center items-center md:space-x-11 space-y-4 md:space-y-0">
            <img
              className="h-64 md:h-76 mb-30 rounded-[8px] w-full md:w-auto max-w-xs object-cover relative z-10"
              src="/leadership/a2.jpg"
              alt="Dr. Hamed Ghazali"
            />
            <div className="w-full">
              <h1 className="text-[#00285E] italic  h2"> Dr. Dina Geumei</h1>
              <h4 className="text-[#00285E] italic mb-6 text-2xl">
                Assistant Principal, Grades 1-3{" "}
              </h4>
              <p className="w-full hidden md:block ">
                Dr. Dina Geumei serves as the Assistant Principal of the Primary School at Houston Quran Academy (HQA), 
                where she brings a rich blend of academic expertise, leadership, and a deep commitment to Islamic education. 
                With over nine years of experience teaching Quran, Arabic, and Islamic Studies, 
                Dr. Geumei has been instrumental in shaping the foundational years of students at HQA.   
                <br />
                <br />
                Dr. Geumei’s educational journey began as a teaching assistant at the University of Alexandria, where she taught management, logistics, 
                human resources, and marketing for three years. After relocating to the United States, she earned an MBA from the University of Houston-Clear
                 Lake and later completed a Doctor of Education (Ed.D.) in Educational Leadership from the same institution. 
                She also holds a high diploma in teaching Islamic studies from Guidance University and an Ijazah in Norani teaching.   
                <br />
                <br />
                At HQA, Dr. Geumei has taken on multiple leadership roles, including Arabic coordinator, mentor, 
                and coach, leading various educational programs. 
                She founded the Creative Arabic Teacher Society (CATS) and directed the monthly theme program, 
                initiatives that have enriched the school’s curriculum and fostered a dynamic learning environment.
              </p>
            </div>
          </div>
        </motion.div>
        {/*4rd card*/}
        <motion.div
          variants={SlideRight(1.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative shadow-[0_0_30px_rgba(0,0,0,0.25)] flex flex-col justify-center items-center px-10 mb-16 rounded-lg py-6"
        >
          <div className="absolute top-4 left-6 z-[-1] w-[14%] md:w-[18%] h-60 rounded-[5px] shadow-xl bg-[#00285E]"></div>

          {/* Main content  */}
          <div className="flex flex-col md:flex-row justify-center items-center md:space-x-11 space-y-4 md:space-y-0">
            <img
              className="h-64 md:h-76 mb-30 rounded-[8px] w-full md:w-auto max-w-xs object-cover relative z-10"
              src="/leadership/a4.png"
              alt="Dr. Hamed Ghazali"
            />
            <div className="w-full">
              <h1 className="text-[#00285E] italic  h2">Humera Laique </h1>
              <h4 className="text-[#00285E] italic mb-6 text-2xl">
                Director HQA Preschool
              </h4>
              <p className="w-full hidden md:block ">
               Humera Laique serves as the Director of HQA Preschool, where she has provided dedicated leadership for the past 13 years. 
               With more than 15 years of experience in early childhood education, she brings deep expertise, consistency, 
               and a strong commitment to excellence in early learning.
                <br />
                <br />
                Montessori-certified for Early Childhood (ages 3–6), she is dedicated to nurturing 
                academic growth, critical thinking, and strong positive values both in and beyond the classroom.
                <br />
                <br />
    
              </p>
            </div>
          </div>
        </motion.div>

        {/* SECOND AND THIRD CARDS */}
        {/* <motion.div
          variants={SlideUp(1.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row mt-4 gap-4"
        > */}
        {/* Card 2 */}
        {/* <div className="flex-1 ">
            <div className="relative shadow-[0_0_30px_rgba(0,0,0,0.25)] flex flex-col justify-center items-center p-2 gap-0 rounded-lg py-6">
              <div className="bg-blue-950 h-40 w-28 md:h-72 md:w-58 absolute left-2 md:left-0 top-2 md:top-4 z-[-2] rounded-[5px]"></div>

              <div className="flex flex-col md:flex-row justify-center items-start md:space-x-6 space-y-4 md:space-y-0">
                <img
                  className="h-56 md:h-80 rounded-[8px]  w-[42%] object-cover"
                  src="/leadership/a3.jpg"
                  alt="Sr. Shamima Khalid"
                />

                <div className="w-full self-start">
                  <h1 className="text-[#00285E] italic  text-3xl">
                    Sr. Shamima Khalid
                  </h1>
                  <h4 className="text-[#00285E]  mb-4 text-2xl">
                    Vice principal{" "}
                  </h4>
                  <p className="hidden md:block text-base">
                    Shamima Khalid is one of the esteemed founders of Houston
                    Quran Academy (HQA), where she has played a pivotal
                    leadership role in establishing and nurturing a faith-based
                    academic environment rooted in Islamic values and academic
                    excellence. With a Master’s degree and over two decades of
                    experience as a principal and educator in Muslim schools,
                    she brought a wealth of knowledge, vision, and dedication to
                    the institution.
                  </p>
                </div>
              </div>

              <p className="w-full md:hidden">
                As a founding leader, Shamima Khalid was instrumental in shaping
                HQA’s mission and curriculum, emphasizing both strong Quranic
                education and rigorous academic standards. Her leadership was
                characterized by a student-centered approach, faculty
                development, and the creation of a nurturing environment that
                fosters moral and spiritual growth alongside scholastic
                achievement.
              </p>

              <p>
                As a founding leader, Shamima Khalid was instrumental in shaping
                HQA's mission and curriculum, emphasizing both strong Quranic
                education and rigorous academic standards. Her leadership was
                characterized by a student-centered approach, faculty
                development, and the creation of a nurturing environment that
                fosters moral and spiritual growth alongside scholastic
                achievement.
                <br />
                <br />
                Throughout her tenure, she mentored teachers, engaged parents,
                and helped build a school culture grounded in compassion,
                discipline, and continuous improvement. Her contributions have
                had a lasting impact on the community, helping to raise
                generations of students who are not only academically capable
                but also confident in their Islamic identity.
              </p>
            </div>
          </div> */}

        {/* <div className="flex-1 ">
            <div className="relative shadow-[0_0_30px_rgba(0,0,0,0.25)] flex flex-col justify-center items-center p-2 gap-0 rounded-lg py-6">
              <div className="bg-blue-950 h-40 w-28 md:h-72 md:w-58 absolute left-2 md:left-0 top-2 md:top-4 z-[-2] rounded-[5px]"></div>

              <div className="flex flex-col md:flex-row justify-center items-start md:space-x-6 space-y-4 md:space-y-0">
                <img
                  className="h-56 md:h-80 rounded-[8px]  w-[42%] object-cover"
                  src="/leadership/a2.jpg"
                  alt="Sr. Shamima Khalid"
                />

                <div className="w-full self-start">
                  <h1 className="text-[#00285E] italic  text-3xl">
                    Dr. Dina Geumei
                  </h1>
                  <h4 className="text-[#00285E]  mb-4 text-2xl">
                    Assistant Principal, Grades 1-3{" "}
                  </h4>
                  <p className="hidden md:block text-base">
                    Dr. Dina Geumei serves as the Assistant Principal of the
                    Primary School at Houston Quran Academy (HQA), where she
                    brings a rich blend of academic expertise, leadership, and a
                    deep commitment to Islamic education. With over nine years
                    of experience teaching Quran, Arabic, and Islamic Studies,
                    Dr. Geumei has been instrumental in shaping the foundational
                    years of students at HQA.
                  </p>
                </div>
              </div>

              <p className="w-full md:hidden">
                As a founding leader, Shamima Khalid was instrumental in shaping
                HQA’s mission and curriculum, emphasizing both strong Quranic
                education and rigorous academic standards. Her leadership was
                characterized by a student-centered approach, faculty
                development, and the creation of a nurturing environment that
                fosters moral and spiritual growth alongside scholastic
                achievement.
              </p>

              <p className="mt-2">
                Dr. Geumei’s educational journey began as a teaching assistant
                at the University of Alexandria, where she taught management,
                logistics, human resources, and marketing for three years. After
                relocating to the United States, she earned an MBA from the
                University of Houston-Clear Lake and later completed a Doctor of
                Education (Ed.D.) in Educational Leadership from the same
                institution. She also holds a high diploma in teaching Islamic
                studies from Guidance University and an Ijazah in Norani
                teaching.
                <br />
                <br />
                At HQA, Dr. Geumei has taken on multiple leadership roles,
                including Arabic coordinator, mentor, and coach, leading various
                educational programs. She founded the Creative Arabic Teacher
                Society (CATS) and directed the monthly theme program,
                initiatives that have enriched the school’s curriculum and
                fostered a dynamic learning environment.
              </p>
            </div>
          </div> */}
        {/* </motion.div> */}
      </div>
    </div>
  );
};

export default Administeration;
