import { useState } from "react"

export const AddCategory = ({ onNewCategory }) =>{

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ( event ) =>{
        setInputValue( event.target.value );
    }

    const onSubmit = (event) =>{

        event.preventDefault();
        if( inputValue.trim().length <= 0) return;

        //setCategories(categories => [...categories, inputValue]);
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input 
                type="text"
                placeholder="Buscar Gift"
                value={ inputValue }
                //onChange = { (event) => onInputChange( event )}
                onChange = { onInputChange }
            />
        </form>
    )

}