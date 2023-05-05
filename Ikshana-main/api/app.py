# uvicorn app:app --host 127.0.0.1 
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import  List
#import joblib 
import pickle
import numpy as np

app = FastAPI()
origins = ["http://localhost","http://localhost:3000","*"]


app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=origins,
    allow_methods=["POST"],
    allow_headers=["*"],
)




class checkDyslexia(BaseModel):
    feature: List[str]

class checkDyscalculia(BaseModel):
    feature: List[str]

class checkadhd(BaseModel):
    feature: List[str]

class checkDysgraphia(BaseModel):
    feature: List[str]
   


@app.post("/submitdyslexia/")
async def get_data(data: checkDyslexia):
    dyslexia_model = pickle.load(open('dyslexia_model.pkl', 'rb')) 
    feature = data.feature 
    int_features = [int(x) for x in feature]
    final_features = [np.array(int_features)] 
    prediction = dyslexia_model.predict(final_features) 
    return{"answer": prediction[0]}

@app.post("/submitdyscalculia/")
async def get_data(data: checkDyscalculia):
    dyscalculia_model = pickle.load(open('dyscalculia_model.pkl', 'rb')) 
    feature = data.feature 
    int_features = [int(x) for x in feature]
    final_features = [np.array(int_features)] 
    prediction = dyscalculia_model.predict(final_features) 
    return{"answer": prediction[0]}

@app.post("/submitdysgraphia/")
async def get_data(data: checkDysgraphia):
    dysgraphia_model = pickle.load(open('dysgraphia_model.pkl', 'rb')) 
    feature = data.feature 
    int_features = [int(x) for x in feature]
    final_features = [np.array(int_features)] 
    prediction = dysgraphia_model.predict(final_features) 
    return{"answer": prediction[0]}

@app.post("/submitadhd/")
async def get_data(data: checkadhd):
    adhd_model = pickle.load(open('adhd_model.pkl', 'rb')) 
    feature = data.feature 
    int_features = [int(x) for x in feature]
    final_features = [np.array(int_features)] 
    prediction = adhd_model.predict(final_features) 
    return{"answer": prediction[0]}


