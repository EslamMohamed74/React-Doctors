import React from 'react';
import { Pagination } from 'react-bootstrap'
import './PaginationComponent.css'

const PaginationComponent = () => {
    let active = 1;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
                <Pagination.Item key={number} active={number === active}>
                    {number}
                </Pagination.Item>
        );
    }
    return (
        <Pagination >
            <Pagination.Prev className="disable"/>
            {items}
            <Pagination.Next className="next"/>
        </Pagination>
    );

}


export default PaginationComponent;
