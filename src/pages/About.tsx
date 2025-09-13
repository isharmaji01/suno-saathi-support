import Layout from "@/components/layout/Layout";
import { Heart, Target, Users, Shield, Award, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Empathy",
      description: "We listen with our hearts and understand with compassion. Every story matters to us."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trust", 
      description: "Your privacy and confidentiality are sacred to us. We create safe spaces for healing."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "Together, we're stronger. Our community is built on mutual support and understanding."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Care",
      description: "Every interaction is guided by genuine care and the desire to help you feel better."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="heading-hero mb-6">
              Our Story of <span className="text-primary">Healing</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Suno Saathi was born from a simple belief: everyone deserves to be heard, understood, and supported through life's challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="heading-section">The Beginning</h2>
              <p className="text-lg text-muted-foreground mb-6">
                In 2023, our founder experienced firsthand how challenging it can be to find someone who truly listens without judgment. After struggling with anxiety and feeling isolated, they discovered the healing power of having a genuine conversation with someone who cared.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                This experience sparked an idea: what if we could create a platform where anyone, anywhere, could find that same comfort and support? A place where talking isn't just encouraged—it's celebrated as a path to healing.
              </p>
              <p className="text-lg text-muted-foreground">
                Thus, Suno Saathi was born—a Hindi phrase meaning "Listen, Friend"—embodying our core mission of being present for each other.
              </p>
            </div>
            <div className="card-warm">
              <div className="flex items-center space-x-4 mb-6">
                <Lightbulb className="w-12 h-12 text-primary" />
                <div>
                  <h3 className="text-xl font-bold text-foreground">Our Mission</h3>
                  <p className="text-muted-foreground">Creating safe spaces for healing</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                To provide accessible, judgment-free emotional support that helps people feel heard, valued, and less alone in their struggles.
              </p>
              <div className="flex items-center space-x-4">
                <Target className="w-12 h-12 text-secondary" />
                <div>
                  <h3 className="text-xl font-bold text-foreground">Our Vision</h3>
                  <p className="text-muted-foreground">A world where mental wellness is normalized</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-section">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide every conversation, every interaction, and every decision we make.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card-warm text-center group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors text-primary">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="card-gradient text-center">
              <div className="w-24 h-24 bg-white rounded-full mx-auto mb-6 flex items-center justify-center">
                <Heart className="w-12 h-12 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">A Note from Our Founder</h2>
              <blockquote className="text-lg text-muted-foreground italic mb-6">
                "I created Suno Saathi because I believe that healing happens in connection. When we share our stories with someone who truly listens, we transform pain into purpose, isolation into community, and struggle into strength. Every person who finds comfort here reminds me why this work matters."
              </blockquote>
              <div className="text-foreground font-semibold">— Founder, Suno Saathi</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-section">Our Commitment</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're not just a platform—we're a community of trained listeners, mental health advocates, and caring individuals united by one goal: making sure no one has to face their struggles alone.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-warm text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-lg font-semibold text-foreground mb-2">Trained Listeners</div>
              <div className="text-muted-foreground text-sm">Certified in active listening and emotional support</div>
            </div>
            <div className="card-warm text-center">
              <div className="text-4xl font-bold text-secondary mb-2">24/7</div>
              <div className="text-lg font-semibold text-foreground mb-2">Availability</div>
              <div className="text-muted-foreground text-sm">Someone is always here when you need to talk</div>
            </div>
            <div className="card-warm text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-lg font-semibold text-foreground mb-2">Confidential</div>
              <div className="text-muted-foreground text-sm">Your privacy and safety are our top priority</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;