<%

dim URL2, URL3

URL = request.servervariables("HTTP_HOST")
URL = URL + request.servervariables("HTTP_X_REWRITE_URL")
URL = lcase(URL)

URL2 = lcase(request.servervariables("HTTP_HOST"))

URL3 = "https://www.website.com"
URL3 = URL3 + request.servervariables("HTTP_X_REWRITE_URL")

if URL2 = "www.website.com" or URL2 = "website.com" then
	Response.Buffer = true
	Response.Status = "301 Moved Permanently"
	Response.AddHeader "Location", URL3
	Response.End
end if

if URL = "www.website.com/register/" or URL = "website.com/register" then
	Response.Buffer = true
	Response.Status = "301 Moved Permanently"
	Response.AddHeader "Location", "https://www.siteurl.com"
	Response.End
end if

%>