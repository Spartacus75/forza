import React, {useEffect, useState}  from 'react'
import {useHistory} from 'react-router-dom';
import {LineChart, Line, CartesianGrid, XAxis, YAxis, BarChart, Tooltip, Bar, Legend } from 'recharts';
import firebase from '../firebase.js'


export default function Dashboard(){

  const styles = {
    layout:{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }

  const history = useHistory()

  const [data, setData] = useState([])


  const handleBack = async () => {
    history.push('/main')
  }




  useEffect(() => {

    var projects = []

    async function fetchData() {

    await firebase.firestore().collection("Projects")
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                //console.log(doc.id, " => ", doc.data());
                projects.push(doc.data())
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });


    //console.log('new fetch', projects)
    setData(projects)
  }

    fetchData()


  },[])


  console.log('data for Dashboard', data)

  //var dataFrance = data.filter(item => item.country=='France')


  //ici on construit un tableau avec la liste des pays uniques et nombres

  var tableauPays = data.map(item => item.country)
  var uniqueTableauPays = [...new Set(tableauPays)];
  var tableauTM = data.map(item => item.tm)
  var uniqueTableauTM = [...new Set(tableauTM)];
  var tableauSM = data.map(item => item.sm)
  var uniqueTableauSM = [...new Set(tableauSM)];
  var tableauBlade = data.map(item => item.blade)
  var uniqueTableauBlade = [...new Set(tableauBlade)];
  var tableauTower = data.map(item => item.tower)
  var uniqueTableauTower = [...new Set(tableauTower)];
  var tableauPriority = data.map(item => item.priority)
  var uniqueTableauPriority = [...new Set(tableauPriority)];

/*  var dataBarCountry = data.map((item, index) =>

    {
        const container = {}
        container.key = index
        container.country = item.country

        return container

    }

  )*/

  var tableCountry = uniqueTableauPays.map((item, index) =>

    {
      const container ={}

      container.country= item
      container.occurence = data.filter(i => i.country == item).length
      //container[item.country] = data.filter(i => i.country == item.country).length

      return container

    }



  )

  var tableTM = uniqueTableauTM.map((item, index) =>

    {
      const container ={}

      if (item !== '') {


      container.tm= item
      container.occurence = data.filter(i => i.tm == item).length

    } else {
      container.tm = 'Unknown'
      container.occurence = data.filter(i => i.tm == item).length
    }

      return container

    }



  )

  var tableSM = uniqueTableauSM.map((item, index) =>

    {
      const container ={}

      if (item !==''){

      container.sm= item
      container.occurence = data.filter(i => i.sm == item).length

    } else {
      container.sm = 'Unknown'
      container.occurence = data.filter(i => i.sm == item).length
    }


      return container

    }



  )

  var tableBlade = uniqueTableauBlade.map((item, index) =>

    {
      const container ={}

      if (item !==''){

      container.blade= item
      container.occurence = data.filter(i => i.blade == item).length

    } else {
      container.blade = 'Unknown'
      container.occurence = data.filter(i => i.blade == item).length
    }


      return container

    }



  )

  var tableTower = uniqueTableauTower.map((item, index) =>

    {
      const container ={}

      if (item !==''){

      container.tower= item
      container.occurence = data.filter(i => i.tower == item).length

    } else {
      container.tower = 'Unknown'
      container.occurence = data.filter(i => i.tower == item).length
    }


      return container

    }



  )

  var tablePriority = uniqueTableauPriority.map((item, index) =>

    {
      const container ={}

      if (item !==''){

      container.priority= item
      container.occurence = data.filter(i => i.priority == item).length

    } else {
      container.priority = 'Unknown'
      container.occurence = data.filter(i => i.priority == item).length
    }


      return container

    }



  )


  return (
    <>
    <p>Dashbord</p>

    <button onClick={handleBack}>
      Back to the project list
    </button>


    <div style={styles.layout}>

{/*Split by Country*/}

      <div>
      <BarChart width={730} height={400} data={tableCountry.sort((a,b) => b.occurence-a.occurence)}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="country"/>
      <YAxis label={{ value: 'Number of projects', angle: -90, position: 'insideLeft' }} />
      <Tooltip />
      {/*<Legend verticalAlign="top" height={36} />*/}
      {/*<Bar dataKey="pv" fill="#8884d8" />*/}
      <Bar dataKey="occurence" fill="#82ca9d" />
      </BarChart>
      </div>
{/*Split by TM*/}
      <div>
      <BarChart width={730} height={400} data={tableTM.sort((a,b) => b.occurence-a.occurence)}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="tm"/>
      <YAxis label={{ value: 'Number of projects', angle: -90, position: 'insideLeft' }} />
      <Tooltip />
      {/*<Legend verticalAlign="top" height={36} />*/}
      {/*<Bar dataKey="pv" fill="#8884d8" />*/}
      <Bar dataKey="occurence" fill="#8884d8" />
      </BarChart>
      </div>

{/*Split by SM*/}
      <div>
      <BarChart width={730} height={400} data={tableSM.sort((a,b) => b.occurence-a.occurence)}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="sm"/>
      <YAxis label={{ value: 'Number of projects', angle: -90, position: 'insideLeft' }} />
      <Tooltip />
      {/*<Legend verticalAlign="top" height={36} />*/}
      {/*<Bar dataKey="pv" fill="#8884d8" />*/}
      <Bar dataKey="occurence" fill="#e28743" />
      </BarChart>
      </div>


{/*Split by Blade*/}
      <div>
      <BarChart width={730} height={400} data={tableBlade.sort((a,b) => b.occurence-a.occurence)}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="blade"/>
      <YAxis label={{ value: 'Number of projects', angle: -90, position: 'insideLeft' }} />
      <Tooltip />
      {/*<Legend verticalAlign="top" height={36} />*/}
      {/*<Bar dataKey="pv" fill="#8884d8" />*/}
      <Bar dataKey="occurence" fill="#154c79" />
      </BarChart>
      </div>

{/*Split by Tower*/}
      <div>
      <BarChart width={730} height={400} data={tableTower.sort((a,b) => b.occurence-a.occurence)}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="tower"/>
      <YAxis label={{ value: 'Number of projects', angle: -90, position: 'insideLeft' }} />
      <Tooltip />
      {/*<Legend verticalAlign="top" height={36} />*/}
      {/*<Bar dataKey="pv" fill="#8884d8" />*/}
      <Bar dataKey="occurence" fill="#1e81b0" />
      </BarChart>
      </div>

      {/*Split by Priority*/}
            <div>
            <BarChart width={730} height={400} data={tablePriority.sort((a,b) => b.occurence-a.occurence)}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="priority"/>
            <YAxis label={{ value: 'Number of projects', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            {/*<Legend verticalAlign="top" height={36} />*/}
            {/*<Bar dataKey="pv" fill="#8884d8" />*/}
            <Bar dataKey="occurence" fill="#82ca9d" />
            </BarChart>
            </div>


    </div>

    </>
  )
}
