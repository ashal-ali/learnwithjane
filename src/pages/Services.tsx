
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Book, Edit3 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Services = () => {
  return (
    <Layout>
      <PageHeader 
        title="Services" 
        subtitle="Personalized Academic Support" 
      />
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16">
            {/* English Academic Tutoring */}
            <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
              <div className="flex items-center mb-6">
                <div className="bg-tutor-teal bg-opacity-20 p-3 rounded-full mr-4">
                  <Book className="h-8 w-8 text-tutor-teal" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-tutor-navy">English Academic Tutoring</h2>
              </div>
              
              <div className="ml-0 md:ml-16 space-y-6 text-tutor-gray">
                <p className="text-lg">
                  Comprehensive English tutoring for high school students focusing on critical reading, analytical writing, and literary analysis.
                </p>
                
                <h3 className="text-xl font-serif font-semibold text-tutor-navy">Subjects Covered:</h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>High School English (Grades 9-12)</li>
                  <li>AP English Literature and Composition</li>
                  <li>AP English Language and Composition</li>
                </ul>
                
                <h3 className="text-xl font-serif font-semibold text-tutor-navy">Benefits:</h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Personalized curriculum tailored to your specific needs</li>
                  <li>Improved critical reading and analytical skills</li>
                  <li>Enhanced writing techniques and essay structure</li>
                  <li>Better understanding of literary devices and themes</li>
                  <li>Preparation for exams and AP tests</li>
                </ul>
                
                <div className="mt-8">
                  <Button asChild className="bg-tutor-teal hover:bg-tutor-navy text-white">
                    <Link to="/pricing">View Pricing</Link>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* College Application Essay Editing */}
            <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
              <div className="flex items-center mb-6">
                <div className="bg-tutor-teal bg-opacity-20 p-3 rounded-full mr-4">
                  <Edit3 className="h-8 w-8 text-tutor-teal" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-tutor-navy">College Application Essay Editing</h2>
              </div>
              
              <div className="ml-0 md:ml-16 space-y-6 text-tutor-gray">
                <p className="text-lg">
                  Expert guidance on crafting compelling college application essays that highlight your unique voice and experiences.
                </p>
                
                <h3 className="text-xl font-serif font-semibold text-tutor-navy">Services Include:</h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Brainstorming sessions to identify powerful essay topics</li>
                  <li>Detailed feedback on essay drafts</li>
                  <li>Guidance on structure, flow, and narrative development</li>
                  <li>Editing for grammar, style, and clarity</li>
                  <li>Common App and supplemental essays</li>
                </ul>
                
                <h3 className="text-xl font-serif font-semibold text-tutor-navy">Benefits:</h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Discover your authentic voice and perspective</li>
                  <li>Craft essays that stand out to admissions committees</li>
                  <li>Build a cohesive application narrative</li>
                  <li>Refine your writing to be clear, compelling, and error-free</li>
                  <li>Reduce stress during the application process</li>
                </ul>
                
                <div className="mt-8">
                  <Button asChild className="bg-tutor-teal hover:bg-tutor-navy text-white">
                    <Link to="/pricing">View Pricing</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
