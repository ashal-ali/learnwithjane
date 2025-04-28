import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Publications = () => {
  return (
    <Layout>
      <PageHeader 
        title="Portfolio" 
        subtitle="Explore Jane's writing and media contributions" 
      />
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Journal Publication */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-tutor-cream p-6 flex items-center justify-center">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <img 
                      src="/lovable-uploads/bjmh-cover.png" 
                      alt="Brown Journal of Medical Humanities Cover" 
                      className="w-full h-auto object-contain rounded max-h-[400px]"
                    />
                  </div>
                </div>
                <div className="p-6 md:w-2/3">
                  <h3 className="text-2xl font-serif font-semibold text-tutor-navy mb-3">
                    <i>The Brown Journal of Medical Humanities</i> - Inaugural Issue
                  </h3>
                  <p className="text-tutor-gray mb-4">
                    As Co-Founder and Co-Editor-in-Chief of <i>The Brown Journal of Medical Humanities</i>, Jane launched an initiative of narrative medicine at Brown's undergraduate college, the Warren Alpert School of Medicine, and the Rhode Island of School of Design.
                  </p>
                  <div className="flex space-x-4">
                    <Button 
                      asChild
                      className="bg-tutor-teal hover:bg-tutor-navy text-white flex items-center gap-2"
                    >
                      <a 
                        href="https://bpb-us-w2.wpmucdn.com/sites.brown.edu/dist/6/414/files/2023/05/BJMH-Inaugural-Issue-1.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        View Publication <ExternalLink size={16} />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Interview */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-tutor-cream p-6 flex items-center justify-center">
                  <div className="bg-white p-4 rounded-lg shadow-md w-full">
                    <div className="w-full rounded overflow-hidden">
                      <img 
                        src="/lovable-uploads/fashion-ceos-interview.jpeg" 
                        alt="Fashion@Brown CEO Interview" 
                        className="w-full h-auto object-contain rounded max-h-[320px]"
                      />
                    </div>
                  </div>
                </div>
                <div className="p-6 md:w-2/3">
                  <h3 className="text-2xl font-serif font-semibold text-tutor-navy mb-3">
                    F@B Presents: A Conversation with the World's Foremost Fashion CEOs
                  </h3>
                  <p className="text-tutor-gray mb-4">
                    In this CEO panel interview, Jane discusses with CEO of Ralph Lauren Patrice Louvet and CEO of Maje Isabelle Guichot leadership in fashion, brand evolution and innovation, and sustainability and ethical practices in the industry.
                  </p>
                  <div className="flex space-x-4">
                    <Button 
                      asChild
                      className="bg-tutor-teal hover:bg-tutor-navy text-white flex items-center gap-2"
                    >
                      <a 
                        href="https://youtu.be/ABltiFcESgg" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Watch Interview <ExternalLink size={16} />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Written Publication */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-tutor-cream p-6 flex items-center justify-center">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <img 
                      src="/lovable-uploads/letter-to-editor.jpeg" 
                      alt="Letter to the Editor" 
                      className="w-full h-auto object-contain rounded max-h-[320px]"
                    />
                  </div>
                </div>
                <div className="p-6 md:w-2/3">
                  <h3 className="text-2xl font-serif font-semibold text-tutor-navy mb-3">
                    Letters in response to Walhout '25: It's time to close the Open Curriculum
                  </h3>
                  <p className="text-tutor-gray mb-4">
                    In her letter to the editor, Jane defends how Brown's distinctive approach to learning empowers students to take ownership of their education, fostering innovation and leadership. She also explores the significance of Brown's strong brand identity in attracting a diverse and dynamic student body.
                  </p>
                  <div className="flex space-x-4">
                    <Button 
                      asChild
                      className="bg-tutor-teal hover:bg-tutor-navy text-white flex items-center gap-2"
                    >
                      <a 
                        href="https://www.browndailyherald.com/article/2025/04/letters-in-response-to-walhout-25-its-time-to-close-the-open-curriculum" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Read Article <ExternalLink size={16} />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Publications; 