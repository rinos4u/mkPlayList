var fso  = new ActiveXObject("Scripting.FileSystemObject");
var strm = new ActiveXObject("ADODB.Stream");
strm.type    = 2; // text
strm.charset = "UTF-8";
strm.open();
var num = 0;

function enumMusicFiles(dir, head) {
	var dir2 = fso.GetFolder(dir);
	for (var e = new Enumerator(dir2.Files); !e.atEnd(); e.moveNext()) {
		var path = e.item().Path;
		var suf  = path.substr(path.length - 4).toLowerCase();
		if (suf == '.mp3') { // TODO: add wma, aac, etc...
			strm.WriteText(head + path.substr(3).replace('\\', '/') + "\n");
			num++;
		}
	}
	for (e = new Enumerator(dir2.SubFolders); !e.atEnd(); e.moveNext()) {
		enumMusicFiles(e.item(), head);
	}
}

for (var drvs = new Enumerator(fso.Drives); !drvs.atEnd(); drvs.moveNext()) {
	var drv = drvs.item().DriveLetter;
	if (!fso.GetDrive(drv).IsReady) continue;
	var headfile = drv + ":\\playlist.txt"
	if (!fso.FileExists(headfile)) continue;
	
	var head = fso.OpenTextFile(headfile).ReadLine();
    enumMusicFiles(drv+ ":", head);
}

strm.SaveToFile("all.m3u8", 2);
strm.close();
WScript.echo("Created all.m3u8: " + num + "files");
