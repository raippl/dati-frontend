import React from 'react';
import WizardForm from '../components/IngestionWizard/WizardForm'
import {getJsonDataschema} from '../components/IngestionWizard/inputform_reader.js'


const transformer = values => {
  var data = {}
  var dataschema = 'dataschema'
  var avro = 'avro'
  var operational = 'operational'
  data[dataschema] = {}
  data[dataschema][avro] = {}
  data[dataschema][avro]['namespace'] = values.namespace
  data[dataschema][avro]['name'] = values.name
  data[dataschema][avro]['aliases'] = values.aliases
  data[dataschema][avro]['fields'] =  []
  data[dataschema][avro]["`type`"] = "record"
  values.tests.map(function(item){
    var name = item.nome
    var tipo = item.tipo
    var obj = {'name' : name, "`type`" : tipo}
    data[dataschema][avro]['fields'].push(obj)
  })
  data[operational] = {}
  data[operational]['uri'] = values.uri
  data[operational]['group_own'] = values.ownership
  data[operational]['is_std'] = values.is_std
  if (!values.is_std){
    data[operational]['is_std'] = false
  }
  var std_schema = 'std_schema'
  data[operational][std_schema] = {}
  data[operational][std_schema]['std_uri'] = values.uri_associato
  data[operational]['read_type'] = values.read_type
  if (!values.read_type){
      data[operational]['read_type'] = 'update'
  }
  console.log(JSON.stringify(values))
  console.log(JSON.stringify(data))
  return data
}

const showResults = values =>
  new Promise(resolve => {
    setTimeout(() => {
      // simulate server latency
      //window.alert(values)
      //window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
      const transformed = transformer(values)
      //console.log(JSON.stringify(transformed))
      window.alert(JSON.stringify(transformed))
      resolve()
    }, 500)
  })

class WizardContainer extends React.Component {
  render() {
    return (
       <WizardForm onSubmit={showResults} />
    );
  }
}

export default WizardContainer;
