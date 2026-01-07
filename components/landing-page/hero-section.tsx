import Link from "next/link";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  ArrowRightIcon,
  EyeIcon,
  RocketIcon,
  SparklesIcon,
  UsersIcon,
} from "lucide-react";
import StatsCard from "./stats-card";

const LiveBadge = () => {
  return (
    <Badge
      variant="outline"
      className="px-4 py-2 mb-8 text-sm backdrop-blur-sm"
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
      </span>
      <span className="text-muted-foreground">
        Join thousands of creators sharing their work
      </span>
    </Badge>
  );
};

const statsData = [
  {
    icon: RocketIcon,
    value: "2.5K+",
    label: "Projects Shared",
  },
  {
    icon: UsersIcon,
    value: "10K+",
    label: "Active Creators",
    hasBorder: true,
  },
  {
    icon: EyeIcon,
    value: "50K+",
    label: "Monthly Visitors",
  },
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-background via-background to-muted/20">
      <div className="wrapper">
        <div className="flex flex-col items-center justify-center lg:py-24 py-12 text-center">
          <LiveBadge />
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-5xl">
            Share What You&apos;ve Built, Discover What&apos;s Launching
          </h1>
          <p className="">
            A community platform for creators to showcase their apps, AI tools,
            SaaS products, and creative projects. Authentic launches, real
            builders, genuine feedback.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button asChild size="lg" className="text-base px-8 shadow-lg">
              <Link href="/submit">
                <SparklesIcon className="size-5" />
                Share Your Project
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="text-base px-8 shadow-lg"
              variant="secondary"
            >
              <Link href="/explore">
                Explore Projects <ArrowRightIcon className="size-5" />
              </Link>
            </Button>
          </div>
          <div className="flex flex-row space-x-8">                   {
            statsData.map((stat)=>(
              <StatsCard key={stat.label} {...stat}/>
            ))
          }
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;
