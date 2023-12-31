import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import SearchFood from './Components/SearchFood';

export const Get_URL = "http://localhost:9000";
export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filterData, setFilterData] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState("all");

  useEffect(() => {

    const fetchDataURl = async () => {
      setLoading(true);

      try {

        const response = await fetch(Get_URL)
        const json = await response.json();
        // console.log(json);
        setData(json);
        setFilterData(json);

        setLoading(false);

      }

      catch (error) {
        setError("data is not found ");

      }
    }

    fetchDataURl();



  }, [])


  const searchFilters = (e) => {
    const SearchValue = e.target.value;
    console.log(SearchValue)


    if (SearchValue === "") {
      setFilterData(null)
    }

    const filter = data?.filter((data) => data.name.toLowerCase().includes(SearchValue.toLowerCase())
    );

    setFilterData(filter)
  }






  const selectedData = (type) => {
    if (type === "all") {
      setFilterData(data);
      setSelectedBtn("all")
      return
    }
    const filter = data?.filter((data) => data.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilterData(filter);
    setSelectedBtn(type)


  }

  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading... </div>;

  const filterBtn = [
    {
      name: "All",
      type: "all"
    },
    {
      name: "BreakFast",
      type: "breakfast"
    },
    {
      name: "Lunch",
      type: "lunch"
    },
    {
      name: "Dinner",
      type: "dinner"
    },

  ]
  return (
    <Container>
      <TopContainer>
        <div className='log-img'>
<h2>
   F<span>oo</span>d
   F<span>aa</span>ty
  </h2>
        </div>
        <div className="input-box">
          <input placeholder='Food Search' onChange={searchFilters} />
        </div>

      </TopContainer>

      <SelectedContainer>

        {
          filterBtn.map((value) => (
            <Button
            isSelected={selectedBtn===value.type}
            key={value.name} onClick={() => selectedData( value.type )}>{value.name} </Button>


          ))
        }

    
          <div className="link-div">
          <a href="https://github.com/RachitSahu26" title="Image from freepnglogos.com"><img src="https://www.freepnglogos.com/uploads/512x512-logo-png/512x512-logo-github-icon-35.png" width="50" alt="512x512 logo github icon" /></a>
          <a href="https://www.linkedin.com/in/rachit-sahu-004ba2255/" title="Image from freepnglogos.com"><img src="https://www.freepnglogos.com/uploads/linkedin-basic-round-social-logo-png-13.png" width="50" alt="linkedin basic round social logo png" /></a>
          <a href="https://www.instagram.com/curious.rachit/" title="Image from freepnglogos.com"><img src="https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-instagram-new-logo-vector-download-13.png" width="50" alt="logo ig, instagram new logo vector download" /></a>
          </div>
    
      </SelectedContainer>

      <SearchFood data={filterData} />
    </Container>
  )
}

// ........1=> Container...........

export const Container = styled.div`

margin: 0 auto;

`
// ........1(1)=> TopContainer...........

const TopContainer = styled.section`
display: flex;

justify-content:space-between;
min-height: 140px;
width: 100%;
padding:50px 60px ;
text-align: center;

h2 {
  font-size: 45px;
}
h2 span{

color:aqua
}
.input-box{
  input{
padding: 20px;
font-size:15px;
    border: 2px solid aqua;
    background: transparent;
 color:white;
 /* border: none; */
border-radius: 10px;
 font-size: 20px;
  }


}
@media(0<width< 592px){
  flex-direction: column;

  .input-box{
margin-top: 33px;

&::placeholder {
  color: white ;
}
}
}
`

// ........1(2)=> SelectedContainer...........


const SelectedContainer = styled.section`

display: flex;
justify-content: center;
gap: 12px;

.link-div img{
  margin-left: 33px;
  transition: 0.2s;
&:hover{
  scale: 0.7;
  border: 2px solid aqua;
border-radius: 50%;
}
}
.link-div {

 position: relative;
 left: 293px;
 
}
`
// ........1(2.1)=> button...........

export const Button = styled.button`
background:${({isSelected})=> (isSelected ? "aqua":"#37c5c5")};
outline:2px solid ${({isSelected})=> (isSelected ? "red":"#37c5c5")};

border-radius: 5px;

padding:10px;
border: none;
font-size: 24px ;
color: black;
transition: 0.2s;
&:hover{
  background: aqua;
cursor: pointer;
scale: 1.1;
}



`

