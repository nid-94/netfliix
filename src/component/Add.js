import React,{useState,useRef} from 'react'
import {Button,Modal} from "react-bootstrap"

export const Add = ({addNew}) => {
  
    
    const titleRef =useRef();
    const descriptionRef =useRef();
    const urlRef =useRef();
    const rateRef =useRef();

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () =>setShow(false);
    
    
   
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
        Add
      </Button>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
        <label for="title">title:</label><br />
            <input type="text"  placehoder="enter the movie name here" ref={titleRef}  /><br/>
        <label for="lname">description:</label><br />
            <input type="text"  placehoder="enter the movie description here" ref={descriptionRef}/><br/>
        <label for="lname">URL poster :</label><br />
            <input type="text"  placehoder="enter URLposter here" ref={urlRef} /><br/>
	    <label for="lname">rate :</label><br />
            <input type="text"  placehoder="enter rate here"  ref={rateRef}/><br/>	
        </form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Close
        </Button>
        <Button variant="primary" onClick={()=>addNew({
            title:titleRef.current.value,
            description:descriptionRef.current.value,
            rating:rateRef.current.value,
            posterURL:urlRef.current.value,
        
        
        })} >
            Add
        </Button>
        </Modal.Footer>
        </Modal>
        </div>
    )
}