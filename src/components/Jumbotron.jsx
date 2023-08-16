const Jumbotron = () => {
    const handleLearnMore = () => {
        const element = document.querySelector('.sound-section');
        window.scrollTo({
            top: element?.getBoundingClientRect().top,
            behavior: 'smooth',
        });
    };
    return (
        <div className='jumbotron-section wrapper'>
            <h2 className='title'>New</h2>
            <img src='./images/iphone-14.jpg' alt='' className='logo' />
            <p className='text'>Big and bigger</p>
            <span className='description'>
                From $41.62/mo. for 24 mo. or $999 before trade-in
            </span>
            <ul className='links'>
                <li>
                    <button className='button'>Buy</button>
                </li>
                <li>
                    <span href='' className='link' onClick={handleLearnMore}>
                        Learn more
                    </span>
                </li>
            </ul>
            <img src='./images/iphone-hand.png' alt='' className='iphone-img' />
        </div>
    );
};

export default Jumbotron;
