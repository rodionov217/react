'use strict';

function Stars({count}) {

  if (typeof count === 'number' && count >= 1 && count <= 5) {
    return (
    <ul className="card-body-stars u-clearfix">
      {Array(count).fill(<li><Star /></li>)}
    </ul>
    )
  }
  return null;
}
