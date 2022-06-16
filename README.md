# Reproduction repo

This is a reproduction repo intended for reproducing the following issue that
has me stumped:

* I want to create a vue 3 component library using vite + ts
* I create a new barebones vue 3 project
* When I import the component that I defined in the library, it's supposed to update its counter when clicked, but it looks like it's not being updated
* If I create a page in the component library and then import the component, it works fine
* The component's CSS is also not being displayed

How to reproduce:

* Go to the `components` directory and run `yarn` and `yarn build`
* Go to the `my-vite-app` directory and run `yarn` and `yarn dev`
* The component should update when clicked, but nothing happens