const desc = <p>I just learned out to create a React node and render it into the DOM</p>;
 const header = React.createElement(
  'header'
  'header',
   null,
   title,
   desc
 );
 
 
 ReactDOM.render(
   header,
   document.getElementById('root')
 );
