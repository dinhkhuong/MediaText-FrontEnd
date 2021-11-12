import React, { Component } from 'react';
//import {Link} from 'react-router-dom'
import TextDataService from '../../service/TextDataService';

//class WelcomeComponent extends Component {
class SearchComponent extends Component {
    constructor(props) {
        super(props)
        this.state={
            find: this.props.match.params.content,
            texts:[]
        }
        this.refreshTextRegistry = this.refreshTextRegistry.bind(this)
    }
    componentDidMount() {
        this.refreshTextRegistry();
    }
    refreshTextRegistry() {
        let aw = this.state.find      
            TextDataService.searchText(aw)
            .then(
                response => {
                    this.setState({
                        texts: response.data,
                    })
                }
            )      
    }
    render() {
        return(
            <div className="container">
                <br/><br/>
                <div className="jumbotron" style={{textAlign:"center"}}>
                    <table className="table table-striped">                                 
                        <thead>                           
                                <tr className="table-dark" style={{textAlign: "center"}}>    
                                <th>Id</th>
                                <th>content</th>
                                <th>artist</th>
                                <th>category</th>
                                <th>source</th>
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
                                    </tr>
                               )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default SearchComponent;  
