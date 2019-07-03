import React, { Component } from 'react';
import Form from "../Form";
import BlogPost from "../BlogPost";
import Button from "../Button";
// just have to require (import) the folder

// function Main() {
//     return <h1>Hello PARTY</h1>
// }
// // React.createElement('h1', {value: 'Hello'})
// // the above commented-out line is the SAME stuff as function Main()

// export default Main


export default class Main extends Component {
    // new school way of defining state:
    state = {
        isPosting: false,
        // for development speed, set isPosting to true, so we don't have to press the toggle button
        name: 'Albert',
        posts: [
            {
                title: 'My Day',
                author: 'Albert',
                post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            }
        ]
    }

    // the bread and butter of React is that your entire application is paying attention
    // to the STATE and will change the DOM if the state changes

    // whenever we're dealing with UI, we're most likely going to be using a 'handle<Verb>'
    handleClick = (event) => {
        // this.setState is the only way we can mutate state
        this.setState({     // note how we wrap the curly brackets in parentheses because we break across lines
            isPosting: !this.state.isPosting
        })
    }

    handleDeletePost = (postIndex) => {
        // we know that we cannot mutate state directly
        const newStateArray = this.state.posts.filter(
            (elem, index) => index !== postIndex 
            // NOTE: we want to be comparing the index TO postIndex
        );
        this.setState({
            posts: newStateArray
        });
    }

    handleAddPost= ({title, author, post}) => {
        this.setState({
            posts:[{title, author, post}, ...this.state.posts]
        })
    }


    render() {
        const posts = this.state.posts.map((post, index) => {
            // remember, map creates a WHOLE NEW array (that is mutated with whatever you specify in the cb)
            return (
                <BlogPost 
                    // post={post}
                    {...post}
                    // because we use the spread operator/syntax, we are DIRECTLY passing in as props
                    // all of the keys that belong to a post object (i.e. title, author, post) 
                    // again, this keeps things SUPER dry, and also clearly communicates to other 
                    // people who look at your code, what exactly they have to handle
                    index={index}
                    key={index}
                    handleDeletePost={this.handleDeletePost}
                />
            )
        })


        return (
            <div>
                <header>
                    <h1>Party Blog</h1>
                </header>

                <section>
                    <Button handleClick={this.handleClick} type="Add Post" />
                    {/* in a CLASS component, you will NEED to specify 'this' */}
                    {/* {this.state.post[0].post}  hard-coding is bad; instead, do:*/}
                    {!!this.state.isPosting ? <Form handleAddPost={this.handleAddPost}/> : null}
                    {/* above is called CONDITIONAL RENDERING */}
                    <ul>{posts}</ul>
                </section>

                {/* <h1>Hello, {this.state.name}</h1> */}
                {/* if we don't call render(), we're not telling React to put anything up
                    in the browser
                    we INJECT JS expressions into JSX with {} */}
                {/* <button onClick={this.handleClick}>Click Me</button> */}
                {/* not EVERY element in the DOM is in React; also, make sure that you don't
                    INVOKE handleClick; leave it as a CB */}
            </div>
            //  we can only return ONE thing; therefore, we need to wrap everything in a div and
            // then have whatever you want inside the div (or w/e wrapper you have)
        )
    }
}