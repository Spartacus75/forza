import {useState, useEffect} from 'react'
import {useAuth} from '../Context/AuthContext'
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
import SelectQtty from '../Assets/Select'
import {qttydata} from '../data.js'


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
                dateOI: moment(valueOrderIntake).unix(),
                dateKO: moment(valueKO).unix(),
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
                                                                                                          console.log("Modified project: ", change.doc.data())

                                                                                                          //ici on doit modifier intelligemment le tableu de project....
                                                                                                          //projects.push(change.doc.data());
                                                                                                          //on va supprimer l'élémént du tableau en cours qui a été modifié
                                                                                                          var temp = change.doc.data().project
                                                                                                          console.log('index', findWithAttr(projects, 'project', temp))
                                                                                                          projects.splice(findWithAttr(projects, 'project', temp), 1, change.doc.data())
                                                                                                          console.log('projects après update', projects)
                                                                                                          //on va ajouter la nouvelle valeur (change.doc.data) à la même position



                                                                                                          console.log('dans le modified', projects)
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
                                                  console.log('A LA FIN', projects)
                                                  setvalueFirestore(projects, console.log('mis à jour! longueur est de: ', projects.length))
                                                  console.log('state is...', valueFirestore)

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


    </>
  )
}
