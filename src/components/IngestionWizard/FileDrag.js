import React from 'react'
import Dropzone from 'react-dropzone'
import {processInputFileMetadata} from './avroschema.js'

const calcDataFields = (files,fields) =>
     processInputFileMetadata(files, (resData)=>{
        console.log(JSON.stringify(resData))
        resData.names.map((item, index) => {
           console.log(item)
           fields.push({nome : item, tipo : resData.props[index].type})
        }
        )
      })

class FileDrag extends React.Component {
  constructor() {
    super()
    this.state = { files: [] }
  }

  onDrop(files) {

    this.setState({
      files
    });
  }

  render() {
    return (
      <section>
        <div className="dropzone">
          <Dropzone onDrop={this.onDrop.bind(this)}>
            <p>Try dropping some files here, or click to select files to upload.</p>
          </Dropzone>
        </div>
        <aside>
          <h2>Dropped files</h2>
          <ul>
            {
              this.state.files.map(f => <li>{f.name} - {f.size} bytes</li>)
            }
          </ul>
        </aside>
      </section>
    );
  }
}

export default FileDrag 