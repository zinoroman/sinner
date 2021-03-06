import React from 'react';
import { connect } from 'react-redux';

import { addSins } from '../actions/';

import { infernoData } from '../localData/data';

import SinInfo from '../components/SinInfo';


class AddSins extends React.Component{
    constructor(props) {
        super(props);
        this.addSins = this.addSins.bind(this);
        this.form = {};
        this.state = {circle: 1};
    }

    select(event){
        this.setState({
            circle: this.form.select.value
        })
    }

    addSins(event){
        event.preventDefault();
        let name = this.form.input.value;
        let category = this.form.select.selectedOptions[0].text;
        let circle = this.form.select.value;
        let additional = this.form.textarea.value;
        this.props.addSins(name, category, circle, additional)
    }
        
    render(){
        return (
            <div>
                <form className='add-sins'
                     onSubmit={this.addSins}>
                    <div className='add-sins__group'>
                        <h1>
                            Що Ви накоїли?
                        </h1>
                        <input className='add-sins__input'
                            placeholder='Наприклад "збрехав"'
                            ref={(input) => this.form.input = input} />
                        <textarea ref={(textarea) => this.form.textarea = textarea}
                                  placeholder='Коментар'
                                  rows='4'
                                  className='add-sins__input' />
                    </div>
                    <div className='add-sins__group'>
                        <h2>
                            Оберіть тип
                        </h2>
                        <select name='categories'
                                onChange={this.select.bind(this)}
                                ref={(select) => this.form.select = select}
                                className='add-sins__select'>
                            {infernoData.map((item)=>{
                                return ( 
                                    <option key={item.circle}
                                            value={item.circle}>
                                        {item.name}
                                    </option>
                                )}
                            )}
                        </select>
                    </div>
                    <div className='add-sins__group'>
                        <button className='add-sins__submit'>
                            Додати
                        </button>
                    </div>
                </form>
                <SinInfo circle={this.state.circle} />
            </div>
        )
    }
} 

const mapStateToProps = state => {
    return {
        sins: state.sins
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addSins: (name, category, circle, additional) => {
            dispatch(addSins(name, category, circle, additional))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddSins);