import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import '../node_modules/font-awesome/css/font-awesome.min.css';

class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: [],
            listItem: ""
        };
        this.setListItem = this.setListItem.bind(this);
    }

    setListItem = (e) => {
        let v = e.target.value;
        this.setState({ listItem: v });
    }

    addItem = () => {
        let todo = {
            name: this.state.listItem,
            isChecked: false
        };
        //this.state.todoList.push(todo);
        this.props.setList(todo);
        document.getElementById("add-item").value = "";
    }

    render() {
        return (
            <div className="item-div">
                <div className="add-item">
                    <Row>
                        <Col lg={8} md={8} sm={8}>
                            <input type="text" name="add-item" id="add-item" placeholder="&#xf02c;&#x2002;What needs to be done?" className="input-item" onChange={this.setListItem} />
                        </Col>
                        <Col lg={4} md={4} sm={4}>
                            <Button className="btn" onClick={this.addItem}><i className="fa fa-circle-thin icon-circle" aria-hidden="true"><i className="fa fa-plus icon-plus" aria-hidden="true"></i></i>  Add</Button>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default AddItem;