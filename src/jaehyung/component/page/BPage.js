import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Bpage.css';
import 'animate.css'
import ButtonGroup from '../ButtonGroup';

const BPage = () => {
    const [message, setMessage] = useState("");
    const { alt } = useParams();
    let author = null;
    let particle = null;
    if(alt === 'andy') {
        author = '앤디 워홀';
        particle = '을';
    } else if (alt === 'goch') {
        author = '빈센트 반 고흐'
        particle = '를';
    } else {
        author = '알 수 없는 작가';
        particle = '를'
    }

    useEffect(() => {
        setMessage(`${author} ${particle} 얼마나 아시나요?`);
    }, [author, particle]);
    const bpageFunction = () => {
        setMessage("전시회를 얼마나 자주 가시나요?");
    }
    return (
        <div className="text">
            <div className="animated">
                <div className="inner-text">
                 {message}
                    <ButtonGroup bpag={bpageFunction}></ButtonGroup>
                </div>
            </div>
        </div>
    );
};

export default BPage;