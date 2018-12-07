from gtts import gTTS
import phrases

# intros
gTTS("Hi Minh-An! What would you like to do today?").save(phrases.intro)
gTTS("Is there anything else you would like to do?").save(phrases.prompt)
gTTS("Boldie, the bolder").save('recordings/jingle.mp3')


# recording
gTTS("Make sure everyone around you has consented to being recorded. \
	Would you like to continue?").save(phrases.pre_recording)
gTTS("Say stop recording to end the recording session. \
	Now recording.").save(phrases.start_recording)
gTTS("Recording ended. Would you like to save?").save(phrases.stop_recording)
gTTS("What would you like to name your recording?").save(phrases.name_recording)
gTTS("What skill were you practicing?").save(phrases.skill_recording)
gTTS("You are currently in recording mode.").save(phrases.recording_mode)
gTTS("Would you like to play, set goals, or delete the recording?").save(phrases.recording_options)

# --- does not yet exist. would you like to add it to your skills?

# search
gTTS("Say a skill, recording name, or keyword to search.").\
save('recordings/search_prompt.mp3')
gTTS("Select a recording to play it back.").save(phrases.select_recording)
gTTS("You are currently in search mode.").save(phrases.search_mode)

#practice
gTTS("Name a skill you would like to practice, or say list skills \
	to get a list of skills you're currently working on.").save(phrases.practice_prompt)
gTTS("You are currently in practice mode.").save(phrases.practice_mode)

# help
gTTS('Say start recording to start a new recording, \
	search to search for a recording, or practice \
	to practice a skill').save(phrases.help_prompt)
gTTS("Sorry, I didn't quite get that. please try again").save(phrases.try_again)
gTTS("Say stop recording to end the recording.").save(phrases.stop_help)
gTTS("Syncing earpiece with phone. Now synced").save(phrases.sync)

#delete
gTTS("Are you sure you would like to delete?").save(phrases.delete_recording)

# goodbye
gTTS("Have a nice day, Minh-An!").save(phrases.sign_off)
