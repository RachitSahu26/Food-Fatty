import React from 'react'
import styled from "styled-components"
import { Get_URL,Button } from '../App'

function SearchFood({ data }) {
    return (
        <FoodCards>
                
                {
                    data?.map(({ name, image, text, price }) => (
                        <FoodCard kay={name} >


                            <div className="FoodCard">
                                <div className="food-img">
                                    <img src={Get_URL + image}  alt='food'/>
                                    <div className="food-detail">
                                        <h2>{name}</h2>
                                        <p>{text}</p>
                                    </div>


                                </div>
                                        <Button>${price.toFixed(2)} </Button>

                            </div>

                        </FoodCard>
                    ))}
           
            </FoodCards>
      
    )
}

export default SearchFood


const FoodCards=styled.div`
  background-image    : url("/bg.png");
background-repeat: no-repeat;
background-size: cover;
min-height: 650px;
height: auto;
justify-content: center;
display: flex;
flex-wrap: wrap;
text-align: center;
column-gap: 33px;
row-gap: 33px;

padding-top:30px;`

const FoodCard =styled.div`
color: black;
    background-color: #eceaea;
    /* border: 2px solid red; */
    width: 280px;
    height:350px;
    border-radius: 10px;
   padding: 10px;
 transition: 0.4s;
   &:hover{
 
cursor: pointer;
scale: 1.1;
}

Button{
    line-height: 30px;
    margin-top: 20px;
}

   
`








