'use strict';

const MessageHistory = function({list}) {
  if (!list || list.length === 0) {
    return null;
  }
  return (
    <ul>
      {list.map(msg => {
        let component;
        switch (msg.type) {
          case 'message':
          component = <Message from={msg.from} message={msg}/>;
          break;
          case 'response':
          component = <Response from={msg.from} message={msg}/>;
          break;
          case 'typing':
          component = <Typing from={msg.from} message={msg}/>;
          break;
        }
        return <li>{component}</li>
      })}
    </ul>
  )
}