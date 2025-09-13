import Layout from "@/components/layout/Layout";
import { Mail, Phone, MapPin, MessageCircle, Clock, Heart, HelpCircle, CheckCircle } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      description: "General inquiries and support",
      contact: "hello@sunosaathi.com",
      available: "Response within 24 hours"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      description: "Urgent support and questions",
      contact: "8987311454",
      available: "Mon-Fri, 9 AM - 6 PM"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Live Chat",
      description: "Instant support and guidance",
      contact: "Available on our platform",
      available: "24/7 Support"
    }
  ];

  const faqs = [
    {
      question: "Is Suno Saathi really free?",
      answer: "Yes, our core services including 1:1 conversations, community access, and group discussions are completely free. We believe support should be accessible to everyone."
    },
    {
      question: "How do you ensure my privacy?",
      answer: "We use end-to-end encryption for all conversations, allow anonymous participation, and never share your personal information without explicit consent."
    },
    {
      question: "Are your listeners trained professionals?",
      answer: "Our listeners are trained in active listening, empathy, and crisis support. While they're not licensed therapists, they're equipped to provide emotional support and know when to recommend professional help."
    },
    {
      question: "What if I'm having a mental health crisis?",
      answer: "If you're in immediate danger, please contact emergency services. Our platform has crisis support protocols, and we can help connect you with professional mental health resources."
    },
    {
      question: "Can I choose who I talk to?",
      answer: "Yes, you can browse available listeners and choose someone you feel comfortable with. You can also request specific traits or preferences for better matching."
    },
    {
      question: "How long can I talk to someone?",
      answer: "There are no time limits on conversations. You can talk for as long as you need, take breaks, and continue later if desired."
    },
    {
      question: "What if I don't like my assigned listener?",
      answer: "You can always request a different listener. Your comfort and safety are our top priorities, and we want you to feel heard by someone you trust."
    },
    {
      question: "Do you offer professional therapy?",
      answer: "Suno Saathi provides peer support and trained listening, not professional therapy. However, we can help connect you with licensed mental health professionals when needed."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="heading-hero mb-6">
              We're Here to <span className="text-primary">Help</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions, feedback, or need support? Our team is always ready to listen and assist you on your journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="card-warm text-center group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors text-primary">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{method.title}</h3>
                <p className="text-muted-foreground mb-4">{method.description}</p>
                <div className="font-semibold text-foreground mb-2">{method.contact}</div>
                <div className="text-sm text-muted-foreground flex items-center justify-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{method.available}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="heading-section">Send Us a Message</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you as soon as possible. Your message matters to us.
              </p>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Need Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="partnership">Partnership</option>
                    <option value="press">Press Inquiry</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                <button type="submit" className="btn-hero w-full">
                  Send Message
                </button>
              </form>
            </div>
            <div className="space-y-8">
              <div className="card-warm">
                <div className="flex items-center space-x-4 mb-6">
                  <MapPin className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">Our Location</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  While we operate primarily online to serve people everywhere, our heart is based in Mumbai, India.
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Mumbai, Maharashtra</div>
                  <div>India 400001</div>
                </div>
              </div>
              
              <div className="card-warm">
                <div className="flex items-center space-x-4 mb-6">
                  <Heart className="w-8 h-8 text-secondary" />
                  <h3 className="text-xl font-bold text-foreground">Our Promise</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5" />
                    <span className="text-muted-foreground">We'll respond to all inquiries within 24 hours</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5" />
                    <span className="text-muted-foreground">Your privacy and confidentiality are protected</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5" />
                    <span className="text-muted-foreground">Every message is read with care and attention</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5" />
                    <span className="text-muted-foreground">We're here to help, not judge</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-section flex items-center justify-center space-x-3">
              <HelpCircle className="w-8 h-8 text-primary" />
              <span>Frequently Asked Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about Suno Saathi and our services.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="card-warm">
                <h3 className="text-lg font-semibold text-foreground mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Support */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-gradient text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Need Immediate Support?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              If you're experiencing a mental health crisis or having thoughts of self-harm, please reach out for immediate help.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 p-6 rounded-2xl">
                <h3 className="font-semibold text-foreground mb-2">Crisis Helpline</h3>
                <p className="text-2xl font-bold text-foreground mb-2">1-800-273-8255</p>
                <p className="text-sm text-muted-foreground">Available 24/7</p>
              </div>
              <div className="bg-white/10 p-6 rounded-2xl">
                <h3 className="font-semibold text-foreground mb-2">Emergency Services</h3>
                <p className="text-2xl font-bold text-foreground mb-2">911</p>
                <p className="text-sm text-muted-foreground">For immediate danger</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;