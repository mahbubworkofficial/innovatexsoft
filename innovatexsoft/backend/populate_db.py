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

    print("Populating Services...")
    services = [
        {"title": "Website Development", "description": "High-traffic web applications, custom corporate portals, and responsive e-commerce platforms.", "icon": "Globe"},
        {"title": "Mobile App Development", "description": "Native iOS/Android and cross-platform apps built for seamless digital experiences.", "icon": "Smartphone"},
        {"title": "Custom Software Solutions", "description": "Tailor-made enterprise software, scalable APIs, and cloud-native backend systems.", "icon": "Code2"},
        {"title": "Website & App Maintenance", "description": "24/7 technical support, security audits, optimization, and system upgrades.", "icon": "Wrench"},
        {"title": "Graphic Design & Branding", "description": "Boutique visual identity, UI/UX design systems, logos, and brand collateral.", "icon": "Palette"},
        {"title": "Digital Marketing", "description": "Data-driven growth strategies, SEO, social media marketing, and ad campaign scaling.", "icon": "TrendingUp"},
        {"title": "Video Editing", "description": "Professional video post-production, motion graphics, promo videos, and content creation.", "icon": "Video"},
        {"title": "AI & Chatbot Solutions", "description": "Agentic AI pipelines, intelligent chatbots, and predictive analytics integration.", "icon": "Bot"},
    ]
    for s in services:
        Service.objects.create(**s)

    print("Populating Team Members...")
    team = [
        {"name": "Muhammad Monir Hossain", "role": "Managing Director and Group CEO, Innovatex Soft", "node": "Leadership", "description": "Visionary leader driving strategic direction and technological innovation."},
        {"name": "Sabina Akter", "role": "Chairman, Innovatex Soft", "node": "Leadership", "description": "Guiding corporate governance, core values, and growth strategy."},
        {"name": "Gazi Alauddin", "role": "General Manager", "node": "GM-1", "description": "Overseeing global operations, client success, and operational execution."},
        {"name": "Istiaq Ahmmed Fahad", "role": "Head of Technical Operation", "node": "HTO-1", "description": "Architecting scalable cloud architectures and software pipelines."},
        {"name": "Palash Chandra Barman", "role": "Head of Technical Operation", "node": "HTO-2", "description": "Directing core engine engineering and developer performance."},
        {"name": "Mushfiqur Rahman", "role": "AGM, Sales", "node": "T1", "description": "Leading global client acquisition and partnership growth."},
    ]
    for t in team:
        TeamMember.objects.create(**t)

    print("Populating Careers...")
    careers = [
        {"title": "CoffeeScript Developer", "category": "Engineering", "location": "Dhaka / Remote", "description": "Looking for a seasoned developer to maintain legacy systems and migrate them to modern stacks."},
        {"title": "Frontend Developer", "category": "Engineering", "location": "Dhaka", "description": "Specialist in React, Vue, and high-performance UI architectures. We value extreme velocity."},
        {"title": "Upwork Sales Executives", "category": "Sales", "location": "Remote", "description": "Drive global mobility and sales operations. Highly autonomous role."},
    ]
    for c in careers:
        Career.objects.create(**c)

    print("Populating Projects...")
    projects = [
        {"title": "Soma Mente", "description": "AI Mental Health Application. Mental wellness and biomarker tracking app designed to monitor moods and cortisol levels.", "node": "PX-4", "cycle_time": "19 Days"},
        {"title": "Sports Verse", "description": "An online sports learning platform offering expert coaching, mentorship, and training programs.", "node": "PX-6", "cycle_time": "90 Days"},
        {"title": "The Clue", "description": "AI-powered crypto education and asset management platform featuring real-time portfolio tracking.", "node": "PX-5", "cycle_time": "90 Days"},
        {"title": "InfiniQuote", "description": "AI-powered calendar and daily inspiration app that generates personalized quotes.", "node": "PX-7", "cycle_time": "90 Days"},
        {"title": "Soulciety", "description": "Spiritual wellness app featuring an AI spiritual guide and mood tracking.", "node": "PX-8", "cycle_time": "90 Days"},
        {"title": "Hartsy App", "description": "Connection-focused dating app leveraging detailed onboarding and interest matching.", "node": "PX-9", "cycle_time": "90 Days"},
    ]
    for p in projects:
        Project.objects.create(**p)

    print("Populating Blog Posts...")
    blogs = [
        {
            "title": "The Future of Neural Edge Processing",
            "topic": "Edge AI",
            "summary": "Local computation on IoT, sensors, and smartphones.",
            "content": "Highlights the transition from cloud dependency to edge computing to tackle latency, support offline capabilities, and reduce massive bandwidth loads expected from billions of connected devices by 2025."
        },
        {
            "title": "From Data to Decisions: How Agentic RAG Pipelines Are Reshaping Enterprise Insights in 2026",
            "topic": "Agentic RAG",
            "summary": "Agentic Retrieval-Augmented Generation.",
            "content": "Contrast against static, single-shot RAG pipelines. Agentic RAG acts as an autonomous reasoning engine that iteratively plans, retrieves from diverse databases, critiques its findings, and validates sources. Applications include Finance & compliance auditing, healthcare record synthesis, and automated customer experience assistants."
        },
        {
            "title": "Beyond JSON: Why Protocol Buffers are the Backbone of 2026’s High-Speed Apps",
            "topic": "Serialization",
            "summary": "Explains the shift from verbose JSON APIs to binary-first Protocol Buffers.",
            "content": "Underlines benefits such as 3-10x smaller payload sizes, compiling-stage schema type safety, and real-time bidirectional streaming using gRPC and HTTP/2. Associated Project mentions Stat Coach Live (a mobile development project using Protobuf to optimize data transfer)."
        }
    ]
    for b in blogs:
        BlogPost.objects.create(**b)
        
    print("Database populated successfully!")

if __name__ == '__main__':
    populate()
