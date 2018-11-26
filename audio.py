import speech_recognition as sr
from gtts import gTTS
import pygame
from projectUtils import *
import phrases


def getCommand():
    print 'getting recording'
    command = getAudio()
    while not command:
        playAudio(phrases.try_again)
        command = getAudio()
    return command

def saveRecording():
    command = getCommand()
    if command.lower() == 'stop recording':
        playAudio(phrases.stop_recording)
        save = getCommand()
        if save.lower() == 'no': return
        playAudio(phrases.name_recording)
        name = getCommand()
        playAudio(phrases.skill_recording)
        skill = getCommand()
        if skill in phrases.skills:
            phrases.skills[skill].append[name]
        else:
            phrases.skills[skill] = [name]
            listSkills()
        phrases.recordings[name] = 'projection'
        gTTS("Saving " + name + " under " + skill + ".").\
            save('recordings/save_recording.mp3')
        playAudio('recordings/save_recording.mp3')
    else:
        playAudio(phrases.stop_help)
        saveRecording()

def makeRecording():
    playAudio(phrases.pre_recording)
    print 'i am here'
    command = getCommand()
    if command.lower() == 'yes':
        playAudio(phrases.start_recording)
    elif command.lower() == 'no':
        return
    saveRecording()

def practice():
    print 'practicing!'

def playRecording(name):
    gTTS("Now playing " + name + ".").save(phrases.play_recording.mp3)
    playAudio(phrases.play_recording.mp3)
    listStruggle(name)
    playAudio(phrases.list_struggle)
    command = getCommand()
    if command.lower() == 'yes':
        practice()


def selectRecording(command):
    listRecordings(command)
    playAudio(phrases.list_recordings)
    name = getCommand()
    if name in phrases.skills[command]:
        playRecording(name)
    else:
        selectRecording()

def search():
    playAudio(phrases.search_prompt)
    command = getCommand()
    if command in phrases.skills:
        selectRecording(command)
    elif command in phrases.recordings:
        playRecording(name)

def practice():
    playAudio(phrases.practice_prompt)
    command = getCommand()
    if command in phrases.skills:
        print 'hello'
    elif command in phrases.recordings:
        print 'bye'
    elif command in phrases.goals:
        select(command)
        playAudio(phrases.select)

listSkills()
endSession = False
playAudio(phrases.intro)
while not endSession:
    command = getCommand()
    while not command:
        playAudio(phrases.try_again)
    if command.lower() == 'start recording':
        makeRecording()
    elif command.lower() == 'search':
        search()
    elif command.lower() == 'practice':
        practice()
    elif command.lower() == 'help':
        print 'hello'
    elif command.lower() == 'goodbye':
        endSession = True
    if not endSession: playAudio(phrases.prompt)

