import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Link } from "react-router-dom";

const FAQ = () => {
  return (
    <Layout>
      <PageHeader 
        title="Frequently Asked Questions" 
        subtitle="Find answers to common questions about my services" 
      />
      
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-serif font-semibold text-tutor-teal mb-4 leading-tight">What subjects do you tutor?</h3>
              <div className="text-tutor-gray leading-relaxed">
                <p>
                  High school English (Grades 9-12), including AP English Literature and Composition and AP English Language and Composition.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-serif font-semibold text-tutor-teal mb-4 leading-tight">What is your tutoring philosophy?</h3>
              <div className="text-tutor-gray leading-relaxed">
                <p>
                  My tutoring philosophy is to meet students where they are at. I work with students one-on-one to strengthen their critical thinking, reading, and writing skills, leading to tangible improvements in their English classes.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-serif font-semibold text-tutor-teal mb-4 leading-tight">What type of college application essays do you edit?</h3>
              <div className="text-tutor-gray leading-relaxed">
                <p>
                  I help students brainstorm, draft, and edit all college application essays required in the admissions process, including the Common App essay and school-specific supplemental essays.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-serif font-semibold text-tutor-teal mb-4 leading-tight">What are your fees?</h3>
              <div className="text-tutor-gray leading-relaxed">
                <p>
                  Please see the <Link to="/pricing" className="text-tutor-teal hover:text-tutor-navy underline">Pricing page</Link> for detailed information about my rates.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-serif font-semibold text-tutor-teal mb-4 leading-tight">Where are sessions conducted?</h3>
              <div className="text-tutor-gray leading-relaxed">
                <p>
                  Sessions are conducted virtually.
                  <br /><br />
                  **On a select basis, sessions may be conducted in person. Please <Link to="/contact" className="text-tutor-teal hover:text-tutor-navy underline">contact</Link> Jane for more information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
