import React from 'react';
import photo from '../img/foto.JPG'

export default function About() {
  return (
    <div className="flex items-center h-screen text-gray-600">
      <section>
        <img src={photo} alt="Eduardo Martínez" className="w-full" />
      </section>
      <section className="p-8  items-center">
        <h1 className="pb-16 text-6xl">About Me</h1>
        <p className="text-2xl">
          Enthusiastic, recently graduated, Full Stack Web Developer with a background in history and teaching. A critical thinker who never ceases to expand his own knowledge and ideas about his personal and professional interests.

          Proven skills in the development of teamwork apps, problem solving, communication and learning new subjects and technologies. Certificate from Tecnológico de Monterrey as a Full Stack Web Developer.

          As a Historian I won a international scholarship to study my master at Spain in Research on Teaching and Learning in the Social Sciences. As teacher I have taught at all educational levels. I have received awards as the best teacher in my school. I have an educational project on Youtube in which I talk about history. My channel is called "Crónicas en vilo" if you want to take a look at it.
        </p>

      </section>
    </div>

  );
}
