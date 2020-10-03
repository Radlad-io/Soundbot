# SoundBot
A customizable Discord soundboard generator.

![Image](https://imgur.com/YTQ47pc.jpg)


### Enviorment
1. Nodejs & NPM
      * You can download the Nodejs installer [Here](https://nodejs.org/)
      * To verify that both Nodejs & NPM are installed open a terminal / cmd window and type the following commands seperately
          * node -v   (Should return a version number of v12.18.2 or higher) 
          * npm -v    (Should return a version number of 6.14.5 or higher)
2. FFmpeg
      * You can download the FFmpeg installer [Here](https://ffmpeg.org/)
      * FFmpeg needs to be added to your opperating systems enviorment variable. [Here](https://windowsloop.com/install-ffmpeg-windows-10/) are instructions on how to do that.
      * Once FFmpeg has been added to your systems enviorment variables, restart your computer and run the following command in terminal / cmd window.
          * ffmpeg   (Should return 'ffmpeg version git-2020-08-24-3477feb' or something similar)

### Install
3. Download this repository, unzip it and move the soundbot folder to your Documents folder or similar location on your hard drive.
4. Using a terminal or cmd window navigate to the Soundbot folder.
      * cd ~/documents/soundbot
5. Install all of Soundbots dependancies by running the following command.
      * npm install
      
### Configuring the bot
6. You'll need to make your own Discord bot by visiting [Discord's develepment page](https://discord.com/developers/applications)
      * First thing you'll need to do is create a new bot.
            ![Image](https://imgur.com/05Y8OWG.jpg)
      * Name the bot whatever you like, their your oats.
            ![Image](https://imgur.com/HLM8Vtu.jpg)
      * Once you bot has been created navigate to its Bot menu.
            ![Image](https://imgur.com/xvT2gsR.jpg)
      * Here you'll find your bot token. You'll need this later.
            ![Image](https://imgur.com/24m3BFC.jpg)
      * Now we need to give your bot access to you discord channel. So go to the OAuth2 menu
            ![Image](https://imgur.com/QlKRFBu.jpg)
      * Under the Scope menu check off bot. Then copy the scope link and go to that address in a new window. 
            ![Image](https://imgur.com/LyYOflg.jpg)
      * Using the add bot drop down, select the Discord server you wish to add you bot to. 
            ![Image](https://imgur.com/nKiEhTv.jpg)
            * Note: You need to be an admin of the server to do this. 
            
7. In order to get some information that your bot needs you'll need to enable developermode in your discord server. In Discord navigate to Settings > Appearence and turn on Developer Mode. 
![Image](https://imgur.com/2u3yqc6.jpg)

8. The final step is creating a config file where the bot will look for specific informaiton about you particular bot. 
  * Using a code editor or Notepad, create a new file named config.js in the /Documents/Soundbot/src folder.
  * Copy and paste the following code into the your code editor / notepad.

```javascript
const Config = {
    PREFIX: '!',
    TOKEN: '<YOUR TOKEN HERE>',
    OWNER: '<YOUR OWNER ID HERE>',
    CHANNEL: '<THE VOICE CHANNEL ID WHERE SOUNDBOT WILL PLAY SOUNDS>',
    GIFS: {
        sample: 'https://media.tenor.com/images/91689fd1055161956850f8e8ecdb9a43/tenor.gif'
    }
}

module.exports = Config;
```

  * You'll need to replace information in this file with your discord information.
      * PREFIX: Is what goes in from of a message to let the bot know you are addressing it. 
      * TOKEN: Back on the Discord Developer page copy your specific token and paste it between the ''. 
      * OWNER: This is you Discord ID. This way the bot knows who the boss is. You can find your ID by right clicking on your name is Discord.
      ![Image](https://imgur.com/8p6myST.jpg)
      * CHANNEL: This is the voice channel where your bot will play its sounds. Right click the voice channel and copying it's ID.
      ![Image](https://imgur.com/hWcCsEI.jpg)
  * Make sure to save the file.
         
### Running the bot

1. Open a new terminal and or windows cmd window.
2. Navigate to your bot folder.
    * cd ~/documents/soundbot
3. The following command runs the bot
    * npm start   (It should return 'Soundbot##### has logged in.')
4. Stop the both by typing ctrl + c.
    
### Using the bot
Type the following into your discord chat:
    * !m sample
Your bot should send an embed with all the sounds in the /soundbot/assets/sample folder. The it will react to the embed with emojis that correspond to a specific sound. Add your reaction to one of the emojis and the corresponding sound will play over you designated voice channel.

### Creating new soundboards
Creating new soundboads is easy. All you need to do is create a folder with would and add a GIF to the config.js file you created earlier. Lets make a new one for Creed Bratton from the hit NBC show 'The Office'.
1. Create a new folder namde 'creed' in the /soundbot/assets folder.
2. Grab your .mp3 sound file and rename it using the following structure 'SoundBoardName_SoundName_A description of the sound_CorresondingEmoji'
      * A sample using a Creed sound would look like this, creed_cartwheel_I want to do one perfect cartwheel_🤸
3. Place that sound file in you /soundbot/assets/creed folder.
4. Find a GIF or image URL online for your soundboards thumbnail.

![Image](https://media.tenor.com/images/77719162982f2ee45f2db9dfaa2515c6/tenor.gif)

5. Add the new image to the config.js file by opening that in the notepad app and adding the image to GIFS object, like so:
```javascript
        GIFS: {
        sample: 'https://media.tenor.com/images/91689fd1055161956850f8e8ecdb9a43/tenor.gif',
        creed: 'https://media.tenor.com/images/77719162982f2ee45f2db9dfaa2515c6/tenor.gif'
    }
```
3. Stop the bot if it's running and restart it using the npm start command.
4. To access you new soundboard type '!m creed' into discord and your bot should respond with a new embed.

      
      
      
