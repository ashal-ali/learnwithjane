import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  return (
    <Layout>
      <PageHeader 
        title="Pricing" 
        subtitle="Transparent and Competitive Rates" 
      />
      
      <section className="py-16 bg-tutor-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* High School English */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 flex flex-col h-full">
              <div className="bg-tutor-navy p-6 text-center">
                <h3 className="text-xl font-serif font-semibold text-white leading-tight min-h-[28px]">High School English</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-white">$145</span>
                  <span className="text-white ml-1">/hour</span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-tutor-teal mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Grades 9-12 (non-AP)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-tutor-teal mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Customized lesson plans</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-tutor-teal mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Essay writing support</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-tutor-teal mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Reading comprehension</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-tutor-teal mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Regular progress reflection</span>
                  </li>
                </ul>
                
                <div className="mt-auto">
                  <Button asChild className="w-full bg-tutor-teal hover:bg-tutor-navy text-white h-11">
                    <Link to="/contact">Schedule Session</Link>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* AP English */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 flex flex-col h-full">
              <div className="bg-tutor-navy p-6 text-center">
                <h3 className="text-xl font-serif font-semibold text-white leading-tight min-h-[28px]">AP English</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-white">$195</span>
                  <span className="text-white ml-1">/hour</span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-tutor-teal mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>AP-specific curriculum</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-tutor-teal mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Exam preparation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-tutor-teal mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Practice essays & feedback</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-tutor-teal mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Literary analysis techniques</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-tutor-teal mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Advanced writing strategies</span>
                  </li>
                </ul>
                
                <div className="mt-auto">
                  <Button asChild className="w-full bg-tutor-teal hover:bg-tutor-navy text-white h-11">
                    <Link to="/contact">Schedule Session</Link>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* College Application Essay Editing */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 flex flex-col h-full">
              <div className="bg-tutor-navy p-6 text-center">
                <h3 className="text-xl font-serif font-semibold text-white leading-tight min-h-[28px]">College Application Essay</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-white">$345</span>
                  <span className="text-white ml-1">/hour</span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-tutor-teal mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Topic brainstorming</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-tutor-teal mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Common App essay support</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-tutor-teal mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Supplemental essays</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-tutor-teal mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Detailed editing & feedback</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-tutor-teal mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Application strategy</span>
                  </li>
                </ul>
                
                <div className="mt-auto">
                  <Button asChild className="w-full bg-tutor-teal hover:bg-tutor-navy text-white h-11">
                    <Link to="/contact">Schedule Session</Link>
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

export default Pricing;
