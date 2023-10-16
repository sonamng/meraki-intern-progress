
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function About() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios.get("https://fakestoreapi.com/products")
//       .then((res) => {
//         console.log("red", res);
//         setData(res.data)
//       });
//   }, []);

//   const handleAddPrice = (id) => {
//     alert("Add Price button clicked for product with ID: " + id);
//   };

//   const handleRemove = (id) => {
//     const updatedItems = data.filter((item) => item.id !== id);
//     setData(updatedItems);
//   };

//   return (
//     <>
//       <div className='row'>

//       <h1>All Element</h1>
//       <button>Cloth</button>
//       <button>jawlaty</button>
//       <button>laptop</button>

//         {data.map((item) => (
//           <div key={item.id}>
//             <div className='box'>
//               <img className='image' src={item.image} alt={item.title} />
//               <br />
//               <strong>Title- {item.title}</strong>
//               <p>ID- {item.id}</p>
//               <p>Price: {item.price}</p>
//               <button onClick={() => handleAddPrice(item.id)}>Add Price</button>
//               <button onClick={() => handleRemove(item.id)}>Remove</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default About;








// import Button from '@mui/material/Button';

import {
  Button, Box, Container
  , Typography
} from '@mui/material';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function About() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log("red", res);
        setData(res.data);
      });
  }, []);

  const handleAddPrice = (id) => {
    alert("Add Price button clicked for product with ID: " + id);
  };

  const handleRemove = (id) => {
    const updatedItems = data.filter((item) => item.id !== id);
    setData(updatedItems);
  };

  const filterByCategory = (category) => {
    setCategory(category);
  };


  const filterCategory = category
    ? data.filter((item) => item.category === category)
    : data;

  return (
    <>
      <Box className='row'>
        <Container className='button-row' style={{ textAlign: "center" }}>
          <Button onClick={() => filterByCategory("women's clothing")}>Women's Clothing</Button>
          <Button onClick={() => filterByCategory('jewelery')}>Jewelry</Button>
          <Button onClick={() => filterByCategory('electronics')}>Electronics</Button>
          <Button onClick={() => filterByCategory("men's clothing")}>Men's Clothing</Button>
        </Container>

        {filterCategory.map((item) => (
          <div key={item.id}>
            <div className='box'>
              <img className='image' src={item.image} alt={item.title} />
              <br />
              <Typography variant='h6'>Title {item.title}</Typography>

              <p>Price {item.price}</p>
              <div style={{ margin: '10px' }}>
                <Button variant="contained" onClick={() => handleAddPrice(item.id)}>Add Price</Button>
                <Button variant="contained" onClick={() => handleRemove(item.id)}>Remove</Button>
              </div>

            </div>
          </div>
        ))}
      </Box>
    </>
  );
}

export default About;

