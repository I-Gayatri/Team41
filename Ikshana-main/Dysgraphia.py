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


df = pd.read_csv('Aug_Dysgraphia.csv')


# In[4]:


df.head()


# In[5]:


df.describe()


# In[6]:


df.columns


# In[7]:


df1 = df.drop(["Timestamp", "Name", "Gender", "Grade"], axis=1)


# In[8]:


df1


# In[9]:


df1.empty


# In[10]:


from sklearn.utils import shuffle
df1 = shuffle(df1)
df1


# In[11]:


Score = df1["Score"]

Score.astype(int)
print(Score)


# In[12]:


df1['Label'].value_counts()


# In[13]:


y=df1.Label
x=df1.iloc[:,[1,2,3,4,5,6,7,8,9,10,11,12]]

print(x)


# In[14]:


df1.columns


# In[15]:


result = pd.pivot_table(data=df1, index='Label', columns='Score',values='Age')
#print(result)
#create heat map 
sns.heatmap(result, annot=True, cmap = 'RdYlGn', center=1)
plt.show() 


# In[16]:


x_train, x_test, y_train, y_test = train_test_split(x, y,
                                   random_state=104, 
                                   test_size=0.3, 
                                   shuffle=True)


# ## Random Forest

# In[17]:


#Fitting RF classifier to the training set  
from sklearn.ensemble import RandomForestClassifier  
classifier= RandomForestClassifier(n_estimators= 10, criterion="entropy")  
classifier.fit(x_train, y_train)  


# In[18]:


classifier.classes_


# In[19]:


#Predicting the test set result  
y_pred1 = classifier.predict(x_test)  
y_pred1


# In[20]:


#Creating the Confusion matrix  
from sklearn.metrics import confusion_matrix  
cm1= confusion_matrix(y_test, y_pred1) 
cm1


# In[21]:


plt.figure(figsize=(10,6))
fx=sns.heatmap(confusion_matrix(y_test,y_pred1), annot=True, fmt=".2f",cmap="GnBu")
fx.set_title('Confusion Matrix \n');
fx.set_xlabel('\n Predicted Values\n')
fx.set_ylabel('Actual Values\n');
fx.xaxis.set_ticklabels(['Has Dysgraphia', 'No Dysgraphia'])
fx.yaxis.set_ticklabels(['Has Dysgraphia', 'No Dysgraphia'])
plt.show()


# In[22]:


from sklearn.metrics import classification_report
print(classification_report(y_test, y_pred1))


# In[23]:


pd.Series(y_pred1)


# In[24]:


y_pred1[2]


# ## K-NN

# In[25]:


#Fitting K-NN classifier to the training set  
from sklearn.neighbors import KNeighborsClassifier  
classifier= KNeighborsClassifier(n_neighbors=5, metric='minkowski', p=2 )  
classifier.fit(x_train, y_train)  


# In[26]:


#Predicting the test set result  
y_pred2 = classifier.predict(x_test)  
y_pred2


# In[27]:


#Creating the Confusion matrix  
from sklearn.metrics import confusion_matrix  
cm2= confusion_matrix(y_test, y_pred2) 
cm2


# In[28]:


plt.figure(figsize=(10,6))
fx=sns.heatmap(confusion_matrix(y_test,y_pred2), annot=True, fmt=".2f",cmap="GnBu")
fx.set_title('Confusion Matrix \n');
fx.set_xlabel('\n Predicted Values\n')
fx.set_ylabel('Actual Values\n');
fx.xaxis.set_ticklabels(['Has Dysgraphia', 'No Dysgraphia'])
fx.yaxis.set_ticklabels(['Has Dysgraphia', 'No Dysgraphia'])
plt.show()


# In[29]:


from sklearn.metrics import classification_report
print(classification_report(y_test, y_pred2))


# ## Decision Tree Classifier

# In[30]:


#Fitting Decision Tree classifier to the training set  
from sklearn.tree import DecisionTreeClassifier  
classifier= DecisionTreeClassifier(criterion='entropy', random_state=0)  
classifier.fit(x_train, y_train)  


# In[31]:


