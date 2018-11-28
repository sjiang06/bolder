import speech_recognition as sr
from gtts import gTTS
import pygame
from projectUtils import *
import phrases


def getCommand():
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
            phrases.skills[skill].append(name)
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
    command = getCommand()
    if command.lower() == 'yes':
        playAudio(phrases.start_recording)
        playAudio('recordings/blooper-sound.mp3')
    elif command.lower() == 'no':
        return
    elif command.lower() == 'current_mode':
        playAudio(phrases.recording_mode)
        return
    elif command.lower() == 'back':
        return
    saveRecording()

def practice(goal):
    sayPractice(goal)
    playAudio(phrases.practice_skill)

def playRecording(name):
    gTTS("Now playing " + name.lower() + ".").save(phrases.play_recording)
    playAudio(phrases.play_recording)
    listStruggle(name.lower())
    playAudio(phrases.list_struggle)
    command = getCommand()
    if command.lower() == 'yes':
        practice(phrases.recordings[name.lower()])
    elif command.lower() == 'back':
        return
    else:
        playAudio(phrases.try_again)


def selectRecording(command):
    listRecordings(command.lower())
    playAudio(phrases.list_recordings)
    name = getCommand()
    if name.lower() in phrases.skills[command.lower()]:
        playRecording(name.lower())
    elif name.lower() == 'back':
        return
    else:
        playAudio(phrases.try_again)

def search():
    playAudio(phrases.search_prompt)
    command = getCommand()
    if command.lower() in phrases.skills:
        selectRecording(command)
    elif command.lower() in phrases.recordings:
        playRecording(command.lower())
    elif command.lower() == 'list skills' or command.lower() == 'list options':
        listSkills()
        playAudio(phrases.list_skills)
        search()
    elif command.lower() == 'list recordings':
        listAllRecordings()
        playAudio(phrases.all_recordings)
        search()
    elif command.lower() == 'current_mode':
        playAudio(phrases.search_mode)
    elif command.lower() == 'back':
        return
    else:
        playAudio(phrases.try_again)

def getPracticeSkill(command):
    if command is None:
        playAudio(phrases.practice_prompt)
        command = getCommand()
    if command.lower() in phrases.skills:
        listAllStruggles(command.lower())
        playAudio(phrases.all_struggles)
        goal = getCommand()
        if goal in phrases.goals:
            practice(goal)
        else:
            playAudio(phrases.try_again)
    elif command.lower() == 'list skills':
        listSkills()
        playAudio(phrases.list_skills)
        command = getCommand()
        getPracticeSkill(command.lower())
    elif command.lower() == 'current mode':
        playAudio(phrases.practice_mode)
    elif command.lower() == 'back':
        return
    else:
        playAudio(phrases.try_again)

listSkills()
endSession = False
playAudio(phrases.sync)
playAudio(phrases.intro)
while not endSession:
    command = getCommand()
    while not command:
        playAudio(phrases.try_again)
        command = getCommand()
    if command.lower() == 'start recording':
        makeRecording()
    elif command.lower() == 'search':
        search()
    elif command.lower() == 'practice':
        getPracticeSkill(None)
    elif command.lower() == 'help' or command.lower() == 'list options':
        playAudio(phrases.help_prompt)
    elif command.lower() == 'no' or command.lower() == 'goodbye':
        playAudio(phrases.sign_off)
        endSession = True
    else: 
        playAudio(phrases.try_again)
    if not endSession: playAudio(phrases.prompt)

