export default function Contact() {
  return (
    <section className="flex h-screen items-center justify-items-center">
      <div className="p-10 w-full text-xl text-gray-600 font-bold">
        <h2 className="p-2">EDUARDO MARTÍNEZ</h2>
        <h3 className="p-2">CALL ME: 555.555.5555 </h3>
        <h3 className="p-2">EMAIL ME: eduardo31794@gmail.com</h3>
      </div>
      <div className="p-10 w-full justify-items-center">
        <div>
          <span className="text-lg text-gray-600 font-bold">FULL NAME</span>
          <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg"
            type="text" placeholder="" />
        </div>
        <div className="mt-8">
          <span className="text-lg text-gray-600 font-bold">EMAIL</span>
          <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg"
            type="text">
          </input>
          <div className="mt-8">
            <span className="text-lg text-gray-600 font-bold">MESSAGE</span>
            <textarea
              className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg"></textarea>
          </div>
          <div className="mt-8">
            <button
              className="text-lg font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full">
              SEND MESSAGE
            </button>
          </div>
        </div>
      </div>
    </section>


  );
}
