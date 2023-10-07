import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),

  color: theme.palette.text.secondary,
}));



function Home() {
  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Item>
              <img className="cityname" src="Ghazipur.jpg" alt="image" />

            </Item>
          </Grid>

          <Grid item xs={6}>
            <Item>
              <Typography variant="h3">My Hometown </Typography>
              <p>Ghazipur was covered with dense forest in Vedic era and it was a place for Ashrams of Saints during that period. This place is related to the Ramayana period where Maharshi Yamdgni,
                the Father of Mahrshi Parsuram resided over here.The Famous Rishis Gautam & Chyavan were given teaching and sermon here in ancient period. The Lord Buddha who gave the first sermon
                in Sarnath,Varanasi which is not very far from here. The Aurihar area of Ghazipur district became the main center for teaching of Lord Buddha. Many stoopas and pillars are the main
                evidence of that period. Chinese Traveller Hiuen Tsang had visited this area and described this place as Chanchu “The Land of Battle Fields”.
                This Place was the main center in medieval period from Sultanate period to Mughals. In Tughalk period, Zuna Khan, alias Muhammad Tuglak established the Jaunpur as the capital under
                which the Ghazipur was ruled .</p>
              <p> In the regime of Zuna Khan, the Saiyyad Massod Ghazi established this town , by defeating he Raja Mandhata, the ancestor of brave King Prithvi Raj Chauhan.
                In Lodhi Period, the Naseer Khan Nuhani was the Administrator of Ghazipur who changed its conditions. This Area was the main center during Mughal period when Babar took over the charge of
                Ghazipur and Muhammad Khan Nuhani became its administrator. In the reign of Akbar, the Afghan Ali Kuli Khan took over the charge of Ghazipur and developed the town Zamania. After the Death
                of Aurangjeb this area was taken by Jamindar Mansa Ram . Thereafter, Ghazipur came under the suzerainty of the Banaras state and Raja Balwant Singh, the Son of Mansa Ram became the King of Ghazipur.
                After the attack of Warren Hastings, the then Governor General of the British rule, this area was ruled over by various British rulers. The Lord Cornwallis, who was very famous for reforms in land
                came to visit this place and accidentally died. In his memory a beautiful tomb which attracts the tourist is also present in Ghazipur City.This Area is Fertile with Great Freedom fighters. The Hero of
                Ist Freedom movement ( which is popularly referred to as Sepoy Movement ) Mangal Pandey comes from this soil only. The Famous Nilha Sahib Revolt is Associated with this place where the Farmers revolted
                against the British & they set on fire various Indigo Godowns. The Ghazipur Plays and has played a major role in India’s Freedom Struggle.</p>

              <p> In the history of Indian National movement the significant role was played by the people of Ghazipur. In home rule, Rolat Act , Khalafat Movment , Namak Kanoon, Videshi Bastro Ka Bahiskar Satyagrah &
                movement of 1942 the people of Ghazipur took part couragously & fearlessly to our pride.
              </p>
              <p> People namely Dr. Mukhtar Ahmad Ansari, Sahjanand Sarwasti, Dr. Sayad Mahmood Qazi, Nijamul Haq Anasri, Bhagawat
                Mishra, Gajanan Marwari, Vishwanath Sharma, Hari Prasad Singh, Vaseer, Ram Murat Singh , Ram Raj Singh, Bola Singh, Indradev Tripathi, Dev Karan Singh, Vishwnath Ji, Sideshawar Prasad Singh, Ram Sawaroop
                Pandey, Saraju Pandey, Dalsingar Dube, Ram Bahadur Shastri & other many others recorded their prideful roles. People of this district played indeliable roles in QUIT INDIA MOVEMENT.In the history of Indian
                National movement the significant role was played by the people of Ghazipur.

                Local time: Friday, 4:43 pm
                PIN: 233001
                District: Ghazipur. </p>

              <i>Sonam Kumari.</i>


            </Item>
          </Grid>
        </Grid>

        <Typography variant="h5" style={{ textAlign: "center", padding: "30px", position: "relative" }}>
          Thank you for reading this paragraph.
        </Typography>
      </Box>
    </>
  );
}

export default Home;
