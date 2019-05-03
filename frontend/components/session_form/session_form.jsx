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
        this.demoSubmit = this.demoSubmit.bind(this);
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

    demoSubmit(e){
        e.preventDefault();
        const demoUser = {
            email: "demo@fletnix.com",
            password: "password"
        }
        this.props.processDemo(demoUser).then(() => this.props.history.push("/browse"));
    }

    componentDidMount(){
        this.props.clearErrors();
    }


    sessionFormFooter(){
            if(this.props.location.pathname === "/login"){
                return (
                <div className="session-form-footer">
                    <label className="session-form-footer-label">
                        New to Fletnix?
                        <Link to="/signup" className="session-signup-link"> Sign up now.</Link>
                    </label>
                </div>
            )}
    }

    content(){
        return (
            <div className="session-form-container">
                <form className="session-form-outside" onSubmit={this.handleSubmit}>
                    <div className="session-form-inside">
                        <h1 className="session-form-title">{this.props.formType}</h1>
                            <br/>
                        <label>
                            <input className="session-form-input" type="text" placeholder="Email" value={this.state.email} onChange={this.update('email')} />
                        </label>
                            <br/>
                        <div className="session-form-errors">&nbsp;{this.props.errors["email"]}</div>
                            <br/>
                        <label>
                            <input className="session-form-input" type="password" placeholder="Password" value={this.state.password} onChange={this.update('password')} />
                        </label>
                            <br/>
                        <div className="session-form-errors">&nbsp;{this.props.errors["password"]}</div> 
                        <div className="session-form-errors">&nbsp;{this.props.errors["login"]}</div> 
                        <input type="submit" className="session-submit" value={this.props.formType} />
                        <button onClick={this.demoSubmit} className="session-demo-button">Demo</button>
                    </div>
                </form>
                {this.sessionFormFooter()}
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