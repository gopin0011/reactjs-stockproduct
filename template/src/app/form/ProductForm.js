import React, { Component, useState } from 'react';
import { Button } from 'react-bootstrap';
import NumberFormat from 'react-number-format';

const baseURL = process.env.REACT_APP_SERVER_URL;

class ProductForm extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        product: {
            id: this.props.product.id,
            name: this.props.product.product_name,
            sort_description: this.props.product.sort_description,
            full_description: this.props.product.full_description,
            stock: this.props.product.stock,
            height: this.props.product.height,
            weight: this.props.product.weight,
            wide: this.props.product.wide,
            width: this.props.product.width,
            base_price: this.props.product.base_price,
            publish_price: this.props.product.publish_price,
            photo: baseURL+this.props.product.photos,
        }
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        this.setState ({ [e.target.name]: e.target.value });
    }
  
    handleSubmit(event) {
      alert('An essay was submitted: ' + this.state.product_name);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <h2>Simple centered modal</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                hendrerit risus, sed porttitor quam.
            </p>
            <p>ID:
                <input 
                    type="text" 
                    className="form-control" 
                    name="id"
                    value={this.state.product.id}
                    disabled="disabled"
                    onChange={this.handleChange}
                >
                </input>
            </p>
            <p>Product Name:
                <input 
                    type="text" 
                    name="product_name"
                    className="form-control" 
                    value={this.state.product.name}
                    onChange={this.handleChange}
                >
                </input>
            </p>
            <p>Short Description:
                <input 
                    type="text" 
                    className="form-control" 
                    name="sort_description"
                    value={this.state.product.sort_description}
                    onChange={this.handleChange}
                >
                </input>
            </p>
            <p>Full Description:
                <input 
                    type="text" 
                    className="form-control" 
                    name="full_description"
                    value={this.state.product.full_description}
                    onChange={this.handleChange}
                >
                </input>
            </p>
            <p>Height:
                <input 
                    type="text" 
                    min="0"
                    className="form-control" 
                    name="height"
                    value={this.state.product.height}
                    onChange={this.handleChange}
                >
                </input>
            </p>
            <p>Weight:
                <input 
                    type="text" 
                    min="0"
                    className="form-control" 
                    name="weight"
                    value={this.state.product.weight}
                    onChange={this.handleChange}
                >
                </input>
            </p>
            <p>Wide:
                <input 
                    type="text" 
                    min="0"
                    className="form-control" 
                    name="wide"
                    value={this.state.product.wide}
                    onChange={this.handleChange}
                >
                </input>
            </p>
            <p>Width:
                <input 
                    type="text" 
                    min="0"
                    className="form-control" 
                    name="width"
                    value={this.state.product.width}
                    onChange={this.handleChange}
                >
                </input>
            </p>
            <p>Base Price:
                <NumberFormat 
                value={this.state.product.base_price} 
                thousandSeparator={true} 
                prefix={'Rp. '} 
                onValueChange={(values, sourceInfo) => {
                    // console.log(values, sourceInfo);
                }}
                className="form-control" 
                name="base_price" />
            </p>
            <p>Publish Price:
                <NumberFormat 
                value={this.state.product.publish_price} 
                thousandSeparator={true} 
                prefix={'Rp. '} 
                onValueChange={(values, sourceInfo) => {
                    // console.log(values, sourceInfo);
                }}
                className="form-control" 
                name="publish_price" />
            </p>
            <p>Stock:
                <input 
                    type="number" 
                    min="0"
                    className="form-control" 
                    name="stock"
                    value={this.state.product.stock}
                    onChange={this.handleChange}
                >
                </input>
            </p>
            <p>Photo:
                <input 
                    type="text" 
                    min="0"
                    className="form-control" 
                    name="photo"
                    value={this.state.product.photo}
                    onChange={this.handleChange}
                >
                </input>
            </p>
            <Button variant="az-primary btn-block" type="submit">Submit</Button>
        </form>
      );
    }
  }

  export default ProductForm;