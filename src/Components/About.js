import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import axios from 'axios';

function About() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Define the API URL you want to fetch data from
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";

    // Use Axios to make a GET request to the API
    axios.get(apiUrl)
      .then((response) => {
        // Handle the response data here
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <Typography variant='h3' style={{ textAlign: "center" }}>About Us</Typography>
      <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
        <Avatar alt="Sonam" src="/static/images/avatar/1.jpg" />
      </Stack>
      <div className='row'>
        {data.map((item) => (
          <div className='col'>
          <div key={item.id}>
            <strong>{item.title}</strong>
            <p>{item.body}</p>
          </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default About;
