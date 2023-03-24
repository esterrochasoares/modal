# Modal
A modal made for npm, built using Javascript, React (components) and tailwindcss (style);

## Technologies
React : 18.2.0 version; <br/> 
Node.js : 19.8.1 version; <br/> 
Tailwind CSS : 3.0.2 version; <br/> 

## Getting Started
### Dependencies
React  <br/> 
Tailwind CSS <br/> 

### How to use

 #### React
``` npm start ```
to start React

####  Tailwind CSS
```tailwind.config.js```- you will find all of the Tailwind settings, an essential file;

### ```./src/App.js``` <br/>
In the App file the Home component is imported where all the other components of the modal are present; <br/>

```
function App() {
  return (
    <>
    <Home/>
    </>
  );
}
```

### ```./src/components/Home```
![home](https://user-images.githubusercontent.com/112898782/227606467-92217b0f-11a6-421c-8280-4e6928df7dd9.png)

- #### In the home file you will find the functions to open and close the modal <br/>
- #### The component of the buttons and the modal

### Home style
 #### To facilitate the styling with tailwind all colors, fonts, and font sizes were removed, so that when it comes time to use the library it is flexible;
 #### To add styles follow the Tailwind link and customize as you like: https://tailwindcss.com/

![Home](https://user-images.githubusercontent.com/112898782/227607907-8305f65d-c8e5-4e96-afd7-0acdbdd034c8.png)

### ```./src/components/Button```
![button](https://user-images.githubusercontent.com/112898782/227606834-6270bba6-9803-4b17-a16b-cd038db441d8.png)
### Button style
#### To change the text of the button that open the modal go to ```./src/components/Home```
#### To change the button text inside the modal go to ```./src/components/Modal```
####

### ```./src/components/Modal```
![modal](https://user-images.githubusercontent.com/112898782/227607222-b3d8b8d4-d897-4109-9332-bf79b67daa5b.png)
### Under ```./src/components/Modal``` are all the functions, styles and text from within the modal;
![Modal](https://user-images.githubusercontent.com/112898782/227611621-e9bbcf23-3e96-4301-a8a0-b5e6464d59a1.png)

## This modal is completely responsive
![HomeResponsive](https://user-images.githubusercontent.com/112898782/227614058-3b42bf1b-a0b7-4d2b-b74b-c40365c7a680.png)
![ModalOpenResponsive](https://user-images.githubusercontent.com/112898782/227614121-5e1217a0-2d60-4563-ae84-81c3041cd7e0.png)

## npm library link : https://www.npmjs.com/package/modal_react_tailwind_responsive


