import React, { Component, useState } from 'react';

  function ChoreForm({ product }) {
    const [id, setId] = useState();
    const [name, setName] = useState();
    const [date, setDate] = useState();

    const handleSubmit = (e) => {
        // product([choreDesc, name, date])
        e.preventDefault();
      }

      super(props);
    this.state = {
      value: 'Please write an essay about your favorite DOM element.'
    };

    const handleChange = (event) => {
        this.setState({value: event.target.value});
    }
  
    return (
      <form onSubmit={e => {handleSubmit(e)}}>
        <h2>Simple centered modal</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
            hendrerit risus, sed porttitor quam.
        </p>
        <p>Numéro de la capsule:
            <input 
                type="text" 
                className="form-control" 
                id="maj-num" 
                value={product.id}
                onChange={e => setId(e.target.value)}
            >
            </input>
        </p>
        
      </form>
    )
  }

  export default ChoreForm;