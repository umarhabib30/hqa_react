import React, { useState } from "react";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
const MobileAdministration = () => {
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const [showMore3, setShowMore3] = useState(false);
  const [showMore4, setShowMore4] = useState(false);

  return (
    <div className="md:hidden px-5 py-10 space-y-10 font-serif overflow-hidden">
      <div className="flex flex-col justify-center items-center space-y-5 text-center">
        <motion.h1
          variants={SlideUp(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[#cf3527] text-3xl md:text-5xl mb-4 italic"
        >
          School Administration
        </motion.h1>
        <motion.h2
          variants={SlideRight(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-2xl md:text-3xl italic mt-6 text-gray-800"
        >
          Educators. Innovators. Role Models.
        </motion.h2>
        <motion.p
          variants={SlideLeft(0.7)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full md:w-6xl text-justify md:text-center text-gray-700"
        >
          Our administration team is the engine that drives daily excellence at
          HQA. From classrooms to campus operations, they lead with professional
          expertise,{" "}
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
          className="text-2xl md:text-3xl italic mb-8"
        >
          Our Esteemed Leadership Team
        </motion.h3>
      </div>

      {/* Card 1: Dr. Hamed Ghazali */}
      <div className="space-y-4">
        <div className="relative w-full flex justify-center">
          <div className="absolute -top-2 -left-4 w-80 h-full bg-blue-900 rounded-md z-0"></div>
          <img
            className="relative z-10 w-full h-110 object-cover rounded-md"
            src="/leadership/a1.jpg"
            alt="Dr. Hamed Ghazali"
          />
        </div>
        <div className="text-gray-800 border-2 border-[#E2E2E2]  rounded-md px-2 py-6">
          <h2 className="text-xl italic mb-1 text-[#00285E]">
            Dr. Hamed Ghazali
          </h2>
          <h4 className="text-lg italic mb-3 text-[#00285E]">
            Founder and Director of Houston Quran Academy
          </h4>
          <p className="text-sm leading-relaxed">
            {/* First 2 paragraphs */}
            Dr. Hamed Ghazali is the visionary founder and current director of
            Houston Quran Academy (HQA), where he has been instrumental in
            transforming the institution into a model of integrated Islamic and
            academic education. A hafiz of the Quran with a Ph.D. in Curriculum
            and Instruction from Kansas State University, Dr. Ghazali brings
            over two decades of experience in Islamic education, having served
            as a principal, superintendent, and imam.
            <br />
            <br />
            Since joining HQA in 2009, Dr. Ghazali has led a comprehensive
            overhaul of the school’s curriculum, expanding it beyond Quranic
            studies to include core academic subjects such as mathematics,
            science, English, social studies, physical education, and art. This
            initiative not only broadened the educational scope but also
            facilitated the school’s accreditation and significant growth in
            student enrollment.
            {/* Show next 2 paragraphs  */}
            {showMore1 && (
              <>
                <br />
                <br />
                Dr. Hamed Ghazali is the visionary founder and current director
                of Houston Quran Academy (HQA), where he has been instrumental
                in transforming the institution into a model of integrated
                Islamic and academic education. A hafiz of the Quran with a
                Ph.D. in Curriculum and Instruction from Kansas State
                University, Dr. Ghazali brings over two decades of experience in
                Islamic education, having served as a principal, superintendent,
                and imam. <br />
                <br />
                Since joining HQA in 2009, Dr. Ghazali has led a comprehensive
                overhaul of the school’s curriculum, expanding it beyond Quranic
                studies to include core academic subjects such as mathematics,
                science, English, social studies, physical education, and art.
                This initiative not only broadened the educational scope but
                also facilitated the school’s accreditation and significant
                growth in student enrollment.
              </>
            )}
          </p>
          <button
            onClick={() => setShowMore1(!showMore1)}
            className="mt-3 bg-blue-900 text-white px-4 py-1 rounded-md font-medium"
          >
            {showMore1 ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>

      {/* Card 2 Sr. Shamima Khalid */}
      <div className="space-y-4">
        <div className="relative w-full flex justify-center">
          <div className="absolute -top-2 -left-4 w-80 h-full bg-blue-900 rounded-md z-0"></div>
          <img
            className="relative z-10 w-full h-110 object-cover rounded-md"
            src="/leadership/a3.jpg"
            alt="Sr. Shamima Khalid"
          />
        </div>
        <div className="text-gray-800">
          <h2 className="text-xl italic mb-1 text-[#00285E]">
            Sr. Shamima Khalid
          </h2>
          <h4 className="text-lg italic mb-3 text-[#00285E]">Vice Principal</h4>
          <p className="text-sm leading-relaxed">
            {/* First 2 paragraphs */}
            Shamima Khalid is one of the esteemed founders of Houston Quran
            Academy (HQA), where she has played a pivotal leadership role in
            establishing and nurturing a faith-based academic environment rooted
            in Islamic values and academic excellence. With a Master’s degree
            and over two decades of experience as a principal and educator in
            Muslim schools, she brought a wealth of knowledge, vision, and
            dedication to the institution.
            {showMore3 && (
              <>
                <br />
                <br />
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
                but also confident in their Islamic identity.
              </>
            )}
          </p>
          <button
            onClick={() => setShowMore3(!showMore3)}
            className="mt-3 bg-blue-900 text-white px-4 py-1 rounded-md font-medium"
          >
            {showMore3 ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>

      {/* Card 3: Dr. Dina Geumei */}
      <div className="space-y-4">
        <div className="relative w-full flex justify-center">
          <div className="absolute -top-2 -left-4 w-80 h-full bg-blue-900 rounded-md z-0"></div>
          <img
            className="relative z-10 w-full h-110 object-cover rounded-md"
            src="/leadership/a2.jpg"
            alt="Dr. Dina Geumei"
          />
        </div>
        <div className="text-gray-800">
          <h2 className="text-xl italic mb-1 text-[#00285E]">
            Dr. Dina Geumei
          </h2>
          <h4 className="text-lg italic mb-3 text-[#00285E]">
            Assistant Principal, Grades 1-3
          </h4>
          <p className="text-sm leading-relaxed">
            {/* First 2 paragraphs */}
            Dr. Dina Geumei serves as the Assistant Principal of the Primary
            School at Houston Quran Academy (HQA), where she brings a rich blend
            of academic expertise, leadership, and a deep commitment to Islamic
            education. With over nine years of experience teaching Quran,
            Arabic, and Islamic Studies, Dr. Geumei has been instrumental in
            shaping the foundational years of students at HQA.
            {showMore4 && (
              <>
                <br />
                <br />
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
              </>
            )}
          </p>
          <button
            onClick={() => setShowMore4(!showMore4)}
            className="mt-3 bg-blue-900 text-white px-4 py-1 rounded-md font-medium"
          >
            {showMore4 ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>

      {/* Card 4: Dr. Dina Geumei */}
      <div className="space-y-4">
        <div className="relative w-full flex justify-center">
          <div className="absolute -top-2 -left-4 w-80 h-full bg-blue-900 rounded-md z-0"></div>
          <img
            className="relative z-10 w-full h-110 object-cover rounded-md"
            src="/leadership/a4.png"
            alt="Dr. Dina Geumei"
          />
        </div>
        <div className="text-gray-800">
          <h2 className="text-xl italic mb-1 text-[#00285E]">Humera Laique </h2>
          <h4 className="text-lg italic mb-3 text-[#00285E]">
            Director HQA Preschool
          </h4>
          <p className="text-sm leading-relaxed">
            {/* First 2 paragraphs */}
            Humera Laique serves as the Director of HQA Preschool, where she has provided 
            dedicated leadership for the past 13 years. 
             more than 15 years of experience in early childhood education, 
             she brings deep expertise, consistency, and a strong commitment to excellence in early learning.
            {showMore4 && (
              <>
                <br />
                <br />
                She is Montessori-certified for Early Childhood (ages 3–6) 
                and is passionate about creating developmentally 
                appropriate learning environments that support each child’s academic, social, and emotional growth. 
                Her approach emphasizes hands-on learning, independence, and curiosity, laying a strong foundation for lifelong learning.
                <br />
                <br />
                Under her leadership, HQA Preschool focuses on nurturing critical thinking, confidence, 
                and positive values both inside and outside the classroom. 
                She is deeply committed to fostering a supportive, values-based environment that partners with 
                families to help children grow into confident, responsible, and well-rounded individuals.
              </>
            )}
          </p>
          <button
            onClick={() => setShowMore4(!showMore4)}
            className="mt-3 bg-blue-900 text-white px-4 py-1 rounded-md font-medium"
          >
            {showMore4 ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileAdministration;
