import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import QuantitySelect from './Select'
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import OrderIntakeDate from './DatePicker'
import KickOffDate from './DatePicker'

export default function FormDialog({
  open,
  onClick,
  handleClose,
  titleDialog,
  buttonCancelLabel,
  buttonConfirmLabel,
  generalDescription,
  valueProject,
  onChangeProjectValue,
  valueCountry,
  onChangeCountry,
  labelCountry,
  dataCountries,
  labelQtty,
  valueQtty,
  onChangeQtty,
  dataQtty,
  labelGeneration,
  valueGeneration,
  onChangeGeneration,
  dataGeneration,
  labelBlade,
  valueBlade,
  onChangeBlade,
  dataBlade,
  labelTower,
  valueTower,
  onChangeTower,
  dataTower,
  labelTM,
  valueTM,
  onChangeTM,
  dataTM,
  labelSM,
  valueSM,
  onChangeSM,
  dataSM,
  valueClient,
  onChangeClient,
  labelPriority,
  valuePriority,
  onChangePriority,
  dataPriority,
  labelOI,
  valueOI,
  onChangeOI,
  labelKO,
  valueKO,
  onChangeKO,
  labelRS,
  valueRS,
  onChangeRS,
  dataRS,
  labelLOG,
  valueLOG,
  onChangeLOG,
  dataLOG,
  labelGate,
  valueGate,
  onChangeGate,
  dataGate,
  labelStatus,
  valueStatus,
  onChangeStatus,
  dataStatus,
  labelComments,
  valueComments,
  onChangeComments


}) {

const styles ={
  mandatory: {
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap'
  },
  optional: {
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap'
  },
  textField: {
    width: '100%'
  }
}

  return (
    <div>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{titleDialog}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {generalDescription}
          </DialogContentText>

<div style={styles.mandatory}>
          {/*PROJECT NAME*/}
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Project Name (*)"
            type="text"
            fullWidth
            value={valueProject}
            onChange={onChangeProjectValue}
            style={styles.textField}
          />
          {/*COUNTRY*/}
          <QuantitySelect
              label={labelCountry}
              value={valueCountry}
              onChange={onChangeCountry}
              data={dataCountries}
          />
          {/*WTG QTTY*/}
          <QuantitySelect
              label={labelQtty}
              value={valueQtty}
              onChange={onChangeQtty}
              data={dataQtty}
          />
          {/*GENERATION*/}
          <QuantitySelect
              label={labelGeneration}
              value={valueGeneration}
              onChange={onChangeGeneration}
              data={dataGeneration}
          />
          {/*BLADE*/}
          <QuantitySelect
              label={labelBlade}
              value={valueBlade}
              onChange={onChangeBlade}
              data={dataBlade}
          />
          {/*TOWER*/}
          <QuantitySelect
              label={labelTower}
              value={valueTower}
              onChange={onChangeTower}
              data={dataTower}
          />
          {/*PRIORITY*/}
          <QuantitySelect
              label={labelPriority}
              value={valuePriority}
              onChange={onChangePriority}
              data={dataPriority}
          />
</div>
<br/>
<Typography  variant="overline" display="block" gutterBottom>
THE FOLLOWING FIELDS ARE NOT MANDATORY TO A PROJECT
</Typography>

          <Divider/>
          <br/>

<div style={styles.optional}>

          {/*TM*/}
          <QuantitySelect
              label={labelTM}
              value={valueTM}
              onChange={onChangeTM}
              data={dataTM}
          />
          {/*SM*/}
          <QuantitySelect
              label={labelSM}
              value={valueSM}
              onChange={onChangeSM}
              data={dataSM}
          />
          {/*CLIENT*/}
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Client"
            type="text"
            fullWidth
            value={valueClient}
            onChange={onChangeClient}
            style={styles.textField}
          />
          {/*OI DATE*/}
          <OrderIntakeDate
            labelDatePicker={labelOI}
            valueDatePicker={valueOI}
            onChangeDatePicker={onChangeOI}
          />
          {/*KICK-OFF DATE*/}
          <KickOffDate
            labelDatePicker={labelKO}
            valueDatePicker={valueKO}
            onChangeDatePicker={onChangeKO}
          />
          {/*ROAD SURVEY*/}
          <QuantitySelect
              label={labelRS}
              value={valueRS}
              onChange={onChangeRS}
              data={dataRS}
          />
          {/*LOG BUDGET*/}
          <QuantitySelect
              label={labelLOG}
              value={valueLOG}
              onChange={onChangeLOG}
              data={dataLOG}
          />
          {/*GATE*/}
          <QuantitySelect
              label={labelGate}
              value={valueGate}
              onChange={onChangeGate}
              data={dataGate}
          />
          {/*STATUS*/}
          <QuantitySelect
              label={labelStatus}
              value={valueStatus}
              onChange={onChangeStatus}
              data={dataStatus}
          />
          {/*COMMENTS*/}
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label={labelComments}
            type="text"
            fullWidth
            value={valueComments}
            onChange={onChangeComments}
            style={styles.textField}
          />

</div>

        </DialogContent>


        <DialogActions>
          <Button onClick={handleClose} color="primary">
            {buttonCancelLabel}
          </Button>
          <Button onClick={onClick} color="primary">
            {buttonConfirmLabel}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
