import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,

};
const Photo = props => {
  const [open, setOpen] = useState(false);
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  return (
  <div>
    <li>
       
      <img src={props.url}  alt={props.title} title={props.title} onClick={handleOpen}  />
     
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-img"
        aria-describedby="modal-modal-description"
      >
          <Box sx={style}>
          <img src={props.url} alt={props.title} title={props.title} id="modal-modal-img" />
          
        </Box>
        </Modal>
    </li>
  
  </div>
);
}

export default Photo;
