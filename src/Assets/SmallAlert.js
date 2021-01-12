import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({
  valueValidation,
  onClickValidation,
  labelValidation,
  titleValidation,
  labelTitle,
  labelValidationButton
}) {

  /*
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
*/

  return (
    <div>

      <Dialog
        open={valueValidation}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClickValidation}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{labelTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {labelValidation}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClickValidation} color="primary">
            {labelValidationButton}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
