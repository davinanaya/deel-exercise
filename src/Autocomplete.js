import React, { Component } from "react";
import { debounceFn } from "./util";

class Autocomplete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            loading: false
        };
        this.oncHangeHandler = this.oncHangeHandler.bind(this);
    }

    // Split text on highlight term, include term itself into parts
    getHighlightedText(text, highlight) {
        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        return <span>{parts.map((part, i) =>
            part.toLowerCase() === highlight.toLowerCase() ? <b key={i}>{part}</b> : part)}
        </span>;
    }

    debounceSearch = debounceFn((nextValue) => {
        this.props.onChange(nextValue);
        this.setState({ loading: false });
    }, 500)

    oncHangeHandler(e) {
        const input = e.target.value;
        this.setState({ input, loading: true });
        this.debounceSearch(input);
    };

    renderAutocomplete() {
        if (this.props.data.length) {
            return (
                <ul className="autocomplete">
                    {this.props.data.map((suggestion, index) => (
                        <li key={index}>
                            {this.getHighlightedText(suggestion.title, this.state.input)}
                        </li>
                    ))}
                </ul>
            );
        } else if (this.state.input && !this.props.data.length) {
            return (
            <div className="no-autocomplete">
                <em>Not found</em>
            </div>
            );
        }
    }

    render() {
        return (
            <div className="wrapper-autocomplete">
                <input
                    type="text"
                    onChange={this.oncHangeHandler}
                    value={this.state.input}
                    placeholder="Search your favorite movies"
                />
                {!this.state.loading ? this.renderAutocomplete(): <p>Loading...</p>}
            </div>
        );
    }
}

export default Autocomplete;