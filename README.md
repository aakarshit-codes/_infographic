# Interactive Infographics: Mental Health & Depression

An interactive web-based project visualizing global trends in mental health and depression using engaging charts, tooltips, and scroll effects.

## Features
- Interactive charts and infographics
- Smooth scroll-based effects
- Tooltips for detailed data insights
- Modular code structure (separate JS, CSS, and data files)

## Demo
Open `index.html` in your browser to view the infographics.

## Folder Structure
```
index.html                # Main HTML file
css/
	style.css               # Stylesheet
js/
	main.js                 # Main script
	charts.js               # Chart rendering logic
	dataHandler.js          # Data loading and processing
	scrollEffects.js        # Scroll-based animations
	tooltips.js             # Tooltip logic
data/
	data_depression.json    # Depression statistics
	data_global_depression_trend.json  # Global depression trends
	data_mental_health.json # Mental health data
```

## Getting Started
1. Clone or download this repository.
2. Open `index.html` in your preferred web browser.
3. No build steps or server required.

## Data Sources
- All data files are in the `data/` folder.
- Data is sourced from https://www.kaggle.com/datasets/imtkaggleteam/mental-health.

## Usage
- Scroll through the page to see animated infographics.
- Hover over chart elements to view tooltips with more information.

## Customization
- To update data, replace or edit the JSON files in the `data/` folder.
- To change styles, edit `css/style.css`.
- To add new charts or effects, modify or add scripts in the `js/` folder.

## Credits
- Developed by Aakarshit Sharma
- Libraries used: TailwindCSS and Chart.js
