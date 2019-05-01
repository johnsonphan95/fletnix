import React from 'react';

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
        this.props.processForm(this.state);
    }

    update(field){
        return e => this.setState({
            [field]: e.target.value
         })
    }

    renderErrors(){
        return(
            <ul>
                {this.props.errors.map( (error, i) => {
                    return(
                        <li key={i}>
                            {error}
                            <h1>ERROR</h1>
                        </li>
                    )
                })}
            </ul>
        )
    }

    render(){
        return(
            <div className="login-form-container">
                <h1>{this.props.formType}</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="login-form">
                        {this.renderErrors()}
                        <label>Email
                            <input type="text" value={this.state.email} onChange={this.update('email')}/>
                        </label>
                        <label>Password
                            <input type="password" value={this.state.password} onChange={this.update('password')}/>
                        </label>
                    </div>
                    <input type="submit" className="session-submit" value={this.props.formType}/>
                </form>
            </div>
        )
    }
}

export default SessionForm;