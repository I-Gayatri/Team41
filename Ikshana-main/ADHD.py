#!/usr/bin/env python
# coding: utf-8

# In[98]:


#!pip install scikit-learn
#!pip install matplotlib
#!pip install pandas
#!pip install numpy 
#!pip install seaborn 
#!pip install pickle-mixin


# In[99]:


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


# In[100]:


df = pd.read_csv('Aug_ADHD.csv')


# In[101]:


df.head()


# In[102]:


df.describe()


# In[103]:


df.columns


# In[104]:


df1 = df.drop(["Timestamp", "Name", "Gender", "Grade"], axis=1)


# In[105]:


df1


# In[106]:


df1.empty


# In[107]:


from sklearn.utils import shuffle
df1 = shuffle(df1)
df1


# In[108]:


Score = df1["Score"]

Score.astype(int)
print(Score)


# In[109]:


df1['Label'].value_counts()


# In[110]:


y=df1.Label
x=df1.iloc[:,[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]]

print(x)


# In[111]:


df1.columns


# In[112]:


result = pd.pivot_table(data=df1, index='Label', columns='Score',values='Age')
#print(result)
#create heat map 
sns.heatmap(result, annot=True, cmap = 'RdYlGn', center=1)
plt.show() 


# In[113]:


x_train, x_test, y_train, y_test = train_test_split(x, y,
                                   random_state=104, 
                                   test_size=0.3, 
                                   shuffle=True)


# ## Random Forest

# In[114]:


#Fitting RF classifier to the training set  
from sklearn.ensemble import RandomForestClassifier  
classifier= RandomForestClassifier(n_estimators= 10, criterion="entropy")  
classifier.fit(x_train, y_train)  


# In[115]:


classifier.classes_


# In[116]:


#Predicting the test set result  
y_pred1 = classifier.predict(x_test)  
y_pred1




# In[117]:


#Creating the Confusion matrix  
from sklearn.metrics import confusion_matrix  
cm1= confusion_matrix(y_test, y_pred1) 
cm1


# In[118]:


plt.figure(figsize=(10,6))
fx=sns.heatmap(confusion_matrix(y_test,y_pred1), annot=True, fmt=".2f",cmap="GnBu")
fx.set_title('Confusion Matrix \n');
fx.set_xlabel('\n Predicted Values\n')
fx.set_ylabel('Actual Values\n');
fx.xaxis.set_ticklabels(['Has ADHD', 'No ADHD'])
fx.yaxis.set_ticklabels(['Has ADHD', 'No ADHD'])
plt.show()


# In[119]:


from sklearn.metrics import classification_report
print(classification_report(y_test, y_pred1))


# In[120]:


pd.Series(y_pred1)


# In[121]:


y_pred1[2]


# ## K-NN

# In[122]:


#Fitting K-NN classifier to the training set  
from sklearn.neighbors import KNeighborsClassifier  
classifier= KNeighborsClassifier(n_neighbors=5, metric='minkowski', p=2 )  
classifier.fit(x_train, y_train)  


# In[123]:


#Predicting the test set result  
y_pred2 = classifier.predict(x_test)  
y_pred2


# In[124]:


#Creating the Confusion matrix  
from sklearn.metrics import confusion_matrix  
cm2= confusion_matrix(y_test, y_pred2) 
cm2


# In[125]:


plt.figure(figsize=(10,6))
fx=sns.heatmap(confusion_matrix(y_test,y_pred2), annot=True, fmt=".2f",cmap="GnBu")
fx.set_title('Confusion Matrix \n');
fx.set_xlabel('\n Predicted Values\n')
fx.set_ylabel('Actual Values\n');
fx.xaxis.set_ticklabels(['Has ADHD', 'No ADHD'])
fx.yaxis.set_ticklabels(['Has ADHD', 'No ADHD'])
plt.show()


# In[126]:


from sklearn.metrics import classification_report
print(classification_report(y_test, y_pred2))


# ## Decision Tree Classifier

# In[127]:


#Fitting Decision Tree classifier to the training set  
from sklearn.tree import DecisionTreeClassifier  
classifier= DecisionTreeClassifier(criterion='entropy', random_state=0)  
classifier.fit(x_train, y_train)  


