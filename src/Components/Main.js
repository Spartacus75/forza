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


export default function Main(){

const styles = {
  alert:{
    backgroundColor: '#f6b3b3'
  }
}

const {currentUser} = useAuth()

const [open, setOpen] = useState(false)
const [valueProject, setValueProject] = useState('')
const [valueCountry, setValueCountry] = useState('')
const [valueQtty, setValueQtty] = useState('')
const [valueGeneration, setValueGeneration] = useState(0)
const [valueBlade, setValueBlade] = useState('')
const [valueTower, setValueTower] = useState('')
const [valueTM, setValueTM] = useState('')
const [valueSM, setValueSM] = useState('')
const [valueClient, setValueClient] = useState('')
const [valuePriority, setValuePriority] = useState('')
const [valueOrderIntake, setValueOrderIntake] = useState(Date.now())
const [valueKO, setValueKO] = useState(Date.now())
const [valueRS, setValueRS] = useState('')
const [valueLOG, setValueLOG] = useState('')
const [valueGate, setValueGate] = useState('')
const [valueStatus, setValueStatus] = useState('')
const [valueComments, setValueComments] = useState('')
const [valueValidation, setValueValidation] =useState(false)
const [valueFirestore, setvalueFirestore] = useState([])


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

              await firebase.firestore().collection('Projects').doc(`${valueProject}-${moment().unix()}`).set({
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
                setValueProject('')
                setValueCountry('')
                setValueQtty('')
                setValueGeneration('')
                setValueBlade('')
                setValueTower('')
                setValuePriority('')
                setValueTM('')
                setValueSM('')
                setValueClient('')
                setValuePriority('')
                setValueOrderIntake(Date.now())
                setValueKO(Date.now())
                setValueRS('')
                setValueLOG('')
                setValueGate('')
                setValueStatus('')
                setValueComments('')
                setValueValidation(false)
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

    await firebase.firestore().collection("Projects")
      .onSnapshot(function(querySnapshot) {

          querySnapshot.forEach(function(doc) {
              //console.log('objet à pousser', doc.data())
              projects.push(doc.data());
              //console.log('new objet', projects)

          });
          setvalueFirestore(projects)
          //console.log("Current project in CA: ", projects.join(", "));
      });
      //console.log('on récupère ça', projects)
      //return projects

  }

   fetchData()
   //await console.log('table', table)

}, [])

console.log('firestore Project',valueFirestore)
//console.log(valueFirestore)


  return (
    <>

      <div>MAIN COMPONENT</div>
    <Filter/>
    <AddProjectButton
        label="Add a project"
        onClick={onClickAddProject}

    />
    <List/>

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



    </>
  )
}
