This is the speech recognition code for the BOLDer earpiece.

Before running, you must install the following libraries:

Speech Recognition: pip install speechrecognition
PyAudio: homebrew install portaudio, then pip install pyaudio
Google API Client Library: pip install google-api-python-client
gtts: pip install gtts
PyGame: pip install pygame

To run the voice interaction, type python audio.py

You can change the phrases Boldie says by changing makeAudio.py. Run
the script again to update the recordings.

HOW TO INTERACT WITH BOLDIE
1. Say 'List options' in main state and search state to get a list of commands you can say.
2. Say 'Back' to get to the previous state.

FEATURES
1. Ability to delete and reset goals of recordings in the search state.
2. Help navigation when you say 'list options' in main and search state.
3. Prompts for easy navigation when what needs to be said isn't obvious.

LIMITATIONS
1. Does not actually record or play recordings.
2. Does not save states between uses.
3. Back is only able to be used when you first enter either recording, search, or practice state.
4. Voice detection is not the best; errors occur in loud spaces.

