import time
import subprocess
def getStrength(blueID="B8:53:AC:64:5E:59"):
	bashCommand = "hcitool rssi "+blueID
	process = subprocess.Popen(bashCommand.split(), stdout=subprocess.PIPE)
	output, error = process.communicate()
	print output
	if(int(output.split(":")[1][1:])==0):
		return 0
	return int(output.split(":")[1][2:])
getStrength()
'''
while True:
	val = getStrength()
	if (val<20):
		print "basement"
	if (val>20 and val<30):
		print "main"
	if (val>30):
		print "upstairs"
	time.sleep(5)
'''
