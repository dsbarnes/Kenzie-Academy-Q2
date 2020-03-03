import React from 'react';


//Mentioned at demo to use classes b/c we may find out we need a 'state'
//However, the Bonus was to convert everything to functions, so I did that
//  even though it may be better in the long run to use classes from here on out
function Text(props){
  return <h1> Hello, <span style={{color: props.color}}>{props.value}</span></h1>
}

function App() {
  return (
    <div>
      <Text value="Derek" color="blue"/>
    </div>
  );
}
export default App