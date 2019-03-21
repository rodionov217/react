'use strict';

const Stars = function ({count}) {
  if (count >= 1 && count <= 5) {
    return (
      <ul className="card-body-stars u-clearfix">
        <li>
          {Array(count).fill(<Star />)}
        </li>
        </ul>
    )
  }
  return null;
}
