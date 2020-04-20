# angular-workshop-team5

![Angular](https://www.ssa-frontend.com/media/1350/angular-14a0f6532f.png?mode=max&width=300&height=300)

##Team

1. Venkatayashwanth Damera [Angular Introduction](https://app.vidgrid.com/view/6NCvyB7nnVpp/?sr=9Q0Onc)
2. Puneeth Annam [Angular Services](https://app.vidgrid.com/view/ZzFNrR2au8MW/?sr=fAxOOL)
3. Bhanuprakash Thota [Angular Practical Demo](https://app.vidgrid.com/view/SBcvD8SjZrUu)

## Introduction
Angular is an app-design framework and development platform for creating efficient and sophisticated single-page apps. Angular is a complete rewrite from the same team that built AngularJS.The architecture of an Angular application relies on certain fundamental concepts. The basic building blocks are NgModules, which provide a compilation context for components. NgModules collect related code into functional sets; an Angular app is defined by a set of NgModules. An app always has at least a root module that enables bootstrapping, and typically has many more feature modules.

Components define views, which are sets of screen elements that Angular can choose among and modify according to your program logic and data.

Components use services, which provide specific functionality not directly related to views. Service providers can be injected into components as dependencies, making your code modular, reusable, and efficient.

## Folder Structure
[Angular folder structure](https://www.youtube.com/watch?v=_TLhUCjY9iA&feature=youtu.be)

    > e2e

    > node_modules

    > src

        > app

        > assets

        > environments

        ..index.html
  
        ..styles.scss

1. The e2e folder is for end to end testing.
1. node_modules is a folder you will never want to touch, as it contains the project's dependencies.
1. src contains much of your code.
1. app is where you will spend the most of your time writing your Angular 8 code. It includes the routing, components, and more.
1. index.html is the entry point to the app, and you generally don't touch this file.
1. styles.scss is where your global CSS rulesets will reside.

## Components
[Components](https://www.youtube.com/watch?v=23o0evRtrFI)

The fundamental building blocks of your Angular app are the components. Components consist of 3 elements:

- The imports
- The component decorator, which are various properties for your component. The component decorator includes locations to your component's template and CSS location.
- The component logic, where your code resides.


 import { Component } from '@angular/core';

 @Component
 
 ({

    selector: 'app-root',

    templateUrl: './app.component.html',

    styleUrls: ['./app.component.scss']

 })

 export class AppComponent 

{

  title = 'myapp';

}

## One-way Data Binding
When you want to communicate data from the component logic to the template (or vice versa), this is called one-way data binding.

<div class="play-container">

    <p>You've clicked <span (click)="countClick()">this</span> {{ clickCounter }} times.</p>

</div>

We have a few things happening here:

1. (click) - This is a click event, which means if the element is clicked, it will call the function countClick() which doesn't yet exist.
1. {{ clickCounter }} this is interpolation. clickCounter is a property (not yet defined) that will display data that's retrieved from the component.

## Two-way Data Binding
The best way to demonstrate the concept of data binding is to do it with a form element. 

<div class="play-container">

    <p>
        <input type="text" [(ngModel)]="name"><br>

        <strong>You said: </strong> {{ name }}
    </p>

</div>

In order for ngModel to work correctly, we need to import it 

import { FormsModule } from '@angular/forms';

@NgModule

({
  ...
  imports: 
  
  [
     
     BrowserModule,

     AppRoutingModule,

     FormsModule       // add this

  ],

  providers: [],

  bootstrap: [AppComponent]

})

Next, we have to define the name property

clickCounter: number = 0; 

name: string = ''; 

If you save it and begin to type within the textfield, you will see that it displays in the line beneath it in real time. This is two-way data binding because it's both setting and retreiving the property to and from the component/template!

## Angular API Fetch Calls
