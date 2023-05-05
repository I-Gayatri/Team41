#!/usr/bin/env python
# coding: utf-8

# In[1]:


#!pip install scikit-learn
#!pip install matplotlib
#!pip install pandas
#!pip install numpy 
#!pip install seaborn 
#!pip install pickle-mixin


# In[2]:


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


# In[3]:


df = pd.read_csv('Aug_Dyscalculia.csv') 


# In[4]:


df.head()


# In[5]:


df.describe()


# In[6]:


df.columns


# In[7]:


df1 = df.drop(['Timestamp', 'Name', 'Gender', 'Grade'], axis=1)


# In[8]:


df1


# In[9]:


df1.empty


# In[10]:


Score = df1['Score']

Score.astype(int)
print(Score)


# In[11]:


y=df1.Label
x=df1.iloc[:,[1,2,3,4,5,6,7,8,9,10,11,12]]

print(x)


# In[12]:


df1.columns


# In[13]:


result = pd.pivot_table(data=df1, index='Label', columns='Score',values='Age')
#print(result)
#create heat map 
sns.heatmap(result, annot=True, cmap = 'RdYlGn', center=1)
plt.show() 


# In[14]:


x_train, x_test, y_train, y_test = train_test_split(x, y,
                                   random_state=104, 
                                   test_size=0.4, 
                                   shuffle=True)


# ## Random Forest

# In[15]:


#Fitting RF classifier to the training set  
from sklearn.ensemble import RandomForestClassifier  
classifier= RandomForestClassifier(n_estimators= 10, criterion="entropy")  
classifier.fit(x_train, y_train)  


# In[16]:


classifier.classes_


# In[17]:


#Predicting the test set result  
y_pred1 = classifier.predict(x_test)  
y_pred1


# In[18]:


#Creating the Confusion matrix  
from sklearn.metrics import confusion_matrix  
cm1= confusion_matrix(y_test, y_pred1) 
cm1


# In[19]:


plt.figure(figsize=(10,6))
fx=sns.heatmap(confusion_matrix(y_test,y_pred1), annot=True, fmt=".2f",cmap="GnBu")
fx.set_title('Confusion Matrix \n');
fx.set_xlabel('\n Predicted Values\n')
fx.set_ylabel('Actual Values\n');
fx.xaxis.set_ticklabels(['No Dyscalculia', 'Has Dyscalculia'])
fx.yaxis.set_ticklabels(['No Dyscalculia', 'Has Dyscalculia'])
plt.show()


# In[20]:


from sklearn.metrics import classification_report
print(classification_report(y_test, y_pred1))


# ## K-NN

# In[21]:


#Fitting K-NN classifier to the training set  
from sklearn.neighbors import KNeighborsClassifier  
classifier= KNeighborsClassifier(n_neighbors=5, metric='minkowski', p=2 )  
classifier.fit(x_train, y_train)  


# In[22]:


#Predicting the test set result  
y_pred2 = classifier.predict(x_test)  
y_pred2


# In[23]:


#Creating the Confusion matrix  
from sklearn.metrics import confusion_matrix  
cm2= confusion_matrix(y_test, y_pred2) 
cm2


# In[24]:


plt.figure(figsize=(10,6))
fx=sns.heatmap(confusion_matrix(y_test,y_pred2), annot=True, fmt=".2f",cmap="GnBu")
fx.set_title('Confusion Matrix \n');
fx.set_xlabel('\n Predicted Values\n')
fx.set_ylabel('Actual Values\n');
fx.xaxis.set_ticklabels(['No Dyscalculia', 'Has Dyscalculia'])
fx.yaxis.set_ticklabels(['No Dyscalculia', 'Has Dyscalculia'])
plt.show()


# In[25]:


from sklearn.metrics import classification_report
print(classification_report(y_test, y_pred2))


# ## Decision Tree Classifier

# In[26]:


#Fitting Decision Tree classifier to the training set  
from sklearn.tree import DecisionTreeClassifier  
classifier= DecisionTreeClassifier(criterion='entropy', random_state=0)  
classifier.fit(x_train, y_train)  


