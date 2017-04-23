import track
import urllib2
import time
while True:
	print "hi"
	nodeId = 0
	nodeUrl ="https://mysterious-lake-7602.herokuapp.com/updateNodeData?node="+str(nodeId)+"&rssi="+str(track.getStrength())
	f = urllib2.urlopen(nodeUrl)
	time.sleep(.5)
