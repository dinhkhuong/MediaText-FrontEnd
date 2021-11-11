import React, { Component } from 'react'
import TextDataService from '../../service/TestDataService';

class TextRegistryComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            texts: []
        }
        this.refreshTextRegistry = this.refreshTextRegistry.bind(this)
        this.deleteTextClicked = this.deleteTextClicked.bind(this)
        this.upDateTextClicked = this.upDateTextClicked.bind(this)
        this.addTextClicked = this.addTextClicked.bind(this)
    }

    componentDidMount() {
        this.refreshTextRegistry();
    }

    refreshTextRegistry() {
        setTimeout(() => {
            TextDataService.retrieveAllTexts()
            .then(
                response => {
                    this.setState({
                        texts: response.data,
                    })
                }
            )
        }, 250)
    }

    deleteTextClicked(id, content) {
        console.log('Delete Text Clicked')
        TextDataService.deleteText(id)
        .then(
            response => {
                this.setState({message: `Deleted Text: ${content}`})
                alert(this.state.message)
                this.refreshTextRegistry();
            }
        )
    }
    
    upDateTextClicked(id, content) {
        console.log('Update Text Clicked')
        this.props.history.push(`/text/${id}/${content}`)
    }

    addTextClicked() {
        console.log('Add AddText Clicked')
        this.props.history.push(`/theText/-1`)
    }
 
   render() {
       return(
           <div className="container">
               <h1 style={{textAlign:"center"}}>Text Registry</h1><br/>
               <div className="jumbotron sticky-top"  style={{textAlign: "center",  color: "white"}}>

                    <table className="table table-striped">         
                       <thead>
                            <tr class="table-dark" style={{textAlign: "center"}}>    
                               <th>Id</th>
                               <th>content</th>
                               <th>artist</th>
                               <th>category</th>
                               <th>source</th>
                               <th></th>
                               <th>
                                    <div >
                                        <br/>
                                        <button className="btn btn-primary" onClick={this.addTextClicked}>Add Text</button>
                                    </div>
                               </th>
                           </tr>
                       </thead>
                       <tbody>
                           {
                               this.state.texts.map (
                                   texts => 
                                   <tr style={{textAlign: "center"}} key={texts.id}>
                                       <td>{texts.id}</td>
                                       <td>{texts.content}</td>
                                       <td>{texts.artist}</td>
                                       <td>{texts.category}</td>
                                       <td>{texts.source}</td>
                                       <td><button className="btn btn-warning" onClick={() => this.deleteTextClicked(texts.id, texts.content)}>Delete</button></td>
                                       <td><button className="btn btn-success" onClick={() => this.upDateTextClicked(texts.id, texts.content)}>Update</button></td>
                                   </tr>
                               )
                           }
                       </tbody>
                   </table>
                   <br/>
                   <br/>
               </div>
           </div>
       )
   } 
}

export default TextRegistryComponent;
