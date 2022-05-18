const InfoCards = () => {
    return (
        <div className="infocards">
            <div className="infocard" style={{
                backgroundColor: '#4EC5F9'
            }}>
                <span style={{
                    fontSize: 24, fontWeight: '600', color: '#ffffff'
                }}>Hospitals near by</span>
            </div>
            <div className="infocard" style={{
                backgroundColor: '#FFC452'
            }}>
                <span style={{
                    fontSize: 24, fontWeight: '600', color: '#ffffff'
                }}>Doctors near by</span>
            </div>
            <div className="infocard" style={{
                backgroundColor: '#FF9A61'
            }}>
                <span style={{
                    fontSize: 24, fontWeight: '600', color: '#ffffff'
                }}>Pricing Basis</span>
            </div >
        </div >
    )
}

export default InfoCards