import os 
os.system("xvfb-run wkhtmltopdf %s %s"%("http://localhost:8000/test.html", "final-menu.pdf"))