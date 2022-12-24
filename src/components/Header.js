import React ,{useState,useEffect} from 'react'
import {Navbar,Nav,Container} from "react-bootstrap"
import Slider from "@material-ui/core/Slider";


const Header = (props) => {

    
    const [speed,setSpeed] = useState(3);
    
    function refreshPage() {
        window.location.reload(false);
      }

    useEffect(() => {
       props.setTime(500/speed);
    }, [speed])
   

    return (
        <>
        <Navbar expand="lg" bg="dark" variant="dark" style={{height:"10%"}}>
            <Container >
            <button type="button" className="btn btn-primary btn-lg mr-2"   onClick={() => refreshPage()}><i className="fas fa-redo"></i></button>
            <button type="button" className="btn btn-primary btn-lg mr-2" disabled={props.loading ? true : false} onClick={() => props. genRandomArray()}>Generate</button>
            <Slider
                key={`slider-${speed}`}
                defaultValue={speed}
                onChange={(event, value) => setSpeed(value)}
                aria-labelledby="discrete-slider"
                step={1}
                marks
                min={1}
                max={5}
                style={{ flexGrow: 1, flexBasis: "100%" ,marginRight: "2%",marginLeft: "2%",color: "white"}}
            />
            <Nav className="me-auto" >
            <button type="button" className="btn btn-danger btn-lg  mr-3" disabled={props.loading ? true : false} onClick={() => props. bubbleSort()}>Bubble</button>
            <button type="button" className="btn btn-danger btn-lg mr-3" disabled={props.loading ? true : false} onClick={() => props. insertionSort()}>Insertion</button>
            <button type="button" className="btn btn-danger btn-lg mr-3" disabled={props.loading ? true : false}  onClick={() => props. mergeSort()}>Merge</button>
            <button type="button" className="btn btn-danger btn-lg mr-3" disabled={props.loading ? true : false}  onClick={() => props. selectionSort()}>Selection</button>
            <button type="button" className="btn btn-danger btn-lg" disabled={props.loading ? true : false} onClick={() => props. quickSort()}>Quick</button>
            </Nav>
            </Container>
        </Navbar>
        </>
    )
}

export default Header
