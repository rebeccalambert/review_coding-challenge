This take-home test was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting started
- Clone the repo: `git clone git@github.com:monographhq/test-frontend.git`
- Install dependencies: `yarn`
- Make sure the app runs: `yarn start`

## Frontend Test

### Dining review app

Design Reference: [Figma File](https://www.figma.com/file/jjqRhIa54hOakjjAWkpbmC/Take-home-frontend-test?node-id=0%3A1)

![Dining App](/app.png)

1. **Dynamic inputs** - The Preview section on the right has static placeholder text. Wire up the app so that anything typed in both the feedback and party inputs updates the preview on the right.

2. **Refactor inputs** - Depending on how you wrote the first step, you may need to refactor the update method to only use a single method (instead of two) for updating each input. Make sure you're only passing a single method to both inputs. For example:
    ```
    update() {}
    <input onChange={update}>
    <input onChange={update}>
    ```

3. **Product decision** - We're a small team at Monograph so you may be asked to make recommendations based on a feature we're building. Code from scratch, modify a library, or use a best practice idea is often a decision we're confronted with. You'll be adding an emoji selector to the form on the left. In the [Figma File](https://www.figma.com/file/jjqRhIa54hOakjjAWkpbmC/Take-home-frontend-test?node-id=0%3A1) we've added a few ideas, but we'd like to see your thinking around the best way to implement a feature which allows a user to express their emotions after dining somewhere.

    In your README doc, write a few sentences about why you might pick a certain direction.

4. **Add emoji selector** - Now implement your idea in code and render it on the right in the Preview section.

5. **Style preview card** - Based on the [Figma File](https://www.figma.com/file/jjqRhIa54hOakjjAWkpbmC/Take-home-frontend-test?node-id=0%3A1), add CSS styling to the Preview area. In Figma you can click the "Code" tab in the upper right to get the relevant CSS values for each element you click.

6. **Responsive styling** - Now that your Preview is looking good, we need to make the app work for mobile users. We'd like the Preview section to be on top in mobile and everything to look similar to the Figma mockup. Don't worry about tablet styling for now, this is just for mobile.


# Emoji Selector
- I think using an emoji selector that displays the emoji choices is the best design for this project. This type of emoji selector allows people to get creative with what emojis they select, and to know what their options are. Though it might be overwhelming to some, a large majority of people are familiar and comfortable with using emojis and probably won't feel that way. Plus, even on mobile phones with the smaller screens, people are already used to interacting with emoji selectors like this since that is how smart phones style it. And, if this was a live site, most likely users would be accessing it from their smart phones right after leaving the restaurant (rather than going home and opening the page on a laptop), so I think it makes even more sense then to organize the emojis this way. So I think the fact that it is already familiar, plus it gives the most freedom to the user since they can see their options, makes this style the best choice. 
- I found an emoji-picker on GitHub that I implemented. I liked this one because it offered a wide range of emojis, and they are the emojis people would expect and are familiar with. Also, this option allows for a lot of customization, such as if we only wanted to allow certain categories of emojis. With that option we could address the fear of the selector seeming overwhelming to some users if we wanted or felt it was necessary. 
- For reference and credit, the here is the [source](https://missive.github.io/emoji-mart) of the emoji picker from Missive. To install I ran: `npm install --save emoji-mart`

- I was debating separating out objects and faces into two different categories, but that seemed like it would make the interface more confusing, possibly making the user think that you can actually choose two different emojis, or that there was something different about the second set of emojis. That's why I just kept them in one list. 