export const SERVICES = [
  {
    slug: 'market-research-business-analysis',
    name: 'Market Research and Business Analysis',
    tagline: 'Make big decisions with clear evidence.',
    intro:
      'Before you launch, expand or invest, you need to know the size of the opportunity, who you are up against and whether the numbers work. We combine market data, customer research and a close look at your own business to give you a clear, practical answer.',
    deliverables: [
      ['Market sizing', 'How big the opportunity is, who the buyers are and how demand is changing.'],
      ['Competitor and pricing review', 'Who you compete with, how they price and where the gaps are.'],
      ['Customer research', 'Interviews and surveys that show what customers need and will pay for.'],
      ['Business model and unit economics', 'Revenue, costs and margins per customer, product or channel.'],
      ['Process and cost analysis', 'Where time and money leak out of daily operations.'],
      ['Feasibility and recommendation', 'A clear go, no-go or change-of-plan recommendation with next steps.'],
    ],
    steps: ['Define the question', 'Collect the data', 'Analyse and model', 'Recommend next steps'],
    forWho: ['Entering a new market or city', 'Launching a new product or service', 'Preparing for investment or a bank loan', 'Margins falling without a clear reason'],
  },
  {
    slug: 'marketing-sales-growth',
    name: 'Marketing, Sales and Growth',
    tagline: 'Turn attention into customers, month after month.',
    intro:
      'Growth comes from a clear plan, the right channels and a sales process that does not let leads slip away. We plan, run and measure your marketing and sales together, so every taka spent can be traced to results.',
    deliverables: [
      ['Go-to-market plan', 'Target customers, positioning, channels and a launch calendar.'],
      ['Digital campaigns', 'Meta, Google and TikTok campaigns planned, run and optimised.'],
      ['Content and SEO', 'Posts, articles and landing pages that bring in steady traffic.'],
      ['Sales pipeline and CRM', 'A clear pipeline so every lead has an owner and a next step.'],
      ['Lead nurturing', 'Automated follow-ups by email, SMS and WhatsApp.'],
      ['Monthly reporting', 'Results measured against targets, with what to change next month.'],
    ],
    steps: ['Plan', 'Launch', 'Measure', 'Optimise'],
    forWho: ['New brands that need their first customers', 'Businesses with traffic but few sales', 'Sales teams losing track of leads', 'Owners who want clear marketing numbers'],
  },
  {
    slug: 'technical-product-development',
    name: 'Technical Product Development',
    tagline: 'From idea to a product people use.',
    intro:
      'Our product team designs, builds and maintains websites, mobile apps and internal tools. We start small, ship something useful quickly and improve it with real feedback, the same way we build our own platforms.',
    deliverables: [
      ['Websites and landing pages', 'Fast, mobile-first sites that are easy for your team to update.'],
      ['Mobile apps', 'Android and iOS apps for customers, agents or field teams.'],
      ['Booking engines and marketplaces', 'Search, booking, payment and partner management.'],
      ['Internal tools and dashboards', 'Simple tools that replace spreadsheets and paper forms.'],
      ['Integrations and APIs', 'Payment gateways, SMS, couriers, accounting and more.'],
      ['MVPs and maintenance', 'A first version to test the idea, then ongoing support.'],
    ],
    steps: ['Discover', 'Design', 'Build', 'Launch and support'],
    forWho: ['Founders testing a new digital idea', 'Businesses moving from paper or Excel', 'Companies that need a customer app', 'Teams with systems that do not talk to each other'],
  },
  {
    slug: 'project-management',
    name: 'Project Management',
    tagline: 'Delivered on time, on budget, without surprises.',
    intro:
      'A dedicated project lead plans the work, keeps everyone aligned and reports progress honestly. You always know what is done, what is next and what needs a decision from you.',
    deliverables: [
      ['Scope and planning', 'A clear scope, plan and responsibilities agreed at the start.'],
      ['Timeline and milestones', 'Realistic dates, with milestones you can check.'],
      ['Budget tracking', 'Spend tracked against plan, with early warnings.'],
      ['Weekly progress reports', 'Short updates on progress, risks and decisions needed.'],
      ['Risk and issue management', 'Problems spotted early and handled before they grow.'],
      ['Team coordination', 'Agile delivery across your team, our team and vendors.'],
    ],
    steps: ['Plan', 'Track', 'Report', 'Deliver'],
    forWho: ['Projects with several vendors or teams', 'Owners without time to manage delivery', 'Projects that keep missing deadlines', 'Digital transformation programmes'],
  },
  {
    slug: 'branding-pr',
    name: 'Branding and PR',
    tagline: 'Be recognised and trusted in your market.',
    intro:
      'A strong brand makes every other effort easier, from sales to hiring. We shape how your business looks, sounds and is talked about, and help you launch it to the right audience.',
    deliverables: [
      ['Brand identity', 'Logo, colours, typography and visual style.'],
      ['Messaging and positioning', 'What you stand for and how you say it, in Bangla and English.'],
      ['Content and social media', 'A consistent look and voice across every channel.'],
      ['Launch campaigns', 'Campaigns that introduce a new brand, product or service.'],
      ['Media relations', 'Press releases, interviews and coverage in the right outlets.'],
      ['Brand guidelines', 'A simple guide so your team and agencies stay consistent.'],
    ],
    steps: ['Discover', 'Define', 'Design', 'Launch'],
    forWho: ['New companies building a brand from scratch', 'Brands that look outdated or inconsistent', 'Product or company launches', 'Businesses entering new markets'],
  },
  {
    slug: 'automation-excellence',
    name: 'Automation and Excellence',
    tagline: 'Operations that run themselves.',
    intro:
      'We remove manual steps, connect the systems you already use and automate the routine, so your team spends time on customers instead of copying data. Then we keep measuring and improving.',
    deliverables: [
      ['Workflow automation', 'Approvals, reminders, data entry and handoffs that run on their own.'],
      ['ERP and CRM implementation', 'Selection, setup and migration around your processes.'],
      ['System integration', 'Accounting, sales, booking and payment platforms connected.'],
      ['Dashboards and reporting', 'Live numbers for management, without manual reports.'],
      ['Document processing and AI', 'Invoices and forms read automatically, routine questions answered.'],
      ['Continuous improvement', 'Monitoring, support and the next process to automate.'],
    ],
    steps: ['Analyse', 'Solve', 'Automate', 'Grow'],
    forWho: ['Teams buried in repetitive work', 'Businesses outgrowing spreadsheets', 'Companies with disconnected systems', 'Owners who want live numbers'],
  },
];

export function getService(slug) {
  return SERVICES.find((s) => s.slug === slug) || null;
}
