import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

export default function Navbar() {

    return (

<nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#07111fcc] border-b border-cyan-500/20">

<div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

<div>

<h1 className="text-2xl font-bold text-cyan-400">

Nirbhay Singh

</h1>

</div>

<ul className="hidden md:flex gap-8">

<li><a href="#about" className="hover:text-cyan-400">About</a></li>

<li><a href="#experience" className="hover:text-cyan-400">Experience</a></li>

<li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>

<li><a href="#publications" className="hover:text-cyan-400">Research</a></li>

<li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>

</ul>

<div className="flex gap-5">

<a href="https://linkedin.com">

<FaLinkedin size={22}/>

</a>

<a href="https://github.com">

<FaGithub size={22}/>

</a>

<a
  href={`${import.meta.env.BASE_URL}resume.pdf`}
  download="Nirbhay_Singh_Resume.pdf"
  target="_self"
  className="text-cyan-400 hover:text-cyan-300 transition"
  title="Download Resume"
>
  <FaDownload size={20} />
</a>

</div>

</div>

</nav>

);

}