import React from 'react';
import {Link} from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: "", 
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.processForm(this.state).then(() => this.props.history.push("/browse"));
    }

    update(field){
        return e => this.setState({
            [field]: e.target.value
         })
    }

    renderErrors(){
        return(
            <ul className="session-form-errors">
                {this.props.errors.map( (error, i) => {
                    return(
                        <li key={i}>
                            {error}
                        </li>
                    )
                })}
            </ul>
        )
    }

    content(){
        return (
            <div className="session-form-container">
                <form onSubmit={this.handleSubmit}>
                    <div className="session-form">
                        <h1 className="session-form-title">{this.props.formType}</h1>
                        <br/>
                        <label>
                            <input className="session-form-input" type="text" placeholder="Email" value={this.state.email} onChange={this.update('email')} />
                        </label>
                        <br/>
                        <br/>
                        <label>
                            <input className="session-form-input" type="password" placeholder="Password" value={this.state.password} onChange={this.update('password')} />
                        </label>
                        <br/>
                        <br/>
                        {this.renderErrors()}
                        <input type="submit" className="session-submit" value={this.props.formType} />
                    </div>
                </form>
                <div className="session-form-footer">
                    <label>
                        New to Netflix?
                        <Link to="/" className="session-signup-link"> Sign up now.</Link>
                    </label>
                </div>
            </div>
        )
    }

    render(){
        const content = this.content();
        return(
            <div className="splash-background">
                {content}       
            </div>
        )
    }
}

export default SessionForm;