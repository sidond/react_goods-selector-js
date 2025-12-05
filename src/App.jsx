import 'bulma/css/bulma.css';
import classNames from 'classnames';
import './App.scss';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [good, setGood] = useState('');
  const [selected, setSelected] = useState('No goods');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {`${selected} selected`}
        {selected === 'No goods' ? (
          ''
        ) : (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setGood('');
              setSelected('No goods');
            }}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(product => (
            <tr
              key={product}
              data-cy="Good"
              className={classNames({
                'has-background-success-light': product === good,
              })}
            >
              <td>
                <button
                  data-cy="AddButton"
                  type="button"
                  className={classNames({
                    button: true,
                    'is-info': product === good,
                  })}
                  onClick={() => {
                    setGood(product);
                    setSelected(product);
                  }}
                >
                  {product === good ? '-' : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {product}
              </td>
            </tr>
          ))}

          <tr data-cy="Good" className="has-background-success-light">
            <td>
              <button
                data-cy="RemoveButton"
                type="button"
                className="button is-info"
              >
                -
              </button>
            </td>

            <td data-cy="GoodTitle" className="is-vcentered">
              Jam
            </td>
          </tr>

          <tr data-cy="Good">
            <td>
              <button data-cy="AddButton" type="button" className="button">
                +
              </button>
            </td>

            <td data-cy="GoodTitle" className="is-vcentered">
              Garlic
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};
// export const App = () => (
//   <main className="section container">
//     <h1 className="title is-flex is-align-items-center">No goods selected</h1>

//     <h1 className="title is-flex is-align-items-center">
//       Jam is selected
//       <button data-cy="ClearButton" type="button" className="delete ml-3" />
//     </h1>

//     <table className="table">
//       <tbody>
//         <tr data-cy="Good">
//           <td>
//             <button data-cy="AddButton" type="button" className="button">
//               +
//             </button>
//           </td>

//           <td data-cy="GoodTitle" className="is-vcentered">
//             Dumplings
//           </td>
//         </tr>

//         <tr data-cy="Good" className="has-background-success-light">
//           <td>
//             <button
//               data-cy="RemoveButton"
//               type="button"
//               className="button is-info"
//             >
//               -
//             </button>
//           </td>

//           <td data-cy="GoodTitle" className="is-vcentered">
//             Jam
//           </td>
//         </tr>

//         <tr data-cy="Good">
//           <td>
//             <button data-cy="AddButton" type="button" className="button">
//               +
//             </button>
//           </td>

//           <td data-cy="GoodTitle" className="is-vcentered">
//             Garlic
//           </td>
//         </tr>
//       </tbody>
//     </table>
//   </main>
// );
