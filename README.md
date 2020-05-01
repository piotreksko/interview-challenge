# Feedr Technical Challenge

Thank you for taking the time to attempt this challenge.

These tests are used to evaluate candidates of all skill levels so please complete them to a level you feel is an accurate representation of your skill set.

Please read `README-FRONTEND.md` for further instructions.

If you have any questions or would like to clarify any details, please email lyz@feedr.co.

Good luck!


# My solution

- First step was to split the code into different components and use the data from items.js
- The only logic is kept in the Main component. I would use react hooks, but they are not available in react 16.4 and I didn't want to change the build configuration of the project, as suggested in the readme. It's not a big change since only one component would have been written slightly differently.
- Next step was to implement functionalities which are removing and adding items to the Menu preview. For this I used a universal component - SingleListItem which would accept addSelectedItem and removeSelectedItem functions via props
- Last thing was to count all the dietaries from selected items. It is counted dynamically everytime selected items change. If the list was much bigger a better solution performance wise would be to save the counters in components state and then increment/decrement the counters when the list changed, but considering the data size used in this task performance should not be an issue.
- As for testing I have recently switched to react-testing-library, but enzyme is also great for the job especially with class components. My preference based on my experience with enzyme is shallow render so I used it to test all the components.
    
