import React, { Component, useState } from 'react';
import ComponentsSidebar from '../shared/ComponentsSidebar';
import { Table } from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import ProductsDataService from "../../services/products.service";
import Pagination from "@material-ui/lab/Pagination";
import { Modal } from 'react-responsive-modal';
import "react-responsive-modal/styles.css";
import ProductForm from '../form/ProductForm';

export class Products extends Component {
        constructor(props) {
            super(props);
            this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
            this.retrieveProducts = this.retrieveProducts.bind(this);
            this.handlePageChange = this.handlePageChange.bind(this);
            this.state = {
                products: [],
                currentProduct: null,
                currentIndex: -1,
                searchTitle: "",
                page: 1,
                count: 0,
                openModal : false,
                product: {},
                tableData: [{
                    id: '',
                    email: '',
                    password: '',
                    // modalDialog: false,
                    // modalWithoutAnimation: false,

                }],
            };
        }

        inputChangedHandler = (event) => {
            const updatedKeyword = event.target.value;
            // May be call for search result
        }

        onClickButton = (event, product) => { 
            event.preventDefault()
            console.log(product);
            this.setState({openModal : true, product});
        }

        onCloseModal = () => {
            this.setState({openModal : false});
        }
    
        componentDidMount() {
            this.retrieveProducts();
        }

        onChangeSearchTitle(e) {
            const searchTitle = e.target.value;
            this.setState({
                searchTitle: searchTitle,
            });
        }

        getRequestParams(searchTitle, page) {
            let params = {};
            if (searchTitle) {
                params["title"] = searchTitle;
            }
            if (page) {
                params["page"] = page;
            }
            return params;
        }

        retrieveProducts() {
            const { searchTitle, page } = this.state;
            const params = this.getRequestParams(searchTitle, page);
            ProductsDataService.getAll(params)
            .then((response) => {
                const { products, totalPages } = response.data.data;
                this.setState({
                    products: products,
                    count: totalPages,
                });
            })
            .catch((e) => {
                console.log(e);
            });
        }

        handlePageChange(event, value) {
            this.setState({ page: value },() => {
                    this.retrieveProducts();
                }
            );
        }

        render() {
            const {
                searchTitle,
                products,
                currentProduct,
                currentIndex,
                page,
                count,
                pageSize,
                openModal,
            } = this.state;

            return (
                <div>
                    <div className="container d-flex p-md-0">
                        <ComponentsSidebar/>

                        <div className="az-content-body pd-lg-l-40 d-flex flex-column">
                            <div className="az-content-breadcrumb">
                                <span>Components</span>
                                <span>Tables</span>
                                <span>Basic Tables</span>
                            </div>
                            <h2 className="az-content-title">Basic Tables</h2>

                            <div className="az-content-label mg-b-5">Hoverable Rows Table</div>
                            <p className="mg-b-20">To enable a hover state on table rows.</p>

                            <div>
                                <div className="mt-3">
                                    <Pagination
                                        className="my-3"
                                        count={count}
                                        page={page}
                                        siblingCount={1}
                                        boundaryCount={1}
                                        variant="outlined"
                                        shape="rounded"
                                        onChange={this.handlePageChange}
                                    />
                                </div>
                            </div>

                            <div className="table-responsive">
                                <Table hover className="mg-b-0" 
                                    style={{
                                        width: "200%",
                                    }}
                                >
                                    <thead>
                                    <tr >
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Short Description</th>
                                        <th>Weight</th>
                                        <th>Width</th>
                                        <th>Height</th>
                                        <th>Wide</th>
                                        <th>Base Price</th>
                                        <th>Publish Price</th>
                                        <th>Stock</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    { this.state.products.map((product, index) => { 
                                        return (
                                            <tr key={index} onClick={event => this.onClickButton(event, product)}>
                                                <td>{product.id}</td>
                                                <td>{product.product_name}</td>
                                                <td>{product.sort_description}</td>
                                                <td>{product.weight}</td>
                                                <td>{product.width}</td>
                                                <td>{product.height}</td>
                                                <td>{product.wide}</td>
                                                <td><NumberFormat value={product.base_price} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} /></td>
                                                <td><NumberFormat value={product.publish_price} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} /></td>
                                                <td><NumberFormat value={product.stock} displayType={'text'} thousandSeparator={true} /></td>
                                            </tr>
                                        );
                                    })}
                                    </tbody>
                                </Table>
                            </div>{/* table-responsive */}
                            {/* <div className="ht-40"></div> */}
                        </div>{/* az-content-body */}
                    </div>{/* container */}  

                    <Modal open={this.state.openModal} onClose={this.onCloseModal}>
                        <ProductForm product={this.state.product} />
                    </Modal>

                </div>
            )
        }
}


export default Products
