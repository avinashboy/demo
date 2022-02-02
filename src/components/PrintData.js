import { useContext, useRef } from "react";
import { Flight } from "../context";
import { useReactToPrint } from "react-to-print";
import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import logo from "../images/logo.png";
import form from "../images/form.png";
import to from "../images/to.png";
import moment from "moment";
const Barcode = require("qrcode.react");

function PrintData() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const { data } = useContext(Flight);
  return (
    <>
      <Container className='mt-5'>
        <Row className='mb-4'>
          <Col md={6} className='show-me fs-3 text text-center mb-2'>
            Download Ticket
          </Col>
          <Col md={6} className='show-me text-center mb-2'>
            <Button size='lg' onClick={handlePrint}>
              Print
            </Button>
          </Col>
        </Row>
        <Container ref={componentRef}>
          <Row className='mb-4'>
            {/* logo */}
            <Col md={12} className='show-me fs-3 text mb-2'>
              <img
                alt=''
                src={logo}
                width='80'
                height='80'
                className='d-inline-block align-top'
              />{" "}
              <span className='m-3 p-4 align-middle'>Flight Ticket</span>
            </Col>
            {/* from */}
            <Col md={6} className='show-me fs-3 text mb-2'>
              <img
                alt=''
                src={form}
                width='80'
                height='80'
                className='d-inline-block align-top'
              />{" "}
              <span className='m-3 p-4 align-middle'>
                {data.searchData.from}
              </span>
            </Col>
            {/* to */}
            <Col md={6} className='show-me fs-3 text mb-2'>
              <img
                alt=''
                src={to}
                width='80'
                height='80'
                className='d-inline-block align-top'
              />{" "}
              <span className='m-3 p-4 align-middle'>
                {data.searchData.destination}
              </span>
            </Col>
            {/* other info */}
            <Col md={12} className='d-flex justify-content-around'>
              <div>
                <p className="fs-4 text">
                  <span className="text-capitalize">time:</span>{" "}
                  {moment(data.searchData.departure).format("LLL")}
                </p>
                <p className="fs-5 text">
                  Adult : {data.searchData.adult} , Children : {data.searchData.children}
                </p>
              </div>
              <Barcode value={data.metaInfo.orderId} />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default PrintData;
