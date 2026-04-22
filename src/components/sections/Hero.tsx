"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { 
  Search, 
  CircleDollarSign, 
  CloudUpload, 
  Bell, 
  User, 
  Play, 
  Diamond, 
  Users, 
  LayoutGrid,
  SearchCode
} from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 lg:px-16 py-8 bg-transparent max-w-screen-2xl mx-auto relative z-50">
      {/* Logo */}
      <div className="flex items-center gap-4 group cursor-pointer">
        <div className="relative w-12 h-12 flex items-center justify-center">
          <Image 
            src="/images/logo.png" 
            alt="Logo" 
            width={48}
            height={48}
            className="object-contain rounded-xl"
          />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse" />
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-2xl font-black text-primary tracking-tighter leading-none">WARPTEX</span>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1">Trusted Manufacturer</span>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-12">
        <div className="relative group">
          <a href="#" className="text-[15px] font-bold text-slate-900">Home</a>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full" />
        </div>
        <a href="#" className="text-[15px] font-bold text-slate-400 hover:text-slate-900 transition-all duration-300">About Us</a>
        <a href="#" className="text-[15px] font-bold text-slate-400 hover:text-slate-900 transition-all duration-300">Our Services</a>
      </div>

      {/* Icons */}
      <div className="flex items-center gap-8 text-slate-400">
        <Search className="w-5 h-5 cursor-pointer hover:text-slate-900 transition-colors" />
        <CircleDollarSign className="w-5 h-5 cursor-pointer hover:text-slate-900 transition-colors" />
        <CloudUpload className="w-5 h-5 cursor-pointer hover:text-slate-900 transition-colors" />
        <Bell className="w-5 h-5 cursor-pointer hover:text-slate-900 transition-colors" />
        <div className="w-10 h-10 rounded-full border-2 border-slate-100 flex items-center justify-center cursor-pointer hover:border-slate-300 hover:bg-slate-50 transition-all">
          <User className="w-5 h-5 text-slate-900" />
        </div>
      </div>
    </nav>
  );
};

const ScrollingColumn = ({ images, duration, reverse = false }: { images: string[], duration: number, reverse?: boolean }) => {
  return (
    <div className="relative h-[800px] overflow-hidden w-full">
      <motion.div
        animate={{
          y: reverse ? ["-50%", "0%"] : ["0%", "-50%"]
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex flex-col gap-6 w-full"
      >
        {[...images, ...images].map((src, index) => (
          <div 
            key={index}
            className="relative w-full aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-xl"
          >
            <Image 
              src={src} 
              alt={`Scrolling image ${index}`} 
              fill 
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const StatItem = ({ icon: Icon, title, sub, colorClass = "bg-white" }: { icon: any, title: string, sub: string, colorClass?: string }) => (
  <div className="flex items-center gap-5">
    <div className={`w-14 h-14 ${colorClass} rounded-2xl flex items-center justify-center shadow-xl shadow-slate-200/50 border border-slate-100`}>
      <Icon className="w-6 h-6 text-slate-400" />
    </div>
    <div>
      <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest leading-none mb-1">{title}</p>
      <p className="text-2xl font-black text-slate-900 tabular-nums leading-none">{sub}</p>
    </div>
  </div>
);

export default function Hero() {
  const col1 = ["/images/hero-1.png", "/images/hero-2.png", "/images/hero-3.png"];
  const col2 = ["/images/hero-4.png", "/images/hero-5.png", "/images/hero-6.png"];
  const col3 = ["/images/hero-2.png", "/images/hero-6.png", "/images/hero-1.png"];

  return (
    <div className="min-h-screen bg-[#F8F9FB] overflow-hidden selection:bg-primary selection:text-white relative">
      <Navbar />
      
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-16 flex flex-col min-h-[calc(100vh-100px)] relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center flex-1 relative z-10">
          {/* Left Content */}
          <div className="relative z-20">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-12"
            >
              <div className="relative inline-block">
                <h1 className="text-6xl lg:text-[90px] font-black text-slate-900 leading-[0.95] tracking-tight">
                  Welcome <br />
                  to <span className="text-primary relative">
                    WARPTEX
                    <motion.span 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                      className="absolute -top-4 -right-12"
                    >
                      <Play className="w-12 h-12 fill-blue-100 text-blue-100" />
                    </motion.span>
                  </span>
                </h1>
              </div>

              <div className="flex items-start gap-4 text-slate-500 max-w-md">
                <p className="text-xl font-medium leading-relaxed">
                  Your Trusted Manufacturer and <br />
                  Exporter of High-Quality Goods
                </p>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                >
                  <Diamond className="w-6 h-6 text-primary mt-2" />
                </motion.div>
              </div>

              <Button className="bg-primary hover:opacity-90 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 text-primary-foreground px-12 py-8 text-xl font-bold rounded-[2.2rem] transition-all duration-300 border-none">
                Get Started
              </Button>
            </motion.div>
          </div>

          {/* Right Content - Wrapped in overflow-hidden container to clip rotated images */}
          <div className="relative h-full flex items-center justify-end pointer-events-none overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/40 blur-[120px] rounded-full z-0" />
            
            <div className="grid grid-cols-3 gap-6 w-full max-w-[650px] relative z-10 rotate-[-5deg] scale-110 origin-center">
              <div className="pt-20">
                <ScrollingColumn images={col1} duration={20} />
              </div>
              <div className="pb-20">
                <ScrollingColumn images={col2} duration={25} reverse={true} />
              </div>
              <div className="pt-20">
                <ScrollingColumn images={col3} duration={18} />
              </div>
            </div>

            {/* Stronger Edge Fading to hide image edges */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#F8F9FB] via-transparent to-[#F8F9FB] z-20" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#F8F9FB] via-transparent to-[#F8F9FB] z-20" />
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#F8F9FB] to-transparent z-20" />
          </div>
        </div>

        {/* Footer Stats Row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="pb-16 pt-8 flex flex-wrap items-center justify-between gap-12 relative z-50 bg-[#F8F9FB]/80 backdrop-blur-sm lg:bg-transparent"
        >
          <StatItem 
            icon={Users} 
            title="Users watching" 
            sub="322,572" 
          />
          <StatItem 
            icon={LayoutGrid} 
            title="Create content now" 
            sub="1000+ available" 
            colorClass="bg-orange-50/50"
          />
          <StatItem 
            icon={SearchCode} 
            title="Find our best creators" 
            sub="Search best audio" 
            colorClass="bg-blue-50/50"
          />
        </motion.div>
      </div>
    </div>
  );
}
