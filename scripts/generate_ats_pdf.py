import fitz
import os

def generate_ats_pdf():
    doc = fitz.open()
    page_w, page_h = 595.28, 841.89  # Standard A4 (210mm x 297mm)
    page = doc.new_page(width=page_w, height=page_h)
    
    font_reg = 'C:/Windows/Fonts/arial.ttf'
    font_bold = 'C:/Windows/Fonts/arialbd.ttf'
    
    f_reg = fitz.Font(fontfile=font_reg)
    f_bold = fitz.Font(fontfile=font_bold)
    
    page.insert_font(fontname='Arial', fontfile=font_reg)
    page.insert_font(fontname='Arial-Bold', fontfile=font_bold)
    
    margin_x = 36.0  # 0.5 inch margins
    right_x = page_w - margin_x
    
    y = 50.0  # Top margin
    
    # 1. Header: Name (Centered, Bold Uppercase)
    name = 'ADITYA NARAYAN'
    name_size = 32.0
    name_w = f_bold.text_length(name, fontsize=name_size)
    page.insert_text(fitz.Point((page_w - name_w) / 2, y), name, fontname='Arial-Bold', fontsize=name_size, color=(0, 0, 0))
    y += 20.0
    
    # Subhead 1: Noida, India | Phone | Email
    sub1 = 'Noida, India   |   +91 9135737500   |   adityakumar913573@gmail.com'
    s1_w = f_reg.text_length(sub1, fontsize=9.6)
    page.insert_text(fitz.Point((page_w - s1_w) / 2, y), sub1, fontname='Arial', fontsize=9.6, color=(0.15, 0.15, 0.15))
    y += 14.0
    
    # Subhead 2: GitHub | LinkedIn
    sub2 = 'github.com/DubeyJi0840   |   linkedin.com/in/aditya-narayan-84634525b'
    s2_w = f_reg.text_length(sub2, fontsize=9.6)
    page.insert_text(fitz.Point((page_w - s2_w) / 2, y), sub2, fontname='Arial', fontsize=9.6, color=(0.15, 0.15, 0.15))
    y += 22.0
    
    def add_section_header(title):
        nonlocal y
        page.insert_text(fitz.Point(margin_x, y), title, fontname='Arial-Bold', fontsize=10.5, color=(0, 0, 0))
        y += 4.5
        page.draw_line(fitz.Point(margin_x, y), fitz.Point(right_x, y), color=(0, 0, 0), width=0.85)
        y += 13.5

    # 1. PROFESSIONAL SUMMARY
    add_section_header('PROFESSIONAL SUMMARY')
    summary_text = (
        'Software Developer with 2.5+ years of hands-on freelancing and engineering experience across 50+ client projects, '
        'including company work experience at Vagminepro Techno and Infinitminds Digital Lab. Proficient in Flutter, React, '
        '.NET Core, Firebase, and modern database architectures. Experience designing and delivering an estimated 200+ mobile '
        'and web screens with responsive interfaces, clean architecture, and API integration.'
    )
    rect_sum = fitz.Rect(margin_x, y - 9, right_x, y + 45)
    page.insert_textbox(rect_sum, summary_text, fontname='Arial', fontsize=9.5, color=(0.12, 0.12, 0.12), lineheight=1.36)
    y += 48.0

    # 2. EDUCATION
    add_section_header('EDUCATION')
    uni = 'Aryabhatta Knowledge University, Patna, India'
    date_edu = 'June 2024'
    d_w = f_reg.text_length(date_edu, fontsize=9.5)
    page.insert_text(fitz.Point(margin_x, y), uni, fontname='Arial', fontsize=9.5, color=(0.15, 0.15, 0.15))
    page.insert_text(fitz.Point(right_x - d_w, y), date_edu, fontname='Arial', fontsize=9.5, color=(0.15, 0.15, 0.15))
    y += 12.5
    deg = 'Bachelor of Computer Applications (BCA)'
    cgpa = 'CGPA: 7.17 / 10.00'
    c_w = f_bold.text_length(cgpa, fontsize=9.3)
    page.insert_text(fitz.Point(margin_x, y), deg, fontname='Arial-Bold', fontsize=9.5, color=(0, 0, 0))
    page.insert_text(fitz.Point(right_x - c_w, y), cgpa, fontname='Arial-Bold', fontsize=9.3, color=(0, 0, 0))
    y += 12.5
    cw = 'Related Coursework: Data Structures & Algorithms, Database Systems (DBMS), OOP, Operating Systems, Web Technologies'
    page.insert_text(fitz.Point(margin_x, y), cw, fontname='Arial', fontsize=8.9, color=(0.3, 0.3, 0.3))
    y += 19.0

    # 3. RELEVANT EXPERIENCE
    add_section_header('RELEVANT EXPERIENCE')
    
    experiences = [
        {
            'company': 'Vagminepro Techno Pvt. Ltd., Delhi, India',
            'dates': 'Joined 17 Aug 2026',
            'role': 'Software Developer',
            'bullets': [
                'Work on enterprise application modules, backend microservices, and cross-platform business workflows using .NET Core.',
                'Contribute to REST API integration, scalable data pipelines, database architecture, and performance optimization.'
            ]
        },
        {
            'company': 'Infinitminds Digital Lab Pvt. Ltd., Patna, India',
            'dates': '18 Feb 2025 – 18 May 2025',
            'role': 'Flutter Developer Intern',
            'bullets': [
                'Developed Flutter and Dart mobile screens, reusable custom widgets, responsive layouts, and navigation flows.',
                'Integrated REST APIs, handled asynchronous JSON streams, and resolved UI/UX edge cases for client deployments.'
            ]
        },
        {
            'company': 'Independent Client Contracting, Remote',
            'dates': '2023 – Present',
            'role': 'Freelance Software Developer',
            'bullets': [
                'Delivered 50+ client projects across Flutter mobile applications, React web portals, and .NET REST APIs.',
                'Designed and engineered an estimated 200+ user interface screens with clean architecture, state management, and handover.'
            ]
        }
    ]

    for exp in experiences:
        c_name = exp['company']
        d_str = exp['dates']
        dw = f_reg.text_length(d_str, fontsize=9.4)
        page.insert_text(fitz.Point(margin_x, y), c_name, fontname='Arial', fontsize=9.5, color=(0.15, 0.15, 0.15))
        page.insert_text(fitz.Point(right_x - dw, y), d_str, fontname='Arial', fontsize=9.4, color=(0.15, 0.15, 0.15))
        y += 12.0
        page.insert_text(fitz.Point(margin_x, y), exp['role'], fontname='Arial-Bold', fontsize=9.5, color=(0, 0, 0))
        y += 12.0
        for b in exp['bullets']:
            page.insert_text(fitz.Point(margin_x + 10, y), '•', fontname='Arial-Bold', fontsize=9.3, color=(0, 0, 0))
            rect_b = fitz.Rect(margin_x + 20, y - 8, right_x, y + 25)
            page.insert_textbox(rect_b, b, fontname='Arial', fontsize=9.0, color=(0.18, 0.18, 0.18), lineheight=1.28)
            y += 13.5
        y += 5.0
    y += 4.0

    # 4. KEY PROJECTS
    add_section_header('KEY PROJECTS')
    projects = [
        {
            'name': 'Kharid Do — E-Commerce Mobile Application',
            'stack': 'Flutter, Dart, Firebase',
            'bullets': [
                'Developed responsive mobile e-commerce interfaces for product discovery, live cart state sync, and checkout flows.',
                'Engineered reusable component libraries and structured client state for a frictionless mobile-first experience.'
            ]
        },
        {
            'name': 'EduPulse Portal — Academic Analytics Platform',
            'stack': 'React, TypeScript, MySQL',
            'bullets': [
                'Engineered academic dashboard supporting grade inputs and attendance monitoring for 4,800+ student profiles.',
                'Refactored backend queries and database connection pools, reducing reporting turnaround time by 60%.'
            ]
        },
        {
            'name': 'PulseFit Tracker — Mobile Fitness Companion',
            'stack': 'Flutter, Dart, Firebase, SQLite',
            'bullets': [
                'Developed a cross-platform fitness tracker featuring animated progress rings, streak tracking, and offline habit logging.'
            ]
        },
        {
            'name': 'Real-Time Travel & Group Tracking Mobile Application',
            'stack': 'Flutter, Dart, Google Maps API',
            'bullets': [
                'Built cross-platform location-sharing mobile app with interactive maps, geolocator services, and modular architecture.'
            ]
        }
    ]

    for p in projects:
        t_str = p['name']
        s_str = ' | ' + p['stack']
        tw = f_bold.text_length(t_str, fontsize=9.5)
        page.insert_text(fitz.Point(margin_x, y), t_str, fontname='Arial-Bold', fontsize=9.5, color=(0, 0, 0))
        page.insert_text(fitz.Point(margin_x + tw, y), s_str, fontname='Arial', fontsize=8.9, color=(0.35, 0.35, 0.35))
        y += 11.5
        for b in p['bullets']:
            page.insert_text(fitz.Point(margin_x + 10, y), '•', fontname='Arial-Bold', fontsize=9.3, color=(0, 0, 0))
            rect_b = fitz.Rect(margin_x + 20, y - 8, right_x, y + 25)
            page.insert_textbox(rect_b, b, fontname='Arial', fontsize=9.0, color=(0.18, 0.18, 0.18), lineheight=1.28)
            y += 13.0
        y += 4.0
    y += 4.0

    # 5. SKILLS & CERTIFICATIONS
    add_section_header('SKILLS & CERTIFICATIONS')
    skills_info = [
        ('Certifications: ', 'Oracle Cloud Infrastructure AI Foundations Associate (2026), Cisco Data Analytics Essentials (Feb 2026), Infinitminds Flutter Developer Internship Certificate (May 2025)'),
        ('Languages & Frameworks: ', 'Dart, C#, TypeScript, JavaScript, SQL, HTML5, CSS3, Flutter, React, .NET Core, ASP.NET Core, Tailwind CSS'),
        ('Databases & Tools: ', 'Microsoft SQL Server, MySQL, SQLite, Firebase, Redis, Git, GitHub, Docker, Postman, Android Studio, VS Code')
    ]
    for lbl, val in skills_info:
        lw = f_bold.text_length(lbl, fontsize=9.0)
        page.insert_text(fitz.Point(margin_x, y), lbl, fontname='Arial-Bold', fontsize=9.0, color=(0, 0, 0))
        rect_v = fitz.Rect(margin_x + lw, y - 8, right_x, y + 25)
        lines = page.insert_textbox(rect_v, val, fontname='Arial', fontsize=9.0, color=(0.15, 0.15, 0.15), lineheight=1.26)
        y += 13.0 if lines <= 1 else 24.0

    print(f'ATS PDF Final y = {y:.1f} pt out of {page_h:.1f} pt (Page fill: {y/page_h*100:.1f}%)')
    
    out_paths = [
        'd:/aditya/public/assets/aditya-narayan-ats-resume.pdf',
        'd:/aditya/public/assets/aditya-narayan-resume.pdf',
        'd:/aditya/dist/assets/aditya-narayan-ats-resume.pdf',
        'd:/aditya/dist/assets/aditya-narayan-resume.pdf'
    ]
    for op in out_paths:
        os.makedirs(os.path.dirname(op), exist_ok=True)
        doc.save(op)
    print('Generated and saved ATS PDF successfully!')

if __name__ == '__main__':
    generate_ats_pdf()
