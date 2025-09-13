import Layout from "@/components/layout/Layout";
import { UserPlus, MessageCircle, Heart, Users, Shield, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const steps = [
    {
      icon: <UserPlus className="w-8 h-8" />,
      title: "Sign Up Safely",
      description: "Create your anonymous profile in minutes. We only need what's necessary to provide you with support.",
      details: [
        "Choose a username (no real name required)",
        "Set your preferences for support type",
        "Complete our brief intake form",
        "Verify your account securely"
      ],
      bgColor: "bg-primary"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Get Matched",
      description: "Our system connects you with the most suitable listener or group based on your needs and preferences.",
      details: [
        "AI-powered matching based on your needs",
        "Choose from available listeners",
        "Join topic-specific support groups",
        "Option to request specific listener traits"
      ],
      bgColor: "bg-secondary"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Start Talking",
      description: "Begin your conversation in a secure, private environment designed for meaningful connections.",
      details: [
        "Text, voice, or video chat options",
        "Completely encrypted conversations",
        "Take breaks whenever you need",
        "No time limits or pressure"
      ],
      bgColor: "bg-primary"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Feel Supported",
      description: "Experience the healing power of being truly heard and understood by someone who cares.",
      details: [
        "Non-judgmental listening",
        "Empathetic responses",
        "Follow-up support available",
        "Build lasting connections"
      ],
      bgColor: "bg-secondary"
    }
  ];

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Complete Privacy",
      description: "End-to-end encryption and anonymous profiles protect your identity and conversations."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Available 24/7",
      description: "Support is available whenever you need it, day or night, weekends and holidays."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Trained Listeners",
      description: "All our listeners are trained in active listening, empathy, and crisis support."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Judgment-Free Zone",
      description: "Share anything without fear of judgment. Our community is built on acceptance and understanding."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="heading-hero mb-6">
              Your Journey to <span className="text-primary">Healing</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Getting support shouldn't be complicated. Here's how Suno Saathi makes it simple, safe, and meaningful for you to connect and heal.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="section-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} animate-fade-in-up`}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center text-white`}>
                      {step.icon}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">Step {index + 1}</div>
                      <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6">{step.description}</p>
                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} card-warm`}>
                  <div className="text-center p-8">
                    <div className={`w-24 h-24 ${step.bgColor} rounded-3xl flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold`}>
                      {index + 1}
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-4">What to Expect</h4>
                    <p className="text-muted-foreground">
                      {index === 0 && "Quick and easy registration process that respects your privacy from the very first step."}
                      {index === 1 && "Smart matching that considers your specific needs, preferences, and comfort level."}
                      {index === 2 && "A welcoming conversation in a secure environment where you control the pace."}
                      {index === 3 && "Genuine support and understanding that helps you feel lighter and more hopeful."}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-section">Why Suno Saathi Works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We've designed every aspect of our platform with your comfort, safety, and healing in mind.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card-warm text-center group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Guidelines */}
      <section className="section-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="card-warm">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <Shield className="w-8 h-8 text-primary mr-3" />
                Your Safety First
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-secondary mt-1" />
                  <div>
                    <div className="font-semibold text-foreground">Anonymous by Default</div>
                    <div className="text-muted-foreground text-sm">No personal information required beyond what you choose to share</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-secondary mt-1" />
                  <div>
                    <div className="font-semibold text-foreground">Encrypted Conversations</div>
                    <div className="text-muted-foreground text-sm">All communications are protected with end-to-end encryption</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-secondary mt-1" />
                  <div>
                    <div className="font-semibold text-foreground">Crisis Support Protocol</div>
                    <div className="text-muted-foreground text-sm">Immediate assistance available for emergency situations</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-secondary mt-1" />
                  <div>
                    <div className="font-semibold text-foreground">Professional Oversight</div>
                    <div className="text-muted-foreground text-sm">Mental health professionals oversee our community guidelines</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-warm">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <Heart className="w-8 h-8 text-secondary mr-3" />
                Community Guidelines
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <div className="font-semibold text-foreground">Listen with Empathy</div>
                    <div className="text-muted-foreground text-sm">Approach every conversation with understanding and compassion</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <div className="font-semibold text-foreground">Respect Boundaries</div>
                    <div className="text-muted-foreground text-sm">Honor each person's comfort level and privacy choices</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <div className="font-semibold text-foreground">No Judgment Zone</div>
                    <div className="text-muted-foreground text-sm">Create a space free from criticism and judgment</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <div className="font-semibold text-foreground">Maintain Confidentiality</div>
                    <div className="text-muted-foreground text-sm">Keep all shared information within our community</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="card-gradient animate-scale-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Take the First Step?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Your healing journey starts with a single conversation. We're here to listen, support, and walk alongside you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services" className="btn-hero inline-flex items-center justify-center space-x-2">
                <MessageCircle className="w-5 h-5" />
                <span>Start Talking Now</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/about" className="btn-secondary inline-flex items-center justify-center space-x-2">
                <span>Learn About Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;