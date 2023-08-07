export default function Button ({ className, id, text }) {
    return (
        <button className={className}
            onClick="navSelected('services')"
            id={id}>{text}</button>

        // <button className="btn btn-primary mb-1 mb-md-0 mr-1 mobile-w-100"
        //     onclick="navSelected('services')"
        //     id="btn-my-works">My Services</button>
    )
}