interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-card/30 backdrop-blur-sm border border-border/30 rounded-3xl p-8 hover:bg-card/50 transition-all duration-300 hover:scale-[1.02]">
      {/* Icon */}
      <div className="w-12 h-12 rounded-full bg-muted/30 flex items-center justify-center mb-6">
        <div className="text-primary">{icon}</div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-foreground mb-3">{title}</h3>

      {/* Description */}
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
