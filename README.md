# Lazy Read
NodeJS REST API to generate the time needed (in seconds and minutes) to read an article
<br><br>
<b>How to use</b><br>
Build the required node modules<br>
http://localhost:3001/?q="your_text_here"
<br>
Make a GET request to the Node server with the body of the article that runs on port 3001 and it will return a JSON similar to 
<br>
```
{
  "in_seconds":"209.45 seconds",
  "in_mins":"3 minutes"
}
```
<br>
The average person reads 275 word per minute, so this application relies on this rule, while also adding 12 seconds for each image found in the body.
<br>
