Project Title: Quote Generator App
Project Summary:
The Quote Generator App is a simple web application that allows users to generate and manage motivational quotes. Users can create, edit, delete, and filter quotes based on their motivation levels. It's a great tool for keeping track of inspiring quotes that keep you going.

Trello Board: Trello Board Link

App Link: Quote Generator App

Jobs:
Frontend:
Backend:
Design:
Research / Documentation:
Link to Github Repo:
GitHub Repo Link

Component Tree:
App
NewQuote
FilterButton
QuotesStatus
Quote (repeated for each quote)
MoreActions
Wireframe:
HEADER: Links to add a new quote, filter quotes, and more actions.
INDEX: Main page with a list of quotes.
NEW QUOTE: Input fields for adding a new quote.
Primary Model / Schema: *** QUOTES
Properties:

_id (Object ID)
text (String)
author (String)
MVP CRUD / Restful Routes:
Create: POST /quotes/new (Create new quote)
Read: GET /quotes (List all quotes)
Update: PUT /quotes/:id (Update quote)
Delete: DELETE /quotes/:id (Delete quote)
User Story:
MVP:

As a user, I want an organized way to keep track of motivational quotes so I can easily access them for inspiration.
As a user, I want the ability to add my own quotes to the app.
As a user, I want to edit or delete quotes if needed.
As a user, I want to filter quotes based on their completion status (active or completed).
User Flow:

When a user interacts with the Quote Generator App, they will have the ability to:

Click the "Generate Quote" button to fetch a new motivational quote.
Enter their own motivational quotes and author names.
Edit or delete existing quotes.
Filter quotes based on their completion status (active or completed).
Optional Ice Box:
Ice Box Features:

Allow users to categorize quotes with tags or topics.
Implement user authentication to manage personal collections of quotes.
Add a search feature to find specific quotes or authors quickly.
Share favorite quotes on social media.
Create user profiles to track their favorite quotes and progress over time.