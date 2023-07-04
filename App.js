

import './App.css';
import { registerLicense } from "@syncfusion/ej2-base";
import { ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { Toolbar, Edit } from '@syncfusion/ej2-react-grids';
import data from './dataSource.json';
import AddForm from './Components/AddForm';
import React, { useState, useRef, useEffect } from 'react';
import { Dialog, DialogComponent } from '@syncfusion/ej2-react-popups';

registerLicense("ORg4AjUWIQA/Gnt2VFhiQlBEfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hSn5VdEZjXHtadHBRRmZe");


function App() {

  const toolbarOptions = [{ text: 'Add-Data', align: 'right', id: 'AddData', mode: 'Dialog'}]
  const editOptions = { allowAdding: true, mode: 'Dialog'};

  const [isClicked, setIsClicked] = useState(false)
  


  const clickHandler = (args) => {
    if (args.item.id === 'AddData') {
      setIsClicked(true);
    }
  }

  const dataFun=(formValues)=>{
    console.log(formValues);
const newVal=formValues;
data.push(newVal);
console.log(data);
setIsClicked(false);
  }
 
 
  

  const backFun=(value)=>{
    setIsClicked(false);
  }
  
  useEffect(()=>{
    
  },[data])


  return (
    <div style={{ margin: '10%', marginTop: '5%' }}>
       <h2 style={{ textAlign: 'center' }}>Factory Details</h2>

       <GridComponent
        dataSource={data}
        toolbar={toolbarOptions}
        editSettings={editOptions}
        toolbarClick={clickHandler}
        gridLines="Both" 
        className='e-grid'
         >
        <ColumnsDirective >
          <ColumnDirective field='Factory' width='100' textAlign="center"  />
          <ColumnDirective field='Month' width='30' textAlign="center" />
          <ColumnDirective field='OperMin' width='30' textAlign="center" />
          <ColumnDirective field='MachineMin' width='30' textAlign="center" />
          <ColumnDirective field='WorkingDays' width='30' textAlign="center" />
        </ColumnsDirective>
        <Inject services={[Toolbar, Edit]} />
      </GridComponent>


    {isClicked && <AddForm AddData={dataFun} Back={backFun}/>}
    </div>
  )

}

export default App;
