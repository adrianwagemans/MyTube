import React from 'react';

class SearchBar extends React.Component {
    state = {searchTerm: ""}

    onInputChange=(e)=>{
        this.setState({searchTerm: e.target.value})

    };

    onFormSubmit = (event) =>{
        event.preventDefault();
        this.props.submitSeacrchTerm(this.state.searchTerm)
    };
    

    render () {
        return (
            <div className=' search-bar ui segment bar' > 
                
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                    <label>
                        Seach here for videos
                    </label>
                
                    <input type="text" value={this.state.searchTerm} onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;