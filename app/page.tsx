import { Button } from "@/components/ui/button"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Car,
  Users,
 
  DollarSign,
  Leaf,
  Shield,
  Star,
  ArrowRight,
  Search,
  Clock,
  CheckCircle,
  Smartphone,
  Menu,
} from "lucide-react"
import Link from "next/link"
import {HeroIllustration} from "@/illustration/landingpage/HeroIllustration"
import {BenefitsIllustration} from "@/illustration/landingpage/BenefitsIllustration"
import {SafetyIllustration} from "@/illustration/landingpage/SafetyIllustration"
import {MobileAppIllustration} from "@/illustration/landingpage/MobileAppIllustration"
import { RideSearchForm } from "@/components/searchform/page"
// Custom SVG Illustrations








export default function CarpoolingLanding() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className=" w-full px-4 lg:px-6 h-16 flex items-center border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50 transition-all duration-300">
        <Link className="flex items-center justify-center group" href="#" aria-label="RideShare Home">
          <Car className="h-8 w-8 text-green-600 transition-transform group-hover:scale-110" />
          <span className="ml-2 text-xl font-bold text-gray-900">RideShare</span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-6" role="navigation" aria-label="Main navigation">
          <Link
            className="text-sm font-medium hover:text-green-600 transition-colors relative group"
            href="#how-it-works"
          >
            How it works
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
          </Link>
          <Link className="text-sm font-medium hover:text-green-600 transition-colors relative group" href="#safety">
            Safety
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
          </Link>
          <Link className="text-sm font-medium hover:text-green-600 transition-colors relative group" href="#about">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
          </Link>
        </nav>
        <div className="ml-6 flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            className="hover:bg-green-50 transition-colors"
            aria-label="Log in to your account"
          >
            <Link href="/login">Log in</Link>
          </Button>
          <Button
            size="sm"
            className="bg-green-600 hover:bg-green-700 transform hover:scale-105 transition-all duration-200"
            aria-label="Sign up for RideShare"
          >
           <Link href="/signup">Sign up</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-green-50 transition-colors"
            aria-label="Open mobile menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
         <section className="h-screen w-full bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden flex items-center">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animate-delay-2000"></div>
            <div className="absolute top-40 left-40 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animate-delay-4000"></div>
          </div>

           <div className="container px-4 md:px-6 relative z-10 mx-auto max-w-7xl "> {/* Added pt-16 to account for fixed header */}
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
            <div className="flex flex-col justify-center space-y-4 animate-slide-in-left">
                <div className="space-y-2">
                  <Badge
                    variant="secondary"
                    className="w-fit bg-green-100 text-green-800 hover:bg-green-200 transition-colors"
                  >
                    🌱 Eco-Friendly Travel
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none ">
                    Your pick of rides at low prices
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl leading-relaxed">
                    Travel comfortably for less. Find rides with friendly drivers going your way
                  </p>
                </div>

                {/* Enhanced Search Form */}
                {/* <Card className="w-full max-w-md shadow-lg hover:shadow-xl transition-shadow duration-300 border-green-100">
                  <CardContent className="p-6">
                    <form className="space-y-4" role="search" aria-label="Find rides">
                      <div className="relative group">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-green-600 transition-colors group-focus-within:text-green-700" />
                        <Input
                          placeholder="Leaving from..."
                          className="pl-10 border-green-200 focus:border-green-500 focus:ring-green-500 transition-all duration-200"
                          aria-label="Departure location"
                        />
                      </div>
                      <div className="relative group">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-red-500 transition-colors group-focus-within:text-red-600" />
                        <Input
                          placeholder="Going to..."
                          className="pl-10 border-green-200 focus:border-green-500 focus:ring-green-500 transition-all duration-200"
                          aria-label="Destination location"
                        />
                      </div>
                      <div className="relative group">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 transition-colors group-focus-within:text-gray-600" />
                        <Input
                          type="date"
                          className="pl-10 border-green-200 focus:border-green-500 focus:ring-green-500 transition-all duration-200"
                          aria-label="Travel date"
                        />
                      </div>
                      <Button
                        className="w-full bg-green-600 hover:bg-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                        type="submit"
                        aria-label="Search for rides"
                      >
                        <Search className="mr-2 h-4 w-4" />
                        Search rides
                      </Button>
                    </form>
                  </CardContent>
                </Card> */}

                <RideSearchForm />
              </div>
              <div className="flex items-center justify-center animate-slide-in-right">
                <HeroIllustration />
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Stats Section */}
        <section className="w-full py-12 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "10M+", label: "Happy members", delay: "animate-delay-0" },
                { value: "1M+", label: "Rides per month", delay: "animate-delay-200" },
                { value: "50+", label: "Countries", delay: "animate-delay-400" },
                { value: "4.8★", label: "Average rating", delay: "animate-delay-600" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`group hover:scale-105 transition-transform duration-300 cursor-pointer animate-count-up ${stat.delay}`}
                >
                  <div className="text-3xl font-bold text-green-600 group-hover:text-green-700 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced How it Works */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  Simple Process
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How RideShare works</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Getting around has never been easier. Here how it works.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {[
                {
                  icon: Search,
                  title: "Search",
                  description:
                    "Enter your departure and destination cities, choose your date and find the perfect ride.",
                  step: 1,
                  delay: "animate-delay-0",
                },
                {
                  icon: Users,
                  title: "Book",
                  description: "Book your seat and pay securely online. Chat with your driver to coordinate pickup.",
                  step: 2,
                  delay: "animate-delay-300",
                },
                {
                  icon: Car,
                  title: "Travel",
                  description: "Meet your driver and fellow passengers, then enjoy your comfortable journey.",
                  step: 3,
                  delay: "animate-delay-600",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className={`text-center group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-green-200 animate-fade-in-up ${item.delay} relative`}
                >
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="rounded-full bg-green-100 text-green-600 group-hover:bg-green-200 p-3 transition-all duration-300 group-hover:scale-110">
                        <item.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-green-600 text-white text-sm font-bold flex items-center justify-center animate-bounce-subtle">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-green-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Benefits Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="secondary" className="w-fit bg-green-100 text-green-800">
                    🌍 Environmental Impact
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why choose carpooling?</h2>
                  <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Save money, meet people, and help the environment. Carpooling is the smart way to travel.
                  </p>
                </div>
                <div className="grid gap-4">
                  {[
                    {
                      icon: DollarSign,
                      title: "Save up to 70%",
                      description: "Travel for a fraction of the cost of other transport options.",
                      color: "text-yellow-600",
                      delay: "animate-delay-0",
                    },
                    {
                      icon: Leaf,
                      title: "Reduce CO2 emissions",
                      description: "Share rides and reduce your carbon footprint by up to 75%.",
                      color: "text-green-600",
                      delay: "animate-delay-200",
                    },
                    {
                      icon: Users,
                      title: "Meet new people",
                      description: "Connect with friendly locals and fellow travelers.",
                      color: "text-blue-600",
                      delay: "animate-delay-400",
                    },
                    {
                      icon: Clock,
                      title: "Door-to-door convenience",
                      description: "Get picked up and dropped off wherever is convenient for you.",
                      color: "text-purple-600",
                      delay: "animate-delay-600",
                    },
                  ].map((benefit, index) => (
                    <div
                      key={index}
                      className={`flex items-start space-x-3 group hover:bg-green-50 p-3 rounded-lg transition-all duration-300 hover:scale-105 animate-slide-in-left ${benefit.delay}`}
                    >
                      <benefit.icon
                        className={`h-5 w-5 ${benefit.color} mt-1 group-hover:scale-110 transition-transform`}
                      />
                      <div>
                        <h3 className="font-semibold group-hover:text-green-700 transition-colors">{benefit.title}</h3>
                        <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center">
                <BenefitsIllustration />
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Safety Section */}
        <section id="safety" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  🛡️ Trust & Safety
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Your safety is our priority</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We built multiple safety features to ensure you have a secure and comfortable journey.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-6">
                {[
                  {
                    icon: Shield,
                    title: "Verified profiles",
                    description: "All members verify their identity and phone number before joining.",
                    delay: "animate-delay-0",
                  },
                  {
                    icon: Star,
                    title: "Ratings and reviews",
                    description: "Rate your experience and read reviews from other members.",
                    delay: "animate-delay-200",
                  },
                  {
                    icon: CheckCircle,
                    title: "Secure payments",
                    description: "Pay securely online with our encrypted payment system.",
                    delay: "animate-delay-400",
                  },
                  {
                    icon: Smartphone,
                    title: "24/7 support",
                    description: "Our customer support team is available around the clock.",
                    delay: "animate-delay-600",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-start space-x-3 group hover:bg-white p-4 rounded-lg transition-all duration-300 hover:shadow-md hover:scale-105 animate-slide-in-left ${feature.delay}`}
                  >
                    <feature.icon className="h-5 w-5 text-green-600 mt-1 group-hover:scale-110 transition-transform" />
                    <div>
                      <h3 className="font-semibold mb-1 group-hover:text-green-700 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center">
                <SafetyIllustration />
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Driver CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-green-600 via-green-700 to-emerald-600 relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center animate-fade-in-up">
              <div className="space-y-2">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  💰 Earn Money
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Drive and earn money</h2>
                <p className="max-w-[900px] text-green-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Turn your empty seats into extra income. Offer rides on routes you already taking.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                {/* <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-green-600 hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Start earning
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-green-600 transform hover:scale-105 transition-all duration-200"
                >
                  Learn more
                </Button> */}

                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <ArrowRight className="ml-2 h-4 w-4" />
                  Start earning
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white transform hover:scale-105 transition-all duration-200"
                >
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced App Download Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex items-center justify-center order-2 lg:order-1">
                <MobileAppIllustration />
              </div>
              <div className="flex flex-col justify-center space-y-4 order-1 lg:order-2 animate-slide-in-right">
                <div className="space-y-2">
                  <Badge variant="secondary" className="w-fit bg-blue-100 text-blue-800">
                    📱 Mobile App
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Take RideShare with you</h2>
                  <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Download our mobile app for the best carpooling experience. Book rides, chat with drivers, and
                    manage your trips on the go.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  {/* <Button
                    size="lg"
                    className="bg-black text-white hover:bg-gray-800 transform hover:scale-105 transition-all duration-200"
                  >
                    <Smartphone className="mr-2 h-5 w-5" />
                    Download for iOS
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="hover:bg-gray-50 transform hover:scale-105 transition-all duration-200"
                  >
                    <Smartphone className="mr-2 h-5 w-5" />
                    Get it on Android
                  </Button> */}
                  <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <Smartphone className="mr-2 h-5 w-5" />

                   Download for iOS
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white transform hover:scale-105 transition-all duration-200"
                >
                  <Smartphone className="mr-2 h-5 w-5" />
                  Download for Android
                </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Final CTA */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-green-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center animate-fade-in-up">
              <div className="space-y-2">
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  🚀 Get Started
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to start your journey?</h2>
                <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join millions of people who choose carpooling for their travels.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Find a ride
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white transform hover:scale-105 transition-all duration-200"
                >
                  Offer a ride
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
        <div className="flex items-center gap-2 group">
          <Car className="h-6 w-6 text-green-600 group-hover:scale-110 transition-transform" />
          <span className="text-sm font-medium">RideShare</span>
        </div>
        <p className="text-xs text-gray-500 sm:ml-auto">© 2024 RideShare. All rights reserved.</p>
        <nav className="sm:ml-6 flex gap-4 sm:gap-6" role="navigation" aria-label="Footer navigation">
          <Link className="text-xs hover:underline underline-offset-4 hover:text-green-600 transition-colors" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 hover:text-green-600 transition-colors" href="#">
            Privacy Policy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 hover:text-green-600 transition-colors" href="#">
            Help Center
          </Link>
        </nav>
      </footer>
    </div>
  )
}
