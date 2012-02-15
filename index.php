<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
	<head>
		<title>Flash Player Version</title>
		<style type="text/css" media="screen">
			body
			{
 				font-family: Arial, sans-serif;
			}

			h1
			{
				margin: 0px;
			}

			img
			{
				border-width: 0px;
			}
		
			#version
			{
				font-size: 2em;
			}
			
			#other-credits-and-legal
			{
				font-size: 0.7em;
			}
			
			#platform
			{
				font-size: .9em;
			}
		</style>
		<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
		<script type="text/javascript" src="swfobject.js"></script>
		<script type="text/javascript" src="sniffer.js"></script>		
		<script type="text/javascript">
			// <![CDATA[

			
			var flashvars = {};
			var params = {};
			params.allowscriptaccess = "always";			
			var attributes = {};
			
			swfobject.embedSWF("version.swf", "swf", "1", "1", "8.0.0", false, flashvars, params, attributes);

			function versionInfo(ver)
			{
				google = '<a href = "http://google.com/search?hl=en&safe=off&q=%22flash+player%22+'+ver+'">Google results for Flash Player '+ver+'</a>';
				document.getElementById('version').innerHTML = ver;
				document.getElementById('google').innerHTML = google;
			}

			// ]]>
		</script>
	</head>
	<body>
		<h1>Your Flash Player version is</h1>
		<div id="swf"></div>
		<div id="version">Please enable JavaScript in your browser.</div>
		<div id="platform"></div>
		<?php
		
		    // is curl installed?
		    if (function_exists('curl_init'))
			{ 
			    // create a new curl resource
			    $ch = curl_init();

			    // set URL to download
			    curl_setopt($ch, CURLOPT_URL, 'http://get.adobe.com/flashplayer/');


			    // should curl return or print the data? true = return, false = print
			    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

			    // timeout in seconds
			    curl_setopt($ch, CURLOPT_TIMEOUT, 10);
				
				//
			    // Windows
			    //
			    curl_setopt($ch, CURLOPT_USERAGENT, "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.0.3) Gecko/2008092417 Firefox/3.0.3");
				$windows = curl_exec($ch);

				//
				// Linux
			    //
				curl_setopt($ch, CURLOPT_USERAGENT, "Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.3) Gecko/2008092510 Ubuntu/8.04 (hardy) Firefox/3.0.3");
				$linux = curl_exec($ch);
				
				//				
				// OS X
				//
				curl_setopt($ch, CURLOPT_USERAGENT, "Mozilla/5.0 (Macintosh; U; Intel Mac OS X; en-US; rv:1.8.1)");
				$osx = curl_exec($ch);
				

			    // close the curl resource, and free system resources
			    curl_close($ch);

				$hasWindowsVersion = preg_match('/Player version (.*?)</', $windows, &$windowsVersion);
				$hasLinuxVersion = preg_match('/Player version (.*?)</', $linux, &$linuxVersion);
				$hasOsxVersion = preg_match('/Player version (.*?)</', $osx, &$osxVersion);
				
				print '<h2>The latest Flash Player versions are</h2><ul>';
				print '<li>Linux: <a href="http://get.adobe.com/flashplayer/">'.$linuxVersion[1].'</a></li>';
				print '<li>OS X: <a href="http://get.adobe.com/flashplayer/">'.$osxVersion[1].'</a></li>';
				print '<li>Windows: <a href="http://get.adobe.com/flashplayer/">'.$windowsVersion[1].'</a></li>';
				print '</ul></div>';

		    }
 		
		?>
		
		<h2>Useful links:</h2>
		
		<ul>
			<li id="google"><a href="http://www.google.com/support/bin/answer.py?answer=23852">How do I enable JavaScript?</a></li>
			<li>Release notes: <a href="http://www.adobe.com/support/documentation/en/flashplayer/7/releasenotes.html">FP 7</a>, <a href="http://www.adobe.com/support/documentation/en/flashplayer/8/releasenotes.html">FP 8</a>, <a href="http://www.adobe.com/support/documentation/en/flashplayer/9/releasenotes.html">FP 9</a>, <a href="http://www.adobe.com/support/documentation/en/flash/releasenotes.html#fp10">FP 10</a></li>
			<li><a href="http://www.adobe.com/products/flashplayer/">Flash Player home</a></li>
			<li><a href="http://www.macromedia.com/software/flash/about/" title="Adobe - Flash Player">About Flash Player page at Adobe</a></li>
			<li><a href="http://www.adobe.com/support/flashplayer/downloads.html">Debugger versions (Debug Players) and Standalone Players (Projectors)</a></li>
			<li><a href="http://www.adobe.com/shockwave/download/alternates/">Alternate current Flash players</a></li>
			<li><a href="http://kb.adobe.com/selfservice/viewContent.do?externalId=tn_14266&sliceId=1">Older Flash players</a></li>
			<li><a href="http://www.sephiroth.it/weblog/archives/2007/05/flash_switcher_extension_updated.php">Flash Player Switcher Firefox extension by Sephiroth</a> (Firefox/WIN)</li>
			<li><a href="http://kb.adobe.com/selfservice/viewContent.do?externalId=tn_14157">Flash Player uninstaller</a></li>
		</ul>
		
		<div><a href="http://www.adobe.com/go/getflashplayer">
			<img src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="Get Adobe Flash player" />
		</a></div>
		
		<div id="credits">A Naklab&trade; Production by <a href="http://aralbalkan.com">Aral Balkan</a>.</div>
		<div id="other-credits-and-legal">Special thanks to Patrick Welfringer for the link to the Flash Player 10 release notes and to both him and Paul Booth for urging me to update the site so that it now automatically displays the latest player versions directly from Adobe's web site. Adobe, the Adobe logo, Flash and Flex are either registered trademarks or trademarks of Adobe Systems Incorporated in the United States and/or other countries.</div>
		<script type="text/javascript" charset="utf-8">
		    // Break out of any iFrames so we don't get leeched. 
			if (top != self) top.location = location;

			var version = swfobject.getFlashPlayerVersion();

			document.getElementById('version').innerHTML = "You don't have the Flash Player installed.";
			document.getElementById('google').innerHTML = '<a href="http://www.adobe.com/go/getflashplayer">Get Adobe Flash player</a>';

			if ((version['major'] > 0)) 
			{
				var ver = version['major'] +","+ version['minor'] +","+ version['release'] + ",0";
				var google = '<a href = "http://google.com/search?hl=en&safe=off&q=%22flash+player%22+'+ver+'">Google results for Flash Player '+ver+'</a>';
				document.getElementById('version').innerHTML = ver;
				document.getElementById('google').innerHTML = google;
			}
			
			document.getElementById('platform').innerHTML = "Your browser is " + yourBro[1] + " on the " + yourBro[3] + " platform. " + document.getElementById('platform').innerHTML;	
		</script>
	</body>
</html>