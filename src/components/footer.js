import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


export default function Footer() {
    return (
        <footer className="flex justify-center items-center h-16 bg-black text-white">
            <div className="flex justify-center">
                <a
                    href="https://github.com/Eduadomtz?tab=repositories"
                    className="p-2"

                ><FaGithub />
                </a>
                <a
                    href="https://www.youtube.com/channel/UCJ_GkzUILVKhhUKrZMbqHNA"
                    className="p-2"
                ><FaYoutube /></a>
                <a
                    href="https://www.linkedin.com/in/eduardo-mart%C3%ADnez-a53638107"
                    className="p-2"
                ><FaLinkedin /></a>
            </div>


        </footer >
    );
}