#Predicting the test set result  
y_pred3= classifier.predict(x_test)  
y_pred3

pickle.dump(classifier, open('dysgraphia_model.pkl','wb'))
dysgraphia_model=pickle.load(open('dysgraphia_model.pkl','rb')) 


# In[32]:


#Creating the Confusion matrix  
from sklearn.metrics import confusion_matrix  
cm3= confusion_matrix(y_test, y_pred3) 
cm3


# In[33]:


plt.figure(figsize=(10,6))
fx=sns.heatmap(confusion_matrix(y_test,y_pred3), annot=True, fmt=".2f",cmap="GnBu")
fx.set_title('Confusion Matrix \n');
fx.set_xlabel('\n Predicted Values\n')
fx.set_ylabel('Actual Values\n');
fx.xaxis.set_ticklabels(['Has Dysgraphia', 'No Dysgraphia'])
fx.yaxis.set_ticklabels(['Has Dysgraphia', 'No Dysgraphia'])
plt.show()


# In[34]:


from sklearn.metrics import classification_report
print(classification_report(y_test, y_pred3))


# ## SVM 

# In[35]:


from sklearn.svm import SVC # "Support vector classifier"  
classifier = SVC(kernel='linear', random_state=0)  
classifier.fit(x_train, y_train) 


# In[36]:


#Predicting the test set result  
y_pred4= classifier.predict(x_test)  
y_pred4


# In[37]:


#Creating the Confusion matrix  
from sklearn.metrics import confusion_matrix  
cm4= confusion_matrix(y_test, y_pred4)
cm4


# In[38]:


plt.figure(figsize=(10,6))
fx=sns.heatmap(confusion_matrix(y_test,y_pred4), annot=True, fmt=".2f",cmap="GnBu")
fx.set_title('Confusion Matrix \n');
fx.set_xlabel('\n Predicted Values\n')
fx.set_ylabel('Actual Values\n');
fx.xaxis.set_ticklabels(['Has Dysgraphia', 'No Dysgraphia'])
fx.yaxis.set_ticklabels(['Has Dysgraphia', 'No Dysgraphia'])
plt.show()


# In[39]:


from sklearn.metrics import classification_report
print(classification_report(y_test, y_pred4))


# ## Naive Bayes

# In[40]:


# Fitting Naive Bayes to the Training set  
from sklearn.naive_bayes import GaussianNB  
classifier = GaussianNB()  
classifier.fit(x_train, y_train)


# In[41]:


# Predicting the Test set results  
y_pred5 = classifier.predict(x_test) 
y_pred5


# In[42]:


# Making the Confusion Matrix  
from sklearn.metrics import confusion_matrix  
cm5 = confusion_matrix(y_test, y_pred5)  
cm5


# In[43]:


plt.figure(figsize=(10,6))
fx=sns.heatmap(confusion_matrix(y_test,y_pred5), annot=True, fmt=".2f",cmap="GnBu")
fx.set_title('Confusion Matrix \n');
fx.set_xlabel('\n Predicted Values\n')
fx.set_ylabel('Actual Values\n');
fx.xaxis.set_ticklabels(['Has Dysgraphia', 'No Dysgraphia'])
fx.yaxis.set_ticklabels(['Has Dysgraphia', 'No Dysgraphia'])
plt.show()


# In[44]:


from sklearn.metrics import classification_report
print(classification_report(y_test, y_pred5))


# # Most accurate model is decision tree 

# In[46]:


res= classifier.predict([[3,3,3,3,4,3,4,3,4,3,4,3]])
print(res)
#should be 'Has ADHD'


# In[47]:


res= classifier.predict([[2,1,1,1,1,1,1,1,2,2,1,2]])
print(res)
#should be 'No ADHD'


# In[48]:


res= classifier.predict([[2,2,2,2,3,2,2,2,2,3,2,2]])
print(res)
#should be 'no ADHD'


# In[49]:


res= classifier.predict([[4,4,4,4,4,4,4,4,4,4,4,4]])
print(res)


# In[50]:


res= classifier.predict([[1,1,1,1,1,1,1,1,1,1,1,1]])
print(res)

