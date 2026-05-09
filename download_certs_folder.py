import gdown
import os

files_text = """
13XBnNZEnLG13KQOonqe2f0w-Tu-GhJQv Best Performer  LINGUASPARK 2K25.pdf
1JS7Zabqkkcrif_EPnFjynrF0wa8SkPnE 1-10a9eb81-35d4-4df2-b753-c3dac505fc21.pdf
16Cut49-RgiimH-8YS131GDgzjwXNNr3g 1-c1ac89c9-b8cc-453a-9b2b-c92f405bbada.pdf
1-WkHgV_xoktgKOwbwr_MMk2LWvLhQVKQ 1-cfbc4e2b-3190-467f-ada7-1fbdd18f0e74.pdf
17P1QUfVaADHxQQvd6_xlBbNjc4uEGJ28 1-d752163f-9105-4ce2-a60c-0dd3ec0b7159.pdf
17orfDPUIOO2socxgFSCWo3jO544-Rs9V 503_RAVURI_LAJWANTH_V_N_P.pdf
1ovz4UlE5J8gPPey1H_HXGM9r2J9HpLM3 _certificate_ravurilvnphanindra2005-gmail-com_190e03bb-112c-47ab-ab00-d9e96d15ab07.pdf
1fP6V-UMZjuraNJxrWzhNtAf4MUXd1oy- _certificate_ravurilvnphanindra2005-gmail-com_76137ef6-c386-4d7c-b311-b6742ce61ea7.pdf
1J6h6UcM6snhLrWWD_GN2DcfhFuvzAu3I Advanced Prompt Engineering.pdf
1FWT1ckO2i6kqEyWbvFIk97gAcmMJUI_S Agile Methodology.pdf
1XrC2cpqZIGyDFNce2pEJMkScG5eeSJ1F AI_Fluency_by_claude.pdf
1Iq_0j-9EFfykv_sSocf0Vdn2xJNCScpf AWS Cloud Practitioner.pdf
1DoF-oKRwWSM3nSqSGVW8Ju1xfx2ep7rb be1ox.jpg
110n9mDE9n5_dqrKlCqJ2KW0Tiu0tHATO C_BOOTCAMP.pdf
1gyfTu2sknBgOkFWqRDjyMq9F3y7C8Sqo Career Edge  Young Professional.pdf
1wBNJBXFAeqpKh_k9xfPLS75rXblnK0M2 Claude_101.pdf
1aVjGXbgO1LWa9kxS7wM7ZmI4KstJySAC Claude_code_in_action.pdf
13gPplO5y2rfKRzf4kVVVQv6Zdao1q_i8 CODE_BINGO.pdf
1kRCsF3sq4HLDIBujL3GeME6XR54uoqvH CODE_SPARK.jpg
1qO5ZmjsU4vk9K6BI-d_3GXIkyhLOm4fn COMMUNITY_CENTRIC.pdf
1V79NgpEDfjARYY5TyuHUdtetxgLA4rWt Complete Full-Stack Web Bootcamp.pdf
1SXTSBO6ago0Py6Oxu52XHNKN-qB3Odfs flutter_wrkshop.pdf
1CWmHM5Lk5a8O_GTXzNyXMdqAbOg5Ilca FREEDOM FEST COORDINATOR CERTIFICATE
1beh8dGXEf46kmfHrTywG_1inIEJM7vIW Gd_bestperformer.pdf
1MlnB_cR1j92ADIV7Qt1IufioVfO_MXMk HACKiT.pdf
1gkTjNkihVkeou6WTG6sgZJymZ0CMPjBy Introduction to Internet of Things.pdf
1_9wO271LjkkK77CNJtWOxbtgA1S1kTgi life Skills and Engineering Skills Participation Certificate 23761A1243 .pdf
1jzLwCbgAriADpNHYf7Zx0v9SUn42zsbZ listening quiz.pdf
1BwTYPl-Qw18z72u6XtBa1ZVQQH6QLArB LSRW.pdf
1MC49eK7Y4HGSRJoOGlxdWUK_V2qMzp2Y MY BHARATH QUIZ PARTICIPATION CERTIFICATE
1MDsJ1Y2w-vcuP5-EanmqajZO4y3mlRoQ Networking Basics.pdf
1eJsu1ywBgZImfTYBIcs338zss2Qp_zQm OCI 2025 Generative AI Professional.pdf
1fbW9Oju07jLtRd5v4mIysRQi-aWZmvvK OJAS-BLINDCODE.pdf
1gz8Luxm8CpwD2wh8V8-jMa04vV7xewHT PDBS.png
16Z7PO-9RMytI89D-vnyid36LIvNsUXuy python_basic certificate (1).pdf
1FcQGeulBW8g2vz5hcxJ6iypIgsMIvRN8 PYTHON_DEGREE_CLG.pdf
1c8cHSqeXaW6lgFFVz7GcAPXxjixjFP-2 RAVURI LAJWANTH V N P _AI_APPRECIATE_CERTIFICATE.png
1PPBuwGuwYzOBmEsV_JZZ-dT_h9DoWKC7 RAVURI LAJWANTH V N P _AI_AWARE_CERTIFICATE.png
14w1E_KhJfwSXioAcgQz6H1QauOaKnxdX RVR_Colorido_Fest.pdf
1UzibSvVJizITZXzliP9587le1QVsWD0c Samvada 3rd prize.jpg
1rDgAXwTywMUGbUJHlhR_XJ3t2PQW6754 SQL (Basic).png
1pbOYf0Wkv4Umn_8RnMVOFN_W9QXW8Y7U story creation.pdf
1aWDKpeIszUeXe5mBhCZyBFrfgvnFDkb1 Vibrance_poster_paper_presentation.png
1O4e8ggNmg-Rqt9hWRQorVwhKqBB8jM6K WEBDEVELOPMENT_BOOTCAMP.pdf
"""

out_dir = "public/certifications"
os.makedirs(out_dir, exist_ok=True)

for line in files_text.strip().split('\n'):
    parts = line.split(' ', 1)
    if len(parts) == 2:
        file_id = parts[0]
        name = parts[1].strip()
        url = f"https://drive.google.com/uc?id={file_id}"
        out_path = os.path.join(out_dir, name)
        if not os.path.exists(out_path):
            try:
                gdown.download(url, out_path, quiet=True)
                print(f"Downloaded: {name}")
            except Exception as e:
                print(f"Failed to download {name}: {e}")
