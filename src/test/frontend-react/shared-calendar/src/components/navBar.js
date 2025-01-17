import './navBar.js.css';

export default function NavBar () {
    let component = (
        <div class="navbar">
            <NavBarItem tabName="Calendar" isSelected={true}/> 
        </div>
    );

    return component;
}

function NavBarItem (tabName, isSelected) {
    let component = (
        <div class="navbaritem" stlye={`background-color: ${isSelected? 'blue':'aquamarine'};`}>
            {tabName}
        </div>
    );

    return component;
}
