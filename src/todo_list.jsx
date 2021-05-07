import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import '../node_modules/font-awesome/css/font-awesome.min.css';
class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    checkedItem = (e, item, index) => {

        this.props.checkedItem(item.name, e.target.checked, index);
    }

    deleteItem = (item, index) => {
        this.props.remove(item.name, index);
    }

    render() {
        return (
            <div className="todo-list-item ">
                {
                    this.props.lists.map((item, index, { length }) => {
                        return <Row className={`list animate__animated ${(index + 1 === length) ? 'top-space' : 'border-bot'} ${(item.isDeleted === true) ? 'animate__fadeOut' : 'animate__bounceIn'}`}>
                            <Col lg={10} md={10} sm={10}>
                                <div>
                                    <input type="checkbox" checked={item.isChecked} className="input-checkbox" onChange={(e) => this.checkedItem(e, item, index)} />&#x2002;
                                    <i className={`fa fa-square-o ${(item.isChecked === true) ? 'icon-square2' : 'icon-square1'}`} aria-hidden="true"></i>
                                    <i className={`fa ${(item.isChecked === true) ? 'fa-check icon-check' : 'fa-minus icon-minus'}`} aria-hidden="true"></i>&#x2002;
             {/* <i className="fa fa-square-o icon-square2" aria-hidden="true"></i><i className="fa fa-check icon-check" aria-hidden="true"></i>&#x2002; */}
                                    <p key={index} className={(item.isChecked === true) ? 'para-strike align animate__bounceIn' : 'align'}>{item.name}</p>
                                </div>
                            </Col>
                            <Col lg={2} md={2} sm={2}>
                                <Button className="btn delete-btn" onClick={() => this.deleteItem(item, index)}><i className="fa fa-trash-o icon-delete" aria-hidden="true"></i></Button>
                            </Col>
                        </Row>

                    })
                }</div >


        )
    }
}

export default TodoList;