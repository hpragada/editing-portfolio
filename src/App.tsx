import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedWork } from './components/FeaturedWork';
import { Showreel } from './components/Showreel';
import { EditingProcess } from './components/EditingProcess';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { PROJECTS, Project } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setPreselectedService(serviceTitle);
    handleScrollTo('contact');
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#F5F5F0] selection:bg-[#C6FF4D] selection:text-[#080808] flex flex-col">
      {/* Top Navigation */}
      <Navbar onContactClick={() => handleScrollTo('contact')} />

      {/* Main Content Areas */}
      <main className="flex-grow">
        {/* 1. Hero */}
        <Hero
          onWatchWorkClick={() => handleScrollTo('featured-work')}
          onContactClick={() => handleScrollTo('contact')}
          onOpenFeaturedVideo={() => setSelectedProject(PROJECTS[0])}
        />

        {/* 2. Featured Work (Centerpiece with the 5 Google Drive Projects) */}
        <FeaturedWork onSelectProject={(project) => setSelectedProject(project)} />

        {/* 3. Showreel */}
        <Showreel onOpenProjectModal={(project) => setSelectedProject(project)} />

        {/* 4. Editing Process */}
        <EditingProcess />

        {/* 5. Services for Freelance Clients */}
        <Services onSelectService={handleSelectService} />

        {/* 6. About Me */}
        <About />

        {/* 7. Contact */}
        <Contact preselectedService={preselectedService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Fullscreen Video Theater Lightbox */}
      <VideoModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
