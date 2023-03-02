import './App.css';

type topCarsItemType = {
  manufacturer : string,
  model : string
}

function App() {
  const topCars : topCarsItemType[] = [
    {manufacturer:'BMW', model:'m5cs'},
    {manufacturer:'Mercedes', model:'e63s'},
    {manufacturer:'Audi', model:'rs6'}
  ]

  let rowsData = topCars.map((curr, i) => {
      return (
        <tr key={i+1}>
          <td>{curr.manufacturer}</td>
          <td>{curr.model}</td>
        </tr>
      )
    })

  return (
    <div>
        <table>
          <tbody>
            {rowsData}
          </tbody>
        </table>
        <ul>
          {topCars.map((curr, i) => {
            //debugger
              return (
                <li key={(i+1).toString()}>
                  {curr.manufacturer}
                  <span> {curr.model}</span>
                </li>
              )
          })
        }
        </ul>
    </div>
  );
}

export default App;
