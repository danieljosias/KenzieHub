import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Inter', sans-serif;
}

:root{
    --primary-color: #FF577F;
    --primary-focus: #FF427F;
    --primary-negative: #59323F;
    --grey-4: #121214;
    --grey-3: #212529;
    --grey-2: #343B41;
    --grey-1: #868E96;
    --grey-0: #F8F9FA;
    --grey-50: #868E96;
    --success: #3FE864;
    --error: #E83F5B;
}

body{
    background-color: var(--grey-4);
}

label{
    color: var(--grey-0);
    font-size: 0.8em;
}

input{
    background-color: var(--grey-2);
    border: var(--grey-0);
    border-radius: 0.3em;
    color: #FFFFFF;
}

::placeholder{
    color: var(--grey-50);
}

select{
    border: none;
    border-radius: 0.3em;
    cursor: pointer;
}

h2{
    color: var(--primary-color);
    font-weight: bold;
}

h3{
    color: var(--grey-0);
    font-weight: bold; 
}

p{
    color: var(--grey-1);
    font-size: 1em;
}

button{
    border: none;
    cursor: pointer;
    border-radius: 0.3em;
}
`