# In[128]:


#Predicting the test set result  
y_pred3= classifier.predict(x_test)  
y_pred3


# In[129]:


#Creating the Confusion matrix  
from sklearn.metrics import confusion_matrix  
cm3= confusion_matrix(y_test, y_pred3) 
cm3


# In[130]:


plt.figure(figsize=(10,6))
fx=sns.heatmap(confusion_matrix(y_test,y_pred3), annot=True, fmt=".2f",cmap="GnBu")
fx.set_title('Confusion Matrix \n');
fx.set_xlabel('\n Predicted Values\n')
fx.set_ylabel('Actual Values\n');
fx.xaxis.set_ticklabels(['Has ADHD', 'No ADHD'])
fx.yaxis.set_ticklabels(['Has ADHD', 'No ADHD'])
plt.show()


# In[131]:


from sklearn.metrics import classification_report
print(classification_report(y_test, y_pred3))


# ## SVM 

# In[132]:


from sklearn.svm import SVC # "Support vector classifier"  
classifier = SVC(kernel='linear', random_state=0)  
classifier.fit(x_train, y_train) 


# In[133]:


#Predicting the test set result  
y_pred4= classifier.predict(x_test)  
y_pred4


# In[134]:


#Creating the Confusion matrix  
from sklearn.metrics import confusion_matrix  
cm4= confusion_matrix(y_test, y_pred4)
cm4


# In[135]:


plt.figure(figsize=(10,6))
fx=sns.heatmap(confusion_matrix(y_test,y_pred4), annot=True, fmt=".2f",cmap="GnBu")
fx.set_title('Confusion Matrix \n');
fx.set_xlabel('\n Predicted Values\n')
fx.set_ylabel('Actual Values\n');
fx.xaxis.set_ticklabels(['Has ADHD','No ADHD'])
fx.yaxis.set_ticklabels(['Has ADHD','No ADHD'])
plt.show()


# In[136]:


from sklearn.metrics import classification_report
print(classification_report(y_test, y_pred4))


# ## Naive Bayes

# In[137]:


# Fitting Naive Bayes to the Training set  
from sklearn.naive_bayes import GaussianNB  
classifier = GaussianNB()  
classifier.fit(x_train, y_train)


# In[138]:


# Predicting the Test set results  
y_pred5 = classifier.predict(x_test) 
y_pred5

pickle.dump(classifier, open('adhd_model.pkl','wb'))
adhd_model=pickle.load(open('adhd_model.pkl','rb')) 


# In[139]:


# Making the Confusion Matrix  
from sklearn.metrics import confusion_matrix  
cm5 = confusion_matrix(y_test, y_pred5)  
cm5


# In[140]:


plt.figure(figsize=(10,6))
fx=sns.heatmap(confusion_matrix(y_test,y_pred5), annot=True, fmt=".2f",cmap="GnBu")
fx.set_title('Confusion Matrix \n');
fx.set_xlabel('\n Predicted Values\n')
fx.set_ylabel('Actual Values\n');
fx.xaxis.set_ticklabels(['Has ADHD','No ADHD'])
fx.yaxis.set_ticklabels(['Has ADHD','No ADHD'])
plt.show()


# In[141]:


from sklearn.metrics import classification_report
print(classification_report(y_test, y_pred5))


# # Most accurate model is naive bayes 
# In[143]:


res= classifier.predict([[3,3,3,3,4,3,4,3,4,3,4,3,3,3,4,4,4,4,3,4,3,3,4,4,4,3,4,4,4,3]])
print(res)
#should be 'Has ADHD'


# In[144]:


res= classifier.predict([[2,1,1,1,1,1,1,1,2,2,1,2,2,1,2,2,2,1,2,2,1,2,2,2,1,2,2,1,1,2]])
print(res)
#should be 'No ADHD'


# In[145]:


res= classifier.predict([[2,2,2,2,3,2,2,2,2,3,2,2,2,2,1,3,2,2,1,2,2,1,2,2,2,1,2,2,2,2]])
print(res)
#should be 'no ADHD'


# In[147]:


res= classifier.predict([[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]])
print(res)


# In[146]:


res= classifier.predict([[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]])
print(res)


# In[ ]:




