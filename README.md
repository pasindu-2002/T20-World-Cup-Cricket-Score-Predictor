

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
<h1>T20 World Cup Cricket Score Predictor</h1>
<img src="static/images/logo.png" alt="T20 World Cup" style="display: flex;
      justify-content: center;
      align-items: center;
      height: 50%;max-width:100px;">
<p>Welcome to the T20 World Cup Cricket Score Predictor repository! This project leverages machine learning techniques to predict scores for T20 World Cup cricket matches.</p>
<h2>Table of Contents</h2>
<ul>
  <li><a href="#introduction">Introduction</a></li>
  <li><a href="#features">Features</a></li>
  <li><a href="#installation">Installation</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#dataset">Dataset</a></li>
  <li><a href="#model">Model</a></li>
  <li><a href="#results">Results</a></li>
  <li><a href="#contributing">Contributing</a></li>
  <li><a href="#license">License</a></li>
</ul>
<h2 id="introduction">Introduction</h2>
<p>The T20 World Cup Cricket Score Predictor is designed to predict the scores of T20 cricket matches. Using historical data and various machine learning algorithms, this project aims to provide accurate score predictions which can be useful for fans, analysts, and enthusiasts.</p>
<h2 id="features">Features</h2>
<ul>
  <li>Predict the score of T20 World Cup cricket matches.</li>
  <li>Use various machine learning models to improve prediction accuracy.</li>
  <li>Analyze historical data to understand patterns and trends.</li>
</ul>
<h2 id="installation">Installation</h2>
<p>To get started with this project, clone the repository and install the necessary dependencies:</p>
<pre><code>git clone https://github.com/your-username/T20-World-Cup-Cricket-Score-Predictor.git
cd T20-World-Cup-Cricket-Score-Predictor
pip install -r requirements.txt</code></pre>
<h2 id="usage">Usage</h2>
<p>After installing the dependencies, you can start making predictions using the provided scripts. Here's a basic example:</p>
<pre><code>from predictor import predict_score
Example match data
match_data = {
'team1': 'India',
'team2': 'Australia',
'venue': 'Dubai',
'date': '2024-06-30'
}

Predict the score
predicted_score = predict_score(match_data)
print(f"Predicted Score: {predicted_score}")</code></pre>

<h2 id="dataset">Dataset</h2>
<p>The dataset used in this project includes historical match data from various T20 World Cup tournaments. The data includes features such as team names, venue, date, and scores. The dataset is preprocessed and cleaned before being used in the model.</p>
<h2 id="model">Model</h2>
<p>The project uses various machine learning models, including but not limited to:</p>
<ul>
  <li>Linear Regression</li>
  <li>Random Forest</li>
  <li>Gradient Boosting</li>
  <li>Neural Networks</li>
</ul>
<p>Each model is trained and evaluated to determine its accuracy and reliability in predicting match scores.</p>
<h2 id="results">Results</h2>
<p>The models' performance is evaluated using metrics such as Mean Absolute Error (MAE) and Root Mean Squared Error (RMSE). Detailed results and analysis can be found in the <a href="results.md">results section</a>.</p>
<h2 id="contributing">Contributing</h2>
<p>We welcome contributions to this project! If you'd like to contribute, please follow these steps:</p>
<ol>
  <li>Fork the repository.</li>
  <li>Create a new branch for your feature or bug fix.</li>
  <li>Make your changes and commit them with clear messages.</li>
  <li>Push to your fork and submit a pull request.</li>
</ol>
<h2 id="license">License</h2>
<p>This project is licensed under the MIT License. See the <a href="LICENSE">LICENSE</a> file for details.</p>

<h2 id="license">Interface</h2>


<img src="https://github.com/user-attachments/assets/fb8e1cad-ba6f-4f3b-bd74-e7ed18276b15" alt="">


<img src="https://github.com/user-attachments/assets/3d3dd4ab-50ba-4a83-bfe3-615f4b332418" alt="">


<img src="https://github.com/user-attachments/assets/36911f5d-bf10-483d-b354-be5ff1906fed" alt="">

</body>
</html>
