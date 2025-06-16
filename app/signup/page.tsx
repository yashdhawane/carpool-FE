'use client';
import { useState, FormEvent } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Car, Mail, Lock, User, ArrowLeft, Leaf, Shield, DollarSign } from "lucide-react"
import Link from "next/link"
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';

import {SignupIllustration} from "@/illustration/signup/SignupIllustration"
import { useRouter } from 'next/navigation';

interface FormData {
  fullName: string;
  email: string;
  password: string;
  terms: boolean;
  newsletter: boolean;
}

interface SignupResponse {
  success: boolean;
  message: string;
  accessToken: string;
  refreshToken: string;
}

// Add this interface for error responses
interface SignupErrorResponse {
  success: boolean;
  message: string;
}


export default function SignupPage() {

    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        email: '',
        password: '',
        terms: false,
        newsletter: false
    });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

    
    const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    
    try {
      const response = await axios.post('http://localhost:3001/v1/auth/register', {
        name: formData.fullName,
        email: formData.email,
        password: formData.password,
        
      });

      if (response.status === 201) {
         const data = response.data as SignupResponse;
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);
        toast.success(data.message || 'Account created successfully!', {
        duration: 6000,
        position: 'top-center',
        icon: '🎉',
      });
        router.push('/search'); // Redirect to login page
      }
    } 
    // Ignore the TypeScript error on the next line
   
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    catch (error: any) {
    if (error.response) {
      switch (error.response.status) {
        case 400:
          // Validation errors
          const errorData = error.response.data as SignupErrorResponse;
          toast.error(errorData.message);
          setError(errorData.message);
          break;
          
        case 409:
          // Email already exists
          toast.error('Email already registered');
          setError('Email already registered');
          break;
          
        case 422:
          // Invalid input data
          toast.error('Please check your input data');
          setError('Please check your input data');
          break;
          
        case 429:
          // Rate limiting
          toast.error('Too many attempts. Please try again later');
          setError('Too many attempts. Please try again later');
          break;
          
        default:
          toast.error('Registration failed. Please try again.');
          setError('Registration failed. Please try again.');
      }
    } else if (error.request) {
      toast.error('Network error. Please check your connection.');
      setError('Network error. Please check your connection.');
    } else {
      toast.error('Registration failed. Please try again.');
      setError('Registration failed. Please try again.');
    }
  }
    finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
      {/* Animated background elements */}
       <Toaster />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animate-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animate-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 px-4 lg:px-6 h-16 flex items-center">
        <Link className="flex items-center justify-center group" href="/" aria-label="Back to RideShare Home">
          <ArrowLeft className="h-5 w-5 text-green-600 mr-2 group-hover:-translate-x-1 transition-transform" />
          <Car className="h-8 w-8 text-green-600 transition-transform group-hover:scale-110" />
          <span className="ml-2 text-xl font-bold text-gray-900">RideShare</span>
        </Link>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex items-center justify-center min-h-[calc(100vh-4rem)] px-4 py-8">
        <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
          {/* Illustration Side */}
          <div className="hidden lg:flex items-center justify-center animate-slide-in-left">
            <div className="text-center space-y-6">
              <SignupIllustration />
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-gray-900">Join the Movement</h2>
                <p className="text-gray-600 max-w-md">
                  Become part of the worlds largest carpooling community. Save money, meet people, and help save the
                  planet.
                </p>
                <div className="flex items-center justify-center gap-2 pt-4 flex-wrap">
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    <Leaf className="w-3 h-3 mr-1" />
                    Eco-Friendly
                  </Badge>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                    <DollarSign className="w-3 h-3 mr-1" />
                    Save 70%
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    <Shield className="w-3 h-3 mr-1" />
                    Secure
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Signup Form Side */}
          <div className="flex items-center justify-center animate-slide-in-right">
            <Card className="w-full max-w-md shadow-2xl border-green-100 hover:shadow-3xl transition-shadow duration-300">
              <CardHeader className="text-center space-y-2">
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Create Account
                </CardTitle>
                <p className="text-gray-600">Join RideShare and start saving today</p>
              </CardHeader>
              <CardContent className="space-y-6">
                 {error && (
                  <div className="p-3 text-sm text-red-600 bg-red-50 rounded-md">
                    {error}
                  </div>
                )}
                 <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <div className="relative group">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-green-600" />
                      <Input
                        id="fullName"
                        name="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="pl-10 border-green-200 focus:border-green-500"
                        required
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <div className="relative group">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-green-600" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        className="pl-10 border-green-200 focus:border-green-500"
                        required
                      />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="space-y-2">
                    <label htmlFor="password" className="text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <div className="relative group">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-green-600" />
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Create a strong password"
                        className="pl-10 border-green-200 focus:border-green-500"
                        required
                      />
                    </div>
                  </div>

                  {/* Terms Checkbox */}
                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="terms"
                      name="terms"
                      checked={formData.terms}
                      onChange={handleInputChange}
                      className="rounded border-green-300 text-green-600 mt-1"
                      required
                    />
                    <label htmlFor="terms" className="text-sm text-gray-600">
                      I agree to the Terms and Privacy Policy
                    </label>
                  </div>

                  {/* Newsletter Checkbox */}
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="newsletter"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleInputChange}
                      className="rounded border-green-300 text-green-600"
                    />
                    <label htmlFor="newsletter" className="text-sm text-gray-600">
                      Send me updates and offers
                    </label>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Creating account...
                      </span>
                    ) : (
                      'Create Account'
                    )}
                  </Button>
                </form>

                {/* Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-500">Or sign up with</span>
                  </div>
                </div>

                {/* Social Signup */}
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant="outline"
                    className="hover:bg-gray-50 transition-colors"
                    aria-label="Sign up with Google"
                  >
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    Google
                  </Button>
                  <Button
                    variant="outline"
                    className="hover:bg-gray-50 transition-colors"
                    aria-label="Sign up with Facebook"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Facebook
                  </Button>
                </div>

                {/* Login Link */}
                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link
                      href="/login"
                      className="text-green-600 hover:text-green-700 font-medium hover:underline transition-colors"
                    >
                      Sign in here
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
