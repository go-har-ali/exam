import { faGithub } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Header() {
    return (
        <>
            <nav className="flex justify-between bg-white shadow-lg p-3 ml-2">
                <div className="flex">
                    <div className="flex items-center">
                        <img src="../logo_of_app.webp" alt="logo" className="w-10"/>
                        <p className="font-semibold text-xl ml-2">Amazon <span className="text-violet-700">E-commerce</span></p> 
                        <a href="#" className="block ml-2 px-2 py-1 mb-3 text-cyan-50 bg-violet-500 font-semibold rounded hover:bg-violet-700">Home</a>
                        <a href="#" className="mt-2 block px-2 py-1 mb-4 text-cyan-50 bg-violet-500 font-semibold rounded hover:bg-violet-700 sm:mt-0 sm:ml-2">Shop</a>
                        <a href="#" className="mt-2 block px-2 py-1 mb-4 text-cyan-50 bg-violet-500 font-semibold rounded hover:bg-violet-700 sm:mt-0 sm:ml-2">Contacts</a>
                    </div>

                </div>

                <div>
                    <button className="py-2 px-4 bg-violet-500 rounded-md text-cyan-50 hover:bg-violet-700">
                        <FontAwesomeIcon icon={faGithub} /> Contribute with Github
                    </button>
                </div>
                
            </nav>

        </>
    );
}
