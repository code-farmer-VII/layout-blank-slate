interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 hover:bg-card-hover transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10">
      {/* Icon */}
      <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
        <div className="text-primary">{icon}</div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>

      {/* Description */}
      <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
        {description}
      </p>

      {/* Contact Us Button */}
      <button className="flex items-center gap-2 text-sm text-foreground border border-border/50 rounded-full px-5 py-2 hover:bg-primary/10 hover:border-primary/50 transition-all group-hover:translate-x-1">
        Contact Us
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default ServiceCard;
