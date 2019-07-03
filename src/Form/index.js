import React, { Component } from "react";


export default class Form extends Component {
    state = {
        title: '',
        author: '',
        post: ''
    }

    handleChange = event => {
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value
            // the above is called COMPUTED INPUT VALUES; very dynamic, very fucking smart
        });
    }

    // handleSubmit = event => {
    //     // const {handleAddPost} = this.props;
    //     console.log('form index.js line 19; this event fired');
    //     event.preventDefault();
    //     this.props.handleAddPost(this.state);

    // }
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleAddPost(this.state);
        this.setState({
            title: "",
            author: "",
            post: ""
        });
    }

    render() {
        // TODO: form goes here and we need the following inputs
        // title, author, post
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="row">
                    <label className="six columns">Title:
                        <input
                            onChange={this.handleChange}
                            name='title'
                            value={this.state.title}
                            className="u-full-width" 
                        />
                    </label>

                    <label className="six columns">Author:
                        <input className="u-full-width" onChange={this.handleChange} name='author' value={this.state.author} />
                    </label>
                </div>

                <div>
                    <label>Post:
                        <textarea className="u-full-width" onChange={this.handleChange} name='post' value={this.state.post} />
                    </label>
                </div>

                <div>
                    <input type="submit" />
                </div>
            </form>
        );
    };
}