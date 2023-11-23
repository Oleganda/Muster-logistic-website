import logo from '../assets/truck.png';

export default function Header(props) {
    return (
        <header id='header'>
            <img src={logo} alt="Truck picture" width={100} />
            <h1>{props.title}</h1>
        </header>
    )

}