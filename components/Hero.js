import Image from 'next/image'
import HeroSvg from '../public/static/herosvg.svg'

const Hero = () => {
    return (
        <div className="hero">
            <div style={{ display: 'flex', flexDirection: 'column', height: 500, justifyContent: 'space-around' }}>
                <div className='heroheader'>
                    Get Valuable Data that you need
                </div>
                <div style={{ fontSize: 16, width: 378, height: 44, fontWeight: '600' }}>
                    The data you need to protect your closed ones. The one software you need
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={{ width: 147, height: 51, backgroundColor: '#FF792E', padding: '12px 24px', color: '#ffffff', borderRadius: 4 }}>
                        Book Now
                    </div>
                    <div style={{ width: 147, height: 51, padding: '12px 24px', color: '#FF792E', borderRadius: 4 }}>
                        Explore
                    </div>
                </div>
            </div>
            <div>
                <Image
                    src={HeroSvg}
                    alt="Picture of the author"
                    width={600}
                    height={500}
                />
            </div>
        </div >
    )
}

export default Hero