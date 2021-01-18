import {useState, useEffect} from 'react'
import {useAuth} from '../Context/AuthContext'
import TextField from '@material-ui/core/TextField';
import Filter from './Filter'
import List from './List'
import AddProjectButton from '../Assets/Button'
import AddProjectDialog from '../Assets/Dialog'
import {
  countries,
  dataQtty,
  dataGeneration,
  dataBlades,
  dataTowers,
  dataTM,
  dataSM,
  dataPriorities,
  dataRoadSurvey,
  dataLOGBudget,
  dataGate,
  tenderStatus
} from '../data.js'
import moment from 'moment'
import firebase from '../firebase.js'
import SmallAlert from '../Assets/SmallAlert'
import {findWithAttr} from '../functions.js'
import ModalQtty from '../Assets/DialogForChange/DialogQtty'
import ModalBlade from '../Assets/DialogForChange/DialogQtty'
import ModalTower from '../Assets/DialogForChange/DialogQtty'
import ModalGeneration from '../Assets/DialogForChange/DialogQtty'
import ModalPriority from '../Assets/DialogForChange/DialogQtty'
import ModalCountry from '../Assets/DialogForChange/DialogQtty'
import ModalTM from '../Assets/DialogForChange/DialogQtty'
import ModalSM from '../Assets/DialogForChange/DialogQtty'
import ModalRoad from '../Assets/DialogForChange/DialogQtty'
import ModalLOGBudget from '../Assets/DialogForChange/DialogQtty'
import ModalGate from '../Assets/DialogForChange/DialogQtty'
import ModalStatus from '../Assets/DialogForChange/DialogQtty'
import ModalClient from '../Assets/DialogForChange/DialogQtty'
import ModalComments from '../Assets/DialogForChange/DialogQtty'
import ModalKO from '../Assets/DialogForChange/DialogQtty'
import ModalOI from '../Assets/DialogForChange/DialogQtty'
import SelectQtty from '../Assets/Select'
import DatePicker from '../Assets/DatePicker'



