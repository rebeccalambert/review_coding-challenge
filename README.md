This was a take-home test where the core functionality was already provided. The design was based on a provided reference, and the functionality I added is described below:

## Frontend Test

### Dining review app

Design Reference: 
![Dining App](/app.png)

1. **Dynamic inputs** - The Preview section on the right has static placeholder text. Wire up the app so that anything typed in both the feedback and party inputs updates the preview on the right.
- Ensure the update method only uses a single method (instead of two) for updating each input. Make sure you're only passing a single method to both inputs. For example:
    ```
    update() {}
    <input onChange={update}>
    <input onChange={update}>
    ```

2. **Add emoji selector** - Add an emoji selector to the form on the left, which updates the review on the right. What is your thinking around the best way to implement a feature which allows a user to express their emotions after dining somewhere.

    ### Emoji Selector
    - I wanted to keep the emoji selector simple and similar to what users are already familiar with, so therefore:
        - I sized the emoji box so that it displays half of the last row to indicate that you can scroll down. 
        - For the mobile version, I added a gold highlight and click effect on the selected emoji so that users have feedback that they actually selected the emoji since they can't see the preview without scrolling up. I didn't add the button click effect on the desktop version because it looked a little messy with the zoom in on hover. Plus, the user can see from the highlight and on the preview side that they did successfully select the emoji. 


3. **Style preview card** - Add CSS styling to the Preview area to match the design reference.

4. **Responsive styling** - Now that your Preview is looking good, we need to make the app work for mobile users. We'd like the Preview section to be on top in mobile and everything to look similar to the Figma mockup.

