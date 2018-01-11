import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import '../App.css';



import { cartItems } from '../action/action';


class ItemList extends Component {

    constructor(props) {
        super(props);
        this.state = { cart: {}, order: {} };


    }
    change(event) {
        let cart = this.state.cart;
        let name = event.target.name;
        let value = event.target.value;
        cart[name] = value;
        this.setState({ cart });

    }

    click(row) {
        let order = this.state.order;
        let cart = this.state.cart;
        this.state.order.name = row.name;
        this.state.order.id = row.id;
        this.state.order.price = row.price;

        this.state.order.image = row.image;
        this.state.order.quantity = this.state.cart.quantity;
        this.state.cart.item = this.state.cart.item + 1;
        this.setState({ cart });
        this.setState({ order });

        this.props.cartItems(this.state.order);

    }






    TableRow = row => (
        <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td><img src={row.image} className="image" /></td>
            <td>{row.price}</td>
            <td><input type="number" name="quantity" placeholder="Quantity please...!" onChange={this.change.bind(this)} min="0" />
                <button onClick={this.click.bind(this, row)}>ADD TO CART</button></td>
        </tr>
    );

    Table = items => {


        return (<table>
            <th>S.no</th>
            <th>Food-Items</th>
            <th></th>
            <th>Price</th>
            <th>Quantity</th>
            {items.map(row => {
                return this.TableRow(row);
            })}
        </table>);
    };

    totalQuantity() {

        if (this.props.cart.length === 0) {
            console.log("empty");
        }
        else {

            const totalQuantity = this.props.cart.map((iterator) => {
                return iterator.quantity;
            });
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            const totalQy = totalQuantity.map(Number);
            const final = totalQy.reduce(reducer);

            return (<div>
                <h1 className="totalquantity">
                    total quantity:{final}</h1>
            </div>)

        }
    }
    render() {


        const { cart } = this.props;

        const { items } = this.props;
        return (<div>
            <header></header>
            {this.totalQuantity()}
            {this.Table(items)}

        </div>
        );
    }
}




function matchDispatchToProps(dispatch) {
    return bindActionCreators({ cartItems: cartItems }, dispatch);
}

function mapStateToProps(state) {
    return {
        items: state.items,
        cart: state.cart
    };
}

export default connect(mapStateToProps, matchDispatchToProps)(ItemList);