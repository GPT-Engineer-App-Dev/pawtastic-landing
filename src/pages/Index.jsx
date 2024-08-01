import { Paw } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 flex flex-col justify-center items-center p-4">
      <Paw className="w-16 h-16 text-blue-600 mb-4" />
      <h1 className="text-4xl font-bold text-blue-800 mb-4">Pawsome Pals</h1>
      <p className="text-xl text-blue-700 mb-8 text-center max-w-md">
        Welcome to the ultimate destination for dog lovers! Discover, connect, and celebrate our furry best friends.
      </p>
      <Button className="bg-blue-600 hover:bg-blue-700 text-white">
        Get Started
      </Button>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          title="Find a Friend"
          description="Browse through profiles of adorable dogs looking for their forever homes."
        />
        <FeatureCard
          title="Expert Advice"
          description="Get tips and tricks from our community of experienced dog owners and trainers."
        />
        <FeatureCard
          title="Dog-friendly Places"
          description="Discover parks, cafes, and events where you can hang out with your furry companion."
        />
      </div>
    </div>
  );
};

const FeatureCard = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-xl font-semibold text-blue-800 mb-2">{title}</h2>
    <p className="text-blue-600">{description}</p>
  </div>
);

export default Index;
