import numpy as np
from flask import Flask, request, render_template
import pickle
import os

app = Flask(__name__)
adhd_model = pickle.load(open('adhd_model.pkl', 'rb')) 

picfolder=os.path.join('static', 'img')

app.config['UPLOAD_FOLDER']=picfolder

@app.route('/') 
def home():
    pic1 = os.path.join(app.config['UPLOAD_FOLDER'], 'logo.jpeg')
    img_list= os.listdir('static/img')
    img_list=['img/'+image for image in img_list]
    
    return render_template('adhd.html', img_list=img_list)

@app.route('/predict',methods=['POST','GETS']) 
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