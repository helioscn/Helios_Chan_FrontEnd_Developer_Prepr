# Front End Web Developer Challenge

## Table of Contents
* [Overview](#overview)
* [Tech Stack](#tech-stack)
* [Setup](#setup)
* [Functionalities](#functionalities)
* [Changes](#changes)
* [Known Issues](#known-issues)
* [Reflection](#reflection)
** [Points of Pride](#pop)
** [Points of Betterment](#pob)
* [Conclusion](#conclusion)

## Overview
The purpose of this project is to showcase my front-end abilities in the application for Prepr's summer internship position.

## Tech Stack
* HTML5
* CSS3
* JavaScript
* jQuery
* WampServer

## Setup
1. Install [WampServer](https://www.wampserver.com/)
2. Locate **www** directory inside installation folder
3. Drop **prepr** project folder inside **www** directory
4. Fire up the WampServer. Change port number if necessary
5. Point of entry is *index.php*

**Access details.php directly or by clicking on one of the challenges in challenges.php**

## Functionalities

### Global
* Sidebar menu (links to projects, labs, and challenges pages)
* Sidebar scrolling if height expands out of the viewport height
* Responsive pages

### index.php
* Filter by "Challenge", "Lab", or "Project"

### labs.php, challenges.php
* Filter by category by clicking on the *popular categories*, or by clicking on the filter button and choosing the appropriate category from the dropdown
* Add and favourite buttons change state on click

### details.php
* Overview dropdowns reveal information
* Carousel-like navigation in Host information
* Add comments and replies
* Like/dislike posts
* Posts sorted by datetime

## Changes

### Global
* Sidebar navigation links are now arranged into a grid.
* Header search icon now expands upon clicking.
* Page name and navigation are now displayed over the bluish body area.
* Due to similarities in layout, projects.php, challenges.php, and labs.php are now grouped together by a sidebar available to each of the aforementioned pages.
* Inset navigation buttons to increase visual impact.

### index.php
* Items (challenges, labs, and projects) are now arranged in a grid-like fashion.
* Rearranged layout of items to improve consistency and clarity (i.e. telling you what type of item it is).
* Item view button no longer situated toward the edge of the screen.
* Reduced overall whitespace.

### projects.php
* Reduced font size of "no project" message
* Divided main section into navigation (left) and project listing (right)

### labs.php, challenges.php
* These two pages now largely share the same design and css.
* Placed *Popular Categories* and option icons on the same horizontal level.
* Filter options now appear only after clicking on the filter icon.
* Apply filter button removed. Changes to filter options now automatically update the listing.
* Added new (albeit non-functional) buttons for sorting and settings.
* Listing images are now set to a static width and height for visual purposes.
* Rearranged listing information to optimize visual flow.
* Changed *Join* link to an icon that visually reacts to user interaction.
* Listing title changed from blue to green.

### details.php
* Revamped landing area of page. Now contains a big "splash screen" containing the challenge name, period, and status.
* Removed "road map".
* Button colours no longer oscillate between green and white, and are placed directly below the splash screen.
* Navigation is disconnected from the landing DIV and now commands a dynamic body of its own.
* Overview information are now arranged into dropdowns that display info upon clicking.
* Improved spaciousness to **Host** section. Now displays host information first, then *more challenges* directly below. 
* *More challenges* can be navigated by clicking and holding the mouse button down for a continuous effect.
* Revamped discussion area. Text field for adding comments now come first.
* Improved discussion area spacing.

## Known Isuses

### Design
* Icons are inconsistent. Some icons are styled in terms of outlines, whereas others are filled-in. This is due to the limitation of a free fontawesome account. I would go with all outline styles if I had the pro version of fontawesome. 

### Non-functional components
* Searching
* Notifications
* Explore page does not link to anywhere
* Create new project button
* Sort and settings buttons
* Associated labs and sponsors section do not contain any content
* Submissions and members section also do not contain any content
* Heart, share, follow, and submit buttons do not work

### Bugs
* Explore grid filter causes margin issues due to using CSS :nth-child selector. Fix would be to build grid dynamically, not using static HTML
* Header scroll bar position indicator gets confused when document height changes due to filter changes (dynamic elements)

## Reflection
I started off by looking through each of the five given pages to get a feel for the site's message and purpose. I didn't want to change the entire site--and felt like I didn't need to--since there are existing components that work well together. With that in mind, I sought only to rearrange certain components in a way that I think would improve the overall visual flow and user experience. The new aspects that I did introduce (i.e. navigation bar, header scroll bar, carousel, overview dropdowns, etc.) are to facilitate discussions on design possibilities--to test out new components that may (or may not) work well with the existing design.

Technically, I know that I've sharpened my skill set by working on this project the past couple of days. The *challenge* was indeed a challenge for me, what with the functionality requirements and design aspects. But if it were not for these obstacles, I would not have asked as many questions as I did; and without these questions, I would not have found the solutions that I now have. This challenge pushed me to exceed my own self-expectations. Additionally, it also showed me where I went wrong and could therefore improve.

### Points of Pride
To start off, my being prideful of the following changes does not mean that other people won't find fault in them! Feedback is most welcome.
* Sidebar grid and scroll
* Listing of labs/challenges pages
* The **favourite** (star) button that turns yellow when clicked
* Consistency in spacing, color use, and image sizing
* Host information carousel navigation
* Discussion area with functional commenting and replying system

### Points of Betterment
* Code organization and naming convention
* Redundant elements in code. Further cleanup is recommended. Deepen use of modular programming principles
* Avoid diving straight into development without a clear vision
* Be more daring when considering new designs. Try not to be limited by what's already there as per the challenge description

## Conclusion
Thank you, Prepr, for giving me this opportunity to showcase my abilities, and to unlock new ones. I have very much enjoyed working on this challenge during this time of global uncertainty.
