
# Common Errors

These are errors you might come across when running the bot, if there are any errors not included in this page, please let me know.

### ffmpeg/avconv not found

As a part of the Music category, it requires ffmpeg, to fix this issue, run the command `npm install ffmpeg-static`.
If you still have an issues after this, let me know

### Can't install enmap
If you are receiving an error saying you can't install quick.db, you might need to install windows build tools.

I am only familiar with using windows so if anyone else knows how to do so using mac/linux, let me know ;)

- Open Windows Powershell as Administrator, and `cd` to your directory. 
- Type the command `npm install windows-build-tools --vs2015 --global`

Afer this, you should be able to run the bot/install enmap

### better_sqlite3.node is not a valid Win32

I'm not too sure what's the cause for this error. 
However running the command `npm rebuild` to uninstall all packages and to install them again seems to do the trick for me.

### Error: Could not locate the bindings file. Tried: . . .

There's probably a more efficient way to do this, but the way I do this is:

- Open Windows Powershell as Administrator, and `cd` to your directory. 
- Type the command `npm install windows-build-tools --vs2015 --global`

Yea.... Same thing as installing enmap 😅

### Cannot find module <module_name>

Simple, install the module using `npm install <module_name>`

### Error: spawn ffmpeg ENOENT

### nodemon.ps1 cannot be loaded because running scripts is disabled on this system.

This one, it's because the windows default system disables untrusted scrypts.
Only do this if you're SURE of changing it.

- Open Windows Powershell as Administrator, and you'd see something like `PS C:\windows\system32`.
- Type the following `Set-ExecutionPolicy -ExecutionPolicy Unrestricted` and `Y` after.

Then try nodemon again and it will work!

**Other errors will be supported, let me know by DM'ing me on Discord: Raccoon#7867**
