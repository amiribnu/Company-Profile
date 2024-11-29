import ProudITLogo from '../Images/proudit-logo.png';

export default function ApplicationLogo(props) {
    return (
        <img className={props.className} src={ProudITLogo} alt='Proud IT'/>
    );
}
