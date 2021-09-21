import React from 'react';

export default function About() {
  return (
    <div className="flex items-center h-screen text-gray-600">
      <section>
        <img src="/foto.JPG" alt="Eduardo Martínez" className="w-full" />
      </section>
      <section className="p-8  items-center">
        <h1 className="pb-16 text-6xl">About Me</h1>
        <p className="text-2xl">
          Welcome to my space! I love history and teaching. I have a degree in History. I won a international scholarship to study my master at Spain in Research on Teaching and Learning in the Social Sciences. I have taught at all educational levels. I have received awards as the best teacher in my school. I have an educational project on Youtube in which I talk about history. My channel is called "Crónicas en vilo" if you want to take a look at it. Nowadays I’m enroll in a Bootcamp to become a Full Stack Web Developer.
        </p>
      </section>
    </div>

  );
}
