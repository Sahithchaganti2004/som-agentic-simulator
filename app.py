import os
import streamlit as st
import streamlit.components.v1 as components

# Configure Streamlit page
st.set_page_config(
    page_title="Autonomous DevEaaS vs. Traditional IT Operations: SOM Evaluation",
    page_icon="🎓",
    layout="wide",
    initial_sidebar_state="collapsed"
)

# Custom Streamlit CSS to remove padding and ensure seamless light-theme rendering
st.markdown("""
    <style>
        #MainMenu {visibility: hidden;}
        footer {visibility: hidden;}
        header {visibility: hidden;}
        .stApp {
            background-color: #f8fafc !important;
        }
        .block-container {
            padding-top: 0.5rem !important;
            padding-bottom: 0.5rem !important;
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
            max-width: 100% !important;
        }
        iframe {
            border: none;
            width: 100%;
        }
    </style>
""", unsafe_allow_html=True)

# Determine path directory
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

csv_path = os.path.join(BASE_DIR, "som_benchmark_dataset_50_companies.csv")
index_path = os.path.join(BASE_DIR, "index.html")
styles_path = os.path.join(BASE_DIR, "styles.css")
js_path = os.path.join(BASE_DIR, "app.js")

# Top bar download option in Streamlit sidebar/toolbar
if os.path.exists(csv_path):
    with open(csv_path, "rb") as f:
        st.download_button(
            label="📥 Download Empirical Benchmark Dataset (50 Companies .CSV)",
            data=f.read(),
            file_name="som_benchmark_dataset_50_companies.csv",
            mime="text/csv",
            key="csv-download-btn"
        )

with open(index_path, "r", encoding="utf-8") as f:
    html_content = f.read()

with open(styles_path, "r", encoding="utf-8") as f:
    css_content = f.read()

with open(js_path, "r", encoding="utf-8") as f:
    js_content = f.read()

# Inline CSS and JS into single standalone HTML bundle
html_bundled = html_content.replace(
    '<link rel="stylesheet" href="styles.css">',
    f'<style>\n{css_content}\n</style>'
).replace(
    '<script src="app.js"></script>',
    f'<script>\n{js_content}\n</script>'
)

# Render full height interactive application component
components.html(html_bundled, height=1250, scrolling=True)
