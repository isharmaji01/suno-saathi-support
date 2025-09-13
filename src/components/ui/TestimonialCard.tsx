import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

const TestimonialCard = ({ name, role, content, rating, avatar }: TestimonialCardProps) => {
  return (
    <div className="card-warm animate-scale-in">
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
          {avatar}
        </div>
        <div>
          <h3 className="font-semibold text-foreground">{name}</h3>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
      
      <div className="flex space-x-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-warning fill-current" />
        ))}
      </div>
      
      <p className="text-muted-foreground italic">"{content}"</p>
    </div>
  );
};

export default TestimonialCard;