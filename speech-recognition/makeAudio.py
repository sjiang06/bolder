from gtts import gTTS

# intros
gTTS("Hi Minh-An! What would you like to do today?").save('recordings/intro.mp3')
gTTS("Is there anything else you would like to do?").save('recordings/prompt.mp3')

# recording
gTTS("Make sure everyone around you has consented to being recorded. \
	Would you like to continue?").save('recordings/recording_warning.mp3')
gTTS("Now recording.").save('recordings/start_recording.mp3')
gTTS("Recording ended. Would you like to save?").save('recordings/end_recording.mp3')
gTTS("What would you like to name your recording?").save('recordings/name_recording.mp3')
gTTS("What skill were you practicing?").save('recordings/skill_recording.mp3')
# --- does not yet exist. would you like to add it to your skills?

# search
gTTS("Say a skill, recording name, or keyword to search.").\
save('recordings/search_prompt.mp3')

#practice
gTTS("Say a skill to practice.").save('recordings/practice_prompt.mp3')

# help
gTTS('Say start recording to start a new recording, \
	search to search for a recording, or practice \
	to practice a skill').save('recordings/help_prompt.mp3')
gTTS("Sorry, I didn't quite get that. please try again").save('recordings/try_again.mp3')
gTTS("Say stop recording to end the recording.").save('recordings/stop_help.mp3')