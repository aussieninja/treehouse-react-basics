const title = React.createElement(
   'h1',
   { id: 'main-title', title: 'This is a title.' },
   'My First React Element!'
);

console.log(title);

const desc = React.createElement(
 'p',
 null,
 'I just learned out to create a React node and render it into the DOM'.
);

const header = React.createElement(
  'header',
   null,
   title,
   desc
);


ReactDOM.render(
  header,
  document.getElementById('root')
);

