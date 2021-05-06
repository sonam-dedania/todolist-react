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
            listItem: "",
            error: ""
        };
        this.setListItem = this.setListItem.bind(this);
    }

    setListItem = (e) => {
        this.setState({ listItem: e.target.value });
    }

    addItem = () => {

        let todo = {
            name: this.state.listItem,
            isChecked: false,
        };
        if (todo.name !== "") {
            this.props.setList(todo);
            this.setState({ error: "" });
        }
        else {
            let msg = "Please enter valid Item";
            this.setState({ error: msg });
        }
        this.setState({ listItem: "" });
    }

    render() {
        return (
            <div className="item-div">
                <div className="add-item">
                    <Row>
                        <Col lg={8} md={8} sm={8}>
                            <input type="text" value={this.state.listItem} name="add-item" id="add-item" placeholder="&#xf02c;&#x2002;What needs to be done?" className="input-item" onChange={this.setListItem} />
                        </Col>
                        <Col lg={4} md={4} sm={4}>
                            <Button className="btn add-btn" onClick={this.addItem}><i className="fa fa-circle-thin icon-circle" aria-hidden="true"><i className="fa fa-plus icon-plus" aria-hidden="true"></i></i>  Add</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <span style={{ color: "red" }}>{this.state.error}</span>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default AddItem;