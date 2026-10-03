import Loader from "@/components/loader";
import GradientBackground from "@/components/gradientbackground";

export default function Loading() {
  return (
    <GradientBackground>
      <Loader bgClassName="bg-transparent backdrop-blur-xl" />
    </GradientBackground>
  );
}