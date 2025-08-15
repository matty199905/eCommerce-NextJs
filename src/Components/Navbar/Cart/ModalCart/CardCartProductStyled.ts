import styled from "styled-components"




export const CardProductStyled = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
margin-left: 20px;
width: 100%;
height: 110px;
border: 1px solid #b5b5b5;
border-radius: 5px;
background-color: #eaeaea;
padding: 15px;
`

export const ImgTitleCardContainer = styled.div`
display:flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
img{width: 150px;
    height: 90px;
margin-bottom:-5px;
border-radius:10px;}
h2{color: black;
font-size:16px;
font-weight:500;
font-style: oblique;
margin: 15px 0px 0px 5px ;
}
`

export const HandlerAndPriceCardContainer = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
width: 200px;
height: 100%;
margin: 0px 40px 15px 0px;
`

export const HandlerQuantityContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 20px;
margin: 20px -28px 0px 0px;
width: 100%;
span{
    color: black;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 10px;

}
`

export const HandlerIconStyled = styled.button`
border: none;
background-color: transparent;
font-size: 30px;
color: darkblue;
cursor: pointer;
transition: all ease .05s;
&:active{
color: orange;
transform: scale(1.1);
transition: all ease .05s;
}
`

export const Price = styled.div`
font-size: 16px;
font-weight: 500;
font-style: oblique;
background-color: #ffc14d;
color: white;
margin-right: -29px;
padding: 15px;
border-radius: 5px;
`

type TrashIconProp = {
    $card?: boolean
}

export const TrashIcon = styled.div<TrashIconProp>`
color: black;
font-size: ${({$card}) => ($card === true ? '20px' : '23px')};
transform: scaleX(1);
position: ${({$card}) => ($card === true ? 'absolute' : 'static')};
top: 10px;
right: 10px;
cursor: pointer;
transition: all ease .2s;
&:hover{
    color: orange;
    transition: all ease .2s;
}
transform: scaleX(1);
position: ${({$card}) => ($card === true ? 'absolute' : 'null')};
top: 10px;
right: 10px;
`

