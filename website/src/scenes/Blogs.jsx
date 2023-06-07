import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import project1 from '../assets/project-1.jpg'
import project2 from '../assets/project-2.jpeg'
import project3 from '../assets/project-3.jpeg'
import project4 from '../assets/project-4.jpeg'
import project5 from '../assets/project-5.jpeg'
import project6 from '../assets/project-6.jpeg'
import project7 from '../assets/project-7.jpeg'
import '../App.scss'

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title ,src,data}) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7 text-black">
         {data}
        </p>
      </div>
      <img  src={src} className="rounded-3xl blog" alt={projectTitle} />
    </motion.div>
  );
};
const data1="helooo 1 "
const data2="hellooo 2"
const data3="hellooo 3"
const data4="hellooo 4"
const data5="hrllo 5"
const data6="heloo 6"
const data7="helooo 7"
const Blogs = () => {
  return (
    <section id="" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">BL</span>OGS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
         Here are Few blogs
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            Helping the 
          </div>
          <Project title="Project 1" src={project1}  className="blog" data={data1}/>
          <Project title="Project 2" src={project2}  className="blog" data={data2}/>

          {/* ROW 2 */}
          <Project title="Project 3" src={project3} className="blog" data={data3}/>
          <Project title="Project 4" src={project4} className="blog" data={data4}/>
          <Project title="Project 5" src={project5} className="blog" data={data5} />

          {/* ROW 3 */}
          <Project title="Project 6" src={project6} className="blog" data={data6}/>
          <Project title="Project 7" src={project7} className="blog" data={data7}/>
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            Farmers World Wide
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blogs;
