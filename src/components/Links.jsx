
const Links = ({links}) => {
    const {name, path} = links
    return (
        <li className=''>
            <a className='hover:bg-lime-300 px-10 py-2' href={path}>{name}</a>
        </li>
    );
};

export default Links;