import Layout from "@/components/layout/Layout";
import ServiceCard from "@/components/ui/ServiceCard";
import { MessageCircle, Users, Heart, Calendar, Clock, Shield, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const mainServices = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "1:1 Talk Sessions",
      description: "Connect with trained listeners for private, confidential conversations. Share your thoughts in a safe, judgment-free space.",
      features: [
        "Completely confidential and private",
        "Trained empathetic listeners", 
        "Available 24/7 for your convenience",
        "No time limits on conversations",
        "Follow-up support available"
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Support",
      description: "Join our caring community where members support each other through shared experiences and understanding.",
      features: [
        "Peer-to-peer support groups",
        "Moderated safe environment",
        "Share experiences anonymously",
        "Connect with people who understand",
        "Regular community events"
      ],
      highlight: true
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Group Discussions",
      description: "Participate in facilitated group sessions focused on specific topics like anxiety, stress, relationships, and more.",
      features: [
        "Expert-facilitated sessions",
        "Topic-specific groups",
        "Interactive discussions",
        "Weekly scheduled meetups",
        "Small group settings (5-8 people)"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Scheduled Sessions",
      description: "Book regular sessions with your preferred listener for ongoing support."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Crisis Support", 
      description: "Immediate support available for those experiencing emotional distress."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Anonymous Chats",
      description: "Talk without revealing your identity for complete privacy and comfort."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="heading-hero mb-6">
              Support That <span className="text-primary">Understands</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the type of support that feels right for you. Every path leads to healing, and we're here to walk alongside you.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-section">How to Get Started</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Beginning your journey with Suno Saathi is simple and completely confidential.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Choose Your Support</h3>
              <p className="text-muted-foreground text-sm">Select the type of support that feels right for you</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Connect Safely</h3>
              <p className="text-muted-foreground text-sm">Join our secure platform with complete privacy</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Start Talking</h3>
              <p className="text-muted-foreground text-sm">Begin your conversation with a caring listener</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Feel Better</h3>
              <p className="text-muted-foreground text-sm">Experience the relief of being truly heard</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-section">Additional Support Options</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer various ways to connect and find the support you need, when you need it.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="card-warm text-center group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors text-primary">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing/Availability */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="card-gradient text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Support Should Be Accessible to Everyone
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our basic support services are completely free. Because healing shouldn't depend on your ability to pay.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-secondary" />
                  <span className="text-foreground">Free 1:1 conversations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-secondary" />
                  <span className="text-foreground">Free community access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-secondary" />
                  <span className="text-foreground">Free group discussions</span>
                </div>
              </div>
              <Link to="/contact" className="btn-hero inline-flex items-center space-x-2">
                <MessageCircle className="w-5 h-5" />
                <span>Start Your Journey Today</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;