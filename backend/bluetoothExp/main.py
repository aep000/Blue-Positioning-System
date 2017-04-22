from flask import Flask, render_template
app = Flask(__name__)
from sklearn.neighbors import KNeighborsClassifier
import numpy as np
import urllib2
import track
import pickle
import os

#clf= pickle.load(open("model.pkl"))
clf = KNeighborsClassifier()
def train(X,y):
	clf.fit(X,y)
	os.remove("model.pkl")
	output = open('model.pkl', 'wb')
	pickle.dump(clf, output)
X =[]
y=[]
nodes = ["http://10.0.0.25:5000/","http://10.0.0.109:5000/"]
def store(out):
	data = [track.getStrength()]
	for node in nodes:
		f = urllib2.urlopen(node)
        	nodeData=f.read()
		data.append(int(nodeData))
	X.append(data)
	y.append(out)


@app.route('/foyer')
def foyer():
	store("foyer")
	return "foyer"

@app.route('/dinningRoom')
def dinningRoom():
	store("dinningRoom")
	return "dinningRoom"

@app.route('/office')
def office():
	store("office")
	return "office"

@app.route('/kitchen')
def kitchen():
        store("kitchen")
        return "kitchen"

@app.route('/tv')
def tv():
        store("tv")
        return "tv"

@app.route('/')
def main():
        rooms = ["tv","office","kitchen","dinningRoom","foyer"]
	val = ''
	for room in rooms:
		val+='<a href="/'+room+'">'+room+'</a><br>'
        return val

@app.route('/train')
def trainURL():
        train(X,y)
        return "trained"

@app.route('/predict')
def predict():
	X = [track.getStrength()]
	for node in nodes:
		f = urllib2.urlopen(node)
        	nodeData=f.read()
		X.append(int(nodeData))
	return str(clf.predict(X))
	 
if __name__ == '__main__':
	app.run(debug=True, host='0.0.0.0')
