<%

dim URL2, URL3

URL = request.servervariables("HTTP_HOST")
URL = URL + request.servervariables("HTTP_X_REWRITE_URL")
URL = lcase(URL)

URL2 = lcase(request.servervariables("HTTP_HOST"))

URL3 = "https://www.sitename.com"
URL3 = URL3 + request.servervariables("HTTP_X_REWRITE_URL")

if URL2 = "sitename.speartek.com" or URL2 = "sitename.com" then
	'Response.Buffer = true
	'Response.Status = "301 Moved Permanently"
	'Response.AddHeader "Location", URL3
	'Response.End
end if

if URL = "www.jeremiecorp.com/index.php" or URL = "jeremiecorp.com/index.php" or URL = "www.jeremiecorp.com/uk/index.php" or URL = "jeremiecorp.com/uk/index.php" then
	Response.Buffer = true
	Response.Status = "301 Moved Permanently"
	Response.AddHeader "Location", "https://www.jeremiecorp.com"
	Response.End
end if

if URL = "www.sitename.com/uk/" or URL = "sitename.com/uk/" then
	Response.Buffer = true
	Response.Status = "301 Moved Permanently"
	Response.AddHeader "Location", "https://www.sitename.com"
	Response.End
end if
 


%>