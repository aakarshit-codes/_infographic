# Global Mental Health Infographic

An interactive, data-driven infographic visualizing the prevalence of depression, anxiety, and bipolar disorder worldwide using **Chart.js**, **TailwindCSS**, and **JavaScript (ES2023+)**.

## 📊 Features

- **Animated Counters**: Display global averages for key mental health disorders.
- **Top 10 Countries Bar Chart**: Ranks nations by depression prevalence.
- **Global Trend Line Chart**: Shows average depression rate over time.
- **Scroll-Triggered Impact Cards**: Highlights key factors affecting mental health.
- **Custom Tooltips**: Adds rich, contextual hover info to charts.
- **Fully Responsive**: Works on mobile, tablet, and desktop.

## 📊 Dataset

- [mental-health (Kaggle)](https://www.kaggle.com/datasets/imtkaggleteam/mental-health)
- Cleaned & processed JSON files included in `/data` folder:
  - `mental_health_latest.json` — Latest year snapshot
  - `top10_depression_latest.json` — Top 10 countries by depression rate
  - `global_depression_trend.json` — Global average depression rates over time


## 🛠️ Tech Stack

- **HTML5** + **TailwindCSS** (styling)
- **JavaScript (ES2023+)**
- **Chart.js** for interactive data visualizations
- **IntersectionObserver API** for scroll animations

## Demo
Open `index.html` in your browser to view the infographics.

## 📆 Project Structure

```
final-project/
├── css/
│   └── style.css
├── data/
│   ├── mental_health_latest.json
│   ├── top10_depression_latest.json
│   └── global_depression_trend.json
├── js/
│   └── main.js
└── index.html
```

## Getting Started
1. Clone or download this repository.
2. Open `index.html` in your preferred web browser.
3. No build steps or server required.

## Customization
- To update data, replace or edit the JSON files in the `data/` folder.
- To change styles, edit `css/style.css`.
- To add new charts or effects, modify or add scripts in the `js/` folder.

## Credits
- Developed by Aakarshit Sharma
- Libraries used: TailwindCSS and Chart.js
