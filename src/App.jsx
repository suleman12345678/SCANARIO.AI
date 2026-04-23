import React, { useState } from "react";

// Assets - Overview
import landingPageImg from "./assets/landing-page.png";
import capabilitiesImg from "./assets/capabilities.png";
import howItWorksImg from "./assets/how-it-works.png";
import getStartedImg from "./assets/get-started.png";

// Assets - Dashboards
import platformOverviewImg from "./assets/images/platform-overview.png";
import testHistoryImg from "./assets/images/test-history.png";
import savedScriptsImg from "./assets/images/saved-scripts.png";
import apiTesting1Img from "./assets/images/api-testing-1.png";
import apiTesting2Img from "./assets/images/api-testing-2.png";
import scheduledJobsImg from "./assets/images/scheduled-jobs.png";
import compareTestsImg from "./assets/images/compare-tests.png";
import aiAnalytics1Img from "./assets/images/ai-analytics-1.png";
import aiAnalytics2Img from "./assets/images/ai-analytics-2.png";
import testPlannerImg from "./assets/images/test-planner.png";
import agentBuilderImg from "./assets/images/agent-builder.png";
import codeGeneratorImg from "./assets/images/code-generator.png";
import LinkCrawler1Img from "./assets/images/Link Crawler1.png";
import securityScanner1Img from "./assets/images/security-scanner1.png";
import securityScanner2Img from "./assets/images/security-scanner2.png";
import userProfileImg from "./assets/images/user-profile.png";
import environmentSettingsImg from "./assets/images/environment-settings.png";

/* ---------- UI COMPONENTS ---------- */

const Section = ({ tag, title, desc, children }) => (
  <div className="w-full animate-fade-in">
    <span className="inline-block text-[11px] font-medium px-3 py-1 mb-4 rounded-full bg-indigo-500/10 text-indigo-700 border border-indigo-500/20 tracking-wider uppercase">
      {tag}
    </span>

    <h1 className="text-3xl md:text-4xl font-bold text-zinc-950 mb-4 leading-tight tracking-tight">
      {title}
    </h1>

    <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8 max-w-3xl">
      {desc}
    </p>

    <div className="space-y-4 text-slate-600">
      {children}
    </div>
  </div>
);

const List = ({ items }) => (
  <ul className="space-y-3">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-3">
        <span className="text-indigo-400 mt-1.5">•</span>
        <span className="text-[15px] leading-relaxed">{item}</span>
      </li>
    ))}
  </ul>
);

/* ---------- MAIN APP ---------- */

