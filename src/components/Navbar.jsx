import { useState, useEffect, useRef } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaBars,
  FaTimes,
  FaSatelliteDish,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {

  // ===========================
  // STATES
  // ===========================

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  // Used for sliding underline
  const navRef = useRef(null);
  const indicatorRef = useRef(null);

  // ===========================
  // NAVIGATION ITEMS
  // ===========================

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Research", href: "#publications" },
    { name: "Contact", href: "#contact" },
  ];

  // ===========================
  // DETECT SCROLL
  // ===========================

  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 40);

    };

    window.addEventListener("scroll", handleScroll);

    return () => {

      window.removeEventListener("scroll", handleScroll);

    };

  }, []);

  // ===========================
  // ACTIVE SECTION
  // ===========================

  useEffect(() => {

    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            setActiveSection(entry.target.id);

          }

        });

      },

      {

        threshold: 0.35,

        rootMargin: "-120px 0px -40% 0px",

      }

    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();

  }, []);

  // ===========================
  // MOVE ACTIVE INDICATOR
  // ===========================

  useEffect(() => {

    if (!navRef.current) return;

    if (!indicatorRef.current) return;

    const activeLink = navRef.current.querySelector(

      `[data-section="${activeSection}"]`

    );

    if (!activeLink) return;

    indicatorRef.current.style.width =
      `${activeLink.offsetWidth}px`;

    indicatorRef.current.style.left =
      `${activeLink.offsetLeft}px`;

  }, [activeSection]);

  // ===========================
  // START COMPONENT
  // ===========================

  return (

    <>

      <motion.nav

        initial={{ y: -80 }}

        animate={{

          y: 0,

        }}

        transition={{

          duration: .5,

        }}

        className="fixed top-0 left-0 w-full z-50"

      >

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">

          <motion.div

            animate={{

              scale: scrolled ? 0.97 : 1,

            }}

            transition={{

              duration: .3,

            }}

            className={`

            rounded-2xl

            border

            backdrop-blur-xl

            transition-all

            duration-500

            ${
              scrolled

              ? "bg-[#07111F]/95 border-cyan-400/30 shadow-[0_10px_45px_rgba(0,255,255,.15)]"

              : "bg-[#07111F]/75 border-cyan-500/20"

            }

            `}

          >

            <div className="flex items-center justify-between px-6 h-20">

              {/* =======================
                  LOGO
              ======================== */}

              <motion.a

                href="#about"

                whileHover={{ scale: 1.05 }}

                className="flex items-center gap-4"

              >

                <motion.div

                  animate={{

                    rotate: 360,

                  }}

                  transition={{

                    repeat: Infinity,

                    duration: 18,

                    ease: "linear",

                  }}

                  className="h-12 w-12 rounded-xl bg-cyan-500/10 border border-cyan-500 flex items-center justify-center text-cyan-400"

                >

                  <FaSatelliteDish size={20}/>

                </motion.div>

                <div>

                  <h1 className="text-xl font-bold text-white">

                    Nirbhay Singh

                  </h1>

                  <p className="text-xs tracking-widest text-cyan-400">

                    RADAR SYSTEMS ARCHITECT

                  </p>

                </div>

              </motion.a>

              {/* ======================================================
                     PART 2 STARTS HERE
                 ====================================================== */}

                               {/* ===========================
                  DESKTOP NAVIGATION
              ============================ */}

              <div className="hidden lg:flex items-center">

                <ul
                  ref={navRef}
                  className="relative flex items-center gap-2"
                >

                  {navItems.map((item) => {

                    const section = item.href.replace("#", "");

                    const isActive = activeSection === section;

                    return (

                      <li key={item.name}>

                        <a

                          href={item.href}

                          data-section={section}

                          className={`
                            relative
                            px-5
                            py-3
                            rounded-xl
                            transition-all
                            duration-300
                            font-medium

                            ${
                              isActive

                              ? "text-cyan-300 bg-cyan-500/10"

                              : "text-gray-300 hover:text-cyan-400"
                            }
                          `}
                        >

                          {item.name}

                        </a>

                      </li>

                    );

                  })}

                  {/* Sliding Indicator */}

                  <motion.div

                    ref={indicatorRef}

                    className="absolute bottom-0 h-[3px] rounded-full bg-cyan-400"

                    layout

                    transition={{

                      type:"spring",

                      stiffness:400,

                      damping:30

                    }}

                  />

                </ul>

              </div>

              {/* ===========================
                    RIGHT SIDE
              ============================ */}

              <div className="hidden lg:flex items-center gap-4">

                {/* LinkedIn */}

                <motion.a

                  whileHover={{

                    scale:1.15,

                    rotate:8

                  }}

                  whileTap={{

                    scale:.9

                  }}

                  href="https://linkedin.com/in/YOUR-LINKEDIN"

                  target="_blank"

                  rel="noreferrer"

                  className="
                  h-11
                  w-11
                  rounded-xl
                  bg-slate-800
                  border
                  border-cyan-500/20
                  flex
                  items-center
                  justify-center
                  text-cyan-400
                  hover:bg-cyan-500
                  hover:text-black
                  transition-all
                  "

                >

                  <FaLinkedin size={20}/>

                </motion.a>

                {/* GitHub */}

                <motion.a

                  whileHover={{

                    scale:1.15,

                    rotate:-8

                  }}

                  whileTap={{

                    scale:.9

                  }}

                  href="https://github.com/YOUR_GITHUB"

                  target="_blank"

                  rel="noreferrer"

                  className="
                  h-11
                  w-11
                  rounded-xl
                  bg-slate-800
                  border
                  border-cyan-500/20
                  flex
                  items-center
                  justify-center
                  text-cyan-400
                  hover:bg-cyan-500
                  hover:text-black
                  transition-all
                  "

                >

                  <FaGithub size={20}/>

                </motion.a>

                {/* Resume */}

                <motion.a

                  whileHover={{

                    scale:1.05

                  }}

                  whileTap={{

                    scale:.95

                  }}

                  href={`${import.meta.env.BASE_URL}resume.pdf`}

                  download="Nirbhay_Singh_Resume.pdf"

                  className="
                  group
                  bg-cyan-500
                  hover:bg-cyan-400
                  text-black
                  font-bold
                  px-6
                  py-3
                  rounded-xl
                  flex
                  items-center
                  gap-3
                  transition-all
                  duration-300
                  hover:shadow-[0_0_25px_rgba(0,255,255,.45)]
                  "

                >

                  <motion.div

                    animate={{

                      y:[0,-2,0]

                    }}

                    transition={{

                      repeat:Infinity,

                      duration:2

                    }}

                  >

                    <FaDownload/>

                  </motion.div>

                  Resume

                </motion.a>

              </div>

              {/* ===========================
                  MOBILE MENU BUTTON
              ============================ */}

              <button

                onClick={() => setMenuOpen(!menuOpen)}

                className="
                lg:hidden
                text-cyan-400
                text-2xl
                p-2
                "

              >

                {menuOpen ? <FaTimes/> : <FaBars/>}

              </button>

            </div>

          </motion.div>

        </div>

      </motion.nav>

      {/* ===================================================
                 PART 3 STARTS HERE
      =================================================== */}
            <AnimatePresence>

        {menuOpen && (

          <motion.div

            initial={{ opacity: 0, y: -25 }}

            animate={{ opacity: 1, y: 0 }}

            exit={{ opacity: 0, y: -25 }}

            transition={{ duration: 0.25 }}

            className="
              lg:hidden
              fixed
              top-24
              left-4
              right-4
              z-50
            "

          >

            <div
              className="
                rounded-3xl
                border
                border-cyan-500/20
                bg-[#07111F]/95
                backdrop-blur-2xl
                shadow-[0_10px_50px_rgba(0,255,255,.15)]
                overflow-hidden
              "
            >

              {/* Mobile Navigation */}

              <div className="flex flex-col py-4">

                {navItems.map((item) => {

                  const section = item.href.replace("#", "");

                  const isActive = activeSection === section;

                  return (

                    <a

                      key={item.name}

                      href={item.href}

                      onClick={() => setMenuOpen(false)}

                      className={`
                        px-8
                        py-4
                        transition-all
                        duration-300
                        border-l-4

                        ${
                          isActive
                            ? "border-cyan-400 bg-cyan-500/10 text-cyan-300"
                            : "border-transparent text-gray-300 hover:bg-slate-800 hover:text-cyan-400"
                        }
                      `}
                    >

                      {item.name}

                    </a>

                  );

                })}

              </div>

              {/* Divider */}

              <div className="border-t border-cyan-500/20" />

              {/* Social Icons */}

              <div className="flex justify-center gap-5 py-6">

                <motion.a

                  whileHover={{ scale: 1.15 }}

                  whileTap={{ scale: .9 }}

                  href="https://www.linkedin.com/in/nirbhay-kumar-singh-01354256/"

                  target="_blank"

                  rel="noreferrer"

                  className="
                    h-12
                    w-12
                    rounded-xl
                    bg-slate-800
                    border
                    border-cyan-500/20
                    flex
                    items-center
                    justify-center
                    text-cyan-400
                    hover:bg-cyan-500
                    hover:text-black
                    transition-all
                  "

                >

                  <FaLinkedin size={20}/>

                </motion.a>

                <motion.a

                  whileHover={{ scale: 1.15 }}

                  whileTap={{ scale: .9 }}

                  href="https://nirbhaybel.github.io/Profile/"

                  target="_blank"

                  rel="noreferrer"

                  className="
                    h-12
                    w-12
                    rounded-xl
                    bg-slate-800
                    border
                    border-cyan-500/20
                    flex
                    items-center
                    justify-center
                    text-cyan-400
                    hover:bg-cyan-500
                    hover:text-black
                    transition-all
                  "

                >

                  <FaGithub size={20}/>

                </motion.a>

              </div>

              {/* Resume Button */}

              <div className="px-6 pb-6">

                <motion.a

                  whileHover={{ scale: 1.02 }}

                  whileTap={{ scale: .97 }}

                  href={`${import.meta.env.BASE_URL}resume.pdf`}

                  download="Nirbhay_Singh_Resume.pdf"

                  onClick={() => setMenuOpen(false)}

                  className="
                    w-full
                    bg-cyan-500
                    hover:bg-cyan-400
                    rounded-xl
                    py-4
                    font-bold
                    text-black
                    flex
                    justify-center
                    items-center
                    gap-3
                    transition-all
                  "

                >

                  <FaDownload />

                  Download Resume

                </motion.a>

              </div>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </>

  );

}