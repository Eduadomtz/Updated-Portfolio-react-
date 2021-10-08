import { FaGithub } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import vagabundos from '../img/VagabundosApp.png'
import pawBook from '../img/Pawbook.png'
import workDayScheduler from '../img/Work_Day_Scheduler.png'
import workOutTracker from '../img/Workout-Tracker.png'
import budgetTracker from '../img/Budget-Tracker.png'
import passwordGenerator from '../img/Password-Generator.png'



export default function Portfolio() {
  return (
    <main className="container mx-auto text-gray-600">
      <div className="grid grid-cols-3 gap-4 justify-items-center">
        <section className="max-w-sm rounded overflow-hidden shadow-lg p-4">
          <img src={pawBook} alt="" className="w-full" />
          <div className="px-6 py-4 ">
            <h2 className="font-bold text-purple-500 text-xl mb-2 text-center">
              Pawbook App
            </h2>
            <p className="text-justify">
              Pawbook is an app created to help stray animals find a home or to gathered food donatios for the manteinance of animal shelters
            </p>
            <p className="text-justify">
              Technologies: HTML, CSS, JS, NODEJS, EXPRESS, MYSQL, ORM, MVC, Tailwind, Heroku
            </p>
            <ul className="flex justify-center content-end">
              <a
                href="https://github.com/stamm2911/Pawbook-app"
                className="p-2"

              ><FaGithub />
              </a>
              <a
                href="https://stormy-savannah-69028.herokuapp.com/login"
                className="p-2"
              ><FaRocket /></a>
            </ul>
          </div>
        </section>

        <section className="max-w-sm rounded overflow-hidden shadow-lg p-4">
          <img src={vagabundos} alt="" className="w-full" />
          <div className="px-6 py-4">
            <h2 className="font-bold text-purple-500 text-xl mb-2 text-center">
              Vagabundos App
            </h2>
            <p className="text-justify">
              Tired of the routine? Eager for an adventure? Then you are in the right place! Welcome vagabond to the Vagabundos App, the App that will help you search the flights and hotels that best suit you.
            </p>
            <p className="text-justify">
              Technologies: HTML, Foundation CSS, Javascript
            </p>
            <ul className="flex justify-center">
              <a
                href="https://github.com/jorgeatcabo/vagabundos-app"
                className="p-2"

              ><FaGithub />
              </a>
              <a
                href="https://jorgeatcabo.github.io/project-1/"
                className="p-2"
              ><FaRocket /></a>
            </ul>
          </div>
        </section>

        <section className="max-w-sm rounded overflow-hidden shadow-lg p-4">
          <img src={workDayScheduler} alt="" className="w-full" />
          <div className="px-6 py-4">
            <h2 className="font-bold text-purple-500 text-xl mb-2 text-center">
              Work Day Scheduler
            </h2>
            <p className="flex items-center text-justify  ">
              A simple calendar application that allows a user to save events for each hour.
            </p>
            <p className="flex items-center text-justify">
              Technologies: HTML, CSS, Javascript, Moment.js
            </p>
            <ul className="flex justify-center">
              <a
                href="https://github.com/Eduadomtz/Work-Day-Scheduler"
                className="p-2"

              ><FaGithub />
              </a>
              <a
                href="https://eduadomtz.github.io/Work-Day-Scheduler/"
                className="p-2"
              ><FaRocket /></a>
            </ul>
          </div>
        </section>

        <section className="max-w-sm rounded overflow-hidden shadow-lg p-4">
          <img src={workOutTracker} alt="" className="w-full" />
          <div className="px-6 py-4">
            <h2 className="font-bold text-purple-500 text-xl mb-2 text-center">
              Worktout Tracker
            </h2>
            <p className="text-justify">
              With this App you will be able to view create and track daily workouts (track the name, type, weight, sets, reps, and duration of exercise). Also you will be able log multiple exercises in a workout on a given day.
            </p>
            <p className="text-justify">
              Technologies: HTML, CSS, JS, MongoDB
            </p>
            <ul className="flex justify-center">
              <a
                href="https://github.com/Eduadomtz/Workout-Tracker"
                className="p-2"

              ><FaGithub />
              </a>
              <a
                href="https://cryptic-sierra-80345.herokuapp.com/?id=610b15202bd42100156728c3"
                className="p-2"
              ><FaRocket /></a>
            </ul>
          </div>
        </section>

        <section className="max-w-sm rounded overflow-hidden shadow-lg p-4">
          <img src={budgetTracker} alt="" className="w-full" />
          <div className="px-6 py-4">
            <h2 className="font-bold text-purple-500 text-xl mb-2 text-center">
              Budget Tracker
            </h2>
            <p className="text-justify">
              The user is able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online.
            </p>
            <p className="text-justify">
              Technologies: HTML, CSS, JS, MongoDB, Manifest
            </p>
            <ul className="flex justify-center">
              <a
                href="https://github.com/Eduadomtz/Online-Offline-Budget-Trackers"
                className="p-2"

              ><FaGithub />
              </a>
              <a
                href="https://aqueous-bastion-13549.herokuapp.com"
                className="p-2"
              ><FaRocket /></a>
            </ul>
          </div>
        </section>

        <section className="max-w-sm rounded overflow-hidden shadow-lg p-4">
          <img src={passwordGenerator} alt="" className="w-full" />
          <div className="px-6 py-4">
            <h2 className="font-bold text-purple-500 text-xl mb-2 text-center">
              Password Generator
            </h2>
            <p className="text-justify">
              Need for a secure password? Try our App and create the password with the elements you want!
            </p>
            <p className="text-justify">
              Technologies: HTML, CSS, JS
            </p>
            <ul className="flex justify-center">
              <a
                href="https://github.com/Eduadomtz/Password-Generator"
                className="p-2"

              ><FaGithub />
              </a>
              <a
                href="https://eduadomtz.github.io/Password-Generator/"
                className="p-2"
              ><FaRocket /></a>
            </ul>
          </div>
        </section>
      </div>
    </main>

  );
}
