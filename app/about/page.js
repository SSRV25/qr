export default function Page() {
  return (
    <div className="bg-white text-gray-900">

      {/* ---------- NAVBAR ---------- */}
      <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-16 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 font-bold text-lg">
            <span className="text-gray-900">CLOUD</span>
            <span className="text-gray-600">DROVE</span>
          </div>

          <div className="hidden md:flex space-x-10 text-gray-700">
            {["Services","About Us","How We Work","Blogs","Career","Contact"].map(item => (
              <a key={item} href="#" className="hover:text-blue-600">
                {item}
              </a>
            ))}
          </div>

          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
            Book a Call
          </button>
        </div>
      </nav>

      {/* ---------- HERO SECTION ---------- */}
      <section className="pt-32 pb-16 max-w-7xl mx-auto px-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl font-bold leading-snug">
            Design, deployment, and management <br />
            partner for your cloud
          </h1>
          <p className="mt-4 text-gray-600 max-w-md">
            Adopt powerful cloud solutions to introduce better efficiency,
            increase revenues and build a scalable business.
          </p>

          <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
            Book a Call
          </button>
        </div>

        <div className="bg-gradient-to-br from-blue-200 to-blue-400 rounded-3xl h-[400px] flex items-center justify-center text-white font-bold">
          <img src="https://clouddrove.com/assets/images/home-1.png" alt="Hero" className="w-full h-full object-contain" />
        </div>
      </section>

      {/* ---------- WHAT DOES CLOUDDROVE DO ---------- */}
      <section className="max-w-7xl mx-auto px-16 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-gray-100  rounded-xl h-60">
            <img src="https://clouddrove.com/assets/images/org-1.png" alt="About Us" className="w-full h-full object-cover rounded-xl" />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">What does CloudDrove do?</h2>
          <p className="text-gray-600">
            CloudDrove offers a range of services that commit hassle-free cloud
            management. Our expertise includes assistance with infrastructure
            automation, docker & container orchestration, performance
            engineering, and so on.
          </p>

          <p className="mt-4 text-gray-600">
            CloudDrove helps organizations utilize the best out of the cloud
            while keeping DevOps at the center of the process.
          </p>
        </div>
      </section>

      {/* ---------- PARTNERS ---------- */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-16 text-center">
          <h2 className="text-2xl font-bold mb-8">Our Partners</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["AWS","DigitalOcean","Microsoft","Cloudnexa"].map(p => (
              <div key={p} className="bg-white rounded-xl p-6 shadow-sm flex items-center justify-center font-semibold">
               <img src={`https://clouddrove.com/assets/images/aws.png`} alt={p} className="h-10 object-contain mr-2" />
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- SERVICES ---------- */}
      <section className="max-w-7xl mx-auto px-16 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            "Load Testing",
            "Security and Compliance",
            "Gap Assessments"
          ].map(service => (
            <div key={service} className="bg-black text-white rounded-xl p-6 h-60 flex flex-col justify-end">
                <img src="https://clouddrove.com/assets/images/org-1.png" alt={service} className="w-full h-32 object-cover rounded-xl" />
                <h3 className="text-xl font-bold">{service}</h3>
                <p className="mt-2 text-sm opacity-80">
                A brief description about {service.toLowerCase()} goes here.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- KNOWLEDGE STACK ---------- */}
      <section className="max-w-7xl mx-auto px-16 py-16 text-center">
        <h2 className="text-2xl font-bold mb-8">Our Knowledge Stack</h2>

        <div className="flex flex-wrap justify-center gap-8 text-lg font-semibold">
          {["Terraform","Kubernetes","Docker","Ansible"].map(stack => (
            <span key={stack}>{stack}</span>
          ))}
        </div>
      </section>

      <footer className="text-center text-gray-500 py-6">
        © 2026 CloudDrove Clone
      </footer>
    </div>
  );
}