export default function Main(){

const styles = {
  alert:{
    backgroundColor: '#f6b3b3'
  }
}

const {currentUser} = useAuth()

const [open, setOpen] = useState(false)
const [valueProject, setValueProject] = useState(Date.now())
const [valueCountry, setValueCountry] = useState('France')
const [valueQtty, setValueQtty] = useState(3)
const [valueGeneration, setValueGeneration] = useState('Delta')
const [valueBlade, setValueBlade] = useState('N117')
const [valueTower, setValueTower] = useState('TS91')
const [valueTM, setValueTM] = useState('')
const [valueSM, setValueSM] = useState('')
const [valueClient, setValueClient] = useState('')
const [valuePriority, setValuePriority] = useState('Medium')
const [valueOrderIntake, setValueOrderIntake] = useState(Date.now())
const [valueKO, setValueKO] = useState(Date.now())
const [valueRS, setValueRS] = useState('')
const [valueLOG, setValueLOG] = useState('')
const [valueGate, setValueGate] = useState('')
const [valueStatus, setValueStatus] = useState('')
const [valueComments, setValueComments] = useState('')
const [valueValidation, setValueValidation] =useState(false)
const [valueFirestore, setvalueFirestore] = useState([])
const [valueModalQtty, setValueModalQtty] = useState(false)
const [valueQttyChange, setValueQttyChange] = useState(1)
const [valueProjectChange, setValueProjectChange] = useState('')
const [valueModalBlade, setValueModalBlade] = useState(false)
const [valueBladeChange, setValueBladeChange] = useState('')
const [valueModalTower, setValueModalTower] = useState(false)
const [valueTowerChange, setValueTowerChange] = useState('')
const [valueModalGeneration, setValueModalGeneration] = useState(false)
const [valueGenerationChange, setValueGenerationChange] = useState('')
const [valueModalPriority, setValueModalPriority] = useState(false)
const [valuePriorityChange, setValuePriorityChange] = useState('')
const [valueModalCountry, setValueModalCountry] = useState(false)
const [valueCountryChange, setValueCountryChange] = useState('Italy')
const [valueModalTM, setValueModalTM] = useState(false)
const [valueTMChange, setValueTMChange] = useState('')
const [valueModalSM, setValueModalSM] = useState(false)
const [valueSMChange, setValueSMChange] = useState('')
const [valueModalRoad, setValueModalRoad] = useState(false)
const [valueRoadChange, setValueRoadChange] = useState('')
const [valueModalLOGBudget, setValueModalLOGBudget] = useState(false)
const [valueLOGBudgetChange, setValueLOGBudgetChange] = useState('')
const [valueModalGate, setValueModalGate] = useState(false)
const [valueGateChange, setValueGateChange] = useState('')
const [valueModalStatus, setValueModalStatus] = useState(false)
const [valueStatusChange, setValueStatusChange] = useState('')
const [valueModalClient, setValueModalClient] = useState(false)
const [valueClientChange, setValueClientChange] = useState('')
const [valueModalComments, setValueModalComments] = useState(false)
const [valueCommentsChange, setValueCommentsChange] = useState('')
const [valueModalKO, setValueModalKO] = useState(false)
const [valueKOChange, setValueKOChange] = useState(Date.now().parse)
const [valueModalOI, setValueModalOI] = useState(false)
const [valueOIChange, setValueOIChange] = useState(Date.now().parse)

const onClickAddProject = () => {
  setOpen(true)
  //console.log(open)
}

const handleClose = () => {
  setOpen(false)
}

const onClickRecordProject = async () => {

if (
  valueProject !== '' &&
  valueCountry !== '' &&
  valueQtty !== '' &&
  valueGeneration !== '' &&
  valueBlade !== '' &&
  valueTower !== '' &&
  valuePriority !== ''
)

{

              await firebase.firestore().collection('Projects').doc(`${valueProject}`).set({
                project: valueProject,
                country: valueCountry,
                quantity: valueQtty,
                generation: valueGeneration,
                blade: valueBlade,
                tower: valueTower,
                tm: valueTM,
                sm: valueSM,
                client: valueClient,
                priority: valuePriority,
                dateOI: Date.parse(valueOrderIntake)/*moment(valueOrderIntake).unix()*/,
                dateKO: Date.parse(valueKO)/*moment(valueKO).unix()*/,
                roadSurvey: valueRS,
                logBudget: valueLOG,
                gate: valueGate,
                status: valueStatus,
                comments: valueComments
              })
              .then(function() {
                console.log("Document successfully written!");
                setOpen(false)
                setValueProject(Date.now())
                setValueCountry('France')
                setValueQtty('15')
                setValueGeneration('Delta')
                setValueBlade('N117')
                setValueTower('TS91')
                setValuePriority('Medium')
                setValueTM('')
                setValueSM('')
                setValueClient('')
                //setValuePriority('')
                setValueOrderIntake(Date.now())
                setValueKO(Date.now())
                setValueRS('')
                setValueLOG('')
                setValueGate('')
                setValueStatus('')
                setValueComments('')
                setValueValidation(false)
                //setvalueFirestore([...valueFirestore])//ajout ok?
              })
              .catch(function(error) {
                console.error("Error writing document: ", error);



            });

            } else {
              console.log('All the fields to be filled!')
              setValueValidation(true)
            }


}

const onChangeProjectValue = (event) => {
    setValueProject(event.target.value)
}

const onChangeCountry = (event) => {
  //console.log('ici',event.targetvalue)
  setValueCountry(event.target.value)
}

const onChangeQtty = (event) => {
  //console.log('ici',event.targetvalue)
  setValueQtty(event.target.value)
}


const onChangeGeneration = (event) => {
  //console.log('ici',event.targetvalue)
  setValueGeneration(event.target.value)
}

const onChangeBlade = (event) => {
  //console.log('ici',event.targetvalue)
  setValueBlade(event.target.value)
}

const onChangeTower = (event) => {
  //console.log('ici',event.targetvalue)
  setValueTower(event.target.value)
}

const onChangeTM = (event) => {
  //console.log('ici',event.targetvalue)
  setValueTM(event.target.value)
}

const onChangeSM = (event) => {
  //console.log('ici',event.targetvalue)
  setValueSM(event.target.value)
}

const onChangeClient = (event) => {
  //console.log('ici',event.targetvalue)
  setValueClient(event.target.value)
}

const onChangePriority = (event) => {
  //console.log('ici',event.targetvalue)
  setValuePriority(event.target.value)
}

const onChangeOI = (event) => {
  //console.log(event)
  setValueOrderIntake(event)
}

const onChangeKO = (event) => {
  //console.log(event)
  setValueKO(event)
}

const onChangeRS = (event) => {
  setValueRS(event.target.value)
}

const onChangeLOG = (event) => {
  setValueLOG(event.target.value)
}

const onChangeGate = (event) => {
  setValueGate(event.target.value)
}

const onChangeStatus = (event) => {
  setValueStatus(event.target.value)
}

const onChangeComments = (event) => {
  setValueComments(event.target.value)
}

const onClickValidation = () => {
  setValueValidation(false)
}

//QTTY
const onClickQtty = (event) => {
  //alert('on affiche le modal')
  setValueModalQtty(true)
  setValueProjectChange(event)
  console.log('project name: ', event)

}

const handleCloseQtty = () => {
  setValueModalQtty(false)
}

const onChangeDialogQtty = (event) => {
  setValueQttyChange(event.target.value)
}

const handleValidateQtty = async (event) => {
  //console.log('ici on va rentrer dans Firestore...')

  //ici je sais déjà récupérer la valeur du Qtty mais il me faut le nom du project à trouver comme ref
  //console.log('dans la procédure',event)
  //console.log('new qtty', valueQttyChange)
  //console.log('projet qui va être modifié: ', valueProjectChange )

  var db = firebase.firestore().collection("Projects").doc(`${valueProjectChange}`)

  db.update({
            quantity: valueQttyChange
          })
          .then(function() {
            console.log("Document successfully updated!");
            setValueModalQtty(false)
            })
          .catch(function(error) {
            // The document probably doesn't exist.
          console.error("Error updating document: ", error);
          setValueModalQtty(false)
});



}

//BLADES

const onClickBlade = (event) => {
  //alert('on affiche le modal')
  setValueModalBlade(true)
  setValueProjectChange(event)
  console.log('project name: ', event)

}

const handleCloseBlade = () => {
  setValueModalBlade(false)
}

const onChangeDialogBlade = (event) => {
  setValueBladeChange(event.target.value)
}

const handleValidateBlade = async (event) => {
  //console.log('ici on va rentrer dans Firestore...')

  //ici je sais déjà récupérer la valeur du Qtty mais il me faut le nom du project à trouver comme ref
  //console.log('dans la procédure',event)
  //console.log('new qtty', valueQttyChange)
  //console.log('projet qui va être modifié: ', valueProjectChange )

  var db = firebase.firestore().collection("Projects").doc(`${valueProjectChange}`)

  db.update({
            blade: valueBladeChange
          })
          .then(function() {
            console.log("Document successfully updated!");
            setValueModalBlade(false)
            })
          .catch(function(error) {
            // The document probably doesn't exist.
          console.error("Error updating document: ", error);
          setValueModalBlade(false)
});



}

//TOWERS

const onClickTower = (event) => {
  //alert('on affiche le modal')
  setValueModalTower(true)
  setValueProjectChange(event)
  console.log('project name: ', event)

}

const handleCloseTower = () => {
  setValueModalTower(false)
}

const onChangeDialogTower = (event) => {
  setValueTowerChange(event.target.value)
}

const handleValidateTower = async (event) => {
  //console.log('ici on va rentrer dans Firestore...')

  //ici je sais déjà récupérer la valeur du Qtty mais il me faut le nom du project à trouver comme ref
  //console.log('dans la procédure',event)
  //console.log('new qtty', valueQttyChange)
  //console.log('projet qui va être modifié: ', valueProjectChange )

  var db = firebase.firestore().collection("Projects").doc(`${valueProjectChange}`)

  db.update({
            tower: valueTowerChange
          })
          .then(function() {
            console.log("Document successfully updated!");
            setValueModalTower(false)
            })
          .catch(function(error) {
            // The document probably doesn't exist.
          console.error("Error updating document: ", error);
          setValueModalTower(false)
});



}

//GENERATIONS

const onClickGeneration = (event) => {
  //alert('on affiche le modal')
  setValueModalGeneration(true)
  setValueProjectChange(event)
  console.log('project name: ', event)

}

const handleCloseGeneration = () => {
  setValueModalGeneration(false)
}

const onChangeDialogGeneration = (event) => {
  setValueGenerationChange(event.target.value)
}

const handleValidateGeneration = async (event) => {
  //console.log('ici on va rentrer dans Firestore...')

  //ici je sais déjà récupérer la valeur du Qtty mais il me faut le nom du project à trouver comme ref
  //console.log('dans la procédure',event)
  //console.log('new qtty', valueQttyChange)
  //console.log('projet qui va être modifié: ', valueProjectChange )

  var db = firebase.firestore().collection("Projects").doc(`${valueProjectChange}`)

  db.update({
            generation: valueGenerationChange
          })
          .then(function() {
            console.log("Document successfully updated!");
            setValueModalGeneration(false)
            })
          .catch(function(error) {
            // The document probably doesn't exist.
          console.error("Error updating document: ", error);
          setValueModalGeneration(false)
});



}


//PRIORITY

const onClickPriority = (event) => {
  //alert('on affiche le modal')
  setValueModalPriority(true)
  setValueProjectChange(event)
  console.log('project name: ', event)

}

const handleClosePriority = () => {
  setValueModalPriority(false)
}

const onChangeDialogPriority = (event) => {
  setValuePriorityChange(event.target.value)
}

const handleValidatePriority = async (event) => {
  //console.log('ici on va rentrer dans Firestore...')

  //ici je sais déjà récupérer la valeur du Qtty mais il me faut le nom du project à trouver comme ref
  //console.log('dans la procédure',event)
  //console.log('new qtty', valueQttyChange)
  //console.log('projet qui va être modifié: ', valueProjectChange )

  var db = firebase.firestore().collection("Projects").doc(`${valueProjectChange}`)

  db.update({
            priority: valuePriorityChange
          })
          .then(function() {
            console.log("Document successfully updated!");
            setValueModalPriority(false)
            })
          .catch(function(error) {
            // The document probably doesn't exist.
          console.error("Error updating document: ", error);
          setValueModalPriority(false)
});



}

//COUNTRY


const onClickCountry = (event) => {
  //alert('on affiche le modal')
  setValueModalCountry(true)
  setValueProjectChange(event)
  console.log('project name: ', event)

}

const handleCloseCountry = () => {
  setValueModalCountry(false)
}

const onChangeDialogCountry = (event) => {
  setValueCountryChange(event.target.value)
}

const handleValidateCountry = async (event) => {
  //console.log('ici on va rentrer dans Firestore...')

  //ici je sais déjà récupérer la valeur du Qtty mais il me faut le nom du project à trouver comme ref
  //console.log('dans la procédure',event)
  //console.log('new qtty', valueQttyChange)
  //console.log('projet qui va être modifié: ', valueProjectChange )

  var db = firebase.firestore().collection("Projects").doc(`${valueProjectChange}`)

  db.update({
            country: valueCountryChange
          })
          .then(function() {
            console.log("Document successfully updated!");
            setValueModalCountry(false)
            })
          .catch(function(error) {
            // The document probably doesn't exist.
          console.error("Error updating document: ", error);
          setValueModalCountry(false)
});



}

//TM


const onClickTM = (event) => {
  //alert('on affiche le modal')
  setValueModalTM(true)
  setValueProjectChange(event)
  console.log('project name: ', event)

}

const handleCloseTM = () => {
  setValueModalTM(false)
}

const onChangeDialogTM = (event) => {
  setValueTMChange(event.target.value)
}

const handleValidateTM = async (event) => {
  //console.log('ici on va rentrer dans Firestore...')

  //ici je sais déjà récupérer la valeur du Qtty mais il me faut le nom du project à trouver comme ref
  //console.log('dans la procédure',event)
  //console.log('new qtty', valueQttyChange)
  //console.log('projet qui va être modifié: ', valueProjectChange )

  var db = firebase.firestore().collection("Projects").doc(`${valueProjectChange}`)

  db.update({
            tm: valueTMChange
          })
          .then(function() {
            console.log("Document successfully updated!");
            setValueModalTM(false)
            })
          .catch(function(error) {
            // The document probably doesn't exist.
          console.error("Error updating document: ", error);
          setValueModalTM(false)
});



}


//SM


const onClickSM = (event) => {
  //alert('on affiche le modal')
  setValueModalSM(true)
  setValueProjectChange(event)
  console.log('project name: ', event)

}

const handleCloseSM = () => {
  setValueModalSM(false)
}

const onChangeDialogSM = (event) => {
  setValueSMChange(event.target.value)
}

const handleValidateSM = async (event) => {
  //console.log('ici on va rentrer dans Firestore...')

  //ici je sais déjà récupérer la valeur du Qtty mais il me faut le nom du project à trouver comme ref
  //console.log('dans la procédure',event)
  //console.log('new qtty', valueQttyChange)
  //console.log('projet qui va être modifié: ', valueProjectChange )

  var db = firebase.firestore().collection("Projects").doc(`${valueProjectChange}`)

  db.update({
            sm: valueSMChange
          })
          .then(function() {
            console.log("Document successfully updated!");
            setValueModalSM(false)
            })
          .catch(function(error) {
            // The document probably doesn't exist.
          console.error("Error updating document: ", error);
          setValueModalSM(false)
});



}

//ROAD

const onClickRoad = (event) => {
  //alert('on affiche le modal')
  setValueModalRoad(true)
  setValueProjectChange(event)
  console.log('project name: ', event)

}

const handleCloseRoad = () => {
  setValueModalRoad(false)
}

const onChangeDialogRoad = (event) => {
  setValueRoadChange(event.target.value)
}

const handleValidateRoad = async (event) => {
  //console.log('ici on va rentrer dans Firestore...')

  //ici je sais déjà récupérer la valeur du Qtty mais il me faut le nom du project à trouver comme ref
  //console.log('dans la procédure',event)
  //console.log('new qtty', valueQttyChange)
  //console.log('projet qui va être modifié: ', valueProjectChange )

  var db = firebase.firestore().collection("Projects").doc(`${valueProjectChange}`)

  db.update({
            roadSurvey: valueRoadChange
          })
          .then(function() {
            console.log("Document successfully updated!");
            setValueModalRoad(false)
            })
          .catch(function(error) {
            // The document probably doesn't exist.
          console.error("Error updating document: ", error);
          setValueModalRoad(false)
});



}

//LOG Budget

const onClickLOGBudget = (event) => {
  //alert('on affiche le modal')
  setValueModalLOGBudget(true)
  setValueProjectChange(event)
  console.log('project name: ', event)

}

const handleCloseLOGBudget = () => {
  setValueModalLOGBudget(false)
}

const onChangeDialogLOGBudget = (event) => {
  setValueLOGBudgetChange(event.target.value)
}

const handleValidateLOGBudget = async (event) => {
  //console.log('ici on va rentrer dans Firestore...')

  //ici je sais déjà récupérer la valeur du Qtty mais il me faut le nom du project à trouver comme ref
  //console.log('dans la procédure',event)
  //console.log('new qtty', valueQttyChange)
  //console.log('projet qui va être modifié: ', valueProjectChange )

  var db = firebase.firestore().collection("Projects").doc(`${valueProjectChange}`)

  db.update({
            logBudget: valueLOGBudgetChange
          })
          .then(function() {
            console.log("Document successfully updated!");
            setValueModalLOGBudget(false)
            })
          .catch(function(error) {
            // The document probably doesn't exist.
          console.error("Error updating document: ", error);
          setValueModalLOGBudget(false)
});



}

//GATE

const onClickGate = (event) => {
  //alert('on affiche le modal')
  setValueModalGate(true)
  setValueProjectChange(event)
  console.log('project name: ', event)

}

const handleCloseGate = () => {
  setValueModalGate(false)
}

const onChangeDialogGate = (event) => {
  setValueGateChange(event.target.value)
}

const handleValidateGate = async (event) => {
  //console.log('ici on va rentrer dans Firestore...')

  //ici je sais déjà récupérer la valeur du Qtty mais il me faut le nom du project à trouver comme ref
  //console.log('dans la procédure',event)
  //console.log('new qtty', valueQttyChange)
  //console.log('projet qui va être modifié: ', valueProjectChange )

  var db = firebase.firestore().collection("Projects").doc(`${valueProjectChange}`)

  db.update({
            gate: valueGateChange
          })
          .then(function() {
            console.log("Document successfully updated!");
            setValueModalGate(false)
            })
          .catch(function(error) {
            // The document probably doesn't exist.
          console.error("Error updating document: ", error);
          setValueModalGate(false)
});



}

//STATUS

const onClickStatus = (event) => {
  //alert('on affiche le modal')
  setValueModalStatus(true)
  setValueProjectChange(event)
  console.log('project name: ', event)

}

const handleCloseStatus = () => {
  setValueModalStatus(false)
}

const onChangeDialogStatus = (event) => {
  setValueStatusChange(event.target.value)
}

const handleValidateStatus = async (event) => {
  //console.log('ici on va rentrer dans Firestore...')

  //ici je sais déjà récupérer la valeur du Qtty mais il me faut le nom du project à trouver comme ref
  //console.log('dans la procédure',event)
  //console.log('new qtty', valueQttyChange)
  //console.log('projet qui va être modifié: ', valueProjectChange )

  var db = firebase.firestore().collection("Projects").doc(`${valueProjectChange}`)

  db.update({
            status: valueStatusChange
          })
          .then(function() {
            console.log("Document successfully updated!");
            setValueModalStatus(false)
            })
          .catch(function(error) {
            // The document probably doesn't exist.
          console.error("Error updating document: ", error);
          setValueModalStatus(false)
});



}

//CLIENT

const onClickClient = (event) => {
  //alert('on affiche le modal')
  setValueModalClient(true)
  setValueProjectChange(event)
  console.log('project name: ', event)

}

const handleCloseClient = () => {
  setValueModalClient(false)
}

const onChangeDialogClient = (event) => {
  setValueClientChange(event.target.value)
}

const handleValidateClient = async (event) => {
  //console.log('ici on va rentrer dans Firestore...')

  //ici je sais déjà récupérer la valeur du Qtty mais il me faut le nom du project à trouver comme ref
  //console.log('dans la procédure',event)
  //console.log('new qtty', valueQttyChange)
  //console.log('projet qui va être modifié: ', valueProjectChange )

  var db = firebase.firestore().collection("Projects").doc(`${valueProjectChange}`)

  db.update({
            client: valueClientChange
          })
          .then(function() {
            console.log("Document successfully updated!");
            setValueModalClient(false)
            setValueClientChange('')
            })
          .catch(function(error) {
            // The document probably doesn't exist.
          console.error("Error updating document: ", error);
          setValueModalClient(false)
});



}

//COMMENTS


const onClickComments = (event, comments) => {
  //alert('on affiche le modal')
  setValueCommentsChange(comments)
  setValueModalComments(true)
  setValueProjectChange(event)
  //console.log('project name: ', event)
  //console.log('comments: ', comments)

}

const handleCloseComments = () => {
  setValueModalComments(false)
}

const onChangeDialogComments = (event) => {
  setValueCommentsChange(event.target.value)
}

const handleValidateComments = async (event) => {
  //console.log('ici on va rentrer dans Firestore...')

  //ici je sais déjà récupérer la valeur du Qtty mais il me faut le nom du project à trouver comme ref
  //console.log('dans la procédure',event)
  //console.log('new qtty', valueQttyChange)
  //console.log('projet qui va être modifié: ', valueProjectChange )

  var db = firebase.firestore().collection("Projects").doc(`${valueProjectChange}`)

  db.update({
            comments: valueCommentsChange
          })
          .then(function() {
            console.log("Document successfully updated!");
            setValueModalComments(false)
            setValueCommentsChange('')
            })
          .catch(function(error) {
            // The document probably doesn't exist.
          console.error("Error updating document: ", error);
          setValueModalComments(false)
});



}


//KICK-OFF

const onClickKO = async (event, date) => {
  //alert('on affiche le modal')
  //console.log('date qui vient de firestore', date) //timestamp => OK => on la converti en dates
  setValueKOChange(date)

  setValueModalKO(true)
  setValueProjectChange(event)
  //console.log('project name: ', event)
  //console.log('date: ', moment.unix(date).format("DD/MM/yyyy"))
  //console.log('new date: ', valueKOChange)
  //console.log('convert to timestamp', moment(valueKOChange).format("x"))
}

const handleCloseKO = () => {
  setValueModalKO(false)
}

const onChangeDialogKO = (event) => {
  //console.log('AVANT HEIN!', event)
  //console.log('HEIN!!!! ', moment.unix(event).format("DD/MM/yyyy"))
  //console.log('date brute du picker', event)
  //console.log('date converti en timestamp', moment.unix(event). format('D/MM/yyyy'))
  setValueKOChange( event/*moment.unix(event/1000). format('D/MM/yyyy')*/)
}

const handleValidateKO = async (event) => {
  //console.log('ici on va rentrer dans Firestore...')
  //console.log(valueKOChange)
  //console.log('valeur pour firestore', Date.parse(valueKOChange), typeof(Date.parse(valueKOChange)))


  var db = firebase.firestore().collection("Projects").doc(`${valueProjectChange}`)

  db.update({
            dateKO:  Date.parse(valueKOChange)
          })
          .then(function() {
            console.log("Document successfully updated!");
            setValueModalKO(false)
            //setValueKOChange('')
            })
          .catch(function(error) {
            // The document probably doesn't exist.
          console.error("Error updating document: ", error);
          setValueModalKO(false)
});



}

//OI

const onClickOI = async (event, date) => {
  //alert('on affiche le modal')
  //console.log('date qui vient de firestore', date) //timestamp => OK => on la converti en dates
  setValueOIChange(date)

  setValueModalOI(true)
  setValueProjectChange(event)
  //console.log('project name: ', event)
  //console.log('date: ', moment.unix(date).format("DD/MM/yyyy"))
  //console.log('new date: ', valueKOChange)
  //console.log('convert to timestamp', moment(valueKOChange).format("x"))
}

const handleCloseOI = () => {
  setValueModalOI(false)
}

const onChangeDialogOI = (event) => {
  //console.log('AVANT HEIN!', event)
  //console.log('HEIN!!!! ', moment.unix(event).format("DD/MM/yyyy"))
  //console.log('date brute du picker', event)
  //console.log('date converti en timestamp', moment.unix(event). format('D/MM/yyyy'))
  setValueOIChange( event/*moment.unix(event/1000). format('D/MM/yyyy')*/)
}

const handleValidateOI = async (event) => {
  //console.log('ici on va rentrer dans Firestore...')
  //console.log(valueKOChange)
  //console.log('valeur pour firestore', Date.parse(valueKOChange), typeof(Date.parse(valueKOChange)))


  var db = firebase.firestore().collection("Projects").doc(`${valueProjectChange}`)

  db.update({
            dateOI:  Date.parse(valueOIChange)
          })
          .then(function() {
            console.log("Document successfully updated!");
            setValueModalOI(false)
            //setValueKOChange('')
            })
          .catch(function(error) {
            // The document probably doesn't exist.
          console.error("Error updating document: ", error);
          setValueModalOI(false)
});



}






var newProject = {
  project: valueProject,
  country: valueCountry,
  quantity: valueQtty,
  generation: valueGeneration,
  blade: valueBlade,
  tower: valueTower,
  TM: valueTM,
  SM: valueSM,
  client: valueClient,
  priority: valuePriority,
  dateOI: moment(valueOrderIntake).unix(),
  dateKO: moment(valueKO).unix(),
  roadSurvey: valueRS,
  logBudget: valueLOG,
  gate: valueGate,
  status: valueStatus,
  comments: valueComments

}

//ON RECUPERE LE TABLEA DE DONNEES SUR firestore
useEffect(() => {

  async function fetchData(){

    var projects = [];

    await firebase.firestore()
                  .collection("Projects")
                  .onSnapshot(function(snapshot) {


                                                  snapshot.docChanges().forEach(function(change) {

                                                                                                  //console.log('change',change)

                                                                                                  if (change.type === "added") {

                                                                                                          projects.push(change.doc.data());

                                                                                                  }

                                                                                                  if (change.type === "modified") {
                                                                                                          //console.log("Modified project: ", change.doc.data())

                                                                                                          //ici on doit modifier intelligemment le tableu de project....
                                                                                                          //projects.push(change.doc.data());
                                                                                                          //on va supprimer l'élémént du tableau en cours qui a été modifié
                                                                                                          var temp = change.doc.data().project
                                                                                                          //console.log('index', findWithAttr(projects, 'project', temp))
                                                                                                          projects.splice(findWithAttr(projects, 'project', temp), 1, change.doc.data())
                                                                                                          //console.log('projects après update', projects)
                                                                                                          //on va ajouter la nouvelle valeur (change.doc.data) à la même position



                                                                                                          //console.log('dans le modified', projects)
                                                                                                  }

                                                                                                  if (change.type === "removed") {
                                                                                                          console.log("Removed project: ", change.doc.data());
                                                                                                          var temp = change.doc.data().project
                                                                                                          //console.log('nom du projet', temp)
                                                                                                          console.log('index', findWithAttr(projects, 'project', temp))
                                                                                                          projects.splice(findWithAttr(projects, 'project', temp), 1)
                                                                                                          console.log('projects après removed', projects)

                                                                                                          }

                                                                                                });
                                                  //console.log('A LA FIN', projects)
                                                  setvalueFirestore(projects, console.log('mis à jour! longueur est de: ', projects.length))
                                                  //console.log('state is...', valueFirestore)

                                              });


  }

   fetchData()

}, [])

//console.log('firestore Project',valueFirestore)




  return (
    <>

      <div>MAIN COMPONENT</div>
    <Filter/>
    <AddProjectButton
        label="Add a project"
        onClick={onClickAddProject}

    />
    <List
          tableau={valueFirestore}
          onClickQtty={(event) => onClickQtty(event)}
          onClickBlade={(event) => onClickBlade(event)}
          onClickTower={(event) => onClickTower(event)}
          onClickGeneration={(event) => onClickGeneration(event)}
          onClickPriority={(event) => onClickPriority(event)}
          onClickCountry={(event) => onClickCountry(event)}
          onClickTM={(event) => onClickTM(event)}
          onClickSM={(event) => onClickSM(event)}
          onClickRoad={(event) => onClickRoad(event)}
          onClickLOGBudget={(event) => onClickLOGBudget(event)}
          onClickGate={(event) => onClickGate(event)}
          onClickStatus={(event) => onClickStatus(event)}
          onClickClient={(event) => onClickClient(event)}
          onClickComments={(event, comments) => onClickComments(event, comments)}
          onClickKO={(event, date) => onClickKO(event, date)}
          onClickOI={(event, date) => onClickOI(event, date)}
    />

    {currentUser? currentUser.email : 'not loggedin'}


    <AddProjectDialog
        open={open}
        handleClose={handleClose}
        onClick={onClickRecordProject}
        titleDialog='Add a project'
        buttonCancelLabel='Cancel'
        buttonConfirmLabel='Add the project'
        generalDescription='Fill as a minimum the following fields.'

        valueProject={valueProject}
        onChangeProjectValue={onChangeProjectValue}

        valueCountry={valueCountry}
        onChangeCountry={onChangeCountry}
        dataCountries={countries}
        labelCountry='Country'

        labelQtty='Quantity'
        valueQtty={valueQtty}
        onChangeQtty={onChangeQtty}
        dataQtty={dataQtty}

        labelGeneration='Generation'
        onChangeGeneration={onChangeGeneration}
        dataGeneration={dataGeneration}

        labelBlade='Blade'
        valueBlade={valueBlade}
        onChangeBlade={onChangeBlade}
        dataBlade={dataBlades}


        labelTower='Tower'
        valueTower={valueTower}
        onChangeTower={onChangeTower}
        dataTower={dataTowers}

        labelTM='Tender Manager'
        valueTM={valueTM}
        onChangeTM={onChangeTM}
        dataTM={dataTM}

        labelSM='Sales Manager'
        valueSM={valueSM}
        onChangeSM={onChangeSM}
        dataSM={dataSM}

        valueClient={valueClient}
        onChangeClient={onChangeClient}

        valuePriority={valuePriority}
        onChangePriority={onChangePriority}
        dataPriority={dataPriorities}
        labelPriority='Priority'

        labelOI='Order Intake Date'
        valueOI={valueOrderIntake}
        onChangeOI={onChangeOI}

        labelKO='Kick-Off Date'
        valueKO={valueKO}
        onChangeKO={onChangeKO}

        valueRS={valueRS}
        onChangeRS={onChangeRS}
        dataRS={dataRoadSurvey}
        labelRS='Road Survey?'

        valueLOG={valueLOG}
        onChangeLOG={onChangeLOG}
        dataLOG={dataLOGBudget}
        labelLOG='Log Budget?'

        valueGate={valueGate}
        onChangeGate={onChangeGate}
        dataGate={dataGate}
        labelGate='Gate'

        valueStatus={valueStatus}
        onChangeStatus={onChangeStatus}
        dataStatus={tenderStatus}
        labelStatus='Status'

        valueComments={valueComments}
        onChangeComments={onChangeComments}
        labelComments='Comments'

        children={

          valueValidation && <p style={styles.alert}>All mandatory fields to filled</p>


        }


    />

{/*QTTY*/}
    {valueModalQtty &&
      <ModalQtty
        open={valueModalQtty}
        handleClose={handleCloseQtty}
        titleDialog='Change WTG quantity'
        dialogText='Pick a quantity'
        labelValidate='Update'
        handleValidate={handleValidateQtty}
        children={
          <SelectQtty
              label='Quantity'
              value={valueQttyChange}
              onChange={onChangeDialogQtty}
              data={dataQtty}
          />
        }

        />
    }

{/*BLADE*/}
    {valueModalBlade &&
      <ModalBlade
        open={valueModalBlade}
        handleClose={handleCloseBlade}
        titleDialog='Change Blade type'
        dialogText='Pick a blade type'
        labelValidate='Update'
        handleValidate={handleValidateBlade}
        children={
          <SelectQtty
              label='Blade type'
              value={valueBladeChange}
              onChange={onChangeDialogBlade}
              data={dataBlades}
          />
        }

        />
    }

{/*TOWER*/}
    {valueModalTower &&
      <ModalTower
        open={valueModalTower}
        handleClose={handleCloseTower}
        titleDialog='Change Tower type'
        dialogText='Pick a Tower type'
        labelValidate='Update'
        handleValidate={handleValidateTower}
        children={
          <SelectQtty
              label='Tower type'
              value={valueTowerChange}
              onChange={onChangeDialogTower}
              data={dataTowers}
          />
        }

        />
    }

{/*GENERATION*/}
    {valueModalGeneration &&
      <ModalGeneration
        open={valueModalGeneration}
        handleClose={handleCloseGeneration}
        titleDialog='Change Generation'
        dialogText='Pick a generation'
        labelValidate='Update'
        handleValidate={handleValidateGeneration}
        children={
          <SelectQtty
              label='Tower type'
              value={valueGenerationChange}
              onChange={onChangeDialogGeneration}
              data={dataGeneration}
          />
        }

        />
    }

{/*PRIORITY*/}
    {valueModalPriority &&
      <ModalPriority
        open={valueModalPriority}
        handleClose={handleClosePriority}
        titleDialog='Change Priority'
        dialogText='Pick a priority'
        labelValidate='Update'
        handleValidate={handleValidatePriority}
        children={
          <SelectQtty
              label='Priority'
              value={valuePriorityChange}
              onChange={onChangeDialogPriority}
              data={dataPriorities}
          />
        }

        />
    }

{/*COUNTRY*/}
    {valueModalCountry &&
      <ModalCountry
        open={valueModalCountry}
        handleClose={handleCloseCountry}
        titleDialog='Change Country'
        dialogText='Pick a Country'
        labelValidate='Update'
        handleValidate={handleValidateCountry}
        children={
          <SelectQtty
              label='Country'
              value={valueCountryChange}
              onChange={onChangeDialogCountry}
              data={countries}
          />
        }

        />
    }


{/*TM*/}
    {valueModalTM &&
      <ModalTM
        open={valueModalTM}
        handleClose={handleCloseTM}
        titleDialog='Change the Tender Manager'
        dialogText='Pick a Tender Manager'
        labelValidate='Update'
        handleValidate={handleValidateTM}
        children={
          <SelectQtty
              label='Tender Manager'
              value={valueTMChange}
              onChange={onChangeDialogTM}
              data={dataTM}
          />
        }

        />
    }


{/*SM*/}
    {valueModalSM &&
      <ModalSM
        open={valueModalSM}
        handleClose={handleCloseSM}
        titleDialog='Change the Sales Manager'
        dialogText='Pick a Sales Manager'
        labelValidate='Update'
        handleValidate={handleValidateSM}
        children={
          <SelectQtty
              label='Sales Manager'
              value={valueSMChange}
              onChange={onChangeDialogSM}
              data={dataSM}
          />
        }

        />
    }

{/*ROAD*/}
    {valueModalRoad &&
      <ModalRoad
        open={valueModalRoad}
        handleClose={handleCloseRoad}
        titleDialog='Change the status for Road Survey'
        dialogText='Pick a status for Road Survey'
        labelValidate='Update'
        handleValidate={handleValidateRoad}
        children={
          <SelectQtty
              label='Road Survey Status'
              value={valueRoadChange}
              onChange={onChangeDialogRoad}
              data={dataRoadSurvey}
          />
        }

        />
    }


{/*LOG BUDGET*/}
    {valueModalLOGBudget &&
      <ModalLOGBudget
        open={valueModalLOGBudget}
        handleClose={handleCloseLOGBudget}
        titleDialog='Change the status for LOG Budget'
        dialogText='Pick a status for LOG Budget'
        labelValidate='Update'
        handleValidate={handleValidateLOGBudget}
        children={
          <SelectQtty
              label='LOG Budget Status'
              value={valueLOGBudgetChange}
              onChange={onChangeDialogLOGBudget}
              data={dataLOGBudget}
          />
        }

        />
    }


{/*GATE*/}
    {valueModalGate &&
      <ModalGate
        open={valueModalGate}
        handleClose={handleCloseGate}
        titleDialog='Change the Gate Status'
        dialogText='Pick a Gate status'
        labelValidate='Update'
        handleValidate={handleValidateGate}
        children={
          <SelectQtty
              label='Gate Status'
              value={valueGateChange}
              onChange={onChangeDialogGate}
              data={dataGate}
          />
        }

        />
    }


{/*STATUS*/}
    {valueModalStatus &&
      <ModalStatus
        open={valueModalStatus}
        handleClose={handleCloseStatus}
        titleDialog='Change the Project Status'
        dialogText='Pick a Project status'
        labelValidate='Update'
        handleValidate={handleValidateStatus}
        children={
          <SelectQtty
              label='Project Status'
              value={valueProjectChange}
              onChange={onChangeDialogStatus}
              data={tenderStatus}
          />
        }

        />
    }

{/*CLIENT*/}
    {valueModalClient &&
      <ModalClient
        open={valueModalClient}
        handleClose={handleCloseClient}
        titleDialog='Change the Client'
        dialogText='Write the client name'
        labelValidate='Update'
        handleValidate={handleValidateClient}
        children={

          <TextField
            value={valueClientChange}
            onChange={onChangeDialogClient}
            label='Client Name'
            placeholder='Write here'


          />
        }

        />
    }

{/*COMMENTS*/}
    {valueModalComments &&
      <ModalComments
        open={valueModalComments}
        handleClose={handleCloseComments}
        titleDialog='Change the comments'
        dialogText='Write your comments'
        labelValidate='Update'
        handleValidate={handleValidateComments}
        children={

          <TextField
            value={valueCommentsChange}
            onChange={onChangeDialogComments}
            label='Comments'
            placeholder='Write here'
            multiline
            rows={3}
            variant="outlined"
            style={{width:500}}


          />
        }

        />
    }

{/*KICK-OFF*/}
    {valueModalKO &&
      <ModalKO
        open={valueModalKO}
        handleClose={handleCloseKO}
        titleDialog='Change the Kick-Off date'
        dialogText='Pick a date'
        labelValidate='Update'
        handleValidate={handleValidateKO}
        children={
            <DatePicker
                labelDatePicker=''
                valueDatePicker={valueKOChange}
                onChangeDatePicker={onChangeDialogKO}
            />
      }

        />
    }

{/*ORDER INTAKE*/}
    {valueModalOI &&
      <ModalOI
        open={valueModalOI}
        handleClose={handleCloseOI}
        titleDialog='Change the Order Intake date'
        dialogText='Pick a date'
        labelValidate='Update'
        handleValidate={handleValidateOI}
        children={
            <DatePicker
                labelDatePicker=''
                valueDatePicker={valueOIChange}
                onChangeDatePicker={onChangeDialogOI}
            />
      }

        />
    }




    </>
  )
}
