function Subheadline({ section, label}) {
    return (
        <div className="text-center">
            <div className="text-section">{ section }</div>
            <h2 className="text-highlight">{ label }</h2>
        </div>
    );  
}

export default Subheadline;