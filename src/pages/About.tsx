import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";

const About = () => {
  return (
    <Layout>
      <PageHeader 
        title="About Jane Zafran" 
        subtitle="English 9-12 Academic Tutor and College Application Essay Editor" 
      />
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                alt="Jane Zafran" 
                src="/lovable-uploads/jane-headshot.jpg" 
                className="rounded-lg shadow-lg w-full max-w-md mx-auto object-cover h-[600px]" 
              />
            </div>
            
            <div>
              <p className="text-2xl font-serif text-tutor-navy mb-6 leading-relaxed">
                Jane Zafran is an experienced writer and tutor known for her insightful guidance, meticulous editing, and personalized approach to helping students craft compelling essays.
              </p>
              
              <div className="space-y-4 text-tutor-gray leading-relaxed">
                <p>
                  Jane grew up in the Bay Area, California, where she attended Castilleja School and Menlo School. She went on to pursue further study at Brown University, where she co-founded and served as Co-Editor-in-Chief of <i>The Brown Journal of Medical Humanities</i>, a medical literary journal that bridges the sciences and humanities.
                </p>
                
                <p>
                  Jane is currently an Editor for <i>The Pegasus Review</i>, a journal of narrative medicine at Stanford University's School of Medicine. She is also a member of The Pegasus Physician Writers at Stanford, a group of physician authors dedicated to medical humanities and creative writing.
                </p>
                
                <p>
                  In between the summers of her high school years, Jane served as a math and wellness tutor for the Peninsula Bridge Program, a nonprofit with the goal of providing equal educational access to motivated children. During the school years, she was a math tutor for students at Taft Elementary School in Redwood City, CA.
                </p>
                
                <p>
                  Most recently, Jane worked as an English and SAT tutor at AJ Tutoring in Menlo Park, CA. She found joy connecting with students over subjects both inside and outside of the classroom, and watching students grow and progress inspired her to launch her tutoring business.
                </p>
                
                <p>
                  A former swimmer and water polo player, Jane loves staying active, now dedicating her free time to strength training and Pilates. She is also an avid reader of both fiction and nonfiction, enjoying everything from Leo Tolstoy's <i>Anna Karenina</i> to Malcolm Gladwell's <i>Outliers</i>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
