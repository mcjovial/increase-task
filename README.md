
# REACT TAKE HOME PROJECT(TypeScript & Jest)
You are asked to build a web page to search order in the system. Please create a React SPA with the following functionalities and UI:
1. User would see an empty page initially.
2. User can trigger search with item number in search field directly.
a. Item number can be multiple with comma separated.
3. User can trigger search using filter panel by applying one or more filters.
a. User can open the panel by clicking the filter button
b. Filter has 2 different style: free text field and multi-selection
c. For this exercise please implement the following filters
text field)
i. Item Number (numeric, comma separated, free
1. The value of this field should be binding with the search bar
free text field)
ii. Order Number (numeric, comma separated,
iii. Type (multi-selection):
1. Options: “EDF”, “CAO”, “SFO”
4. Once search is performed, the main screen will turn into table with search result.
5. When the user clicks on “reset all” button in filter panel, the screen returns to empty
page.
Additional notes:
1. While doing the exercise please focus on the functionality and state management first, styling is 2nd.
2. The UX design provided as a figma link, you can decide which UI element would go into your submission as long as the above functionalities are covered.
https://www.figma.com/file/qHkh35ZElSwxP2oDyQnbQ8/dashboard-ui-design?node- id=0%3A1&t=18QuJ1mI0u1GuAgm-1
3. Please use dummy data for search result, but make sure to load it asynchronously to mimic api call.
4. Bonus points for Input validation for item number field. 5. 3 more test cases should be added of Jest