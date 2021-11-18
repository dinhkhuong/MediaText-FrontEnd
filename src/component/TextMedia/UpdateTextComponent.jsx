import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik'
import TextDataService from '../../service/TextDataService'

class UpdateTextComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            content: this.props.match.params.content,
            artist: '',
            category: '',
            source: ''
        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(values) {
        let texts = {
            id: this.state.id,
            content: values.content,
            artist: values.artist,
            category: values.category,
            source: values.source
        }
            TextDataService.updateText(texts)
            .then(() => this.props.history.push('/TextRegistry'))
    }

    render() {
        let {id, content, artist, category, source} = this.state
        return(
            <div>
                <div className="jumbotron" style={{backgroundColor: "gray"}}>
                <h3 style={{textAlign: "center"}}>Update Text</h3>
                </div>
                <div className="container">
                    <Formik
                        initialValues={{id, content, artist, category, source}}
                        onSubmit={this.onSubmit}
                        enableReinitialize={true}
                    >
                        {
                            () => (
                                <Form>
                                    <fieldset className="form-group">
                                        <label>Id</label>
                                        <Field className="form-control" type="text" name="id" disabled />
                                    </fieldset>
                                    <fieldset>
                                        <label>Content</label>
                                        <Field className="form-control" type="text" name="content" />
                                    </fieldset>
                                    <fieldset>
                                        <label>Artist</label>
                                        <Field className="form-control" type="text" name="artist" />
                                    </fieldset>
                                    <fieldset>
                                        <label>Category</label>
                                        {/* <Field className="form-control" type="text" name="category" /> */}                                                 
                                        <Field className="form-control" name="category" as="select">
                                            <option value="Lyric">Lyric</option>
                                            <option value="Quote">Quote</option>
                                            <option value="Script">Script</option>
                                        </Field>                                        
                                    </fieldset>
                                    <fieldset>
                                        <label>Source</label>
                                        <Field className="form-control" type="text" name="source" />
                                    </fieldset><br/><br/>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        } 
                    </Formik><br/><br/>
                </div>
            </div>
        )
    }
}

export default UpdateTextComponent
