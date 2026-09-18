/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { PageId, Project } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { SkillsPage } from './pages/SkillsPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const shouldReduceMotion = useReducedMotion();

  // Dynamic SEO Page Title update
  useEffect(() => {
    switch (currentPage) {
      case 'home':
        document.title = 'Aarav Sharma | Frontend Developer & UI/UX Enthusiast';
        break;
      case 'about':
        document.title = 'About Aarav Sharma | Computer Science Student';
        break;
      case 'projects':
        document.title = 'Aarav Sharma | Projects';
        break;
      case 'experience':
        document.title = 'Aarav Sharma | Experience';
        break;
      case 'skills':
        document.title = 'Aarav Sharma | Skills';
        break;
      case 'contact':
        document.title = 'Aarav Sharma | Contact';
        break;
      default:
        document.title = 'Aarav Sharma | Frontend Developer & UI/UX Enthusiast';
    }
  }, [currentPage]);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: shouldReduceMotion ? 'auto' : 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            onNavigate={handleNavigate}
            onSelectProject={(proj) => setSelectedProject(proj)}
          />
        );
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'projects':
        return (
          <ProjectsPage
            onNavigate={handleNavigate}
            onSelectProject={(proj) => setSelectedProject(proj)}
          />
        );
      case 'experience':
        return <ExperiencePage onNavigate={handleNavigate} />;
      case 'skills':
        return <SkillsPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      default:
        return (
          <HomePage
            onNavigate={handleNavigate}
            onSelectProject={(proj) => setSelectedProject(proj)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#080b11] text-[#f1f5f9] flex flex-col selection:bg-cyan-500/25 selection:text-cyan-300 relative">
      {/* Background Architectural Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-40 z-0" />

      {/* Global Navigation */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main className="flex-1 z-10 pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
