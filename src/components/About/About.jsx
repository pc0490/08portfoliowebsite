export default function About() {
  return (
      <div className="py-16 bg-black text-gray-100 min-h-screen">
          <div className="container m-auto px-6 text-gray-300 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12 animate-slideIn">
                      <img
                          className="rounded-xl shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105"
                          src="https://images.pexels.com/photos/22698026/pexels-photo-22698026/free-photo-of-wind-turbines-on-mountains-with-winding-roads.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                          alt="image"
                          width={400}
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12 animate-fadeIn">
                      <h1 className="text-center text-4xl sm:text-6xl py-10 font-bold text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text animate-pulse hover:scale-105 transition-transform duration-300">
                          About Me
                      </h1>
                      <h2 className="text-2xl text-transparent bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text font-bold md:text-4xl">
                        Full-Stack Developer in the Making
                      </h2>
                      <p className="mt-6 text-gray-300 hover:text-gray-200 transition-colors duration-300">
                      With a strong foundation in Computer Science and Engineering, I am 
                      on a journey to master full-stack development. My expertise in C 
                      programming and DSA forms the backbone of my problem-solving skills, 
                      while my knowledge of Java, Python, and modern web technologies like 
                      React.js, HTML, and CSS enables me to deliver end-to-end solutions. 
                      I am always eager to learn and contribute to innovative projects.
                      </p>
                      <p className="mt-4 text-gray-300">
                      I am committed to excellence and thrive on building efficient, impactful, 
                      and innovative software solutions.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}