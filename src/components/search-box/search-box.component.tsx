
import './search-box.styles.css';

/*
Type and interface are pretty the same
the different between them is that interface
is extendable, overload and composible as showed below.

type allows you to union many different other types

type CandianAddress = {
    street:string,
    province:string
}

type USAAddress = {
    street:string,
    state: string
}

type MexicanAddress = {
    street:string,
    region: string
}

///type union
type NothAmericanAddress = CandianAddress | USAAddress | MexicanAddress;

const addresses: NothAmericanAddress = {
    street:'yrty',
    state:'new',
    province:'gdgdg',
    region:'north'
}

//Componse interfaces
interface ISearchBoxProps {
    className : string;
    placeholder?: string;
}

interface ISearchBoxProps {
    onChangeHandler: (event: React.ChangeEvent< HTMLInputElement>)=> void;
}  

If you are using functional programing it is better use type, if you are using OOP,
you can choose Interfaces, it is up to you to choose.

onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;

The ChangeEventHandler type is the same expression below, it is less verbose.
(event: React.ChangeEvent<HTMLInputElement>)=> void;

*/

type SearchBoxProps = {
    className : string;
    placeholder?: string;
    onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>)=> void;
    //onChangeHandler: onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
}

const SearchBox =({className,placeholder,onChangeHandler}: SearchBoxProps)=>  {
    return (
        <input 
            className={className}
            type="search"
            placeholder={placeholder}
            onChange={onChangeHandler}
        />
    );
}

export default  SearchBox;