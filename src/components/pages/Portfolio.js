import { FaGithub } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";



export default function Portfolio() {
  return (
    <main className="container mx-auto text-gray-600">
      <div className="grid grid-cols-3 gap-4">
        <section className="max-w-sm rounded overflow-hidden shadow-lg p-4">
          <img src="/Pawbook.png" alt="" className="w-full" />
          <div className="px-6 py-4">
            <h2 className="font-bold text-purple-500 text-xl mb-2">
              Pawbook App
            </h2>
            <p>
              Pawbook is an app created to help stray animals find a home or to gathered food donatios for the manteinance of animal shelters
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
          <img src="/VagabundosApp.png" alt="" className="w-full" />
          <div className="px-6 py-4">
            <h2 className="font-bold text-purple-500 text-xl mb-2">
              Vagabundos App
            </h2>
            <p>
              Tired of the routine? Eager for an adventure? Then you are in the right place! Welcome vagabond to the Vagabundos App, the App that will help you search the flights and hotels that best suit you.
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
          <img src="/Work_Day_Scheduler.png" alt="" className="w-full" />
          <div className="px-6 py-4">
            <h2 className="font-bold text-purple-500 text-xl mb-2">
              Work Day Scheduler
            </h2>
            <p>
              A simple calendar application that allows a user to save events for each hour.
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
          <img src="/Workout-Tracker.png" alt="" className="w-full" />
          <div className="px-6 py-4">
            <h2 className="font-bold text-purple-500 text-xl mb-2">
              Worktout Tracker
            </h2>
            <p>
              With this App you will be able to view create and track daily workouts (track the name, type, weight, sets, reps, and duration of exercise). Also you will be able log multiple exercises in a workout on a given day.
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
          <img src="/Budget-Tracker.png" alt="" className="w-full" />
          <div className="px-6 py-4">
            <h2 className="font-bold text-purple-500 text-xl mb-2">
              Budget Tracker
            </h2>
            <p>
              The user is able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online.
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
          <img src="/Password Generator.png" alt="" className="w-full" />
          <div className="px-6 py-4">
            <h2 className="font-bold text-purple-500 text-xl mb-2">
              Password Generator
            </h2>
            <p>
              Need for a secure password? Try our App and create the password with the elements you want!
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
