import fitz
import os

def generate_premium_pdf():
    doc = fitz.open()
    page_w, page_h = 595.28, 841.89  # Standard A4 (210mm x 297mm)
    page = doc.new_page(width=page_w, height=page_h)
    
    font_reg = 'C:/Windows/Fonts/arial.ttf'
    font_bold = 'C:/Windows/Fonts/arialbd.ttf'
    
    f_reg = fitz.Font(fontfile=font_reg)
    f_bold = fitz.Font(fontfile=font_bold)
    
    page.insert_font(fontname='Arial', fontfile=font_reg)
    page.insert_font(fontname='Arial-Bold', fontfile=font_bold)
    
    # Theme colors: White background with Purple accents
    c_black = (0.05, 0.05, 0.08)
    c_dark = (0.12, 0.15, 0.22)
    c_purple = (0.42, 0.13, 0.68)        # #6b21a8 (Heading purple)
    c_purple_accent = (0.48, 0.23, 0.93)   # #7c3aed (Vibrant divider)
    c_purple_light = (0.96, 0.94, 1.0)     # #f5f3ff (Badge background)
    c_purple_border = (0.86, 0.81, 0.97)   # #ddd6fe (Badge border)
    c_muted = (0.38, 0.42, 0.50)
    
    margin_x = 36.0
    right_x = page_w - margin_x
    
    # -------------------------------------------------------------
    # HEADER SECTION: Left Name/Info + Right Circular Photo
    # -------------------------------------------------------------
    header_top = 46.0
    photo_w = 72.0
    photo_x = right_x - photo_w
    photo_y = header_top + 2.0
    
    # Name
    page.insert_text(fitz.Point(margin_x, header_top + 24.0), 'ADITYA NARAYAN', fontname='Arial-Bold', fontsize=25.0, color=c_black)
    
    # Status Tag: Software Developer | Full-Stack & Flutter Specialist
    tag_text = 'Software Developer   |   Full-Stack & Flutter Specialist'
    page.insert_text(fitz.Point(margin_x, header_top + 41.0), tag_text, fontname='Arial-Bold', fontsize=9.8, color=c_purple)
    
    # Contact Details
    contact1 = '✉ adityakumar913573@gmail.com     📞 +91 9135737500     📍 Noida, India'
    page.insert_text(fitz.Point(margin_x, header_top + 57.0), contact1, fontname='Arial', fontsize=8.9, color=c_muted)
    
    contact2 = 'github.com/DubeyJi0840     ·     linkedin.com/in/aditya-narayan-84634525b'
    page.insert_text(fitz.Point(margin_x, header_top + 72.0), contact2, fontname='Arial', fontsize=8.9, color=c_muted)
    
    # Embed Circular Photo in Top Right
    avatar_path = 'd:/aditya/public/assets/aditya-avatar-round.png'
    if os.path.exists(avatar_path):
        photo_rect = fitz.Rect(photo_x, photo_y, photo_x + photo_w, photo_y + photo_w)
        page.insert_image(photo_rect, filename=avatar_path)
        center = fitz.Point(photo_x + photo_w/2, photo_y + photo_w/2)
        page.draw_circle(center, photo_w/2, color=c_purple_accent, width=1.8)
    
    # Header Bottom Divider
    divider_y = header_top + 86.0
    page.draw_line(fitz.Point(margin_x, divider_y), fitz.Point(right_x, divider_y), color=(0.88, 0.90, 0.94), width=0.9)
    
    # -------------------------------------------------------------
    # 2-COLUMN LAYOUT SETUP
    # -------------------------------------------------------------
    col_gap = 20.0
    col1_w = 295.0
    col1_x1 = margin_x
    col1_x2 = col1_x1 + col1_w
    
    col2_x1 = col1_x2 + col_gap
    col2_x2 = right_x
    col2_w = col2_x2 - col2_x1
    
    # -------------------------------------------------------------
    # LEFT COLUMN: Experience, Education, Technical Skills
    # -------------------------------------------------------------
    y1 = divider_y + 18.0
    
    def add_left_header(title):
        nonlocal y1
        page.insert_text(fitz.Point(col1_x1, y1), title, fontname='Arial-Bold', fontsize=10.4, color=c_purple)
        y1 += 4.5
        page.draw_line(fitz.Point(col1_x1, y1), fitz.Point(col1_x2, y1), color=c_purple_accent, width=0.85)
        y1 += 14.0

    # WORK EXPERIENCE
    add_left_header('WORK EXPERIENCE')
    
    experiences_left = [
        {
            'role': 'SOFTWARE DEVELOPER',
            'company': 'Vagminepro Techno Pvt. Ltd.',
            'date': 'Joined 17 Aug 2026 | Delhi, India',
            'bullets': [
                'Work on enterprise application modules, backend microservices, and cross-platform business workflows using .NET Core.',
                'Contribute to REST API integration, scalable data pipelines, database architecture, and performance optimization.',
                'Collaborate on modular component design, automated unit testing, and structured API error handling.'
            ]
        },
        {
            'role': 'FLUTTER DEVELOPER INTERN',
            'company': 'Infinitminds Digital Lab Pvt. Ltd.',
            'date': '18 Feb 2025 – 18 May 2025 | Patna, India',
            'bullets': [
                'Developed Flutter and Dart mobile screens, reusable custom widgets, responsive layouts, and navigation flows.',
                'Integrated RESTful APIs, handled asynchronous JSON streams, and resolved 40+ UI/UX edge cases for client deployments.',
                'Participated in Agile sprint planning, daily standups, and structured Git pull-request code reviews.'
            ]
        },
        {
            'role': 'FREELANCE SOFTWARE DEVELOPER',
            'company': 'Independent Client Contracting',
            'date': '2023 – Present | Remote',
            'bullets': [
                'Delivered 50+ client contracts across mobile applications, React web portals, and .NET REST APIs.',
                'Designed and engineered an estimated 200+ user interface screens with clean architecture, state management, and client handover.',
                'Maintained 100% on-time milestone delivery with resilient offline-first caching and multi-platform support.'
            ]
        }
    ]
    
    for exp in experiences_left:
        page.insert_text(fitz.Point(col1_x1, y1), exp['role'], fontname='Arial-Bold', fontsize=9.4, color=c_black)
        y1 += 12.0
        page.insert_text(fitz.Point(col1_x1, y1), exp['company'], fontname='Arial-Bold', fontsize=9.0, color=c_purple)
        dw = f_reg.text_length(exp['date'], fontsize=8.4)
        page.insert_text(fitz.Point(col1_x2 - dw, y1), exp['date'], fontname='Arial', fontsize=8.4, color=c_muted)
        y1 += 12.5
        for b in exp['bullets']:
            page.insert_text(fitz.Point(col1_x1 + 6, y1), '•', fontname='Arial-Bold', fontsize=9.0, color=c_black)
            rect_b = fitz.Rect(col1_x1 + 14, y1 - 8, col1_x2, y1 + 35)
            page.insert_textbox(rect_b, b, fontname='Arial', fontsize=8.7, color=c_dark, lineheight=1.30)
            y1 += 21.0
        y1 += 8.0
    y1 += 8.0

    # EDUCATION
    add_left_header('EDUCATION')
    page.insert_text(fitz.Point(col1_x1, y1), 'Bachelor of Computer Applications (BCA)', fontname='Arial-Bold', fontsize=9.2, color=c_black)
    y1 += 12.0
    page.insert_text(fitz.Point(col1_x1, y1), 'Aryabhatta Knowledge University, Patna, India', fontname='Arial', fontsize=8.8, color=c_dark)
    y1 += 11.5
    page.insert_text(fitz.Point(col1_x1, y1), 'Graduated: June 2024   ·   CGPA: 7.17 / 10.00', fontname='Arial', fontsize=8.6, color=c_purple)
    y1 += 11.5
    page.insert_text(fitz.Point(col1_x1, y1), 'Related Coursework: Data Structures & Algorithms, DBMS, OOP, OS, Web Dev', fontname='Arial', fontsize=8.2, color=c_muted)
    y1 += 24.0

    # TECHNICAL SKILLS
    add_left_header('TECHNICAL SKILLS')
    skill_rows = [
        ('Languages:', 'Dart, C#, TypeScript, JavaScript, SQL, HTML5, CSS3'),
        ('Frameworks:', 'Flutter, React, .NET Core, ASP.NET Core, Tailwind CSS'),
        ('Databases:', 'SQL Server, MySQL, SQLite, Firebase, Redis'),
        ('Tooling & Cloud:', 'Git, GitHub, Docker, Postman, Android Studio, OCI')
    ]
    for cat, val in skill_rows:
        cw = f_bold.text_length(cat, fontsize=8.8)
        page.insert_text(fitz.Point(col1_x1, y1), cat, fontname='Arial-Bold', fontsize=8.8, color=c_purple)
        page.insert_text(fitz.Point(col1_x1 + cw + 5, y1), val, fontname='Arial', fontsize=8.6, color=c_dark)
        y1 += 15.0

    # -------------------------------------------------------------
    # RIGHT COLUMN: Projects, Certifications, Achievements
    # -------------------------------------------------------------
    y2 = divider_y + 18.0
    
    def add_right_header(title):
        nonlocal y2
        page.insert_text(fitz.Point(col2_x1, y2), title, fontname='Arial-Bold', fontsize=10.4, color=c_purple)
        y2 += 4.5
        page.draw_line(fitz.Point(col2_x1, y2), fitz.Point(col2_x2, y2), color=c_purple_accent, width=0.85)
        y2 += 14.0

    # KEY PROJECTS
    add_right_header('KEY PROJECTS')
    
    projects_data = [
        {
            'name': 'KHARID DO — E-COMMERCE MOBILE APP',
            'tech': 'Flutter, Dart, Firebase',
            'bullets': [
                'Developed responsive mobile e-commerce interfaces for product discovery, live cart state sync, and checkout flows.',
                'Engineered reusable component libraries and structured client state for a frictionless mobile-first experience.'
            ]
        },
        {
            'name': 'EDUPULSE PORTAL — ACADEMIC ANALYTICS',
            'tech': 'React, TypeScript, MySQL',
            'bullets': [
                'Engineered academic dashboard supporting grade inputs and attendance monitoring for 4,800+ student profiles.',
                'Refactored backend queries and database connection pools, reducing reporting turnaround time by 60%.'
            ]
        },
        {
            'name': 'PULSEFIT TRACKER — FITNESS COMPANION',
            'tech': 'Flutter, Dart, SQLite, Firebase',
            'bullets': [
                'Developed a cross-platform fitness tracker featuring animated progress rings, streak tracking, and offline habit logging.'
            ]
        },
        {
            'name': 'REAL-TIME TRAVEL & GROUP TRACKING',
            'tech': 'Flutter, Dart, Google Maps API',
            'bullets': [
                'Built cross-platform location-sharing mobile app with interactive maps, geolocator services, and modular state architecture.'
            ]
        }
    ]
    
    for p in projects_data:
        page.insert_text(fitz.Point(col2_x1, y2), p['name'], fontname='Arial-Bold', fontsize=8.8, color=c_black)
        y2 += 11.5
        page.insert_text(fitz.Point(col2_x1, y2), p['tech'], fontname='Arial-Bold', fontsize=8.2, color=c_purple)
        y2 += 12.0
        for b in p['bullets']:
            page.insert_text(fitz.Point(col2_x1 + 6, y2), '•', fontname='Arial-Bold', fontsize=8.8, color=c_black)
            rect_desc = fitz.Rect(col2_x1 + 14, y2 - 8, col2_x2, y2 + 30)
            page.insert_textbox(rect_desc, b, fontname='Arial', fontsize=8.4, color=c_dark, lineheight=1.26)
            y2 += 20.0
        y2 += 6.5
    y2 += 8.0

    # CERTIFICATIONS
    add_right_header('CERTIFICATIONS')
    certs_data = [
        ('Oracle Cloud Infrastructure AI Foundations Associate', 'Oracle (2026)'),
        ('Data Analytics Essentials', 'Cisco Networking Academy (Feb 2026)'),
        ('Flutter Developer Internship Certificate', 'Infinitminds Digital Lab (May 2025)')
    ]
    for c_title, c_inst in certs_data:
        page.insert_text(fitz.Point(col2_x1 + 6, y2), '•', fontname='Arial-Bold', fontsize=9.0, color=c_purple)
        page.insert_text(fitz.Point(col2_x1 + 14, y2), c_title, fontname='Arial-Bold', fontsize=8.4, color=c_black)
        y2 += 11.5
        page.insert_text(fitz.Point(col2_x1 + 14, y2), c_inst, fontname='Arial', fontsize=8.0, color=c_muted)
        y2 += 14.0
    y2 += 10.0

    # VERIFIED ACHIEVEMENTS
    add_right_header('VERIFIED ACHIEVEMENTS')
    achievements_data = [
        ('50+ Client Contracts:', 'Engineered & delivered 50+ production client projects across mobile, web, and backend services with clean handover.'),
        ('200+ UI Screens:', 'Designed clean, responsive interfaces with sub-60fps transitions and modular architecture in Flutter and React.'),
        ('60% Query Latency Cut:', 'Optimized institutional database connection pools, indexing, and transactional caching on high-load MySQL tables.')
    ]
    for ach_title, ach_desc in achievements_data:
        page.insert_text(fitz.Point(col2_x1, y2), ach_title, fontname='Arial-Bold', fontsize=8.6, color=c_purple)
        rect_ach = fitz.Rect(col2_x1, y2 + 2, col2_x2, y2 + 35)
        page.insert_textbox(rect_ach, ach_desc, fontname='Arial', fontsize=8.2, color=c_dark, lineheight=1.26)
        y2 += 28.0

    print(f'Premium PDF Final: Left y1 = {y1:.1f} pt, Right y2 = {y2:.1f} pt (A4 height = {page_h:.1f} pt)')
    
    out_paths = [
        'd:/aditya/public/assets/aditya-narayan-premium-resume.pdf',
        'd:/aditya/dist/assets/aditya-narayan-premium-resume.pdf'
    ]
    for op in out_paths:
        os.makedirs(os.path.dirname(op), exist_ok=True)
        doc.save(op)
    print('Generated and saved Premium PDF successfully!')

if __name__ == '__main__':
    generate_premium_pdf()
