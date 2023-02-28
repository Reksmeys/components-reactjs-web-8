import React from 'react'
export default function Greeting(props) {
    
    // conditional rendering
    const isLoggedIn = props.isLoggedIn;
    // if (isLoggedIn) {
    //     return <UserGreeting />;
    // }
    // return <GuestGreeting />;
    return(
        <div>
            {isLoggedIn ? <UserGreeting /> : <GuestGreeting />}
        </div>
    )
}
function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
 }
 function GuestGreeting(props) {
    return <h1 style={{color: 'darkblue', fontSize: '40px'}}>
        Please sign up.</h1>;
 }
 
