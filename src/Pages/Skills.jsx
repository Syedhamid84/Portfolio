import React from "react";
// import {sample } from "../Assets/images/background.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import logo from '../images/react.png';
import express from '../images/express.png';
import node from '../images/nodejs.png';
import redux from '../images/redux.png';
import firebase from '../images/firebase.png';
import android from '../images/android-os.png';
import material from '../images/material-ui.png';
import tailwind from '../images/Tailwind.png';
import chakra from '../images/chakra-ui.png';
import bootstrap from '../images/bootstrap.png';
import sass from '../images/sass.png';
import html from '../images/html-5.png';
import css from '../images/css3.png';
import javascript from '../images/javascript.png';
import java from '../images/java.png';
import kotlin from '../images/kotlin.png';
import php from '../images/php-logo.png';
import python from '../images/python.png';
import c from '../images/c-plus.png';
import mongo from '../images/mongodb.png';
import mysql from '../images/mysql.png';
import postgres from '../images/postgreesql.png';
import aws from '../images/aws.png';
import heroku from '../images/heroku.png';
import netlify from '../images/netlify.png';
import digitalocean from '../images/digitalocean.png';
import jquery from '../images/jquery.png';
import gitvcs from '../images/git.png';
import github from '../images/github.png';
import wordpress from '../images/wordpress.png';
const Skills = () => {
   return (
      <>
         <section className="h-[990px] w-full bg-[#5304b5]">
            <div className="flex justify-center items-center gap-2 p-2">
               <div className=" flex justify-center items-center gap-2 my-2">
                  <span className="items-center ">
                     <FontAwesomeIcon
                        icon={faLaptopCode}
                        className="h-14 w-14 text-[#FFFFFF]"
                     />
                  </span>
                  <h1 className="">
                     <span className="text-4xl font-bold text-[#FFFFFF]">
                        Skills &
                     </span>
                     <span className="text-4xl font-bold text-[#ffe603]">
                        {" "}
                        Abilities
                     </span>
                  </h1>
               </div>
               {/* </div> */}
            </div>

            <div className="flex justify-center ">
               <div className="flex justify-center pb-4 gap-3 bg-[#330572] flex-wrap rounded-lg mx-48 pt-4 mb-4">
                  <div className="flex flex-col justify-center items-center h-32 w-40 bg-[#05011f] rounded-lg">
                     <div>
                        <img src={logo} alt="" className="h-12 w-12 bg-[#05011f] " />
                     </div>
                     <div className="text-2xl text-[#FFFFFF] mt-2">
                        ReactJs
                     </div>
                  </div>
                  <div className="flex flex-col justify-center items-center h-32 w-40 bg-[#05011f] rounded-lg">
                     <div>
                        <img src={express} alt="" className="h-12 w-12 bg-[#05011f] " />
                     </div>
                     <div className="text-2xl text-[#FFFFFF] mt-2">
                        ExpressJs
                     </div>
                  </div>
                  <div className="flex flex-col justify-center items-center h-32 w-40 bg-[#05011f] rounded-lg">
                     <div>
                        <img src={node} alt="" className="h-12 w-12 bg-[#05011f] " />
                     </div>
                     <div className="text-2xl text-[#FFFFFF] mt-2">
                        NodeJs
                     </div>
                  </div>
                  <div className="flex flex-col justify-center items-center h-32 w-40 bg-[#05011f] rounded-lg">
                     <div>
                        <img src={redux} alt="" className="h-12 w-12 bg-[#05011f] " />
                     </div>
                     <div className="text-2xl text-[#FFFFFF] mt-2">
                        Redux
                     </div>
                  </div>
                  <div className="flex flex-col justify-center items-center h-32 w-40 bg-[#05011f] rounded-lg">
                     <div>
                        <img src={firebase} alt="" className="h-12 w-12 bg-[#05011f] " />
                     </div>
                     <div className="text-2xl text-[#FFFFFF] mt-2">
                        Firebase
                     </div>
                  </div>
                  <div className="flex flex-col justify-center items-center h-32 w-40 bg-[#05011f] rounded-lg">
                     <div>
                        <img src={android} alt="" className="h-12 w-12 bg-[#05011f] " />
                     </div>
                     <div className="text-2xl text-[#FFFFFF] mt-2">
                        Android
                     </div>
                  </div>

                  <div className="flex flex-col justify-center items-center h-32 w-40 bg-[#05011f] rounded-lg">
                     <div>
                        <img src={material} alt="" className="h-12 w-12 bg-[#05011f] " />
                     </div>
                     <div className="text-2xl text-[#FFFFFF] mt-2">
                        MaterialUI
                     </div>
                  </div>
                  <div className="flex flex-col justify-center items-center h-32 w-40 bg-[#05011f] rounded-lg">
                     <div>
                        <img src={chakra} alt="" className="h-12 w-12 bg-[#05011f] " />
                     </div>
                     <div className="text-2xl text-[#FFFFFF] mt-2">
                        ChakraUI
                     </div>
                  </div>
                  <div className="flex flex-col justify-center items-center h-32 w-40 bg-[#05011f] rounded-lg">
                     <div>
                        <img src={tailwind} alt="" className="h-10 w-10 bg-[#05011f] " />
                     </div>
                     <div className="text-2xl text-[#FFFFFF] mt-2">
                        TailwindCSS
                     </div>
                  </div>
                  <div className="flex flex-col justify-center items-center h-32 w-40 bg-[#05011f] rounded-lg">
                     <div>
                        <img src={bootstrap} alt="" className="h-12 w-12 bg-[#05011f] " />
                     </div>
                     <div className="text-2xl text-[#FFFFFF] mt-2">
                        Bootstrap
                     </div>
                  </div>
                  <div className="flex flex-col justify-center items-center h-32 w-40 bg-[#05011f] rounded-lg">
                     <div>
                        <img src={sass} alt="" className="h-12 w-12 bg-[#05011f] " />
                     </div>
                     <div className="text-2xl text-[#FFFFFF] mt-2">
                        Sass
                     </div>
                  </div>
                  <div className="flex flex-col justify-center items-center h-32 w-40 bg-[#05011f] rounded-lg">
                     <div>
                        <img src={html} alt="" className="h-12 w-12 bg-[#05011f] " />
                     </div>
                     <div className="text-2xl text-[#FFFFFF] mt-2">
                        Html5
                     </div>
                  </div>

                  <div className="flex flex-col justify-center items-center h-32 w-40 bg-[#05011f] rounded-lg">
                     <div>
                        <img src={css} alt="" className="h-12 w-12 bg-[#05011f] " />
                     </div>
                     <div className="text-2xl text-[#FFFFFF] mt-2">
                        CSS3
                     </div>
                  </div>
                  <div className="flex flex-col justify-center items-center h-32 w-40 bg-[#05011f] rounded-lg">
                     <div>
                        <img src={javascript} alt="" className="h-12 w-12 bg-[#05011f] " />
                     </div>
                     <div className="text-2xl text-[#FFFFFF] mt-2">
                        Javascript
                     </div>
                  </div>
                  <div className="flex flex-col justify-center items-center h-32 w-40 bg-[#05011f] rounded-lg">
                     <div>
                        <img src={java} alt="" className="h-12 w-12 bg-[#05011f] " />
                     </div>
                     <div className="text-2xl text-[#FFFFFF] mt-2">
                        Java
                     </div>
                  </div>
                  <div className="flex flex-col justify-center items-center h-32 w-40 bg-[#05011f] rounded-lg">
                     <div>
                        <img src={kotlin} alt="" className="h-12 w-12 bg-[#05011f] " />
                     </div>
                     <div className="text-2xl text-[#FFFFFF] mt-2">
                        Kotlin
                     </div>
                  </div>
                  <div className="flex flex-col justify-center items-center h-32 w-40 bg-[#05011f] rounded-lg">
                     <div>
                        <img src={php} alt="" className="h-12 w-12 bg-[#05011f] " />
                     </div>
                     <div className="text-2xl text-[#FFFFFF] mt-2">
                        Php
                     </div>
                  </div>
                  <div className="flex flex-col justify-center items-center h-32 w-40 bg-[#05011f] rounded-lg">
                     <div>
                        <img src={python} alt="" className="h-12 w-12 bg-[#05011f] " />
                     </div>
                     <div className="text-2xl text-[#FFFFFF] mt-2">
                        Python
                     </div>
                  </div>

                  <div className="flex flex-col justify-center items-center h-32 w-40 bg-[#05011f] rounded-lg">
                     <div>
                        <img src={c} alt="" className="h-12 w-12 bg-[#05011f] " />
                     </div>
                     <div className="text-2xl text-[#FFFFFF] mt-2">
                        C++
                     </div>
                  </div>
                  <div className="flex flex-col justify-center items-center h-32 w-40 bg-[#05011f] rounded-lg">
                     <div>
                        <img src={mongo} alt="" className="h-12 w-12 bg-[#05011f] " />
                     </div>
                     <div className="text-2xl text-[#FFFFFF] mt-2">
                        MongoDB
                     </div>
                  </div>
                  <div className="flex flex-col justify-center items-center h-32 w-40 bg-[#05011f] rounded-lg">
                     <div>
                        <img src={mysql} alt="" className="h-12 w-12 bg-[#05011f] " />
                     </div>
                     <div className="text-2xl text-[#FFFFFF] mt-2">
                        MySQL
                     </div>
                  </div>
                  <div className="flex flex-col justify-center items-center h-32 w-40 bg-[#05011f] rounded-lg">
                     <div>
                        <img src={postgres} alt="" className="h-12 w-12 bg-[#05011f] " />
                     </div>
                     <div className="text-2xl text-[#FFFFFF] mt-2">
                        PostgreSQL
                     </div>
                  </div>
                  <div className="flex flex-col justify-center items-center h-32 w-40 bg-[#05011f] rounded-lg">
                     <div>
                        <img src={aws} alt="" className="h-12 w-12 bg-[#05011f] " />
                     </div>
                     <div className="text-2xl text-[#FFFFFF] mt-2">
                        AWS
                     </div>
                  </div>
                  <div className="flex flex-col justify-center items-center h-32 w-40 bg-[#05011f] rounded-lg">
                     <div>
                        <img src={heroku} alt="" className="h-12 w-12 bg-[#05011f] " />
                     </div>
                     <div className="text-2xl text-[#FFFFFF] mt-2">
                        Heroku
                     </div>
                  </div>

                  <div className="flex flex-col justify-center items-center h-32 w-40 bg-[#05011f] rounded-lg">
                     <div>
                        <img src={netlify} alt="" className="h-12 w-12 bg-[#05011f] " />
                     </div>
                     <div className="text-2xl text-[#FFFFFF] mt-2">
                        Netlify
                     </div>
                  </div>
                  <div className="flex flex-col justify-center items-center h-32 w-40 bg-[#05011f] rounded-lg">
                     <div>
                        <img src={digitalocean} alt="" className="h-12 w-12 bg-[#05011f] " />
                     </div>
                     <div className="text-2xl text-[#FFFFFF] mt-2">
                        DigitalOcean
                     </div>
                  </div>
                  <div className="flex flex-col justify-center items-center h-32 w-40 bg-[#05011f] rounded-lg">
                     <div>
                        <img src={jquery} alt="" className="h-12 w-12 bg-[#05011f] " />
                     </div>
                     <div className="text-2xl text-[#FFFFFF] mt-2">
                        JQuery
                     </div>
                  </div>
                  <div className="flex flex-col justify-center items-center h-32 w-40 bg-[#05011f] rounded-lg">
                     <div>
                        <img src={gitvcs} alt="" className="h-12 w-12 bg-[#05011f] " />
                     </div>
                     <div className="text-2xl text-[#FFFFFF] mt-2">
                        Git VCS
                     </div>
                  </div>
                  <div className="flex flex-col justify-center items-center h-32 w-40 bg-[#05011f] rounded-lg">
                     <div>
                        <img src={github} alt="" className="h-12 w-12 bg-[#05011f] " />
                     </div>
                     <div className="text-2xl text-[#FFFFFF] mt-2">
                        GitHub
                     </div>
                  </div>
                  <div className="flex flex-col justify-center items-center h-32 w-40 bg-[#05011f] rounded-lg">
                     <div>
                        <img src={wordpress} alt="" className="h-12 w-12 bg-[#05011f] " />
                     </div>
                     <div className="text-2xl text-[#FFFFFF] mt-2">
                        Wordpress
                     </div>
                  </div>


               </div>
            </div>
         </section>
      </>
   );
};
export default Skills;
