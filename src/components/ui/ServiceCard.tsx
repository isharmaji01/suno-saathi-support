import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  highlight?: boolean;
}

const ServiceCard = ({ icon, title, description, features, highlight = false }: ServiceCardProps) => {
  return (
    <div className={`${highlight ? 'card-gradient' : 'card-warm'} group hover:scale-105 transition-all duration-300`}>
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
      </div>
      
      <p className="text-muted-foreground mb-6">{description}</p>
      
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-secondary rounded-full"></div>
            <span className="text-sm text-foreground">{feature}</span>
          </li>
        ))}
      </ul>
      
      <button className="w-full btn-warm group-hover:shadow-lg flex items-center justify-center space-x-2">
        <span>Learn More</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};

export default ServiceCard;