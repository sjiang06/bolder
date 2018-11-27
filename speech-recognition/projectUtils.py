import phrases
from gtts import gTTS
import speech_recognition as sr
import pygame

r = sr.Recognizer()
r.pause_threshold = 0.5
r.dynamic_energy_threshold_ratio = 1.8
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
	gTTS("You struggled with " + phrases.recordings[recording.lower()] + " in this \
		recording. Would you like to practice?").save(phrases.list_struggle)

def listAllStruggles(skill):
	struggles = ''
	recordings = phrases.skills[skill.lower()]
	for r in recordings:
		struggles += phrases.recordings[r.lower()] + ', '
	gTTS('Here are the goals listed under ' + skill + ': ' + struggles + '. \
		Say a goal to practice.').save(phrases.all_struggles) 

def listAllRecordings():
	recordingString = ''
	for skill in phrases.skills:
		recordings = phrases.skills[skill]
		for r in recordings:
			recordingString += r + ', '
	gTTS('Here is a list of all your recordings: ' + recordingString).save(phrases.all_recordings)

def sayPractice(goal):
	gTTS('Now practicing ' + goal + '.').save(phrases.practice_skill)

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
	    return text
	except sr.UnknownValueError:
	    print("Google Speech Recognition could not understand audio")
	except sr.RequestError as e:
	    print("Could not request results from Google Speech Recognition service; {0}".format(e))
  	return False

def playAudio(filename):
	pygame.mixer.music.load(filename)
	pygame.mixer.music.play()
	while pygame.mixer.music.get_busy():
		pygame.time.delay(100)

