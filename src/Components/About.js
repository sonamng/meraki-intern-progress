// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function About() {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     axios.get("https://fakestoreapi.com/products")
//       .then((res) => {
//         console.log("red", res);
//         setData(res.data)
//       })
//   }, [])
//   console.log("data", data)

//   return (
//     <>
//       <div className='row'>
//         {data.map((item) => (
//           <div>
//             <div className='box'>
//               <img className='image' src={item.image} alt={item.title} />
//               <br />
//               <strong>Title- {item.title}</strong>
//               <p>ID- {item.id}</p>
//               <p>Price {item.price}</p>
//               <button>Add Price</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default About;





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function About() {
//   const [data, setData] = useState([]);


//   useEffect(() => {
//     axios.get("https://fakestoreapi.com/products")
//       .then((res) => {
//         console.log("red", res);
//         setData(res.data)
//       })
//   }, [])
//   console.log("data", data)

//   const handleAddPrice = (id) => {
//     alert("clicked add button")

//   }


//   const handleRemove = (id) => {
//     alert("clicked remove button")
//     const updatedItems = data.filter((item) => item.id !== id);
//     setData(updatedItems);

//   }
//   console.log("updatedItems",updatedItems);

//   return (
//     <>
//       <div className='row'>
//         {data.map((item) => (
//           <div key={item.id}>
//             <div className='box'>
//               <img className='image' src={item.image} alt={item.title} />
//               <br />
//               <strong>Title- {item.title}</strong>
//               <p>ID- {item.id}</p>
//               <p>Price: {item.price}</p>
//               <button onClick={() => handleAddPrice(item.id)}>Add Price</button>
//               <button onClick={() => handleRemove(item.id)}>Add Price</button>

//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default About;




import React, { useState, useEffect } from 'react';
import axios from 'axios';

function About() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log("red", res);
        setData(res.data)
      });
  }, []);

  const handleAddPrice = (id) => {
    alert("Add Price button clicked for product with ID: " + id);
  };

  const handleRemove = (id) => {
    alert("Remove button clicked for product with ID: " + id);
    const updatedItems = data.filter((item) => item.id !== id);
    setData(updatedItems);
  };

  return (
    <>
      <div className='row'>
        {data.map((item) => (
          <div key={item.id}>
            <div className='box'>
              <img className='image' src={item.image} alt={item.title} />
              <br />
              <strong>Title- {item.title}</strong>
              <p>ID- {item.id}</p>
              <p>Price: {item.price}</p>
              <button onClick={() => handleAddPrice(item.id)}>Add Price</button>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default About;