export default function App() {
  const [activeTab, setActiveTab] = useState("overview-1");
  const [isOverviewOpen, setIsOverviewOpen] = useState(true);
  const [isDashboardsOpen, setIsDashboardsOpen] = useState(true);
  const [fullscreenImage, setFullscreenImage] = useState(null); // Lightbox state
  const [isSidebarMobileOpen, setIsSidebarMobileOpen] = useState(false); // Mobile sidebar state

  const overviewSections = [
    {
      id: "overview-1",
      label: "Overview Page",
      tag: "Getting Started",
      title: "Scanora AI — Platform Overview",
      desc: "Scanora AI is a multi-agent AI testing platform that empowers teams to automate website quality checks using natural language.",
      img: landingPageImg,
      content: <List items={["AI-driven testing infrastructure", "Natural language test generation", "Multi-agent orchestration", "Visual regression & performance monitoring"]} />
    },
    {
      id: "overview-2",
      label: "Capabilities",
      tag: "Platform Features",
      title: "Platform Capabilities",
      desc: "Discover the powerful features that make Scanora AI the leading choice for modern QA teams.",
      img: capabilitiesImg,
      content: <p>Explore comprehensive testing capabilities including SEO audits, security scanning, accessibility checks, and performance profiling—all handled by specialized AI agents.</p>
    },
    {
      id: "overview-3",
      label: "How It Works",
      tag: "Workflow",
      title: "How It Works",
      desc: "From URL input to detailed diagnostic reports, understand the end-to-end testing flow.",
      img: howItWorksImg,
      content: <List items={["Input your website URL", "Describe test scenarios in plain English", "AI Agents execute multi-layered checks", "Review actionable analytics and code exports"]} />
    },
    {
      id: "overview-4",
      label: "Get Started",
      tag: "Setup",
      title: "Ready to Set Up?",
      desc: "Get started with Scanora AI in minutes. No complex configuration required.",
      img: getStartedImg,
      content: <p>Create your account, configure your environment, and start running your first autonomous test plan today.</p>
    },
  ];

  const dashboardSections = [
    {
      id: "dash-1",
      label: "Platform Overview",
      tag: "Dashboard",
      title: "Scanora AI — Platform Overview",
      desc: "Scanora AI is an AI-powered website testing platform that allows users to test any website using natural language prompts.",
      img: platformOverviewImg,
      content: <List
      items={[
        "Enter a website URL to test",
        "Write test instructions in natural language",
        "Choose scenarios like SEO, Performance, Security",
        "Select from 16 AI testing agents"
      ]}
    />
    },
    {
      id: "dash-2",
      label: "Test History",
      tag: "Archive",
      title: "Test History & Trends",
      desc: "View past test runs and analyze performance trends over time.",
      img: testHistoryImg,
      content: <p>• 50 tests recorded in total.<br />
•	A Score Trend chart displays the last 20 runs using color-coded bars (green = good, yellow = moderate, orange/red = issues)<br />
•	Each test entry shows results for "JobMatch AI – Smart Job Management System" with a score of 75, along with: 
	✅ Passed checks,
	❌ Failed checks,
	⚠️ Warnings
</p>
    },
    {
      id: "dash-3",
      label: "Saved Scripts",
      tag: "Library",
      title: "Automation Scripts",
      desc: "Manage and reuse your custom test configurations.",
      img: savedScriptsImg,
      content: <p>• Currently shows 2 scripts saved — the library is having some data.<br />
•	Displays a prompt: "Save your test configurations to quickly re-run them later".<br />
•	A "Create Your First Script" button invites the user to save their first test setup.<br />
•	A "+ New Script" button is also available in the top-right corner
</p>
    },
    {
      id: "dash-4",
      label: "API Testing",
      tag: "API",
      title: "AI API Testing Agent",
      desc: "Advanced REST & GraphQL testing powered by multi-agent AI.",
      imgs: [apiTesting1Img, apiTesting2Img],
      content: <p>• Powered by the AI API Testing Agent (Multi-Agent system) with 5 AI agents handling: <br />
o	Auto Discovery, Security Scan, Performance Profiling, Contract Validation, Chaos Testing
•	Multiple testing modes available: <br />
o	AI Auto-Test, Multi-Agent, Manual Request, Chain Builder, AI Generate, Advanced Tools.<br />
•	A URL input field (pre-filled with a sample API) with an "AI Auto-Test" button.<br />
•	Quick Test shortcuts for popular APIs — JSONPlaceholder, ReqRes, Dog API, Cat Facts.<br />
•	The AI automatically discovers endpoints, runs CRUD tests, streams results in real time, and generates a detailed report with charts
</p>
    },
    {
      id: "dash-5",
      label: "Scheduled Jobs",
      tag: "Automation",
      title: "Scheduler Jobs",
      desc: "Run automated tests",
      img: scheduledJobsImg,
      content: <p>• Designed for automated, recurring tests with trend tracking.<br />
•	Currently shows 1 scheduled tests — the queue is having some data.<br />
•	Prompts the user to "Create a schedule to automatically test your websites".<br />
•	A "+ New Schedule" button in the top-right allows users to set up new automated jobs.<br />
It essentially acts as a cron-like scheduler for website tests, allowing users to run tests automatically at set intervals and track performance trends over time — without manual triggering.<br />
</p>
    },
    {
      id: "dash-6",
      label: "Compare Tests",
      tag: "Analysis",
      title: "Baseline vs. Current",
      desc: "Directly compare two test runs to identify changes and regressions.",
      img: compareTestsImg,
      content:  <p>• Compares Baseline (Before) vs Current (After) runs of the same app — JobMatch AI – Smart Job Management System.<br />
•	Both runs score 75, shown in the Score Comparison section.<br />
•	Metric Changes breakdown: 
  ✅ Tests Passed: 21 → 24,
	❌ Tests Failed: 2 → 5,
	⚠️ Warnings: 1 → 2,
	📋 Total Tests: 25 → 32,
•	Regression Analysis highlights: 
	Score is relatively stable between runs:
	⚠️ 3 new test failures introduced — possible regression,
	✅ 7 more tests now passing,
	📈 Test coverage increased (29 → 32 tests).
It gives developers a clear, actionable diff between two test runs to quickly spot regressions and improvements.
</p>
    },
    {
      id: "dash-7",
      label: "AI Analytics",
      tag: "Insights",
      title: "Advanced AI Analytics",
      desc: "AI-powered insights dashboard.",
      imgs: [aiAnalytics1Img, aiAnalytics2Img],
      content:<p>•	Overall Score: 75 (down 4 pts).<br />
•	Key metrics: 1,262 total tests, 63% pass rate, 73 failures, 79 warnings.<br />
•	Score & Pass Rate Trend — line chart showing performance over time.<br />
•	Coverage Radar — visualizes coverage across Performance, Frontend, SEO, Accessibility, and Security.<br />
•	Test Results Distribution — bar chart of pass/fail/warn per run.<br />
•	Risk Distribution — donut chart showing Low, Medium, and High risk ratios.<br />
AI-Powered Insights highlight: moderate health score, 6% failure rate, 4 flaky tests detected, top performing domain, and testing velocity of 50 runs
</p>
    },
    {
      id: "dash-8",
      label: "Test Planner",
      tag: "AI Tool",
      title: "Autonomous Test Planner",
      desc: "Generate comprehensive test cases from user stories or screenshots.",
      img: testPlannerImg,
      content: <p>• Autonomous Test Planner uses multi-modal AI agents to plan tests, write cases, generate automation & score risks.<br />
•	Input options: 
	Optional target URL.<br />
o	Describe tests via Requirements, User Story/Ticket, Code Diff, or Screenshot.<br />
o	Example prompts guide users (login flow, checkout, responsive design, form validation).<br />
•	Test Personas allow scenario generation tailored to specific user types:<br />
o	👑 Admin, 🆕 New User, ⚡ Power User, 📱 Mobile, 👤 Guest, ♿ Accessibility.<br />
•	A "Generate Autonomous Test Plan" button triggers the AI to analyze input and produce comprehensive test scenarios with risk scoring<br />
It essentially lets teams skip manual test case writing — just describe what to test and the AI handles the rest.
</p>
    },
    {
      id: "dash-9",
      label: "Agent Builder",
      tag: "No-Code",
      title: "Visual Agent Builder",
      desc: "Drag & drop interface to compose custom testing logic.",
      img: agentBuilderImg,
      content: <p>•	A drag-and-drop canvas where users assemble test steps by pulling actions from the left panel.<br />
•	Available Actions: 
Navigate, Click, Type, Assert Text, Assert Element, Wait, Screenshot, Scroll, Hover, Select.<br />
•	The canvas currently shows no steps yet, prompting users to drag actions or use a template.<br />
•	Agent configuration options include Agent Name, type (Functional), and a short description.<br />
•	Top-right controls: Templates, Import, Export for reusability and sharing.<br />
•	A "Save Agent" button finalizes and stores the custom agent.<br />
It's essentially a no-code/low-code test automation builder where users can visually compose reusable AI testing agents step by step.
</p>
    },
    {
      id: "dash-10",
      label: "Code Gen",
      tag: "Export",
      title: "Selenium Code Generator",
      desc: "Export your manual tests into production-ready automation code.",
      img: codeGeneratorImg,
      content: <p>•	Currently shows no test results yet, as code generation depends on prior test runs.<br />
•	Prompts the user to "Run a test first, then come here to export Selenium automation code".<br />
•	A "Run a Test" button redirects users to execute a test before code can be generated.<br />
It acts as a Selenium code exporter — once a test is run, this page converts the results into ready-to-use automation scripts that developers can integrate directly into their test pipelines.
</p>
    },
    {
      id: "dash-11",
      label: "Link Crawler",
      tag: "SEO Tool",
      title: "Broken Link Crawler",
      desc: "Automated scan for dead links, missing images, and script errors.",
      img: LinkCrawler1Img,
      content:  <p>•	Broken Links Crawler scans any website and checks every link for broken URLs.<br />
•	Users input a website URL and select a crawl depth (currently set to Page only).<br />
•	Scans all link types — anchors, images, scripts, and stylesheets.<br />
•	Currently shows some links crawled , ex URL https://www.youtube.com.<br />
•	A "Crawl" button initiates the scan.<br />
It's a straightforward broken link detection tool that helps developers and QA teams quickly identify dead or invalid URLs across their web pages.
</p>
    },
    {
      id: "dash-12",
      label: "Security Scanner",
      tag: "Security",
      title: "Vulnerability Auditor",
      desc: "Audit your site for XSS, SQLi, CSRF, and SSL issues.",
      imgs: [securityScanner1Img, securityScanner2Img],
      content: <p>•	Security Vulnerability Scanner (Advanced) covers a wide range of threat categories: 
	XSS, SQL Injection, CSRF, SSL/TLS, Security Headers, Cookie Audit, Secret Exposure, Mixed Content<br />
•	Users enter a website URL and click "Scan" to run a comprehensive security audit.<br />
•	Quick-access category badges at the bottom show all scan types at a glance.<br />
•	Currently URL https://www.youtube.com — I will scan this link<br />
It's an all-in-one security auditing tool that helps developers identify common web vulnerabilities quickly without needing separate security testing tools.
</p>
    },
    {
      id: "dash-13",
      label: "Profile",
      tag: "User",
      title: "User Profile Management",
      desc: "Manage your account, credentials, and notification settings.",
      img: userProfileImg,
      content: <p>•	Displays the logged-in user Suleman with email and Active membership status since April 2026.<br />
•	Two tabs available: General Info and Security.<br />
•	Personal Information section allows editing: 
	Full Name, 
	Email Address (used for login and notifications), 
	Profile Photo (supports JPG, PNG, GIF — max 2MB)<br />
•	Save Changes and Cancel buttons at the bottom to confirm or discard edits.<br />
It's a standard user account management page for updating personal details and profile settings.
</p>
    },
    {
      id: "dash-14",
      label: "Environment",
      tag: "Config",
      title: "Environment Settings",
      desc: "Manage environment config.",
      img: environmentSettingsImg,
      content: <p>•	Test Login Credentials section stores: 
	Username/ID (pre-filled with user's email),
	Password (masked),
	Optional test Email address.<br />
•	App Config section includes: 
	Nav Timeout — set to 60,000ms (60 seconds),
	Max Agents — set to 5,
	Debug Mode — currently set to false.<br />
•	A "Save Changes" button applies all updates.<br />
It serves as a centralized environment configuration panel where users define test credentials and app-level settings.</p>
    },
  ];

  const currentSection = [...overviewSections, ...dashboardSections].find(s => s.id === activeTab);

  return (
    <div className="h-screen flex flex-col bg-slate-50 text-zinc-950 selection:bg-indigo-500/20">

     

      {/* MOBILE HEADER */}
      <header className="md:hidden flex items-center justify-between px-5 py-4 bg-white border-b border-slate-200 z-30">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">S</div>
          <span className="font-bold text-slate-900 tracking-tight text-lg">Scanora AI</span>
        </div>
        <button 
          onClick={() => setIsSidebarMobileOpen(true)}
          className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
          aria-label="Open menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
      </header>

      <div className="flex flex-1 overflow-hidden relative">

        {/* MOBILE OVERLAY */}
        {isSidebarMobileOpen && (
          <div 
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 md:hidden animate-fade-in"
            onClick={() => setIsSidebarMobileOpen(false)}
          />
        )}

        {/* SIDEBAR */}
        <aside className={`
          fixed md:relative inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-200 
          flex flex-col transition-transform duration-300 ease-in-out
          ${isSidebarMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          overflow-y-auto py-6
        `}>
          
          {/* MOBILE CLOSE BUTTON */}
          <div className="md:hidden absolute top-4 right-4">
            <button 
              onClick={() => setIsSidebarMobileOpen(false)}
              className="p-2 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>

          <div className="px-6 mb-8 text-[11px] font-bold text-slate-500 uppercase tracking-[2px]">
            Navigation
          </div>

          <div className="space-y-2 px-3">

            {/* OVERVIEW DROPDOWN */}
            <div>
              <button
                onClick={() => setIsOverviewOpen(!isOverviewOpen)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-slate-700 hover:bg-slate-100 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg grayscale group-hover:grayscale-0 transition-all">🏠</span>
                  <span className="font-medium">Overview</span>
                </div>
                <span className={`text-slate-500 transition-transform duration-300 ${isOverviewOpen ? "rotate-180" : ""}`}>
                  ▾
                </span>
              </button>

              {isOverviewOpen && (
                <div className="mt-1 ml-4 border-l border-slate-200 pl-2 space-y-1">
                  {overviewSections.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => {
                        setActiveTab(s.id);
                        setIsSidebarMobileOpen(false); // Close on mobile
                      }}
                      className={`w-full text-left px-4 py-2.5 rounded-lg text-[13.5px] transition-all ${activeTab === s.id
                        ? "bg-indigo-500/10 text-indigo-400 font-medium"
                        : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                        }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* DASHBOARDS DROPDOWN */}
            <div className="mt-4">
              <button
                onClick={() => setIsDashboardsOpen(!isDashboardsOpen)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-slate-700 hover:bg-slate-100 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg grayscale group-hover:grayscale-0 transition-all">📊</span>
                  <span className="font-medium">Dashboards</span>
                </div>
                <span className={`text-slate-500 transition-transform duration-300 ${isDashboardsOpen ? "rotate-180" : ""}`}>
                  ▾
                </span>
              </button>

              {isDashboardsOpen && (
                <div className="mt-1 ml-4 border-l border-slate-200 pl-2 space-y-1">
                  {dashboardSections.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => {
                        setActiveTab(s.id);
                        setIsSidebarMobileOpen(false); // Close on mobile
                      }}
                      className={`w-full text-left px-4 py-2.5 rounded-lg text-[13.5px] transition-all ${activeTab === s.id
                        ? "bg-indigo-500/10 text-indigo-400 font-medium"
                        : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                        }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 overflow-y-auto bg-slate-50 p-8 md:p-12 lg:p-16">
          <div className="max-w-4xl mx-auto flex flex-col gap-12 items-center text-center">

            {/* VISUAL PREVIEW (TOP) */}
            <div className="w-full max-w-5xl animate-fade-in">
              {currentSection?.imgs ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {currentSection.imgs.map((img, idx) => (
                    <div
                      key={idx}
                      className="relative cursor-zoom-in group"
                      onClick={() => setFullscreenImage(img)}
                    >
                      <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                      <img
                        src={img}
                        alt={`Interface Preview ${idx + 1}`}
                        className="relative rounded-2xl border border-slate-200 shadow-2xl w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/10 rounded-2xl">
                        <span className="px-4 py-2 bg-indigo-600 text-white text-[10px] font-bold rounded-lg shadow-xl uppercase tracking-widest pointer-events-none">
                          Enlarge
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : currentSection?.img && (
                <div
                  className="relative cursor-zoom-in group"
                  onClick={() => setFullscreenImage(currentSection.img)}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                  <img
                    src={currentSection.img}
                    alt="Interface Preview"
                    className="relative rounded-2xl border border-slate-200 shadow-2xl w-full h-auto max-h-[60vh] object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                  />

                  {/* Hover Hint */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/10 rounded-2xl">
                    <span className="px-4 py-2 bg-indigo-600 text-white text-xs font-bold rounded-lg shadow-xl uppercase tracking-widest pointer-events-none">
                      Click to enlarge
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* TEXT CONTENT (BOTTOM) */}
            <div className="w-full space-y-6">
              {currentSection ? (
                <Section
                  tag={currentSection.tag}
                  title={currentSection.title}
                  desc={currentSection.desc}
                >
                  <div className="flex flex-col items-center">
                    <div className="text-left w-full max-w-2xl">
                      {currentSection.content}
                    </div>
                  </div>
                </Section>
              ) : (
                <div className="text-slate-500 italic">Select a section from the sidebar to begin.</div>
              )}
            </div>

          </div>
        </main>

      </div>

      {/* FULLSCREEN PREVIEW MODAL */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-slate-900/20 backdrop-blur-sm animate-fade-in cursor-zoom-out"
          onClick={() => setFullscreenImage(null)}
        >
          <button
            className="absolute top-8 right-8 w-12 h-12 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-900 flex items-center justify-center transition-all z-[110]"
            onClick={() => setFullscreenImage(null)}
          >
            <span className="text-2xl">✕</span>
          </button>

          <img
            src={fullscreenImage}
            alt="Fullscreen Preview"
            className="max-w-full max-h-full rounded-xl border border-slate-200 shadow-2xl animate-fade-in object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
