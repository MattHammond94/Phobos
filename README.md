# Phobos

### Overview

> A space themed educational website. User is able to reveal facts on their chosen space related subjects.

> Browser first but fully responsive for access via mobile. 

> Minimal functionality but polished high quality designs and animation.
 
> Should be deployed and usable without having to clone a repo.

> Incorporates and uses the openai api to gather the facts/information.

### Initial Thoughts (Pre-Production Notes)


> My previous build did not maximise reacts SPA purpose so would ideally like this application to be as close to an SPA as possible.


> Whilst my focus continues to be on frontend design aspects in react I also did not complete any testing in my previous project so this is a must. Cypress is the obvious choice as I have used it previously but would be worthwhile looking into alternatives.


> I don’t want a situation whereby a user has selected a fact card and they are waiting for their fact to appear as the data is being pulled from the api. This is not a good user experience.

Due to the cards being clickable elements - It is likely that when pulling data to display in the fact cards from the openai api this will be done on first render using the useEffect hook. 

I would then store the facts in state as strings within either an object or any array as below:


```
{
  sputnikFacts: [“fact1”, “fact2”, “fact3”]
  marsRoverFacts: [“fact1”, “fact2”, “fact3”]
}
```

If only showcasing one fact then ```onClick``` a number will be selected at random and used as an index ```.sputnikFacts[randomNum]```

Otherwise I will be iterating through the array of facts and creating elements/card components based on the facts before the user has made their selection.

Note: This may require some further experimentation and an overview of how the openai API works in order to implement successfully.

Won’t have to deal with input/error handling however so should be achievable. 


> A work around/design feature if I am seeing some issues with fetching data taking to long would be to add a pre page loading screen.

It may be worthwhile adding an animated loading page which shows before each page and only closes once a check has been done to confirm data has been received from the api. 

This would also prevent a potential issue whereby the api went down and no data was being received (in this insatnce the user would only seeing blank cards or potentially an error.)

I can set a max loading timeout to prompt the user when we are not receiving data to prevent them from sitting idle on a loading screen in the circumstance where the api is failing.

