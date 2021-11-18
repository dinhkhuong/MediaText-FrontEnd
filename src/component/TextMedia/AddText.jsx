import React, {Component} from 'react'
import TextDataService from '../../service/TextDataService'

class AddText extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            content: '',
            artist: '',
            category: '',
            source: '',
            
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit() {
        let text = {
            id: this.state.id,
            content: this.state.content,
            artist: this.state.artist,
            category: this.state.category,
            source: this.state.source
        }
        TextDataService.createText(text)
            .then(this.props.history.push(`/TextRegistry`))

        

    }

    render() {
        return(
            <div>
                <div className="jumbotron" style={{backgroundColor: "gray"}}>
                <h3 style={{textAlign: "center"}}>Add Text</h3>
                </div>
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>ID:</label>
                            <input className="form-control" type="text" value={this.state.id} disabled/>
                        </div>
                        <div>
                            <label>Content:</label>
                            <input className="form-control" type="text" name="content" onChange={this.handleChange}/>
                        </div>
                        <div>
                            <label>Artist:</label>
                            <input className="form-control" type="text" name="artist" onChange={this.handleChange}/>
                        </div>       
                        <div>
                            <label>Category:</label>
                            {/* <input className="form-control" type="text" name="category" onChange={this.handleChange} /> */}
                            <select className="form-select" id="inputGroupSelect01" name="category" onChange={this.handleChange}>
                                <option selected>Choose...</option>
                                <option value="Lyric">Lyric</option>
                                <option value="Quote">Quote</option>
                                <option value="Script">Script</option>
                            </select>                        
                       
                        </div>      
                        <div>
                            <label>Source:</label>
                            <input className="form-control" type="text" name="source" onChange={this.handleChange}/>
                        </div><br/><br/>
                        <button className="btn btn-success" type="submit">Submit</button><br/><br/>
                    </form><br/><br/>
                </div>
            </div>
        )
    }
}

export default AddText
