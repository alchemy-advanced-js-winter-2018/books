Book Search
===

Build a search app for the Google Books API

Follow the pattern for using your state store as a components architecture we used in class both in
terms of code architecture and developer process.

The minimum requirement is to be able to search a term and have that drive the results, along with paging including page size.

You need to create a module in `services` that encapsulates all the specifics of http and calling that api

## Project

* Collaborate, discuss and ask questions of both your peers and the instruction staff.
* Follow the process of methodically "growing" your app
* Make your code look like it could be in the demo project

## Bonus

* Check the `response.ok` property from the `fetch` (you need to do this before calling `response.json()`).
  * If true, return `response.json()`
  * If false, throw '<error you return>'
* Add a `catch` to the component call that will set an `error` state

## Rubric

* Services **3pts**
* Book Search Functionality **4pts**
* Clean code and project, attention to detail **3pts**
