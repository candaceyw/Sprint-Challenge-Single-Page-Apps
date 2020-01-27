import styled from 'styled-components';




export const StyledBody = styled.div`
    width: 100vw;
    height: 100vh;
    background-repeat: no-repeat;
    background-attachment: fixed;
`;

export const WelcomeImage = styled.div`
    display: flex;
    align-items: center;
    background: white;
    border-radius: 10px;

        div{
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: auto;

            h1 {
                font-size: 2.5rem;
                line-height: 2;
            }

            button{
                background: #aeaeae;
                border: none;
                padding: 10px 20px;
                color: white;
                height: 50px;
                font-size: 1.4rem;

               
            }

        button::hover{
            background: #47d8ff;

        
        }
        }


        img{
            border-bottom-left-radius: 10px;
            border-top-left-radius: 10px;
            width: 50%;

        }    

`;


export const StyledCharWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left 2%;
   ;
  
 
`;


export const StyledCharacter = styled.div`
width: 45%;
box-shadow: 0 1px 1px rgba(0,0,0,0.11), 
0 2px 2px rgba(0,0,0,0.11), 
0 4px 4px rgba(0,0,0,0.11), 
0 8px 8px rgba(0,0,0,0.11), 
0 16px 16px rgba(0,0,0,0.11), 
0 32px 32px rgba(0,0,0,0.11);
margin: 2%

    div img{
        width: 100%;
    }
`;

export const CharacterInfo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 1%;
background: white;
`;

export const SearchBar = styled.div`

text-align: center;

    input{
    width: 80%;
    height: 30px;
    border: none
    padding: 10px;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    }
    input::placeholder {
        color: grey;
        font-size: 1.5em;
        padding: 1%;
      }

      button {background: white;
        border: none;
        padding: 10px 20px;
        color: gray;
        height: 50px;
        border-bottom-right-radius: 10px;
        border-top-right-radius: 10px;
    
        
    
    
      }}
`;