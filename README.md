# Group Travel Expense Management

View the site live: [TripSplit](https://tripsplit-b7.web.app/)

## Problem / Data Domain

### Overview of the General Topic

Group travel involves coordinating and managing shared expenses for accommodation, transportation, meals, and activities among multiple people. Splitting these costs can become confusing and time-consuming, especially when expenses are incurred by different individuals at different times and involve unequal contributions (e.g., one person orders an expensive steak while another orders a salad). Ensuring a fair and transparent distribution of costs is essential to avoid disputes and maintain harmony within the group.

### Information Technology Problem

Current platforms like [Spliito](https://spliito.com/) offer solutions for splitting expenses but often fall short in handling non-even splits and providing clear categorizations. Additionally, many existing apps use confusing terminology, making it difficult for users to navigate and manage their expenses effectively. A more user-friendly and intuitive solution is needed to simplify the process, ensure transparency, and enhance the overall travel experience by providing clear categorization, fair cost splitting, and comprehensive reporting.

### Existing Solutions

An existing attempt to address this problem is the website [Spliito](https://spliito.com/). While Spliito offers a platform for splitting expenses, it often falls short in handling non-even splits and providing clear categorizations. The wording and interface can also be confusing for users, highlighting the need for a more user-friendly and intuitive solution.

### Proposed Solution

By developing an app that focuses on clear categorization, fair cost splitting, and intuitive user experience, we aim to simplify the process of managing group travel expenses. This solution will ensure transparency, reduce potential conflicts, and enhance the overall travel experience for users.

## App Description

### Users

This app is made for travelers who are in their 20's and 30's looking to track their expenses within their group. These travelers plan trips to multiple countries, where different currencies are used, making the amount owed per person in their main currency difficult. One aspect we may need to take into consideration is that splitting expenses evenly is a common practice, but other families and cultures may wish to split differently like percentages. There are travelers who do not wish to split the cost with the group and would like to pay on their own. Also, relying on the app could make it uncomfortable for people who are not as open about how much they have to spend in comparison with the others. Besides that, there are not any major impacts we currently perceive to have on minority groups.

### Application Features

When users open the app, they will start by creating a trip. Our first feature will be creating this trip where the traveler will input the name of the trip, each of the members, and the currency of their home country and the visiting countries. There is a dashboard to show which groups have been made and which members are a part of them. Our second feature is adding a new expense and seeing those split costs among the members in a group. Adding an expense will involve selecting the person who made the expense and which members they paid for. A user can also determine the percentage to split expenses among members (e.g., 30/70 instead of 50/50). The third and final feature would be to filter and search for all expenses made by the group. You can filter by category (e.g., travel, room & board, food, etc.), the day that expenses were made, or the person who paid.

#### In Summary

1. Create a group for a trip and view all members who are involved in splitting the expense.
2. Add an expense and see the expense split among all members.
3. Organize, search, and filter for expenses.

### Type of Information Used

Users will be able to view information about their individual trip expense including, but not limited to:
- Name of the expense
- Date of expense made
- Total cost and its currency
- The person who made the expense
- People involved in splitting the expense

Most importantly, users will see how much each person owes each other after all the expenses have been added.

For tracking expenses made in foreign currencies and conversion, we plan to retrieve currency data from the [Frankfurter API](https://github.com/hakanensari/frankfurter), which references exchange rates published by the European Central Bank.

### Why Our Project Matters

Ultimately, the app solves the challenge of keeping track of expenses for travelers in a group, especially when visiting different countries. **By keeping it simple, it will meet the travelers' goal of enjoying their time with their friends and family over fighting for the bill.**

## Disclaimer

This repository contains code for an interactive information web app, created for the _Client-Side Web Development_ course at the UW iSchool. 