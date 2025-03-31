import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <Layout>
      <div 
        className="bg-cover bg-center h-[80vh] flex items-center justify-center relative"
        style={{ backgroundImage: "url('/lovable-uploads/e6f88450-95e6-40d5-ad93-ee6043352afc.png')" }}
      >
        <div className="absolute inset-0 bg-tutor-navy bg-opacity-50"></div>
        
        <div className="relative z-[5] text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Jane Zafran
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
            English Academic Tutor and College Application Essay Editor
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              asChild
              size="lg" 
              className="bg-tutor-teal hover:bg-tutor-navy text-white font-medium px-8 h-12"
            >
              <Link to="/services">View Services</Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              size="lg" 
              className="bg-transparent text-white border-white hover:bg-white hover:text-tutor-navy font-medium px-8 h-12"
            >
              <Link to="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <section className="py-16 bg-tutor-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-tutor-navy mb-8 leading-tight">Welcome</h2>
            <p className="text-lg text-tutor-gray mb-8 leading-relaxed">
              Personalized academic tutoring and college application essay editing services to help you achieve your educational goals. Working one-on-one to strengthen critical thinking, reading, and writing skills.
            </p>
            <Button asChild className="bg-tutor-navy hover:bg-tutor-teal text-white font-medium px-8 h-12">
              <Link to="/about">Learn More About Me</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-tutor-navy text-center mb-12 leading-tight">Services Offered</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 transition-transform hover:scale-105 h-full flex flex-col">
              <h3 className="text-2xl font-serif font-semibold text-tutor-navy mb-4 leading-tight">English Academic Tutoring</h3>
              <p className="text-tutor-gray mb-6 flex-grow">
                Comprehensive tutoring for high school students, including AP English Literature and AP English Language.
              </p>
              <Button asChild className="bg-tutor-teal hover:bg-tutor-navy text-white w-fit">
                <Link to="/services">Learn More</Link>
              </Button>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 transition-transform hover:scale-105 h-full flex flex-col">
              <h3 className="text-2xl font-serif font-semibold text-tutor-navy mb-4 leading-tight">College Application Essay Editing</h3>
              <p className="text-tutor-gray mb-6 flex-grow">
                Expert guidance on brainstorming, drafting, and editing college application essays.
              </p>
              <Button asChild className="bg-tutor-teal hover:bg-tutor-navy text-white w-fit">
                <Link to="/services">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
