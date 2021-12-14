import React, { useState, useCallback } from "react";

const debounceFn = (func, delay) => {
    let timer;
    return function() {
        let self = this;
        let args= arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(self, args)
        }, delay)
    }
}

const Autocomplete = ({ data, onChange }) => {
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    // Split text on highlight term, include term itself into parts
    const getHighlightedText = (text, highlight) => {
        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        return <span>{parts.map((part, i) =>
            part.toLowerCase() === highlight.toLowerCase() ? <b key={i}>{part}</b> : part)}
        </span>;
    }

    const debounceSearch = useCallback(debounceFn((nextValue) => {
        onChange(nextValue)
        setLoading(false)
    }, 500), [])

    const oncHangeHandler = e => {
        const input = e.target.value;
        setInput(input)
        setLoading(true)
        debounceSearch(input);
    };

    const renderAutocomplete = () => {
        if (data.length) {
            return (
                <ul className="autocomplete">
                    {data.map((suggestion, index) => (
                        <li key={index}>
                            {getHighlightedText(suggestion.title, input)}
                        </li>
                    ))}
                </ul>
            );
        } else {
            return (
            <div className="no-autocomplete">
                <em>Not found</em>
            </div>
            );
        }
    }

    return (
        <div className="wrapper-autocomplete">
            <input
                type="text"
                onChange={oncHangeHandler}
                value={input}
                placeholder="Search your favorite movies"
            />
            {!loading ? renderAutocomplete(): <p>Loading...</p>}
        </div>
    );
}

export default Autocomplete;