# In[27]:


#Predicting the test set result  
y_pred3= classifier.predict(x_test)  
y_pred3


# In[28]:


#Creating the Confusion matrix  
from sklearn.metrics import confusion_matrix  
cm3= confusion_matrix(y_test, y_pred3) 
cm3


# In[29]:


plt.figure(figsize=(10,6))
fx=sns.heatmap(confusion_matrix(y_test,y_pred3), annot=True, fmt=".2f",cmap="GnBu")
fx.set_title('Confusion Matrix \n');
fx.set_xlabel('\n Predicted Values\n')
fx.set_ylabel('Actual Values\n');
fx.xaxis.set_ticklabels(['No Dyscalculia', 'Has Dyscalculia'])
fx.yaxis.set_ticklabels(['No Dyscalculia', 'Has Dyscalculia'])
plt.show()


# In[30]:


from sklearn.metrics import classification_report
print(classification_report(y_test, y_pred3))


# ## SVM 

# In[31]:


from sklearn.svm import SVC # "Support vector classifier"  
classifier = SVC(kernel='linear', random_state=0)  
classifier.fit(x_train, y_train) 


# In[32]:


#Predicting the test set result  
y_pred4= classifier.predict(x_test)  
y_pred4

pickle.dump(classifier, open('dyscalculia_model.pkl','wb'))
dyscalculia_model=pickle.load(open('dyscalculia_model.pkl','rb'))

# In[33]:


#Creating the Confusion matrix  
from sklearn.metrics import confusion_matrix  
cm4= confusion_matrix(y_test, y_pred4)
cm4


# In[34]:


plt.figure(figsize=(10,6))
fx=sns.heatmap(confusion_matrix(y_test,y_pred4), annot=True, fmt=".2f",cmap="GnBu")
fx.set_title('Confusion Matrix \n');
fx.set_xlabel('\n Predicted Values\n')
fx.set_ylabel('Actual Values\n');
fx.xaxis.set_ticklabels(['No Dyscalculia', 'Has Dyscalculia'])
fx.yaxis.set_ticklabels(['No Dyscalculia', 'Has Dyscalculia'])
plt.show()


# In[35]:


from sklearn.metrics import classification_report
print(classification_report(y_test, y_pred4))


# ## Naive Bayes

# In[36]:


# Fitting Naive Bayes to the Training set  
from sklearn.naive_bayes import GaussianNB  
classifier = GaussianNB()  
classifier.fit(x_train, y_train)


# In[37]:


# Predicting the Test set results  
y_pred5 = classifier.predict(x_test) 
y_pred5


# In[38]:


# Making the Confusion Matrix  
from sklearn.metrics import confusion_matrix  
cm5 = confusion_matrix(y_test, y_pred5)  
cm5


# In[39]:


plt.figure(figsize=(10,6))
fx=sns.heatmap(confusion_matrix(y_test,y_pred5), annot=True, fmt=".2f",cmap="GnBu")
fx.set_title('Confusion Matrix \n');
fx.set_xlabel('\n Predicted Values\n')
fx.set_ylabel('Actual Values\n');
fx.xaxis.set_ticklabels(['No Dyscalculia', 'Has Dyscalculia'])
fx.yaxis.set_ticklabels(['No Dyscalculia', 'Has Dyscalculia'])
plt.show()


# In[40]:


from sklearn.metrics import classification_report
print(classification_report(y_test, y_pred5))


# # Most accurate model is SVM

# In[41]:


lol= classifier.predict([[1,2,3,1,2,2,1,1
                          ,2,1,1,1]])
print(lol)


# In[42]:


lol= classifier.predict([[2,3,2,2,2,2,2,3,2,2,3,2]])
print(lol)


# In[43]:


lol= classifier.predict([[1,1,1,1,1,1,1,1,1,1,1,1]])
print(lol)


# In[44]:


lol= classifier.predict([[4,4,4,4,4,4,4,4,4,4,4,4]])
print(lol)

