import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import FilterList from '../Filters/Filter.list';
import { Button, Modal, Form } from 'react-bootstrap';
import { handleSubmit } from '../utils/filters';

const FilterModal = ({
  showModal,
  onHideModal,
  tenisesList,
  dataFilters,
  typeFilters: { ACTIVE_FILTER_LIST, FILTER_LIST },
}) => {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({});

  return (
    <Modal
      show={showModal}
      onHide={onHideModal}
      keyboard={false}
      className="custom__modal"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Form
          className="contact-form"
          onSubmit={(e) =>
            handleSubmit(
              e,
              ACTIVE_FILTER_LIST,
              FILTER_LIST,
              filters,
              tenisesList,
              dispatch,
              onHideModal
            )
          }
        >
          <div className="filter-body">
            {Object.keys(dataFilters).map((keyList, index) => (
              <Form.Group controlId={`filter${keyList}`} key={index}>
                <FilterList
                  keyList={keyList}
                  dataFilters={dataFilters}
                  liClass="filter-row"
                  filters={filters}
                  setFilters={setFilters}
                />
              </Form.Group>
            ))}
          </div>
          <Modal.Footer>
            <Button variant="secondary" type="submit">
              Filtrer
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FilterModal;
