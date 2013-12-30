mkPlayList
==========

Simple windows script to make a full playlist of audio files in local drives.

This script searchs the audio(MP3) files in the specified drive, and write it to the playlist file (all.m3u8).
This script is for a portable audio player. (I use it for the Sansa + RockBox.)


Usage:

1. Create a playlist.txt file on the root directory of each storage device.
   (This script only search files in the specified drives which has playlist.txt on root directory.)

2. Write a drive head path to the each playlist.txt file.
   (If, target storage device is internal storage, write just CR+LF.
    otherwise, write storage path for target audio player.
    i.e. /<sdcard1>)

3. Run the mkPlayList.js.
   This script makes the all.m3u8 file, and shows the number of item listed.
