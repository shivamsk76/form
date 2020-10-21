import React, { useState } from 'react';

function Form() {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [fathername, setFathername] = useState('');
    const [mothername, setMothername] = useState('');
    const [mobile, setMobile] = useState('')

    const submitHandle = (e) => {
        e.preventDefault();

        
    }



    return (
        <div>
            <form onSubmit={submitHandle}>
                Name:<input type='text' placeholder="Enter your name" onChange={(e) => setName(e.target.value)} /> <br/><br/>
                LastName:<input type='text' placeholder="Enter your Lastname" onChange={(e) => setLastname(e.target.value)} /><br/><br/>
                Father Name:<input type='text' placeholder="Enter your Father's name" onChange={(e) => setFathername(e.target.value)} /><br/><br/>
                Mother Name:<input type='text' placeholder="Enter your mother's name" onChange={(e) => setMothername(e.target.value)} /><br/><br/>
                Mobile No:<input type='text' placeholder="Enter your mobile number" onChange={(e) => setMobile(e.target.value)} /><br/><br/>
                <input type='submit' title='submit' />
            </form>
        </div>
    )
}

export default Form ;
