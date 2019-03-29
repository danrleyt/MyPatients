## Documentation and strategies

### Design

#### Inspiration

The inspiration, since it has a chat with messages, was the Facebook app Messenger Web, of course the design it's not matching, but I used this application as a reference. To be honest, I am not that strong with Design.

#### Materialize CSS

This is the framework that I used to making the components, in most of my projects I use this because I like it better than bootstrap, I find it more modern.

#### Responsiveness

This is a work in progress, even though for a tablet the application will render with no problems.

#### Icons

As suggested, I decided to go with the Font Awesome library, the icons are beautiful, and you can find anything that you imagine there.

### Libraries and Conventions

#### ESlint and AirBNB rules

This project uses ESlint as linting, added to that I used the AirBNB rules and conventions, due to its popularity, especially with ReactJS.

#### Axios

Despite we have fetch and this is a small project, I prefer use axios, it is a well tested library, and has everything I need. (For now, I used only the get method).

In the other hand, due to the size of the project and the time that have spent on it, I decided to go without an external library for state management.

### Development

#### Components

The architecture of this project is component-oriented, I'll try to explain more how the components are splitted and its functionalities.

In this project, I used basically two types of components, and the pure-function components I divided in two more, the completely static and independent, the other type as the components that receives props from a parent component.

This application has three main components, the `App` component, that it is my "Home" component, in that component as soon as it is mounted, I fetch the data from the endpoint, and also do some preprocessing in the list, with help of two Services that I will explain a bit later. This component has the two other main components, `List` and `Container`.

The `List` component receives a list of Patients as a props and a callback function from its parent. This callback function is actually a method declared in the `App` component to retrieve which patient was selected in the list.

The component `List` iterate through the list of patients, and renders a pure function component called `Patient` to each patient of the list, besides that it is also responsible to handle the filter functionality.

The `Container` component is responsible to render the informations and messages of a patient. As soon as one Patient is selected, it renders the messages of a patient as default, and also a header with image, full name and the options to show informations or messages of a patient.

If the option info is selected, the pure function component `Info` will receive the patient selected as a props and will render the informations.

If the option chat is selected the component `Chat` will be rendered and receive the array of messages will render the messages, every message is rendered using another component called `Message`.

##### Class Based Components

`App`: main component, that has the `List` and `Container` components.

`List`: shows the list of patients, and filter options.

`Container`: shows informations and messages of the patient selected.

##### Pure Function Components

###### Statics

`Loader`: it is shown while the list of patients is being fetched.

`Presentation`: it is shown when no patient is selected.

###### With Props

`Info`: receives a patient as props and renders the information.

`Chat`: receives a array of messages as props and renders the list of messages.

`Message`: receives a message as a props and renders it.

`Patient`: receives a patient and renders it inside the component `List`.

#### Services

For this app, I created two services, one to fetch data, and other to do some preprocessing of data retrieved.

##### PatientService

The `PatientService` has only one function, get the data from the endpoint and return it. But also calls the other service, `UtilsService` that does some preprocessing step that will be explaind in the next section.

##### Preprocessor Service

The `UtilsService` has two functions, one for sort the list and other to add a attribute in the list of objects called `filter`.

For sorting the list, I used the `.sort()` function, passing a function as callback, that compares the elements of the list. The comparisions I did in the order of the precedence, in this case, there is 4 criterias of sorting.

For filtering the list, I did a more different approach than using `.filter()`.

I used an approach using prime numbers. First of all, I took the liberty to add a property called `filter` in every object of the list. This filter is started with `1`, which also means that the object doesn't have any of the restraints of the filter, if the object has the first restraint (is linked) the filter is multipled by `2`, then by `3` if the object has second restraint, then by `5` if it also has the third restraint. The same logic is applied when the user clicks on three options of filters rendered in the `List` component.

Having said that, let's say a patient has filter equals `30`, that means that they have the three restraints, and what if the filter selected is `2`, then I just check if the value of filter is divisible by `2`, `30` indeed is divisible by `2`, thus the object must be rendered, and so on.

### Tests

This is still a working in progress, but I have already made some basic tests.

#### Approach

The main approach for the tests were trying not to test my implementation, but if the interactions with the application is providing the expected result, more like a end 2 end test approach, as if the user were interacting the application.

#### Basic Flow

I tried to implement the automated test for the basic flow of the app, i.e., if the list of patients is being rendered. If I the user is able to select a patient, If I can see the information and the messages of the patient selected, and if the filter functionalitie is changing the list of patients.

Observation: if you run for the first time the tests (`npm tests`) jest may say that no tests were found, for solving that just press `a` and the tests will be found.

#### React-test-renderer

Along with Jest, I used react-test-renderer to render the objects as a javascript object, without depending on the DOM.
