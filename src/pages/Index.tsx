import { Link } from "react-router-dom";
import { Heart, Users, MessageCircle, Shield, ArrowRight, CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import TestimonialCard from "@/components/ui/TestimonialCard";
import ServiceCard from "@/components/ui/ServiceCard";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer",
      content: "Suno Saathi gave me a safe space to share my struggles. The listeners are so understanding and non-judgmental.",
      rating: 5,
      avatar: "PS"
    },
    {
      name: "Rahul Kumar",
      role: "Student",
      content: "I was hesitant at first, but talking to a Saathi helped me process my anxiety. I feel so much lighter now.",
      rating: 5,
      avatar: "RK"
    },
    {
      name: "Anjali Patel",
      role: "Working Professional",
      content: "The community here is incredibly supportive. It's beautiful to see people caring for each other.",
      rating: 5,
      avatar: "AP"
    }
  ];

  const services = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "1:1 Talk Sessions",
      description: "Private, confidential conversations with trained listeners who understand your journey.",
      features: ["Completely confidential", "Trained listeners", "Available 24/7", "No judgment zone"]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Support",
      description: "Join a caring community where you can share experiences and support others.",
      features: ["Peer support groups", "Shared experiences", "Moderated discussions", "Safe environment"],
      highlight: true
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Group Discussions",
      description: "Participate in guided group sessions on various mental health topics.",
      features: ["Expert-led sessions", "Topic-based groups", "Interactive discussions", "Weekly meetups"]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="heading-hero mb-6">
                Because Talking <span className="text-primary">Helps</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                A safe, judgment-free space where you can share your thoughts, feelings, and experiences with caring listeners who truly understand.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/services" className="btn-hero inline-flex items-center justify-center space-x-2">
                  <MessageCircle className="w-5 h-5" />
                  <span>Talk to a Saathi</span>
                </Link>
                <Link to="/community" className="btn-secondary inline-flex items-center justify-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span>Join Community</span>
                </Link>
              </div>
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  <span>100% Confidential</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  <span>Available 24/7</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  <span>No Judgment</span>
                </div>
              </div>
            </div>
            <div className="relative animate-float">
              <img 
                src={heroImage} 
                alt="People supporting each other in a warm, caring environment"
                className="rounded-3xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg animate-scale-in">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-foreground">1000+ hearts healed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-section">How We Support You</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the type of support that feels right for you. Every conversation is a step towards healing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-section">Making a Difference</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every conversation matters. Here's how Suno Saathi is creating positive change.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center animate-scale-in">
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground">Conversations</div>
            </div>
            <div className="text-center animate-scale-in">
              <div className="text-4xl font-bold text-secondary mb-2">500+</div>
              <div className="text-muted-foreground">Active Members</div>
            </div>
            <div className="text-center animate-scale-in">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
            <div className="text-center animate-scale-in">
              <div className="text-4xl font-bold text-secondary mb-2">98%</div>
              <div className="text-muted-foreground">Positive Feedback</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-section">Voices of Hope</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real stories from real people who found comfort, support, and healing through Suno Saathi.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="card-gradient animate-scale-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Start Your Healing Journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Take the first step towards better mental health. You don't have to face this alone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services" className="btn-hero inline-flex items-center justify-center space-x-2">
                <MessageCircle className="w-5 h-5" />
                <span>Start Talking Now</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/how-it-works" className="btn-secondary inline-flex items-center justify-center space-x-2">
                <span>Learn How It Works</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
