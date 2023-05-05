import numpy as np
from flask import Flask, request, render_template
import pickle
import os

app = Flask(__name__)
adhd_model = pickle.load(open('adhd_model.pkl', 'rb')) 

@app.route('/') 
def home():
    
    return render_template('adhd.html')

@app.route('/predict',methods=['POST','GET']) 
def predict():
    '''
    For rendering results on HTML GUI 
    '''
    int_features = [int(x) for x in request.form.values()] 
    final_features = [np.array(int_features)] 
    prediction = adhd_model.predict(final_features) 

    output = prediction[0]

    return render_template('adhd.html', prediction_text='{}'.format(output)) 


if __name__ == "__main__":
    app.run(debug=True) 