# <img style="float: right;" src="https://doy2mn9upadnk.cloudfront.net/uploads/default/original/4X/d/8/a/d8a9a1964099afb7c1778761eef6f915c68c3f19.png"> Roblox Status Live v2
## [Website 💻](https://robloxstatus.live) - [Source Code 🔓](https://github.com/RobloxStatusLive/rsl) - [DevForum Thread 📢](https://devforum.roblox.com/t/roblox-status-live-the-better-automatic-roblox-down-detector/1567879) - [API Docs 📕](https://robloxstatus.live/api/docs)
### The smarter alternative to the [Roblox Status Page](https://status.roblox.com).
#### Created with 🧡 by [iiPython](https://iipython.cf) and [Crcoli737](https://devforum.roblox.com/u/crcoli737), Logo created by [GamersInternational](https://devforum.roblox.com/u/gamersinternational)
***
## ⚡ Overview
### How it works.
Roblox Status Live uses the [Roblox API](https://devforum.roblox.com/t/collected-list-of-apis/557091) endpoints [status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) and [ping times](https://www.techtarget.com/searchnetworking/definition/ping) to determine if Roblox is working correctly. We also use other determining factors, such as [Roblox's Official Status page](https://status.roblox.com) to determine if there is an active incident at Roblox.
### Why is it important?
If you are not an active Roblox player or developer, the use of Roblox Status Live may not be very important to you. However if you are a developer, knowing the status of Roblox and it's APIs can help you determine player count, projected revenue, and the lost revenue due to the inability for players to purchase [gamepasses](https://education.roblox.com/en-us/resources/game-passes) or [developer products](https://developer.roblox.com/en-us/articles/Developer-Products-In-Game-Purchases).
### Why is Roblox Status Live better other automated down detectors?
Well, the answer to this question is more complicated than one may think. For example, [Status+](https://status-plus.github.io/StatusPlus/) is a great down detector for Roblox, but it has its downfalls. Status+'s website may seem better than our's however that's just because it uses a template, specifically the [Upptime template](https://github.com/upptime/upptime). 

You may be thinking, just because a website uses a template doesn't make it bad, and you would be correct. However, using a template to make your website often comes with [downsides](https://www.techwalla.com/articles/what-is-the-disadvantage-of-using-a-template), such as the website being impersonal to Roblox specifically. 

Another downside to Status+ is that they have hard limits on their downtime detector, just because an API had a threshold violation doesn't always mean that the API is down, this often causes many false positives. 

At Roblox Status Live, we are evolving very quickly and plan on using an [Artificial Intelligence and Machine Learning engine](https://azure.microsoft.com/en-us/overview/artificial-intelligence-ai-vs-machine-learning/#introduction) to help determine if Roblox is having an outage, what the outage consists of, and an estimated ETA for a resolution. 

## 🤖 Roblox Status Live API
### Summary
The Roblox Status Live API is an easy way for other developers to integrate Roblox Status Live data into their own third-party applications. The API documentation is available [here](http://robloxstatus.live/api/docs).

## 🛠️ Change Log

#### v2.0 Second Major Release
+ Implemented a new configuration system
+ Implemented a new logging system
+ Moved all essential data files to the `data` directory
+ Made it mandatory to specify a secret key for Flask
+ Remade parts of the README and added an example config file
+ Removed most (if not all) `os.getenv` references

#### v1.2 Minor Update
+ Added historical downtime tracking
    - Added a new API endpoint: [/api/historical](https://robloxstatus.live/api/historical)
    - You can now click on services to view this data

#### v1.1 Minor Update
+ Redesigned the RSL API
+ Added more Roblox services to the tracking list
+ Rewrote most of the RSL backend in prep for v2
+ New RSL logo

### v1.0 Initial Release
+ Initial Release

## ❗ Extra Information
<img src = "https://iipython.cf/~/img/pfp.png" height = "20"> Copyright (c) 2022 [iiPython](https://iipython.cf)  
<img src = "https://avatars.githubusercontent.com/u/65417985?v=4" height = "20"> Copyright (c) 2020-2022 [Crcoli737](https://devforum.roblox.com/u/crcoli737)  
The Roblox Status Live Logo is the Intellectual Property of  [GamersInternational](https://devforum.roblox.com/u/gamersinternational)
