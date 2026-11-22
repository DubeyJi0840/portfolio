import fitz
import os

def generate_sample2_resume():
    doc = fitz.open()
    # A4: 595.28 x 841.89 points
    page = doc.new_page(width=595.28, height=841.89)

    # Palette
    c_orange = (1.0, 0.33, 0.0)       # #ff5500 (Sample 2 uses purple, user asked for orange 10%)
    c_dark = (0.08, 0.10, 0.14)        # #141a24
    c_gray = (0.35, 0.38, 0.45)        # #596173
    c_light_bg = (0.95, 0.96, 0.98)    # #f2f4f8 pill bg
    c_pill_border = (0.82, 0.85, 0.90) # #d1d9e6
    c_black = (0.0, 0.0, 0.0)

    # Margins
    mx = 36
    right_edge = 595.28 - 36 # 559.28
    page_w = 595.28

    # 1. Header Left
    y = 45
    page.insert_text(fitz.Point(mx, y), "ADITYA NARAYAN", fontsize=24, fontname="helv", color=c_dark)
    y += 16
    page.insert_text(fitz.Point(mx, y), "SOFTWARE DEVELOPER  |  FLUTTER & FULL-STACK SPECIALIST", fontsize=9.2, fontname="helv", color=c_orange)
    y += 14

    # Contact items with symbols
    contact_text = "+91 9135737500   •   adityakumar913573@gmail.com   •   Noida, UP, India"
    page.insert_text(fitz.Point(mx, y), contact_text, fontsize=8.2, fontname="helv", color=c_gray)
    y += 12
    links_text = "github.com/DubeyJi0840   •   linkedin.com/in/aditya-narayan-84634525b"
    page.insert_text(fitz.Point(mx, y), links_text, fontsize=8.2, fontname="helv", color=c_gray)

    # 2. Top-Right Photo (Matching Sample 2 circular photo placement!)
    avatar_path = r'd:\aditya\public\assets\aditya-avatar-round.png'
    if os.path.exists(avatar_path):
        photo_size = 72
        photo_x = right_edge - photo_size
        photo_y = 28
        page.draw_circle(fitz.Point(photo_x + photo_size/2, photo_y + photo_size/2), photo_size/2 + 2, color=c_orange, fill=(1,1,1), width=2)
        page.insert_image(fitz.Rect(photo_x, photo_y, photo_x + photo_size, photo_y + photo_size), filename=avatar_path)

    # Divider below header
    y = 104
    page.draw_line(fitz.Point(mx, y), fitz.Point(right_edge, y), color=(0.88, 0.90, 0.94), width=0.8)
    y += 14

    # 2-Column Split:
    # Left col: 56% (width ~ 285pt) -> mx to mx + 285 (36 to 321)
    # Gutter: 16pt (321 to 337)
    # Right col: 44% (width ~ 222pt) -> 337 to 559.28
    col1_x = mx
    col1_w = 285
    col2_x = col1_x + col1_w + 16
    col2_w = right_edge - col2_x

    # Helper for section title
    def section_title(text, px, py, pw):
        page.insert_text(fitz.Point(px, py), text, fontsize=11.0, fontname="helv", color=c_orange)
        py += 4
        page.draw_line(fitz.Point(px, py), fitz.Point(px + pw, py), color=c_orange, width=1.4)
        return py + 12

    def draw_tech_pill(px, py, text):
        w = fitz.get_text_length(text, fontname="helv", fontsize=6.8) + 8
        h = 12
        r = fitz.Rect(px, py - 9, px + w, py - 9 + h)
        page.draw_rect(r, color=c_pill_border, fill=c_light_bg, width=0.5)
        page.insert_text(fitz.Point(px + 4, py), text, fontsize=6.8, fontname="helv", color=c_dark)
        return px + w + 4

    # ==================== LEFT COLUMN ====================
    ly = y

    # WORK EXPERIENCE
    ly = section_title("WORK EXPERIENCE", col1_x, ly, col1_w)

    # Job 1: Vagminepro
    page.insert_text(fitz.Point(col1_x, ly), "SOFTWARE DEVELOPER", fontsize=9.2, fontname="helv", color=c_dark)
    ly += 10
    page.insert_text(fitz.Point(col1_x, ly), "VAGMINEPRO TECHNO PVT. LTD.", fontsize=8.2, fontname="helv", color=c_orange)
    ly += 10
    page.insert_text(fitz.Point(col1_x, ly), "[AUG 2026 - PRESENT]   |   [DELHI, INDIA]", fontsize=7.2, fontname="helv", color=c_gray)
    ly += 11
    
    b1_1 = "Worked on enterprise application modules, backend services, and cross-platform business workflows."
    tb1_1 = fitz.Rect(col1_x + 8, ly - 7, col1_x + col1_w, ly + 14)
    page.draw_circle(fitz.Point(col1_x + 3, ly - 2.5), 1.2, color=c_orange, fill=c_orange)
    page.insert_textbox(tb1_1, b1_1, fontsize=7.2, fontname="helv", color=c_dark, lineheight=1.2)
    ly += 18

    b1_2 = "Contributed to REST API integration, application architecture, and database-related development."
    tb1_2 = fitz.Rect(col1_x + 8, ly - 7, col1_x + col1_w, ly + 14)
    page.draw_circle(fitz.Point(col1_x + 3, ly - 2.5), 1.2, color=c_orange, fill=c_orange)
    page.insert_textbox(tb1_2, b1_2, fontsize=7.2, fontname="helv", color=c_dark, lineheight=1.2)
    ly += 20

    # Pills for Job 1
    pill_x = col1_x
    for p in ["Flutter", "React", ".NET Core", "SQL Server", "Docker", "REST API"]:
        pill_x = draw_tech_pill(pill_x, ly, p)
    ly += 16

    # Job 2: Infinitminds
    page.insert_text(fitz.Point(col1_x, ly), "FLUTTER DEVELOPER INTERN", fontsize=9.2, fontname="helv", color=c_dark)
    ly += 10
    page.insert_text(fitz.Point(col1_x, ly), "INFINITMINDS DIGITAL LAB PVT. LTD.", fontsize=8.2, fontname="helv", color=c_orange)
    ly += 10
    page.insert_text(fitz.Point(col1_x, ly), "[18 FEB 2025 - 18 MAY 2025]   |   [PATNA, INDIA]", fontsize=7.2, fontname="helv", color=c_gray)
    ly += 11

    b2_1 = "Developed Flutter and Dart mobile screens, responsive widgets, and navigation flows."
    tb2_1 = fitz.Rect(col1_x + 8, ly - 7, col1_x + col1_w, ly + 14)
    page.draw_circle(fitz.Point(col1_x + 3, ly - 2.5), 1.2, color=c_orange, fill=c_orange)
    page.insert_textbox(tb2_1, b2_1, fontsize=7.2, fontname="helv", color=c_dark, lineheight=1.2)
    ly += 18

    b2_2 = "Integrated REST APIs, handled asynchronous JSON data, and resolved UI/UX issues."
    tb2_2 = fitz.Rect(col1_x + 8, ly - 7, col1_x + col1_w, ly + 14)
    page.draw_circle(fitz.Point(col1_x + 3, ly - 2.5), 1.2, color=c_orange, fill=c_orange)
    page.insert_textbox(tb2_2, b2_2, fontsize=7.2, fontname="helv", color=c_dark, lineheight=1.2)
    ly += 20

    pill_x = col1_x
    for p in ["Flutter", "Dart", "REST APIs", "Android Studio", "JSON"]:
        pill_x = draw_tech_pill(pill_x, ly, p)
    ly += 16

    # Job 3: Freelance
    page.insert_text(fitz.Point(col1_x, ly), "FREELANCE SOFTWARE DEVELOPER", fontsize=9.2, fontname="helv", color=c_dark)
    ly += 10
    page.insert_text(fitz.Point(col1_x, ly), "INDEPENDENT CLIENT CONTRACTING", fontsize=8.2, fontname="helv", color=c_orange)
    ly += 10
    page.insert_text(fitz.Point(col1_x, ly), "[2023 - PRESENT]   |   [REMOTE]", fontsize=7.2, fontname="helv", color=c_gray)
    ly += 11

    b3_1 = "Delivered 50+ client projects across Flutter applications, React portals, and .NET REST APIs."
    tb3_1 = fitz.Rect(col1_x + 8, ly - 7, col1_x + col1_w, ly + 14)
    page.draw_circle(fitz.Point(col1_x + 3, ly - 2.5), 1.2, color=c_orange, fill=c_orange)
    page.insert_textbox(tb3_1, b3_1, fontsize=7.2, fontname="helv", color=c_dark, lineheight=1.2)
    ly += 18

    b3_2 = "Designed an estimated 200+ UI screens and managed requirements, implementation, and handover."
    tb3_2 = fitz.Rect(col1_x + 8, ly - 7, col1_x + col1_w, ly + 14)
    page.draw_circle(fitz.Point(col1_x + 3, ly - 2.5), 1.2, color=c_orange, fill=c_orange)
    page.insert_textbox(tb3_2, b3_2, fontsize=7.2, fontname="helv", color=c_dark, lineheight=1.2)
    ly += 20

    pill_x = col1_x
    for p in ["Flutter", "React", "TypeScript", "Dart", "Firebase"]:
        pill_x = draw_tech_pill(pill_x, ly, p)
    ly += 20

    # EDUCATION
    ly = section_title("EDUCATION", col1_x, ly, col1_w)
    page.insert_text(fitz.Point(col1_x, ly), "Bachelor of Computer Applications (BCA)", fontsize=8.8, fontname="helv", color=c_dark)
    ly += 11
    page.insert_text(fitz.Point(col1_x, ly), "ARYABHATTA KNOWLEDGE UNIVERSITY, PATNA", fontsize=8.0, fontname="helv", color=c_orange)
    page.insert_text(fitz.Point(col1_x + 215, ly), "CGPA: 7.17/10", fontsize=7.8, fontname="helv", color=c_dark)
    ly += 10
    page.insert_text(fitz.Point(col1_x, ly), "[2021 - 2024]   |   [Patna, India]", fontsize=7.2, fontname="helv", color=c_gray)
    ly += 14

    page.insert_text(fitz.Point(col1_x, ly), "Intermediate / Higher Secondary (Science)", fontsize=8.2, fontname="helv", color=c_dark)
    ly += 10
    page.insert_text(fitz.Point(col1_x, ly), "MSSG COLLEGE, E. CHAMPARAN (2019 - 2021)", fontsize=7.2, fontname="helv", color=c_gray)
    ly += 18

    # SKILLS
    ly = section_title("TECHNICAL SKILLS", col1_x, ly, col1_w)
    skills_map = [
        ("Programming:", "Dart, C#, TypeScript, JavaScript, SQL, HTML5, CSS3"),
        ("Frameworks:", "Flutter, React, .NET Core, ASP.NET Core, Tailwind"),
        ("Databases:", "MS SQL Server, MySQL, SQLite, Firebase, Redis"),
        ("Tools & DevOps:", "Git, GitHub, Docker, Postman, Android Studio, VS Code")
    ]
    for lbl, val in skills_map:
        page.insert_text(fitz.Point(col1_x, ly), lbl, fontsize=7.6, fontname="helv", color=c_dark)
        ly += 9
        page.insert_text(fitz.Point(col1_x, ly), val, fontsize=7.0, fontname="helv", color=c_gray)
        ly += 11

    # ==================== RIGHT COLUMN ====================
    ry = y

    # PROJECTS
    ry = section_title("PROJECTS", col2_x, ry, col2_w)

    projects_list = [
        {
            "title": "KHARID DO — E-COMMERCE APP",
            "date": "[FLUTTER, DART]",
            "desc": "Built responsive e-commerce mobile application with 15+ screens, cart sync, checkout, and order tracking.",
            "pills": ["Flutter", "Dart", "Material 3", "REST API"]
        },
        {
            "title": "EDUPULSE PORTAL — ACADEMICS",
            "date": "[REACT, TYPESCRIPT, MYSQL]",
            "desc": "Engineered academic dashboard for 4,800+ student profiles; optimized database queries reducing turnaround by 60%.",
            "pills": ["React", "TypeScript", "MySQL", "Tailwind"]
        },
        {
            "title": "GEO-TRACK TRAVEL & FLEET",
            "date": "[FLUTTER, GOOGLE MAPS]",
            "desc": "Real-time GPS tracking mobile app with custom route polylines and battery-saving geofencing.",
            "pills": ["Flutter", "Google Maps", "Geolocator"]
        },
        {
            "title": "PULSEFIT TRACKER COMPANION",
            "date": "[FLUTTER, SQLITE, FIREBASE]",
            "desc": "Cross-platform fitness tracker with animated progress indicators and offline-first habit logging.",
            "pills": ["Flutter", "SQLite", "Firebase"]
        }
    ]

    for p in projects_list:
        page.insert_text(fitz.Point(col2_x, ry), p["title"], fontsize=8.6, fontname="helv", color=c_dark)
        ry += 10
        page.insert_text(fitz.Point(col2_x, ry), p["date"], fontsize=7.0, fontname="helv", color=c_orange)
        ry += 10
        
        tb_p = fitz.Rect(col2_x + 8, ry - 7, col2_x + col2_w, ry + 20)
        page.draw_circle(fitz.Point(col2_x + 3, ry - 2.5), 1.2, color=c_orange, fill=c_orange)
        page.insert_textbox(tb_p, p["desc"], fontsize=7.2, fontname="helv", color=c_dark, lineheight=1.2)
        ry += 22

        pill_x = col2_x
        for tag in p["pills"]:
            pill_x = draw_tech_pill(pill_x, ry, tag)
        ry += 15

    # ACHIEVEMENTS & CERTIFICATIONS
    ry = section_title("ACHIEVEMENTS & CERTS", col2_x, ry, col2_w)

    achievements = [
        ("ORACLE CLOUD INFRASTRUCTURE (OCI)", "AI Foundations Associate Certificate (2026)", ["Oracle", "Cloud AI"]),
        ("CISCO NETWORKING ACADEMY", "Data Analytics Essentials Certificate (Feb 2026)", ["Cisco", "Analytics"]),
        ("INFINITMINDS DIGITAL LAB", "Flutter Developer Internship Certificate (May 2025)", ["Flutter", "Mobile Eng"])
    ]

    for title, desc, pills in achievements:
        page.insert_text(fitz.Point(col2_x, ry), f"[+] {title}", fontsize=7.8, fontname="helv", color=c_dark)
        ry += 9
        page.insert_text(fitz.Point(col2_x + 8, ry), desc, fontsize=7.0, fontname="helv", color=c_gray)
        ry += 12
        pill_x = col2_x + 8
        for tag in pills:
            pill_x = draw_tech_pill(pill_x, ry, tag)
        ry += 13

    # IMPACT HIGHLIGHTS
    ry = section_title("DELIVERY TRACK RECORD", col2_x, ry, col2_w)
    records = [
        "• 50+ Client Contracts Successfully Delivered",
        "• 200+ Mobile & Web Screens Built & Tested",
        "• 60% Query Turnaround Latency Reduction"
    ]
    for r in records:
        page.insert_text(fitz.Point(col2_x, ry), r, fontsize=7.4, fontname="helv", color=c_dark)
        ry += 11

    out_path = r'd:\aditya\public\assets\aditya-narayan-premium-resume.pdf'
    doc.save(out_path)
    print(f"Sample 2 Resume PDF generated: {out_path} ({os.path.getsize(out_path)} bytes)")

if __name__ == '__main__':
    generate_sample2_resume()
