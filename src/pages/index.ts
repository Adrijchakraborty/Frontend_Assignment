import React from "react";

const Home = React.lazy(()=> import('./Home'));
const About = React.lazy(()=> import('./About'));
const Contact = React.lazy(()=> import('./Contact'));

export {Home, About, Contact}