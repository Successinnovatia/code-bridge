import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import LearningPaths from '../components/LearningPaths';
import Community from '../components/Community';
import SuccessStories from '../components/SuccessStories';
import CallToAction from '../components/CallToAction';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Features />
      <LearningPaths />
      <Community />
      <SuccessStories />
      <CallToAction />
    </>
  );
};

export default HomePage;