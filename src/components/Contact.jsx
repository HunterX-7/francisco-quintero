import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import styles from "../styles";
import { SatelliteCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setForm({ ...form, [name]: value, });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_p942pve",
        "template_4wmpjsy",
        {
          from_name: form.name,
          to_name: "Francisco Quintero",
          from_email: form.email,
          to_email: "fraquin7@gmail.com",
          message: form.message,
        },
        "D2szR4hOvOCqDMEbV"
      )
      .then(
        () => {
          setLoading(false);
          alert("I appreciate your message, and I will respond to you as soon as I can.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Oh no, an error occurred. Kindly give it another try, please.");
        }
      );
  };

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn('right', "tween", 0.2, 1)} className='flex-[0.75] bg-tertiary p-8 rounded-2xl'>
      <p className={styles.sectionSubText}>Get in touch</p>
      <h2 className={`${styles.sectionHeadText} text-[#07BEB8] tracking-wider`}>Contact</h2>
      <p className='mt-4 text-[18px] max-w-3xl leading-[30px]'>If you are interested in having a conversation, I'm always eager to learn about new projects. Feel free to reach out to me.</p>
      <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
        <label className="flex flex-col">
          <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Full Name" 
          className="bg-quaternary py-4 px-4 placeholder:text-secondary text-white rounded-lg font-medium" />
        </label>
        <label className="flex flex-col">
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email Address" 
          className="bg-quaternary py-4 px-4 placeholder:text-secondary text-white rounded-lg font-medium" />
        </label>
        <label className="flex flex-col">
          <textarea rows="7" name="message" value={form.message} onChange={handleChange} placeholder="Type your message here" 
          className="bg-quaternary py-4 px-4 placeholder:text-secondary text-white rounded-lg font-medium" />
        </label>
        <button
          type='submit'
          className='bg-quaternary hover:bg-quinary active:bg-quinary focus:outline-none 
            focus:ring focus:ring-blue-300 w-fit py-3 px-8 rounded-xl font-semibold'
        >
            {loading ? "Sending..." : "Send"}
        </button>
      </form>
      </motion.div>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <SatelliteCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");
