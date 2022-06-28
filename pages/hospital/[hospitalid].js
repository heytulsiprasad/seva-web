import React from 'react'
import { useRouter } from 'next/router'
import { hospitaltext } from '../../utils/data'
import StarRatings from 'react-star-ratings'
import Link from 'next/link'

export default function Hospital() {
    const router = useRouter()
    const { hospitalid } = router.query
    console.log(hospitalid)
    return (
        <div>
            <div>
                <img
                    src='https://static01.nyt.com/images/2017/02/16/well/doctors-hospital-design/doctors-hospital-design-superJumbo.jpg'
                    className='hospitalheroimage'
                />

                <div className='hospitalmain'>
                    <div style={{ fontWeight: '600', fontSize: 20 }}>
                        {hospitalid}
                    </div>

                    <div style={{ fontWeight: '400', fontSize: 16 }}>
                        {hospitaltext}
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 50, flexWrap: 'wrap' }}>
                        <div style={{ width: 100, display: 'flex', flexDirection: 'column', marginBottom: 10, marginRight: 10 }}>
                            <div style={{ fontSize: 12, fontWeight: '600', color: '#8D8D8D' }}>Minimum Charge</div>
                            <div style={{ fontSize: 16, fontWeight: '600', color: '#606060' }}>500</div>
                        </div>
                        <div style={{ width: 100, display: 'flex', flexDirection: 'column', marginBottom: 10, marginRight: 10 }}>
                            <div style={{ fontSize: 12, fontWeight: '600', color: '#8D8D8D' }}>Timing</div>
                            <div style={{ fontSize: 16, fontWeight: '600', color: '#606060' }}>9:00 AM -
                                10:00 PM</div>
                        </div>
                        <div style={{ width: 100, display: 'flex', flexDirection: 'column', marginBottom: 10, marginRight: 10 }}>
                            <div style={{ fontSize: 12, fontWeight: '600', color: '#8D8D8D' }}>Current Queue</div>
                            <div style={{ fontSize: 32, fontWeight: '700', color: '#3D7FFF' }}>24</div>
                        </div>
                        <div style={{ width: 200, display: 'flex', flexDirection: 'column', marginBottom: 10, marginRight: 10 }}>
                            <div style={{ fontSize: 12, fontWeight: '600', color: '#8D8D8D' }}>Location</div>
                            <div style={{ fontSize: 16, fontWeight: '600', color: '#606060', marginBottom: 20 }}>Gandhi Nagar, Delhi</div>
                            <StarRatings
                                rating={4}
                                starRatedColor="#F3EA00"
                                starDimension='20px'
                                numberOfStars={5}
                                name='rating'
                            />
                        </div>
                        <div style={{ width: 100, display: 'flex', flexDirection: 'column', marginBottom: 10, marginRight: 10, justifyContent: 'space-between', height: 100 }}>
                            <Link href={'/'}>
                                <a className='my-custom-button2'>
                                    Book Now
                                </a>
                            </Link>
                            <Link href={'/'}>
                                <a className='my-custom-button3'>
                                    See Map
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
