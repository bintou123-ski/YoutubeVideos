import React from  "react";

class SearchBar extends React.Component{
    state={term:''}
    onInputChange = ()=>{

    }
    render(){
        return(
            <div className="searh-bar ui segment">
                    <form className="ui form">
                    <div className="field ">
                        <label>Videos Search</label>
                        <input
                        type="text"
                        value={this.state.term}
                        onChange={this.onInputChange}/>
                          </div>
                    </form>
            </div>
        )
    }
}

export default SearchBar;
