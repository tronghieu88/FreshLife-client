import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import './Policy.css';
import { faBook } from '@fortawesome/free-solid-svg-icons';

const Policy = () => {
    const [policies, setPolicies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responsePolicy = await fetch('../../Policy/data/policy.json');
                const dataPolicy = await responsePolicy.json();
                setPolicies(dataPolicy);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div>
            <div className="policy-container">
                <div>
                    <div className='path-policy'>
                        <a href={'/'}>Trang chủ {'> '} </a>
                        <a href={'/Policy'}>Chính sách </a>
                    </div>
                </div>
                <div>
                    <p>
                        <b className='b_policy'><FontAwesomeIcon icon={faBook} style={{ color: "#35a63b", marginRight: 10, marginTop: 30 }} />
                            CHÍNH SÁCH VÀ QUY ĐỊNH</b>
                    </p>
                </div>
                <hr />
                <div>
                    {policies.map((policy, index) => (
                        <div key={index} className="policy-item">
                            <h3 className='title_policy'><FontAwesomeIcon icon={faLeaf} style={{ color: "#ffffff", margin: 10 }} />
                                {policy.title}</h3>
                            {Array.isArray(policy.content) ? (
                                policy.content.map((paragraph, subIndex) => (
                                    <p className='text_policy' key={subIndex}>{paragraph}</p>
                                ))
                            ) : (
                                <span>{policy.content}</span>
                            )}
                            {policy.subitems && (
                                <ul>
                                    {policy.subitems.map((item, subIndex) => (
                                        <li key={subIndex}>{item}</li>
                                    ))}
                                </ul>
                            )}
                            <div>
                                <hr className='hr_policy' />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Policy;
