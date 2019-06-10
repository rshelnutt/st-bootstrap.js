<%

dim URL2, URL3

URL = request.servervariables("HTTP_HOST")
URL = URL + request.servervariables("HTTP_X_REWRITE_URL")
URL = lcase(URL)

URL2 = lcase(request.servervariables("HTTP_HOST"))

URL3 = "https://www.jnpa.com"
URL3 = URL3 + request.servervariables("HTTP_X_REWRITE_URL")

if URL2 = "jnpa.speartek.com" or URL2 = "jnpa.com" then
	'Response.Buffer = true
	'Response.Status = "301 Moved Permanently"
	'Response.AddHeader "Location", URL3
	'Response.End
end if

if URL = "www.siteurl.com/register/" or URL = "siteurl.com/register" then
	Response.Buffer = true
	Response.Status = "301 Moved Permanently"
	Response.AddHeader "Location", "https://www.siteurl.com"
	Response.End
end if
 
if URL = "jnpa.speartek.com/cat-698-1-323/new-memberships.htm" or URL = "www.jnpa.com/cat-698-1-323/new-memberships.htm" or URL = "jnpa.com/cat-698-1-323/new-memberships.htm" then
	Response.Buffer = true
	Response.Status = "301 Moved Permanently"
	Response.AddHeader "Location", "../prod-699-1-811-323/partner-of-the-parks-membership.htm"
	Response.End
end if

if URL = "jnpa.speartek.com/cat-698-1-324/membership-renewals.htm" or URL = "www.jnpa.com/cat-698-1-324/membership-renewals.htm" or URL = "jnpa.com/cat-698-1-324/membership-renewals.htm" then
	Response.Buffer = true
	Response.Status = "301 Moved Permanently"
	Response.AddHeader "Location", "../prod-699-1-833-324/renewal-partner-of-the-parks-membership.htm"
	Response.End
end if

%>