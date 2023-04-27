import { useState } from 'react';
import Bar from './Bar';
import CardPlace from './CardPlace';
import Navbar from './Navbar';

function Home() {
    const [value, setValue] = useState("")
    const handleChange = (value) => {
        setValue(value)
    }
    return (
        <div>
            <Bar onChange={handleChange}></Bar>
            <CardPlace value={value}></CardPlace>
            <Navbar></Navbar>
        </div>
    );
}

export default Home;