import Layout from "@/components/layout/Layout";
import { BookOpen, MessageSquare, Users, Calendar, TrendingUp, Clock, ArrowRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Community = () => {
  const blogPosts = [
    {
      title: "5 Simple Ways to Practice Self-Care Daily",
      excerpt: "Discover practical self-care techniques that you can easily incorporate into your daily routine, even with a busy schedule.",
      category: "Self-Care",
      readTime: "5 min read",
      date: "2 days ago",
      featured: true
    },
    {
      title: "Understanding Anxiety: You're Not Alone",
      excerpt: "A gentle exploration of anxiety, its common symptoms, and why it's more common than you might think.",
      category: "Mental Health",
      readTime: "7 min read",
      date: "5 days ago",
      featured: false
    },
    {
      title: "The Power of Listening: How to Support a Friend",
      excerpt: "Learn effective ways to support friends and family members who are going through difficult times.",
      category: "Relationships",
      readTime: "6 min read",
      date: "1 week ago",
      featured: false
    },
    {
      title: "Building Resilience Through Difficult Times",
      excerpt: "Practical strategies for developing emotional resilience and bouncing back from life's challenges.",
      category: "Personal Growth",
      readTime: "8 min read",
      date: "1 week ago",
      featured: false
    },
    {
      title: "Mindfulness for Beginners: Start Your Journey",
      excerpt: "A beginner-friendly guide to mindfulness practices that can help reduce stress and increase awareness.",
      category: "Mindfulness",
      readTime: "10 min read",
      date: "2 weeks ago",
      featured: false
    },
    {
      title: "Creating Healthy Boundaries in Relationships",
      excerpt: "Understanding the importance of boundaries and practical tips for setting them in various relationships.",
      category: "Relationships",
      readTime: "9 min read",
      date: "2 weeks ago",
      featured: false
    }
  ];

  const categories = [
    { name: "Mental Health", count: 15, color: "bg-primary" },
    { name: "Self-Care", count: 12, color: "bg-secondary" },
    { name: "Relationships", count: 10, color: "bg-primary" },
    { name: "Personal Growth", count: 8, color: "bg-secondary" },
    { name: "Mindfulness", count: 6, color: "bg-primary" }
  ];

  const communityStats = [
    { icon: <Users className="w-6 h-6" />, label: "Active Members", value: "500+" },
    { icon: <MessageSquare className="w-6 h-6" />, label: "Discussions", value: "2.5K+" },
    { icon: <BookOpen className="w-6 h-6" />, label: "Articles", value: "150+" },
    { icon: <Heart className="w-6 h-6" />, label: "Support Given", value: "10K+" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="heading-hero mb-6">
              Our <span className="text-primary">Community</span> Hub
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A place to learn, share, and grow together. Find resources, join discussions, and connect with others on similar journeys.
            </p>
          </div>
          
          {/* Community Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {communityStats.map((stat, index) => (
              <div key={index} className="card-warm text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3 text-primary">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-section">Explore by Topic</h2>
            <p className="text-xl text-muted-foreground">Find content that resonates with your current needs and interests.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`${category.color} text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-all duration-300 flex items-center space-x-2`}
              >
                <span>{category.name}</span>
                <span className="bg-white/20 px-2 py-1 rounded-full text-sm">{category.count}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-gradient mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="bg-warning text-warning-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Featured Article
                  </span>
                  <span className="text-muted-foreground text-sm">{blogPosts[0].date}</span>
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">{blogPosts[0].title}</h2>
                <p className="text-lg text-muted-foreground mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center space-x-4 mb-6">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                    {blogPosts[0].category}
                  </span>
                  <div className="flex items-center space-x-1 text-muted-foreground text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                </div>
                <button className="btn-hero inline-flex items-center space-x-2">
                  <BookOpen className="w-5 h-5" />
                  <span>Read Article</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <div className="bg-white/10 rounded-2xl h-64 flex items-center justify-center">
                <BookOpen className="w-24 h-24 text-white/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="section-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-section">Recent Articles</h2>
            <p className="text-xl text-muted-foreground">Fresh insights and practical advice for your mental wellness journey.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <article key={index} className="card-warm group hover:scale-105 transition-all duration-300">
                <div className="bg-muted rounded-xl h-48 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  <BookOpen className="w-16 h-16 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div className="flex items-center space-x-2 mb-3">
                  <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </span>
                  <span className="text-muted-foreground text-sm">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-muted-foreground text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <button className="text-primary hover:text-primary-dark font-medium text-sm flex items-center space-x-1">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Community Discussions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="card-warm">
              <div className="flex items-center space-x-4 mb-6">
                <MessageSquare className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Join the Discussion</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Connect with others who understand your journey. Share experiences, ask questions, and offer support in our moderated community forums.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-foreground">Safe, moderated environment</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-foreground">Anonymous participation option</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-foreground">Expert guidance available</span>
                </li>
              </ul>
              <button className="btn-warm w-full">
                Join Community Discussions
              </button>
            </div>
            
            <div className="card-warm">
              <div className="flex items-center space-x-4 mb-6">
                <Calendar className="w-8 h-8 text-secondary" />
                <h3 className="text-2xl font-bold text-foreground">Upcoming Events</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <div className="text-sm text-muted-foreground">Tomorrow, 7:00 PM</div>
                  <div className="font-semibold text-foreground">Managing Stress at Work</div>
                  <div className="text-sm text-muted-foreground">Group discussion session</div>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <div className="text-sm text-muted-foreground">Friday, 6:30 PM</div>
                  <div className="font-semibold text-foreground">Mindfulness Meditation</div>
                  <div className="text-sm text-muted-foreground">Guided practice session</div>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <div className="text-sm text-muted-foreground">Sunday, 3:00 PM</div>
                  <div className="font-semibold text-foreground">Young Adults Support Circle</div>
                  <div className="text-sm text-muted-foreground">Peer support group</div>
                </div>
              </div>
              <button className="btn-warm w-full mt-6">
                View All Events
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="card-gradient">
            <TrendingUp className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Stay Connected with Our Community
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get weekly wellness tips, community highlights, and new article notifications delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="btn-hero">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Community;