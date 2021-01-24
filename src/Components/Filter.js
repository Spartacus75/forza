import React from 'react'
import TextField from '@material-ui/core/TextField';
import PrioritySelect from '../Assets/Select'
import CountrySelect from '../Assets/Select'
import BladeSelect from '../Assets/Select'
import TowerSelect from '../Assets/Select'
import GenerationSelect from '../Assets/Select'
import TMSelect from '../Assets/Select'
import SMSelect from '../Assets/Select'
import RoadSurveySelect from '../Assets/Select'
import LogBudgetSelect from '../Assets/Select'
import GateSelect from '../Assets/Select'
import StatusSelect from '../Assets/Select'
import Button from '../Assets/Button'

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


export default function Filter({
  //Priority
  valueFilterPriority,
  onChangeFilterPriority,
  //Blades
  valueFilterBlade,
  onChangeFilterBlade,
  //TOWER
  valueFilterTower,
  onChangeFilterTower,
  //GENERATION
  valueFilterGeneration,
  onChangeFilterGeneration,
  //TM
  valueFilterTM,
  onChangeFilterTM,
  //SM
  valueFilterSM,
  onChangeFilterSM,
  //Road Survey
  valueFilterRoadSurvey,
  onChangeFilterRoadSurvey,
  //LOG Budget
  valueFilterLOGBudget,
  onChangeFilterLOGBudget,
  //Gate
  valueFilterGate,
  onChangeFilterGate,
  //Status
  valueFilterStatus,
  onChangeFilterStatus,
  //projects
  valueFilterProject,
  onChangeFilterProject,
  //client
  valueFilterClient,
  onChangeFilterClient,
  //country
  valueFilterCountry,
  onChangeFilterCountry,
  //Click pour reset
  onClickResetFilter

}){

  const styles = {
    filter: {
      //backgroundColor: 'red',
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap'
    },
    layout: {

    }
  }



  return (
    <>
    <div style={styles.filter}>


          <div>
              <TextField
                label='Filter Project'
                value={valueFilterProject}
                onChange={onChangeFilterProject}
                variant='outlined'
              />
          </div>

          <div>

              <CountrySelect
                  label='Filter Country'
                  value={valueFilterCountry}
                  onChange={onChangeFilterCountry}
                  data={countries}
              />
          </div>

          <div>

              <BladeSelect
                  label='Filter Blade'
                  value={valueFilterBlade}
                  onChange={onChangeFilterBlade}
                  data={dataBlades}
              />
          </div>
          <div>

              <TowerSelect
                  label='Filter Tower'
                  value={valueFilterTower}
                  onChange={onChangeFilterTower}
                  data={dataTowers}
              />
          </div>
          <div>

              <GenerationSelect
                  label='Filter Generation'
                  value={valueFilterGeneration}
                  onChange={onChangeFilterGeneration}
                  data={dataGeneration}
              />
          </div>
          <div>
              <TextField
                label='Filter Client'
                value={valueFilterClient}
                onChange={onChangeFilterClient}
                variant='outlined'
              />
          </div>
          <div>

              <PrioritySelect

                  label='Filter Priority'
                  value={valueFilterPriority}
                  onChange={onChangeFilterPriority}
                  data={dataPriorities}

              />
          </div>
          <div>

              <TMSelect

                  label='Filter Tender Manager'
                  value={valueFilterTM}
                  onChange={onChangeFilterTM}
                  data={dataTM}

              />
          </div>
          <div>


              <SMSelect

                  label='Filter Sales Manager'
                  value={valueFilterSM}
                  onChange={onChangeFilterSM}
                  data={dataSM}

              />

          </div>
          <div>


              <RoadSurveySelect

                  label='Filter Road Survey'
                  value={valueFilterRoadSurvey}
                  onChange={onChangeFilterRoadSurvey}
                  data={dataRoadSurvey}

              />

          </div>
          <div>


              <LogBudgetSelect

                  label='Filter Log Budget'
                  value={valueFilterLOGBudget}
                  onChange={onChangeFilterLOGBudget}
                  data={dataLOGBudget}

              />

          </div>
          <div>


              <GateSelect

                  label='Filter Gate'
                  value={valueFilterGate}
                  onChange={onChangeFilterGate}
                  data={dataGate}

              />
          </div>
          <div>

              <StatusSelect

                  label='Filter Status'
                  value={valueFilterStatus}
                  onChange={onChangeFilterStatus}
                  data={tenderStatus}

              />

          </div>

    </div>

    <Button
      onClick={onClickResetFilter}
      label='Reset Filter'

    />


    </>
  )

}
