# run-commute

There are apps that tell you the fastest way to walk or bike from point A to B, but neither is quite right for a run. Walking routes are usually the shortest distance between A and B, but at the cost of routing through lots of stop lights and high-traffic pedestrian areas. This forces a runner to stop frequently and dodge between people- super frustrating when you're trying to get to point B _and_ get a workout in. Cycling routes are bound by one-way streets and once again, usually route via higher traffic areas when they're based on popularity, increasing the amount of times a runner has to stop along the way. 

Run commuting in New York City, I learned quickly that not only was it usually faster*, but far more enjoyable to go a little out of my way to run along waterfront greenways, parks, and quiet neighborhoods. Pretty soon I was run commuting three times a week, and varying my route to include 2+ boros and/or running a massive 20 mile loop that ended one subway stop away from work. 

I thus have set out to build an app that will create runner-first routing solutions for more enjoyable run commuting courses. Here are what my development phases look like:

# Phase 0:
Delve into documentation for Mapbox's GL JS, Directions, and Geocoding APIs, OpenStreetMap's API, +/- any additional, helpful APIs I discover along the way. Recommendations welcome!

# Phase 1:
Create app that will 'snap' point to point running routes to known greenways, parks, and quiet neighborhoods. Hopefully can do this part with a combination of MongoDB's geospatial queries and Node.js, but might need to learn Python for this one...

# Phase 2:
Add feature for user to enter how far they want to run, whether shorter or longer than their base run commute, routing them via public transportation and/or bike share for the "last mile". 


*It's also often faster to run point to point in Brooklyn than take a combo of G train, busses, and walking, the phenomenon that inspired me to start run commuting in the first place. 
