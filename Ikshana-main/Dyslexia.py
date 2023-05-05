#!/usr/bin/env python
# coding: utf-8

# In[604]:


#!pip install scikit-learn
#!pip install matplotlib
#!pip install pandas
#!pip install numpy 
#!pip install seaborn 
#!pip install pickle-mixin


# In[605]:


import matplotlib.pyplot as plt
import pandas as pd
from sklearn.svm import SVC
from sklearn.model_selection import train_test_split
import numpy as np
import pandas as pd
from sklearn.model_selection import GridSearchCV
from sklearn.ensemble import RandomForestClassifier
import seaborn as sns
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import f1_score
from sklearn.metrics import precision_recall_fscore_support
import pickle
#get_ipython().run_line_magic('matplotlib', 'inline')


# In[606]:


df = pd.read_csv('Aug_Dyslexia.csv')


# In[607]:


df.head()


# In[608]:


df.describe()


# In[609]:


df.columns


# In[610]:


df1 = df.drop(['Timestamp', 'Name ', 'Gender', 'Grade'], axis=1)


# In[611]:


df1


# In[612]:


df1.empty


# In[613]:


Score = df1['Score']

Score.astype(int)
print(Score)


# In[614]:


df1['Label'].value_counts()


# In[615]:


y=df1.Label
x=df1.iloc[:,[1,2,3,4,5,6,7,8,9,10,11,12]]

print(x)


# In[683]:


df1.columns


# In[684]:


result = pd.pivot_table(data=df1, index='Label', columns='Score',values='Age')
#print(result)
#create heat map 
sns.heatmap(result, annot=True, cmap = 'RdYlGn', center=1)
plt.show() 


# In[717]:


x_train, x_test, y_train, y_test = train_test_split(x, y,
                                   random_state=46, 
                                   test_size=0.25, 
                                   shuffle=True)


# ## Random Forest

# In[718]:


#Fitting RF classifier to the training set  
from sklearn.ensemble import RandomForestClassifier  
classifier= RandomForestClassifier(n_estimators= 10, criterion="entropy")  
classifier.fit(x_train, y_train)  


# In[719]:


classifier.classes_


# In[720]:


#Predicting the test set result  
y_pred1 = classifier.predict(x_test)  
y_pred1


# In[721]:


#Creating the Confusion matrix  
from sklearn.metrics import confusion_matrix  
cm1= confusion_matrix(y_test, y_pred1) 
cm1


# In[722]:


plt.figure(figsize=(10,6))
fx=sns.heatmap(confusion_matrix(y_test,y_pred1), annot=True, fmt=".2f",cmap="GnBu")
fx.set_title('Confusion Matrix \n');
fx.set_xlabel('\n Predicted Values\n')
fx.set_ylabel('Actual Values\n');
fx.xaxis.set_ticklabels(['No Dyslexia', 'Has Dyslexia'])
fx.yaxis.set_ticklabels(['No Dyslexia', 'Has Dyslexia'])
plt.show()


# In[723]:


from sklearn.metrics import classification_report
print(classification_report(y_test, y_pred1))


# ## K-NN

# In[724]:


#Fitting K-NN classifier to the training set  
from sklearn.neighbors import KNeighborsClassifier  
classifier= KNeighborsClassifier(n_neighbors=5, metric='minkowski', p=2 )  
classifier.fit(x_train, y_train)  


# In[725]:


#Predicting the test set result  
y_pred2 = classifier.predict(x_test)  
y_pred2

pickle.dump(classifier, open('dyslexia_model.pkl','wb'))
dyslexia_model=pickle.load(open('dyslexia_model.pkl','rb')) 


# In[726]:


#Creating the Confusion matrix  
from sklearn.metrics import confusion_matrix  
cm2= confusion_matrix(y_test, y_pred2) 
cm2


# In[727]:


plt.figure(figsize=(10,6))
fx=sns.heatmap(confusion_matrix(y_test,y_pred2), annot=True, fmt=".2f",cmap="GnBu")
fx.set_title('Confusion Matrix \n');
fx.set_xlabel('\n Predicted Values\n')
fx.set_ylabel('Actual Values\n');
fx.xaxis.set_ticklabels(['No Dyslexia', 'Has Dyslexia'])
fx.yaxis.set_ticklabels(['No Dyslexia', 'Has Dyslexia'])
plt.show()


