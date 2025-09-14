import { Briefcase, Users, Trophy, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Features = () => {
  const features = [
    {
      icon: Briefcase,
      title: "Job Portal",
      description: "Access thousands of career opportunities from top companies. Filter by location, experience, and industry to find your perfect match.",
      link: "/career/jobs",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "My Applications",
      description: "Track your application status, manage deadlines, and get insights on your career journey. Stay organized and never miss an opportunity.",
      link: "/career/applications",
      color: "text-accent"
    },
    {
      icon: Trophy,
      title: "Success Stories",
      description: "Get inspired by alumni achievements and career transformations. Learn from real experiences and chart your own path to success.",
      link: "/career/success-stories",
      color: "text-success"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Career Platform
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to accelerate your career journey, all in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="feature-card p-8 rounded-xl"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br from-${feature.color.split('-')[1]}/20 to-${feature.color.split('-')[1]}/10 mb-6`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {feature.description}
              </p>
              
              <Button asChild variant="ghost" className="group">
                <Link to={feature.link} className="flex items-center space-x-2">
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;