'use strict';

function MessageHistory({list}) {
  if (list.length === 0) {
    return null;
  }
  return (
    <ul>
      {list.map(msg => 
        <li className="clearfix">{
          msg.type === 'message' ? 
          <Message from={msg.from} message={msg}/> : (
            msg.type === 'response' ? 
            <Response from={msg.from} message={msg}/> :
            <Typing from={msg.from} message={msg}/>
          )
        }
        </li>)
      }
    </ul>
    
  )
}