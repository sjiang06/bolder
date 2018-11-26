import phrases
from gtts import gTTS
import speech_recognition as sr
import pygame

r = sr.Recognizer()
pygame.init()
pygame.mixer.init()

def listSkills():
	skillList = ''
	for i in range(len(phrases.skills.keys())):
		if i != 0: skillList += ", " + phrases.skills.keys()[i]
		else: skillList += phrases.skills.keys()[i]
	gTTS("Here are the skills you're currently working \
		on: " + skillList).save(phrases.list_skills)

def listRecordings(skill):
	recordingList = ''
	for r in phrases.skills[skill]:
		recordingList += r + ' '
	gTTS("Here are the recordings listed under " + \
		skill + ": " + recordingList).save(phrases.list_recordings)

def listStruggle(recording):
	gTTS("You struggled with " + phrases.recordings[recording] + " in this \
		recording. Would you like to practice?").save(phrases.list_struggle)

def select(obj):
	gTTS(obj + " selected.").save(phrases.select)

def getAudio():
    with sr.Microphone() as source:
        print("Say something!")
        audio = r.listen(source)

    # recognize speech using Google Speech Recognition
	try:
	    text = r.recognize_google(audio)
	    print("Google Speech Recognition thinks you said " + text)
	    print 'here'
	    return text
	except sr.UnknownValueError:
	    print("Google Speech Recognition could not understand audio")
	    return False
	except sr.RequestError as e:
	    print("Could not request results from Google Speech Recognition service; {0}".format(e))
	    return False

def playAudio(filename):
	pygame.mixer.music.load(filename)
	pygame.mixer.music.play()
	pygame.event.wait()

