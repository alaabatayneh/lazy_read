# lazy_read
NodeJS REST API to generate the time needed (in seconds and minutes) to read an article

How to use
Make a GET request to the Node server with the body of the article that runs on port 3001 and it will return a JSON similar to 
{
  "in_seconds":"209.45 seconds",
  "in_mins":"3 minutes"
}
