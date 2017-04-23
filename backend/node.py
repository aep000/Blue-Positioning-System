import track
import urllib2
import time
while True:
	nodeId = 0
	nodeUrl ="https://mysterious-lake-7602.herokuapp.com/updateNodeData?node="+str(nodeId)+"&rssi="+str(track.getStrength("00:34:DA:F4:02:6E"))
	f = urllib2.urlopen(nodeUrl)
	time.sleep(.5)
