// import { Typography } from "@mui/material";
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';



// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),

//   color: theme.palette.text.secondary,
// }));
// import React, { useEffect, useState } from "react";
// function Home() {


//   const [data, setData] = useState([])
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts").then((result) => {
//       result.json().then((res) => {
//         // console.log(res, "res");
//         setData(res)
//       })

//     })
//   }, [])
//   console.log("data", data);
//   return (
//     <>
//       <Typography variant='h3'>Fetch API GET Method</Typography>
//       {
//         data.map(item => {
//           return (
//             <>
//               {/* <h5>{item.title}</h5>
//               <div>{item.userId}</div>
//               <p>{item.body}</p> */}


//               <Box sx={{ width: '100%' }}>
//                 <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
//                   <Grid xs={6}>
//                     <Item>1</Item>
//                   </Grid>
//                   <Grid xs={6}>
//                     <Item>2</Item>
//                   </Grid>
//                   <Grid xs={6}>
//                     <Item>3</Item>
//                   </Grid>
//                   <Grid xs={6}>
//                     <Item>4</Item>
//                   </Grid>
//                 </Grid>
//               </Box>
//             </>
//           )
//         })
//       }

//     </>
//   );
// }

// export default Home;

import React, { useEffect, useState } from "react";
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((result) => result.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  console.log("data", data);

  return (
    <>
      <Typography variant='h3'>Fetch API GET Method</Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {data.map((item, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Item>{item.title}</Item>
              <Item>{item.userId}</Item>
              <Item>{item.body}</Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default Home;
