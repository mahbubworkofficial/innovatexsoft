import os
import django
import sys

# Set up Django
sys.path.append(os.path.join(os.path.dirname(__file__), 'backend'))
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

from core.models import Service, TeamMember, Career, Project, BlogPost

def populate():
    print("Clearing existing data...")
    Service.objects.all().delete()
    TeamMember.objects.all().delete()
    Career.objects.all().delete()
    Project.objects.all().delete()
    BlogPost.objects.all().delete()

    print("Populating Services with High-Converting Copy...")
    services = [
        {
            "title": "Website Development", 
            "description": "Transform your brand with sub-second page loads, stunning UI/UX, and conversion-focused architectures built to turn visitors into loyal customers.", 
            "icon": "Globe"
        },
        {
            "title": "Mobile App Development", 
            "description": "Captivate users on iOS & Android with ultra-responsive, intuitive mobile apps designed for rapid scaling and flawless performance.", 
            "icon": "Smartphone"
        },
        {
            "title": "Custom Software Solutions", 
            "description": "Automate complex business processes and eliminate bottlenecks with bespoke, cloud-native enterprise software engineered for infinite growth.", 
            "icon": "Code2"
        },
        {
            "title": "Website & App Maintenance", 
            "description": "Never worry about downtime again. Get proactive 24/7 technical support, instant security patches, and continuous speed optimization.", 
            "icon": "Wrench"
        },
        {
            "title": "Graphic Design & Branding", 
            "description": "Stand out from the crowd with luxury brand identities, high-impact logos, and UI/UX designs crafted to command industry authority.", 
            "icon": "Palette"
        },
        {
            "title": "Digital Marketing", 
            "description": "Dominate search engines and explode your ROI with targeted ad campaigns, viral content strategies, and precision growth marketing.", 
            "icon": "TrendingUp"
        },
        {
            "title": "Video Editing", 
            "description": "Hook your audience instantly with cinema-grade video post-production, motion graphics, and high-converting commercial promo videos.", 
            "icon": "Video"
        },
        {
            "title": "AI & Chatbot Solutions", 
            "description": "Supercharge customer engagement 24/7 with autonomous Agentic AI assistants and intelligent multi-lingual chatbots.", 
            "icon": "Bot"
        },
    ]
    for s in services:
        Service.objects.create(**s)

    print("Populating Team Members...")
    team = [
        {"name": "Muhammad Monir Hossain", "role": "Managing Director & CEO, Innovatex Soft", "node": "Leadership", "description": "Visionary tech leader pioneering ultra-scalable digital platforms and global client expansion."},
        {"name": "Sabina Akter", "role": "Chairman, Innovatex Soft", "node": "Leadership", "description": "Championing corporate excellence, strategic innovation, and client-first values."},
        {"name": "Gazi Alauddin", "role": "General Manager", "node": "GM-1", "description": "Driving extreme operational velocity, quality assurance, and seamless client success."},
        {"name": "Istiaq Ahmmed Fahad", "role": "Head of Technical Operations", "node": "HTO-1", "description": "Mastermind behind high-availability cloud architecture and enterprise software security."},
        {"name": "Palash Chandra Barman", "role": "Head of Technical Operations", "node": "HTO-2", "description": "Spearheading advanced web & mobile engine optimization for maximum application performance."},
        {"name": "Mushfiqur Rahman", "role": "AGM, Sales & Partnerships", "node": "T1", "description": "Empowering global businesses with tailored technology partnerships and fast-track delivery."},
    ]
    for t in team:
        TeamMember.objects.create(**t)

    print("Populating Careers...")
    careers = [
        {"title": "Senior Full-Stack Engineer", "category": "Engineering", "location": "Dhaka / Remote", "description": "Build high-throughput web architectures, React interfaces, and Python backend microservices."},
        {"title": "UI/UX & Brand Designer", "category": "Design", "location": "Dhaka", "description": "Craft stunning design systems, interactive prototypes, and luxury brand identities for enterprise clients."},
        {"title": "Growth Marketing Specialist", "category": "Marketing", "location": "Remote", "description": "Execute high-ROI digital campaigns, SEO scaling strategies, and client acquisition pipelines."},
    ]
    for c in careers:
        Career.objects.create(**c)

    print("Populating Showcase Projects...")
    projects = [
        {"title": "Soma Mente - AI Wellness Ecosystem", "description": "Revolutionary AI mental health app tracking real-time mood metrics and biomarker analytics with instant personalized insights.", "node": "PX-4", "cycle_time": "19 Days Turnaround"},
        {"title": "Sports Verse - Next-Gen Athletics Academy", "description": "High-concurrency sports learning & live coaching portal connecting thousands of athletes with elite mentors.", "node": "PX-6", "cycle_time": "Scalable Engine"},
        {"title": "The Clue - Autonomous Crypto Intelligence", "description": "AI-driven Web3 education platform with real-time portfolio analytics and predictive market trend insights.", "node": "PX-5", "cycle_time": "Sub-100ms Latency"},
        {"title": "InfiniQuote - AI Inspiration Engine", "description": "Intelligent mobile app generating contextual daily quotes and custom visual typography with 1M+ active users.", "node": "PX-7", "cycle_time": "99.9% Uptime"},
        {"title": "Soulciety - Spiritual AI Guide", "description": "Spiritual wellness companion featuring conversational AI guides and interactive daily mindfulness routines.", "node": "PX-8", "cycle_time": "Custom AI Agent"},
        {"title": "Hartsy App - Modern Social Matchmaking", "description": "Connection-focused dating app leveraging deep onboarding algorithms and real-time interactive matching.", "node": "PX-9", "cycle_time": "Cross-Platform"},
    ]
    for p in projects:
        Project.objects.create(**p)

    print("Populating Blog Posts...")
    blogs = [
        {
            "title": "Unlocking 300% Growth: Why AI-Driven Web Architectures Outperform Legacy Sites in 2026",
            "topic": "AI Web Engineering",
            "summary": "Discover how intelligent microservices and instant response times drive record conversion rates.",
            "content": "In today’s digital era, speed is currency. Modern businesses can no longer rely on sluggish monolithic platforms. By integrating cloud-native microservices, automated AI RAG pipelines, and edge caching, Innovatex Soft helps brands achieve lightning-fast user experiences, reducing bounce rates by 65% and driving undeniable revenue growth."
        },
        {
            "title": "From Data to Decisions: How Agentic RAG Pipelines Are Reshaping Enterprise Insights",
            "topic": "Agentic AI Solutions",
            "summary": "Step into the era of self-reasoning AI assistants that solve complex workflows autonomously.",
            "content": "Unlike basic chatbots, Agentic Retrieval-Augmented Generation (RAG) acts as an intelligent digital workforce. It autonomously searches internal knowledge bases, cross-references compliance documents, and delivers pinpoint accuracy. Businesses deploying Agentic AI report a 40% boost in operational speed and unmatched customer satisfaction."
        },
        {
            "title": "The Art of Conversion: Why High-End Brand Design is Your Ultimate Competitive Advantage",
            "topic": "Creative UI/UX Design",
            "summary": "Learn how luxury visual identities and seamless design systems double client conversion rates.",
            "content": "Your website and mobile app are your primary digital storefront. Exceptional visual design builds instant trust. By fusing psychological triggers, dark-mode glassmorphism, and seamless micro-interactions, we turn casual visitors into loyal brand advocates from the very first second."
        }
    ]
    for b in blogs:
        BlogPost.objects.create(**b)
        
    print("Database populated with high-impact copy successfully!")

if __name__ == '__main__':
    populate()
