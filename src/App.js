import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'

const App = () => {

  const [data, setData] = useState(null)
  const [count, setCount] = useState(1)

  useEffect(() => {

    axios.get('https://rickandmortyapi.com/api/character')
      .then(function (response) {
        // handle success
        console.log(response);
        setData(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, [])


  return (
    <div>
      {/* <button onClick={() => { setData(data + 2) }}>count by {data}</button> */}
      {/* <button onClick={() => { setCount(count + 2) }}>count by {count}</button> */}
         <h1>  api intigiration demo</h1>

      <div className='container d-flex flex-wrap justify-content-between mt-3 ms-0 me-0 '>
        {
          data != null && data.results.map((item, index) => {
            return (
              <div className="card mb-3 d-flex" >
                <div className=" g-0 d-flex ">
                  <div className="img">
                    <img src={item.image} className="img-fluid rounded-start rounded-end" ></img>
                  </div>
                  <div className="text">
                    <div className="card-body">
                      <h5 className="card-title fw-bold ">{item.name}</h5>
                      <p className="card-text fw-bold " ><span style={{ color: item.status == 'Alive' ? 'green' : item.status == 'Dead' ? 'red' : 'grey' }}>{item.status} - {item.species}</span></p>
                      <p className="card-text  m-0"><small className="text-body-secondary fw-bold">Last known location : </small></p>
                      <p className="card-text "><a href='' className='text-decoration-none fw-bold'><small className="">{item.location.name}</small></a></p>
                      <p className="card-text  m-0"><small className="text-body-secondary fw-bold">First seen in:</small></p>
                      <p className="card-text m-0"><a href='' className='text-decoration-none'><small className="text-bold fw-bold">{item.origin.name}</small></a></p>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
          )
        }
      </div>

    </div>
  )
}

export default App
