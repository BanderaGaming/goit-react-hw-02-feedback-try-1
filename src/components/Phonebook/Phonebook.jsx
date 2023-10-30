import { nanoid } from "nanoid";
import { Component } from "react";

export class Phonebook extends Component {
    state = {
        contacts: [],
        name: ''
    };

    onSub = e => {
        e.preventDefault();
        console.log(nanoid());
        console.log(this.state);
        this.createContact(
            {
                name: this.state.name
            }
        );
    };

    onChange = ({ target }) => {
        this.setState({
            [target.name]: target.value
        });
        console.log(this.state.name);
    };

    createContact = (data) => {
        console.log(data);
        return (
            <><li>{data}</li></>
        )
    }

    render() {  
        
        return (
            <div>
            <form onSubmit={this.onSub}>
                <h2>Phonebook</h2>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" required onChange={this.onChange} value={this.state.name}/> 
                    <button type="submit">Add</button>
                </div>
                </form>
                <div>
                    <h4>Contacts</h4>
                    <ul name='list'>
            
                    </ul>
                </div>
</div>
        )

    }
        
    
}