# In[728]:


from sklearn.metrics import classification_report
print(classification_report(y_test, y_pred2))


# ## Decision Tree Classifier

# In[729]:


#Fitting Decision Tree classifier to the training set  
from sklearn.tree import DecisionTreeClassifier  
classifier= DecisionTreeClassifier(criterion='entropy', random_state=0)  
classifier.fit(x_train, y_train)  


# In[730]:


#Predicting the test set result  
y_pred3= classifier.predict(x_test)  
y_pred3


# In[731]:


#Creating the Confusion matrix  
from sklearn.metrics import confusion_matrix  
cm3= confusion_matrix(y_test, y_pred3) 
cm3


# In[732]:


plt.figure(figsize=(10,6))
fx=sns.heatmap(confusion_matrix(y_test,y_pred3), annot=True, fmt=".2f",cmap="GnBu")
fx.set_title('Confusion Matrix \n');
fx.set_xlabel('\n Predicted Values\n')
fx.set_ylabel('Actual Values\n');
fx.xaxis.set_ticklabels(['No Dyslexia', 'Has Dyslexia'])
fx.yaxis.set_ticklabels(['No Dyslexia', 'Has Dyslexia'])
plt.show()


# In[733]:


from sklearn.metrics import classification_report
print(classification_report(y_test, y_pred3))


# ## SVM 

# In[734]:


from sklearn.svm import SVC # "Support vector classifier"  
classifier = SVC(kernel='linear', random_state=0)  
classifier.fit(x_train, y_train) 


# In[735]:


#Predicting the test set result  
y_pred4= classifier.predict(x_test)  
y_pred4


# In[736]:


#Creating the Confusion matrix  
from sklearn.metrics import confusion_matrix  
cm4= confusion_matrix(y_test, y_pred4)
cm4


# In[737]:


plt.figure(figsize=(10,6))
fx=sns.heatmap(confusion_matrix(y_test,y_pred4), annot=True, fmt=".2f",cmap="GnBu")
fx.set_title('Confusion Matrix \n');
fx.set_xlabel('\n Predicted Values\n')
fx.set_ylabel('Actual Values\n');
fx.xaxis.set_ticklabels(['No Dyslexia', 'Has Dyslexia'])
fx.yaxis.set_ticklabels(['No Dyslexia', 'Has Dyslexia'])
plt.show()


# In[738]:


from sklearn.metrics import classification_report
print(classification_report(y_test, y_pred4))


# ## Naive Bayes

# In[739]:


# Fitting Naive Bayes to the Training set  
from sklearn.naive_bayes import GaussianNB  
classifier = GaussianNB()  
classifier.fit(x_train, y_train)


# In[740]:


# Predicting the Test set results  
y_pred5 = classifier.predict(x_test) 
y_pred5




# In[741]:


# Making the Confusion Matrix  
from sklearn.metrics import confusion_matrix  
cm5 = confusion_matrix(y_test, y_pred5)  
cm5


# In[742]:


plt.figure(figsize=(10,6))
fx=sns.heatmap(confusion_matrix(y_test,y_pred5), annot=True, fmt=".2f",cmap="GnBu")
fx.set_title('Confusion Matrix \n');
fx.set_xlabel('\n Predicted Values\n')
fx.set_ylabel('Actual Values\n');
fx.xaxis.set_ticklabels(['No Dyslexia', 'Has Dyslexia'])
fx.yaxis.set_ticklabels(['No Dyslexia', 'Has Dyslexia'])
plt.show()


# In[743]:


from sklearn.metrics import classification_report
print(classification_report(y_test, y_pred5))


# In[744]:


lol= classifier.predict([[1,2,3,1,2,2,1,1
                          ,2,1,1,1]])
print(lol)


# In[745]:


lol= classifier.predict([[2,3,2,2,2,2,2,3,2,2,3,2]])
print(lol)


# In[746]:


lol= classifier.predict([[1,1,1,1,1,1,1,1,1,1,1,1]])
print(lol)


# In[747]:


lol= classifier.predict([[4,4,4,4,4,4,4,4,4,4,4,4]])
print(lol)


# # Most accurate model is KNN 

# In[748]:


df1['Label'].value_counts()


# In[ ]:




