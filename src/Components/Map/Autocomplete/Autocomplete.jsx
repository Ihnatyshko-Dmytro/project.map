import './style.scss';
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import { useEffect } from 'react';

export const Autocomplete = ({ isLoaded }) => {

    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        init,
        clearSuggestions,
      } = usePlacesAutocomplete({
        initOnMount: false,
        debounce: 300,
      });

      const ref = useOnclickOutside(() => {
        clearSuggestions();
      });
    
      const handleInput = (e) => {
        setValue(e.target.value);
      };
    
      const handleSelect =
        ({ description }) =>
        () => {
          setValue(description, false);
          clearSuggestions();

          getGeocode({ address: description }).then((results) => {
            const { lat, lng } = getLatLng(results[0]);
            console.log("📍 Coordinates: ", { lat, lng });
          });
        };
    
      const renderSuggestions = () =>
        data.map((suggestion) => {
          const {
            place_id,
            structured_formatting: { main_text, secondary_text },
          } = suggestion;
    
          return (
            <li className="listItem" key={place_id} onClick={handleSelect(suggestion)}>
              <strong>{main_text}</strong> <small>{secondary_text}</small>
            </li>
          );
        });

        useEffect(() => {
          if(isLoaded) {
            init();
          }
        }, [isLoaded, init])

    return (
        <div className="autocomplete" ref={ref}>
            <input
            type="text" 
            className="input"
            value={value}
            onChange={handleInput}
            disabled={!ready}
            placeholder="Where?" />
            {status === "OK" && <ul className='suggestions'>{renderSuggestions()}</ul>}
        </div>
    )
}