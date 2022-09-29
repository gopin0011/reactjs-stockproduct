import React, { Component, useState } from 'react';
import { Button } from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import ProductsDataService from "../../services/products.service";
import PropTypes from 'prop-types';

const baseURL = process.env.REACT_APP_SERVER_URL;

class ProductForm extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        product: {
            id: this.props.product && this.props.product.id ? this.props.product.id : undefined,
            name: this.props.product.id ? this.props.product.product_name : '',
            sort_description: this.props.product.id ? this.props.product.sort_description : '',
            full_description: this.props.product.id ? this.props.product.full_description : '',
            stock: this.props.product.id ? this.props.product.stock : 0,
            height: this.props.product.id ? this.props.product.height : 0,
            weight: this.props.product.id ? this.props.product.weight : 0,
            wide: this.props.product.id ? this.props.product.wide : 0,
            width: this.props.product.id ? this.props.product.width : 0,
            base_price: this.props.product.id ? this.props.product.base_price : '0',
            publish_price: this.props.product.id ? this.props.product.publish_price : '0',
            photo: this.props.product.id ? baseURL+this.props.product.photos : null,
        }
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        this.setState({
            product: {
              ...this.state.product,
              [e.target.name]: e.target.value
            }
          });
          console.log(this.state.product);
    }

    handleValueChange = (target, value) => {
        this.setState({
            product: {
              ...this.state.product,
              [target]: value
            }
          });
    }

    handleSubmit(e) {
      e.preventDefault();
      const data = this.state.product;
      ProductsDataService.save(data).then(product => {
        // clearForm()
        // onSave && typeof onSave === 'function' && onSave(product);
      })
    }
  
    render() {
      const { editMode } = this.props;
      const pageTitle = editMode ? 'Edit Post' : 'Create Post';
      const buttonTitle = editMode ? 'Update' : 'Post';

      return (
        <form onSubmit={this.handleSubmit}>
            <h2>{pageTitle}</h2>
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
                    name="name"
                    className="form-control" 
                    defaultValue={this.state.product.name}
                    onChange={this.handleChange}
                >
                </input>
            </p>
            <p>Short Description:
                <input 
                    type="text" 
                    className="form-control" 
                    name="sort_description"
                    defaultValue={this.state.product.sort_description}
                    onChange={this.handleChange}
                >
                </input>
            </p>
            <p>Full Description:
                <input 
                    type="text" 
                    className="form-control" 
                    name="full_description"
                    defaultValue={this.state.product.full_description}
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
                    defaultValue={this.state.product.height}
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
                    defaultValue={this.state.product.weight}
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
                    defaultValue={this.state.product.wide}
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
                    defaultValue={this.state.product.width}
                    onChange={this.handleChange}
                >
                </input>
            </p>
            <p>Base Price:
                <NumberFormat 
                defaultValue={this.state.product.base_price} 
                thousandSeparator={true} 
                prefix={'Rp. '} 
                onValueChange={(values) => {
                    this.handleValueChange('base_price', values.floatValue);
                }}
                className="form-control" 
                name="base_price" />
            </p>
            <p>Publish Price:
                <NumberFormat 
                defaultValue={this.state.product.publish_price} 
                thousandSeparator={true} 
                prefix={'Rp. '} 
                onValueChange={(values) => {
                    this.handleValueChange('publish_price', values.floatValue);
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
                    defaultValue={this.state.product.stock}
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
                    defaultValue={this.state.product.photo}
                    onChange={this.handleChange}
                >
                </input>
            </p>
            <Button variant="az-primary btn-block" type="submit">{buttonTitle}</Button>
        </form>
      );
    }
  }

ProductForm.propTypes = {
    editMode: PropTypes.bool,
    // post: PropTypes.object
}

ProductForm.defaultProps = {
    editMode: false,    // false: Create mode, true: Edit mode
    // post: {
    //     title: "",
    //     body: ""
    // }    // Pass defined Post object in create mode in order not to get undefined objects in 'defaultValue's of inputs.
}

  export default ProductForm;